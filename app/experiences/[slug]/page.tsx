"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { packageTiers } from "@/lib/experiences-data"

const cardClasses =
  "flex flex-col border border-border/80 bg-card overflow-hidden shadow-[0_20px_70px_rgba(20,20,15,0.12)] transition hover:-translate-y-2"

export default function ExperiencesPage({ params }: { params: { slug: string } }) {
  const { slug } = params

  const tier = packageTiers.find((t) => t.slug === slug)

  if (!tier) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-niconne text-4xl text-foreground mb-4">Experience Not Found</h1>
            <Link href="/" className="text-gold hover:text-gold/80">
              Return to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        className="relative isolate overflow-hidden"
        style={{ marginTop: "calc(var(--header-height, 96px) * -1)" }}
      >
        <img
          src={tier.slug === "ultra-premium-safari" ? "/ultra-premium-experiences.jpeg" : "/premium-experiences.jpeg"}
          alt={`${tier.name} showcase`}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative px-6 py-32 md:py-48 min-h-[70vh] flex items-center">
          <div className="max-w-4xl mx-auto text-center text-white space-y-6">
            <h1 className="font-niconne text-5xl md:text-6xl font-bold text-balance">{tier.name}</h1>
            <p className="text-lg md:text-xl leading-relaxed text-white/85">{tier.description}</p>
          </div>
        </div>
      </section>

      {/* Subcategories Section */}
      <section className="py-16 md:py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          {tier.subcategories.map((subcategory, subIndex) => (
            <div key={subcategory.id} id={subcategory.slug} className={`mb-20 ${subIndex > 0 ? "pt-12 border-t border-border" : ""}`}>
              {/* Subcategory Header */}
              <div className="mb-12">
                <h2 className="font-niconne text-4xl md:text-5xl text-foreground font-bold mb-4">{subcategory.name}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">{subcategory.description}</p>
              </div>

              {/* Experiences Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {subcategory.experiences.map((experience) => (
                  <article key={experience.id} className={cardClasses}>
                    <div className="relative h-64 overflow-hidden">
                      <img src={experience.image || "/placeholder.svg"} alt={experience.name} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                      <div className="absolute top-4 left-4 border border-background/60 bg-white/85 px-3 py-1 text-[0.65rem] uppercase tracking-[0.3em] text-foreground">
                        {tier.name}
                      </div>
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background via-background/10 to-transparent" />
                    </div>
                    <div className="flex flex-1 flex-col gap-4 p-6">
                      <div>
                        <p className="text-[0.65rem] uppercase tracking-[0.4em] text-brown/70">{subcategory.name}</p>
                        <h3 className="font-niconne text-2xl text-foreground">{experience.name}</h3>
                        <p className="text-sm text-muted-foreground">{experience.destination}</p>
                      </div>
                      <p className="text-muted-foreground leading-relaxed flex-1">{experience.description}</p>
                      <div className="flex flex-wrap gap-2 text-[0.75rem] text-foreground">
                        <span className="border border-border px-3 py-1">{experience.duration}</span>
                        <span className="border border-border px-3 py-1">{experience.price}</span>
                      </div>
                      <div className="space-y-2">
                        {experience.highlights.slice(0, 3).map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                            <span className="mt-1 inline-block h-1.5 w-1.5 bg-gold" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-3 pt-2">
                        <Link
                          href={`/itinerary/${experience.itineraryId}`}
                          className="flex-1 border border-foreground px-4 py-2 text-sm uppercase tracking-[0.3em] text-foreground text-center hover:bg-foreground hover:text-background transition"
                        >
                          View Itinerary
                        </Link>
                        <Link
                          href="/booking"
                          className="flex-1 bg-gold px-4 py-2 text-sm font-semibold text-foreground text-center hover:bg-gold/90 transition"
                        >
                          Reserve
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 bg-green/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-niconne text-4xl md:text-5xl text-foreground font-bold mb-6">Ready to Begin?</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Contact our safari specialists to book your {tier.name.toLowerCase()} experience and start your African
            journey.
          </p>
          <Link
            href="/booking"
            className="inline-block px-8 py-4 bg-gold text-foreground font-sans font-medium hover:bg-gold/90 transition-all duration-200"
          >
            Schedule Your Safari
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
