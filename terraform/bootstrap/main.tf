data "aws_iam_role" "deploy" {
  name = var.deploy_role_name
}

resource "aws_iam_role_policy" "qcon26" {
  name = "QCon26DeployPermissions"
  role = data.aws_iam_role.deploy.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "QCon26ContentBucket"
        Effect = "Allow"
        Action = "s3:*"
        Resource = [
          "arn:aws:s3:::${var.content_bucket_name}",
          "arn:aws:s3:::${var.content_bucket_name}/*",
        ]
      },
      {
        Sid    = "ReadCloudFrontManagedPolicies"
        Effect = "Allow"
        Action = [
          "cloudfront:GetCachePolicy",
          "cloudfront:GetResponseHeadersPolicy",
          "cloudfront:ListCachePolicies",
          "cloudfront:ListResponseHeadersPolicies",
        ]
        Resource = "*"
      },
    ]
  })
}
