"use client"

import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      q: "Is it safe?",
      a:
        "Yes. We work with vetted lodges, pro guides, and partners with strong safety records. Your journey includes 24/7 support, contingency plans, and medical/evac coverage guidance.",
    },
    {
      q: "Will it feel crowded?",
      a:
        "No. We prioritize private conservancies, flexible timings, and intentional pacing so your days feel calm, spacious, and unhurried.",
    },
    {
      q: "How do you avoid rushed itineraries?",
      a:
        "We design with longer stays, flexible mornings/evenings, and personalized pacing. Fewer transfers = better connection.",
    },
    {
      q: "Can this work for kids or elders?",
      a:
        "Yes. We adjust pacing, vehicle setups, and activities for comfort. Inter-connecting tents and slower days make this seamless for multi-gen groups.",
    },
    {
      q: "What about visas, flights, dietary needs, logistics?",
      a:
        "We guide you through each step—visas, transfers, dietary details, packing, and timing—so nothing feels overwhelming.",
    },
    {
      q: "Are experiences ethical?",
      a:
        "Yes. All community and conservation experiences are vetted for integrity, respect, and long-term benefit to local people and landscapes.",
    },
  ]

  return (
    <section className="px-6 py-24 bg-white" id="faqs">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <h2 className="font-serif text-4xl md:text-5xl text-lux-forest">FAQs.</h2>
          <p className="text-base md:text-lg text-lux-ink/80">Clear answers for calm planning.</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-lux-forest text-base md:text-xl font-semibold">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-lux-ink/80 leading-relaxed text-sm md:text-lg">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center pt-2">
          <Link href="/contact" className="inline-flex items-center gap-2 text-lux-forest border-b border-lux-accent">
            Still unsure? Ask a Host →
          </Link>
        </div>
      </div>
    </section>
  )
}
