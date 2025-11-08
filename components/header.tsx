"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { packageTiers } from "@/lib/experiences-data"
import { destinations } from "@/lib/destinations-data"

const navigationItems = [
  {
    label: "Experiences",
    submenu: [
      ...packageTiers.map((tier) => ({
        label: tier.name,
        href: `/experiences/${tier.slug}`,
      })),
      { label: "divider", href: "" },
      { label: "All Experiences", href: "/experiences", isButton: true },
    ],
  },
  {
    label: "Destinations",
    submenu: destinations.map((dest) => ({
      label: dest.name,
      href: `/destinations/${dest.slug}`,
    })),
  },
  {
    label: "About",
    href: "/about",
  },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label)
  }

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-lg md:text-2xl font-bold text-foreground hover:text-brown transition-colors whitespace-nowrap"
        >
          Souls Connection Safaris
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigationItems.map((item) => (
            <div key={item.label} className="relative group">
              <button className="flex items-center gap-2 text-foreground hover:text-brown transition-colors py-2">
                <span className="font-sans text-sm tracking-wide">{item.label}</span>
                {item.submenu && <ChevronDown className="w-4 h-4" />}
              </button>

              {item.submenu && (
                <div className="absolute left-0 mt-0 w-56 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                  {item.submenu.map((subitem, idx) => (
                    <div key={`${subitem.label}-${idx}`}>
                      {subitem.label === "divider" ? (
                        <div className="h-px bg-border my-2" />
                      ) : subitem.isButton ? (
                        <Link
                          href={subitem.href}
                          className="block px-4 py-3 mx-2 mb-1 text-center text-sm text-foreground bg-brown text-background hover:bg-brown/90 transition-colors font-medium rounded"
                        >
                          {subitem.label}
                        </Link>
                      ) : (
                        <Link
                          href={subitem.href}
                          className="block px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-brown transition-colors"
                        >
                          {subitem.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <Link
            href="/booking"
            className="px-6 py-2 bg-brown text-background font-sans text-sm font-medium hover:bg-brown/90 transition-all duration-200"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-foreground hover:text-brown transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <nav className="px-6 py-4 space-y-4">
            {navigationItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => item.submenu && toggleDropdown(item.label)}
                  className="flex items-center justify-between w-full py-2 text-foreground hover:text-brown transition-colors"
                >
                  <span className="font-sans text-sm">{item.label}</span>
                  {item.submenu && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  )}
                </button>

                {item.submenu && openDropdown === item.label && (
                  <div className="pl-4 space-y-2 mt-2">
                    {item.submenu.map((subitem, idx) => (
                      <div key={`${subitem.label}-${idx}`}>
                        {subitem.label === "divider" ? (
                          <div className="h-px bg-border my-2" />
                        ) : subitem.isButton ? (
                          <Link
                            href={subitem.href}
                            className="block py-2 px-3 text-sm text-background bg-brown rounded font-medium hover:bg-brown/90 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subitem.label}
                          </Link>
                        ) : (
                          <Link
                            href={subitem.href}
                            className="block py-2 text-sm text-muted-foreground hover:text-brown transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subitem.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/booking"
              className="block w-full py-3 bg-brown text-background text-center font-sans text-sm font-medium hover:bg-brown/90 transition-all duration-200 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
