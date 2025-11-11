"use client"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ClosingCtaSection } from "@/components/home/closing-cta-section"
import { DestinationsStrip } from "@/components/home/destinations-strip"
import { ExperienceModesSection } from "@/components/home/experience-modes-section"
import { FoundersSection } from "@/components/home/founders-section"
import { HeroSection } from "@/components/home/hero-section"
import { HowItWorksSection } from "@/components/home/how-it-works-section"
import { ImpactSection } from "@/components/home/impact-section"
import { InclusionsSection } from "@/components/home/inclusions-section"
import { JournalSection } from "@/components/home/journal-section"
import { LodgesSection } from "@/components/home/lodges-section"
import { PaceSection } from "@/components/home/pace-section"
import { SignatureJourneysSection } from "@/components/home/signature-journeys-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { ValuePillarsSection } from "@/components/home/value-pillars-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-lux-bone text-lux-ink">
      <Header />
      <HeroSection />
      <PaceSection />
      <ValuePillarsSection />
      <SignatureJourneysSection />
      <DestinationsStrip />
      <HowItWorksSection />
      <FoundersSection />
      <ImpactSection />
      <ExperienceModesSection />
      <LodgesSection />
      <JournalSection />
      <TestimonialsSection />
      <InclusionsSection />
      <ClosingCtaSection />
      <Footer />
    </div>
  )
}
