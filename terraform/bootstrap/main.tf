locals {
  distribution_arn = "arn:aws:cloudfront::${var.personal_aws_account_id}:distribution/*"
  certificate_arn  = "arn:aws:acm:us-east-1:${var.personal_aws_account_id}:certificate/*"
}

data "aws_iam_role" "deploy" {
  name = var.deploy_role_name
}

data "aws_route53_zone" "root" {
  name         = "hatchman76.com"
  private_zone = false
}

resource "aws_iam_role_policy" "qcon26" {
  name = "QCon26DeployPermissions"
  role = data.aws_iam_role.deploy.id

  lifecycle {
    precondition {
      condition     = terraform.workspace == "default"
      error_message = "Use the default workspace for the shared role-policy bootstrap."
    }
  }

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "ManageQConContentBucket"
        Effect = "Allow"
        Action = [
          "s3:CreateBucket",
          "s3:DeleteBucket",
          "s3:GetBucket*",
          "s3:GetAccelerateConfiguration",
          "s3:GetEncryptionConfiguration",
          "s3:GetLifecycleConfiguration",
          "s3:GetReplicationConfiguration",
          "s3:ListBucket",
          "s3:ListBucketMultipartUploads",
          "s3:PutBucketOwnershipControls",
          "s3:PutBucketPublicAccessBlock",
          "s3:PutBucketPolicy",
          "s3:DeleteBucketPolicy",
          "s3:PutBucketTagging",
          "s3:PutBucketVersioning",
          "s3:PutEncryptionConfiguration",
          "s3:PutLifecycleConfiguration",
        ]
        Resource = "arn:aws:s3:::${var.content_bucket_name}"
      },
      {
        Sid    = "DeployQConContent"
        Effect = "Allow"
        Action = [
          "s3:PutObject",
          "s3:DeleteObject",
          "s3:AbortMultipartUpload",
          "s3:ListMultipartUploadParts",
        ]
        Resource = "arn:aws:s3:::${var.content_bucket_name}/*"
      },
      {
        Sid      = "ListQConState"
        Effect   = "Allow"
        Action   = "s3:ListBucket"
        Resource = "arn:aws:s3:::hatchman76-terraform-state"
        Condition = {
          StringLike = { "s3:prefix" = ["qcon26/*"] }
        }
      },
      {
        Sid      = "ReadWriteQConState"
        Effect   = "Allow"
        Action   = ["s3:GetObject", "s3:PutObject"]
        Resource = "arn:aws:s3:::hatchman76-terraform-state/qcon26/terraform.tfstate"
      },
      {
        Sid      = "LockQConState"
        Effect   = "Allow"
        Action   = ["s3:GetObject", "s3:PutObject", "s3:DeleteObject"]
        Resource = "arn:aws:s3:::hatchman76-terraform-state/qcon26/terraform.tfstate.tflock"
      },
      {
        Sid      = "CreateQConDistribution"
        Effect   = "Allow"
        Action   = "cloudfront:CreateDistribution"
        Resource = "*"
        Condition = {
          StringEquals = { "aws:RequestTag/Project" = "qcon26" }
        }
      },
      {
        Sid      = "TagNewQConDistribution"
        Effect   = "Allow"
        Action   = "cloudfront:TagResource"
        Resource = local.distribution_arn
        Condition = {
          StringEquals = { "aws:RequestTag/Project" = "qcon26" }
        }
      },
      {
        Sid    = "ManageQConDistribution"
        Effect = "Allow"
        Action = [
          "cloudfront:GetDistribution",
          "cloudfront:GetDistributionConfig",
          "cloudfront:UpdateDistribution",
          "cloudfront:DeleteDistribution",
          "cloudfront:TagResource",
          "cloudfront:UntagResource",
          "cloudfront:ListTagsForResource",
          "cloudfront:CreateInvalidation",
          "cloudfront:GetInvalidation",
        ]
        Resource = local.distribution_arn
        Condition = {
          StringEquals = { "aws:ResourceTag/Project" = "qcon26" }
        }
      },
      {
        # These create/list APIs have no resource-level IAM scope.
        Sid    = "CreateOriginAndCachePolicy"
        Effect = "Allow"
        Action = [
          "cloudfront:CreateOriginAccessControl",
          "cloudfront:CreateCachePolicy",
          "cloudfront:ListResponseHeadersPolicies",
        ]
        Resource = "*"
      },
      {
        # OAC and cache-policy resources do not support resource tags.
        Sid    = "ManageOriginAndCachePolicy"
        Effect = "Allow"
        Action = [
          "cloudfront:GetOriginAccessControl",
          "cloudfront:GetOriginAccessControlConfig",
          "cloudfront:UpdateOriginAccessControl",
          "cloudfront:DeleteOriginAccessControl",
          "cloudfront:GetCachePolicy",
          "cloudfront:UpdateCachePolicy",
          "cloudfront:DeleteCachePolicy",
        ]
        Resource = [
          "arn:aws:cloudfront::${var.personal_aws_account_id}:origin-access-control/*",
          "arn:aws:cloudfront::${var.personal_aws_account_id}:cache-policy/*",
        ]
      },
      {
        Sid      = "ReadManagedSecurityHeadersPolicy"
        Effect   = "Allow"
        Action   = "cloudfront:GetResponseHeadersPolicy"
        Resource = "arn:aws:cloudfront::*:response-headers-policy/67f7725c-6f97-4210-82d7-5512b31e9d03"
      },
      {
        Sid      = "RequestQConCertificate"
        Effect   = "Allow"
        Action   = "acm:RequestCertificate"
        Resource = "*"
        Condition = {
          StringEquals = {
            "aws:RequestedRegion"    = "us-east-1"
            "aws:RequestTag/Project" = "qcon26"
            "acm:ValidationMethod"   = "DNS"
          }
          "ForAllValues:StringEquals" = {
            "acm:DomainNames" = [var.content_bucket_name]
          }
        }
      },
      {
        Sid      = "TagNewQConCertificate"
        Effect   = "Allow"
        Action   = "acm:AddTagsToCertificate"
        Resource = local.certificate_arn
        Condition = {
          StringEquals = { "aws:RequestTag/Project" = "qcon26" }
        }
      },
      {
        Sid    = "ManageQConCertificate"
        Effect = "Allow"
        Action = [
          "acm:DescribeCertificate",
          "acm:GetCertificate",
          "acm:DeleteCertificate",
          "acm:ListTagsForCertificate",
          "acm:AddTagsToCertificate",
          "acm:RemoveTagsFromCertificate",
          "acm:UpdateCertificateOptions",
        ]
        Resource = local.certificate_arn
        Condition = {
          StringEquals = { "aws:ResourceTag/Project" = "qcon26" }
        }
      },
      {
        Sid      = "FindPublicHostedZone"
        Effect   = "Allow"
        Action   = ["route53:ListHostedZones", "route53:ListHostedZonesByName"]
        Resource = "*"
      },
      {
        Sid    = "ReadPublicHostedZone"
        Effect = "Allow"
        Action = [
          "route53:GetHostedZone",
          "route53:ListTagsForResource",
          "route53:ListResourceRecordSets",
        ]
        Resource = data.aws_route53_zone.root.arn
      },
      {
        Sid      = "ManageQConAliases"
        Effect   = "Allow"
        Action   = "route53:ChangeResourceRecordSets"
        Resource = data.aws_route53_zone.root.arn
        Condition = {
          "ForAllValues:StringEquals" = {
            "route53:ChangeResourceRecordSetsNormalizedRecordNames" = [var.content_bucket_name]
            "route53:ChangeResourceRecordSetsRecordTypes"           = ["A", "AAAA"]
          }
        }
      },
      {
        Sid      = "ValidateQConCertificate"
        Effect   = "Allow"
        Action   = "route53:ChangeResourceRecordSets"
        Resource = data.aws_route53_zone.root.arn
        Condition = {
          "ForAllValues:StringLike" = {
            "route53:ChangeResourceRecordSetsNormalizedRecordNames" = ["_*.${var.content_bucket_name}"]
          }
          "ForAllValues:StringEquals" = {
            "route53:ChangeResourceRecordSetsRecordTypes" = ["CNAME"]
          }
        }
      },
      {
        Sid      = "WaitForDNSChanges"
        Effect   = "Allow"
        Action   = "route53:GetChange"
        Resource = "arn:aws:route53:::change/*"
      },
    ]
  })
}
