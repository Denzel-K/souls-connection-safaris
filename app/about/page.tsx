"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Gem, Globe, Leaf, UsersRound, CheckCircle } from "lucide-react"

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
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                As a family-led company, we know what it takes to travel with loved ones of every age. From multi-generational
                adventures to intimate honeymoons, we tailor each itinerary so parents, kids, friends, and solo travelers
                all feel seen, safe, and celebrated.
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
                icon: Globe,
              },
              {
                title: "Sustainability",
                description:
                  "Every safari is designed with environmental responsibility in mind. We protect habitats and support conservation efforts.",
                icon: Leaf,
              },
              {
                title: "Family-Centered Luxury",
                description:
                  "Premium stays and thoughtful touches that make everyone—from toddlers to grandparents—feel cared for and inspired.",
                icon: Gem,
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <value.icon className="w-12 h-12 mx-auto text-gold mb-4" />
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
          <div className="text-center mb-10">
            <p className="font-sans text-sm tracking-widest text-gold mb-4">MEET THE FAMILY</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold text-balance">
              A Family Guiding Families
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto mt-4">
              Souls Connection Safaris is led by husband-and-wife duo George and ....—parents, explorers, and believers in
              hospitality that feels like home. Their personal approach ensures every guest experiences the same warmth
              their own family shares on the trail.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                name: "George Mburu",
                role: "Founder & Experience Designer",
                bio: "Designs soulful itineraries with the intuition of a mother and the eye of a storyteller, ensuring every detail feels intimate and bespoke.",
                gradient: "from-gold/60 to-green/40",
              },
              {
                name: "..........",
                role: "Head of Field Operations",
                bio: "Leads on-the-ground logistics with calm precision, keeping families safe, inspired, and immersed in the wonder of the wild.",
                gradient: "from-green/60 to-brown/40",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-card/80 rounded-3xl p-8 text-center border border-border/50 shadow-lg flex flex-col items-center"
              >
                <div
                  className={`w-40 h-40 rounded-full mb-6 bg-gradient-to-br ${member.gradient} flex items-center justify-center`}
                >
                  <UsersRound className="w-16 h-16 text-background" />
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
                <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
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
            href="/experiences"
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
