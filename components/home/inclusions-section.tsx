"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const essence = {
  eyebrow: "Premium",
  title: "Essence",
  subline: "The foundation of a meaningful, unhurried safari.",
  groups: [
    {
      title: "Hosting & Guidance",
      items: [
        "Named host support pre-trip",
        "On-trip assistance through partner guides",
        "Calm, intentional pacing",
      ],
    },
    {
      title: "Stays & Comfort",
      items: [
        "Premium safari camps & boutique lodges",
        "3–4 night stays per location",
        "Full board (accommodation + meals)",
      ],
    },
    {
      title: "Experiences & Activities",
      items: [
        "Private or shared game drives depending on mode",
        "Conservation-focused experiences (non-exploitative)",
        "Golden hour drives & unhurried mornings",
      ],
    },
    {
      title: "Logistics & Support",
      items: [
        "All transfers within Kenya/Tanzania",
        "Park & conservancy fees",
        "24/7 in-country support",
        "Flight & visa guidance",
        "Pre-trip briefing and packing list",
      ],
    },
  ],
  cta: { label: "See Essence Itineraries →", href: "/experiences" },
} as const

const deepConnection = {
  eyebrow: "Ultra-Premium",
  title: "Deep Connection",
  subline: "For travelers seeking ultimate presence & privacy",
  groups: [
    {
      title: "Hosting & Guidance",
      items: [
        "Full-time private host throughout",
        "Daily re-optimization of your plan",
        "Seamless emotional & logistical support",
      ],
    },
    {
      title: "Stays & Comfort",
      items: [
        "Exclusive-use villas or ultra-luxury camps",
        "Priority room categories",
        "Private dining setups",
        "Spa, wellness, or mindfulness experiences (where available)",
      ],
    },
    {
      title: "Experiences & Access",
      items: [
        "Private vehicle throughout",
        "Custom-designed experiences",
        "After-hours/low-crowd access (per conservation rules)",
        "Meaningful community immersions curated with integrity",
      ],
    },
    {
      title: "Transportation & Logistics",
      items: [
        "VIP arrival & departure service",
        "Optional helicopter hops or charter flights",
        "Personal comfort gear (binoculars, blankets, sundowner sets)",
        "In-depth pre-trip planning call",
      ],
    },
  ],
  cta: { label: "See Deep Connection Itineraries →", href: "/experiences" },
} as const

export function InclusionsSection() {
  type PanelId = "essence" | "deep"
  const panels = [
    { id: "essence" as PanelId, data: essence },
    { id: "deep" as PanelId, data: deepConnection },
  ]

  const [open, setOpen] = useState<Record<PanelId, boolean>>({ essence: false, deep: false })
  const toggle = (id: PanelId) => setOpen((p) => ({ ...p, [id]: !p[id] }))

  return (
    <section className="px-6 py-24 bg-gradient-to-b from-lux-shell via-white to-lux-cream" id="inclusions">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-lux-accent font-semibold">What's Included</p>
          <h2 className="font-niconne text-4xl text-lux-forest">Essence vs Deep Connection</h2>
          <p className="text-lux-ink/70 max-w-3xl mx-auto">Two inclusion sets, both grounded in care—choose the level of hosting and access that fits your presence.</p>
        </div>
        <div className="flex flex-col gap-8 md:flex-row md:items-start">
          {panels.map((panel) => {
            const col = panel.data
            const isOpen = open[panel.id]
            const contentId = `inclusions-${panel.id}`

            return (
              <motion.div
                key={panel.id}
                className="relative w-full md:flex-1 overflow-hidden border p-[1.5px] backdrop-blur-xl border-lux-forest/15 bg-gradient-to-br from-white/95 via-lux-shell to-lux-cream"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="relative rounded-[44px] p-8 md:p-10 bg-white/85 text-lux-ink shadow-[0_45px_120px_rgba(15,15,10,0.18)]">
                  <div aria-hidden className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_top,var(--lux-accent)/0.25,transparent_65%)]" />
                  <button
                    type="button"
                    onClick={() => toggle(panel.id)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="relative flex w-full flex-col gap-4 text-left"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div className="space-y-3">
                        <p className="text-[12px] font-sans font-bold uppercase tracking-[0.45em] text-lux-accent">{col.eyebrow}</p>
                        <p className="font-niconne text-3xl text-lux-forest leading-tight">{col.title}</p>
                        <p className="text-sm md:text-base text-lux-ink/70">{col.subline}</p>
                      </div>
                      <span
                        className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-lux-forest/20 bg-white/70 text-lux-forest backdrop-blur transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        <ChevronDown className="h-5 w-5" />
                      </span>
                    </div>
                  </button>
                  <div
                    id={contentId}
                    style={{ maxHeight: isOpen ? "1000px" : "0px" }}
                    className={`relative overflow-hidden transition-[max-height] duration-500 ease-out ${isOpen ? "mt-8" : "mt-0"}`}
                  >
                    <div className="space-y-6">
                      {col.groups.map((g) => (
                        <div key={g.title} className="space-y-2">
                          <p className="font-sans text-xs uppercase tracking-[0.3em] text-lux-forest/80">{g.title}</p>
                          <ul className="list-disc pl-5 space-y-1 text-lux-ink/85">
                            {g.items.map((it) => (
                              <li key={it} className="text-sm leading-relaxed">{it}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <div className="pt-2">
                        <Link href={col.cta.href} className="inline-flex items-center gap-2 text-sm font-medium text-lux-forest border-b border-lux-accent">
                          {col.cta.label}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
