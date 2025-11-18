"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const journalEntries = [
  {
    title: "Why Meaningful Travel Needs Space",
    excerpt: "From dawn lion calls to lantern-lit suppers, follow the sensory arc of our signature Mara immersion.",
    href: "/field-notes/why-meaningful-travel-needs-space",
    issue: "Field Note 01",
    season: "Mara Edition",
    readingTime: "4 min read",
  },
  {
    title: "Golden Hours in the Mara",
    excerpt: "How we pair tactile textures, slow dining, and intuitive hosting to keep the bush both wild and easeful.",
    href: "/field-notes/golden-hours-in-the-mara",
    issue: "Field Note 02",
    season: "Design Issue",
    readingTime: "6 min read",
  },
  {
    title: "The Quiet Art of Hosting",
    excerpt: "A look at intimacy, wildlife access, and why limited numbers protect habitat.",
    href: "/field-notes/the-quiet-art-of-hosting",
    issue: "Field Note 03",
    season: "Stewardship",
    readingTime: "3 min read",
  },
]

export function JournalSection() {
  return (
    <section className="px-6 py-24 bg-lux-cream" id="journal">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.4em] text-lux-accent mb-3 font-semibold">Journal (Quarterly)</p>
            <h2 className="font-niconne text-4xl text-lux-forest">Field notes on connection</h2>
          </div>
          <div className="flex flex-col items-end gap-3">
            <p>Reflections, stories, and quiet moments from the field.</p>
            <Link
              href="/field-notes"
              className="inline-flex items-center gap-2 text-sm font-medium text-lux-forest hover:text-lux-accent transition-colors"
            >
              View all field notes
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {journalEntries.map((entry, index) => (
            <motion.article
              key={entry.title}
              className="group relative flex flex-col border border-lux-sand/80 bg-gradient-to-b from-white via-lux-shell to-lux-cream p-8 shadow-[0_35px_90px_rgba(30,30,28,0.08),15px_20px_0_rgba(255,255,255,0.7)] transition-transform duration-500 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 translate-x-4 translate-y-4 border border-lux-sand/70 bg-white/70 -z-10"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-lux-accent/60 to-transparent"
              />
              <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.45em] text-lux-ink/50 font-sans">
                <span>{entry.issue}</span>
                <span className="tracking-[0.3em]">{entry.readingTime}</span>
              </div>
              <div className="flex flex-1 flex-col space-y-4 pt-6">
                <p className="font-niconne text-3xl font-semibold leading-tight text-lux-forest">{entry.title}</p>
                <p className="text-lux-ink/70 text-sm">{entry.excerpt}</p>
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-lux-sand/70 pt-5">
                <span className="text-[11px] uppercase tracking-[0.4em] text-lux-ink/50">{entry.season}</span>
                <Link href={entry.href} className="inline-flex items-center gap-2 text-sm font-medium text-lux-forest transition-all group-hover:gap-3">
                  Read entry
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
