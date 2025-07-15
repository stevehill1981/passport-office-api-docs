import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

interface NavSection {
  title: string
  items: {
    title: string
    href: string
  }[]
}

const navigation: NavSection[] = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Quick Start', href: '/guides/quick-start' },
      { title: 'Authentication', href: '/guides/authentication' },
      { title: 'Mobile Identity', href: '/guides/mobile-identity' },
      { title: 'Device Management', href: '/guides/device-management' },
    ]
  },
  {
    title: 'API Reference',
    items: [
      { title: 'Overview', href: '/api-reference' },
      { title: 'Authentication', href: '/api-reference/authentication' },
      { title: 'Users', href: '/api-reference/users' },
      { title: 'Devices', href: '/api-reference/devices' },
      { title: 'Passes', href: '/api-reference/passes' },
      { title: 'Access Control', href: '/api-reference/access-control' },
      { title: 'Webhooks', href: '/api-reference/webhooks' },
    ]
  },
  {
    title: 'SDKs',
    items: [
      { title: 'Overview', href: '/sdks' },
      { title: 'Ruby', href: '/sdks/ruby' },
      { title: 'Python', href: '/sdks/python' },
      { title: 'TypeScript', href: '/sdks/typescript' },
      { title: 'Go', href: '/sdks/go' },
      { title: 'Java', href: '/sdks/java' },
      { title: 'PHP', href: '/sdks/php' },
      { title: 'C#', href: '/sdks/csharp' },
    ]
  },
  {
    title: 'Resources',
    items: [
      { title: 'Webhooks', href: '/guides/webhooks' },
      { title: 'Error Handling', href: '/guides/error-handling' },
      { title: 'Best Practices', href: '/guides/best-practices' },
      { title: 'Security', href: '/guides/security' },
      { title: 'Rate Limits', href: '/guides/rate-limits' },
    ]
  }
]

export default function Navigation() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(true)

  const isActive = (href: string) => {
    return router.pathname === href
  }

  return (
    <aside className={`${isOpen ? 'w-64' : 'w-0'} fixed left-0 top-16 bottom-0 overflow-y-auto bg-white border-r border-gray-200 transition-all duration-300 lg:block`}>
      <nav className="p-4 space-y-8">
        {navigation.map((section) => (
          <div key={section.title}>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`
                      block px-3 py-2 text-sm rounded-md transition-colors
                      ${isActive(item.href)
                        ? 'bg-passport-blue text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                      }
                    `}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}