terraform {
  backend "s3" {
    bucket               = "hatchman76-terraform-state"
    key                  = "qcon26/bootstrap.tfstate"
    region               = "us-east-1"
    encrypt              = true
    use_lockfile         = true
    allowed_account_ids  = ["736654693886"]
    workspace_key_prefix = "qcon26/bootstrap-workspaces"
  }
}

