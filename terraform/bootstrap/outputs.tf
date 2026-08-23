output "aws_account_id" {
  description = "AWS account selected by the provider"
  value       = data.aws_caller_identity.current.account_id
}

output "deploy_role_arn" {
  description = "Existing deploy role receiving the QCon policy"
  value       = data.aws_iam_role.deploy.arn
}

output "inline_policy_name" {
  description = "QCon-specific inline policy managed by this configuration"
  value       = aws_iam_role_policy.qcon26.name
}

