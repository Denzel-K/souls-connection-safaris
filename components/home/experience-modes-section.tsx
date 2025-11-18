"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const experienceModes = [
  {
    eyebrow: "Private guide & vehicle — for your group only",
    title: "Private Connection",
    subline: "Your own rhythm, your own pace.",
    description:
      "Private guides, flexible timing, and intentional days shaped entirely around how you want to feel—rested, connected, and free to move without schedule pressure or crowds.",
    bullets: [
      "Private vehicle & host",
      "Flexible daily pacing",
      "Tailored moments & privacy",
      "Ideal for couples, families, multi-gen",
    ],
    cta: { label: "Reserve Private Dates →", href: "/booking" },
    image: "/couple-on-holiday.jpeg",
  },
  {
    eyebrow: "≤15 guests — set departures",
    title: "Intimate Connections",
    subline: "Together, unhurried.",
    description:
      "Small, hosted groups that keep things warm and personal. Ideal if you enjoy shared moments, meaningful conversations, and the ease of a planned, gently paced journey.",
    bullets: [
      "Max 15 guests",
      "Fully escorted, warm group energy",
      "Scheduled clarity, no decision fatigue",
      "Ideal for solo travelers, couples, and friends",
    ],
    cta: { label: "View Upcoming Departures →", href: "/departures" },
    image: "/group-on-holiday.jpeg",
  },
]

export function ExperienceModesSection() {
  return (
    <section className="px-6 py-16 bg-lux-cream" id="experience-modes">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <p className="font-sans font-semibold text-xs uppercase tracking-[0.4em] text-lux-accent">Private vs Small Group Modes</p>
          <h2 className="font-serif text-4xl md:text-5xl text-lux-forest">Choose Your Connection.</h2>
          <p className="text-base md:text-lg text-lux-ink opacity-80">Two ways to travel—each designed for meaning, comfort, and unhurried presence.</p>
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
                <p className="font-serif text-2xl text-lux-forest font-bold">{mode.title}</p>
                <p className="text-base text-lux-ink opacity-80">{mode.subline}</p>
                {mode.description && (
                  <p className="text-sm md:text-base text-lux-ink opacity-80 leading-relaxed">{mode.description}</p>
                )}
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
