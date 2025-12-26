export default function CTA() {
  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-orange to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-yellow to-transparent"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Creative, Digital, Outdoor,
        </h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-accent-yellow">
          Radio, OOH, TV and more.
        </h3>
        <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Transform your event content today. Get in touch with MomentsMade for professional event photography and videography.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-accent-orange text-white font-semibold rounded-md hover:bg-accent-orange/90 transition-all transform hover:scale-105 shadow-lg"
          >
            Contact Us
          </a>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-transparent text-white border-2 border-accent-yellow font-semibold rounded-md hover:bg-accent-yellow hover:text-black transition-all transform hover:scale-105"
          >
            Book A Video Call
          </a>
        </div>
      </div>
    </section>
  )
}


