# QCon role-policy bootstrap

Adds the `QCon26DeployPermissions` inline policy to the existing personal-account `TerraformDeployRole`, covering QCon hosting, content deployment and the main QCon Terraform state. Shared resources and existing role policies remain outside this configuration’s ownership.

Run manually with `AWS_PROFILE=hatchman76-bootstrap`, in the default workspace, after verifying account **736654693886**. The bootstrap identity needs access to its state and permission to manage the inline role policy. Follow the parent [setup instructions](../README.md) to review and apply the bootstrap before planning the main infrastructure.
