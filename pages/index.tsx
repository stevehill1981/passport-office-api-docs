import Head from 'next/head'
import Link from 'next/link'
import Hero from '@/components/Hero'
import FeatureCard from '@/components/FeatureCard'

export default function Home() {
  return (
    <>
      <Head>
        <title>Passport Office API Documentation</title>
        <meta name="description" content="Mobile Access Control & Identity Management API Documentation" />
      </Head>
      
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Mobile Identity"
            description="Secure user authentication and verification for mobile devices"
            icon="🔐"
            href="/guides/mobile-identity"
          />
          <FeatureCard
            title="Device Management"
            description="Register and manage iOS and Android devices"
            icon="📱"
            href="/guides/device-management"
          />
          <FeatureCard
            title="API Reference"
            description="Complete API documentation with interactive examples"
            icon="📚"
            href="/api-reference"
          />
        </div>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Quick Start</h2>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <p className="text-lg text-gray-700 mb-6">
              Get started with the Passport Office API in minutes. Follow our step-by-step guide to integrate mobile access control into your application.
            </p>
            <Link
              href="/guides/quick-start"
              className="inline-flex items-center px-6 py-3 bg-passport-blue text-white font-medium rounded-md hover:bg-blue-600 transition-colors"
            >
              Get Started
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/guides/authentication" className="block p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Authentication</h3>
              <p className="text-gray-600">Learn about OAuth 2.0 authentication and HMAC signatures</p>
            </Link>
            <Link href="/guides/webhooks" className="block p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Webhooks</h3>
              <p className="text-gray-600">Set up real-time notifications for device events</p>
            </Link>
            <Link href="/guides/error-handling" className="block p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Error Handling</h3>
              <p className="text-gray-600">Handle API errors gracefully in your application</p>
            </Link>
            <Link href="/guides/best-practices" className="block p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Best Practices</h3>
              <p className="text-gray-600">Security and performance recommendations</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}