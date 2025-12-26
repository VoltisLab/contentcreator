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
  ]

  const premium = [
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
    <section id="add-ons" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Optional Add-Ons
          </h2>
          <div className="w-24 h-1 bg-gray-300 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enhance your package with these optional services. Mix and match to create the perfect experience.
          </p>
        </div>

        {/* On-the-Night Add-Ons */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
            <span className="mr-3">⚡</span>
            On-the-Night Upgrades
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {onTheNight.map((addon, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm rounded-lg p-6 hover:shadow-md transition-all border border-gray-200/50"
              >
                <div className="text-4xl mb-3">{addon.icon}</div>
                <h4 className="font-bold text-black mb-2">{addon.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{addon.description}</p>
                <p className="text-lg font-semibold text-gray-800">{addon.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Post-Event Add-Ons */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
            <span className="mr-3">✨</span>
            Post-Event Add-Ons
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {postEvent.map((addon, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm rounded-lg p-6 hover:shadow-md transition-all border border-gray-200/50"
              >
                <div className="text-4xl mb-3">{addon.icon}</div>
                <h4 className="font-bold text-black mb-2">{addon.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{addon.description}</p>
                <p className="text-lg font-semibold text-gray-800">{addon.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Options */}
        <div>
          <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
            <span className="mr-3">⭐</span>
            Premium Options
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {premium.map((addon, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-md rounded-lg p-6 hover:shadow-md transition-all border border-gray-200/50"
              >
                <div className="text-4xl mb-3">{addon.icon}</div>
                <h4 className="font-bold text-black mb-2">{addon.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{addon.description}</p>
                <p className="text-lg font-semibold text-gray-800">{addon.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
