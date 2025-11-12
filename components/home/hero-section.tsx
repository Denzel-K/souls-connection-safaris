"use client"

import Link from "next/link"
import { motion, type Variants } from "framer-motion"

import { ImageSlideshow } from "@/components/image-slideshow"

const heroImages = [
  "/lake-tranquility.jpeg",
  "/lounge-view.jpeg",
  "/zebra-migration-across-plains.jpg",
  "/Weekend Getaway in the Wild.jpeg",
  "/leopard-in-acacia-tree-at-dusk.jpg",
]

const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
} satisfies Variants

export function HeroSection() {
  return (
    <section
      className="relative w-full h-96 md:h-screen overflow-hidden"
      style={{ marginTop: "calc(var(--header-height, 96px) * -1)" }}
    >
      <ImageSlideshow images={heroImages} duration={6000} autoplay />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-6">
        <motion.div
          className="text-center max-w-3xl space-y-6"
          initial="hidden"
          animate="visible"
          variants={heroVariants}
        >
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-background font-bold text-balance">
            Come home to yourself.
          </h1>
          <p className="font-sans text-lg md:text-xl text-background/95 leading-relaxed">
            A luxury safari for those who want to feel again—deeply, gently, intentionally.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/booking"
                className="px-8 py-3 bg-gold text-background font-sans font-medium hover:bg-gold/90 transition-all duration-200 text-center inline-flex items-center justify-center"
              >
                Begin your journey
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/about"
                className="px-8 py-3 border-2 border-background text-background font-sans font-medium hover:bg-background/10 transition-all duration-200 inline-flex items-center justify-center"
              >
                Learn Our Story
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
