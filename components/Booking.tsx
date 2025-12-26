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
    btsPhotographer: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Booking submitted:', formData)
    alert('Thank you! We\'ll contact you shortly to confirm your booking.')
  }

  return (
    <section id="book" className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-900">
            Book Your Event
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gray-300 mx-auto mb-3 sm:mb-4"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto px-2">
            Fill out the form below and we'll get back to you within 24 hours with a quote and availability.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-md rounded-lg p-5 sm:p-6 md:p-8 border border-gray-200/50 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            <div>
              <label className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 text-gray-900">Event Type *</label>
              <select
                required
                value={formData.eventType}
                onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-md bg-white border border-gray-300 text-sm sm:text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
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
              <label className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 text-gray-900">Event Date *</label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-md bg-white border border-gray-300 text-sm sm:text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 text-gray-900">Start Time *</label>
              <input
                type="time"
                required
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-md bg-white border border-gray-300 text-sm sm:text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 text-gray-900">Duration *</label>
              <select
                required
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-md bg-white border border-gray-300 text-sm sm:text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                <option value="">Select duration</option>
                <option value="2">2 hours</option>
                <option value="4">4 hours</option>
                <option value="full">Full event (up to 8hrs)</option>
                <option value="custom">Custom</option>
              </select>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 text-gray-900">Location *</label>
              <input
                type="text"
                required
                placeholder="Event location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-md bg-white border border-gray-300 text-sm sm:text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 text-gray-900">Expected Guests</label>
              <input
                type="number"
                placeholder="Approximate number"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-md bg-white border border-gray-300 text-sm sm:text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            <div>
              <label className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 text-gray-900">Email *</label>
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-md bg-white border border-gray-300 text-sm sm:text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 text-gray-900">Phone *</label>
              <input
                type="tel"
                required
                placeholder="+44 7XXX XXX XXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-md bg-white border border-gray-300 text-sm sm:text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
          </div>

          <div className="mb-4 sm:mb-6">
            <label className="flex items-start space-x-2 sm:space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.btsPhotographer}
                onChange={(e) => setFormData({ ...formData, btsPhotographer: e.target.checked })}
                className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900 border-gray-300 rounded focus:ring-gray-400 mt-0.5"
              />
              <span className="text-xs sm:text-sm text-gray-700">
                I already have a main photographer and would like this service as a <strong>BTS (Behind-the-Scenes) photographer</strong>
              </span>
            </label>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-gray-900 text-white font-semibold rounded-md hover:bg-gray-800 transition-all transform hover:scale-105 shadow-sm text-base sm:text-lg w-full sm:w-auto"
            >
              Get Instant Quote
            </button>
            <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
              We'll respond within 24 hours with availability and pricing
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
