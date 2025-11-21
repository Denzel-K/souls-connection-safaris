"use client"

import Link from "next/link"
import { useState } from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { journeys, type Journey } from "@/lib/journeys-data"

export default function JourneysPage() {
  return (
    <div className="flex flex-col min-h-screen bg-lux-bone text-lux-ink">
      <Header />

      {/* Hero */}
      <section
        className="relative isolate overflow-hidden"
        style={{ marginTop: "calc(var(--header-height, 96px) * -1)" }}
      >
        <img
          src="/all-experiences.jpeg"
          alt="Quiet horizons over East Africa"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative px-6 py-32 md:py-52 min-h-[70vh] flex items-center">
          <div className="max-w-5xl mx-auto text-center text-white space-y-6">
            <p className="font-sans text-sm tracking-[0.5em] text-white/70">JOURNEYS OF CONNECTION</p>
            <h1 className="font-niconne text-5xl md:text-7xl font-bold text-balance font-light">Five Signature Journeys</h1>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed text-white/85">
              Five thoughtfully designed safaris for meaning, connection, and quiet restoration.
            </p>
          </div>
        </div>
      </section>

      {/* Journeys list with inline itineraries */}
      <section className="py-20 md:py-28 px-6 bg-background">
        <div className="max-w-7xl mx-auto grid gap-14">
          {journeys.map((j) => (
            <JourneyBlock key={j.id} journey={j} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

function JourneyBlock({ journey: j }: { journey: Journey }) {
  const [activeExpr, setActiveExpr] = useState(j.expressions?.[0]?.key ?? "")
  const [isItineraryOpen, setIsItineraryOpen] = useState(false)

  return (
    <article id={j.id} className="relative overflow-hidden border border-border/70 bg-card p-8 md:p-12 shadow-[0_35px_95px_rgba(20,20,15,0.12)]">
      <div className="mb-6 flex flex-wrap items-center gap-3 text-[0.7rem] text-foreground">
        <span className="inline-flex items-center gap-2 rounded-full bg-secondary text-foreground px-3 py-1 border border-border">{j.regionTag}</span>
        <span className="inline-flex items-center gap-2 rounded-full bg-card text-foreground px-3 py-1 border border-border">{j.meta.split(" · ")[0]}</span>
        {j.badge && (
          <span className="inline-flex items-center gap-2 rounded-full bg-card text-foreground/80 px-3 py-1 border border-border">{j.badge}</span>
        )}
      </div>

      <div className="flex flex-col gap-8 md:gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-3xl">
          <h2 className="font-niconne font-light text-4xl md:text-5xl text-foreground font-bold mb-2">{j.title}</h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-4">{j.subtitle}</p>
          <div className="font-sans text-sm tracking-wide text-foreground/90 mb-1">
            {j.meta.split(" · ").slice(2).join(" · ")}
          </div>
          <div className="font-sans text-sm text-foreground mb-4">{j.priceLine}</div>
          <div className="font-sans text-xs text-muted-foreground">{j.finePrint}</div>
        </div>
        <div className="lg:min-w-[340px] flex lg:flex-col gap-3">
          <Link href={`/booking?journey=${j.id}`} className="flex-1 bg-gold px-6 py-3 text-sm font-semibold text-foreground text-center hover:bg-gold/90 transition">
            Start My Journey
          </Link>
          <button
            onClick={() => setIsItineraryOpen(!isItineraryOpen)}
            className="flex-1 border border-foreground px-6 py-3 text-sm uppercase tracking-[0.2em] text-foreground text-center hover:bg-foreground hover:text-background transition"
            type="button"
          >
            {isItineraryOpen ? "Hide" : "See"} Sample Itinerary
          </button>
        </div>
      </div>

      {/* Collapsible Itinerary */}
      {isItineraryOpen && (
        <div id={`${j.id}-itinerary`} className="mt-10 pt-8 border-t border-border/70">
          {j.expressions && j.expressions.length > 0 ? (
            <div>
              <div className="flex flex-wrap gap-3 mb-6">
                {j.expressions.map((expr) => (
                  <button
                    key={expr.key}
                    onClick={() => setActiveExpr(expr.key)}
                    className={`px-4 py-2 text-sm border transition ${
                      activeExpr === expr.key ? "bg-foreground text-background" : "bg-card text-foreground hover:bg-muted"
                    }`}
                    type="button"
                  >
                    {expr.label}
                  </button>
                ))}
              </div>
              {j.expressions.map((expr) => (
                <div key={expr.key} className={activeExpr === expr.key ? "block" : "hidden"}>
                  <ItineraryView overview={expr.itinerary.overview} days={expr.itinerary.days} />
                </div>
              ))}
            </div>
          ) : j.itinerary ? (
            <ItineraryView overview={j.itinerary.overview} days={j.itinerary.days} />
          ) : null}
        </div>
      )}
    </article>
  )
}

function ItineraryView({
  overview,
  days,
}: {
  overview: string
  days: { day: string; title: string; description: string }[]
}) {
  return (
    <div className="space-y-6">
      <p className="font-body text-base md:text-lg text-muted-foreground max-w-3xl">{overview}</p>
      <ol className="relative border-s border-border/70 pl-6 space-y-6">
        {days.map((d, i) => (
          <li key={`${d.day}-${i}`} className="ms-4">
            <div className="absolute -start-1.5 mt-2 h-3 w-3 rounded-full bg-gold border border-background" />
            <div className="flex flex-col gap-1">
              <div className="font-sans text-[0.7rem] uppercase tracking-[0.25em] text-foreground/70">{d.day}</div>
              <div className="font-niconne text-xl text-foreground">{d.title}</div>
              <div className="font-body text-sm text-muted-foreground max-w-3xl">{d.description}</div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
