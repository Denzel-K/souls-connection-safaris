"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"

export function NewHeroSection() {
  const container: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  }

  const item: Variants = {
    hidden: { opacity: 0, y: 14 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    }),
  }

  return (
    <section
      className="relative isolate"
      style={{ marginTop: "calc(var(--header-height, 96px) * -1)" }}
    >
      {/* Mobile: full-screen background image */}
      <div className="md:hidden absolute inset-0">
        <img
          src="/african-safari-lions-at-sunset.jpg"
          alt="Safari landscape at golden hour"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
      </div>

      {/* Desktop layout: 2 cols, image right */}
      <div className="relative grid min-h-screen grid-rows-[1fr] md:grid-cols-2">
        {/* Top gradient on left column (desktop) to support header contrast */}
        <div className="pointer-events-none absolute left-0 top-0 hidden h-64 w-1/2 bg-gradient-to-b from-black/60 via-black/30 to-transparent md:block z-0" />
        {/* Left content column */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex items-center"
        >
          <div className="w-full px-6 py-28 md:py-0 md:pl-10 lg:pl-16">
            <div className="max-w-2xl space-y-5 text-left">
              
              <motion.h1
                custom={2}
                variants={item}
                className="font-serif text-5xl leading-tight text-white md:text-6xl md:text-lux-forest"
              >
                Safaris for Meaning & Connection.
              </motion.h1>
              <motion.p custom={3} variants={item} className="text-lg text-white/90 md:text-lux-ink/85">
                Host-led. Unhurried. Quietly luxurious.
              </motion.p>
              <motion.p custom={4} variants={item} className="text-base text-white/85 md:text-lux-ink/75">
                Journeys created for travelers who value presence over pressure.
              </motion.p>
              <motion.p
                custom={1}
                variants={item}
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.35em] bg-black/40 text-white backdrop-blur md:bg-gray-300 md:text-secondary-foreground font-sans"
              >
                Proposal in 72 hours.
              </motion.p>
              <motion.div custom={5} variants={item} className="flex flex-col gap-3 pt-2 sm:flex-row">
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 text-sm tracking-[0.3em] bg-gold text-white"
                >
                  Start My Journey
                </Link>
                <Link
                  href="/sample-itinerary.pdf"
                  className="inline-flex items-center justify-center rounded-full border px-8 py-4 text-sm tracking-[0.2em] border-white text-white md:border-primary md:text-primary"
                >
                  See Sample Itinerary
                </Link>

              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Right image column (hidden on mobile, shown on md+) */}
        <div className="relative hidden md:block">
          <img
            src="/african-safari-lions-at-sunset.jpg"
            alt="Safari landscape at golden hour"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/10 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}
