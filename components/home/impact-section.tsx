"use client"

import { motion } from "framer-motion"

export function ImpactSection() {
  return (
    <section className="px-6 py-24 bg-white">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-lux-accent font-semibold">Impact & Community</p>
          <h2 className="font-serif text-5xl text-lux-forest">Connection with Purpose.</h2>
          <p className="text-lux-ink/80 text-lg">Travel that protects wild places and uplifts communities.</p>
        </motion.div>

        {/* Intro */}
        <motion.p
          className="max-w-4xl mx-auto text-center text-lux-ink/85 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Every journey contributes to something meaningful. We partner with conservationists, community leaders, and locally rooted organizations whose work restores landscapes and strengthens families. Your time here becomes part of a positive story—quietly, respectfully, and without disruption.
        </motion.p>

        {/* Three Pillars */}
        <div className="grid gap-6 md:grid-cols-3">
          <motion.article
            className="rounded-[20px] border border-lux-sand/60 bg-white/95 p-8 shadow-[0_20px_60px_rgba(30,30,28,0.08)] backdrop-blur-sm"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="font-sans text-[0.7rem] uppercase tracking-[0.3em] text-lux-accent font-semibold mb-2">Conservation with Integrity</p>
            <h3 className="font-serif text-2xl text-lux-forest font-bold mb-3">Protecting wildlife and habitat</h3>
            <p className="text-lux-ink/80 leading-relaxed text-sm">
              Support wildlife protection and habitat restoration through vetted conservancies and programs that prioritize ecological health, anti-poaching, and long-term stewardship.
            </p>
          </motion.article>

          <motion.article
            className="rounded-[20px] border border-lux-sand/60 bg-white/95 p-8 shadow-[0_20px_60px_rgba(30,30,28,0.08)] backdrop-blur-sm"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="font-sans text-[0.7rem] uppercase tracking-[0.3em] text-lux-accent font-semibold mb-2">Community with Respect</p>
            <h3 className="font-serif text-2xl text-lux-forest font-bold mb-3">Led by the community</h3>
            <p className="text-lux-ink/80 leading-relaxed text-sm">
              Engage through experiences led by the community, not for display. Meet artisans, guides, and families whose work is supported directly and transparently through your journey.
            </p>
          </motion.article>

          <motion.article
            className="rounded-[20px] border border-lux-sand/60 bg-white/95 p-8 shadow-[0_20px_60px_rgba(30,30,28,0.08)] backdrop-blur-sm"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="font-sans text-[0.7rem] uppercase tracking-[0.3em] text-lux-accent font-semibold mb-2">Purposeful Partnerships</p>
            <h3 className="font-serif text-2xl text-lux-forest font-bold mb-3">Trusted, ethical, lasting</h3>
            <p className="text-lux-ink/80 leading-relaxed text-sm">
              We collaborate with organizations chosen for trust, ethical standards, and impact. This ensures your travel enriches lives and landscapes in long-term, measurable ways.
            </p>
          </motion.article>
        </div>

        {/* Micro-connection line */}
        <motion.p
          className="text-center text-sm text-lux-forest/80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          “A portion of every journey supports local conservation and community programs.”
        </motion.p>
      </div>
    </section>
  )
}
