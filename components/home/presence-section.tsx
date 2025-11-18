"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export function PresenceSection() {
  return (
    <section className="px-6 py-20 md:py-32 lg:py-40 bg-lux-bone" id="presence">
      <div className="max-w-5xl mx-auto">
        {/* Band Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-4 md:mb-6"
        >
          <p className="font-sans text-xs md:text-sm uppercase tracking-[0.4em] text-lux-accent font-semibold text-center">
            Presence over Pressure
          </p>
        </motion.div>

        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-lux-ink mb-3 md:mb-4 leading-tight text-center"
        >
          Connection can't be scheduled to the minute.
        </motion.h2>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-lg md:text-xl lg:text-2xl text-lux-ink/70 mb-8 md:mb-12 lg:mb-16 max-w-3xl font-light leading-relaxed text-center mx-auto"
        >
          Overplanned itineraries, ticking off sightings, and crowded viewpoints can leave days feeling blurred and rushed. Time in Africa deserves unhurried space for conversation, quiet, and shared awe.
        </motion.p>

        {/* Body Text with Elegant Spacing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex items-center gap-4 md:gap-6"
        >
          {/* Decorative Line */}
          <div className="hidden sm:block w-12 md:w-16 h-px bg-gradient-to-r from-lux-accent to-transparent" />
          
          {/* Link */}
          <motion.div
            whileHover={{ x: 4 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="#path"
              className="inline-flex items-center gap-2 text-base md:text-lg lg:text-xl font-serif text-lux-forest hover:text-lux-accent transition-colors duration-300 group"
            >
              See your path to connection
              <motion.span
                className="inline-block"
                whileHover={{ x: 2, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Decorative Elements for Visual Interest */}
        <motion.div
          className="absolute top-20 right-10 w-32 h-32 bg-lux-accent/5 rounded-full blur-3xl pointer-events-none"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        />
        <motion.div
          className="absolute bottom-20 left-0 w-40 h-40 bg-lux-forest/3 rounded-full blur-3xl pointer-events-none"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  )
}
