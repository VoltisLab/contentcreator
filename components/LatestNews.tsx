export default function LatestNews() {
  const newsItems = [
    {
      date: 'Dec 22, 2025',
      category: 'VOD Advertising, TV Advertising',
      title: 'Sky Adsmart Advertising Costs',
    },
    {
      date: 'Dec 22, 2025',
      category: 'VOD Advertising, TV Advertising',
      title: 'Channel 4 Advertising Costs',
    },
    {
      date: 'Dec 22, 2025',
      category: 'TV Advertising',
      title: 'ITV Advertising Costs',
    },
    {
      date: 'Dec 16, 2025',
      category: 'Articles',
      title: 'How Platforms Will Separate Human And AI Content In 2026',
    },
    {
      date: 'Dec 16, 2025',
      category: 'OOH',
      title: 'How to Advertise in Service Stations',
    },
    {
      date: 'Dec 16, 2025',
      category: 'Cinema Advertising',
      title: 'How to advertise in Cinemas',
    },
  ]

  const categoryColors: { [key: string]: string } = {
    'VOD Advertising, TV Advertising': 'accent-blue',
    'TV Advertising': 'accent-purple',
    'Articles': 'accent-green',
    'OOH': 'accent-orange',
    'Cinema Advertising': 'accent-yellow',
  }

  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            The latest from MomentsMade.
          </h2>
          <div className="w-24 h-1 bg-accent-orange mx-auto mb-2"></div>
          <p className="text-gray-600">News, Updates and Blog</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => {
            const categoryColor = categoryColors[item.category] || 'accent-orange'
            return (
              <article
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer border-t-4 border-transparent hover:border-accent-orange group"
              >
                <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                <div className={`text-xs font-semibold mb-3 uppercase tracking-wide ${categoryColor === 'accent-orange' ? 'text-accent-orange' : categoryColor === 'accent-blue' ? 'text-accent-blue' : categoryColor === 'accent-green' ? 'text-accent-green' : categoryColor === 'accent-purple' ? 'text-accent-purple' : 'text-accent-yellow'}`}>
                  {item.category}
                </div>
                <h3 className="text-lg font-semibold text-black group-hover:text-accent-orange transition-colors">
                  {item.title}
                </h3>
                <div className="mt-4 flex items-center text-accent-orange opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-semibold mr-2">Read More</span>
                  <span>→</span>
                </div>
              </article>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="/news"
            className="inline-block px-8 py-4 bg-accent-orange text-white font-semibold rounded-md hover:bg-accent-orange/90 transition-all transform hover:scale-105 shadow-lg"
          >
            View All News
          </a>
        </div>
      </div>
    </section>
  )
}


