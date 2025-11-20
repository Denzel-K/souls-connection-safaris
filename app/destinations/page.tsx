"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { destinations } from "@/lib/destinations-data"

export default function DestinationsPage() {
  const truncate = (text: string, max = 140) =>
    text.length > max ? text.slice(0, max - 1).trimEnd() + "…" : text
  return (
    <div className="flex flex-col min-h-screen bg-lux-bone text-lux-ink">
      <Header />

      {/* Hero */}
      <section
        className="relative isolate overflow-hidden"
        style={{ marginTop: "calc(var(--header-height, 96px) * -1)" }}
      >
        <img
          src="/african-safari-lions-at-sunset.jpg"
          alt="African safari landscape"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 px-6 py-32 md:py-40">
          <div className="max-w-5xl mx-auto text-center text-white space-y-6">
            <p className="font-sans text-sm tracking-[0.5em] text-white/70">DESTINATIONS</p>
            <h1 className="font-niconne text-5xl md:text-7xl font-bold text-balance font-light">Places that Hold Meaning</h1>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed text-white/85">
              Regions and conservancies chosen for space, atmosphere, and story—not only for the number of sightings.
            </p>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 md:py-28 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination, index) => (
              <motion.article
                key={destination.id}
                className="group relative overflow-hidden bg-card border border-border rounded-lg shadow-[0_25px_85px_rgba(20,20,15,0.12)] hover:shadow-[0_35px_100px_rgba(20,20,15,0.18)] transition-all duration-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                {/* Image */}
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Title overlay on image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-niconne text-xl md:text-2xl text-white font-bold leading-tight drop-shadow-lg">
                      {destination.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                    {truncate(destination.shortDescription, 140)}
                  </p>
                  
                  {/* Wildlife tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {destination.wildlife.slice(0, 4).map((animal: string, i: number) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-lux-cream text-lux-forest rounded-full text-xs font-medium border border-lux-sand"
                      >
                        {animal}
                      </span>
                    ))}
                    {destination.wildlife.length > 4 && (
                      <span className="px-3 py-1 bg-lux-cream text-lux-forest rounded-full text-xs font-medium border border-lux-sand">
                        +{destination.wildlife.length - 4} more
                      </span>
                    )}
                  </div>

                  <Link 
                    href={`/destinations/${destination.slug}`}
                    className="inline-flex items-center gap-2 text-lux-accent text-sm font-sans uppercase tracking-[0.2em] hover:text-lux-accent/80 transition-colors duration-200"
                  >
                    Explore destination
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
                
                {/* Subtle accent line */}
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 px-6 bg-lux-shell">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-niconne text-4xl md:text-5xl text-lux-forest font-bold mb-6 text-balance">
            Ready to Explore These Meaningful Places?
          </h2>
          <p className="text-lg text-lux-ink/80 mb-8 leading-relaxed max-w-2xl mx-auto">
            Each destination offers unique experiences designed for connection, reflection, and quiet restoration. Let us craft your perfect journey.
          </p>
          <Link
            href="/journeys"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-foreground font-sans text-sm uppercase tracking-[0.3em] hover:bg-gold/90 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Explore Our Journeys
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
