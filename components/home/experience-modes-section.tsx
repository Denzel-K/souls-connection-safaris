"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const experienceModes = [
  {
    eyebrow: "Private",
    title: "Your own rhythm.",
    subline: "Move when it feels right—with a host attuned to your pace.",
    bullets: ["Exclusive vehicles", "Flexible pacing", "Bespoke stays"],
    cta: { label: "Reserve Private Dates", href: "/booking" },
    image: "/couple-on-holiday.jpeg",
  },
  {
    eyebrow: "Small Group (≤15)",
    title: "Together, but unhurried.",
    subline: "Kindred travelers, fixed dates, and thoughtful value.",
    bullets: ["Intimate", "Fixed dates", "Exceptional value"],
    cta: { label: "View Small-Group Departures", href: "/departures" },
    image: "/group-on-holiday.jpeg",
  },
]

export function ExperienceModesSection() {
  return (
    <section className="px-6 py-16 bg-lux-cream" id="experience-modes">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <p className="font-sans font-semibold text-xs uppercase tracking-[0.4em] text-lux-accent">Choose your rhythm</p>
          <h2 className="font-serif text-3xl text-lux-forest">Private vs Small Group</h2>
          <p className="text-base text-lux-ink opacity-80">Self-select smoothly without pressure.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {experienceModes.map((mode, index) => (
            <motion.article
              key={mode.title}
              className="rounded-[18px] overflow-hidden bg-white shadow-[0_20px_50px_rgba(30,30,28,0.08)] border border-lux-sand flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
            >
              <img src={mode.image} alt={mode.title} className="h-58 w-full object-cover rounded-[18px]" loading="lazy" />
              <div className="p-6 space-y-3 flex-1 flex flex-col">
                <p className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-lux-accent">{mode.eyebrow}</p>
                <p className="font-serif text-2xl text-lux-forest">{mode.title}</p>
                <p className="text-base text-lux-ink opacity-80">{mode.subline}</p>
                <ul className="space-y-1.5 text-sm text-lux-forest opacity-80">
                  {mode.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[color:var(--lux-accent)]" aria-hidden />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="pt-2">
                  <motion.div whileHover={{ x: 4 }}>
                    <Link
                      href={mode.cta.href}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-lux-forest text-white font-sans text-xs uppercase tracking-[0.2em]"
                    >
                      {mode.cta.label}
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
