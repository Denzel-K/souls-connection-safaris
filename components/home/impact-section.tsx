"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function ImpactSection() {
  return (
    <section className="px-6 py-20 bg-white">
      <motion.div
        className="max-w-4xl mx-auto text-center space-y-5"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <p className="font-sans text-xs uppercase tracking-[0.4em] text-lux-accent font-semibold">Impact & Community</p>
        <p className="text-lg text-lux-ink opacity-80">
          Every journey funds ranger training, Maasai women-led enterprises, and carbon positive restoration. Impact
          reporting mirrors Wilderness-level transparency so you know your luxury safari keeps East Africa wild.
        </p>
        <Link href="/impact" className="inline-flex items-center gap-2 text-lux-forest border-b border-lux-accent w-fit mx-auto">
          Explore our impact →
        </Link>
      </motion.div>
    </section>
  )
}
