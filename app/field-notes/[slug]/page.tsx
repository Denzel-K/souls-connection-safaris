"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, Clock, MapPin, User, ArrowLeft, ArrowRight } from "lucide-react"
import { getFieldNoteById, fieldNotes } from "@/lib/field-notes-data"
import { 
  Breadcrumb, 
  BreadcrumbList, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbSeparator, 
  BreadcrumbPage 
} from "@/components/ui/breadcrumb"
import ReactMarkdown from "react-markdown"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface FieldNotePageProps {
  params: {
    slug: string
  }
}

export default function FieldNotePage({ params }: FieldNotePageProps) {
  const fieldNote = getFieldNoteById(params.slug)
  
  if (!fieldNote) {
    notFound()
  }

  // Get related notes (same tags, excluding current)
  const relatedNotes = fieldNotes
    .filter(note => 
      note.id !== fieldNote.id && 
      note.tags.some(tag => fieldNote.tags.includes(tag))
    )
    .slice(0, 3)

  // Get next/previous notes
  const currentIndex = fieldNotes.findIndex(note => note.id === fieldNote.id)
  const previousNote = currentIndex > 0 ? fieldNotes[currentIndex - 1] : null
  const nextNote = currentIndex < fieldNotes.length - 1 ? fieldNotes[currentIndex + 1] : null

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="px-6 pt-8 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb - Left aligned */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
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
                  <BreadcrumbLink asChild>
                    <Link href="/field-notes" className="hover:text-lux-forest transition-colors">
                      Field Notes
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-lux-forest font-medium">
                    {fieldNote.title}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </motion.div>

          {/* Centered Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center max-w-4xl mx-auto space-y-6"
          >
            <div className="flex items-center justify-center gap-4 text-xs uppercase tracking-[0.4em] text-lux-ink/60">
              <span className="bg-lux-accent text-white px-3 py-1 rounded-full font-semibold">
                {fieldNote.issue}
              </span>
              <span>{fieldNote.season}</span>
            </div>
            
            <h1 className="font-niconne text-4xl md:text-6xl text-lux-forest leading-tight">
              {fieldNote.title}
            </h1>
            
            <p className="text-xl text-lux-ink/70 leading-relaxed">
              {fieldNote.excerpt}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-lux-ink/60 pt-4">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{fieldNote.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(fieldNote.publishedDate).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{fieldNote.readingTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{fieldNote.location}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="px-6 mb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[60vh] md:h-[70vh] rounded-2xl overflow-hidden"
          >
            <img
              src={fieldNote.heroImage}
              alt={fieldNote.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <div className="prose prose-lg prose-stone max-w-none">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="font-niconne font-light text-3xl md:text-4xl text-lux-forest mb-8 leading-tight">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="font-niconne font-light text-2xl md:text-3xl text-lux-forest mb-6 mt-12 leading-tight">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="font-niconne font-light text-xl md:text-2xl text-lux-forest mb-4 mt-8 leading-tight">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-lux-ink/80 leading-relaxed mb-6 text-lg">
                    {children}
                  </p>
                ),
                em: ({ children }) => (
                  <em className="text-lux-ink/60 italic border-l-2 border-lux-accent pl-4 block my-8 text-base">
                    {children}
                  </em>
                )
              }}
            >
              {fieldNote.content}
            </ReactMarkdown>
          </div>
        </motion.article>

      </section>

      {/* Navigation */}
      <section className="max-w-5xl mx-auto px-6 py-12 border-t border-lux-sand/30">
        <div className="flex justify-between items-center">
          {/* Previous Note */}
          {previousNote ? (
            <Link
              href={`/field-notes/${previousNote.id}`}
              className="group flex items-center gap-3 text-lux-forest hover:text-lux-accent transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <div>
                <p className="text-sm text-lux-ink/60 uppercase tracking-wider">Previous</p>
                <p className="font-niconne text-lg">{previousNote.title}</p>
              </div>
            </Link>
          ) : (
            <div></div>
          )}

          {/* Back to Field Notes */}
          <Link
            href="/field-notes"
            className="px-6 py-3 bg-lux-forest text-white rounded-lg hover:bg-lux-forest/90 transition-colors text-sm font-medium"
          >
            All Field Notes
          </Link>

          {/* Next Note */}
          {nextNote ? (
            <Link
              href={`/field-notes/${nextNote.id}`}
              className="group flex items-center gap-3 text-lux-forest hover:text-lux-accent transition-colors text-right"
            >
              <div>
                <p className="text-sm text-lux-ink/60 uppercase tracking-wider">Next</p>
                <p className="font-niconne text-lg">{nextNote.title}</p>
              </div>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </section>
      </div>
      <Footer />
    </>
  )
}
