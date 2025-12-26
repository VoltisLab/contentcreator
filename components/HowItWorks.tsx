export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Book Your Event',
      description: 'Choose your date, location, and duration. Tell us about your event type and we\'ll match you with the perfect creator.',
      icon: '📅',
    },
    {
      number: '2',
      title: 'We Show Up',
      description: 'A trained content creator arrives at your event with the latest iPhone. No bulky equipment, no disruption.',
      icon: '📱',
    },
    {
      number: '3',
      title: 'We Capture Everything',
      description: 'Photos, videos, behind-the-scenes moments - all captured naturally. We document the big moments and those little silly moments by hosts, guests, and kids too. We\'re professionals at creating a story for your event.',
      icon: '📸',
    },
    {
      number: '4',
      title: 'You Get Your Content',
      description: 'Same night or next day delivery via cloud link. Social-ready, optimized, and ready to share.',
      icon: '⚡',
    },
  ]

  return (
    <section id="how-it-works" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            How It Works
          </h2>
          <div className="w-24 h-1 bg-gray-300 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple, fast, and stress-free. Get professional event content in four easy steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative text-center group"
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-900 text-3xl font-bold mb-4 shadow-sm group-hover:scale-110 transition-transform">
                  {step.number}
                </div>
                <div className="text-5xl mb-4">{step.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform translate-x-4">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gray-300 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
