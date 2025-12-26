'use client'

import { useSearchParams } from 'next/navigation'
import { useState, Suspense } from 'react'
import Link from 'next/link'

function CheckoutForm() {
  const searchParams = useSearchParams()
  const packageName = searchParams.get('package') || 'Standard'
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventLocation: '',
    eventType: '',
    additionalNotes: '',
    btsPhotographer: false,
    professionalEquipment: false,
  })

  const packages = {
    Starter: {
      name: 'Starter',
      price: '£189',
      duration: '2 hours',
      features: [
        '1 trained content creator',
        'High-quality photos & videos',
        'Vertical & horizontal formats',
        '24-hour delivery',
        'Cloud link access',
        'Social-ready content',
        'Can work as BTS photographer',
      ],
    },
    Standard: {
      name: 'Standard',
      price: '£299',
      duration: '4 hours',
      features: [
        '1 trained content creator',
        'Photos, videos & BTS moments',
        'Social-ready edits included',
        'Same-night delivery',
        'Instagram Stories ready',
        'Basic color correction',
        'Cloud link + direct download',
        'Perfect as BTS photographer',
      ],
    },
    Premium: {
      name: 'Premium',
      price: '£499',
      duration: 'Full event (up to 8hrs)',
      features: [
        'Full event coverage (up to 8 hours)',
        '60-90 second highlight reel',
        'Priority same-night delivery',
        'Advanced edits & color grading',
        'Branded overlays (logo, event name)',
        'Guest mini-interviews',
        'Social media scheduling support',
        'Add-on flexibility',
        'Dedicated BTS photographer option',
        'Professional equipment available (G7X, tripods, lights)',
      ],
    },
  }

  const selectedPackage = packages[packageName as keyof typeof packages] || packages.Standard

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    alert(`Thank you for your booking! We'll contact you soon to confirm your ${selectedPackage.name} package.`)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-8 py-6">
            <h1 className="text-3xl font-bold text-white mb-2">Complete Your Booking</h1>
            <p className="text-gray-300">Fill in your details to secure your event content creator</p>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-lg p-6 sticky top-8">
                  <h2 className="text-xl font-bold text-black mb-4">Order Summary</h2>
                  
                  <div className="mb-6 pb-6 border-b border-gray-200">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">{selectedPackage.name} Package</h3>
                        <p className="text-sm text-gray-600">{selectedPackage.duration}</p>
                      </div>
                      <span className="text-xl font-bold text-gray-900">{selectedPackage.price}</span>
                    </div>
                    
                    <ul className="mt-4 space-y-2">
                      {selectedPackage.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <svg className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="text-gray-900 font-semibold">{selectedPackage.price}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">VAT (20%)</span>
                      <span className="text-gray-900 font-semibold">
                        {selectedPackage.price === '£189' ? '£37.80' : 
                         selectedPackage.price === '£299' ? '£59.80' : '£99.80'}
                      </span>
                    </div>
                    <div className="pt-2 border-t border-gray-200 flex justify-between">
                      <span className="font-bold text-gray-900">Total</span>
                      <span className="font-bold text-gray-900 text-xl">
                        {selectedPackage.price === '£189' ? '£226.80' : 
                         selectedPackage.price === '£299' ? '£358.80' : '£598.80'}
                      </span>
                    </div>
                  </div>

                  <div className="text-xs text-gray-500">
                    <p>* Payment will be processed after confirmation</p>
                    <p>* You'll receive an invoice via email</p>
                  </div>
                </div>
              </div>

              {/* Booking Form */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                        placeholder="+44 7700 900000"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="eventDate" className="block text-sm font-semibold text-gray-700 mb-2">
                        Event Date *
                      </label>
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        required
                        value={formData.eventDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="eventType" className="block text-sm font-semibold text-gray-700 mb-2">
                        Event Type *
                      </label>
                      <select
                        id="eventType"
                        name="eventType"
                        required
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      >
                        <option value="">Select event type</option>
                        <option value="wedding">Wedding</option>
                        <option value="birthday">Birthday Party</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="launch">Brand Launch</option>
                        <option value="party">Party/Club Night</option>
                        <option value="networking">Networking Event</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="eventLocation" className="block text-sm font-semibold text-gray-700 mb-2">
                      Event Location *
                    </label>
                    <input
                      type="text"
                      id="eventLocation"
                      name="eventLocation"
                      required
                      value={formData.eventLocation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      placeholder="London, UK"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="btsPhotographer"
                        name="btsPhotographer"
                        checked={formData.btsPhotographer}
                        onChange={handleChange}
                        className="mt-1 mr-3 w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
                      />
                      <label htmlFor="btsPhotographer" className="text-sm text-gray-700">
                        I would like the content creator to work as a BTS (Behind-The-Scenes) photographer
                      </label>
                    </div>
                    <div className="flex items-start bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <input
                        type="checkbox"
                        id="professionalEquipment"
                        name="professionalEquipment"
                        checked={formData.professionalEquipment}
                        onChange={handleChange}
                        className="mt-1 mr-3 w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
                      />
                      <div>
                        <label htmlFor="professionalEquipment" className="text-sm font-semibold text-gray-900 block mb-1">
                          Professional Camera Equipment (+£199)
                        </label>
                        <p className="text-xs text-gray-600">
                          For bigger jobs: Canon G7X camera, tripods, lighting rigs, and all professional camera operator equipment. Perfect for larger events, corporate productions, or when you need that extra level of polish.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="additionalNotes" className="block text-sm font-semibold text-gray-700 mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      id="additionalNotes"
                      name="additionalNotes"
                      rows={4}
                      value={formData.additionalNotes}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      placeholder="Any special requirements or questions..."
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-gray-900 text-white py-4 px-6 rounded-md font-semibold text-lg hover:bg-gray-800 transition-all transform hover:scale-[1.02] shadow-lg"
                    >
                      Confirm Booking
                    </button>
                    <p className="text-xs text-gray-500 text-center mt-4">
                      By confirming, you agree to our terms and conditions. We'll contact you within 24 hours to finalize details.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading checkout...</p>
        </div>
      </div>
    }>
      <CheckoutForm />
    </Suspense>
  )
}

