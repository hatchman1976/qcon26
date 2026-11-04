variable "personal_aws_account_id" {
  description = "Andrew Hatch's personal AWS account. Used as a fail-closed provider guard."
  type        = string
  default     = "736654693886"

  validation {
    condition     = var.personal_aws_account_id == "736654693886"
    error_message = "This personal project is restricted to AWS account 736654693886."
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

