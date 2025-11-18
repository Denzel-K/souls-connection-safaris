import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getDestinationBySlug } from "@/lib/destinations-data"
import { getAllExperiences } from "@/lib/experiences-data"

export default function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = params as unknown as { slug: string }
  const { slug } = resolvedParams
  const destination = getDestinationBySlug(slug)

  if (!destination) {
    notFound()
  }

  const allExperiences = getAllExperiences()
  const relatedExperiences = allExperiences
    .filter((exp) => exp.destination.toLowerCase().includes(destination.name.toLowerCase()))
    .slice(0, 4)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        className="relative w-full h-96 md:h-[500px] overflow-hidden"
        style={{ marginTop: "calc(var(--header-height, 96px) * -1)" }}
      >
        <img
          src={destination.image || "/placeholder.svg"}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex flex-col justify-end z-10 px-6 py-12">
          <div className="max-w-4xl mx-auto w-full">
            <Link href="/" className="text-white/80 hover:text-white inline-block text-sm font-sans mb-4">
              ← Back to Home
            </Link>
            <h1 className="font-serif text-5xl md:text-6xl text-white font-bold text-balance">
              {destination.name}
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 md:py-32 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{destination.description}</p>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Highlights */}
            <div>
              <h2 className="font-serif text-3xl text-foreground font-bold mb-6">Why Visit {destination.name}</h2>
              <ul className="space-y-3">
                {destination.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-brown mt-1 flex-shrink-0">✦</span>
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Best Time & Wildlife */}
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl text-foreground font-bold mb-4">Best Time to Visit</h3>
                <p className="text-muted-foreground leading-relaxed">{destination.bestTime}</p>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-foreground font-bold mb-4">Wildlife to Expect</h3>
                <div className="flex flex-wrap gap-2">
                  {destination.wildlife.map((animal, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-brown/10 border border-brown/20 text-foreground rounded-full text-sm font-medium"
                    >
                      {animal}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Activities */}
          <div className="py-12 border-y border-border">
            <h2 className="font-serif text-3xl text-foreground font-bold mb-8">Activities & Experiences</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {destination.activities.map((activity, i) => (
                <div key={i} className="p-6 bg-brown/5 rounded-lg border border-border/50">
                  <p className="font-serif text-lg text-foreground font-semibold">{activity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold mb-6 text-balance">
            Ready to Explore {destination.name}?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Browse our curated experiences or customize your own adventure. Our team is ready to help you plan the
            perfect safari.
          </p>
          <Link
            href="/booking"
            className="inline-block px-8 py-4 bg-brown text-background font-sans font-medium hover:bg-brown/90 transition-all duration-200"
          >
            Start Planning →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
