"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Star } from "lucide-react"

const mockReviews = [
  {
    name: "Sarah Johnson",
    source: "TripAdvisor",
    rating: 5,
    text: "An absolutely transformative experience. Every detail was perfectly arranged, and our guide was knowledgeable and passionate.",
    location: "The Grand Serengeti Journey",
    date: "October 2024",
  },
  {
    name: "Michael Chen",
    source: "Luxury Travel Magazine",
    rating: 5,
    text: "Souls Connection redefined what I thought was possible in luxury safari travel. The Ultra Premium tier is worth every penny.",
    location: "The Ultimate Grand Safari",
    date: "September 2024",
  },
  {
    name: "Emma Williams",
    source: "Google Reviews",
    rating: 5,
    text: "Incredibly personalized service. They listened to what we wanted and created the perfect safari experience for our honeymoon.",
    location: "Bespoke African Adventure",
    date: "August 2024",
  },
  {
    name: "David Martinez",
    source: "Condé Nast Traveler",
    rating: 5,
    text: "The combination of wildlife, luxury accommodations, and expert guides was unmatched. This is truly a once-in-a-lifetime experience.",
    location: "East Africa's Golden Savannahs",
    date: "July 2024",
  },
  {
    name: "Isabella Romano",
    source: "Travel + Leisure",
    rating: 5,
    text: "From the moment we arrived to the moment we departed, every aspect exceeded expectations. Absolute perfection.",
    location: "Private Signature Safari",
    date: "June 2024",
  },
  {
    name: "James Wilson",
    source: "National Geographic",
    rating: 5,
    text: "A photography safari unlike any other. The access and expertise provided was invaluable for capturing iconic moments.",
    location: "Masai Mara Explorer",
    date: "May 2024",
  },
]

export default function ReviewsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero */}
      <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-green/10 to-background">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-sans text-sm tracking-widest text-brown mb-4">GUEST TESTIMONIALS</p>
          <h1 className="font-niconne text-5xl md:text-7xl text-foreground font-bold mb-6 text-balance">
            What Our Travelers Say
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real experiences from real travelers who discovered the magic of African safari with Souls Connection.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 md:py-32 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {mockReviews.map((review, i) => (
              <div
                key={i}
                className="p-8 border border-border rounded-lg bg-card/50 hover:border-brown/50 transition-all"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-brown text-brown" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">"{review.text}"</p>

                {/* Author Info */}
                <div className="border-t border-border/50 pt-4">
                  <p className="font-niconne text-lg text-foreground font-semibold">{review.name}</p>
                  <p className="text-sm text-brown font-medium">{review.location}</p>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-xs text-muted-foreground">{review.date}</span>
                    <span className="text-xs text-muted-foreground font-medium">{review.source}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32 px-6 bg-brown/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "4.9/5", label: "Average Rating" },
              { number: "500+", label: "Happy Travelers" },
              { number: "98%", label: "Satisfaction Rate" },
              { number: "15+", label: "Years Experience" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="font-niconne text-4xl md:text-5xl text-brown font-bold mb-2">{stat.number}</p>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-6 bg-green/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-niconne text-4xl md:text-5xl text-foreground font-bold mb-6 text-balance">
            Join Our Community of Adventurers
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Become part of a legacy of unforgettable African safari experiences.
          </p>
          <a
            href="/booking"
            className="inline-block px-8 py-4 bg-brown text-background font-sans font-medium hover:bg-brown/90 transition-all duration-200"
          >
            Begin Your Journey
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
