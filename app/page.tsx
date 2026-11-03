import { ArchDefs } from '@/components/arch-frame'
import { CreativeStyles } from '@/components/creative-styles'
import { Faq } from '@/components/faq'
import { FilmShowcase } from '@/components/film-showcase'
import { FinalCta } from '@/components/final-cta'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { HowItWorks } from '@/components/how-it-works'
import { Navbar } from '@/components/navbar'
import { Pricing } from '@/components/pricing'
import { Transformation } from '@/components/transformation'

export default function Home() {
  return (
    <>
      <ArchDefs />
      <Navbar />
      <main className="overflow-x-clip">
        <Hero />
        <CreativeStyles />
        <FilmShowcase />
        <HowItWorks />
        <Transformation />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
