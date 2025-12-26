export default function Services() {
  const services = [
    {
      title: 'Design & Creative',
      description: 'Adverts and brand messaging are the biggest contributor to your business and brand success. As an advertising agency that works cross-channel from creative to activation, we always start by studying your advertising, messaging and more. From billboards to social media ads, we have you covered.',
      services: [
        'Paid Social Ads',
        'YouTube Ads',
        'Spotify Audio Ads',
        'Digital Ads',
        'Billboard Advertising',
        'Social Media Ads',
      ],
      link: '/services/creative',
      color: 'accent-orange',
    },
    {
      title: 'Digital Marketing',
      description: 'Digital advertising is constantly expanding and offering more unique ways to engage with your audience at the right moment and media. It\'s also present in an ever-growing list of environments and capabilities. Working alongside creative and media planning, we\'re a best-in-class digital marketing marketing.',
      services: [
        'PPC',
        'Paid Social',
        'Google Ads and Bing Ads',
        'Social Media Advertising',
        'Google Search and Shopping Ads',
        'Programmatic Display',
        'YouTube Advertising',
      ],
      link: '/services/digital',
      color: 'accent-blue',
    },
    {
      title: 'OOH Advertising',
      description: 'Sustainable and consistent brand growth can only be achieved with a healthy media mix and OOH Advertising can play a big part in adding touch-points and maximising the frequency. As a media agency, we cover all out-of-home advertising options, below, and more!',
      services: [
        'Billboard Advertising',
        'Outdoor Advertising',
        'Bus Advertising',
        'Rail Advertising',
        'London Underground Advertising',
        'Transport Advertising',
        'Taxi Advertising',
      ],
      link: '/services/ooh',
      color: 'accent-green',
    },
    {
      title: 'TV & VOD Advertising',
      description: 'At MomentsMade, we create impactful TV and Video On Demand (VOD) campaigns for businesses of all sizes. From traditional broadcast TV to leading streaming platforms, we ensure your message connects with the right audience. With expertise across all major networks and services, we craft targeted campaigns that elevate your brand\'s visibility and deliver measurable results in today\'s evolving media landscape.',
      services: [
        'Broadcast TV Advertising',
        'Video On-Demand Advertising: ITV, Channel 4, and others',
        'App-based Streaming Service Advertising',
        'YouTube Advertising and YouTube Ads',
        'VOD Advertising: AdSmart from Sky',
      ],
      link: '/services/tv-vod',
      color: 'accent-purple',
    },
    {
      title: 'Radio Advertising',
      description: 'Audio advertising offers a unique way to connect with audiences, and we\'re here to help you make an impact. Whether it\'s traditional radio, digital platforms like DAX, streaming services, podcasts, or Spotify, we create campaigns that cut through the noise. By leveraging the power of sound and tailoring strategies to fit each platform, we help your brand engage listeners in meaningful ways, ensuring your message leaves a lasting impression.',
      services: [
        'Radio and DAX',
        'Spotify Advertising',
        'Podcast Advertising',
      ],
      link: '/services/radio',
      color: 'accent-yellow',
    },
  ]

  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Our Services At a Glance.
          </h2>
          <div className="w-24 h-1 bg-accent-orange mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-2 border-t-4 border-transparent hover:border-accent-orange group"
            >
              <div className={`w-12 h-1 mb-4 ${service.color === 'accent-orange' ? 'bg-accent-orange' : service.color === 'accent-blue' ? 'bg-accent-blue' : service.color === 'accent-green' ? 'bg-accent-green' : service.color === 'accent-purple' ? 'bg-accent-purple' : 'bg-accent-yellow'}`}></div>
              <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-accent-orange transition-colors">{service.title}</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-900 mb-3">Available Services</p>
                <ul className="space-y-2">
                  {service.services.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start">
                      <span className={`mr-2 ${service.color === 'accent-orange' ? 'text-accent-orange' : service.color === 'accent-blue' ? 'text-accent-blue' : service.color === 'accent-green' ? 'text-accent-green' : service.color === 'accent-purple' ? 'text-accent-purple' : 'text-accent-yellow'}`}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <a
                href={service.link}
                className={`inline-block ${service.color === 'accent-orange' ? 'text-accent-orange' : service.color === 'accent-blue' ? 'text-accent-blue' : service.color === 'accent-green' ? 'text-accent-green' : service.color === 'accent-purple' ? 'text-accent-purple' : 'text-accent-yellow'} font-semibold hover:underline flex items-center group/link`}
              >
                See Our {service.title} Services 
                <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


