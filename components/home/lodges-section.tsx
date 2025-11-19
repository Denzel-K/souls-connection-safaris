"use client"

import Link from "next/link"
import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"

const lodgeTiles = [
  {
    title: "Clifftop Calm",
    meta: "Mara · Contemporary · 15 suites",
    line: "Long, unhurried afternoons; linen and timber opening to endless grassland.",
    image: "/clifftop-calmness.jpeg",
  },
  {
    title: "Riverine Light",
    meta: "Laikipia · Organic · 8 tents",
    line: "Firelit suppers beside the river; private drives at your pace.",
    image: "/riverine.jpeg",
  },
  {
    title: "Savanna Stillness",
    meta: "Serengeti · Classic · 12 suites",
    line: "Floor-to-ceiling light, lantern paths, and dawn coffee with the plains.",
    image: "/savannah-stillness.jpeg",
  },
  {
    title: "Dune & Acacia",
    meta: "Namibia · Sculptural · 10 villas",
    line: "Hand-hewn timber, stone courtyards, and desert stargazing decks.",
    image: "/dune-lodge.jpeg",
  },
]

const partnerLogos = [
  { name: "Singita", src: "/singita.jpg" },
  { name: "Angama", src: "/angama.jpeg" },
  { name: "Wilderness", src: "/wilderness.jpeg" },
  { name: "Lengishu", src: "/lengishu.png" },
  { name: "Sasaab", src: "/sasaab.jpeg" },
]

export function LodgesSection() {
  const [activeLodgeIndex, setActiveLodgeIndex] = useState(0)
  const lodgeCarouselRef = useRef<HTMLDivElement>(null)

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
    <section className="px-6 py-32 bg-gradient-to-b from-white via-lux-bone/60 to-white" id="lodges">
      <div className="max-w-6xl mx-auto space-y-14">
        <div className="text-center space-y-6">
          <p className="font-sans text-xs uppercase tracking-[0.45em] text-lux-accent font-semibold">Soulful Stays</p>
          <h2 className="font-niconne text-3xl md:text-5xl text-lux-forest leading-tight font-light">Spaces framed for stillness.</h2>
          <p className="font-niconne text-lg md:text-3xl text-lux-ink/85 max-w-3xl mx-auto leading-relaxed">
            Stays chosen for atmosphere, privacy, and a deep sense of place. Each lodge supports rest, connection, and unhurried presence.
          </p>
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
                  <motion.article
                    key={lodge.title}
                    className="snap-start shrink-0 basis-[85%] md:basis-[70%] lg:basis-[60%]"
                    data-lodge-card
                    initial={{ opacity: 0.85, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <div className="relative h-[500px] md:h-[560px] overflow-hidden shadow-[0_45px_120px_rgba(30,30,28,0.18)]">
                      <img src={lodge.image} alt={`${lodge.title} lodge`} className="absolute inset-0 h-full w-full object-cover" />
                      <div className="absolute inset-x-0 bottom-0">
                        <div className="bg-gradient-to-t from-[#F8F3ED] via-[#F8F3ED]/95 to-transparent px-10 pt-20 pb-12 text-lux-ink/90">
                          <h3 className="font-niconne text-4xl md:text-5xl text-lux-forest mb-4">{lodge.title}</h3>
                          <p className="text-base md:text-lg text-lux-ink/80 max-w-xl leading-relaxed mb-6">{lodge.line}</p>
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
                  </motion.article>
                ))}
              </div>
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

        <div className="flex flex-col items-center gap-6 mt-6">
          <div className="flex items-center gap-3 text-[0.65rem] md:text-xs uppercase tracking-[0.4em] text-lux-accent font-sans font-bold">
            <span className="h-px w-14 bg-lux-accent" aria-hidden="true" />
            Our partners
          </div>
          {/* Full-bleed horizontal scroller on mobile to avoid viewport clipping */}
          <div className="w-full -mx-6 md:mx-0" aria-label="Preferred partners">
            <div className="flex overflow-x-auto gap-5 pb-2 snap-x snap-mandatory scroll-px-6 px-6" aria-live="polite">
              {partnerLogos.map((logo) => (
                <motion.div
                  key={logo.name}
                  className="shrink-0 min-w-[140px] px-6 py-3 border border-lux-sand/70 rounded-lg bg-white/70 flex items-center justify-center flex-col gap-2 snap-start"
                  aria-label={logo.name}
                  whileHover={{ y: -4, boxShadow: "0px 12px 35px rgba(0,0,0,0.08)" }}
                >
                  <img src={logo.src} alt={logo.name} className="h-20 w-auto opacity-60 rounded-lg" />
                  <span>{logo.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
