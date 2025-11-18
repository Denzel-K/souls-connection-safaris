"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { itineraries } from "@/lib/experiences-data"

export default function ItineraryPage({
  params,
}: {
  params: Promise<{ packageId: string }>
}) {
  const [expandedDays, setExpandedDays] = useState<string[]>([])
  const resolvedParams = params as unknown as { packageId: string }
  const { packageId } = resolvedParams

  const itinerary = itineraries[packageId as keyof typeof itineraries]

  if (!itinerary) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-niconne text-4xl text-foreground mb-4">Itinerary Not Found</h1>
            <Link href="/" className="text-brown hover:text-brown/80">
              Return to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const toggleDay = (day: string) => {
    setExpandedDays((prev) => (prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]))
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-brown/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
            <Link href="/" className="text-brown hover:text-brown/80 text-sm font-sans">
              ← Back to Home
            </Link>
            <div className="space-y-4">
              <h1 className="font-niconne text-5xl md:text-6xl text-foreground font-bold text-balance">
                {itinerary.title}
              </h1>
              <p className="text-lg text-foreground/70 font-body max-w-2xl">{itinerary.overview}</p>
              <div className="flex flex-wrap gap-6 pt-4">
                <div>
                  <p className="font-sans text-xs tracking-widest text-brown mb-1">DURATION</p>
                  <p className="font-niconne text-2xl text-foreground font-bold">{itinerary.duration}</p>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest text-brown mb-1">DESTINATION</p>
                  <p className="font-niconne text-2xl text-foreground font-bold">{itinerary.destination}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary Timeline */}
      <section className="py-20 md:py-32 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Desktop Timeline (Left side) */}
            <div className="hidden md:flex flex-col w-32 gap-2">
              <h3 className="font-sans text-xs tracking-widest text-brown font-bold mb-6">DAILY BREAKDOWN</h3>
              {itinerary.days.map((dayItem) => (
                <div
                  key={dayItem.day}
                  className={`py-2 px-4 rounded font-sans text-sm font-medium cursor-pointer transition-colors ${
                    expandedDays.includes(dayItem.day) ? "bg-brown text-background" : "text-brown hover:bg-brown/10"
                  }`}
                  onClick={() => toggleDay(dayItem.day)}
                >
                  {dayItem.day}
                </div>
              ))}
            </div>

            {/* Itinerary Days */}
            <div className="flex-1 space-y-4">
              {itinerary.days.map((dayItem) => (
                <div
                  key={dayItem.day}
                  className="border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => toggleDay(dayItem.day)}
                    className="w-full flex items-start justify-between p-6 bg-card hover:bg-muted transition-colors"
                  >
                    <div className="flex-1 text-left">
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="font-sans text-xs tracking-widest text-brown font-bold">{dayItem.day}</span>
                        <h3 className="font-niconne text-xl md:text-2xl text-foreground font-bold">{dayItem.title}</h3>
                      </div>
                      <p className="text-foreground/70 font-body">{dayItem.description}</p>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-brown flex-shrink-0 ml-4 transition-transform ${
                        expandedDays.includes(dayItem.day) ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {expandedDays.includes(dayItem.day) && (
                    <div className="p-6 bg-background border-t border-border space-y-6">
                      {/* Activities */}
                      {dayItem.activities && dayItem.activities.length > 0 && (
                        <div>
                          <h4 className="font-sans text-xs tracking-widest text-brown font-bold mb-3">ACTIVITIES</h4>
                          <ul className="space-y-2">
                            {dayItem.activities.map((activity, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-foreground/80">
                                <span className="text-brown mt-1 flex-shrink-0">•</span>
                                <span className="font-body">{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Meals */}
                      {dayItem.meals && (
                        <div className="pt-4 border-t border-border/50">
                          <p className="font-sans text-xs tracking-widest text-brown font-bold mb-2">MEALS</p>
                          <p className="font-body text-foreground/80">{dayItem.meals}</p>
                        </div>
                      )}

                      {/* Accommodation */}
                      {dayItem.accommodation && (
                        <div className="pt-4 border-t border-border/50">
                          <p className="font-sans text-xs tracking-widest text-brown font-bold mb-2">ACCOMMODATION</p>
                          <p className="font-body text-foreground/80">{dayItem.accommodation}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Download & Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-12 pt-12 border-t border-border">
            <button className="px-8 py-4 bg-brown text-background font-sans font-medium hover:bg-brown/90 transition-all duration-200">
              Download Itinerary PDF
            </button>
            <Link
              href="/booking"
              className="px-8 py-4 bg-gold text-foreground font-sans font-medium text-center hover:bg-gold/90 transition-all duration-200"
            >
              Book This Safari
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
