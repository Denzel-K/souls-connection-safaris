"use client"

import Link from "next/link"
import { journeys } from "@/lib/journeys-data"

export function JourneysOfConnectionSection() {
  return (
    <section className="px-6 py-28 bg-lux-shell" id="journeys-of-connection">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col gap-3 md:flex-row items-center md:justify-between">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.4em] text-lux-accent mb-3 font-semibold">Journeys of Connection</p>
            <h2 className="font-serif text-5xl md:text-6xl text-lux-forest">Five signature journeys</h2>
            <p className="font-body text-lg md:text-xl text-lux-ink/80 max-w-2xl mt-3">Five thoughtfully designed safaris for meaning, connection, and quiet restoration.</p>
          </div>
          <div className="pt-2">
            <Link href="/journeys" className="inline-flex items-center justify-center rounded-full border border-lux-forest px-6 py-2 font-sans text-sm uppercase tracking-[0.3em] text-lux-forest">Explore all</Link>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {journeys.slice(0, 5).map((j) => (
            <article
              key={j.id}
              className="relative overflow-hidden border border-lux-sand bg-white shadow-[0_25px_85px_rgba(20,20,15,0.12)] transition hover:-translate-y-2 hover:shadow-[0_35px_100px_rgba(20,20,15,0.18)] flex flex-col h-full"
            >
              {/* Header with elegant tag */}
              <div className="relative bg-gradient-to-r from-lux-cream to-lux-shell px-6 py-5 border-b border-lux-sand/50">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm text-lux-forest px-3 py-1.5 text-xs font-medium border border-lux-sand/60 shadow-sm">
                    {j.regionTag}
                  </span>
                  <span className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-lux-accent font-semibold">
                    {j.meta.split(" · ")[0]}
                  </span>
                </div>
              </div>

              {/* Content area */}
              <div className="flex flex-col flex-1 p-6">
                <div className="flex-1">
                  <h3 className="font-serif text-2xl md:text-3xl text-lux-forest mb-3 font-bold leading-none whitespace-nowrap overflow-hidden text-ellipsis">{j.title}</h3>
                  <p className="font-body text-sm md:text-base text-lux-ink/85 mb-5 leading-relaxed">{j.subtitle}</p>
                  
                  {/* Enhanced meta section */}
                  <div className="bg-lux-shell/30 rounded-lg p-3 mb-4 border border-lux-sand/40">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-lux-accent"></div>
                        <span className="font-sans text-xs text-lux-forest/90 tracking-wide">
                          {j.meta.split(" · ").slice(2).join(" · ")}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                        <span className="font-sans text-xs text-lux-forest font-medium">{j.priceLine}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="font-sans text-xs text-lux-ink/60 leading-relaxed">{j.finePrint}</div>
                </div>

                {/* Action buttons - always at bottom */}
                <div className="mt-6 flex gap-2">
                  <Link href={`/booking?journey=${j.id}`} className="flex-1 bg-gold px-4 py-2.5 text-sm font-semibold text-foreground text-center hover:bg-gold/90 transition-all duration-200 shadow-sm hover:shadow-md">
                    Start My Journey
                  </Link>
                  <Link href={`/journeys#${j.id}`} className="flex-1 border border-lux-forest px-4 py-2.5 text-xs uppercase tracking-[0.15em] text-lux-forest text-center hover:bg-lux-forest hover:text-background transition-all duration-200">
                    See Sample Itinerary
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
