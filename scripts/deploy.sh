#!/usr/bin/env bash
set -euo pipefail

readonly EXPECTED_PROFILE="hatchman76"
readonly EXPECTED_ACCOUNT_ID="736654693886"
readonly EXPECTED_DOMAIN="qcon26.hatchman76.com"
readonly PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

if [[ "${AWS_PROFILE:-}" != "${EXPECTED_PROFILE}" ]]; then
  echo "Refusing deployment: set AWS_PROFILE=${EXPECTED_PROFILE}." >&2
  exit 1
fi

for command_name in aws node terraform; do
  if ! command -v "${command_name}" >/dev/null 2>&1; then
    echo "Missing required command: ${command_name}" >&2
    exit 1
  fi
done

actual_account_id="$(aws --profile "${EXPECTED_PROFILE}" sts get-caller-identity --query Account --output text)"
if [[ "${actual_account_id}" != "${EXPECTED_ACCOUNT_ID}" ]]; then
  echo "Refusing deployment: credentials do not resolve to the personal qcon26 account." >&2
  exit 1
fi

cd "${PROJECT_ROOT}"
node scripts/verify-site.mjs

state_account_id="$(terraform -chdir=terraform output -raw aws_account_id)"
bucket_name="$(terraform -chdir=terraform output -raw s3_bucket_name)"
origin_domain="$(terraform -chdir=terraform output -raw s3_origin_domain_name)"
distribution_id="$(terraform -chdir=terraform output -raw cloudfront_distribution_id)"

if [[ "${state_account_id}" != "${EXPECTED_ACCOUNT_ID}" || "${bucket_name}" != "${EXPECTED_DOMAIN}" ]]; then
  echo "Refusing deployment: Terraform outputs do not describe the personal qcon26 site." >&2
  exit 1
fi
if [[ ! "${distribution_id}" =~ ^[A-Z0-9]+$ || ! "${origin_domain}" =~ ^qcon26\.hatchman76\.com\.s3\.[a-z0-9-]+\.amazonaws\.com$ ]]; then
  echo "Refusing deployment: invalid CloudFront distribution or regional S3 origin." >&2
  exit 1
fi

# Confirm state points to this site's deployed distribution before the first write.
distribution="$(aws --profile "${EXPECTED_PROFILE}" cloudfront get-distribution --id "${distribution_id}" --output json)"
node --input-type=module -e '
  import { readFileSync } from "node:fs";
  const [id, account, domain, originDomain] = process.argv.slice(1);
  const { Distribution: distribution } = JSON.parse(readFileSync(0, "utf8"));
  const config = distribution?.DistributionConfig;
  const aliases = config?.Aliases?.Items ?? [];
  const origins = config?.Origins?.Items ?? [];
  if (distribution?.ARN !== `arn:aws:cloudfront::${account}:distribution/${id}` ||
      distribution.Status !== "Deployed" || config?.Enabled !== true ||
      aliases.length !== 1 || aliases[0] !== domain ||
      origins.length !== 1 || origins[0].DomainName !== originDomain ||
      !origins[0].OriginAccessControlId ||
      config.DefaultCacheBehavior?.ViewerProtocolPolicy !== "redirect-to-https") {
    console.error("Refusing deployment: CloudFront does not match the expected HTTPS site and private S3 origin.");
    process.exit(1);
  }
' "${distribution_id}" "${EXPECTED_ACCOUNT_ID}" "${EXPECTED_DOMAIN}" "${origin_domain}" <<< "${distribution}"

# Assets first, entry point last. Browser revalidation and edge invalidation work together.
aws --profile "${EXPECTED_PROFILE}" s3 sync src/ "s3://${bucket_name}/" \
  --delete --exclude "index.html" \
  --cache-control "public,max-age=0,must-revalidate,s-maxage=86400"
aws --profile "${EXPECTED_PROFILE}" s3 cp src/index.html "s3://${bucket_name}/index.html" \
  --content-type "text/html; charset=utf-8" \
  --cache-control "no-cache,max-age=0,must-revalidate"
aws --profile "${EXPECTED_PROFILE}" cloudfront create-invalidation \
  --distribution-id "${distribution_id}" \
  --paths "/*"

echo "Deployment submitted for https://${EXPECTED_DOMAIN}"
