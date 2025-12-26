import Link from 'next/link'

export default function Footer() {
  const quickLinks = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Packages', href: '#packages' },
    { name: 'Event Types', href: '#event-types' },
    { name: 'Add-Ons', href: '#add-ons' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'FAQ', href: '#faq' },
  ]

  const eventTypes = [
    'Birthday Parties',
    'Weddings',
    'Corporate Events',
    'Brand Launches',
    'Networking Events',
    'Fashion Shows',
  ]

  return (
    <footer className="bg-gray-900 text-gray-300 relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-orange to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-white font-bold mb-4 flex items-center">
              Quick Links
              <span className="ml-2 w-8 h-0.5 bg-accent-orange"></span>
            </h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-accent-orange transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 flex items-center">
              Event Types
              <span className="ml-2 w-8 h-0.5 bg-accent-blue"></span>
            </h3>
            <ul className="space-y-2 text-sm">
              {eventTypes.map((type, index) => (
                <li key={index}>
                  <Link href="#event-types" className="hover:text-accent-blue transition-colors">
                    {type}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 flex items-center">
              Services
              <span className="ml-2 w-8 h-0.5 bg-accent-green"></span>
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#packages" className="hover:text-accent-green transition-colors">Starter Package</Link></li>
              <li><Link href="#packages" className="hover:text-accent-green transition-colors">Standard Package</Link></li>
              <li><Link href="#packages" className="hover:text-accent-green transition-colors">Premium Package</Link></li>
              <li><Link href="#add-ons" className="hover:text-accent-green transition-colors">Add-Ons</Link></li>
              <li><Link href="#add-ons" className="hover:text-accent-green transition-colors">Custom Packages</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 flex items-center">
              Contact
              <span className="ml-2 w-8 h-0.5 bg-accent-yellow"></span>
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#book" className="hover:text-accent-yellow transition-colors">Book Your Event</Link></li>
              <li><Link href="/about" className="hover:text-accent-yellow transition-colors">About Us</Link></li>
              <li><a href="mailto:hello@contentcreator.com" className="hover:text-accent-yellow transition-colors">hello@contentcreator.com</a></li>
              <li><a href="tel:+447000000000" className="hover:text-accent-yellow transition-colors">+44 700 000 0000</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="mb-2">
            <strong className="text-white">Content Creator</strong>
          </p>
          <p className="text-gray-500 text-sm mb-2">
            Professional event content, minus the stress.
          </p>
          <p className="text-gray-500 text-sm">
            Copyright © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
