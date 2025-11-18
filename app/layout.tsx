import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto_Mono, Cormorant_Garamond, Rosarivo, Niconne } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _sans = Inter({ subsets: ["latin"], variable: "--font-sans-base" })
const _mono = Roboto_Mono({ subsets: ["latin"], variable: "--font-mono-base" })
const _cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif-base",
})
const _rosarivo = Rosarivo({ subsets: ["latin"], weight: "400", variable: "--font-body-base" })
const _niconne = Niconne({ 
  subsets: ["latin"],
  weight: "400",
  variable: "--font-niconne-base" 
}) 

export const metadata: Metadata = {
  title: "Souls Connection Safaris - Luxury Safari Experiences",
  description:
    "Experience authentic African safari adventures with Souls Connection Safaris. Luxury wildlife encounters and unforgettable journeys.",
  icons: {
    icon: "/soulsconnectionsafarilogo.png",
    shortcut: "/soulsconnectionsafarilogo.png",
    apple: "/soulsconnectionsafarilogo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${_sans.variable} ${_mono.variable} ${_cormorantGaramond.variable} ${_rosarivo.variable} ${_niconne.variable}`}
    >
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
