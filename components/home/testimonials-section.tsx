"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    feeling: "I exhaled.",
    quote: "Somewhere between dawn tea and lions in the grass, the noise inside me went quiet.",
    guest: "Alyssa M., New York",
  },
  {
    feeling: "Held, not hurried.",
    quote: "The days moved gently. Space to breathe, space to feel—like time widened just for us.",
    guest: "Kaleem & Mara, London",
  },
  {
    feeling: "Connected again.",
    quote: "Conversations by the fire, unhurried drives, a sky that made everything make sense.",
    guest: "Derrick S., California",
  },
]

export function TestimonialsSection() {
  return (
    <section className="px-6 py-24 bg-gradient-to-b from-white via-lux-bone to-lux-shell" id="stories">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-lux-accent font-semibold">Quiet Echoes</p>
          <h2 className="font-serif text-4xl text-lux-forest">What guests feel after our safaris</h2>
          <p className="text-lux-ink opacity-80">In their words—moments of stillness, connection, and renewal.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.feeling}
              className="group relative overflow-hidden border border-lux-forest/30 bg-gradient-to-br from-lux-forest to-[#1b2a23] p-10 text-lux-shell shadow-[0_25px_75px_rgba(10,21,16,0.45)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.1 }}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_top,var(--lux-accent)/0.4,transparent_65%)]"
              />
              <Quote className="relative mb-6 h-10 w-10 text-lux-accent" />
              <p className="relative text-xs uppercase tracking-[0.55em] text-lux-shell/60">Guest reflection</p>
              <p className="relative font-serif text-3xl leading-tight text-white">{testimonial.feeling}</p>
              <p className="relative mt-6 text-lg italic text-lux-shell/80">“{testimonial.quote}”</p>
              <p className="relative mt-8 text-sm uppercase tracking-[0.2em] text-lux-shell/80 font-sans">{testimonial.guest}</p>
            </motion.article>
          ))}
        </div>
        <div className="text-right">
          <Link href="/stories" className="text-sm text-lux-forest border-b border-lux-accent w-fit inline-flex">
            Read More Guest Stories →
          </Link>
        </div>
      </div>
    </section>
  )
}
