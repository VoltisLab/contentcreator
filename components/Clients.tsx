'use client'

import Image from 'next/image'
import { useState } from 'react'

function ClientLogo({ client }: { client: { name: string; logo: string } }) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <span className="text-xs sm:text-sm font-medium text-gray-700 text-center">
        {client.name}
      </span>
    )
  }

  return (
    <div className="relative w-full h-12">
      <Image
        src={client.logo}
        alt={client.name}
        fill
        className="object-contain"
        onError={() => setHasError(true)}
      />
    </div>
  )
}

export default function Clients() {
  const clients = [
    { name: 'Unidays', logo: '/clients/unidays.svg' },
    { name: 'Raventos Codorniu', logo: '/clients/codorniu.svg' },
    { name: 'Verifone', logo: '/clients/verifone.svg' },
    { name: 'Maniere de Voir', logo: '/clients/mdv.svg' },
    { name: 'Deciem', logo: '/clients/deciem.svg' },
    { name: 'RELX', logo: '/clients/relx.svg' },
    { name: 'Uber Eats', logo: '/clients/uber-eats.svg' },
    { name: 'Colt Technologies', logo: '/clients/colt.svg' },
    { name: 'FirstLeaf', logo: '/clients/firstleaf.svg' },
    { name: 'Huboo', logo: '/clients/huboo.svg' },
    { name: 'NHS', logo: '/clients/nhs.svg' },
    { name: 'BigCommerce', logo: '/clients/bigcommerce.svg' },
    { name: 'KOI Footwear', logo: '/clients/koi.svg' },
    { name: 'Summize', logo: '/clients/summize.svg' },
    { name: 'Citizens Advice', logo: '/clients/citizens-advice.svg' },
    { name: 'Union Coffee', logo: '/clients/union-coffee.svg' },
    { name: 'YouFibre', logo: '/clients/youfibre.svg' },
    { name: 'Farm Rio', logo: '/clients/farm-rio.svg' },
    { name: 'Cineworld', logo: '/clients/cineworld.svg' },
    { name: 'Prya', logo: '/clients/prya.svg' },
    { name: 'Tomato Energy', logo: '/clients/tomato-energy.svg' },
    { name: 'Harrys London', logo: '/clients/harrys.svg' },
    { name: 'Bugaboo', logo: '/clients/bugaboo.svg' },
    { name: 'Student Beans', logo: '/clients/student-beans.svg' },
    { name: 'Netflix', logo: '/clients/netflix.svg' },
    { name: 'Butternut Box', logo: '/clients/butternut-box.svg' },
    { name: 'Jordan Tourism Board', logo: '/clients/jordan-tourism.svg' },
    { name: 'Domino\'s Pizza', logo: '/clients/dominos.svg' },
    { name: 'Big Drop', logo: '/clients/big-drop.svg' },
    { name: 'University of the Arts London', logo: '/clients/ual.svg' },
    { name: 'Atlantic Blankets', logo: '/clients/atlantic-blankets.svg' },
    { name: 'I Saw It First', logo: '/clients/isawitfirst.svg' },
    { name: 'Itchy Baby', logo: '/clients/itchy-baby.svg' },
    { name: 'Barnardos', logo: '/clients/barnardos.svg' },
    { name: 'Astrid & Miyu', logo: '/clients/astrid-miyu.svg' },
    { name: 'Mylee', logo: '/clients/mylee.svg' },
    { name: 'TOG Knives', logo: '/clients/tog-knives.svg' },
    { name: 'Polish Tourism Board', logo: '/clients/polish-tourism.svg' },
  ]

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Who do we work with?
          </h2>
          <div className="w-24 h-1 bg-accent-orange mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-white hover:shadow-lg transition-all transform hover:scale-105 border-2 border-transparent hover:border-accent-orange/20 group"
            >
              <div className="relative w-full h-12 grayscale group-hover:grayscale-0 transition-all flex items-center justify-center">
                <ClientLogo client={client} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


