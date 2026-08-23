provider "aws" {
  region              = var.aws_region
  allowed_account_ids = [var.personal_aws_account_id]

  default_tags {
    tags = local.default_tags
  }
}

# CloudFront viewer certificates must be created in us-east-1.
provider "aws" {
  alias               = "us_east_1"
  region              = "us-east-1"
  allowed_account_ids = [var.personal_aws_account_id]

  default_tags {
    tags = local.default_tags
  }
}

data "aws_caller_identity" "current" {}

