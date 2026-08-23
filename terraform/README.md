# AWS infrastructure

This configuration serves `qcon26.hatchman76.com` from Andrew Hatch's personal AWS account.

## Safety boundary

- Bootstrap profile: `hatchman76-bootstrap`
- Main/deploy profile: `hatchman76`
- Allowed account: `736654693886`
- Never run this configuration with a Cisco or ThousandEyes profile.
- Terraform's AWS providers use `allowed_account_ids`, so the wrong account fails closed.
- Apply and deployment are privileged writes and must be run manually in a human-only terminal.

The remote state bucket `hatchman76-terraform-state` already exists from the earlier personal presentation projects. This project uses the isolated key `qcon26/terraform.tfstate` and S3-native lock-file locking.

The existing `TerraformDeployRole` is scoped to the older SREcon bucket. The configuration in `bootstrap/` owns one additional inline policy for QCon; it deliberately looks up the shared role instead of attempting to recreate it.

## What it creates

- Private S3 content bucket `qcon26.hatchman76.com`
- S3 encryption, versioning, lifecycle cleanup, and public-access blocking
- CloudFront distribution with Origin Access Control
- ACM certificate in `us-east-1`
- Route 53 certificate-validation records and `A`/`AAAA` site aliases

## Human-run workflow

Run these commands yourself from a privileged terminal. First verify and apply the small role-policy bootstrap:

```bash
export AWS_PROFILE=hatchman76-bootstrap
aws sts get-caller-identity
terraform -chdir=terraform/bootstrap init
terraform -chdir=terraform/bootstrap fmt -check
terraform -chdir=terraform/bootstrap validate
terraform -chdir=terraform/bootstrap plan -out=qcon26-bootstrap.tfplan
terraform -chdir=terraform/bootstrap show qcon26-bootstrap.tfplan
terraform -chdir=terraform/bootstrap apply qcon26-bootstrap.tfplan
```

The returned `Account` must be `736654693886`. At the time this repository was scaffolded, the local `hatchman76-bootstrap` credentials were present but invalid/expired, so they must be repaired in a human-only terminal before this step.

Then switch to the scoped deployment role and verify it resolves to the same personal account:

```bash
export AWS_PROFILE=hatchman76
aws sts get-caller-identity
```

The returned `Account` must be `736654693886`.

Initialize and review a saved main-infrastructure plan:

```bash
terraform -chdir=terraform init
terraform -chdir=terraform fmt -check
terraform -chdir=terraform validate
terraform -chdir=terraform plan -out=qcon26.tfplan
terraform -chdir=terraform show qcon26.tfplan
```

Only after reviewing the plan, apply it manually:

```bash
terraform -chdir=terraform apply qcon26.tfplan
```

Then deploy site content from the repository root:

```bash
AWS_PROFILE=hatchman76 ./scripts/deploy.sh
```

## Inputs

Defaults are intentionally complete and account-specific. Copy `terraform.tfvars.example` to an ignored `terraform.tfvars` only when overriding them.
