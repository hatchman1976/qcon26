provider "aws" {
  region              = var.aws_region
  allowed_account_ids = [var.personal_aws_account_id]

  default_tags {
    tags = {
      ManagedBy = "Terraform"
      Project   = "qcon26"
      Owner     = "hatchman1976"
    }
  }
}

data "aws_caller_identity" "current" {}

