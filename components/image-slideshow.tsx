"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface ImageSlideshowProps {
  images: string[]
  duration?: number
  autoplay?: boolean
}

export function ImageSlideshow({ images, duration = 5000, autoplay = true }: ImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, duration)

    return () => clearInterval(interval)
  }, [images.length, duration, autoplay])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Image Container */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Safari scene ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Mildly Dark Overlay - No Blur */}
            <div className="absolute inset-0 bg-overlay-dark" />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-gold w-6" : "bg-background/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-10 p-2 text-background hover:text-gold transition-colors"
        aria-label="Previous slide"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-10 p-2 text-background hover:text-gold transition-colors"
        aria-label="Next slide"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}
