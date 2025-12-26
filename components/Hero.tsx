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
  const [isMobile, setIsMobile] = useState(false)
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({})

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

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
    const videosPerView = isMobile ? 1 : 3
    if (currentVideoIndex + videosPerView < videos.length) {
      const nextIndex = currentVideoIndex + 1
      setCurrentVideoIndex(nextIndex)
      // Load the next video that will become visible
      const nextToLoad = isMobile ? nextIndex : nextIndex + 2
      if (nextToLoad < videos.length && !loadedVideos.has(nextToLoad)) {
        setLoadedVideos(prev => {
          const newSet = new Set(prev)
          newSet.add(nextToLoad)
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
      <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
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

        {/* Title Over Slider */}
        <div className="absolute inset-0 z-40 flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto w-full text-center">
            <div className="mb-3 sm:mb-4 md:mb-6 animate-fade-in">
              <span className="inline-block px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 bg-white/90 backdrop-blur-md text-gray-800 text-xs sm:text-sm font-medium rounded-full border border-white/50 shadow-sm">
                Professional Event Content, Minus the Stress
              </span>
            </div>
            
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight animate-slide-up text-gray-900 drop-shadow-lg px-1">
              Event Content, Made Simple.
            </h1>
            
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 lg:mb-8 leading-tight animate-slide-up text-gray-800 drop-shadow-lg px-1" style={{ animationDelay: '0.1s' }}>
              Professional Event Photos. Shot on iPhone.
            </h2>

            {/* CTA Buttons on Slider */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-slide-up mt-4 sm:mt-6" style={{ animationDelay: '0.2s' }}>
              <a
                href="#packages"
                className="inline-block px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-white/60 backdrop-blur-md text-gray-900 border-2 border-white/80 font-semibold rounded-md hover:bg-white/70 transition-all transform hover:scale-105 shadow-lg text-sm sm:text-base md:text-lg text-center whitespace-nowrap w-auto"
              >
                Book Now
              </a>
              <a
                href="#how-it-works"
                className="inline-block px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-white/40 backdrop-blur-md text-gray-900 border-2 border-white/60 font-semibold rounded-md hover:bg-white/50 transition-all transform hover:scale-105 text-sm sm:text-base md:text-lg text-center whitespace-nowrap w-auto"
              >
                See How It Works
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Content Below Slider */}
      <div className="relative bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Paragraphs */}
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-4xl mx-auto mb-4 sm:mb-5 md:mb-6 leading-relaxed animate-slide-up">
              At Moments Made, we believe the best content is captured, not directed. Events are about connection, atmosphere, and energy - not stopping people mid-moment to pose. By working with iPhones, we stay present without being intrusive, allowing moments to unfold naturally while still being beautifully documented.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-4xl mx-auto mb-4 sm:mb-5 md:mb-6 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
              We believe great event content should be immediate. Waiting weeks for photos no longer fits the way events live online today. That's why our approach prioritises speed, simplicity, and quality - delivering content while the moment is still relevant.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <strong>We're professionals at creating a story for your event.</strong> We capture those little silly moments by the event host, guests, kids, and everyone in between. It's these authentic, unscripted moments that make your event memorable - the laughter, the spontaneous dances, the candid expressions. We document it all to tell the complete story of your event.
            </p>
          </div>

          {/* Slide Indicators - Outside the slider */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {eventImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? 'w-8 bg-gray-900'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Video Slider - Below Slider */}
      <div className="relative bg-white pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4">
              See Us In Action
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gray-300 mx-auto mb-3 sm:mb-4"></div>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
              Real moments from real events. Watch how we capture the story of your celebration.
            </p>
          </div>

          {/* Video Slider Container */}
          <div className="relative">
            {/* Navigation Buttons */}
            {currentVideoIndex > 0 && (
              <button
                onClick={handlePrev}
                className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3 shadow-lg hover:bg-white transition-all transform hover:scale-110"
                aria-label="Previous videos"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
            )}
            
            {currentVideoIndex + (isMobile ? 1 : 3) < videos.length && (
              <button
                onClick={handleNext}
                className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3 shadow-lg hover:bg-white transition-all transform hover:scale-110"
                aria-label="Next videos"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            )}

            {/* Video Grid - Shows 1 on mobile, 3 on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 overflow-hidden">
              {(() => {
                const videosToShow = isMobile ? [currentVideoIndex] : [currentVideoIndex, currentVideoIndex + 1, currentVideoIndex + 2]
                return videosToShow.map((index) => {
                  if (index >= videos.length) return null
                  const video = videos[index]
                  const isVisible = isMobile ? index === currentVideoIndex : index >= currentVideoIndex && index < currentVideoIndex + 3
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
              })
            })()}
            </div>

            {/* Slider Indicators */}
            <div className="flex justify-center gap-2 mt-6 sm:mt-8">
              {Array.from({ length: Math.ceil(videos.length / (isMobile ? 1 : 3)) }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    const videosPerView = isMobile ? 1 : 3
                    const newIndex = i * videosPerView
                    setCurrentVideoIndex(newIndex)
                    // Load videos for this set
                    setLoadedVideos(prev => {
                      const newSet = new Set(prev)
                      for (let j = newIndex; j < Math.min(newIndex + videosPerView, videos.length); j++) {
                        newSet.add(j)
                      }
                      return newSet
                    })
                  }}
                  className={`h-2 rounded-full transition-all ${
                    Math.floor(currentVideoIndex / (isMobile ? 1 : 3)) === i
                      ? 'w-6 sm:w-8 bg-gray-900'
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Packages Section - Right after See Us In Action */}
      <Packages />
    </section>
  )
}
