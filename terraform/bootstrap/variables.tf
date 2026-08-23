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
  description = "AWS region used for provider operations"
  type        = string
  default     = "us-east-1"
}

variable "deploy_role_name" {
  description = "Existing personal-account role used by the hatchman76 profile"
  type        = string
  default     = "TerraformDeployRole"
}

variable "content_bucket_name" {
  description = "QCon presentation content bucket"
  type        = string
  default     = "qcon26.hatchman76.com"
}

