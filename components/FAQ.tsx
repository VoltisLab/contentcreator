'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What exactly is an integrated agency?',
      answer: 'An integrated agency is the only agency you need for marketing and advertising. There\'s no longer a distinction between an advertising agency, a media agency, a digital marketing agency or a creative agency. We believe consistency across channels is key. As an integrated agency, we specialise in managing multiplatform marketing campaigns from concept to delivery. With an all-senior, multi-disciplinary team, we manage all moving parts to deliver creative out-of-home, PPC, TV, Radio and Digital campaigns.',
    },
    {
      question: 'Why One Day?',
      answer: 'With offices in London, Manchester, Warsaw, Paris and Berlin, our goal is to transcend traditional agency-brand barriers, methodologies, and models. With an all-senior team, we strive to cultivate seamless relationships, eradicating knowledge silos by bridging the divides between creative, media, and digital spheres.',
    },
    {
      question: 'Do we work internationally?',
      answer: 'Yes, One Day Agency works with brands across the globe. Our campaigns have spanned Europe, the Middle East, North America and beyond, delivering impact across borders.',
    },
    {
      question: 'Are you a media agency or a digital agency? Or...?',
      answer: 'We\'re an integrated agency — bridging the gap between media and digital to offer the best of both worlds. We have a full-service media planning and buying team covering OOH, TV, radio and more, alongside a performance marketing team that drives results across paid social, search, programmatic and beyond. What makes One Day unique is how these teams work together, not in silos. Creative, media and digital are aligned from day one, delivering smarter, faster and more effective campaigns.',
    },
    {
      question: 'Do you work with B2C or B2B brands?',
      answer: 'Both. One Day Agency works across B2C and B2B, and often with brands that blur the lines between the two. Our integrated approach adapts to the audience, not the label — whether we\'re driving mass reach for a consumer brand or targeting niche decision-makers for a B2B campaign. What matters is crafting the right strategy, creative and media mix to reach your goals, regardless of the sector.',
    },
  ]

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Frequently Asked Questions.
          </h2>
          <div className="w-24 h-1 bg-accent-orange mx-auto"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-accent-orange/50 transition-colors"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-accent-orange/5 transition-colors group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-black pr-4 group-hover:text-accent-orange transition-colors">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-accent-orange flex-shrink-0 transition-transform ${
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
                <div className="px-6 py-4 bg-accent-orange/5 border-t border-accent-orange/20 animate-fade-in">
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


