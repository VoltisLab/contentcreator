export default function Testimonials() {
  const testimonials = [
    {
      quote: 'About Nielsen data: It is once again very positive for us because while the category fell by 11.6% in value, and the cava category decreased by 5.6%, we are once again the green dot in the data, growing vs. the previous year\'s and increase of market share. These results are clearly related to the MKT campaigns during April and July. So, once again, thank you very much for your wonderful support. We are achieving great things in the UK thanks to these impactful marketing campaigns.',
      author: 'Codorníu Raventos',
      role: 'International Brand Manager Europe & Asia',
    },
    {
      quote: 'Freshers is such a pivotal moment for UNiDAYS. As the UK\'s leading student platform, working with a tried and trusted team was key. We\'ve found that in One Day. Their professionalism and unique approach to measuring effectiveness and incrementality is truly exceptional.',
      author: 'Mark Hodson',
      role: 'VP of Marketing at UNiDAYS',
    },
    {
      quote: 'We needed a digital agency that rocks the pants off it in the social & digital space that was fast, flexible, insightful and fun. Critical for us was someone that was responsive, really understood paid digital, and had the ability to make short, sharp, quick creative ads. One Day is that Agency. We are extremely excited to see what 2021 brings working with the talented team as we launch into the UK.',
      author: 'General Manager',
      role: 'Itchy Baby Co',
    },
    {
      quote: 'It was an incredible experience partnering with IDA agency. We handed them a strict budget, and they met it and exceeded our expectations. Their professionalism, creativity, and unwavering support were instrumental in our campaign\'s success. From designing ad t picking locations and strategies, the were with us every step of the way, and we couldn\'t be happier with the results.',
      author: 'Gurveer Chana',
      role: 'BigCommerce\'s Demand Generation Manager',
    },
  ]

  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            What our clients are saying…
          </h2>
          <div className="w-24 h-1 bg-accent-orange mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-1 border-l-4 border-accent-orange"
            >
              <div className="mb-4">
                <svg className="w-8 h-8 text-accent-orange" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-black">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


