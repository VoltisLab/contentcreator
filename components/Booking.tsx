'use client'

import { useState } from 'react'

export default function Booking() {
  const [formData, setFormData] = useState({
    eventType: '',
    date: '',
    time: '',
    duration: '',
    location: '',
    guests: '',
    email: '',
    phone: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Booking submitted:', formData)
    alert('Thank you! We\'ll contact you shortly to confirm your booking.')
  }

  return (
    <section id="book" className="bg-gradient-to-br from-purple-900 via-pink-800 to-orange-900 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Book Your Event
          </h2>
          <div className="w-24 h-1 bg-accent-yellow mx-auto mb-4"></div>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you within 24 hours with a quote and availability.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Event Type *</label>
              <select
                required
                value={formData.eventType}
                onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                className="w-full px-4 py-3 rounded-md bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-orange"
              >
                <option value="">Select event type</option>
                <option value="birthday">Birthday Party</option>
                <option value="wedding">Wedding</option>
                <option value="corporate">Corporate Event</option>
                <option value="launch">Brand Launch</option>
                <option value="networking">Networking Event</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Event Date *</label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-3 rounded-md bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-accent-orange"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Start Time *</label>
              <input
                type="time"
                required
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full px-4 py-3 rounded-md bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-accent-orange"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Duration *</label>
              <select
                required
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                className="w-full px-4 py-3 rounded-md bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-accent-orange"
              >
                <option value="">Select duration</option>
                <option value="2">2 hours</option>
                <option value="4">4 hours</option>
                <option value="full">Full event</option>
                <option value="custom">Custom</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Location *</label>
              <input
                type="text"
                required
                placeholder="Event location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-4 py-3 rounded-md bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-orange"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Expected Guests</label>
              <input
                type="number"
                placeholder="Approximate number"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="w-full px-4 py-3 rounded-md bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-orange"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Email *</label>
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-md bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-orange"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Phone *</label>
              <input
                type="tel"
                required
                placeholder="+44 7XXX XXX XXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-md bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-orange"
              />
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="inline-block px-8 py-4 bg-accent-orange text-white font-semibold rounded-md hover:bg-accent-orange/90 transition-all transform hover:scale-105 shadow-lg text-lg"
            >
              Get Instant Quote
            </button>
            <p className="text-sm text-gray-300 mt-4">
              We'll respond within 24 hours with availability and pricing
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}

