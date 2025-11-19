"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const founderMicroCreds = [
  "Years guiding premium guests",
  "Curated partners in Kenya & Tanzania",
  "Safety-first operations",
]

export function FoundersSection() {
  return (
    <section className="px-6 py-24 bg-lux-shell" id="hosts">
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-[0.6fr_0.4fr] items-center">
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="rounded-[36px] overflow-hidden shadow-[0_30px_80px_rgba(30,30,28,0.15)]">
            <img
              src="/man-n-woman.jpeg"
              alt="George and Wambui Mburu, hosts of Souls Connection Safaris, welcoming guests."
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-lux-accent font-semibold">Founders & Hosts</p>
          <h2 className="font-niconne text-4xl text-lux-forest font-light">Hosts Who Design for Meaning.</h2>
          <p className="text-lg text-lux-ink opacity-80">
            As PR and communication professionals, George and Wambui saw a gap in luxury safaris: guests were getting the sights, but not always the connection they were longing for. Their work begins with listening—understanding how you want to feel—then translating that into unhurried pacing, clear communication, and soulful experiences from arrival to farewell.
          </p>
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-lux-accent mb-3 font-semibold">
              What guests rely on
            </p>
            <div className="flex flex-wrap gap-3">
              {founderMicroCreds.map((cred) => (
                <span
                  key={cred}
                  className="inline-flex items-center gap-2 border border-lux-stone px-4 py-2 text-sm text-lux-forest"
                >
                  <CheckCircle2 className="w-4 h-4 text-lux-accent" />
                  {cred}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-lux-forest text-white"
            >
              Talk to a Host
            </Link>
            <Link href="/about" className="inline-flex items-center gap-2 text-lux-forest border-b border-lux-accent">
              Meet Your Hosts →
            </Link>
          </div>
          <p className="text-sm italic text-lux-ink opacity-70">“I felt seen and unhurried every day.” — E., California</p>
        </motion.div>
      </div>
    </section>
  )
}
