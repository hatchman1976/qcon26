# Plan-only mocks: no role, policy, state bucket or DNS changes are made.
mock_provider "aws" {
  override_during = plan

  mock_data "aws_caller_identity" {
    defaults = { account_id = "736654693886" }
  }
  mock_data "aws_iam_role" {
    defaults = {
      id  = "TerraformDeployRole"
      arn = "arn:aws:iam::736654693886:role/TerraformDeployRole"
    }
  }
  mock_data "aws_route53_zone" {
    defaults = {
      zone_id = "ZQCON26TEST"
      arn     = "arn:aws:route53:::hostedzone/ZQCON26TEST"
    }
  }
}

run "scoped_hosting_permissions" {
  command = plan

  assert {
    condition = (
      aws_iam_role_policy.qcon26.role == "TerraformDeployRole" &&
      length(aws_iam_role_policy.qcon26.policy) < 10240
    )
    error_message = "The QCon policy must target the existing personal role and fit within the inline-policy limit."
  }

  assert {
    condition = anytrue([
      for statement in jsondecode(aws_iam_role_policy.qcon26.policy).Statement :
      contains(flatten([statement.Action]), "s3:PutObject") &&
      statement.Resource == "arn:aws:s3:::hatchman76-terraform-state/qcon26/terraform.tfstate"
      ]) && anytrue([
      for statement in jsondecode(aws_iam_role_policy.qcon26.policy).Statement :
      contains(flatten([statement.Action]), "s3:DeleteObject") &&
      statement.Resource == "arn:aws:s3:::hatchman76-terraform-state/qcon26/terraform.tfstate.tflock"
      ]) && alltrue([
      for statement in jsondecode(aws_iam_role_policy.qcon26.policy).Statement :
      !contains(flatten([statement.Action]), "s3:DeleteObject") ||
      statement.Resource != "arn:aws:s3:::hatchman76-terraform-state/qcon26/terraform.tfstate"
    ])
    error_message = "The deploy role needs isolated main-state read/write and lock deletion, without state deletion."
  }

  assert {
    condition = alltrue([
      for statement in jsondecode(aws_iam_role_policy.qcon26.policy).Statement :
      statement.Resource == data.aws_route53_zone.root.arn &&
      try(statement.Condition["ForAllValues:StringEquals"]["route53:ChangeResourceRecordSetsNormalizedRecordNames"] == ["qcon26.hatchman76.com"], false) ||
      statement.Resource == data.aws_route53_zone.root.arn &&
      try(statement.Condition["ForAllValues:StringLike"]["route53:ChangeResourceRecordSetsNormalizedRecordNames"] == ["_*.qcon26.hatchman76.com"], false)
      if contains(flatten([statement.Action]), "route53:ChangeResourceRecordSets")
    ])
    error_message = "DNS writes must be restricted to this hosted zone's site aliases and certificate-validation records."
  }

  assert {
    condition = anytrue([
      for statement in jsondecode(aws_iam_role_policy.qcon26.policy).Statement :
      contains(flatten([statement.Action]), "cloudfront:CreateDistribution") &&
      try(statement.Condition.StringEquals["aws:RequestTag/Project"] == "qcon26", false)
      ]) && anytrue([
      for statement in jsondecode(aws_iam_role_policy.qcon26.policy).Statement :
      contains(flatten([statement.Action]), "acm:RequestCertificate") &&
      try(statement.Condition.StringEquals["aws:RequestedRegion"] == "us-east-1", false) &&
      try(statement.Condition.StringEquals["acm:ValidationMethod"] == "DNS", false) &&
      try(statement.Condition["ForAllValues:StringEquals"]["acm:DomainNames"] == ["qcon26.hatchman76.com"], false)
    ])
    error_message = "CloudFront creation must carry the project tag, and certificate requests must match this site and region."
  }
}

run "reject_other_accounts" {
  command = plan
  variables {
    personal_aws_account_id = "123456789012"
  }
  expect_failures = [var.personal_aws_account_id]
}
