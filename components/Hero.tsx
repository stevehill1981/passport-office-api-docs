export default function Hero() {
  return (
    <div className="bg-passport-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Passport Office API
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Mobile Access Control & Identity Management Platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/guides/quick-start"
              className="inline-flex items-center justify-center px-8 py-3 bg-passport-blue text-white font-medium rounded-md hover:bg-blue-600 transition-colors"
            >
              Get Started
            </a>
            <a
              href="/api-reference"
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-passport-navy transition-colors"
            >
              API Reference
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}