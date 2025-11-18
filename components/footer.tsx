"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Star } from "lucide-react"
import { SafariLogo } from "@/components/safari-logo"

const footerGallery = [
  "/african-safari-lions-at-sunset.jpg",
  "/giraffe-herd-in-savanna-landscape.jpg",
  "/elephant-family-drinking-at-watering-hole.jpg",
  "/leopard-in-acacia-tree-at-dusk.jpg",
  "/african-sunset-landscape.jpg",
  "/zebra-migration-across-plains.jpg",
]

const footerReviews = [
  {
    name: "Sarah Johnson",
    tour: "Grand Serengeti Journey",
    text: "Every sunrise felt choreographed for us. Luxury and wilderness moved in perfect rhythm.",
  },
  {
    name: "Michael Chen",
    tour: "Ultimate Grand Safari",
    text: "From helicopters to hushed campfires, it was futurist comfort woven through ancient lands.",
  },
]

const regulatoryPartners = [
  {
    name: "Ministry of Tourism",
    logo: "/ministry-of-tourism.jpg",
    alt: "Ministry of Tourism logo",
  },
  {
    name: "Tourism Regulatory Authority",
    logo: "/tourism-regulatory-authority.png",
    alt: "Tourism Regulatory Authority logo",
  },
]

type FooterColumnProps = {
  title: string
  links: { label: string; href: string }[]
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  const patternSvg = encodeURIComponent(`
    <svg width="1600" height="400" viewBox="0 0 1600 400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ray" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#FBE6C2" stop-opacity="0.05"/>
          <stop offset="60%" stop-color="#E0B877" stop-opacity="0.4"/>
          <stop offset="100%" stop-color="#8A4E23" stop-opacity="0.75"/>
        </linearGradient>

      </defs>
      <rect width="1600" height="400" fill="#0a0602ff"/>
      <path d="M0 400 L160 120 L320 400 L480 80 L640 400 L800 60 L960 400 L1120 110 L1280 400 L1440 150 L1600 400" fill="url(#ray)" opacity="0.95"/>
      <rect y="300" width="1600" height="100" fill="url(#tri)" opacity="0.9"/>
    </svg>
  `)

  return (
    <footer className="relative bg-[#0a0602ff] text-background pt-20 pb-12 overflow-hidden w-full">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px] opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,${patternSvg}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[12px] border border-white/15 bg-white/5 px-6 sm:px-10 md:px-14 py-16 md:py-20 shadow-[0_50px_140px_rgba(0,0,0,0.6)]">
          <div className="flex flex-col gap-12 xl:flex-row xl:items-stretch xl:justify-between">
            <div className="max-w-4xl space-x-4 flex flex-row items-center">
              <SafariLogo size={126} />
              <div>
                <h3 className="font-serif text-xl md:text-2xl">Souls Connection Safaris</h3>
                <p className="text-white/70 text-sm leading-relaxed mt-3">
                  Crafting bespoke experiences that renew the spirit and restore connection.
                </p>
              </div>
            </div>

            <div className="w-full rounded-[12px] border border-white/20 px-6 py-6 space-y-4 xl:max-w-md">
              <p className="font-serif text-xl">Approved & Regulated By</p>
              <div className="flex flex-wrap items-center gap-6">
                {regulatoryPartners.map((partner) => (
                  <div key={partner.name} className="flex flex-col items-center text-center gap-2">
                    <img
                      src={partner.logo}
                      alt={partner.alt}
                      className="h-16 w-auto rounded-lg object-contain"
                    />
                    <p className="text-xs text-white/80">{partner.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full xl:max-w-sm">
              <div className="rounded-[12px] border border-white/25 bg-transparent px-6 py-6 space-y-4">
                <p className="font-serif text-xl">Stay close to the firelight.</p>
                <form className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="flex-1 rounded-full border border-white/25 bg-transparent px-5 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-gold/60"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-foreground hover:bg-gold/90 transition"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-xs text-white/60">Monthly notes on new routes, conservation work, and private reveals.</p>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-4">
            {/* Column 1 — Journeys */}
            <FooterColumn
              title="Journeys"
              links={[
                { label: "Journeys for Connection", href: "/journeys" },
                { label: "Essence (Premium)", href: "/journeys" },
                { label: "Deep Connection (Ultra)", href: "/journeys" },
                { label: "Private Connection (Private)", href: "/#experience-modes" },
                { label: "Intimate Connections (Small Groups)", href: "/#experience-modes" },
                { label: "Bespoke Meaning (Custom)", href: "/booking" },
              ]}
            />

            {/* Column 2 — Explore */}
            <FooterColumn
              title="Explore"
              links={[
                { label: "Soulful Stays", href: "/#lodges" },
                { label: "Field Notes on Connection", href: "/#journal" },
                { label: "FAQs", href: "/#faqs" },
                { label: "What’s Included", href: "/#inclusions" },
                { label: "Impact with Purpose", href: "#" },
                { label: "Hosts Who Design for Meaning", href: "/#hosts" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "#" },
              ]}
            />

            {/* Column 3 — Plan Your Journey */}
            <div>
              <h4 className="font-serif text-lg mb-5">Plan Your Journey</h4>
              <ul className="space-y-3 text-sm text-white/75">
                <li>
                  <Link href="/booking" className="hover:text-gold transition-colors">
                    Start My Journey
                  </Link>
                </li>
                <li>
                  <Link href="/sample-itinerary.pdf" className="hover:text-gold transition-colors">
                    See Sample Itinerary
                  </Link>
                </li>
                <li>
                  <Link href="/booking" className="hover:text-gold transition-colors">
                    Get My Plan
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gold transition-colors">
                    Consult Form
                  </Link>
                </li>
              </ul>
              <p className="mt-4 text-xs text-white/60">“Receive quiet insights & soulful safari notes.”</p>
            </div>
            <div>
              <h4 className="font-serif text-lg mb-5">Get In Touch</h4>
              <ul className="space-y-4 text-sm text-white/75">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                  <a href="tel:+1234567890" className="hover:text-gold transition-colors">
                    +1 (234) 567-890
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                  <a href="mailto:info@soulsconnection.com" className="hover:text-gold transition-colors">
                    info@soulsconnection.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                  <span>Nairobi, Kenya</span>
                </li>
              </ul>
            </div>
          </div>

          {/* <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[32px] border border-white/15 bg-white/5 p-6">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="font-serif text-2xl">Gallery Glimpses</p>
                  <p className="text-white/60 text-sm">This week&apos;s visual diary</p>
                </div>
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-2 rounded-full border border-gold/60 px-5 py-2 text-xs font-semibold tracking-[0.25em] uppercase text-gold hover:bg-gold/10 transition"
                >
                  View All
                </Link>
              </div>
              <div className="relative">
                <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 pr-2">
                  {footerGallery.slice(0, 6).map((image, idx) => (
                    <div key={idx} className="h-24 min-w-[140px] rounded-2xl overflow-hidden border border-white/10 flex-shrink-0">
                      <img src={image} alt="Gallery highlight" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div
                  className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 h-24 w-12 bg-gradient-to-r from-[#050301] via-[#050301]/60 to-transparent rounded-2xl"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 h-24 w-12 bg-gradient-to-l from-[#050301] via-[#050301]/60 to-transparent rounded-2xl"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="rounded-[32px] border border-white/15 bg-white/5 p-6">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="font-serif text-2xl">Guest Reflections</p>
                  <p className="text-white/60 text-sm">A whisper from recent travelers</p>
                </div>
                <Link
                  href="/reviews"
                  className="inline-flex items-center gap-2 rounded-full border border-gold/60 px-5 py-2 text-xs font-semibold tracking-[0.25em] uppercase text-gold hover:bg-gold/10 transition"
                >
                  Reviews
                </Link>
              </div>
              <div className="relative">
                <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 pr-2">
                  {footerReviews.map((review) => (
                    <div key={review.name} className="rounded-2xl border border-white/10 bg-black/20 p-4 min-w-[240px] flex-shrink-0">
                      <div className="flex gap-1 text-gold mb-2">
                        {[...Array(5)].map((_, idx) => (
                          <Star key={idx} className="w-4 h-4 fill-gold text-gold" />
                        ))}
                      </div>
                      <p className="text-sm text-white/85 mb-3">{review.text}</p>
                      <p className="font-serif text-white">{review.name}</p>
                      <p className="text-xs text-white/60">{review.tour}</p>
                    </div>
                  ))}
                </div>
                <div
                  className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 h-24 w-12 bg-gradient-to-r from-[#050301] via-[#050301]/60 to-transparent rounded-2xl"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 h-24 w-12 bg-gradient-to-l from-[#050301] via-[#050301]/60 to-transparent rounded-2xl"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div> */}

          <div className="mt-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/70 hover:border-gold hover:text-gold transition"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-xs text-white/70 text-center md:text-right">
              © {currentYear} Souls Connection Safaris. All rights reserved. |{" "}
              <Link href="#" className="hover:text-gold transition-colors">
                Privacy Policy
              </Link>{" "}
              |{" "}
              <Link href="#" className="hover:text-gold transition-colors">
                Terms of Service
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h4 className="font-serif text-lg mb-5">{title}</h4>
      <ul className="space-y-3 text-sm text-white/75">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="hover:text-gold transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
