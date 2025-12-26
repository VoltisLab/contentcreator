export default function EventTypes() {
  const eventTypes = [
    { name: 'Birthday Parties', icon: '🎉' },
    { name: 'Weddings', icon: '💍' },
    { name: 'Club Nights & Parties', icon: '🎵' },
    { name: 'Brand Launches', icon: '🚀' },
    { name: 'Corporate Events', icon: '💼' },
    { name: 'Networking Events', icon: '🤝' },
    { name: 'Influencer Events', icon: '⭐' },
    { name: 'Private Dinners', icon: '🍽️' },
    { name: 'Fashion Shows', icon: '👗' },
    { name: 'University Events', icon: '🎓' },
  ]

  return (
    <section id="event-types" className="bg-gray-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4">
            Perfect For Every Event
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gray-300 mx-auto mb-3 sm:mb-4"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            From intimate dinners to large-scale launches, we capture your event content naturally and professionally.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {eventTypes.map((event, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 text-center hover:shadow-md transition-all transform hover:-translate-y-1 cursor-pointer group border border-gray-200/50"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform">{event.icon}</div>
              <h3 className="text-xs sm:text-sm font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
                {event.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
