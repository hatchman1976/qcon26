variable "personal_aws_account_id" {
  description = "Andrew Hatch's personal AWS account. Used as a fail-closed provider guard."
  type        = string
  default     = "736654693886"

  validation {
    condition     = can(regex("^[0-9]{12}$", var.personal_aws_account_id))
    error_message = "personal_aws_account_id must be a 12-digit AWS account ID."
  }
}

variable "aws_region" {
  description = "AWS region for the S3 content bucket"
  type        = string
  default     = "us-east-1"
}

variable "domain_name" {
  description = "Fully qualified domain name for the presentation"
  type        = string
  default     = "qcon26.hatchman76.com"
}

variable "root_domain" {
  description = "Public Route 53 hosted-zone name"
  type        = string
  default     = "hatchman76.com"
}

variable "cloudfront_price_class" {
  description = "CloudFront edge-location price class"
  type        = string
  default     = "PriceClass_100"

  validation {
    condition = contains([
      "PriceClass_100",
      "PriceClass_200",
      "PriceClass_All",
    ], var.cloudfront_price_class)
    error_message = "cloudfront_price_class must be PriceClass_100, PriceClass_200, or PriceClass_All."
  }
}

