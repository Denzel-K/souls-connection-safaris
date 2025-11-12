"use client"

import Link from "next/link"
import { motion } from "framer-motion"

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
          <h2 className="font-serif text-4xl text-lux-forest">Our three value pillars</h2>
          <p className="text-lg text-lux-ink opacity-80">Human hosts, effortless pacing, and integrity in every detail.</p>
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
                <p className="font-serif font-semibold text-2xl text-lux-forest">{reason.title}</p>
              </div>
              <p className="mt-4 text-sm text-lux-ink opacity-80">{reason.lead}</p>
              <ul className="mt-6 space-y-2 text-sm text-lux-ink opacity-80">
                {reason.highlights.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brown" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
        <div className="flex flex-col items-center gap-3 md:flex-row md:justify-center">
          <Link
            href="/booking"
            className="rounded-full bg-lux-forest px-6 py-3 font-sans text-sm uppercase tracking-[0.3em] text-white"
          >
            Plan My Journey
          </Link>
          <Link
            href="#signature-journeys"
            className="font-sans text-sm uppercase tracking-[0.3em] text-lux-forest border-b border-lux-accent"
          >
            Explore signature journeys
          </Link>
        </div>
      </div>
    </section>
  )
}
