#!/bin/bash

# Setup script for passport-office-api-docs

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Setting up Passport Office API Documentation...${NC}"

# Install dependencies
echo "Installing dependencies..."
npm install

# Try to sync OpenAPI spec if passport-office repo exists
if [ -d "../passport-office" ]; then
    echo -e "${GREEN}Found passport-office repository, syncing OpenAPI spec...${NC}"
    ./scripts/sync-openapi.sh
else
    echo -e "${YELLOW}passport-office repository not found in parent directory${NC}"
    echo "OpenAPI sync will happen automatically via GitHub Actions"
fi

echo -e "${GREEN}Setup complete!${NC}"
echo ""
echo "To start the development server, run:"
echo "  npm run dev"
echo ""
echo "The site will be available at http://localhost:3003"