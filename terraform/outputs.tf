output "aws_account_id" {
  description = "AWS account selected by the provider"
  value       = data.aws_caller_identity.current.account_id
}

output "s3_bucket_name" {
  description = "Private S3 bucket for presentation content"
  value       = aws_s3_bucket.content.id
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID used for cache invalidation"
  value       = aws_cloudfront_distribution.site.id
}

output "cloudfront_domain_name" {
  description = "CloudFront-generated domain name"
  value       = aws_cloudfront_distribution.site.domain_name
}

output "site_url" {
  description = "Public presentation URL"
  value       = "https://${var.domain_name}"
}

