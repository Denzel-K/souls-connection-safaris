"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const galleryImages = [
  {
    src: "/african-safari-lions-at-sunset.jpg",
    alt: "Lions at sunset in African savanna",
    title: "Golden Hour Wildlife",
  },
  {
    src: "/giraffe-herd-in-savanna-landscape.jpg",
    alt: "Giraffe herd in savanna",
    title: "Serengeti Heights",
  },
  {
    src: "/zebra-migration-across-plains.jpg",
    alt: "Zebra migration across plains",
    title: "The Great Migration",
  },
  {
    src: "/elephant-family-drinking-at-watering-hole.jpg",
    alt: "Elephant family at watering hole",
    title: "Family Moments",
  },
  {
    src: "/leopard-in-acacia-tree-at-dusk.jpg",
    alt: "Leopard in acacia tree",
    title: "Elusive Beauty",
  },
  {
    src: "/african-sunset-landscape.jpg",
    alt: "African sunset landscape",
    title: "African Splendour",
  },
]

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero */}
      <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-gold/10 to-background">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-sans text-sm tracking-widest text-gold mb-4">VISUAL JOURNEY</p>
          <h1 className="font-niconne text-5xl md:text-7xl text-foreground font-bold mb-6 text-balance">
            Safari Gallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the raw beauty and majesty of African wildlife through our curated collection of extraordinary
            moments captured on safari.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 md:py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, i) => (
              <div key={i} className="group overflow-hidden rounded-lg bg-muted">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                </div>
                <div className="p-4">
                  <h3 className="font-niconne text-lg text-foreground font-bold">{image.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-6 bg-green/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-niconne text-4xl md:text-5xl text-foreground font-bold mb-6 text-balance">
            Ready to Create Your Own Gallery?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Book a safari and capture your own unforgettable moments in the African wilderness.
          </p>
          <a
            href="/booking"
            className="inline-block px-8 py-4 bg-gold text-foreground font-sans font-medium hover:bg-gold/90 transition-all duration-200"
          >
            Schedule Your Safari
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
