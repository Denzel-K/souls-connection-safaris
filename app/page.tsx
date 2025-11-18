"use client"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ClosingCtaSection } from "@/components/home/closing-cta-section"
import { DestinationsStrip } from "@/components/home/destinations-strip"
import { ExperienceModesSection } from "@/components/home/experience-modes-section"
import { FoundersSection } from "@/components/home/founders-section"
import { NewHeroSection } from "@/components/home/new-hero-section"
import { HowItWorksSection } from "@/components/home/how-it-works-section"
import { ImpactSection } from "@/components/home/impact-section"
import { InclusionsSection } from "@/components/home/inclusions-section"
import { JournalSection } from "@/components/home/journal-section"
import { FAQSection } from "@/components/home/faq-section"
import { JourneysOfConnectionSection } from "@/components/home/journeys-of-connection-section"
import { LodgesSection } from "@/components/home/lodges-section"
import { PresenceSection } from "@/components/home/presence-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { ValuePillarsSection } from "@/components/home/value-pillars-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-lux-bone text-lux-ink">
      <Header />
      <NewHeroSection />
      <PresenceSection />
      <ValuePillarsSection />
      <JourneysOfConnectionSection />
      <DestinationsStrip />
      <HowItWorksSection />
      <FoundersSection />
      <ImpactSection />
      <ExperienceModesSection />
      <LodgesSection />
      <JournalSection />
      <FAQSection />
      <InclusionsSection />
      <TestimonialsSection />
      <ClosingCtaSection />
      <Footer />
    </div>
  )
}
