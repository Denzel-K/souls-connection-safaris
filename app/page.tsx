"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ImageSlideshow } from "@/components/image-slideshow"
import { getAllExperiences } from "@/lib/experiences-data"
import { Star } from "lucide-react"

const heroImages = [
  "/Safari Lion Encounter.jpeg",
  "/lounge-view.jpeg",
  "/zebra-migration-across-plains.jpg",
  "/Weekend Getaway in the Wild.jpeg",
  "/leopard-in-acacia-tree-at-dusk.jpg",
]

const galleryImages = [
  "/african-safari-lions-at-sunset.jpg",
  "/giraffe-herd-in-savanna-landscape.jpg",
  "/zebra-migration-across-plains.jpg",
  "/elephant-family-drinking-at-watering-hole.jpg",
  "/leopard-in-acacia-tree-at-dusk.jpg",
  "/african-sunset-landscape.jpg",
]

const reviewsData = [
  {
    name: "Sarah Johnson",
    location: "The Grand Serengeti Journey",
    rating: 5,
    text: "An absolutely transformative experience. Every detail was perfectly arranged.",
  },
  {
    name: "Michael Chen",
    location: "The Ultimate Grand Safari",
    rating: 5,
    text: "Souls Connection redefined what I thought was possible in luxury safari travel.",
  },
  {
    name: "Emma Williams",
    location: "Bespoke African Adventure",
    rating: 5,
    text: "Incredibly personalized service. They listened to what we wanted.",
  },
  {
    name: "David Martinez",
    location: "East Africa's Golden Savannahs",
    rating: 5,
    text: "The combination of wildlife, luxury accommodations, and expert guides was unmatched.",
  },
]

export default function Home() {
  const allExperiences = getAllExperiences()
  const featured = allExperiences.slice(0, 8)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-96 md:h-screen overflow-hidden">
        <ImageSlideshow images={heroImages} duration={6000} autoplay={true} />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-6">
          <div className="text-center max-w-2xl">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-background font-bold mb-6 text-balance">
              Souls Connection Safaris
            </h1>
            <p className="font-sans text-lg md:text-xl text-background/95 mb-8 leading-relaxed">
              Journey into the heart of Africa. Experience wildlife like never before, where luxury meets nature.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="px-8 py-3 bg-brown text-background font-sans font-medium hover:bg-brown/90 transition-all duration-200 text-center"
              >
                Explore Packages
              </Link>
              <Link
                href="/about"
                className="px-8 py-3 border-2 border-background text-background font-sans font-medium hover:bg-background/10 transition-all duration-200"
              >
                Learn Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start mb-12">
            <div>
              <p className="font-sans text-sm tracking-widest text-brown mb-3">FEATURED</p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold text-balance">
                Curated Safari Journeys
              </h2>
            </div>
            <Link
              href="/experiences"
              className="px-6 py-3 border-2 border-brown text-brown font-sans font-medium hover:bg-brown hover:text-background transition-all duration-200 whitespace-nowrap ml-4"
            >
              All Experiences →
            </Link>
          </div>

          {/* Horizontal Scroll Container */}
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 pb-4 min-w-min">
              {featured.map((exp) => (
                <div key={exp.id} className="flex-shrink-0 w-80 group cursor-pointer">
                  <div className="mb-4 overflow-hidden rounded-lg bg-muted h-48">
                    <img
                      src={exp.image || "/placeholder.svg"}
                      alt={exp.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <p className="font-sans text-xs tracking-widest text-brown font-bold mb-1 uppercase">
                      {exp.subcategory}
                    </p>
                    <h3 className="font-serif text-lg text-foreground font-bold mb-1 line-clamp-2">{exp.name}</h3>
                    <p className="font-sans text-sm text-muted-foreground mb-3">{exp.destination}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-sans text-xs text-muted-foreground">{exp.duration}</span>
                      <span className="font-serif text-brown font-bold text-sm">{exp.price}</span>
                    </div>
                    <Link
                      href={`/itinerary/${exp.itineraryId}`}
                      className="inline-block px-4 py-2 bg-brown text-background font-sans text-xs font-medium hover:bg-brown/90 transition-all duration-200"
                    >
                      View Itinerary →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-6 bg-green/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="/african-sunset-landscape.jpg"
                alt="African landscape at sunset"
                className="w-full h-96 md:h-[500px] object-cover rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="font-sans text-sm tracking-widest text-brown mb-4">WHY CHOOSE US</p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold mb-6">
                More Than Just a Safari
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Souls Connection Safaris, we believe a safari is more than wildlife viewing—it's a journey of
                self-discovery. Our expert guides, luxurious accommodations, and thoughtfully curated experiences create
                moments of profound connection with nature and yourself.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Expert naturalists with decades of experience",
                  "Personalized itineraries tailored to your interests",
                  "Sustainable and ethical safari practices",
                  "Uncompromising luxury in remote locations",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-brown mt-1">✓</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-block px-6 py-3 bg-brown text-background font-sans font-medium hover:bg-brown/90 transition-all duration-200"
              >
                Learn Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-sm tracking-widest text-brown mb-4">YOUR JOURNEY</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold mb-6 text-balance">
              Safari Experiences for Every Preference
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Whether you seek intimate group adventures or ultra-luxury private journeys, we offer diverse safari tiers
              and subcategories to match your vision of the perfect African experience.
            </p>
          </div>

          {/* Premium Tier */}
          <div className="mb-16 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-1">
              <p className="font-sans text-sm tracking-widest text-brown mb-4">CLASSIC LUXURY</p>
              <h3 className="font-serif text-3xl md:text-4xl text-foreground font-bold mb-4">Premium Safaris</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our Premium tier offers expertly guided journeys with exceptional value. Choose between small group
                departures, private experiences, or fully customized itineraries designed around your interests and
                schedule.
              </p>
              <div className="space-y-2 mb-8">
                {[
                  "Signature Safaris",
                  "Private Signature Safaris",
                  "Private Custom Safaris",
                  "Options & Extensions",
                ].map((item, i) => (
                  <p key={i} className="text-muted-foreground flex items-center gap-3">
                    <span className="text-brown">→</span> {item}
                  </p>
                ))}
              </div>
              <Link
                href="/experiences/premium-safari"
                className="inline-block px-6 py-3 bg-brown text-background font-sans font-medium hover:bg-brown/90 transition-all duration-200"
              >
                Explore Premium →
              </Link>
            </div>
            <div className="order-2">
              <img
                src="/giraffe-herd-in-savanna-landscape.jpg"
                alt="Premium safari experience"
                className="w-full h-96 md:h-[500px] object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Ultra Premium Tier */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="/zebra-migration-across-plains.jpg"
                alt="Ultra premium safari experience"
                className="w-full h-96 md:h-[500px] object-cover rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="font-sans text-sm tracking-widest text-brown mb-4">ULTIMATE LUXURY</p>
              <h3 className="font-serif text-3xl md:text-4xl text-foreground font-bold mb-4">Ultra Premium Safaris</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Experience Africa at its finest with our Ultra Premium tier. Enjoy world-class five-star accommodations,
                exclusive access, private guides, and bespoke experiences. Every detail is meticulously curated for
                unforgettable moments.
              </p>
              <div className="space-y-2 mb-8">
                {[
                  "Five-star luxury lodges and camps",
                  "Private guides and exclusive access",
                  "Helicopter and yacht options",
                  "Michelin-trained chefs",
                ].map((item, i) => (
                  <p key={i} className="text-muted-foreground flex items-center gap-3">
                    <span className="text-brown">✨</span> {item}
                  </p>
                ))}
              </div>
              <Link
                href="/experiences/ultra-premium-safari"
                className="inline-block px-6 py-3 border-2 border-brown text-brown font-sans font-medium hover:bg-brown hover:text-background transition-all duration-200"
              >
                Explore Ultra Premium →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-6 bg-brown/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <p className="font-sans text-sm tracking-widest text-brown mb-4">VISUAL MOMENTS</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold mb-6">Safari Gallery</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Witness the raw beauty and majesty of African wildlife through our curated collection of extraordinary
              moments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {galleryImages.slice(0, 6).map((image, i) => (
              <div key={i} className="group overflow-hidden rounded-lg bg-muted h-64">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Gallery image ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/gallery"
              className="inline-block px-8 py-4 border-2 border-brown text-brown font-sans font-medium hover:bg-brown hover:text-background transition-all duration-200"
            >
              View Full Gallery →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start mb-12">
            <div>
              <p className="font-sans text-sm tracking-widest text-brown mb-3">GUEST EXPERIENCES</p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold text-balance">
                Traveler Testimonials
              </h2>
            </div>
            <Link
              href="/reviews"
              className="px-6 py-3 border-2 border-brown text-brown font-sans font-medium hover:bg-brown hover:text-background transition-all duration-200 whitespace-nowrap ml-4"
            >
              All Reviews →
            </Link>
          </div>

          {/* Horizontal Scroll Reviews */}
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 pb-4 min-w-min">
              {reviewsData.map((review, i) => (
                <div key={i} className="flex-shrink-0 w-96 p-8 border border-border rounded-lg bg-card/50">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-brown text-brown" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">"{review.text}"</p>
                  <div className="border-t border-border/50 pt-4">
                    <p className="font-serif text-foreground font-semibold">{review.name}</p>
                    <p className="text-sm text-brown font-medium">{review.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-6 bg-green/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-sans text-sm tracking-widest text-brown mb-6">READY TO EXPLORE</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold mb-6 text-balance">
            Begin Your African Adventure
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Connect with nature, discover yourself, and create memories that will last a lifetime on an authentic
            African safari tailored to your dreams.
          </p>
          <Link
            href="/booking"
            className="inline-block px-8 py-4 bg-brown text-background font-sans font-medium hover:bg-brown/90 transition-all duration-200"
          >
            Schedule Your Journey
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
