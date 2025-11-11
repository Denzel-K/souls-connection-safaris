"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { CheckCircle2, ChevronDown, Shield } from "lucide-react"

const includedItems = [
  "Luxury lodges & camps; all meals",
  "House wine/beer at meals; bottled water & soft drinks",
  "Private 4×4 game drives with expert driver-guide",
  "Safari Director/host-level care throughout",
  "24/7 concierge support while traveling",
  "Inter-camp flights on multi-stop itineraries",
  "All airport transfers",
  "National park & conservancy fees",
  "Daily laundry service (where available)",
  "In-vehicle amenities (binoculars, reference guides, snacks, Wi-Fi where available)",
]

const excludedItems = [
  "International flights & departure taxes",
  "Passports, visas & immunizations",
  "Travel insurance",
  "Premium spirits & specialty wines beyond inclusions",
  "Spa treatments & personal incidentals",
  "Anything not expressly listed in inclusions",
]

const inclusionAccordions = [
  {
    id: "included" as const,
    eyebrow: "Included on Premium & Ultra-Premium journeys",
    title: "Ease, privacy, and care—already handled.",
    subcopy: "The essentials we weave into every hosted itinerary so you can just arrive.",
    items: includedItems,
    icon: CheckCircle2,
  },
  {
    id: "excluded" as const,
    eyebrow: "Not included (industry standard items)",
    title: "Handled separately, transparently.",
    subcopy: "We advise on these line items during planning so there are no surprises.",
    items: excludedItems,
    icon: Shield,
  },
]

type InclusionAccordionId = (typeof inclusionAccordions)[number]["id"]

export function InclusionsSection() {
  const [accordionOpen, setAccordionOpen] = useState<Record<InclusionAccordionId, boolean>>({
    included: false,
    excluded: false,
  })

  const toggleAccordion = (panel: InclusionAccordionId) => {
    setAccordionOpen((prev) => ({
      ...prev,
      [panel]: !prev[panel],
    }))
  }

  return (
    <section className="px-6 py-24 bg-gradient-to-b from-lux-shell via-white to-lux-cream" id="inclusions">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-lux-accent font-semibold">What's Included</p>
          <h2 className="font-serif text-4xl text-lux-forest">Representative inclusions; itinerary specifics apply.</h2>
          <p className="text-lux-ink/70 max-w-3xl mx-auto">
            Expand each capsule to explore what we handle automatically—and which line items are typically arranged with our
            guidance.
          </p>
        </div>
        <div className="flex flex-col gap-8 md:flex-row md:items-start">
          {inclusionAccordions.map((panel) => {
            const Icon = panel.icon
            const isOpen = accordionOpen[panel.id]
            const contentId = `accordion-${panel.id}`

            return (
              <motion.div
                key={panel.id}
                className="relative w-full md:flex-1 overflow-hidden rounded-[46px] border p-[1.5px] backdrop-blur-xl border-lux-forest/15 bg-gradient-to-br from-white/95 via-lux-shell to-lux-cream"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="relative rounded-[44px] p-8 md:p-10 bg-white/85 text-lux-ink shadow-[0_45px_120px_rgba(15,15,10,0.18)]">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_top,var(--lux-accent)/0.25,transparent_65%)]"
                  />
                  <button
                    type="button"
                    onClick={() => toggleAccordion(panel.id)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="relative flex w-full flex-col gap-4 text-left"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div className="space-y-3">
                        <p className="text-[12px] font-sans font-bold uppercase tracking-[0.45em] text-lux-accent">{panel.eyebrow}</p>
                        <p className="font-serif text-3xl text-current leading-tight">{panel.title}</p>
                        <p className="text-sm md:text-base text-lux-ink/70">{panel.subcopy}</p>
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
                    style={{ maxHeight: isOpen ? "900px" : "0px" }}
                    className={`relative overflow-hidden transition-[max-height] duration-500 ease-out ${isOpen ? "mt-8" : "mt-0"}`}
                  >
                    <div className="space-y-5">
                      <ul className="space-y-4">
                        {panel.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-4 text-lux-ink/80 animate-in fade-in duration-300"
                            style={{ animationPlayState: isOpen ? "running" : "paused" }}
                          >
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lux-forest/10 text-lux-forest">
                              <Icon className="h-5 w-5" />
                            </span>
                            <span className="flex-1 text-base leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
        <div className="text-right space-y-2">
          <p className="text-sm text-lux-ink opacity-60">Note: Your proposal and confirmation will specify exact details.</p>
          <Link href="/inclusions" className="inline-flex items-center gap-2 text-sm text-lux-forest border-b border-lux-accent">
            See Full Inclusions →
          </Link>
        </div>
      </div>
    </section>
  )
}
