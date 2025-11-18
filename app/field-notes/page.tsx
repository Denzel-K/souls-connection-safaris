"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { fieldNotes } from "@/lib/field-notes-data"
import { 
  Breadcrumb, 
  BreadcrumbList, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbSeparator, 
  BreadcrumbPage 
} from "@/components/ui/breadcrumb"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function FieldNotesPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-lux-cream">
      {/* Header Section */}
      <section className="px-6 pt-12 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Breadcrumb>
              <BreadcrumbList className="text-lux-ink/60">
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/" className="hover:text-lux-forest transition-colors">
                      Home
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-lux-forest font-medium">
                    Field Notes
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </motion.div>

          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <p className="font-sans text-xs uppercase tracking-[0.4em] text-lux-accent font-semibold">
              Journal (Quarterly)
            </p>
            <h1 className="font-niconne text-4xl text-lux-forest">
              Field notes on connection
            </h1>
            <p className="text-lux-ink/70 max-w-2xl">
              Reflections, stories, and quiet moments from the field. Our quarterly journal captures the essence of meaningful travel through the eyes of those who call the African wilderness home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Field Notes Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-3">
            {fieldNotes.map((note, index) => (
              <motion.article
                key={note.id}
                className="group relative flex flex-col border border-lux-sand/80 bg-gradient-to-b from-white via-lux-shell to-lux-cream p-8 shadow-[0_35px_90px_rgba(30,30,28,0.08),15px_20px_0_rgba(255,255,255,0.7)] transition-transform duration-500 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
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
                  <span>{note.issue}</span>
                  <span className="tracking-[0.3em]">{note.readingTime}</span>
                </div>
                <div className="flex flex-1 flex-col space-y-4 pt-6">
                  <p className="font-niconne text-3xl font-semibold leading-tight text-lux-forest">{note.title}</p>
                  <p className="text-lux-ink/70 text-sm">{note.excerpt}</p>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-lux-sand/70 pt-5">
                  <span className="text-[11px] uppercase tracking-[0.4em] text-lux-ink/50">{note.season}</span>
                  <Link href={`/field-notes/${note.id}`} className="inline-flex items-center gap-2 text-sm font-medium text-lux-forest transition-all group-hover:gap-3">
                    Read entry
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  )
}
