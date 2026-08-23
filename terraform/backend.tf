terraform {
  backend "s3" {
    bucket       = "hatchman76-terraform-state"
    key          = "qcon26/terraform.tfstate"
    region       = "us-east-1"
    encrypt      = true
    use_lockfile = true
  }
}

