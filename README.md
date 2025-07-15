# Passport Office API Documentation

Official documentation site for the Passport Office API - Mobile Access Control & Identity Management Platform.

## Overview

This documentation site provides comprehensive guides, API references, and SDK documentation for integrating with Passport Office's mobile identity and access control platform.

### Key Features

- **GitHub Docs-style Interface** - Clean, intuitive navigation and search
- **Interactive API Explorer** - Test API endpoints directly from the documentation
- **Multi-language SDKs** - Documentation for Ruby, Python, TypeScript, Go, Java, PHP, and C#
- **OpenAPI Integration** - Automatically synced with the latest API specifications
- **Mobile-First Design** - Responsive documentation optimized for all devices

## Quick Start

1. **Install dependencies:**

```bash
npm install
```

2. **Start development server:**

```bash
npm run dev
```

3. **Open in browser:**

```text
http://localhost:3003
```

## Development Commands

```bash
# Start development server on port 3003
npm run dev

# Build for production
npm run build

# Run linter
npm run lint

# Sync OpenAPI specification from passport-office repository
npm run sync
```

## Project Structure

```text
passport-office-api-docs/
├── components/          # React components
│   ├── Layout.tsx      # Main layout wrapper
│   ├── Navigation.tsx  # Sidebar navigation
│   ├── Header.tsx      # Top navigation bar
│   └── Hero.tsx        # Homepage hero section
├── pages/              # Next.js pages
│   ├── api-reference/  # API documentation
│   ├── guides/         # User guides
│   └── sdks/           # SDK documentation
├── public/             # Static assets
│   └── openapi.yaml    # OpenAPI specification
├── scripts/            # Build and sync scripts
│   └── sync-openapi.sh # Sync script for OpenAPI spec
├── styles/             # Global styles
│   └── globals.css     # Tailwind CSS and custom styles
└── .github/            # GitHub Actions workflows
    └── workflows/
        ├── deploy.yml      # Deploy to GitHub Pages
        └── sync-openapi.yml # Auto-sync OpenAPI spec
```

## Features

### Mobile Identity Management
- Secure user authentication and verification
- Biometric support for iOS and Android
- Multi-factor authentication options
- Device trust and attestation

### Access Control Integration
- Real-time access permissions
- Temporary and scheduled access
- Group-based access policies
- Audit trail and compliance reporting

### Developer Experience
- Comprehensive API documentation
- Interactive code examples
- SDK quick start guides
- Webhook integration guides

## Brand Guidelines

### Colors
- Primary: `#0e2653` (Navy blue) - Main brand color
- Accent: `#3883e3` (Electric blue) - CTAs and highlights
- Background: `#f9fafb` (Very light gray) - Page backgrounds

### Typography
- Headings: System font stack with bold weight
- Body: System font stack with normal weight
- Code: Monospace font for code examples

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch. The deployment workflow:

1. Builds the Next.js static site
2. Exports to the `out` directory
3. Deploys to GitHub Pages

### Manual Deployment

```bash
# Build and export
npm run build
npm run export

# The static site is now in the 'out' directory
```

## OpenAPI Sync

The OpenAPI specification is automatically synced from the main Passport Office repository:

- **Automatic**: Daily sync via GitHub Actions
- **Manual**: Run `npm run sync` locally

The sync script expects the passport-office repository to be cloned in the parent directory.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm run dev`
5. Submit a pull request

## License

MIT License - see LICENSE file for details.