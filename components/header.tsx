"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, X } from "lucide-react"
import { packageTiers } from "@/lib/experiences-data"
import { destinations } from "@/lib/destinations-data"

type NavigationSubItem = {
  label: string
  href: string
  isButton?: boolean
}

type NavigationItem = {
  label: string
  href?: string
  submenu?: NavigationSubItem[]
}

const navigationItems: NavigationItem[] = [
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
  {
    label: "Founders' Story",
    href: "/founders-story",
  },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const [headerHeight, setHeaderHeight] = useState(0)
  const pathname = usePathname()
  const isHeroRoute =
    pathname === "/" ||
    pathname?.startsWith("/about") ||
    pathname?.startsWith("/experiences")
  const useTransparentHeader = isHeroRoute && !isScrolled
  const navTextClass = useTransparentHeader ? "text-white hover:text-gold" : "text-foreground hover:text-gold"
  const navIconClass = useTransparentHeader ? "text-white" : "text-foreground"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!headerRef.current || typeof ResizeObserver === "undefined") return

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0]
      if (entry) {
        setHeaderHeight(entry.contentRect.height)
      }
    })

    observer.observe(headerRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (headerHeight) {
      document.documentElement.style.setProperty("--header-height", `${headerHeight}px`)
    }
  }, [headerHeight])

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label)
  }

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          useTransparentHeader
            ? "bg-transparent border-transparent"
            : "bg-background/95 border-border shadow-lg backdrop-blur"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 md:py-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={`font-serif text-lg md:text-2xl font-bold transition-colors whitespace-nowrap ${navTextClass}`}
          >
            Souls Connection Safaris
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.submenu ? (
                  <button
                    type="button"
                    className={`flex items-center gap-2 transition-colors py-2 ${navTextClass}`}
                  >
                    <span className="font-sans text-sm tracking-wide">{item.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-colors ${navIconClass}`} />
                  </button>
                ) : (
                  item.href && (
                    <Link
                      href={item.href}
                      className={`font-sans text-sm tracking-wide transition-colors ${navTextClass}`}
                    >
                      {item.label}
                    </Link>
                  )
                )}

                {item.submenu && (
                  <div className="absolute left-0 mt-0 w-56 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                    {item.submenu.map((subitem, idx) => (
                      <div key={`${subitem.label}-${idx}`}>
                        {subitem.label === "divider" ? (
                          <div className="h-px bg-border my-2" />
                        ) : subitem.isButton ? (
                          <Link
                            href={subitem.href}
                            className="block px-4 py-3 mx-2 mb-1 text-center text-sm text-foreground bg-gold text-background hover:bg-gold/90 transition-colors font-medium rounded"
                          >
                            {subitem.label}
                          </Link>
                        ) : (
                          <Link
                            href={subitem.href}
                            className="block px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-gold transition-colors"
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
              className="px-6 py-2 bg-gold text-background font-sans text-sm font-medium hover:bg-gold/90 transition-all duration-200"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden transition-colors ${navTextClass}`}
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
                  {item.submenu ? (
                    <>
                      <button
                        type="button"
                        onClick={() => toggleDropdown(item.label)}
                        className="flex items-center justify-between w-full py-2 text-foreground hover:text-gold transition-colors"
                      >
                        <span className="font-sans text-sm">{item.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            openDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {openDropdown === item.label && (
                        <div className="pl-4 space-y-2 mt-2">
                          {item.submenu.map((subitem, idx) => (
                            <div key={`${subitem.label}-${idx}`}>
                              {subitem.label === "divider" ? (
                                <div className="h-px bg-border my-2" />
                              ) : subitem.isButton ? (
                                <Link
                                  href={subitem.href}
                                  className="block py-2 px-3 text-sm text-background bg-gold rounded font-medium hover:bg-gold/90 transition-colors"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {subitem.label}
                                </Link>
                              ) : (
                                <Link
                                  href={subitem.href}
                                  className="block py-2 text-sm text-muted-foreground hover:text-gold transition-colors"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {subitem.label}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    item.href && (
                      <Link
                        href={item.href}
                        className="block py-2 text-sm text-foreground hover:text-gold transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </div>
              ))}
              <Link
                href="/booking"
                className="block w-full py-3 bg-gold text-background text-center font-sans text-sm font-medium hover:bg-gold/90 transition-all duration-200 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Begin your journey
              </Link>
            </nav>
          </div>
        )}
      </header>
      <div style={{ height: headerHeight || 96 }} aria-hidden />
    </>
  )
}
