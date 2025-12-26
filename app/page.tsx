import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import WhyiPhone from '@/components/WhyiPhone'
import EventTypes from '@/components/EventTypes'
import Packages from '@/components/Packages'
import AddOns from '@/components/AddOns'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Booking from '@/components/Booking'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <HowItWorks />
      <WhyiPhone />
      <EventTypes />
      <Packages />
      <AddOns />
      <Testimonials />
      <FAQ />
      <Booking />
    </main>
  )
}
