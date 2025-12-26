'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Logo() {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return <span className="text-2xl font-bold text-black">One Day Agency</span>
  }

  return (
    <div className="relative w-32 h-10">
      <Image
        src="/logo.svg"
        alt="One Day Agency"
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
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<string | null>(null)

  const menuItems = [
    { name: 'About', href: '/about' },
    { 
      name: 'Work', 
      href: '/work',
      submenu: [
        { name: 'Creative', href: '/work/creative' },
        { name: 'Digital', href: '/work/digital' },
        { name: 'OOH', href: '/work/ooh' },
        { name: 'TV & VOD', href: '/work/tv-vod' },
        { name: 'Radio', href: '/work/radio' },
        { name: 'International', href: '/work/international' },
        { name: 'Ad Tech', href: '/work/ad-tech' },
      ]
    },
    { name: 'Explore', href: '/explore' },
    { name: 'News', href: '/news' },
    { name: 'Contact Us', href: '/contact' },
  ]

  const locations = [
    { flag: '🇬🇧', name: 'UK' },
    { flag: '🇵🇱', name: 'Warsaw' },
    { flag: '🇫🇷', name: 'Paris' },
    { flag: '🇩🇪', name: 'Berlin' },
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
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-black transition-colors relative group/item"
                  onMouseEnter={() => item.submenu && setIsSubMenuOpen(item.name)}
                  onMouseLeave={() => setIsSubMenuOpen(null)}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-orange transition-all group-hover/item:w-full"></span>
                </Link>
                {item.submenu && isSubMenuOpen === item.name && (
                  <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-2 animate-fade-in">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent-orange/10 hover:text-accent-orange transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="flex items-center space-x-2">
              {locations.map((loc) => (
                <button
                  key={loc.name}
                  className="text-lg hover:opacity-70 transition-opacity"
                  title={loc.name}
                >
                  {loc.flag}
                </button>
              ))}
            </div>
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
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block text-gray-700 hover:text-black font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="mt-2 ml-4 space-y-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block text-sm text-gray-600 hover:text-black"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
              {locations.map((loc) => (
                <button key={loc.name} className="text-lg">
                  {loc.flag}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}


