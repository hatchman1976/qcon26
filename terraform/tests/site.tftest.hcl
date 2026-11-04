# Plan-only mocks: these tests never contact AWS or create infrastructure.
mock_provider "aws" {
  override_during = plan

  mock_data "aws_caller_identity" {
    defaults = { account_id = "736654693886" }
  }
  mock_data "aws_route53_zone" {
    defaults = { zone_id = "ZQCON26TEST" }
  }
  mock_resource "aws_s3_bucket" {
    defaults = {
      arn                         = "arn:aws:s3:::qcon26.hatchman76.com"
      bucket_regional_domain_name = "qcon26.hatchman76.com.s3.us-east-1.amazonaws.com"
    }
  }
  mock_resource "aws_cloudfront_distribution" {
    defaults = {
      arn            = "arn:aws:cloudfront::736654693886:distribution/EQCON26TEST"
      domain_name    = "qcon26test.cloudfront.net"
      hosted_zone_id = "Z2FDTNDATAQYW2"
    }
  }
  mock_resource "aws_cloudfront_origin_access_control" {
    defaults = { id = "EQCON26OACTEST" }
  }
  mock_resource "aws_cloudfront_cache_policy" {
    defaults = { id = "qcon26-test-cache-policy" }
  }
}

mock_provider "aws" {
  alias           = "us_east_1"
  override_during = plan

  mock_resource "aws_acm_certificate" {
    defaults = {
      arn = "arn:aws:acm:us-east-1:736654693886:certificate/qcon26-test"
      domain_validation_options = [{
        domain_name           = "qcon26.hatchman76.com"
        resource_record_name  = "_test.qcon26.hatchman76.com"
        resource_record_type  = "CNAME"
        resource_record_value = "_test.acm-validations.aws."
      }]
    }
  }
}

run "private_https_site" {
  command = plan

  assert {
    condition = (
      aws_s3_bucket.content.bucket == "qcon26.hatchman76.com" &&
      aws_s3_bucket_public_access_block.content.block_public_acls &&
      aws_s3_bucket_public_access_block.content.block_public_policy &&
      aws_s3_bucket_public_access_block.content.ignore_public_acls &&
      aws_s3_bucket_public_access_block.content.restrict_public_buckets &&
      one(aws_s3_bucket_ownership_controls.content.rule).object_ownership == "BucketOwnerEnforced" &&
      one(aws_s3_bucket_server_side_encryption_configuration.content.rule).apply_server_side_encryption_by_default[0].sse_algorithm == "AES256"
    )
    error_message = "The content bucket must be private, encrypted and owned by the bucket owner."
  }

  assert {
    condition = (
      aws_cloudfront_origin_access_control.site.signing_behavior == "always" &&
      aws_cloudfront_origin_access_control.site.signing_protocol == "sigv4" &&
      one(aws_cloudfront_distribution.site.origin).domain_name == aws_s3_bucket.content.bucket_regional_domain_name &&
      one(aws_cloudfront_distribution.site.origin).origin_access_control_id == aws_cloudfront_origin_access_control.site.id &&
      one(aws_cloudfront_distribution.site.default_cache_behavior).viewer_protocol_policy == "redirect-to-https" &&
      one(aws_cloudfront_distribution.site.viewer_certificate).minimum_protocol_version == "TLSv1.2_2021" &&
      one(aws_cloudfront_distribution.site.aliases) == "qcon26.hatchman76.com"
    )
    error_message = "CloudFront must use the private regional origin, sign every request and require modern HTTPS."
  }

  assert {
    condition = alltrue([
      for type in ["A", "AAAA"] :
      aws_route53_record.site[type].name == "qcon26.hatchman76.com" &&
      one(aws_route53_record.site[type].alias).name == aws_cloudfront_distribution.site.domain_name
    ])
    error_message = "Both DNS address families must point the presentation hostname at CloudFront."
  }

  assert {
    condition = (
      aws_cloudfront_cache_policy.site.min_ttl == 0 &&
      one(aws_cloudfront_distribution.site.default_cache_behavior).cache_policy_id == aws_cloudfront_cache_policy.site.id &&
      one(aws_cloudfront_cache_policy.site.parameters_in_cache_key_and_forwarded_to_origin).query_strings_config[0].query_string_behavior == "whitelist" &&
      one(one(aws_cloudfront_cache_policy.site.parameters_in_cache_key_and_forwarded_to_origin).query_strings_config[0].query_strings).items == toset(["v"])
    )
    error_message = "CloudFront must honor revalidation and separate the deck's versioned asset requests."
  }

  assert {
    condition = anytrue([
      for statement in jsondecode(aws_s3_bucket_policy.content.policy).Statement :
      statement.Effect == "Allow" &&
      try(statement.Principal.Service == "cloudfront.amazonaws.com", false) &&
      try(statement.Condition.StringEquals["AWS:SourceArn"] == aws_cloudfront_distribution.site.arn, false)
      ]) && anytrue([
      for statement in jsondecode(aws_s3_bucket_policy.content.policy).Statement :
      statement.Effect == "Deny" &&
      contains(flatten([statement.Action]), "s3:GetObject") &&
      contains(flatten([statement.Action]), "s3:GetObjectVersion") &&
      try(statement.Condition.ArnNotEquals["AWS:SourceArn"] == aws_cloudfront_distribution.site.arn, false)
    ])
    error_message = "Only this CloudFront distribution may read site objects, including versioned objects."
  }

  assert {
    condition = anytrue([
      for statement in jsondecode(aws_s3_bucket_policy.content.policy).Statement :
      statement.Effect == "Deny" &&
      try(statement.Condition.Bool["aws:SecureTransport"] == "false", false) &&
      try(statement.Condition.Bool["aws:PrincipalIsAWSService"] == "false", false)
    ])
    error_message = "S3 must reject insecure client transport without blocking signed AWS service requests."
  }
}

run "reject_other_accounts" {
  command = plan
  variables {
    personal_aws_account_id = "123456789012"
  }
  expect_failures = [var.personal_aws_account_id]
}
