'use client'

import Image from 'next/image'
import { useState } from 'react'

function CaseStudyImage({ study }: { study: { title: string; image: string; gradient: string } }) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div className={`aspect-video bg-gradient-to-br ${study.gradient} flex items-center justify-center`}>
        <div className="text-center">
          <div className="text-4xl mb-2">📊</div>
          <p className="text-white text-sm font-medium">{study.title}</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <Image
        src={study.image}
        alt={study.title}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-500"
        onError={() => setHasError(true)}
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
    </>
  )
}

export default function CaseStudies() {
  const caseStudies = [
    {
      title: 'Tourism',
      category: 'Paid Media Advertising',
      image: '/case-studies/tourism.jpg',
      gradient: 'from-accent-orange to-accent-yellow',
    },
    {
      title: 'Motorsports',
      category: 'Experiential OOH Campaign',
      image: '/case-studies/motorsports.jpg',
      gradient: 'from-accent-blue to-accent-purple',
    },
    {
      title: 'FMCG',
      category: 'Out-of-Home Campaign',
      image: '/case-studies/fmcg.jpg',
      gradient: 'from-accent-green to-accent-blue',
    },
  ]

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Latest Case Studies
          </h2>
          <div className="w-24 h-1 bg-accent-orange mx-auto mb-4"></div>
          <p className="text-gray-600 mb-8">
            See below our selected work, click or tap to view.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer group border-2 border-transparent hover:border-accent-orange"
            >
              <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 group">
                <CaseStudyImage study={study} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2 group-hover:text-accent-orange transition-colors">{study.title}</h3>
                <p className="text-gray-600 text-sm">{study.category}</p>
                <div className="mt-4 flex items-center text-accent-orange opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-semibold mr-2">View Case Study</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/work"
            className="inline-block px-8 py-4 bg-accent-orange text-white font-semibold rounded-md hover:bg-accent-orange/90 transition-all transform hover:scale-105 shadow-lg"
          >
            Our Work
          </a>
        </div>
      </div>
    </section>
  )
}


