import Head from 'next/head'
import Link from 'next/link'

const sdks = [
  {
    name: 'Ruby',
    icon: '💎',
    description: 'Official Ruby SDK for Passport Office API',
    installCommand: 'gem install passport-office',
    href: '/sdks/ruby'
  },
  {
    name: 'Python',
    icon: '🐍',
    description: 'Official Python SDK for Passport Office API',
    installCommand: 'pip install passport-office',
    href: '/sdks/python'
  },
  {
    name: 'TypeScript',
    icon: '📘',
    description: 'Official TypeScript/JavaScript SDK for Passport Office API',
    installCommand: 'npm install @passport-office/sdk',
    href: '/sdks/typescript'
  },
  {
    name: 'Go',
    icon: '🐹',
    description: 'Official Go SDK for Passport Office API',
    installCommand: 'go get github.com/netnodes/passport-office-go',
    href: '/sdks/go'
  },
  {
    name: 'Java',
    icon: '☕',
    description: 'Official Java SDK for Passport Office API',
    installCommand: 'implementation "com.passportoffice:sdk:1.0.0"',
    href: '/sdks/java'
  },
  {
    name: 'PHP',
    icon: '🐘',
    description: 'Official PHP SDK for Passport Office API',
    installCommand: 'composer require passport-office/sdk',
    href: '/sdks/php'
  },
  {
    name: 'C#',
    icon: '🔷',
    description: 'Official C# SDK for Passport Office API',
    installCommand: 'dotnet add package PassportOffice.SDK',
    href: '/sdks/csharp'
  }
]

export default function SDKs() {
  return (
    <>
      <Head>
        <title>SDKs - Passport Office API</title>
        <meta name="description" content="Official SDKs for Passport Office API in multiple languages" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Official SDKs</h1>
          <p className="text-lg text-gray-600">
            Use our official SDKs to integrate Passport Office into your application quickly and securely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sdks.map((sdk) => (
            <Link
              key={sdk.name}
              href={sdk.href}
              className="block bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{sdk.icon}</span>
                <span className="text-sm font-medium text-passport-blue">Official</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{sdk.name}</h3>
              <p className="text-gray-600 mb-4">{sdk.description}</p>
              <div className="bg-gray-50 rounded p-3">
                <code className="text-sm text-gray-800">{sdk.installCommand}</code>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 border-l-4 border-passport-blue p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">OpenAPI Specification</h2>
          <p className="text-gray-700 mb-4">
            All our SDKs are generated from our OpenAPI specification, ensuring consistency and completeness across all languages.
          </p>
          <a
            href="/openapi.yaml"
            className="inline-flex items-center text-passport-blue hover:underline"
            download
          >
            Download OpenAPI Spec
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </a>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Community SDKs</h2>
          <p className="text-gray-600 mb-4">
            Looking for an SDK in a different language? Check out these community-maintained libraries:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• Rust - <a href="https://github.com/community/passport-office-rust" className="text-passport-blue hover:underline">passport-office-rust</a></li>
            <li>• Swift - <a href="https://github.com/community/passport-office-swift" className="text-passport-blue hover:underline">PassportOfficeSwift</a></li>
            <li>• Kotlin - <a href="https://github.com/community/passport-office-kotlin" className="text-passport-blue hover:underline">passport-office-kotlin</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}