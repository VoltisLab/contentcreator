export default function Testimonials() {
  const testimonials = [
    {
      quote: 'Saved us so much money compared to traditional photographers. The content was amazing and we got it the same night! Perfect for our brand launch.',
      author: 'Sarah Chen',
      role: 'Marketing Director, Tech Startup',
      event: 'Brand Launch Event',
    },
    {
      quote: 'Didn\'t even notice the creator was there. The photos looked so natural and authentic. Our guests loved them and we had content to post immediately.',
      author: 'James Mitchell',
      role: 'Event Organizer',
      event: 'Corporate Networking Event',
    },
    {
      quote: 'Got content the same night which was perfect for our social media. The highlight reel was incredible and saved us so much time. Highly recommend!',
      author: 'Emma Thompson',
      role: 'Wedding Planner',
      event: 'Wedding Reception',
    },
    {
      quote: 'The iPhone quality was better than I expected. Professional, modern, and exactly what we needed for our influencer event. Fast delivery too!',
      author: 'Michael Rodriguez',
      role: 'Brand Manager',
      event: 'Influencer Launch Party',
    },
  ]

  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-gray-300 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 border-l-4 border-gray-300"
            >
              <div className="mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-black">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
                <p className="text-xs text-gray-500 mt-1">{testimonial.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
