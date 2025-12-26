export default function WhyiPhone() {
  const benefits = [
    {
      title: 'Cinematic Quality',
      description: 'Latest iPhones shoot industry-level photos and video. Your content looks professional, not amateur.',
      icon: '🎬',
    },
    {
      title: 'Less Intrusive',
      description: 'No bulky cameras or lighting rigs. Guests behave naturally, creating authentic moments.',
      icon: '🤳',
    },
    {
      title: 'Faster Turnaround',
      description: 'No complex editing workflows. Get your content same night or within 24 hours.',
      icon: '⚡',
    },
    {
      title: 'Mobile-Optimized',
      description: 'People want photos for their phones. Traditional cameras shoot landscape - wrong resolution, wrong format. We capture portrait-first content that looks perfect on mobile screens.',
      icon: '📱',
    },
    {
      title: 'Lower Cost',
      description: 'No expensive equipment means lower prices for you. Professional quality at a fraction of the cost.',
      icon: '💰',
    },
    {
      title: 'Modern Aesthetic',
      description: 'iPhone content has a fresh, authentic look that resonates with today\'s audiences.',
      icon: '✨',
    },
  ]

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4">
            Why iPhone?
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gray-300 mx-auto mb-3 sm:mb-4"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            iPhone cameras are now industry-level. Combined with trained creators, you get professional event content without the traditional photographer overhead.
          </p>
          <p className="text-xs sm:text-sm md:text-base text-gray-700 max-w-3xl mx-auto mt-3 sm:mt-4 bg-white/80 backdrop-blur-sm px-4 py-3 sm:px-6 sm:py-4 rounded-lg border border-gray-200/50 font-medium">
            <strong>Why cameras don't work for mobile:</strong> People want to see what happened at the event on their phones. Traditional cameras shoot in landscape format with resolutions that don't match mobile screens. Most users view content in portrait mode, but cameras aren't designed for that. We capture in the formats people actually use - portrait-first, mobile-optimized, ready to view and share instantly.
          </p>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-3xl mx-auto mt-3 sm:mt-4 bg-white/60 backdrop-blur-sm px-4 py-2 sm:px-6 sm:py-3 rounded-lg border border-gray-200/50">
            <strong>For bigger jobs:</strong> We also have professional camera equipment including Canon G7X cameras, tripods, lighting rigs, and all the equipment a professional camera operator would use. Perfect for larger events, corporate productions, or when you need that extra level of polish.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-sm rounded-lg p-5 sm:p-6 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 border border-gray-200/50"
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{benefit.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3">{benefit.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-sm p-4 sm:p-6 md:p-8 mt-8 sm:mt-12 border border-gray-200/50">
          <h3 className="text-xl sm:text-2xl font-bold text-black mb-6 sm:mb-8 text-center">Traditional Photographer vs iPhone Creator</h3>
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="inline-block min-w-full align-middle px-4 sm:px-0">
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-2 sm:py-4 sm:px-4 font-semibold text-gray-700 text-xs sm:text-sm">Feature</th>
                    <th className="text-center py-3 px-2 sm:py-4 sm:px-4 font-semibold text-gray-700 text-xs sm:text-sm">Traditional</th>
                    <th className="text-center py-3 px-2 sm:py-4 sm:px-4 font-semibold text-gray-900 text-xs sm:text-sm">iPhone Creator</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 px-2 sm:py-4 sm:px-4 font-medium text-xs sm:text-sm">Equipment</td>
                    <td className="py-3 px-2 sm:py-4 sm:px-4 text-center text-gray-600 text-xs sm:text-sm">Bulky cameras, lighting rigs</td>
                    <td className="py-3 px-2 sm:py-4 sm:px-4 text-center text-gray-600 text-xs sm:text-sm">Just an iPhone</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-2 sm:py-4 sm:px-4 font-medium text-xs sm:text-sm">Intrusiveness</td>
                    <td className="py-3 px-2 sm:py-4 sm:px-4 text-center text-gray-600 text-xs sm:text-sm">Can feel staged</td>
                    <td className="py-3 px-2 sm:py-4 sm:px-4 text-center text-gray-600 text-xs sm:text-sm">Natural, discreet</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-2 sm:py-4 sm:px-4 font-medium text-xs sm:text-sm">Delivery Time</td>
                    <td className="py-3 px-2 sm:py-4 sm:px-4 text-center text-gray-600 text-xs sm:text-sm">Weeks for edits</td>
                    <td className="py-3 px-2 sm:py-4 sm:px-4 text-center text-gray-600 text-xs sm:text-sm">Same night or 24hrs</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-2 sm:py-4 sm:px-4 font-medium text-xs sm:text-sm">Cost</td>
                    <td className="py-3 px-2 sm:py-4 sm:px-4 text-center text-gray-600 text-xs sm:text-sm">Higher rates</td>
                    <td className="py-3 px-2 sm:py-4 sm:px-4 text-center text-gray-600 text-xs sm:text-sm">Lower cost</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-2 sm:py-4 sm:px-4 font-medium text-xs sm:text-sm">Mobile Format</td>
                    <td className="py-3 px-2 sm:py-4 sm:px-4 text-center text-gray-600 text-xs sm:text-sm">Landscape, wrong resolution</td>
                    <td className="py-3 px-2 sm:py-4 sm:px-4 text-center text-gray-600 text-xs sm:text-sm">Portrait-first, mobile-optimized</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-2 sm:py-4 sm:px-4 font-medium text-xs sm:text-sm">Social Ready</td>
                    <td className="py-3 px-2 sm:py-4 sm:px-4 text-center text-gray-600 text-xs sm:text-sm">Requires editing</td>
                    <td className="py-3 px-2 sm:py-4 sm:px-4 text-center text-gray-600 text-xs sm:text-sm">Ready to post</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-2 sm:py-4 sm:px-4 font-medium text-xs sm:text-sm">BTS Option</td>
                    <td className="py-3 px-2 sm:py-4 sm:px-4 text-center text-gray-600 text-xs sm:text-sm">Not typically offered</td>
                    <td className="py-3 px-2 sm:py-4 sm:px-4 text-center text-gray-600 text-xs sm:text-sm">Perfect for BTS coverage</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
