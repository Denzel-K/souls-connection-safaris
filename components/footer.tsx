"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react"
import { SafariLogo } from "@/components/safari-logo"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <SafariLogo size={96} className="mx-auto md:mx-0" />
            <div>
              <h3 className="font-serif text-2xl font-bold mb-2">Souls Connection Safaris</h3>
              <p className="text-background/80 leading-relaxed text-sm">
                Discover authentic African safari experiences that connect your soul with nature's majesty.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Explore</h4>
            <ul className="space-y-3">
              {[
                { label: "Destinations", href: "#" },
                { label: "Experiences", href: "#" },
                { label: "Gallery", href: "#" },
                { label: "Blog", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-background/80 hover:text-gold transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "#" },
                { label: "Press", href: "#" },
                { label: "Careers", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-background/80 hover:text-gold transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-background/80 hover:text-gold transition-colors text-sm">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@soulsconnection.com"
                  className="text-background/80 hover:text-gold transition-colors text-sm"
                >
                  info@soulsconnection.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-background/80 text-sm">Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 py-8">
          {/* Social Links */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex gap-6">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} className="text-background/60 hover:text-gold transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <form className="flex gap-2 md:flex-row flex-col md:w-auto w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-background/10 border border-background/20 text-background placeholder-background/50 text-sm outline-none"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-gold text-foreground font-sans text-sm font-medium hover:bg-gold/90 transition-all duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Copyright */}
          <div className="text-center text-background/60 text-xs">
            <p>
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
