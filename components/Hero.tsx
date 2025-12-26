'use client'

import { useRef, useEffect } from 'react'

export default function Hero() {
  const videoRef1 = useRef<HTMLVideoElement>(null)
  const videoRef2 = useRef<HTMLVideoElement>(null)
  const videoRef3 = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Auto-play and loop all videos
    const videoRefs = [videoRef1, videoRef2, videoRef3]
    videoRefs.forEach((videoRef) => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {
          // Autoplay prevented, will play on user interaction
        })
      }
    })
  }, [])

  // Placeholder video sources - replace with your videos later
  const videos = [
    {
      src: '/videos/video-1.mp4',
      poster: '/videos/video-1-poster.jpg',
      title: 'Event Moment 1',
    },
    {
      src: '/videos/video-2.mp4',
      poster: '/videos/video-2-poster.jpg',
      title: 'Event Moment 2',
    },
    {
      src: '/videos/video-3.mp4',
      poster: '/videos/video-3-poster.jpg',
      title: 'Event Moment 3',
    },
  ]

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gray-50">
      {/* White overlay background */}
      <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-0"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto w-full">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="mb-6 animate-fade-in">
              <span className="inline-block px-4 py-2 bg-white/90 backdrop-blur-md text-gray-800 text-sm font-medium rounded-full border border-gray-200 shadow-sm">
                Professional Event Content, Minus the Stress
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up text-gray-900">
              Event Content, Made Simple.
            </h1>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight animate-slide-up text-gray-800" style={{ animationDelay: '0.1s' }}>
              Professional Event Photos. Shot on iPhone.
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto mb-6 leading-relaxed animate-slide-up bg-white/80 backdrop-blur-md px-6 py-4 rounded-lg" style={{ animationDelay: '0.2s' }}>
              At Moments Made, we believe the best content is captured, not directed. Events are about connection, atmosphere, and energy - not stopping people mid-moment to pose. By working with iPhones, we stay present without being intrusive, allowing moments to unfold naturally while still being beautifully documented.
            </p>

            <p className="text-base sm:text-lg text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed animate-slide-up bg-white/70 backdrop-blur-sm px-6 py-3 rounded-lg" style={{ animationDelay: '0.25s' }}>
              We believe great event content should be immediate. Waiting weeks for photos no longer fits the way events live online today. That's why our approach prioritises speed, simplicity, and quality - delivering content while the moment is still relevant.
            </p>
          </div>

          {/* 3 Portrait Video Containers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {videos.map((video, index) => {
              const videoRef = index === 0 ? videoRef1 : index === 1 ? videoRef2 : videoRef3
              return (
                <div
                  key={index}
                  className="group relative aspect-[9/16] overflow-hidden rounded-lg bg-gray-200 shadow-lg hover:shadow-2xl transition-all transform hover:scale-[1.02]"
                >
                  <video
                    ref={videoRef}
                    className="absolute inset-0 w-full h-full object-cover"
                    loop
                    muted
                    playsInline
                    autoPlay
                    poster={video.poster}
                  >
                    <source src={video.src} type="video/mp4" />
                    <source src={video.src.replace('.mp4', '.webm')} type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-sm font-medium">{video.title}</p>
                  </div>
                </div>

                {/* Fallback if video fails to load */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-50 flex items-center justify-center opacity-0 group-hover:opacity-0">
                  <div className="text-center p-4">
                    <div className="text-4xl mb-2">📹</div>
                    <p className="text-sm text-gray-600 font-medium">{video.title}</p>
                  </div>
                </div>
              </div>
              )
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="#book"
              className="inline-block px-8 py-4 bg-gray-900 text-white font-semibold rounded-md hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg text-lg"
            >
              Book a Creator
            </a>
            <a
              href="#how-it-works"
              className="inline-block px-8 py-4 bg-white text-gray-900 border-2 border-gray-900 font-semibold rounded-md hover:bg-gray-50 transition-all transform hover:scale-105 text-lg"
            >
              See How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
