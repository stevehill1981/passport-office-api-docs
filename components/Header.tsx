import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-passport-navy shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">Passport Office</span>
              <span className="ml-2 text-sm text-passport-blue">API Docs</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/guides" className="text-gray-300 hover:text-white transition-colors">
              Guides
            </Link>
            <Link href="/api-reference" className="text-gray-300 hover:text-white transition-colors">
              API Reference
            </Link>
            <Link href="/sdks" className="text-gray-300 hover:text-white transition-colors">
              SDKs
            </Link>
            <a
              href="https://github.com/netnodes/passport-office"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              GitHub
            </a>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-passport-navy border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/guides"
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Guides
            </Link>
            <Link
              href="/api-reference"
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              API Reference
            </Link>
            <Link
              href="/sdks"
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              SDKs
            </Link>
            <a
              href="https://github.com/netnodes/passport-office"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  )
}