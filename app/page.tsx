"use client"

import Link from "next/link"
import { useRef, useState } from "react"
import { ArrowUpRight, CheckCircle2, ChevronLeft, ChevronRight, Quote, Shield } from "lucide-react"

import { allExperiences } from "@/lib/experiences-data"
import type { IndexedExperience } from "@/lib/experiences-data"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ImageSlideshow } from "@/components/image-slideshow"

const heroImages = [
  "/Safari Lion Encounter.jpeg",
  "/lounge-view.jpeg",
  "/zebra-migration-across-plains.jpg",
  "/Weekend Getaway in the Wild.jpeg",
  "/leopard-in-acacia-tree-at-dusk.jpg",
]

const paceGallery = [
  {
    label: "Crowds",
    src: "/zebra-migration-across-plains.jpg",
    alt: "Several safari vehicles dot the savannah at a distance.",
    description: "Distant vehicles clustered at a sighting.",
  },
  {
    label: "Rushed pacing",
    src: "/african-sunset-landscape.jpg",
    alt: "A hand rests beside a watch as the savannah blurs by.",
    description: "Time racing past the view.",
  },
  {
    label: "Decision overload",
    src: "/lounge-view.jpeg",
    alt: "Itinerary pages resting beside tea overlooking the plains.",
    description: "Too many itineraries, not enough clarity.",
  },
]

const whyUsReasons = [
  {
    title: "Meaningful hosting",
    lead: "Every journey starts with how you want to feel—presence, renewal, legacy.",
    highlights: ["Host-led consults", "Slow mornings & twilight drives", "Reflective rituals woven in"],
  },
  {
    title: "Privacy & ease",
    lead: "Quiet luxury signals—private vehicles, discreet handling, seamless pacing.",
    highlights: ["Dedicated host + driver-guide", "Door-to-door logistics managed", "Flexible days without crowds"],
  },
  {
    title: "Impact with integrity",
    lead: "Travel that protects wild places and uplifts the communities who steward them.",
    highlights: ["Conservation-first partners", "Women-led artisan initiatives", "Transparent impact reporting"],
  },
]

const destinations = ["Kenya", "Tanzania", "Coast", "Gorilla Extensions", "Cape Town", "Zanzibar"]

const planSteps = [
  {
    label: "01 / Consult",
    title: "Share how you want to feel",
    copy: "Short, host-led consult (15–20 min). You tell us the feelings you’re chasing and the pace you love.",
    micro: "It’s not where you want to go; it’s how you want to feel.",
  },
  {
    label: "02 / Your Plan",
    title: "Receive your bespoke plan (two clear options)",
    copy: "A polished proposal within 48 hours: two distinct routes, side-by-side—so choosing is effortless.",
    micro: "Our process is proven and personal.",
  },
  {
    label: "03 / Travel",
    title: "Travel at your pace",
    copy: "Host-led care, private vehicles, and space to linger when moments matter.",
    micro: "Clarity and ease drive conversions—clear steps, clear CTAs.",
  },
]

const founderDetailStrips = [
  {
    src: "/lounge-view.jpeg",
    alt: "Hands passing tea inside a canvas lounge.",
  },
  {
    src: "/tanzania-serengeti-savanna-with-zebra-herd-and-mou.jpg",
    alt: "Guide opening a vehicle door as dusk settles.",
  },
]

const founderMicroCreds = [
  "Years guiding premium guests",
  "Curated partners in Kenya & Tanzania",
  "Safety-first operations",
]

const experienceModes = [
  {
    eyebrow: "Private",
    title: "Your own rhythm.",
    subline: "Move when it feels right—with a host attuned to your pace.",
    bullets: ["Exclusive vehicles", "Flexible pacing", "Bespoke stays"],
    cta: { label: "Reserve Private Dates", href: "/booking" },
    image: "/couple-on-holiday.jpeg",
  },
  {
    eyebrow: "Small Group (≤15)",
    title: "Together, but unhurried.",
    subline: "Kindred travelers, fixed dates, and thoughtful value.",
    bullets: ["Intimate", "Fixed dates", "Exceptional value"],
    cta: { label: "View Small-Group Departures", href: "/departures" },
    image: "/group-on-holiday.jpeg",
  },
]

const lodgeTiles = [
  {
    title: "Clifftop Calm",
    meta: "Mara · Contemporary · 15 suites",
    line: "Long, unhurried afternoons; linen and timber opening to endless grassland.",
    image: "/lounge-view.jpeg",
  },
  {
    title: "Riverine Light",
    meta: "Laikipia · Organic · 8 tents",
    line: "Firelit suppers beside the river; private drives at your pace.",
    image: "/uganda-queen-elizabeth-national-park-with-tree-cli.jpg",
  },
  {
    title: "Savanna Stillness",
    meta: "Serengeti · Classic · 12 suites",
    line: "Floor-to-ceiling light, lantern paths, and dawn coffee with the plains.",
    image: "/tanzania-serengeti-savanna-with-zebra-herd-and-mou.jpg",
  },
  {
    title: "Dune & Acacia",
    meta: "Namibia · Sculptural · 10 villas",
    line: "Hand-hewn timber, stone courtyards, and desert stargazing decks.",
    image: "/botswana-okavango-delta-water-channels-with-elepha.jpg",
  },
]

const partnerLogos = [
  { name: "Singita", src: "/placeholder-logo.png" },
  { name: "Angama", src: "/placeholder-logo.png" },
  { name: "Wilderness", src: "/placeholder-logo.png" },
  { name: "Lengishu", src: "/placeholder-logo.png" },
  { name: "Sasaab", src: "/placeholder-logo.png" },
]

const testimonials = [
  {
    feeling: "I exhaled.",
    quote: "Somewhere between dawn tea and lions in the grass, the noise inside me went quiet.",
    guest: "Alyssa M., New York",
  },
  {
    feeling: "Held, not hurried.",
    quote: "The days moved gently. Space to breathe, space to feel—like time widened just for us.",
    guest: "Kaleem & Mara, London",
  },
  {
    feeling: "Connected again.",
    quote: "Conversations by the fire, unhurried drives, a sky that made everything make sense.",
    guest: "Derrick S., California",
  },
]

const journalEntries = [
  {
    title: "A Day in the Mara",
    excerpt: "From dawn lion calls to lantern-lit suppers, follow the sensory arc of our signature Mara immersion.",
    href: "/journal/a-day-in-the-mara",
    issue: "Field Note 01",
    season: "Mara Edition",
    readingTime: "4 min read",
  },
  {
    title: "Designing Quiet Luxury in the Bush",
    excerpt: "How we pair tactile textures, slow dining, and intuitive hosting to keep the bush both wild and easeful.",
    href: "/journal/designing-quiet-luxury",
    issue: "Field Note 02",
    season: "Design Issue",
    readingTime: "6 min read",
  },
  {
    title: "What 15 Guests Max Means",
    excerpt: "A look at intimacy, wildlife access, and why limited numbers protect habitat.",
    href: "/journal/fifteen-guests-max",
    issue: "Field Note 03",
    season: "Stewardship Perspective",
    readingTime: "3 min read",
  },
]

const featuredJourneyIds = [
  "premium-sig-grand",
  "premium-sig-mara",
  "premium-priv-golden",
  "ultra-priv-ultimate",
  "ultra-sig-grand",
]

const featuredJourneys: IndexedExperience[] = featuredJourneyIds
  .map((id) => allExperiences.find((experience) => experience.id === id))
  .filter((experience): experience is IndexedExperience => Boolean(experience))

const includedItems = [
  "Luxury lodges & camps; all meals",
  "House wine/beer at meals; bottled water & soft drinks",
  "Private 4×4 game drives with expert driver-guide",
  "Safari Director/host-level care throughout",
  "24/7 concierge support while traveling",
  "Inter-camp flights on multi-stop itineraries",
  "All airport transfers",
  "National park & conservancy fees",
  "Daily laundry service (where available)",
  "In-vehicle amenities (binoculars, reference guides, snacks, Wi-Fi where available)",
]

const excludedItems = [
  "International flights & departure taxes",
  "Passports, visas & immunizations",
  "Travel insurance",
  "Premium spirits & specialty wines beyond inclusions",
  "Spa treatments & personal incidentals",
  "Anything not expressly listed in inclusions",
]

export default function Home() {
  const [plannerEmail, setPlannerEmail] = useState("")
  const [plannerConsent, setPlannerConsent] = useState(false)
  const [plannerStatus, setPlannerStatus] = useState<"idle" | "success" | "error">("idle")
  const [activeLodgeIndex, setActiveLodgeIndex] = useState(0)
  const lodgeCarouselRef = useRef<HTMLDivElement>(null)

  const handlePlannerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!plannerEmail || !plannerConsent) {
      setPlannerStatus("error")
      return
    }
    setPlannerStatus("success")
  }

  const getLodgeScrollAmount = () => {
    if (!lodgeCarouselRef.current) return 0
    const slide = lodgeCarouselRef.current.querySelector<HTMLElement>("[data-lodge-card]")
    const gapValue =
      typeof window !== "undefined" && lodgeCarouselRef.current
        ? window.getComputedStyle(lodgeCarouselRef.current).columnGap || "0"
        : "0"
    const gap = parseFloat(gapValue) || 0
    return (slide?.offsetWidth ?? lodgeCarouselRef.current.clientWidth * 0.8) + gap
  }

  const handleLodgeNav = (direction: "prev" | "next") => {
    if (!lodgeCarouselRef.current) return
    const scrollAmount = getLodgeScrollAmount()
    if (!scrollAmount) return
    const nextPosition =
      direction === "next"
        ? lodgeCarouselRef.current.scrollLeft + scrollAmount
        : lodgeCarouselRef.current.scrollLeft - scrollAmount

    lodgeCarouselRef.current.scrollTo({ left: nextPosition, behavior: "smooth" })
  }

  const handleLodgeScroll = () => {
    if (!lodgeCarouselRef.current) return
    const scrollAmount = getLodgeScrollAmount()
    if (!scrollAmount) return
    const rawIndex = Math.round(lodgeCarouselRef.current.scrollLeft / scrollAmount)
    const clampedIndex = Math.min(lodgeTiles.length - 1, Math.max(0, rawIndex))
    setActiveLodgeIndex(clampedIndex)
  }


  return (
    <div className="flex flex-col min-h-screen bg-lux-bone text-lux-ink">
      <Header />

      {/* Hero Section */}
      <section
        className="relative w-full h-96 md:h-screen overflow-hidden"
        style={{ marginTop: "calc(var(--header-height, 96px) * -1)" }}
      >
        <ImageSlideshow images={heroImages} duration={6000} autoplay={true} />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-6">
          <div className="text-center max-w-3xl">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-background font-bold mb-6 text-balance">
              Come home to yourself.
            </h1>
            <p className="font-sans text-lg md:text-xl text-background/95 mb-8 leading-relaxed">
              A luxury safari for those who want to feel again—deeply, gently, intentionally.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="px-8 py-3 bg-brown text-background font-sans font-medium hover:bg-brown/90 transition-all duration-200 text-center"
              >
                Begin your journey
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

      {/* Rhythm + Pace Section */}
      <section className="px-6 py-24 bg-lux-bone" id="pace">
        <p className="font-serif text-4xl font-semibold text-lux-ink max-w-3xl mx-auto text-center mb-6">
          Connection can’t be scheduled to the minute. You deserve space, presence, and a host who knows when to
          slow down.
        </p>
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[0.6fr_0.4fr] items-center">
          <div className="order-2 lg:order-1 space-y-10 relative">
            <div className="absolute -inset-6 bg-[url('/placeholder.svg')] opacity-[0.03] rounded-[40px] pointer-events-none" />
            <div className="relative space-y-8 bg-white/85 backdrop-blur-sm p-12 rounded-[40px] shadow-[0_35px_90px_rgba(30,30,28,0.08)]">
              <p className="font-sans text-xs uppercase tracking-[0.4em] text-lux-accent font-semibold">Tired of rushed, box-ticking tours?</p>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Unhurried pacing",
                    description: "Sunrise coffee on the deck, long lunches, and drives that linger when awe arrives.",
                  },
                  {
                    title: "Host-led intuition",
                    description: "George and Wambui read energy, adjust routes, and hold space for quiet or conversation.",
                  },
                  {
                    title: "Private vantage",
                    description: "Dedicated vehicles, limited guests, and the freedom to stay when the moment is perfect.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <span className="text-sm font-semibold tracking-[0.3em] text-lux-accent mt-1">•</span>
                    <div>
                      <p className="font-serif text-xl text-lux-forest font-bold">{item.title}</p>
                      <p className="text-sm text-lux-ink opacity-80">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <blockquote className="text-lux-ink opacity-80 italic border-l-2 border-lux-stone pl-4">
                “Somewhere between dawn tea and lions in the grass, the noise inside me went quiet.” — Alyssa M., New York
              </blockquote>
              <div className="flex flex-wrap gap-4 items-center">
                <Link
                  href="#plan"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-lux-forest text-white rounded-full text-sm tracking-[0.2em]"
                >
                  See How We Plan
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link href="#hosts" className="text-sm text-lux-forest border-b border-lux-accent w-fit">
                  What a host-led day feels like →
                </Link>
              </div>

            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative rounded-[40px] overflow-hidden shadow-[0_40px_90px_rgba(30,30,28,0.2)]">
              <img
                src="/safari-expert-portrait-.jpg"
                alt="Host sharing a quiet moment with guests before a private drive."
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="px-6 py-24 bg-white" id="pillars">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="text-center space-y-4">
            <p className="font-sans text-xs uppercase tracking-[0.4em] text-lux-accent font-semibold">Why us?</p>
            <h2 className="font-serif text-4xl text-lux-forest">Our three value pillars</h2>
            <p className="text-lg text-lux-ink opacity-80">Human hosts, effortless pacing, and integrity in every detail.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {whyUsReasons.map((reason, index) => (
              <article
                key={reason.title}
                className="rounded-[32px] border border-lux-sand bg-white/80 p-8 shadow-[0_25px_70px_rgba(30,30,28,0.08)] backdrop-blur-sm"
              >
                <div className="flex items-center gap-4">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-lux-sand text-sm font-semibold tracking-[0.3em] text-lux-forest"
                    style={{ backgroundColor: "color-mix(in srgb, var(--lux-forest) 8%, transparent)" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="font-serif text-2xl text-lux-forest">{reason.title}</p>
                </div>
                <p className="mt-4 text-sm text-lux-ink opacity-80">{reason.lead}</p>
                <ul className="mt-6 space-y-2 text-sm text-lux-ink opacity-80">
                  {reason.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brown" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="flex flex-col items-center gap-3 md:flex-row md:justify-center">
            <Link
              href="/booking"
              className="rounded-full bg-lux-forest px-6 py-3 font-sans text-sm uppercase tracking-[0.3em] text-white"
            >
              Plan My Journey
            </Link>
            <Link
              href="#signature-journeys"
              className="font-sans text-sm uppercase tracking-[0.3em] text-lux-forest border-b border-lux-accent"
            >
              Explore signature journeys
            </Link>
          </div>
        </div>
      </section>

      {/* Signature Journeys */}
      <section className="px-6 py-24 bg-lux-cream" id="signature-journeys">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.4em] text-lux-accent mb-3 font-semibold">Signature Journeys</p>
              <h2 className="font-serif text-4xl md:text-5xl text-lux-forest">Host-led safaris</h2>
              <p className="text-lg text-lux-ink opacity-80">
                Premium and ultra-premium itineraries pulled directly from our experiences library.
              </p>
            </div>

          </div>
          <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory" aria-label="Featured journeys">
            {featuredJourneys.map((journey) => (
              <article
                key={journey.id}
                className="snap-start min-w-[320px] sm:min-w-[420px] w-80 flex-shrink-0 rounded-[14px] border border-lux-sand bg-white shadow-[0_15px_45px_rgba(30,30,28,0.12)] overflow-hidden flex flex-col"
              >
                <div className="relative h-44 sm:h-64">
                  <img
                    src={journey.image}
                    alt={`${journey.name} scene`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-0.5 font-sans text-[0.65rem] uppercase tracking-[0.25em] text-lux-forest">
                    {journey.tierName}
                  </div>
                </div>
                <div className="flex flex-col gap-2.5 p-5">
                  <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-lux-accent">{journey.subcategoryName}</p>
                  <p className="font-serif text-xl sm:text-2xl text-lux-forest leading-tight font-bold">{journey.name}</p>
                  <p className="text-sm text-lux-ink opacity-80 flex-1 mt-2">{journey.description}</p>
                  <div className="flex flex-wrap gap-1.5 text-[0.7rem] text-lux-forest mt-2">
                    <span className="rounded-full border border-lux-sand px-2.5 py-0.5">{journey.duration}</span>
                    <span className="rounded-full border border-lux-sand px-2.5 py-0.5">{journey.destination}</span>
                  </div>
                  <div className="flex flex-row justify-between pt-6 w-full">
                    <Link
                      href={`/itinerary/${journey.itineraryId}`}
                      className="text-xs text-lux-forest border-b border-lux-accent w-fit"
                    >
                      View sample day →
                    </Link>
                    <Link
                      href={`/booking?journey=${journey.id}`}
                      className="flex items-center justify-center rounded-[4px] bg-gold px-4 py-2 text-xs uppercase font-semibold font-sans text-white"
                    >
                      Request This Journey
                    </Link>
                    
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/experiences"
              className="inline-flex items-center justify-center rounded-full border border-lux-forest px-8 py-3 font-sans text-sm uppercase tracking-[0.3em] text-lux-forest"
            >
              View all experiences
            </Link>
          </div>
        </div>
      </section>

      {/* Destinations Strip */}
      <section className="py-12 bg-lux-ink text-white">
        <div className="max-w-5xl mx-auto text-center space-y-3">
          <p className="font-sans text-xs uppercase tracking-[0.6em] text-lux-accent">Destinations</p>
          <p className="font-serif text-3xl md:text-4xl flex flex-wrap justify-center gap-y-2 gap-x-4">
            {destinations.map((destination, index) => (
              <span key={destination} className="whitespace-nowrap">
                {destination}
                {index !== destinations.length - 1 && <span className="mx-2 text-white/50">•</span>}
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* The Plan */}
      <section className="px-6 py-24 bg-white" id="plan">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-4">
            <p className="font-sans text-xs uppercase tracking-[0.4em] text-lux-accent">The Plan</p>
            <h2 className="font-serif text-5xl text-lux-forest">How it works</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {planSteps.map((step) => (
              <article
                key={step.label}
                className="rounded-[28px] bg-lux-bone p-8 border border-lux-sand shadow-[0_20px_60px_rgba(30,30,28,0.08)] flex flex-col"
              >
                <p className="font-sans text-xs uppercase tracking-[0.3em] text-lux-accent mb-2">{step.label}</p>
                <p className="font-serif text-2xl mb-3">{step.title}</p>
                <p className="text-lux-ink opacity-80 flex-1">{step.copy}</p>
                <p className="text-xs text-lux-forest opacity-60 mt-4">{step.micro}</p>
              </article>
            ))}
          </div>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-lux-forest text-white text-sm tracking-[0.3em]"
            >
              Get My Plan
            </Link>
            <Link href="/sample-itinerary.pdf" className="text-sm text-lux-forest border-b border-lux-accent w-fit">
              Download Sample Itinerary (PDF)
            </Link>
          </div>
        </div>
      </section>

      {/* Founders / Hosts */}
      <section className="px-6 py-24 bg-lux-shell" id="hosts">
        <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-[0.7fr_0.3fr] items-center">
          <div className="relative">
            <div className="rounded-[36px] overflow-hidden shadow-[0_30px_80px_rgba(30,30,28,0.15)]">
              <img
                src="/man-n-woman.jpeg"
                alt="George and Wambui Mburu, hosts of Souls Connection Safaris, welcoming guests."
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <p className="font-sans text-xs uppercase tracking-[0.4em] text-lux-accent">Founders & Hosts</p>
            <h2 className="font-serif text-4xl text-lux-forest">Guided by hosts who care.</h2>
            <p className="text-lg text-lux-ink opacity-80">
              Founded by George Mburu and Wambui Mburu—hospitality-trained hosts who design journeys around how you want
              to feel.
            </p>
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-lux-accent mb-3">What guests rely on</p>
              <div className="flex flex-wrap gap-3">
                {founderMicroCreds.map((cred) => (
                  <span
                    key={cred}
                    className="inline-flex items-center gap-2 rounded-full border border-lux-stone px-4 py-2 text-sm text-lux-forest"
                  >
                    <CheckCircle2 className="w-4 h-4 text-lux-accent" />
                    {cred}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-lux-forest text-white"
              >
                Talk to a Host
              </Link>
              <Link href="/founders-story" className="inline-flex items-center gap-2 text-lux-forest border-b border-lux-accent">
                Meet Your Hosts →
              </Link>
            </div>
            <p className="text-sm italic text-lux-ink opacity-70">“I felt seen and unhurried every day.” — E., California</p>
          </div>
        </div>
      </section>

      {/* Impact & Community */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-lux-accent">Impact & Community</p>
          <p className="text-lg text-lux-ink opacity-80">
            Every journey funds ranger training, Maasai women-led enterprises, and carbon
            positive restoration. Impact reporting mirrors Wilderness-level transparency so you know your luxury safari
            keeps East Africa wild.
          </p>
          <Link href="/impact" className="inline-flex items-center gap-2 text-lux-forest border-b border-lux-accent w-fit mx-auto">
            Explore our impact →
          </Link>
        </div>
      </section>

      {/* Experience Modes */}
      <section className="px-6 py-16 bg-lux-cream" id="experience-modes">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <p className="font-sans text-xs uppercase tracking-[0.4em] text-lux-accent">Choose your rhythm</p>
            <h2 className="font-serif text-3xl text-lux-forest">Private vs Small Group</h2>
            <p className="text-base text-lux-ink opacity-80">Self-select smoothly without pressure.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {experienceModes.map((mode) => (
              <article
                key={mode.title}
                className="rounded-[18px] overflow-hidden bg-white shadow-[0_20px_50px_rgba(30,30,28,0.08)] border border-lux-sand flex flex-col"
              >
                <img src={mode.image} alt={mode.title} className="h-58 w-full object-cover rounded-[18px]" loading="lazy" />
                <div className="p-6 space-y-3 flex-1 flex flex-col">
                  <p className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-lux-accent">{mode.eyebrow}</p>
                  <p className="font-serif text-2xl text-lux-forest">{mode.title}</p>
                  <p className="text-base text-lux-ink opacity-80">{mode.subline}</p>
                  <ul className="space-y-1.5 text-sm text-lux-forest opacity-80">
                    {mode.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[color:var(--lux-accent)]" aria-hidden />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2">
                    <Link
                      href={mode.cta.href}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-lux-forest text-white font-sans text-xs uppercase tracking-[0.2em]"
                    >
                      {mode.cta.label}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Lodges & Stays */}
      <section className="px-6 py-32 bg-gradient-to-b from-white via-lux-bone/60 to-white" id="lodges">
        <div className="max-w-6xl mx-auto space-y-14">
          <div className="text-center space-y-6">
            <p className="font-sans text-xs uppercase tracking-[0.45em] text-lux-accent font-semibold">Lodges & Stays</p>
            <h2 className="font-serif text-3xl md:text-5xl text-lux-forest leading-tight">
              Soulful spaces, framed in light.
            </h2>
            <p className="font-serif text-lg md:text-2xl text-lux-ink/85 max-w-3xl mx-auto leading-relaxed">
              A hand-curated circle of lodges where linen, timber, and horizon lines feel effortless—and every
              suite is staged for unhurried ritual.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-[0.65rem] md:text-xs uppercase tracking-[0.4em] text-lux-accent font-sans font-bold">
              <span className="h-px w-14 bg-lux-accent" aria-hidden="true" />
              Preferred partners
            </div>
            <div className="flex overflow-x-auto gap-5 pb-2" aria-label="Preferred partners">
              {partnerLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="shrink-0 px-6 py-3 border border-lux-sand/70 rounded-full bg-white/70 flex items-center justify-center"
                  aria-label={logo.name}
                >
                  <img src={logo.src} alt={logo.name} className="h-8 w-auto opacity-60" />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  ref={lodgeCarouselRef}
                  onScroll={handleLodgeScroll}
                  className="flex gap-6 sm:gap-10 snap-x snap-mandatory overflow-x-auto p-6"
                  aria-live="polite"
                >
                  {lodgeTiles.map((lodge, index) => (
                    <article
                      key={lodge.title}
                      className="snap-start shrink-0 basis-[85%] md:basis-[70%] lg:basis-[60%]"
                      data-lodge-card
                    >
                      <div className="relative h-[500px] md:h-[560px] overflow-hidden shadow-[0_45px_120px_rgba(30,30,28,0.18)]">
                        <img
                          src={lodge.image}
                          alt={`${lodge.title} lodge`}
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="absolute inset-x-0 bottom-0">
                          <div className="bg-gradient-to-t from-[#F8F3ED] via-[#F8F3ED]/95 to-transparent px-10 pt-20 pb-12 text-lux-ink/90">
                            <h3 className="font-serif text-4xl md:text-5xl text-lux-forest mb-4">{lodge.title}</h3>
                            <p className="text-base md:text-lg text-lux-ink/80 max-w-xl leading-relaxed mb-6">
                              {lodge.line}
                            </p>
                            <div className="flex flex-row items-center justify-between w-full">
                              <p className="font-sans text-xs uppercase font-bold tracking-[0.4em] text-lux-accent">
                                {String(index + 1).padStart(2, "0")} · {lodge.meta}
                              </p>
                              <Link
                                href="/lodges"
                                className="inline-flex items-center gap-2 text-sm md:text-base text-lux-forest font-semibold"
                              >
                                See Details
                                <ArrowUpRight className="w-4 h-4" />
                              </Link>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                {lodgeTiles.map((_, index) => (
                  <span
                    key={index}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeLodgeIndex === index ? "w-14 bg-lux-forest" : "w-4 bg-brown"
                    }`}
                  />
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => handleLodgeNav("prev")}
                    aria-label="Show previous lodge"
                    className="h-12 w-12 rounded-full border border-lux-sand text-lux-forest hover:bg-lux-forest hover:text-brown transition disabled:opacity-30 disabled:pointer-events-none"
                    disabled={activeLodgeIndex === 0}
                  >
                    <ChevronLeft className="w-5 h-5 mx-auto" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLodgeNav("next")}
                    aria-label="Show next lodge"
                    className="h-12 w-12 rounded-full border border-lux-sand text-lux-forest hover:bg-lux-forest hover:text-brown transition disabled:opacity-30 disabled:pointer-events-none"
                    disabled={activeLodgeIndex === lodgeTiles.length - 1}
                  >
                    <ChevronRight className="w-5 h-5 mx-auto" />
                  </button>
                </div>
              </div>
            </div>

            <Link
                href="/lodges"
                className="flex items-center gap-2 text-sm md:text-base tracking-[0.2em] uppercase text-lux-forest rounded-full border border-lux-forest px-8 py-3 mx-auto w-fit"
              >
                View Our Preferred Lodges →
              </Link>
          </div>
        </div>
      </section>

      {/* Journal */}
      <section className="px-6 py-24 bg-lux-cream" id="journal">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.4em] text-lux-accent mb-3 font-semibold">Journal (Quarterly)</p>
              <h2 className="font-serif text-4xl text-lux-forest">Quiet field notes</h2>
            </div>

            <p>Notes to help you stay connected</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {journalEntries.map((entry) => (
              <article
                key={entry.title}
                className="group relative flex flex-col border border-lux-sand/80 bg-gradient-to-b from-white via-lux-shell to-lux-cream p-8 shadow-[0_35px_90px_rgba(30,30,28,0.08),15px_20px_0_rgba(255,255,255,0.7)] transition-transform duration-500 hover:-translate-y-1"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 translate-x-4 translate-y-4 border border-lux-sand/70 bg-white/70 -z-10"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-lux-accent/60 to-transparent"
                />
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.45em] text-lux-ink/50 font-sans">
                  <span>{entry.issue}</span>
                  <span className="tracking-[0.3em]">{entry.readingTime}</span>
                </div>
                <div className="flex flex-1 flex-col space-y-4 pt-6">
                  <p className="font-serif text-3xl font-semibold leading-tight text-lux-forest">{entry.title}</p>
                  <p className="text-lux-ink/70 text-sm">{entry.excerpt}</p>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-lux-sand/70 pt-5">
                  <span className="text-[11px] uppercase tracking-[0.4em] text-lux-ink/50">{entry.season}</span>
                  <Link
                    href={entry.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-lux-forest transition-all group-hover:gap-3"
                  >
                    Read entry
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-24 bg-gradient-to-b from-white via-lux-bone to-lux-shell" id="stories">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <p className="font-sans text-xs uppercase tracking-[0.4em] text-lux-accent font-semibold">Quiet Echoes</p>
            <h2 className="font-serif text-4xl text-lux-forest">What guests feel after our safaris</h2>
            <p className="text-lux-ink opacity-80">In their words—moments of stillness, connection, and renewal.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.feeling}
                className="group relative overflow-hidden border border-lux-forest/30 bg-gradient-to-br from-lux-forest to-[#1b2a23] p-10 text-lux-shell shadow-[0_25px_75px_rgba(10,21,16,0.45)]"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_top,var(--lux-accent)/0.4,transparent_65%)]"
                />
                <Quote className="relative mb-6 h-10 w-10 text-lux-accent" />
                <p className="relative text-xs uppercase tracking-[0.55em] text-lux-shell/60">Guest reflection</p>
                <p className="relative font-serif text-3xl leading-tight text-white">{testimonial.feeling}</p>
                <p className="relative mt-6 text-lg italic text-lux-shell/80">“{testimonial.quote}”</p>
                <p className="relative mt-8 text-sm uppercase tracking-[0.2em] text-lux-shell/80 font-sans">{testimonial.guest}</p>
              </article>
            ))}
          </div>
          <div className="text-right">
            <Link href="/stories" className="text-sm text-lux-forest border-b border-lux-accent w-fit inline-flex">
              Read More Guest Stories →
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="px-6 py-24 bg-lux-shell" id="inclusions">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <p className="font-sans text-xs uppercase tracking-[0.4em] text-lux-accent">What's Included</p>
            <h2 className="font-serif text-4xl text-lux-forest">Representative inclusions; itinerary specifics apply.</h2>
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-sans text-sm uppercase tracking-[0.3em] text-lux-forest opacity-70 mb-4">Included on Premium & Ultra-Premium Journeys</p>
              <ul className="space-y-3">
                {includedItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-lux-ink opacity-80">
                    <CheckCircle2 className="w-5 h-5 text-lux-forest" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-sans text-sm uppercase tracking-[0.3em] text-lux-forest opacity-70 mb-4">Not included (industry standard)</p>
              <ul className="space-y-3">
                {excludedItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-lux-ink opacity-80">
                    <Shield className="w-5 h-5 text-lux-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-right space-y-2">
            <p className="text-sm text-lux-ink opacity-60">Note: Your proposal and confirmation will specify exact details.</p>
            <Link href="/inclusions" className="inline-flex items-center gap-2 text-sm text-lux-forest border-b border-lux-accent">
              See Full Inclusions →
            </Link>
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      <section className="px-6 py-24 bg-white" id="planner">
        <div className="max-w-4xl mx-auto rounded-[32px] border border-lux-sand bg-lux-bone p-10 space-y-6 shadow-[0_20px_60px_rgba(30,30,28,0.08)]">
          {plannerStatus === "success" ? (
            <div className="text-center space-y-4">
              <p className="font-serif text-3xl text-lux-forest">Check your inbox ✉️</p>
              <p className="text-lg text-lux-ink opacity-80">
                We’ve sent The Soulful Safari Planner to {plannerEmail}. Didn’t get it? Check Promotions/Spam or
                <button
                  onClick={() => setPlannerStatus("idle")}
                  className="text-lux-forest border-b border-lux-accent ml-2"
                >
                  resend
                </button>
                .
              </p>
              <Link href="/booking" className="inline-flex items-center gap-2 text-sm text-lux-forest border-b border-lux-accent">
                Prefer a 10-minute chat? Talk to a Host →
              </Link>
            </div>
          ) : (
            <>
              <div className="space-y-3 text-center">
                <p className="font-sans text-xs uppercase tracking-[0.4em] text-lux-accent">Lead Magnet</p>
                <h3 className="font-serif text-4xl text-lux-forest">The Soulful Safari Planner</h3>
                <p className="text-lg text-lux-ink opacity-80">
                  A 5-minute guide to a private, host-led journey—crafted for meaning, connection, and ease.
                </p>
              </div>
              <form onSubmit={handlePlannerSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-semibold text-lux-forest">Work email</label>
                  <input
                    type="email"
                    value={plannerEmail}
                    onChange={(event) => {
                      setPlannerEmail(event.target.value)
                      setPlannerStatus("idle")
                    }}
                    className="mt-2 w-full rounded-2xl border border-lux-stone bg-white px-4 py-3"
                    required
                  />
                </div>
                <label className="flex items-start gap-3 text-sm text-lux-ink opacity-80">
                  <input
                    type="checkbox"
                    checked={plannerConsent}
                    onChange={(event) => setPlannerConsent(event.target.checked)}
                    className="mt-1 h-5 w-5 rounded border-lux-stone"
                    required
                  />
                  Email me the guide and occasional safari insights. I can unsubscribe anytime.
                </label>
                {plannerStatus === "error" && (
                  <p className="text-sm text-red-600">Enter your email and consent so we can send the guide.</p>
                )}
                <button
                  type="submit"
                  className="w-full rounded-full bg-lux-forest text-white py-3 text-sm tracking-[0.3em]"
                >
                  Send Me the Guide
                </button>
                <p className="text-sm text-lux-ink opacity-60 text-center">
                  No spam. One helpful email with your guide, then occasional insights.
                </p>
              </form>
            </>
          )}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-6 py-24 bg-lux-blush">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="font-serif text-4xl text-lux-forest">Come for the wildlife. Leave with connection.</p>
          <p className="text-lg text-lux-ink opacity-80">
            Step into wide-open quiet, unrushed days, and host-led care that lets meaning surface naturally. Travel
            privately, at your pace, with places chosen for soul and substance. Return rested, re-aligned, and more
            connected—to yourself, to each other, and to the wild.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/booking"
              className="px-8 py-4 rounded-full bg-lux-forest text-white text-sm tracking-[0.3em]"
            >
              Start My Journey
            </Link>
            <Link
              href="/sample-itinerary.pdf"
              className="px-8 py-4 rounded-full border border-lux-forest text-sm tracking-[0.2em] text-lux-forest"
            >
              Download Sample Itinerary
            </Link>
          </div>
          <p className="text-sm text-lux-ink opacity-70">A host will reply within 24–48 hours.</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
