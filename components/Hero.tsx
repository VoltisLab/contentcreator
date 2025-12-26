'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Packages from './Packages'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [videoErrors, setVideoErrors] = useState<{ [key: number]: boolean }>({})
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0) // For video slider
  const [loadedVideos, setLoadedVideos] = useState<Set<number>>(new Set([0, 1, 2])) // Track which videos are loaded
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({})

  // Event images from Pexels - weddings and birthday celebrations
  const eventImages = [
    'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', // Wedding
    'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', // Wedding
    'https://images.pexels.com/photos/3171815/pexels-photo-3171815.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', // Birthday cake
    'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', // Birthday celebration
    'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', // Wedding
  ]

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % eventImages.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [eventImages.length])

  // Video sources
  const videos = [
    {
      src: '/videos/wedding.mp4',
      poster: '',
      title: 'Wedding Event',
    },
    {
      src: '/videos/video-1.mp4',
      poster: '',
      title: 'Event Moment',
    },
    {
      src: '/videos/video-2.mp4',
      poster: '',
      title: 'Event Content',
    },
    {
      src: '/videos/video-3.mp4',
      poster: '/videos/video-3-poster.jpg',
      title: 'Event Moment 3',
    },
  ]

  useEffect(() => {
    // Auto-play only visible videos (3 at a time)
    const visibleIndices = [currentVideoIndex, currentVideoIndex + 1, currentVideoIndex + 2]
    visibleIndices.forEach((index) => {
      if (index < videos.length && videoRefs.current[index]) {
        videoRefs.current[index]?.play().catch(() => {
          // Autoplay prevented, will play on user interaction
        })
      }
    })
  }, [currentVideoIndex, videos.length])

  // Handle video click - only allow pausing, not playing
  const handleVideoClick = (index: number) => {
    if (videoRefs.current[index]) {
      if (!videoRefs.current[index]?.paused) {
        videoRefs.current[index]?.pause()
      }
      // If paused, do nothing - user cannot resume
    }
  }

  // Navigate to next set of videos
  const handleNext = () => {
    if (currentVideoIndex + 3 < videos.length) {
      const nextIndex = currentVideoIndex + 1
      setCurrentVideoIndex(nextIndex)
      // Load the next video that will become visible
      if (nextIndex + 2 < videos.length && !loadedVideos.has(nextIndex + 2)) {
        setLoadedVideos(prev => {
          const newSet = new Set(prev)
          newSet.add(nextIndex + 2)
          return newSet
        })
      }
    }
  }

  // Navigate to previous set of videos
  const handlePrev = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1)
    }
  }

  return (
    <section className="relative w-full overflow-hidden bg-gray-50">
      {/* Image Slider Background */}
      <div className="relative h-screen w-full">
        <div className="absolute inset-0 z-0">
          {eventImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image}
                alt={`Event ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                onLoad={() => index === 0 && setIsLoaded(true)}
                unoptimized
              />
            </div>
          ))}
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-50"></div>
          )}
          {/* White overlay */}
          <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
        </div>

        {/* Content Over Slider */}
        <div className="absolute inset-0 z-40 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full text-center">
            <div className="mb-6 animate-fade-in">
              <span className="inline-block px-4 py-2 bg-white/90 backdrop-blur-md text-gray-800 text-sm font-medium rounded-full border border-white/50 shadow-sm">
                Professional Event Content, Minus the Stress
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up text-gray-900 drop-shadow-lg">
              Event Content, Made Simple.
            </h1>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight animate-slide-up text-gray-800 drop-shadow-lg" style={{ animationDelay: '0.1s' }}>
              Professional Event Photos. Shot on iPhone.
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto mb-6 leading-relaxed animate-slide-up bg-white/90 backdrop-blur-md px-6 py-4 rounded-lg shadow-lg" style={{ animationDelay: '0.2s' }}>
              At Moments Made, we believe the best content is captured, not directed. Events are about connection, atmosphere, and energy - not stopping people mid-moment to pose. By working with iPhones, we stay present without being intrusive, allowing moments to unfold naturally while still being beautifully documented.
            </p>

            <p className="text-base sm:text-lg text-gray-700 max-w-4xl mx-auto mb-6 leading-relaxed animate-slide-up bg-white/85 backdrop-blur-sm px-6 py-3 rounded-lg shadow-md" style={{ animationDelay: '0.25s' }}>
              We believe great event content should be immediate. Waiting weeks for photos no longer fits the way events live online today. That's why our approach prioritises speed, simplicity, and quality - delivering content while the moment is still relevant.
            </p>

            <p className="text-base sm:text-lg text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed animate-slide-up bg-white/90 backdrop-blur-md px-6 py-4 rounded-lg border border-gray-200/50 shadow-lg" style={{ animationDelay: '0.3s' }}>
              <strong>We're professionals at creating a story for your event.</strong> We capture those little silly moments by the event host, guests, kids, and everyone in between. It's these authentic, unscripted moments that make your event memorable - the laughter, the spontaneous dances, the candid expressions. We document it all to tell the complete story of your event.
            </p>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-50 flex gap-2">
          {eventImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'w-8 bg-white/90'
                  : 'w-2 bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
          <svg className="w-6 h-6 text-gray-900" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      {/* Video Slider - Below Slider */}
      <div className="relative bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
              See Us In Action
            </h2>
            <div className="w-24 h-1 bg-gray-300 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real moments from real events. Watch how we capture the story of your celebration.
            </p>
          </div>

          {/* Video Slider Container */}
          <div className="relative">
            {/* Navigation Buttons */}
            {currentVideoIndex > 0 && (
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all transform hover:scale-110"
                aria-label="Previous videos"
              >
                <svg className="w-6 h-6 text-gray-900" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
            )}
            
            {currentVideoIndex + 3 < videos.length && (
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all transform hover:scale-110"
                aria-label="Next videos"
              >
                <svg className="w-6 h-6 text-gray-900" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            )}

            {/* Video Grid - Shows 3 at a time */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 overflow-hidden">
              {[currentVideoIndex, currentVideoIndex + 1, currentVideoIndex + 2].map((index) => {
                if (index >= videos.length) return null
                const video = videos[index]
                const isVisible = index >= currentVideoIndex && index < currentVideoIndex + 3
                const shouldLoad = loadedVideos.has(index)

                return (
                  <div
                    key={index}
                    className="group relative aspect-[9/16] overflow-hidden rounded-lg bg-gray-200 shadow-lg hover:shadow-2xl transition-all transform hover:scale-[1.02] cursor-pointer"
                    onClick={() => handleVideoClick(index)}
                  >
                    {shouldLoad && !videoErrors[index] ? (
                      <video
                        ref={(el) => {
                          videoRefs.current[index] = el
                        }}
                        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                        loop
                        muted
                        playsInline
                        autoPlay={isVisible}
                        controls={false}
                        disablePictureInPicture
                        disableRemotePlayback
                        poster={video.poster || undefined}
                        onContextMenu={(e) => e.preventDefault()}
                        onDragStart={(e) => e.preventDefault()}
                        onError={(e) => {
                          console.error('Video failed to load:', video.src, e)
                          setVideoErrors(prev => ({ ...prev, [index]: true }))
                        }}
                        onLoadedData={() => {
                          console.log('Video loaded successfully:', video.src)
                        }}
                      >
                        <source src={video.src} type="video/mp4" />
                        <source src={video.src.replace('.mp4', '.webm')} type="video/webm" />
                        Your browser does not support the video tag.
                      </video>
                    ) : shouldLoad && videoErrors[index] ? (
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-50 flex items-center justify-center">
                        <div className="text-center p-4">
                          <div className="text-4xl mb-2">📹</div>
                          <p className="text-sm text-gray-600 font-medium mb-2">{video.title}</p>
                          <p className="text-xs text-gray-500">Video format not supported</p>
                        </div>
                      </div>
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-50 flex items-center justify-center">
                        <div className="text-center p-4">
                          <div className="text-4xl mb-2">📹</div>
                          <p className="text-sm text-gray-600 font-medium">{video.title}</p>
                        </div>
                      </div>
                    )}
                    
                    {/* Gradient overlay on hover */}
                    {shouldLoad && !videoErrors[index] && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <p className="text-sm font-medium">{video.title}</p>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Slider Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: Math.ceil(videos.length / 3) }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    const newIndex = i * 3
                    setCurrentVideoIndex(newIndex)
                    // Load videos for this set
                    setLoadedVideos(prev => {
                      const newSet = new Set(prev)
                      for (let j = newIndex; j < Math.min(newIndex + 3, videos.length); j++) {
                        newSet.add(j)
                      }
                      return newSet
                    })
                  }}
                  className={`h-2 rounded-full transition-all ${
                    Math.floor(currentVideoIndex / 3) === i
                      ? 'w-8 bg-gray-900'
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
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

      {/* Packages Section - Right after See Us In Action */}
      <Packages />
    </section>
  )
}
