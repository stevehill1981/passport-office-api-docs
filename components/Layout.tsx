import React from 'react'
import Navigation from './Navigation'
import Header from './Header'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-passport-gray">
      <Header />
      <div className="flex">
        <Navigation />
        <main className="flex-1 lg:ml-64">
          <div className="py-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}