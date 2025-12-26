'use client'

import { useState, useRef, useEffect } from 'react'

export default function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsVideoLoaded(true)
      })
    }
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onLoadedData={() => setIsVideoLoaded(true)}
          poster="/hero-poster.jpg"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <source src="/hero-video.webm" type="video/webm" />
        </video>
        {!isVideoLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-50"></div>
        )}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-white/80 backdrop-blur-md text-gray-800 text-sm font-medium rounded-full border border-white/50 shadow-sm">
              Professional Event Content, Minus the Stress
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up text-gray-900">
            Event Content, Made Simple.
          </h1>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight animate-slide-up text-gray-800" style={{ animationDelay: '0.1s' }}>
            Professional Event Photos. Shot on iPhone.
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed animate-slide-up bg-white/60 backdrop-blur-md px-6 py-4 rounded-lg" style={{ animationDelay: '0.2s' }}>
            We attend your event and capture high-quality photos and videos using iPhones — fast, discreet, and social-ready. No bulky cameras. No intimidating photographers. Just authentic moments, delivered same night.
          </p>
          
          <div className="text-xl sm:text-2xl font-semibold text-gray-800 mb-12 animate-slide-up bg-white/50 backdrop-blur-sm px-6 py-3 rounded-lg inline-block" style={{ animationDelay: '0.3s' }}>
            Capture the moment. No cameras. No hassle.
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="#book"
              className="inline-block px-8 py-4 bg-white/90 backdrop-blur-md text-gray-900 font-semibold rounded-md hover:bg-white transition-all transform hover:scale-105 shadow-lg text-lg border border-white/50"
            >
              Book a Creator
            </a>
            <a
              href="#how-it-works"
              className="inline-block px-8 py-4 bg-white/20 backdrop-blur-md text-gray-900 border-2 border-white/50 font-semibold rounded-md hover:bg-white/30 transition-all transform hover:scale-105 text-lg"
            >
              See How It Works
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-gray-900" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}
