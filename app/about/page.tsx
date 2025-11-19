"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { UserCircle2, UserRound } from "lucide-react"

const founders = [
  {
    name: "George Mburu",
    description:
      "Born on the plains of East Africa, George blends local wisdom with logistical mastery. He ensures every journey unfolds with intuitive timing and absolute care.",
  },
  {
    name: "Teresia Wambui",
    description:
      "A Communications & PR graduate, Teresia shapes experiences with empathy and narrative focus. She designs journeys that listen before they speak.",
  },
]

const teamMembers = [
  {
    title: "Samuel — Senior Guide",
    description: "Local tracker and wildlife guide; expert in quiet wildlife viewing and guest care.",
  },
  {
    title: "Amina — Guest Host",
    description: "Hospitality lead; ensures each detail supports presence and comfort.",
  },
  {
    title: "Daniel — Private Driver",
    description: "Discreet transport specialist; privacy and timing are his craft.",
  },
]

const values = ["Presence", "Care", "Humility", "Intentionality", "Legacy"]

const credentialCopy =
  "Private journeys across Kenya & Tanzania • Handpicked lodges • Small groups (max 15) • Private vehicles and expert guides • Discreet, high-touch service"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section
          className="relative isolate overflow-hidden"
          style={{ marginTop: "calc(var(--header-height, 96px) * -1)" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/about-hero.jpeg')" }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" aria-hidden />
          <div className="relative px-6 py-36 md:py-52 min-h-[70vh] flex items-center">
            <div className="max-w-4xl mx-auto text-center text-white space-y-4">
              <h1 className="font-niconne text-4xl md:text-6xl font-light">You are the reason we exist.</h1>
              <p className="text-lg md:text-2xl text-white/95">
                We design safaris so you can return with presence, not just pictures.
              </p>
            </div>
          </div>
        </section>

        {/* Lead */}
        <section className="px-6 py-16 md:py-20 bg-background">
          <div className="max-w-4xl mx-auto text-center text-lg text-muted-foreground leading-relaxed">
            <p>
              <strong>Souls Connection Safaris was founded to restore what speed has taken.</strong> Your journey is crafted
              around you—your longings, your quiet hopes, your desire to leave more than memories. We guide. You return.
            </p>
          </div>
        </section>

        {/* Origin */}
        <section className="px-6 py-16 md:py-20 bg-green/5">
          <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 items-center">
            <div
              className="w-full h-64 md:h-80 rounded-3xl bg-cover bg-center shadow-lg"
              style={{ backgroundImage: "url('/african-safari-lions-at-sunset.jpg')" }}
              aria-hidden
            />
            <div>
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold">Our origin</p>
              <h2 className="font-niconne text-3xl md:text-4xl font-bold mt-4">
                We created Souls Connection Safaris when travel lost its humanity.
              </h2>
              <p className="text-lg text-muted-foreground mt-4">
                It had mastered logistics—but it had stopped listening. You deserve a journey that listens first, that meets
                what you can’t always say out loud, and that returns you changed in the right ways.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story (combined from Founders' Story) */}
        <section className="px-6 py-16 md:py-24 bg-background" aria-labelledby="our-story-heading">
          <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.1fr,0.9fr] items-start">
            <div className="space-y-6">
              <h2 id="our-story-heading" className="font-niconne text-4xl md:text-5xl font-bold leading-tight">
                The right journeys start with a conversation.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                You came looking for a change that goes deeper than scenery. We built Souls Connection Safaris to guide that
                change—by listening first, shaping with intention, and holding space for what matters most.
              </p>
              <div className="space-y-5">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  You know the feeling when a moment is stunning, yet a quiet part of you still longs for something deeper?
                  That feeling nudged us to stop building itineraries and start guiding journeys that return presence.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our backgrounds span communications, hospitality training, and years of leading guests through East
                  Africa. Even flawless plans can feel empty when care starts with logistics instead of listening.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We are parents of three and co-founders in life and in work. Parenthood taught us to notice the tiny cues
                  that reveal what someone needs. That attentiveness became the foundation of Souls Connection Safaris.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today every journey begins with presence: a conversation, a pause, an invitation to say what you haven’t
                  put into words. Only then do we curate the lodges, routes, and rituals that will move you.
                </p>
              </div>
              <blockquote className="border-l-4 border-gold/40 pl-6 font-niconne text-2xl text-foreground">
                “The right journeys start with a conversation. This one starts with you.”
              </blockquote>
            </div>
            <div className="space-y-8">
              <div
                className="min-h-[320px] rounded-3xl bg-cover bg-center shadow-xl"
                style={{ backgroundImage: "url('/giraffe-herd-in-savanna-landscape.jpg')" }}
                aria-hidden
              />
              <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-lg space-y-4">
                <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold">Our promise</p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="leading-relaxed">• Guides trained to anticipate quietly.</li>
                  <li className="leading-relaxed">• Private drivers and pilots who move with discretion.</li>
                  <li className="leading-relaxed">• Lodge partners who protect your privacy and honor your pace.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Founders */}
        <section className="px-6 py-16 md:py-24 bg-background" aria-labelledby="guides-heading">
          <div className="max-w-6xl mx-auto space-y-8">
            <div>
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold">Guides who know the land</p>
              <h2 id="guides-heading" className="font-niconne text-4xl font-semibold mt-3">
                Guides who know the land — and what the soul needs.
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {founders.map((founder) => (
                <div key={founder.name} className="flex gap-4 rounded-2xl border border-border/60 p-5 bg-card/80 shadow-sm">
                  <div className="flex items-center justify-center text-gold">
                    <UserRound className="w-22 h-22" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">{founder.name}</div>
                    <p className="text-sm text-muted-foreground mt-2">{founder.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <details className="border border-border/60 rounded-2xl p-5 bg-card/60">
              <summary className="font-medium cursor-pointer">Read more about George & Teresia</summary>
              <div className="mt-4 text-muted-foreground space-y-3 text-sm leading-relaxed">
                <p>
                  <strong>George —</strong> Raised across the Eastern plains, George’s work is shaped by a lifetime of listening to land
                  and people. He brings experience, a calm logistical hand, and a deep respect for local communities.
                </p>
                <p>
                  <strong>Teresia —</strong> With formal training in communications and years of guest experience, Teresia curates the
                  emotional flow of each journey—ensuring each day creates space for presence and connection.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* Team */}
        <section className="px-6 py-16 md:py-24 bg-green/5" aria-labelledby="team-heading">
          <div className="max-w-6xl mx-auto space-y-6">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold">
              A trained team, present at every moment
            </p>
            <h3 id="team-heading" className="font-niconne text-3xl md:text-4xl font-semibold">
              Quiet professionals who deliver under our guidance
            </h3>
            <p className="text-muted-foreground max-w-4xl">
              Local guides, private drivers, lodge partners, and guest-hosts—each chosen for compassion, competence, and
              discretion. They are trained by George and Teresia to hold space, make calm decisions, and protect your privacy.
            </p>
            <div className="grid gap-5 md:grid-cols-3">
              {teamMembers.map((member) => (
                <div
                  key={member.title}
                  className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card/80 p-5 shadow-sm"
                >
                  <div className="flex items-center justify-center text-gold">
                    <UserCircle2 className="w-16 h-16" />
                  </div>
                  <div>
                    <div className="font-semibold">{member.title}</div>
                    <p className="text-sm text-muted-foreground mt-1">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Signature moment */}
        <section className="px-6 py-16 md:py-24 bg-background" aria-labelledby="signature-heading">
          <div className="max-w-5xl mx-auto space-y-5">
            <h3 id="signature-heading" className="font-niconne text-3xl md:text-4xl font-semibold">
              The Signature Moment
            </h3>
            <p className="text-lg text-muted-foreground">
              On arrival, a short private conversation uncovers what you truly seek—sometimes things you haven’t said aloud.
              From that moment your journey is shaped not to impress, but to restore: the right pace, the right encounters,
              the exact silence or conversation you need.
            </p>
            <blockquote className="border-l-4 border-gold/40 pl-6 font-niconne text-2xl text-foreground">
              “They didn’t arrange a trip — they guided a return.” — A.R., USA
            </blockquote>
          </div>
        </section>

        {/* Values & credentials */}
        <section className="px-6 py-16 md:py-24 bg-green/5">
          <div className="max-w-6xl mx-auto flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div className="flex-1 min-w-[240px]">
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold">Our values</p>
              <div className="flex flex-wrap gap-3 mt-6">
                {values.map((value) => (
                  <span
                    key={value}
                    className="px-4 py-2 rounded-full border border-border text-sm font-semibold bg-card/80"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex-1 min-w-[240px]">
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold">Credentials & partnerships</p>
              <p className="text-muted-foreground mt-4">{credentialCopy}</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h2 className="font-niconne text-3xl md:text-4xl font-semibold">Begin a journey that remembers you.</h2>
            <p className="text-muted-foreground">
              If you want presence, meaningful moments, and a legacy in the making, let’s design it together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-md uppercase tracking-wide"
              >
                Start My Journey
              </Link>
              <Link href="/sample-itinerary.pdf" className="text-gold font-semibold">
                See Sample Itinerary
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
