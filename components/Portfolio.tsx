'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'wedding', name: 'Weddings' },
    { id: 'corporate', name: 'Corporate' },
    { id: 'birthday', name: 'Birthdays' },
    { id: 'launch', name: 'Brand Launches' },
    { id: 'party', name: 'Parties' },
  ]

  // Portfolio images - using placeholder structure
  const portfolioItems = [
    { id: 1, category: 'wedding', image: '/portfolio/wedding-1.jpg', title: 'Wedding Reception', description: 'Natural moments captured throughout the evening' },
    { id: 2, category: 'corporate', image: '/portfolio/corporate-1.jpg', title: 'Corporate Networking', description: 'Professional event coverage' },
    { id: 3, category: 'birthday', image: '/portfolio/birthday-1.jpg', title: 'Birthday Celebration', description: 'Candid party moments' },
    { id: 4, category: 'launch', image: '/portfolio/launch-1.jpg', title: 'Product Launch', description: 'Brand event coverage' },
    { id: 5, category: 'party', image: '/portfolio/party-1.jpg', title: 'Club Night', description: 'Dynamic nightlife content' },
    { id: 6, category: 'wedding', image: '/portfolio/wedding-2.jpg', title: 'Garden Wedding', description: 'Outdoor celebration' },
    { id: 7, category: 'corporate', image: '/portfolio/corporate-2.jpg', title: 'Conference', description: 'Professional gathering' },
    { id: 8, category: 'birthday', image: '/portfolio/birthday-2.jpg', title: '30th Birthday', description: 'Milestone celebration' },
    { id: 9, category: 'launch', image: '/portfolio/launch-2.jpg', title: 'Fashion Launch', description: 'Style event coverage' },
    { id: 10, category: 'party', image: '/portfolio/party-2.jpg', title: 'Summer Party', description: 'Outdoor celebration' },
    { id: 11, category: 'wedding', image: '/portfolio/wedding-3.jpg', title: 'Intimate Wedding', description: 'Small ceremony' },
    { id: 12, category: 'corporate', image: '/portfolio/corporate-3.jpg', title: 'Awards Night', description: 'Formal event' },
    { id: 13, category: 'birthday', image: '/portfolio/birthday-3.jpg', title: 'Kids Party', description: 'Family celebration' },
    { id: 14, category: 'launch', image: '/portfolio/launch-3.jpg', title: 'Tech Launch', description: 'Innovation showcase' },
    { id: 15, category: 'party', image: '/portfolio/party-3.jpg', title: 'Rooftop Party', description: 'City views' },
    { id: 16, category: 'wedding', image: '/portfolio/wedding-4.jpg', title: 'Beach Wedding', description: 'Coastal celebration' },
    { id: 17, category: 'corporate', image: '/portfolio/corporate-4.jpg', title: 'Team Building', description: 'Company event' },
    { id: 18, category: 'birthday', image: '/portfolio/birthday-4.jpg', title: 'Surprise Party', description: 'Special moment' },
  ]

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory)

  return (
    <section id="portfolio" className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Our Portfolio
          </h2>
          <div className="w-24 h-1 bg-gray-300 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real events. Real moments. See the quality of content we deliver.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                selectedCategory === category.id
                  ? 'bg-white/80 backdrop-blur-md text-gray-900 border border-gray-200 shadow-sm'
                  : 'bg-white/50 backdrop-blur-sm text-gray-700 border border-gray-200/50 hover:bg-white/70'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-lg bg-gray-200 hover:shadow-xl transition-all cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const parent = target.parentElement
                  if (parent) {
                    parent.className = 'group relative aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center'
                    parent.innerHTML = `
                      <div class="text-center p-4">
                        <div class="text-4xl mb-2">📸</div>
                        <p class="text-sm text-gray-600 font-medium">${item.title}</p>
                      </div>
                    `
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-200">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#book"
            className="inline-block px-8 py-4 bg-white/80 backdrop-blur-md text-gray-900 font-semibold rounded-md hover:bg-white transition-all transform hover:scale-105 shadow-sm border border-gray-200"
          >
            Book Your Event
          </a>
        </div>
      </div>
    </section>
  )
}

