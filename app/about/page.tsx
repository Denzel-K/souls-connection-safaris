"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-sans text-sm tracking-widest text-gold mb-6">OUR STORY</p>
          <h1 className="font-serif text-5xl md:text-7xl text-foreground font-bold mb-8 text-balance">
            Souls Connection Safaris
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Founded on a passion for authentic African experiences, we connect travelers with the soul of the continent
            through luxury safari journeys that transform lives.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-20 md:py-32 px-6 bg-green/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-sans text-sm tracking-widest text-gold mb-4">OUR MISSION</p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold mb-6">
                Connect Souls with Nature
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We believe that African safaris are more than just wildlife encounters—they are transformative journeys
                that reconnect people with nature, with themselves, and with their place in the world.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our commitment is to deliver luxury experiences that are authentic, sustainable, and deeply meaningful.
                Every journey is carefully curated to ensure maximum impact on both our guests and the communities we
                serve.
              </p>
              <Link
                href="/booking"
                className="inline-block px-8 py-3 bg-gold text-foreground font-sans font-medium hover:bg-gold/90 transition-all duration-200"
              >
                Start Your Journey
              </Link>
            </div>
            <div className="relative h-96 bg-gradient-to-br from-gold/20 to-green/20 rounded-lg overflow-hidden">
              <img src="/african-sunset-landscape.jpg" alt="African landscape" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-20 md:py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-sm tracking-widest text-gold mb-4">WHAT WE STAND FOR</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold text-balance">Our Core Values</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Authenticity",
                description:
                  "We provide genuine, unfiltered African experiences guided by local experts who truly understand the land and its people.",
                icon: "🌍",
              },
              {
                title: "Sustainability",
                description:
                  "Every safari is designed with environmental responsibility in mind. We protect habitats and support conservation efforts.",
                icon: "♻️",
              },
              {
                title: "Luxury with Purpose",
                description:
                  "Premium accommodations and services paired with meaningful community engagement and ethical tourism practices.",
                icon: "✨",
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="font-serif text-2xl text-foreground font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-20 md:py-32 px-6 bg-green/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-sm tracking-widest text-gold mb-4">MEET THE TEAM</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold text-balance">
              Experts in African Safari
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: "Amara Okafor",
                role: "Founder & Chief Guide",
                bio: "25+ years of safari expertise with a deep love for African wildlife and conservation.",
              },
              {
                name: "James Kariuki",
                role: "Head of Operations",
                bio: "Passionate about creating seamless experiences that connect guests with the African wilderness.",
              },
              {
                name: "Sofia Moreno",
                role: "Experience Curator",
                bio: "Specialized in designing personalized safari journeys that transform and inspire travelers.",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-full h-64 bg-gradient-to-br from-gold/30 to-green/30 rounded-lg mb-6 overflow-hidden">
                  <img
                    src={`/safari-expert-portrait-.jpg?height=300&width=300&query=safari-expert-portrait-${index + 1}`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-2xl text-foreground font-bold mb-1">{member.name}</h3>
                <p className="text-gold font-sans font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-20 md:py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-sm tracking-widest text-gold mb-4">WHY CHOOSE US</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold text-balance">
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              "Expert-led safaris with naturalists and conservationists",
              "Exclusive access to protected reserves and pristine landscapes",
              "Luxury lodges and accommodations with world-class amenities",
              "Small group sizes for personalized, intimate experiences",
              "Community partnerships and sustainable tourism practices",
              "Comprehensive travel support and bespoke itinerary planning",
            ].map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="text-gold text-2xl font-bold flex-shrink-0">✓</div>
                <p className="text-lg text-foreground font-sans">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-32 px-6 bg-green/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold mb-8 text-balance">
            Ready to Join Us?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Begin your transformative African safari journey today. Let us guide you to places that will touch your
            soul.
          </p>
          <Link
            href="/booking"
            className="inline-block px-8 py-4 bg-gold text-foreground font-sans font-medium hover:bg-gold/90 transition-all duration-200"
          >
            Explore Our Packages
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
