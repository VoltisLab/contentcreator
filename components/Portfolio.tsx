'use client'

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

  // Real Pexels event images - diverse event photography
  const portfolioItems = [
    { 
      id: 1, 
      category: 'wedding', 
      image: 'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', 
      title: 'Wedding Reception', 
      description: 'Natural moments captured throughout the evening' 
    },
    { 
      id: 2, 
      category: 'corporate', 
      image: 'https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', 
      title: 'Corporate Networking', 
      description: 'Professional event coverage' 
    },
    { 
      id: 3, 
      category: 'birthday', 
      image: 'https://images.pexels.com/photos/3171815/pexels-photo-3171815.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', 
      title: 'Birthday Celebration', 
      description: 'Candid party moments' 
    },
    { 
      id: 4, 
      category: 'launch', 
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', 
      title: 'Product Launch', 
      description: 'Brand event coverage' 
    },
    { 
      id: 5, 
      category: 'party', 
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', 
      title: 'Club Night', 
      description: 'Dynamic nightlife content' 
    },
    { 
      id: 6, 
      category: 'wedding', 
      image: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', 
      title: 'Garden Wedding', 
      description: 'Outdoor celebration' 
    },
    { 
      id: 7, 
      category: 'corporate', 
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', 
      title: 'Conference', 
      description: 'Professional gathering' 
    },
    { 
      id: 8, 
      category: 'birthday', 
      image: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', 
      title: '30th Birthday', 
      description: 'Milestone celebration' 
    },
    { 
      id: 9, 
      category: 'launch', 
      image: 'https://images.pexels.com/photos/1181400/pexels-photo-1181400.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', 
      title: 'Fashion Launch', 
      description: 'Style event coverage' 
    },
    { 
      id: 10, 
      category: 'party', 
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', 
      title: 'Summer Party', 
      description: 'Outdoor celebration' 
    },
    { 
      id: 11, 
      category: 'wedding', 
      image: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', 
      title: 'Intimate Wedding', 
      description: 'Small ceremony' 
    },
    { 
      id: 12, 
      category: 'corporate', 
      image: 'https://images.pexels.com/photos/1181403/pexels-photo-1181403.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', 
      title: 'Awards Night', 
      description: 'Formal event' 
    },
    { 
      id: 13, 
      category: 'birthday', 
      image: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', 
      title: 'Kids Party', 
      description: 'Family celebration' 
    },
    { 
      id: 14, 
      category: 'launch', 
      image: 'https://images.pexels.com/photos/1181398/pexels-photo-1181398.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', 
      title: 'Tech Launch', 
      description: 'Innovation showcase' 
    },
    { 
      id: 15, 
      category: 'party', 
      image: 'https://images.pexels.com/photos/1190299/pexels-photo-1190299.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', 
      title: 'Rooftop Party', 
      description: 'City views' 
    },
    { 
      id: 16, 
      category: 'wedding', 
      image: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', 
      title: 'Beach Wedding', 
      description: 'Coastal celebration' 
    },
    { 
      id: 17, 
      category: 'corporate', 
      image: 'https://images.pexels.com/photos/1181405/pexels-photo-1181405.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', 
      title: 'Team Building', 
      description: 'Company event' 
    },
    { 
      id: 18, 
      category: 'birthday', 
      image: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', 
      title: 'Surprise Party', 
      description: 'Special moment' 
    },
    { 
      id: 19, 
      category: 'wedding', 
      image: 'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', 
      title: 'Wedding Ceremony', 
      description: 'Beautiful moments' 
    },
    { 
      id: 20, 
      category: 'corporate', 
      image: 'https://images.pexels.com/photos/1181404/pexels-photo-1181404.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', 
      title: 'Business Event', 
      description: 'Professional networking' 
    },
    { 
      id: 21, 
      category: 'party', 
      image: 'https://images.pexels.com/photos/1190296/pexels-photo-1190296.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', 
      title: 'Night Party', 
      description: 'Evening celebration' 
    },
    { 
      id: 22, 
      category: 'launch', 
      image: 'https://images.pexels.com/photos/1181399/pexels-photo-1181399.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', 
      title: 'Brand Launch', 
      description: 'Product reveal' 
    },
    { 
      id: 23, 
      category: 'birthday', 
      image: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', 
      title: 'Birthday Party', 
      description: 'Celebration moments' 
    },
    { 
      id: 24, 
      category: 'wedding', 
      image: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', 
      title: 'Wedding Party', 
      description: 'Joyful celebration' 
    },
  ]

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory)

  return (
    <section id="portfolio" className="bg-gray-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4">
            Our Portfolio
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gray-300 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Real events. Real moments. See the quality of content we deliver.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-1.5 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
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
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-lg bg-gray-200 hover:shadow-xl transition-all cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
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

        <div className="text-center mt-8 sm:mt-12">
          <a
            href="#book"
            className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-white/80 backdrop-blur-md text-gray-900 font-semibold rounded-md hover:bg-white transition-all transform hover:scale-105 shadow-sm border border-gray-200 text-sm sm:text-base"
          >
            Book Your Event
          </a>
        </div>
      </div>
    </section>
  )
}
