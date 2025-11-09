"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, PhoneCall, UserRound } from "lucide-react"

const storyParagraphs = [
  "You know the feeling when a moment is stunning, yet a quiet part of you still longs for something deeper? That is the feeling that nudged us to stop building itineraries and start guiding journeys that return presence.",
  "Our backgrounds span communications, hospitality training, and years of leading guests through East Africa. We noticed that even flawlessly planned trips left a subtle emptiness when care began with logistics instead of listening.",
  "We are parents of three and co-founders in life and in work. Parenthood taught us to notice the tiny cues that reveal what someone needs. That attentiveness became the foundation of Souls Connection Safaris.",
  "Today every journey begins with presence: a conversation, a pause, an invitation to say the thing you have not put into words. Only then do we curate the lodges, routes, and rituals that will move you.",
]

const founderCards = [
  {
    name: "George Mburu",
    role: "Head of Guest Experience",
    description:
      "George draws from a lifetime on the Eastern plains, logistics expertise, and long relationships with conservation partners. He ensures each day flows with calm precision.",
  },
  {
    name: "Teresia Wambui",
    role: "Director of Experience & Presence",
    description:
      "Teresia’s background in communications and guest relations shapes the emotional arc of our journeys—anticipating the right cadence of conversation, quiet, and celebration.",
  },
]

const teamPromises = [
  "Guides trained by us to anticipate needs quietly.",
  "Private drivers and pilots who move with discretion.",
  "Lodge partners who protect your privacy and honor your pace.",
]

export default function FoundersStoryPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="px-6 pt-24 pb-16 md:pt-32 md:pb-24 bg-background">
          <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-start">
            <div className="space-y-6">
              <div
                className="min-h-[320px] rounded-3xl bg-cover bg-center shadow-xl"
                style={{ backgroundImage: "url('/giraffe-herd-in-savanna-landscape.jpg')" }}
                aria-hidden
              />
              <div className="space-y-3">
                <p className="font-sans text-xs tracking-[0.35em] uppercase text-gold">Founders&apos; story</p>
                <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
                  The right journeys start with a conversation.
                </h1>
                <p className="text-lg text-muted-foreground">
                  You came looking for a change that goes deeper than scenery. We built Souls Connection Safaris to guide
                  that change—by listening first, shaping with intention, and holding space for what matters most.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {founderCards.map((founder) => (
                <div
                  key={founder.name}
                  className="rounded-3xl border border-border/60 bg-card p-5 shadow-lg flex flex-col items-start"
                >
                  <div className="flex flex-row items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                      <UserRound className="w-7 h-7" />
                    </div>
                    <div className="name-n-title">
                      <div className="font-serif text-2xl font-semibold leading-tight">{founder.name}</div>
                      <div className="text-gold text-sm font-medium tracking-wide uppercase">{founder.role}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{founder.description}</p>

                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-24 bg-green/5">
          <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.1fr,0.9fr] items-start">
            <div className="space-y-6">
              {storyParagraphs.map((paragraph, idx) => (
                <p key={idx} className="text-lg text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
              <div className="border-l-4 border-gold/40 pl-6">
                <p className="font-serif text-2xl text-foreground leading-relaxed">
                  “The right journeys start with a conversation. This one starts with you.”
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-lg space-y-4">
                <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold">Our promise</p>
                <p className="text-muted-foreground leading-relaxed">
                  Our team shares the same approach. They anticipate before they announce, they protect the space for
                  presence, and they deliver care without intrusion.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  {teamPromises.map((item) => (
                    <li key={item} className="leading-relaxed">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-lg space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Together we steward journeys that help you return with renewed presence, closer relationships, and
                  meaningful legacy moments.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/booking"
                    className="inline-flex flex-1 items-center justify-center rounded-full bg-brown px-6 py-3 text-sm font-semibold uppercase tracking-wide text-background hover:bg-brown/90 transition"
                  >
                    Begin your journey
                  </Link>
                  <a
                    href="mailto:hello@soulsconnectionsafari.com"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-foreground/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-foreground hover:text-background transition"
                  >
                    <Mail className="w-4 h-4" />
                    Email George &amp; Teresia
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <a
                    href="tel:+254700000000"
                    className="inline-flex items-center gap-2 font-medium text-foreground hover:text-brown transition-colors"
                  >
                    <PhoneCall className="w-4 h-4" />
                    Schedule a call
                  </a>
                  <span>If you’d like, ask for a short overview before we speak.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-24 bg-background">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold">Next steps</p>
            <h2 className="font-serif text-4xl font-bold text-balance">Tell us what has been stirring in you.</h2>
            <p className="text-lg text-muted-foreground">
              We will listen, respond with care, and then design with intention. Your story matters to us before a single
              plan is made.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-foreground/30 text-sm font-semibold uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition"
              >
                Share your intentions
              </Link>
              <Link
                href="/experiences"
                className="inline-flex items-center justify-center px-8 py-3 bg-gold text-foreground text-sm font-semibold uppercase tracking-[0.2em] hover:bg-gold/90 transition"
              >
                Explore pathways
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
