#!/usr/bin/env bash
set -euo pipefail

readonly EXPECTED_PROFILE="hatchman76"
readonly EXPECTED_ACCOUNT_ID="736654693886"
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

actual_account_id="$(aws sts get-caller-identity --query Account --output text)"

if [[ "${actual_account_id}" != "${EXPECTED_ACCOUNT_ID}" ]]; then
  echo "Refusing deployment: AWS account ${actual_account_id} is not the personal qcon26 account." >&2
  exit 1
fi

cd "${PROJECT_ROOT}"
node scripts/verify-site.mjs

bucket_name="$(terraform -chdir=terraform output -raw s3_bucket_name)"
distribution_id="$(terraform -chdir=terraform output -raw cloudfront_distribution_id)"

if [[ "${bucket_name}" != "qcon26.hatchman76.com" ]]; then
  echo "Refusing deployment: unexpected content bucket ${bucket_name}." >&2
  exit 1
fi

aws s3 sync src/ "s3://${bucket_name}/" --delete
aws cloudfront create-invalidation \
  --distribution-id "${distribution_id}" \
  --paths "/*"

echo "Deployment submitted for https://qcon26.hatchman76.com"
