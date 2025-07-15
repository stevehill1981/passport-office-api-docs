#!/bin/bash

# Sync OpenAPI specification from passport-office repository

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Syncing OpenAPI specification from passport-office repository...${NC}"

# Check if we're in the right directory
if [ ! -f "package.json" ] || [ "$(jq -r '.name' package.json)" != "passport-office-api-docs" ]; then
    echo -e "${RED}Error: Must be run from passport-office-api-docs root directory${NC}"
    exit 1
fi

# Path to passport-office repository (adjust if needed)
PASSPORT_OFFICE_REPO="../passport-office"

# Check if passport-office repo exists
if [ ! -d "$PASSPORT_OFFICE_REPO" ]; then
    echo -e "${RED}Error: passport-office repository not found at $PASSPORT_OFFICE_REPO${NC}"
    echo "Please ensure the passport-office repository is cloned in the parent directory"
    exit 1
fi

# Check if openapi.yaml exists in passport-office repo
if [ ! -f "$PASSPORT_OFFICE_REPO/openapi.yaml" ]; then
    echo -e "${RED}Error: openapi.yaml not found in passport-office repository${NC}"
    exit 1
fi

# Create public directory if it doesn't exist
mkdir -p public

# Copy the OpenAPI spec
cp "$PASSPORT_OFFICE_REPO/openapi.yaml" public/openapi.yaml

if [ $? -eq 0 ]; then
    echo -e "${GREEN}Successfully synced OpenAPI specification${NC}"
    echo "Updated: public/openapi.yaml"
else
    echo -e "${RED}Error: Failed to copy OpenAPI specification${NC}"
    exit 1
fi