import Link from 'next/link'

interface FeatureCardProps {
  title: string
  description: string
  icon: string
  href: string
}

export default function FeatureCard({ title, description, icon, href }: FeatureCardProps) {
  return (
    <Link href={href} className="block">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow h-full">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  )
}