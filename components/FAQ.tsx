'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Is iPhone quality good enough for professional events?',
      answer: 'Absolutely. Modern iPhones (iPhone 14 Pro and newer) shoot in ProRes and capture cinematic-quality photos and video. Combined with trained creators who understand lighting, composition, and storytelling, you get professional results. Many major brands and influencers use iPhone content for their campaigns.',
    },
    {
      question: 'Can you work as a BTS (Behind-the-Scenes) photographer?',
      answer: 'Yes! If you already have a main photographer, our creators can work alongside them as your BTS photographer. This is perfect for capturing candid moments, behind-the-scenes content, and additional angles that your main photographer might miss. Just let us know when booking.',
    },
    {
      question: 'How fast is delivery?',
      answer: 'Standard packages include 24-hour delivery. Our Standard and Premium packages offer same-night delivery. For live content drops, you can receive content during the event for real-time posting.',
    },
    {
      question: 'Can guests request photos?',
      answer: 'Yes! We capture crowd shots and candid moments throughout the event. Guests can request specific photos, and we\'ll do our best to capture them. For larger events, we recommend the Premium package which includes more comprehensive coverage.',
    },
    {
      question: 'What if my event runs late?',
      answer: 'No problem. We understand events can run over. We\'ll stay until the end (with reasonable overtime charges) or until you\'re satisfied with coverage. This is discussed during booking.',
    },
    {
      question: 'Can I book last minute?',
      answer: 'We do our best to accommodate last-minute bookings. Availability depends on creator schedules. For events within 48 hours, please contact us directly and we\'ll check availability immediately.',
    },
    {
      question: 'What formats do you deliver?',
      answer: 'We deliver photos in high-resolution JPEG and videos in MP4 format. All content is optimized for social media (Instagram, TikTok, LinkedIn) and comes in vertical, horizontal, and square formats. Raw files available on request.',
    },
    {
      question: 'Do you edit the content?',
      answer: 'Yes! All packages include basic color correction and optimization. Standard and Premium packages include more advanced editing. You can also add professional color grading as an add-on.',
    },
    {
      question: 'What areas do you cover?',
      answer: 'We currently cover major cities in the UK (London, Manchester, Birmingham, Leeds, etc.). For events outside these areas, travel costs may apply. Contact us to discuss your location.',
    },
    {
      question: 'Can I see examples of your work?',
      answer: 'Absolutely! Check out our portfolio section or contact us and we\'ll send you a portfolio of recent events. We\'re happy to show examples specific to your event type.',
    },
  ]

  return (
    <section id="faq" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-gray-300 mx-auto"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-colors bg-white"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50/50 transition-colors group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-black pr-4 group-hover:text-gray-900 transition-colors">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-200 animate-fade-in">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
