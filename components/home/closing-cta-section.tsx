"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function ClosingCtaSection() {
  return (
    <section className="px-6 py-24 bg-lux-blush">
      <motion.div
        className="max-w-3xl mx-auto text-center space-y-6"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <p className="font-serif text-4xl text-lux-forest">Come for the wildlife. Leave with connection.</p>
        <p className="text-lg text-lux-ink opacity-80">
          Step into wide-open quiet, unrushed days, and host-led care that lets meaning surface naturally. Travel privately,
          at your pace, with places chosen for soul and substance. Return rested, re-aligned, and more connected—to
          yourself, to each other, and to the wild.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link href="/booking" className="px-8 py-4 rounded-full bg-lux-forest text-white text-sm tracking-[0.3em]">
            Start My Journey
          </Link>
          <Link
            href="/sample-itinerary.pdf"
            className="px-8 py-4 rounded-full border border-lux-forest text-sm tracking-[0.2em] text-lux-forest"
          >
            Download Sample Itinerary
          </Link>
        </div>
        <p className="text-sm text-lux-ink opacity-70">A host will reply within 24–48 hours.</p>
      </motion.div>
    </section>
  )
}
