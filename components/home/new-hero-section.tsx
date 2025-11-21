"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { useEffect, useState } from "react"

const heroImages = [
  "/ultra-premium-experiences.jpeg",
  "/mountain.jpeg",
  "/sail-boat.jpeg",
  "/premium-experiences.jpeg",
  "/baloon-n-sunset.jpeg",
  "/zebra-migration-across-plains.jpg",
]

export function NewHeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
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

  // Slideshow timer - 8 seconds per image for significant viewing time
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className="relative isolate"
      style={{ marginTop: "calc(var(--header-height, 96px) * -1)" }}
    >
      {/* Top gradient for header contrast */}
        <div className="pointer-events-none absolute left-0 top-0 h-64 w-[100%] bg-gradient-to-b from-black/60 via-black/15 to-transparent z-100" />
      {/* Animated slideshow background */}
      <div className="absolute inset-0 overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className={`h-full w-full bg-cover bg-center bg-no-repeat transform transition-transform duration-8000 ease-out ${
                index === currentImageIndex ? "scale-110" : "scale-100"
              }`}
              style={{
                backgroundImage: `url(${image})`,
              }}
            />
          </div>
        ))}
        {/* Mobile overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/90 md:hidden" />
        {/* Desktop overlay - subtle dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/20 hidden md:block" />
      </div>

      {/* Content container */}
      <div className="relative min-h-screen flex items-center">
        
        
        {/* Left content panel with gradient overlay */}
        <div className="relative z-10 w-full md:w-2/3 min-h-screen flex flex-col justify-center">
          {/* White to transparent gradient overlay on left panel */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/65 to-transparent hidden md:block" />
          
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="relative z-20 px-6 py-28 md:py-0 md:pl-10 lg:pl-16 xl:pl-32"
          >
            <div className="max-w-2xl space-y-5 text-left">
              <motion.h1
                custom={2}
                variants={item}
                className="font-niconne font-medium text-[32px] sm:text-5xl xl:text-6xl leading-tight text-white md:text-lux-forest"
              >
                Safaris for Meaning & Connection.
              </motion.h1>
              <motion.p custom={3} variants={item} className="text-xl md:text-2xl font-niconne text-white/90 md:text-lux-ink/65">
                Host-led. Unhurried. Quietly luxurious.
              </motion.p>
              <motion.p custom={4} variants={item} className="text-base md:text-lg text-white/85 md:text-lux-ink/75">
                Journeys created for travelers who value presence over pressure.
              </motion.p>
              <motion.p
                custom={1}
                variants={item}
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.15em] bg-black/40 text-white backdrop-blur md:bg-gray-200 md:text-secondary-foreground font-sans"
              >
                Proposal in 72 hours.
              </motion.p>
              <motion.div custom={5} variants={item} className="flex flex-col gap-3 mt-6 sm:flex-row">
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center rounded-full px-8 py-2 text-sm tracking-[0.3em] bg-gold text-white md:hover:text-black font-semibold"
                >
                  Start My Journey
                </Link>
                <Link
                  href="/sample-itinerary.pdf"
                  className="inline-flex items-center justify-center rounded-full border px-8 py-2 text-sm tracking-[0.2em] border-white text-white md:border-primary md:text-primary md:hover:text-white md:hover:bg-lux-forest/40 font-semibold"
                >
                  See Sample Itinerary
                </Link>

              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
