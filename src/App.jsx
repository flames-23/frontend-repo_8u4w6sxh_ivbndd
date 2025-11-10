import Cursor from './Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { HowItWorks, ServicePacks, CaseStudies, AIDemo, WhyUs, PricingRibbon, Testimonials, FooterCTA } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-[var(--deep-navy)]">
      <Cursor />
      <Navbar />
      <main className="pt-20">
        <Hero />
        <HowItWorks />
        <ServicePacks />
        <CaseStudies />
        <AIDemo />
        <WhyUs />
        <PricingRibbon />
        <Testimonials />
        <FooterCTA />
      </main>
    </div>
  )
}

export default App
