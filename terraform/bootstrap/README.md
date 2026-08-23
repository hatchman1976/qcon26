# QCon role-policy bootstrap

This configuration adds one inline policy, `QCon26DeployPermissions`, to the existing personal-account `TerraformDeployRole`.

It does **not** recreate or take ownership of the shared state bucket, IAM user, IAM role, or legacy DynamoDB lock table. Its only managed resource is the QCon-specific inline policy.

Run it manually with `AWS_PROFILE=hatchman76-bootstrap` after verifying that STS returns account `736654693886`. See the parent [README](../README.md) for the reviewed plan/apply sequence.

