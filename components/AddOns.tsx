export default function AddOns() {
  const onTheNight = [
    {
      title: 'Short Highlight Reel',
      description: '60-90 second cinematic recap of your event',
      price: '+£149',
      icon: '🎥',
    },
    {
      title: 'Instagram Stories Ready',
      description: 'Pre-formatted clips perfect for Stories',
      price: '+£99',
      icon: '📱',
    },
    {
      title: 'Live Content Drops',
      description: 'Get content during the event for real-time posting',
      price: '+£199',
      icon: '⚡',
    },
    {
      title: 'Guest Mini-Interviews',
      description: 'Quick interviews with guests (30-60 seconds each)',
      price: '+£79',
      icon: '🎤',
    },
  ]

  const postEvent = [
    {
      title: 'Advanced Color Correction',
      description: 'Professional color grading and enhancement',
      price: '+£99',
      icon: '🎨',
    },
    {
      title: 'Caption Writing',
      description: 'We write engaging captions for all your posts',
      price: '+£49',
      icon: '✍️',
    },
    {
      title: 'Social Media Scheduling',
      description: 'We schedule and post content across your channels',
      price: '+£149',
      icon: '📅',
    },
    {
      title: 'Branded Overlays',
      description: 'Add your logo, event name, or branding to content',
      price: '+£79',
      icon: '🏷️',
    },
    {
      title: 'Image Effects & Filters',
      description: 'Add creative effects, filters, and enhancements to your images. Perfect for highlighting those silly moments and creating a unique visual style',
      price: '+£89',
      icon: '✨',
    },
  ]

  const premium = [
    {
      title: 'Professional Camera Equipment',
      description: 'Canon G7X camera, tripods, lighting rigs, and all professional camera operator equipment',
      price: '+£199',
      icon: '📷',
    },
    {
      title: 'Second Content Creator',
      description: 'Double coverage for larger events',
      price: '+£299',
      icon: '👥',
    },
    {
      title: 'Drone Coverage',
      description: 'Aerial shots (where permitted)',
      price: '+£399',
      icon: '🚁',
    },
    {
      title: 'Multi-Day Events',
      description: 'Coverage across multiple days',
      price: 'Custom',
      icon: '📆',
    },
  ]

  return (
    <section id="add-ons" className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4">
            Optional Add-Ons
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gray-300 mx-auto mb-3 sm:mb-4"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Enhance your package with these optional services. Mix and match to create the perfect experience.
          </p>
        </div>

        {/* On-the-Night Add-Ons */}
        <div className="mb-10 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6 flex items-center">
            <span className="mr-2 sm:mr-3 text-lg sm:text-2xl">⚡</span>
            On-the-Night Upgrades
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {onTheNight.map((addon, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm rounded-lg p-4 sm:p-6 hover:shadow-md transition-all border border-gray-200/50"
              >
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{addon.icon}</div>
                <h4 className="font-bold text-black mb-1.5 sm:mb-2 text-sm sm:text-base">{addon.title}</h4>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">{addon.description}</p>
                <p className="text-base sm:text-lg font-semibold text-gray-800">{addon.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Post-Event Add-Ons */}
        <div className="mb-10 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6 flex items-center">
            <span className="mr-2 sm:mr-3 text-lg sm:text-2xl">✨</span>
            Post-Event Add-Ons
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {postEvent.map((addon, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm rounded-lg p-4 sm:p-6 hover:shadow-md transition-all border border-gray-200/50"
              >
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{addon.icon}</div>
                <h4 className="font-bold text-black mb-1.5 sm:mb-2 text-sm sm:text-base">{addon.title}</h4>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">{addon.description}</p>
                <p className="text-base sm:text-lg font-semibold text-gray-800">{addon.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Options */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6 flex items-center">
            <span className="mr-2 sm:mr-3 text-lg sm:text-2xl">⭐</span>
            Premium Options
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {premium.map((addon, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-md rounded-lg p-4 sm:p-6 hover:shadow-md transition-all border border-gray-200/50"
              >
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{addon.icon}</div>
                <h4 className="font-bold text-black mb-1.5 sm:mb-2 text-sm sm:text-base">{addon.title}</h4>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">{addon.description}</p>
                <p className="text-base sm:text-lg font-semibold text-gray-800">{addon.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
