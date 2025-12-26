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
      title: 'Social-First',
      description: 'Perfect for Instagram, TikTok, LinkedIn. Vertical, horizontal, and square formats ready to post.',
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
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Why iPhone?
          </h2>
          <div className="w-24 h-1 bg-gray-300 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            iPhone cameras are now industry-level. Combined with trained creators, you get professional event content without the traditional photographer overhead.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 border border-gray-200/50"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-black mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-sm p-8 mt-12 border border-gray-200/50">
          <h3 className="text-2xl font-bold text-black mb-8 text-center">Traditional Photographer vs iPhone Creator</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-700"></th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-700">Traditional Photographer</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">iPhone Creator</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 px-4 font-medium">Equipment</td>
                  <td className="py-4 px-4 text-center text-gray-600">Bulky cameras, lighting rigs</td>
                  <td className="py-4 px-4 text-center text-gray-600">Just an iPhone</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Intrusiveness</td>
                  <td className="py-4 px-4 text-center text-gray-600">Can feel staged</td>
                  <td className="py-4 px-4 text-center text-gray-600">Natural, discreet</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Delivery Time</td>
                  <td className="py-4 px-4 text-center text-gray-600">Weeks for edits</td>
                  <td className="py-4 px-4 text-center text-gray-600">Same night or 24hrs</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Cost</td>
                  <td className="py-4 px-4 text-center text-gray-600">Higher rates</td>
                  <td className="py-4 px-4 text-center text-gray-600">Lower cost</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Social Ready</td>
                  <td className="py-4 px-4 text-center text-gray-600">Requires editing</td>
                  <td className="py-4 px-4 text-center text-gray-600">Ready to post</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">BTS Option</td>
                  <td className="py-4 px-4 text-center text-gray-600">Not typically offered</td>
                  <td className="py-4 px-4 text-center text-gray-600">Perfect for BTS coverage</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
