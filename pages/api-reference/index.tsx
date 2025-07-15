import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const SwaggerUI = dynamic(() => import('swagger-ui-react'), { ssr: false })

export default function ApiReference() {
  const [spec, setSpec] = useState<any>(null)

  useEffect(() => {
    fetch('/openapi.yaml')
      .then(res => res.text())
      .then(text => {
        const yaml = require('js-yaml')
        const parsedSpec = yaml.load(text)
        setSpec(parsedSpec)
      })
      .catch(err => console.error('Failed to load OpenAPI spec:', err))
  }, [])

  return (
    <>
      <Head>
        <title>API Reference - Passport Office</title>
        <meta name="description" content="Complete API reference for Passport Office mobile access control" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">API Reference</h1>
          <p className="text-lg text-gray-600">
            Complete reference documentation for the Passport Office API. Explore endpoints, request/response schemas, and authentication methods.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          {spec ? (
            <SwaggerUI spec={spec} />
          ) : (
            <div className="flex items-center justify-center h-64">
              <div className="text-gray-500">Loading API documentation...</div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}