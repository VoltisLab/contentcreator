import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Clients from '@/components/Clients'
import Testimonials from '@/components/Testimonials'
import CaseStudies from '@/components/CaseStudies'
import LatestNews from '@/components/LatestNews'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Clients />
      <Testimonials />
      <CaseStudies />
      <LatestNews />
      <FAQ />
      <CTA />
    </main>
  )
}


