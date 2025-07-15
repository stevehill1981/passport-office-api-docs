import Head from 'next/head'
import Link from 'next/link'

export default function QuickStart() {
  return (
    <>
      <Head>
        <title>Quick Start - Passport Office API</title>
        <meta name="description" content="Get started with Passport Office API in minutes" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="prose prose-lg max-w-none">
          <h1>Quick Start Guide</h1>
          
          <p className="lead">
            Get up and running with the Passport Office API in just a few minutes. This guide will walk you through the basics of authentication, making your first API call, and implementing mobile access control.
          </p>

          <h2>Prerequisites</h2>
          
          <ul>
            <li>A Passport Office account with API access enabled</li>
            <li>Your API credentials (Client ID and Client Secret)</li>
            <li>A development environment with HTTPS support</li>
          </ul>

          <h2>Step 1: Authentication</h2>
          
          <p>
            Passport Office uses OAuth 2.0 for API authentication. First, obtain an access token:
          </p>

          <pre className="language-bash">
            <code>{`curl -X POST https://api.passport-office.com/oauth/token \\
  -H "Content-Type: application/json" \\
  -d '{
    "grant_type": "client_credentials",
    "client_id": "YOUR_CLIENT_ID",
    "client_secret": "YOUR_CLIENT_SECRET"
  }'`}</code>
          </pre>

          <p>The response will include an access token:</p>

          <pre className="language-json">
            <code>{`{
  "access_token": "eyJhbGciOiJIUzI1NiIs...",
  "token_type": "Bearer",
  "expires_in": 3600
}`}</code>
          </pre>

          <h2>Step 2: Make Your First API Call</h2>
          
          <p>
            Use the access token to make authenticated requests. Let's fetch your organization's information:
          </p>

          <pre className="language-bash">
            <code>{`curl -X GET https://api.passport-office.com/v1/organization \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"`}</code>
          </pre>

          <h2>Step 3: Register a Mobile Device</h2>
          
          <p>
            To enable mobile access, register a user's device:
          </p>

          <pre className="language-bash">
            <code>{`curl -X POST https://api.passport-office.com/v1/devices \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "user_id": "user_123",
    "device_type": "ios",
    "device_token": "device_push_token",
    "name": "John's iPhone"
  }'`}</code>
          </pre>

          <h2>Step 4: Create a Mobile Pass</h2>
          
          <p>
            Create a mobile pass for the registered device:
          </p>

          <pre className="language-bash">
            <code>{`curl -X POST https://api.passport-office.com/v1/passes \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "device_id": "device_123",
    "access_points": ["entrance_1", "elevator_bank_a"],
    "valid_from": "2024-01-01T00:00:00Z",
    "valid_until": "2024-12-31T23:59:59Z"
  }'`}</code>
          </pre>

          <h2>Next Steps</h2>
          
          <div className="bg-blue-50 border-l-4 border-passport-blue p-4 my-8">
            <p className="font-semibold">Ready to dive deeper?</p>
            <ul className="mt-2">
              <li>
                <Link href="/guides/authentication" className="text-passport-blue hover:underline">
                  Learn about advanced authentication options
                </Link>
              </li>
              <li>
                <Link href="/guides/mobile-identity" className="text-passport-blue hover:underline">
                  Implement secure mobile identity verification
                </Link>
              </li>
              <li>
                <Link href="/api-reference" className="text-passport-blue hover:underline">
                  Explore the complete API reference
                </Link>
              </li>
            </ul>
          </div>

          <h2>Need Help?</h2>
          
          <p>
            If you run into any issues or have questions:
          </p>
          
          <ul>
            <li>Check our <Link href="/guides/error-handling" className="text-passport-blue hover:underline">error handling guide</Link></li>
            <li>Review <Link href="/guides/best-practices" className="text-passport-blue hover:underline">best practices</Link></li>
            <li>Contact our support team at support@passport-office.com</li>
          </ul>
        </div>
      </div>
    </>
  )
}