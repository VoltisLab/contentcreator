import Link from 'next/link'

export default function Footer() {
  const services = [
    'Digital Marketing',
    'Influencer Marketing',
    'Media Buying and Planning',
    'PPC & Paid Social Workshops',
    'Local Advertising',
    'Ecommerce SEO',
    'Shopify Stores',
    'International Advertising',
    'Student Marketing',
    'Healthcare Marketing',
    'Crypto Advertising',
    'Destination Marketing',
    'Football Sponsorships',
  ]

  const oohServices = [
    'Outdoor advertising',
    'Billboard Advertising',
    'Radio Advertising',
    'Taxi Advertising',
    'Tube Ads',
    'Transport Advertising',
    'Bus Advertising',
    'Rail Advertising',
    '3D Billboards',
    'Wall Mural Advertising',
    'Airport Advertising',
    'Anamorphic Billboards',
  ]

  const digitalServices = [
    'PPC',
    'Paid Social',
    'Digital TV Advertising',
    'Digital Billboards',
    'DOOH',
    'Programmatic Display Advertising',
  ]

  const offices = [
    {
      name: 'Manchester Office HQ',
      address: '5th Floor, One Day Agency, Phoenix House, 45 Cross St, Manchester M2 4JF',
    },
    {
      name: 'London Office',
      address: '16 Great Chapel St, W1F 8FL',
    },
    {
      name: 'Warsaw Office',
      address: 'Prosta 20/00-850, 00-850 Warszawa',
    },
    {
      name: 'Paris Office',
      address: '33 Rue La Fayette, 75009 Paris',
    },
    {
      name: 'Berlin Office',
      address: 'Dircksenstraße 3, 10179 Berlin',
    },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300 relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-orange to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-white font-bold mb-4 flex items-center">
              Services
              <span className="ml-2 w-8 h-0.5 bg-accent-orange"></span>
            </h3>
            <ul className="space-y-2 text-sm">
              {services.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-accent-orange transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 flex items-center">
              Out of Home
              <span className="ml-2 w-8 h-0.5 bg-accent-blue"></span>
            </h3>
            <ul className="space-y-2 text-sm">
              {oohServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-accent-blue transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 flex items-center">
              Digital Media
              <span className="ml-2 w-8 h-0.5 bg-accent-green"></span>
            </h3>
            <ul className="space-y-2 text-sm">
              {digitalServices.map((service, index) => (
                <li key={index}>
                  <Link href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-accent-green transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 flex items-center">
              More from One Day
              <span className="ml-2 w-8 h-0.5 bg-accent-yellow"></span>
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/approach" className="hover:text-accent-yellow transition-colors">Approach</Link></li>
              <li><Link href="/creative" className="hover:text-accent-yellow transition-colors">Creative</Link></li>
              <li><Link href="/work" className="hover:text-accent-yellow transition-colors">Work and Clients</Link></li>
              <li><Link href="/about" className="hover:text-accent-yellow transition-colors">About Us</Link></li>
              <li><Link href="/news" className="hover:text-accent-yellow transition-colors">Blog, News, and Updates</Link></li>
              <li><Link href="/careers" className="hover:text-accent-yellow transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mb-8">
          <h3 className="text-white font-bold mb-6">Offices</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <div key={index}>
                <h4 className="text-white font-semibold mb-2">{office.name}</h4>
                <p className="text-sm">{office.address}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mb-8">
          <h3 className="text-white font-bold mb-4">Recognised by</h3>
          <div className="flex flex-wrap gap-4 text-sm">
            <span>World Out of Home Organization</span>
            <span>•</span>
            <span>Meta Business Partner Agency</span>
            <span>•</span>
            <span>Top 50 Integrated Agency</span>
            <span>•</span>
            <span>Google Partner Agency</span>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mb-8">
          <h3 className="text-white font-bold mb-4">Contact</h3>
          <div className="space-y-2 text-sm">
            <p>Email: <a href="mailto:hello@oneday.agency" className="hover:text-accent-orange transition-colors">hello@oneday.agency</a></p>
            <p>Phone: <a href="tel:+442038058593" className="hover:text-accent-orange transition-colors">+44 020 3805 8593</a></p>
            <div className="flex gap-4 mt-4">
              <Link href="/contact" className="hover:text-accent-orange transition-colors">Book a video call</Link>
              <span className="text-accent-orange">•</span>
              <Link href="/contact" className="hover:text-accent-orange transition-colors">WhatsApp Message</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p className="mb-2">
            <strong className="text-white">One Day Agency</strong>
          </p>
          <p className="text-gray-500">
            A trademark of 1D Agency Ltd, Company No. 11682013 VAT No. 376 0264 93.
          </p>
          <p className="text-gray-500 mt-2">
            Copyright © All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}


