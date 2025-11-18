"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const whyUsReasons = [
  {
    title: "Meaningful hosting",
    lead: "Every journey starts with how you want to feel—presence, renewal, legacy.",
    highlights: ["Host-led consults", "Slow mornings & twilight drives", "Reflective rituals woven in"],
  },
  {
    title: "Privacy & ease",
    lead: "Quiet luxury signals—private vehicles, discreet handling, seamless pacing.",
    highlights: ["Dedicated host + driver-guide", "Door-to-door logistics managed", "Flexible days without crowds"],
  },
  {
    title: "Impact with integrity",
    lead: "Travel that protects wild places and uplifts the communities who steward them.",
    highlights: ["Conservation-first partners", "Women-led artisan initiatives", "Transparent impact reporting"],
  },
]

export function ValuePillarsSection() {
  return (
    <section className="px-6 py-24 bg-white" id="pillars">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="text-center space-y-4">
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-lux-accent font-semibold">Why us?</p>
          <h2 className="font-niconne text-4xl lg:text-5xl text-lux-forest">Our pillars of connection</h2>
          <p className="text-lg text-lux-ink opacity-80">Every journey is shaped around three simple truths about how meaningful travel should feel.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {whyUsReasons.map((reason, index) => (
            <motion.article
              key={reason.title}
              className="rounded-[32px] border border-lux-sand bg-white/80 p-8 shadow-[0_25px_70px_rgba(30,30,28,0.08)] backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className="flex items-center gap-4">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-lux-sand text-sm font-semibold tracking-[0.3em] text-lux-forest"
                  style={{ backgroundColor: "color-mix(in srgb, var(--lux-forest) 8%, transparent)" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="font-niconne font-semibold text-2xl sm:text-3xl text-lux-forest">{reason.title}</p>
              </div>
              <p className="mt-4 text-sm sm:text-base md:text-lg text-lux-ink opacity-80">{reason.lead}</p>
              
            </motion.article>
          ))}
        </div>
        <div className="flex flex-col items-center gap-3 md:flex-row md:justify-center">
          <Link
            href="#path"
            className="inline-flex items-center gap-2 text-base md:text-lg lg:text-xl font-niconne text-lux-forest hover:text-lux-accent transition-colors duration-300 group"
          >
            Explore journeys of connection
            <motion.span
              className="inline-block"
              whileHover={{ x: 2, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
            </motion.span>
          </Link>
        </div>
      </div>
    </section>
  )
}
