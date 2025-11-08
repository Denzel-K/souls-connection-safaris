import Image from "next/image"
import { cn } from "@/lib/utils"

interface SafariLogoProps {
  /**
   * Size in pixels for both width and height.
   */
  size?: number
  className?: string
  priority?: boolean
  alt?: string
}

export function SafariLogo({
  size = 64,
  className,
  priority = false,
  alt = "Souls Connection Safaris logo",
}: SafariLogoProps) {
  return (
    <span className={cn("inline-flex items-center justify-center", className)} style={{ width: size, height: size }}>
      <Image
        src="/soulsconnectionsafarilogo.png"
        alt={alt}
        width={size}
        height={size}
        priority={priority}
        className="h-full w-full object-contain"
        style={{ transform: "scaleX(-1)" }}
        draggable={false}
      />
    </span>
  )
}
