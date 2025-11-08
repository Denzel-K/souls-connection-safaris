"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { packageTiers } from "@/lib/experiences-data"

export default function ExperiencesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-green/10 to-background">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-sans text-sm tracking-widest text-brown mb-4">ALL EXPERIENCES</p>
          <h1 className="font-serif text-5xl md:text-7xl text-foreground font-bold mb-6 text-balance">
            Discover All Safari Experiences
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            From intimate group journeys to ultra-luxury private adventures, explore our complete collection of curated
            safari experiences designed to create unforgettable African memories.
          </p>
        </div>
      </section>

      {/* Package Tiers */}
      <section className="py-20 md:py-32 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          {packageTiers.map((tier, tierIndex) => (
            <div key={tier.id} className={tierIndex > 0 ? "mt-20 pt-20 border-t border-border" : ""}>
              {/* Tier Header */}
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{tier.icon}</span>
                  <p className="font-sans text-sm tracking-widest text-brown font-bold uppercase">{tier.name}</p>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold mb-4">{tier.name}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{tier.description}</p>
              </div>

              {/* Subcategories Grid */}
              <div className="grid md:grid-cols-2 gap-12">
                {tier.subcategories.map((subcat) => (
                  <div
                    key={subcat.id}
                    className="p-8 border border-border rounded-lg hover:border-brown/50 transition-all duration-300 bg-card/50"
                  >
                    <h3 className="font-serif text-2xl text-foreground font-bold mb-3">{subcat.name}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{subcat.description}</p>

                    {/* Experiences List */}
                    <div className="space-y-4 mb-8">
                      {subcat.experiences.map((exp) => (
                        <div key={exp.id} className="pb-4 border-b border-border/50 last:border-0 last:pb-0">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-serif text-lg text-foreground font-semibold flex-1">{exp.name}</h4>
                            <span className="font-serif text-brown font-bold text-sm ml-2 whitespace-nowrap">
                              {exp.price}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{exp.destination}</p>
                          <div className="flex gap-3 items-center">
                            <span className="text-xs text-muted-foreground">{exp.duration}</span>
                            <Link
                              href={`/itinerary/${exp.itineraryId}`}
                              className="text-xs text-brown hover:text-brown/80 font-medium transition-colors"
                            >
                              View Itinerary →
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      href={`/experiences/${tier.slug}`}
                      className="inline-block px-6 py-3 bg-brown text-background font-sans font-medium hover:bg-brown/90 transition-all duration-200 w-full text-center"
                    >
                      Explore {subcat.name}
                    </Link>
                  </div>
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
