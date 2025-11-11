"use client"

import Link from "next/link"
import { motion } from "framer-motion"

import { allExperiences } from "@/lib/experiences-data"
import type { IndexedExperience } from "@/lib/experiences-data"

const featuredJourneyIds = [
  "premium-sig-grand",
  "premium-sig-mara",
  "premium-priv-golden",
  "ultra-priv-ultimate",
  "ultra-sig-grand",
]

const featuredJourneys: IndexedExperience[] = featuredJourneyIds
  .map((id) => allExperiences.find((experience) => experience.id === id))
  .filter((experience): experience is IndexedExperience => Boolean(experience))

export function SignatureJourneysSection() {
  return (
    <section className="px-6 py-24 bg-lux-cream" id="signature-journeys">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.4em] text-lux-accent mb-3 font-semibold">Signature Journeys</p>
            <h2 className="font-serif text-4xl md:text-5xl text-lux-forest">Host-led safaris</h2>
            <p className="text-lg text-lux-ink opacity-80">
              Premium and ultra-premium itineraries pulled directly from our experiences library.
            </p>
          </div>
        </div>

        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory" aria-label="Featured journeys">
          {featuredJourneys.map((journey, index) => (
            <motion.article
              key={journey.id}
              className="snap-start min-w-[320px] sm:min-w-[420px] w-80 flex-shrink-0 rounded-[14px] border border-lux-sand bg-white shadow-[0_15px_45px_rgba(30,30,28,0.12)] overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative h-44 sm:h-64">
                <img src={journey.image} alt={`${journey.name} scene`} className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-0.5 font-sans text-[0.65rem] uppercase tracking-[0.25em] text-lux-forest">
                  {journey.tierName}
                </div>
              </div>
              <div className="flex flex-col gap-2.5 p-5">
                <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-lux-accent">
                  {journey.subcategoryName}
                </p>
                <p className="font-serif text-xl sm:text-2xl text-lux-forest leading-tight font-bold">{journey.name}</p>
                <p className="text-sm text-lux-ink opacity-80 flex-1 mt-2">{journey.description}</p>
                <div className="flex flex-wrap gap-1.5 text-[0.7rem] text-lux-forest mt-2">
                  <span className="rounded-full border border-lux-sand px-2.5 py-0.5">{journey.duration}</span>
                  <span className="rounded-full border border-lux-sand px-2.5 py-0.5">{journey.destination}</span>
                </div>
                <div className="flex flex-row justify-between pt-6 w-full">
                  <Link href={`/itinerary/${journey.itineraryId}`} className="text-xs text-lux-forest border-b border-lux-accent w-fit">
                    View sample day →
                  </Link>
                  <Link
                    href={`/booking?journey=${journey.id}`}
                    className="flex items-center justify-center rounded-[4px] bg-gold px-4 py-2 text-xs uppercase font-semibold font-sans text-white transition hover:bg-gold/90"
                  >
                    Request This Journey
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/experiences"
            className="inline-flex items-center justify-center rounded-full border border-lux-forest px-8 py-3 font-sans text-sm uppercase tracking-[0.3em] text-lux-forest"
          >
            View all experiences
          </Link>
        </div>
      </div>
    </section>
  )
}
