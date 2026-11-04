import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const account = '736654693886';
const domain = 'qcon26.hatchman76.com';
const origin = `${domain}.s3.us-east-1.amazonaws.com`;
const distributionId = 'EQCON26TEST';
const validDistribution = {
  Distribution: {
    ARN: `arn:aws:cloudfront::${account}:distribution/${distributionId}`,
    Status: 'Deployed',
    DistributionConfig: {
      Enabled: true,
      Aliases: { Items: [domain] },
      Origins: { Items: [{ DomainName: origin, OriginAccessControlId: 'EOACTEST' }] },
      DefaultCacheBehavior: { ViewerProtocolPolicy: 'redirect-to-https' },
    },
  },
};

// Every AWS/Terraform command runs this local stub. There is no network fallback.
const commandStub = `#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');
const executable = process.argv[1];
const command = path.basename(executable) === 'aws' ? 'aws' : 'terraform';
const args = process.argv.slice(2);
fs.appendFileSync(process.env.MOCK_LOG, JSON.stringify({ command, executable, args }) + '\\n');
if (command === 'terraform') {
  if (args.join(' ') === 'version -json') {
    const version = path.basename(executable) === 'terraform'
      ? process.env.MOCK_TERRAFORM_VERSION
      : process.env.MOCK_OVERRIDE_TERRAFORM_VERSION;
    process.stdout.write(JSON.stringify({ terraform_version: version }));
    process.exit(0);
  }
  if (args.slice(0, 3).join(' ') !== '-chdir=terraform output -raw') process.exit(90);
  const outputs = JSON.parse(process.env.MOCK_OUTPUTS);
  if (!(args[3] in outputs)) process.exit(91);
  process.stdout.write(outputs[args[3]]);
} else {
  if (args[0] !== '--profile' || args[1] !== 'hatchman76') process.exit(92);
  const operation = args.slice(2, 4).join(' ');
  if (operation === 'sts get-caller-identity') process.stdout.write(process.env.MOCK_ACCOUNT);
  else if (operation === 'cloudfront get-distribution') process.stdout.write(process.env.MOCK_DISTRIBUTION);
  else if (!['s3 sync', 's3 cp', 'cloudfront create-invalidation'].includes(operation)) process.exit(93);
}
`;

function runDeployment({
  profile = 'hatchman76', identity = account, outputs = {}, distribution = validDistribution,
  terraformVersion = '1.17.1', terraformOverride, overrideVersion = '1.17.1',
} = {}) {
  const temporaryDirectory = mkdtempSync(join(tmpdir(), 'qcon26-deploy-test-'));
  const log = join(temporaryDirectory, 'commands.jsonl');
  for (const command of ['aws', 'terraform']) {
    writeFileSync(join(temporaryDirectory, command), commandStub, { mode: 0o755 });
  }
  let overridePath = '';
  if (terraformOverride === 'spaces') {
    overridePath = join(temporaryDirectory, 'Terraform with spaces');
    writeFileSync(overridePath, commandStub, { mode: 0o755 });
  } else if (terraformOverride === 'missing') {
    overridePath = join(temporaryDirectory, 'missing Terraform');
  } else {
    assert.equal(terraformOverride, undefined, 'Only local stub overrides are permitted');
  }
  writeFileSync(log, '');
  try {
    const result = spawnSync('bash', ['scripts/deploy.sh'], {
      cwd: projectRoot,
      encoding: 'utf8',
      env: {
        ...process.env,
        PATH: `${temporaryDirectory}:${process.env.PATH}`,
        AWS_PROFILE: profile,
        QCON_TERRAFORM: overridePath,
        MOCK_LOG: log,
        MOCK_ACCOUNT: identity,
        MOCK_TERRAFORM_VERSION: terraformVersion,
        MOCK_OVERRIDE_TERRAFORM_VERSION: overrideVersion,
        MOCK_OUTPUTS: JSON.stringify({
          aws_account_id: account,
          s3_bucket_name: domain,
          s3_origin_domain_name: origin,
          cloudfront_distribution_id: distributionId,
          ...outputs,
        }),
        MOCK_DISTRIBUTION: JSON.stringify(distribution),
      },
    });
    const calls = readFileSync(log, 'utf8').trim().split('\n').filter(Boolean).map(JSON.parse);
    return { ...result, calls };
  } finally {
    rmSync(temporaryDirectory, { recursive: true, force: true });
  }
}

test('rejects unsupported Terraform versions before any AWS operation', () => {
  for (const terraformVersion of ['1.9.8', '2.0.0', '2.1.0']) {
    const result = runDeployment({ terraformVersion });
    assert.notEqual(result.status, 0, result.stdout);
    assert.match(result.stderr, /Refusing deployment:/);
    assert.equal(result.calls.some(({ command }) => command === 'aws'), false);
    assert.deepEqual(result.calls.map(({ command, args }) => ({ command, args })), [
      { command: 'terraform', args: ['version', '-json'] },
    ]);
  }
});

test('accepts the minimum supported Terraform version', () => {
  const result = runDeployment({ terraformVersion: '1.10.0' });
  assert.equal(result.status, 0, result.stderr);
});

test('uses the Terraform override path with spaces for version and every state output', () => {
  const result = runDeployment({ terraformVersion: '1.9.8', terraformOverride: 'spaces' });
  assert.equal(result.status, 0, result.stderr);
  const terraformCalls = result.calls.filter(({ command }) => command === 'terraform');
  assert.equal(terraformCalls.length, 5);
  for (const { executable } of terraformCalls) assert.match(executable, /\/Terraform with spaces$/);
  assert.deepEqual(terraformCalls.map(({ args }) => args), [
    ['version', '-json'],
    ['-chdir=terraform', 'output', '-raw', 'aws_account_id'],
    ['-chdir=terraform', 'output', '-raw', 's3_bucket_name'],
    ['-chdir=terraform', 'output', '-raw', 's3_origin_domain_name'],
    ['-chdir=terraform', 'output', '-raw', 'cloudfront_distribution_id'],
  ]);
});

test('rejects an invalid Terraform override without falling back or calling AWS', () => {
  const result = runDeployment({ terraformOverride: 'missing' });
  assert.notEqual(result.status, 0, result.stdout);
  assert.match(result.stderr, /[Tt]erraform/);
  assert.deepEqual(result.calls, []);
});

function assertRefused(options) {
  const result = runDeployment(options);
  assert.notEqual(result.status, 0, result.stdout);
  assert.match(result.stderr, /Refusing deployment:/);
  assert.equal(result.calls.some(({ command, args }) => command === 'aws' &&
    (args[2] === 's3' || args[3] === 'create-invalidation')), false, 'A write ran before target validation');
}

test('rejects other profiles, accounts, and mismatched Terraform outputs before writes', () => {
  assertRefused({ profile: 'corporate' });
  assertRefused({ identity: '111122223333' });
  assertRefused({ outputs: { aws_account_id: '111122223333' } });
  assertRefused({ outputs: { s3_bucket_name: 'another-site.example.com' } });
  assertRefused({ outputs: { s3_origin_domain_name: 'another-site.s3.us-east-1.amazonaws.com' } });
  assertRefused({ outputs: { cloudfront_distribution_id: '' } });
});

test('rejects stale or unrelated CloudFront targets before writes', () => {
  for (const mutate of [
    (d) => { d.Distribution.ARN = `arn:aws:cloudfront::111122223333:distribution/${distributionId}`; },
    (d) => { d.Distribution.Status = 'InProgress'; },
    (d) => { d.Distribution.DistributionConfig.Enabled = false; },
    (d) => { d.Distribution.DistributionConfig.Aliases.Items = ['another-site.example.com']; },
    (d) => { d.Distribution.DistributionConfig.Origins.Items[0].DomainName = 'another-origin.example.com'; },
    (d) => { d.Distribution.DistributionConfig.Origins.Items[0].OriginAccessControlId = ''; },
    (d) => { d.Distribution.DistributionConfig.DefaultCacheBehavior.ViewerProtocolPolicy = 'allow-all'; },
  ]) {
    const distribution = structuredClone(validDistribution);
    mutate(distribution);
    assertRefused({ distribution });
  }
});

test('publishes assets, revalidating HTML, then invalidates only the verified distribution', () => {
  const result = runDeployment();
  assert.equal(result.status, 0, result.stderr);
  const awsCalls = result.calls.filter(({ command }) => command === 'aws').map(({ args }) => args);
  assert.deepEqual(awsCalls.map((args) => args.slice(2, 4).join(' ')), [
    'sts get-caller-identity', 'cloudfront get-distribution', 's3 sync', 's3 cp', 'cloudfront create-invalidation',
  ]);
  for (const args of awsCalls) assert.deepEqual(args.slice(0, 2), ['--profile', 'hatchman76']);
  const sync = awsCalls[2];
  assert.equal(sync[5], `s3://${domain}/`);
  assert.ok(sync.includes('--delete'));
  assert.equal(sync[sync.indexOf('--exclude') + 1], 'index.html');
  assert.equal(sync[sync.indexOf('--cache-control') + 1], 'public,max-age=0,must-revalidate,s-maxage=86400');
  const html = awsCalls[3];
  assert.deepEqual(html.slice(4, 6), ['src/index.html', `s3://${domain}/index.html`]);
  assert.equal(html[html.indexOf('--content-type') + 1], 'text/html; charset=utf-8');
  assert.equal(html[html.indexOf('--cache-control') + 1], 'no-cache,max-age=0,must-revalidate');
  const invalidation = awsCalls[4];
  assert.equal(invalidation[invalidation.indexOf('--distribution-id') + 1], distributionId);
  assert.equal(invalidation[invalidation.indexOf('--paths') + 1], '/*');
});
