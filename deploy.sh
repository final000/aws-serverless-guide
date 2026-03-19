#!/bin/bash
set -e

# Read stack name from samconfig.toml
STACK_NAME=$(grep 'stack_name' samconfig.toml | sed 's/.*= *"\(.*\)"/\1/')
echo "Using stack: ${STACK_NAME}"

# Build the site
echo "Building site..."
npm run build

# Deploy the SAM stack (ignore "no changes" exit code)
sam deploy || true

# Get outputs
BUCKET_NAME=$(aws cloudformation describe-stacks \
  --stack-name "${STACK_NAME}" \
  --query 'Stacks[0].Outputs[?OutputKey==`WebsiteBucketName`].OutputValue' \
  --output text)

DISTRIBUTION_ID=$(aws cloudformation describe-stacks \
  --stack-name "${STACK_NAME}" \
  --query 'Stacks[0].Outputs[?OutputKey==`CloudFrontDistributionId`].OutputValue' \
  --output text)

WEBSITE_URL=$(aws cloudformation describe-stacks \
  --stack-name "${STACK_NAME}" \
  --query 'Stacks[0].Outputs[?OutputKey==`WebsiteURL`].OutputValue' \
  --output text)

# Sync website files to S3
echo "Uploading website files to S3..."
aws s3 sync website/ "s3://${BUCKET_NAME}" --delete

# Invalidate CloudFront cache
echo "Invalidating CloudFront cache..."
aws cloudfront create-invalidation \
  --distribution-id "${DISTRIBUTION_ID}" \
  --paths "/*"

echo ""
echo "Deployment complete!"
echo "Website URL: ${WEBSITE_URL}"
