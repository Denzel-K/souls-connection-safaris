"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { destinations } from "@/lib/destinations-data"

export function DestinationsStrip() {
  const truncate = (text: string, max = 140) =>
    text.length > max ? text.slice(0, max - 1).trimEnd() + "…" : text
  return (
    <section className="py-20 md:py-28 bg-lux-ink text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-lux-accent mb-4 font-semibold">Destinations</p>
          <h2 className="font-niconne text-4xl md:text-5xl text-white mb-6 font-light">Places that Hold Meaning</h2>
          <p className="font-body text-lg md:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
            Regions and conservancies chosen for space, atmosphere, and story—not only for the number of sightings.
          </p>
        </div>

        {/* Destinations Grid (single source of truth) */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {destinations.map((destination, index) => (
            <motion.article
              key={destination.id}
              className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/8 transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
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
                <p className="font-body text-sm md:text-base text-white/85 leading-relaxed mb-4">
                  {truncate(destination.shortDescription, 140)}
                </p>
                <Link 
                  href={`/destinations/${destination.slug}`}
                  className="inline-flex items-center gap-2 text-gold text-sm font-sans uppercase tracking-[0.2em] hover:text-gold/80 transition-colors duration-200"
                >
                  See details
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

        {/* CTA */}
        <div className="text-center">
          <Link 
            href="/journeys" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-gold/10 backdrop-blur-sm border border-gold/30 text-gold font-sans text-sm uppercase tracking-[0.3em] hover:bg-gold/20 hover:border-gold/50 transition-all duration-300 rounded-full"
          >
            Explore Journeys for Connection
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
