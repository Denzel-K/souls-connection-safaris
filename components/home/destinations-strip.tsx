"use client"

import { motion } from "framer-motion"

const destinations = ["Kenya", "Tanzania", "Coast", "Gorilla Extensions", "Cape Town", "Zanzibar"]

export function DestinationsStrip() {
  return (
    <section className="py-12 bg-lux-ink text-white">
      <div className="max-w-5xl mx-auto text-center space-y-3">
        <p className="font-sans text-xs uppercase tracking-[0.6em] text-lux-accent">Destinations</p>
        <p className="font-serif text-3xl md:text-4xl flex flex-wrap justify-center gap-y-2 gap-x-4">
          {destinations.map((destination, index) => (
            <motion.span
              key={destination}
              className="whitespace-nowrap flex items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.05 }}
            >
              {destination}
              {index !== destinations.length - 1 && <span className="text-white/50">•</span>}
            </motion.span>
          ))}
        </p>
      </div>
    </section>
  )
}
