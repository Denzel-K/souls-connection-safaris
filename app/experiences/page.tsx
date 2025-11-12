"use client"

import Link from "next/link"
import { Crown, Sun, ArrowUpRight } from "lucide-react"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { packageTiers } from "@/lib/experiences-data"

const formatList = (items: string[], limit = 3) => {
  if (items.length === 0) return ""
  const sliced = items.slice(0, limit)
  const remainder = items.length - sliced.length
  return remainder > 0 ? `${sliced.join(" • ")} +${remainder}` : sliced.join(" • ")
}

const getLowestPriceLabel = (prices: string[]) => {
  let lowest = Number.POSITIVE_INFINITY
  let label = ""

  prices.forEach((price) => {
    const numericMatch = price.replace(/[^0-9.]/g, "")
    const value = Number.parseFloat(numericMatch)
    if (!Number.isNaN(value) && value < lowest) {
      lowest = value
      label = price
    }
  })

  return label || prices[0] || "On request"
}

export default function ExperiencesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        className="relative isolate overflow-hidden"
        style={{ marginTop: "calc(var(--header-height, 96px) * -1)" }}
      >
        <img
          src="/all-experiences.jpeg"
          alt="Guests exploring curated safari journeys"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative px-6 py-32 md:py-52 min-h-[70vh] flex items-center">
          <div className="max-w-6xl mx-auto text-center text-white space-y-8">
            <p className="font-sans text-sm tracking-[0.5em] text-white/70">ALL EXPERIENCES</p>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-balance">
              Discover All Safari Experiences
            </h1>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed text-white/85">
              From intimate group journeys to ultra-luxury private adventures, explore our complete collection of curated
              safari experiences designed to create unforgettable African memories.
            </p>
          </div>
        </div>
      </section>

      {/* Package Tiers Overview */}
      <section className="py-20 md:py-32 px-6 bg-background">
        <div className="max-w-6xl mx-auto space-y-24">
          {packageTiers.map((tier) => (
            <div key={tier.id}>
              {/* Tier Header */}
              <div className="flex flex-col gap-4 mb-12">
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center border border-border bg-card text-brown">
                    {tier.icon === "sun" ? <Sun className="h-5 w-5" /> : <Crown className="h-5 w-5" />}
                  </span>
                  <div>
                    <p className="font-sans text-xs tracking-[0.4em] text-brown font-semibold uppercase">{tier.name}</p>
                    <h2 className="font-serif text-4xl md:text-5xl text-foreground">{tier.description}</h2>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                  Each sub-collection below reveals the kind of pacing, hosting, and destinations you can expect—before
                  you dive into itineraries.
                </p>
              </div>

              {/* Subcategories Grid */}
              <div className="grid gap-10 md:grid-cols-2">
                {tier.subcategories.map((subcat) => (
                  <article
                    key={subcat.id}
                    className="relative overflow-hidden border border-border/70 bg-card p-10 shadow-[0_35px_95px_rgba(20,20,15,0.12)] transition hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div>
                        <h3 className="font-serif text-3xl text-foreground">{subcat.name}</h3>
                      </div>
                     
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">{subcat.description}</p>

                    <div className="space-y-5 text-sm text-muted-foreground border border-foreground/30 p-2 rounded-[4px]">
                      <div className="ml-4">
                        <p className="uppercase tracking-[0.3em] text-[0.65rem] text-lux-accent mb-2 font-sans font-bold">→ Featured journeys</p>
                        <p className="text-foreground text-sm">{formatList(subcat.experiences.map((exp) => exp.name), 3)}</p>
                      </div>

                      <div className="ml-4">
                        <p className="uppercase tracking-[0.3em] text-[0.65rem] text-lux-accent mb-2 font-sans font-bold">→ Destinations</p>
                        <p className="text-foreground text-sm">
                          {formatList(
                            Array.from(new Set(subcat.experiences.map((exp) => exp.destination.replaceAll("·", "•")))),
                            3,
                          )}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-3 text-[0.7rem]">
                        {subcat.experiences.slice(0, 3).map((exp) => (
                          <span key={exp.id} className="px-3 py-1 border border-border text-foreground/80">
                            {exp.duration}
                          </span>
                        ))}
                        {subcat.experiences.length > 3 && (
                          <span className="px-3 py-1 border border-border text-foreground/80">
                            +{subcat.experiences.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <Link
                        href={`/experiences/${tier.slug}#${subcat.slug}`}
                        className="inline-flex flex-1 min-w-[200px] items-center justify-center border border-foreground px-4 py-2 text-sm uppercase tracking-[0.15em] text-foreground hover:bg-lux-forest hover:text-background transition"
                      >
                        Explore {subcat.name} <ArrowUpRight className="w-4 h-4" />
                      </Link>
                      {/* <Link
                        href={`/booking?tier=${tier.slug}&focus=${subcat.slug}`}
                        className="inline-flex items-center justify-center bg-brown px-6 py-3 text-sm font-semibold text-background transition hover:bg-brown/90"
                      >
                        Talk to a Host
                      </Link> */}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 md:py-32 px-6 bg-brown/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-sans text-sm tracking-widest text-brown mb-4">OUR COMMITMENT</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold mb-8 text-balance">
            Why Choose Souls Connection
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Expert Guides", desc: "Decades of safari experience and naturalist expertise" },
              { title: "Luxury Comfort", desc: "World-class accommodations in remote locations" },
              { title: "Personalized Care", desc: "Custom itineraries tailored to your interests" },
            ].map((item, i) => (
              <div key={i}>
                <h3 className="font-serif text-2xl text-foreground font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
