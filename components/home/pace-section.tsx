"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const paceHighlights = [
  {
    title: "Unhurried pacing",
    description: "Sunrise coffee on the deck, long lunches, and drives that linger when awe arrives.",
  },
  {
    title: "Host-led intuition",
    description: "George and Wambui read energy, adjust routes, and hold space for quiet or conversation.",
  },
  {
    title: "Private vantage",
    description: "Dedicated vehicles, limited guests, and the freedom to stay when the moment is perfect.",
  },
]

export function PaceSection() {
  return (
    <section className="px-6 py-24 bg-lux-bone" id="pace">
      <p className="font-serif text-4xl font-semibold text-lux-ink max-w-3xl mx-auto text-center mb-6">
        Connection can’t be scheduled to the minute. You deserve space, presence, and a host who knows when to slow
        down.
      </p>
      <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[0.6fr_0.4fr] items-center">
        <div className="order-2 lg:order-1 space-y-10 relative">
          <div className="absolute -inset-6 bg-[url('/placeholder.svg')] opacity-[0.03] rounded-[40px] pointer-events-none" />
          <div className="relative space-y-8 bg-white/85 backdrop-blur-sm p-12 rounded-[40px] shadow-[0_35px_90px_rgba(30,30,28,0.08)]">
            <p className="font-sans text-xs uppercase tracking-[0.4em] text-lux-accent font-semibold">
              Tired of rushed, box-ticking tours?
            </p>

            <div className="space-y-4">
              {paceHighlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <span className="text-sm font-semibold tracking-[0.3em] text-lux-accent mt-1">•</span>
                  <div>
                    <p className="font-serif text-xl text-lux-forest font-bold">{item.title}</p>
                    <p className="text-sm text-lux-ink opacity-80">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <blockquote className="text-lux-ink opacity-80 italic border-l-2 border-lux-stone pl-4">
              “Somewhere between dawn tea and lions in the grass, the noise inside me went quiet.” — Alyssa M., New York
            </blockquote>

            <div className="flex flex-wrap gap-4 items-center">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="#plan"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-lux-forest text-white rounded-full text-sm tracking-[0.2em]"
                >
                  See How We Plan
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <Link href="#hosts" className="text-sm text-lux-forest border-b border-lux-accent w-fit">
                What a host-led day feels like →
              </Link>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <motion.div
            className="relative rounded-[40px] overflow-hidden shadow-[0_40px_90px_rgba(30,30,28,0.2)]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src="/safari-expert-portrait-.jpg"
              alt="Host sharing a quiet moment with guests before a private drive."
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
