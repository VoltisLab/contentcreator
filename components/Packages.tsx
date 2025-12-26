export default function Packages() {
  const packages = [
    {
      name: 'Starter',
      price: '£189',
      duration: '2 hours',
      features: [
        '1 trained content creator',
        'High-quality photos & videos',
        'Vertical & horizontal formats',
        '24-hour delivery',
        'Cloud link access',
        'Social-ready content',
        'Can work as BTS photographer',
      ],
      popular: false,
    },
    {
      name: 'Standard',
      price: '£299',
      duration: '4 hours',
      features: [
        '1 trained content creator',
        'Photos, videos & BTS moments',
        'Social-ready edits included',
        'Same-night delivery',
        'Instagram Stories ready',
        'Basic color correction',
        'Cloud link + direct download',
        'Perfect as BTS photographer',
      ],
      popular: true,
    },
    {
      name: 'Premium',
      price: '£499',
      duration: 'Full event (up to 8hrs)',
      features: [
        'Full event coverage (up to 8 hours)',
        '60-90 second highlight reel',
        'Priority same-night delivery',
        'Advanced edits & color grading',
        'Branded overlays (logo, event name)',
        'Guest mini-interviews',
        'Social media scheduling support',
        'Add-on flexibility',
        'Dedicated BTS photographer option',
      ],
      popular: false,
    },
  ]

  return (
    <section id="packages" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Packages & Pricing
          </h2>
          <div className="w-24 h-1 bg-gray-300 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the package that fits your event. Custom events? Build your own package.
          </p>
          <p className="text-sm text-gray-500 mt-4 italic">
            * Our creators can also work as your behind-the-scenes (BTS) photographer if you already have a main photographer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-lg shadow-sm p-8 border-2 transition-all transform hover:-translate-y-2 ${
                pkg.popular
                  ? 'border-gray-300 scale-105 shadow-lg bg-gray-50/50 backdrop-blur-sm'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-white/90 backdrop-blur-md text-gray-800 px-4 py-1 rounded-full text-sm font-semibold border border-gray-200 shadow-sm">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-black mb-2">{pkg.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-black">{pkg.price}</span>
                </div>
                <p className="text-gray-600">{pkg.duration}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#book"
                className={`block w-full text-center px-6 py-3 rounded-md font-semibold transition-all ${
                  pkg.popular
                    ? 'bg-gray-900 text-white hover:bg-gray-800'
                    : 'bg-gray-100 text-black hover:bg-gray-200'
                }`}
              >
                Book Now
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Need something custom?</p>
          <a
            href="#book"
            className="inline-block px-8 py-4 bg-white/80 backdrop-blur-md text-gray-900 font-semibold rounded-md hover:bg-white transition-all transform hover:scale-105 shadow-sm border border-gray-200"
          >
            Build Your Own Package
          </a>
        </div>
      </div>
    </section>
  )
}
