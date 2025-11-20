"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { destinations } from "@/lib/destinations-data"

export function DestinationsStrip() {
  const truncate = (text: string, max = 140) =>
    text.length > max ? text.slice(0, max - 1).trimEnd() + "…" : text
  
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    window.addEventListener('resize', checkScroll)
    return () => window.removeEventListener('resize', checkScroll)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
      setTimeout(checkScroll, 300)
    }
  }

  return (
    <section className="py-20 md:py-28 bg-lux-ink text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-lux-accent mb-4 font-semibold">Destinations</p>
          <h2 className="font-niconne text-4xl md:text-5xl text-white mb-6 font-light">Places that Hold Meaning</h2>
          <p className="font-body text-lg md:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
            Regions and conservancies chosen for space, atmosphere, and story—not only for the number of sightings.
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative mb-12">
          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 -mx-6 px-6 scrollbar-hide"
            style={{
              scrollBehavior: 'smooth',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {destinations.map((destination, index) => (
              <motion.article
                key={destination.id}
                className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/8 transition-all duration-500 flex-shrink-0 w-80 md:w-96"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                {/* Image */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Title overlay on image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-niconne text-xl md:text-2xl text-white font-bold leading-tight drop-shadow-lg">
                      {destination.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <p className="font-body text-sm md:text-base text-white/85 leading-relaxed mb-4">
                    {truncate(destination.shortDescription, 140)}
                  </p>
                  <Link 
                    href={`/destinations/${destination.slug}`}
                    className="inline-flex items-center gap-2 text-gold text-sm font-sans uppercase tracking-[0.2em] hover:text-gold/80 transition-colors duration-200"
                  >
                    See details
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
                
                {/* Subtle accent line */}
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
              </motion.article>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 p-2 rounded-full bg-gold/30 hover:bg-gold/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 border-2 border-gold"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 p-2 rounded-full bg-gold/30 hover:bg-gold/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 border-2 border-gold"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            href="/destinations" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-gold/10 backdrop-blur-sm border border-gold/30 text-gold font-sans text-sm uppercase tracking-[0.3em] hover:bg-gold/20 hover:border-gold/50 transition-all duration-300 rounded-full"
          >
            Explore Destinations
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
