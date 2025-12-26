'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Logo() {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return <span className="text-2xl font-bold text-black">MomentsMade</span>
  }

  return (
    <div className="relative w-32 h-10">
      <Image
        src="/logo.svg"
        alt="MomentsMade"
        fill
        className="object-contain"
        priority
        onError={() => setHasError(true)}
      />
    </div>
  )
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Packages', href: '#packages' },
    { name: 'FAQ', href: '#faq' },
  ]

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Logo />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-black transition-colors relative group/item"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all group-hover/item:w-full"></span>
              </Link>
            ))}
            <a
              href="#book"
              className="inline-block px-6 py-2 bg-gray-900 text-white font-semibold rounded-md hover:bg-gray-800 transition-all"
            >
              Book Now
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-gray-700 hover:text-black font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="#book"
              className="block w-full text-center px-6 py-2 bg-accent-orange text-white font-semibold rounded-md hover:bg-accent-orange/90 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
