# AWS hosting

This configuration creates `https://qcon26.hatchman76.com` in the project AWS account **736654693886**:

- A private, encrypted, versioned S3 bucket with public access blocked.
- CloudFront with signed Origin Access Control, HTTPS redirects and TLS 1.2 or later. Direct S3 object reads are denied; content is served through this distribution.
- An ACM certificate in `us-east-1`, DNS validation, and Route 53 `A`/`AAAA` aliases.

## Prerequisites

Use Terraform **1.10 or later, below 2.0**, the AWS CLI and working personal profile `hatchman76`. The optional role-policy bootstrap also requires a valid admin profile, `hatchman76-bootstrap`. Existing resources must include the public `hatchman76.com` Route 53 zone, `TerraformDeployRole`, and the private state bucket `hatchman76-terraform-state` in `us-east-1`. The root domain must be delegated to that zone.

The bootstrap identity needs permission to manage the QCon inline policy on the existing role and to access its own state. The bootstrap adds QCon hosting, content-deployment and main-state permissions to that role; it does not create or take ownership of the shared resources. Other policies, permission boundaries or organization controls can still restrict the role.

Use the **default Terraform workspace**. The main state key is `qcon26/terraform.tfstate`; bootstrap uses `qcon26/bootstrap.tfstate`. Both use S3-native lock files. Provider and backend account guards must remain enabled. Never select a Cisco or ThousandEyes profile.

## Offline checks

Initialize provider plugins without accessing the remote backend, then validate both configurations and run their mock-provider plans:

```bash
for module in terraform terraform/bootstrap; do
  terraform -chdir="$module" init -backend=false
  terraform -chdir="$module" validate
  terraform -chdir="$module" test
done
```

These tests do not call AWS. A real account-backed plan is still required before applying.

The deployment preflight also has local tests, with AWS and Terraform commands replaced by stubs:

```bash
node --test scripts/deploy.test.mjs
```

## Human-run setup

Terraform apply and AWS content writes must be run manually in a human-only privileged terminal. The following commands are instructions for that terminal, from the repository root.

`QCon26DeployPermissions` was installed on the existing `TerraformDeployRole` through the AWS console. When that exact policy is already installed, skip the bootstrap commands below and start with the `hatchman76` hosting plan. The policy remains console-managed and the bootstrap Terraform root is unapplied; no new IAM user or root access keys are needed.

Otherwise, select the valid bootstrap admin profile and check that STS returns `Account` **736654693886**:

```bash
export AWS_PROFILE=hatchman76-bootstrap
aws sts get-caller-identity
terraform -chdir=terraform/bootstrap init -reconfigure
terraform -chdir=terraform/bootstrap fmt -check
terraform -chdir=terraform/bootstrap validate
terraform -chdir=terraform/bootstrap plan -out=qcon26-bootstrap.tfplan
terraform -chdir=terraform/bootstrap show qcon26-bootstrap.tfplan
```

Review the saved plan, then apply it manually:

```bash
terraform -chdir=terraform/bootstrap apply qcon26-bootstrap.tfplan
```

Select the main profile, verify the same account, and prepare the hosting plan:

```bash
export AWS_PROFILE=hatchman76
aws sts get-caller-identity
terraform -chdir=terraform init -reconfigure
terraform -chdir=terraform fmt -check
terraform -chdir=terraform validate
terraform -chdir=terraform plan -out=qcon26.tfplan
terraform -chdir=terraform show qcon26.tfplan
```

Review that the plan creates only the intended QCon resources and policy changes, then apply it manually:

```bash
terraform -chdir=terraform apply qcon26.tfplan
```

Certificate validation and CloudFront deployment can take several minutes. A successful apply creates the hosting infrastructure; it does not upload site files.

## Content deployment

From the repository root, with the initialized main Terraform state available:

```bash
AWS_PROFILE=hatchman76 ./scripts/deploy.sh
```

The script checks the personal account and deployment targets, verifies the site source, uploads `src/` and invalidates CloudFront. Validate the HTTPS site after deployment and confirm that direct S3 access is denied.

The script requires Terraform 1.10 or later, below 2.0. If the binary used for setup is outside `PATH`, pass it explicitly so deployment reads state with the same version:

```bash
AWS_PROFILE=hatchman76 \
  QCON_TERRAFORM="$HOME/.local/share/qcon26/terraform/1.17.1/terraform" \
  ./scripts/deploy.sh
```

## Inputs

Defaults target this personal site. `terraform.tfvars.example` documents the inputs; use an ignored `terraform.tfvars` only for deliberate overrides. The personal account guard is fixed. Keep the checked-in provider lock files.
