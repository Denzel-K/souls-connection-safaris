"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { packageTiers } from "@/lib/experiences-data"

export default function ExperiencesPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const [expandedSubcategory, setExpandedSubcategory] = useState<string | null>(null)
  const resolvedParams = params as unknown as { slug: string }
  const { slug } = resolvedParams

  const tier = packageTiers.find((t) => t.slug === slug)

  if (!tier) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-4xl text-foreground mb-4">Experience Not Found</h1>
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
      <section className="py-16 md:py-24 px-6 bg-gradient-to-br from-background to-green/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-foreground font-bold mb-6 text-balance">{tier.name}</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">{tier.description}</p>
        </div>
      </section>

      {/* Subcategories Section */}
      <section className="py-16 md:py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          {tier.subcategories.map((subcategory, subIndex) => (
            <div key={subcategory.id} className={`mb-20 ${subIndex > 0 ? "pt-12 border-t border-border" : ""}`}>
              {/* Subcategory Header */}
              <div className="mb-12">
                <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold mb-4">{subcategory.name}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">{subcategory.description}</p>
              </div>

              {/* Experiences Grid */}
              <div className="grid md:grid-cols-2 gap-12">
                {subcategory.experiences.map((experience) => (
                  <div key={experience.id} className="flex flex-col">
                    {/* Experience Image */}
                    <div className="mb-6 overflow-hidden rounded-lg bg-muted h-64 md:h-72">
                      <img
                        src={experience.image || "/placeholder.svg"}
                        alt={experience.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Experience Details */}
                    <div className="flex flex-col flex-1">
                      <div className="mb-4">
                        <h3 className="font-serif text-2xl md:text-3xl text-foreground font-bold mb-2">
                          {experience.name}
                        </h3>
                        <p className="text-gold font-sans text-sm font-medium mb-3">{experience.destination}</p>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{experience.description}</p>

                      {/* Highlights */}
                      <div className="mb-6">
                        <div className="space-y-2">
                          {experience.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <span className="text-gold font-bold mt-1">•</span>
                              <span className="text-sm text-foreground">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Duration & Price */}
                      <div className="flex items-end justify-between mb-6">
                        <div>
                          <p className="text-xs text-muted-foreground font-medium mb-1">Duration</p>
                          <p className="font-serif text-lg text-foreground font-bold">{experience.duration}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground font-medium mb-1">Starting Price</p>
                          <p className="font-serif text-lg text-gold font-bold">{experience.price}</p>
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex gap-4">
                        <Link
                          href={`/itinerary/${experience.itineraryId}`}
                          className="flex-1 px-4 py-3 border-2 border-gold text-gold font-sans text-sm font-medium hover:bg-gold hover:text-foreground transition-all duration-200 text-center"
                        >
                          View Itinerary
                        </Link>
                        <Link
                          href="/booking"
                          className="flex-1 px-4 py-3 bg-gold text-foreground font-sans text-sm font-medium hover:bg-gold/90 transition-all duration-200 text-center"
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 bg-green/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold mb-6">Ready to Begin?</h2>
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
