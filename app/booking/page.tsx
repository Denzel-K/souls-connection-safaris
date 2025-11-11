"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { Clock3, Leaf, Shield } from "lucide-react"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

const feelingBaseOptions = ["Meaning", "Connection", "Renewal"]

const flexibleSeasons = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
  "Festive",
  "Green season",
  "Shoulder",
]

export default function Booking() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [country, setCountry] = useState("")
  const [dateMode, setDateMode] = useState<"dates" | "flexible">("dates")
  const [travelDates, setTravelDates] = useState("")
  const [selectedSeasons, setSelectedSeasons] = useState<string[]>([])
  const [tripType, setTripType] = useState<"Private" | "Small Group (≤15)">("Private")
  const [selectedFeelings, setSelectedFeelings] = useState<string[]>([])
  const [customFeelings, setCustomFeelings] = useState<string[]>([])
  const [notes, setNotes] = useState("")
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle")
  const [submittedEmail, setSubmittedEmail] = useState("")
  const [errors, setErrors] = useState<Record<string, string>>({})

  const feelingOptions = useMemo(() => [...feelingBaseOptions, ...customFeelings], [customFeelings])

  const toggleFeeling = (feeling: string) => {
    setSelectedFeelings((prev) => (prev.includes(feeling) ? prev.filter((item) => item !== feeling) : [...prev, feeling]))
  }

  const addCustomFeeling = () => {
    const custom = window.prompt("What feeling should we honor?")
    if (!custom) return
    const trimmed = custom.trim()
    if (!trimmed || feelingOptions.includes(trimmed)) return
    setCustomFeelings((prev) => [...prev, trimmed])
    setSelectedFeelings((prev) => [...prev, trimmed])
  }

  const toggleSeason = (season: string) => {
    setSelectedSeasons((prev) => (prev.includes(season) ? prev.filter((entry) => entry !== season) : [...prev, season]))
  }

  const validate = () => {
    const nextErrors: Record<string, string> = {}
    if (!fullName.trim()) nextErrors.name = "Add your full name."
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Enter a valid email."
    if (!country.trim()) nextErrors.country = "Select your country."
    if (dateMode === "dates" && !travelDates.trim()) nextErrors.dates = "Choose dates or a season."
    if (dateMode === "flexible" && selectedSeasons.length === 0) nextErrors.season = "Choose dates or a season."
    if (selectedFeelings.length === 0) nextErrors.feelings = "Select at least one feeling."
    if (!consent) nextErrors.consent = "Please confirm consent."
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!validate()) return
    setStatus("sending")
    setTimeout(() => {
      setStatus("success")
      setSubmittedEmail(email)
    }, 900)
  }

  return (
    <div className="flex min-h-screen flex-col bg-lux-bone text-lux-ink">
      <Header />

      <section className="px-6 py-20 text-center">
        <div className="mx-auto max-w-4xl space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-lux-accent">Plan my journey</p>
          <h1 className="font-serif text-5xl text-lux-forest">Start My Journey</h1>
          <p className="text-lg text-lux-ink opacity-80">
            Tell us how you want to feel. Your hosts will craft two clear options within 48 hours—private or small group,
            always at your pace.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-lux-ink opacity-70">
            <span>Private vehicles as standard</span>
            <span>•</span>
            <span>Host-led consult (15–20 min)</span>
            <span>•</span>
            <span>Discreet, human replies</span>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.6fr_0.4fr]">
          <div className="rounded-[40px] border border-lux-sand bg-white/90 p-10 shadow-[0_40px_90px_rgba(30,30,28,0.12)] backdrop-blur-sm">
            {status === "success" ? (
              <div className="space-y-6 text-center">
                <p className="text-xs uppercase tracking-[0.4em] text-lux-accent">Plan request received</p>
                <h2 className="font-serif text-4xl text-lux-forest">Your hosts are on it.</h2>
                <p className="text-lg text-lux-ink opacity-80">
                  A host will review and email a first plan to {submittedEmail} within 24–48 hours.
                </p>
                <div className="grid gap-3 md:grid-cols-3">
                  <Link href="/schedule" className="rounded-full border border-lux-forest px-4 py-3 text-sm">
                    Add a 15-minute intro call
                  </Link>
                  <Link href="https://wa.me/254700000000" className="rounded-full border border-lux-forest px-4 py-3 text-sm">
                    Message on WhatsApp
                  </Link>
                  <Link href="/sample-itinerary.pdf" className="rounded-full border border-lux-forest px-4 py-3 text-sm">
                    Download the planner
                  </Link>
                </div>
                <ul className="text-sm text-lux-ink opacity-70 space-y-2">
                  <li>• Human review by George or Wambui</li>
                  <li>• Two itineraries aligned to your pace</li>
                  <li>• Zero obligation—just clarity</li>
                </ul>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-lux-accent">Consult form</p>
                  <h2 className="font-serif text-4xl text-lux-forest mt-2">Tell us how you want to feel.</h2>
                  <p className="text-lg text-lux-ink opacity-80">Your hosts will design around that.</p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold text-lux-forest">Name</label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(event) => setFullName(event.target.value)}
                      className="mt-2 w-full rounded-2xl border border-lux-stone bg-white px-4 py-3"
                      placeholder="First and last name"
                      required
                    />
                    {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-lux-forest">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="mt-2 w-full rounded-2xl border border-lux-stone bg-white px-4 py-3"
                      placeholder="Used only for your plan"
                      required
                    />
                    {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-lux-forest">Country / Time zone</label>
                    <input
                      type="text"
                      value={country}
                      onChange={(event) => setCountry(event.target.value)}
                      className="mt-2 w-full rounded-2xl border border-lux-stone bg-white px-4 py-3"
                      placeholder="Helps us match hosts"
                      required
                    />
                    {errors.country && <p className="text-sm text-red-600 mt-1">{errors.country}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-lux-forest">Dates / Season</label>
                    <div className="mt-2 flex gap-2 text-sm">
                      <button
                        type="button"
                        onClick={() => setDateMode("dates")}
                        className={`px-4 py-2 rounded-full border ${
                          dateMode === "dates" ? "border-lux-forest text-lux-forest" : "border-lux-stone text-lux-ink opacity-70"
                        }`}
                      >
                        Pick dates
                      </button>
                      <button
                        type="button"
                        onClick={() => setDateMode("flexible")}
                        className={`px-4 py-2 rounded-full border ${
                          dateMode === "flexible"
                            ? "border-lux-forest text-lux-forest"
                            : "border-lux-stone text-lux-ink opacity-70"
                        }`}
                      >
                        I’m flexible
                      </button>
                    </div>
                    {dateMode === "dates" ? (
                      <input
                        type="text"
                        value={travelDates}
                        onChange={(event) => setTravelDates(event.target.value)}
                        className="mt-3 w-full rounded-2xl border border-lux-stone bg-white px-4 py-3"
                        placeholder="e.g., 12–22 July 2025"
                      />
                    ) : (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {flexibleSeasons.map((season) => (
                          <button
                            type="button"
                            key={season}
                            onClick={() => toggleSeason(season)}
                            className={`px-3 py-2 rounded-full border text-sm ${
                              selectedSeasons.includes(season)
                                ? "border-lux-forest text-lux-forest"
                                : "border-lux-stone text-lux-ink opacity-70"
                            }`}
                          >
                            {season}
                          </button>
                        ))}
                      </div>
                    )}
                    {errors.dates && <p className="text-sm text-red-600 mt-1">{errors.dates}</p>}
                    {errors.season && <p className="text-sm text-red-600 mt-1">{errors.season}</p>}
                  </div>
                </div>
                <fieldset className="space-y-3">
                  <legend className="text-sm font-semibold text-lux-forest">Trip Type</legend>
                  <div className="flex gap-3 flex-wrap">
                    {["Private", "Small Group (≤15)"].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setTripType(type as "Private" | "Small Group (≤15)")}
                        className={`px-4 py-2 rounded-full border ${
                          tripType === type ? "border-lux-forest text-lux-forest" : "border-lux-stone text-lux-ink opacity-70"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </fieldset>
                <fieldset className="space-y-3">
                  <legend className="text-sm font-semibold text-lux-forest">Desired feelings</legend>
                  <div className="flex flex-wrap gap-2">
                    {feelingOptions.map((feeling) => (
                      <button
                        type="button"
                        key={feeling}
                        onClick={() => toggleFeeling(feeling)}
                        className={`px-4 py-2 rounded-full border text-sm ${
                          selectedFeelings.includes(feeling)
                            ? "border-lux-forest text-lux-forest"
                            : "border-lux-stone text-lux-ink opacity-70"
                        }`}
                      >
                        {feeling}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={addCustomFeeling}
                      className="px-4 py-2 rounded-full border border-dashed border-lux-stone text-sm text-lux-ink opacity-70"
                    >
                      + Add my own
                    </button>
                  </div>
                  {errors.feelings && <p className="text-sm text-red-600">{errors.feelings}</p>}
                </fieldset>
                <div>
                  <label className="text-sm font-semibold text-lux-forest">Notes (optional)</label>
                  <textarea
                    value={notes}
                    onChange={(event) => setNotes(event.target.value)}
                    rows={4}
                    placeholder="Anything important—pace, mobility, diet, special moments?"
                    className="mt-2 w-full rounded-2xl border border-lux-stone bg-white px-4 py-3"
                  />
                </div>
                <label className="flex items-start gap-3 text-sm text-lux-ink opacity-80">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(event) => setConsent(event.target.checked)}
                    className="mt-1 h-5 w-5 rounded border-lux-stone"
                    required
                  />
                  Yes—contact me about this plan. No marketing lists, ever.
                </label>
                {errors.consent && <p className="text-sm text-red-600">{errors.consent}</p>}
                <button
                  type="submit"
                  className="w-full rounded-full bg-lux-forest py-4 text-sm uppercase tracking-[0.3em] text-white disabled:opacity-60"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending…" : "Get My Plan"}
                </button>
                <div className="flex flex-wrap gap-4 text-sm text-lux-ink opacity-70 pt-2">
                  <span className="inline-flex items-center gap-2">
                    <Shield className="h-4 w-4" /> Secure form
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock3 className="h-4 w-4" /> Human reply in 24–48 hours
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Leaf className="h-4 w-4" /> Low-impact pacing
                  </span>
                </div>
              </form>
            )}
          </div>
          <aside className="space-y-8">
            <div className="rounded-[32px] border border-lux-sand bg-white/70 p-8 shadow-[0_25px_70px_rgba(30,30,28,0.08)]">
              <p className="text-xs uppercase tracking-[0.4em] text-lux-accent">What happens next</p>
              <ul className="mt-6 space-y-4 text-sm text-lux-ink opacity-80">
                <li>
                  <span className="font-semibold text-lux-forest">01 — Share feelings.</span> We listen for mood, pace, and
                  privacy cues.
                </li>
                <li>
                  <span className="font-semibold text-lux-forest">02 — Receive two routes.</span> Side-by-side comparisons
                  within 48 hours.
                </li>
                <li>
                  <span className="font-semibold text-lux-forest">03 — Refine with your host.</span> Adjust anything before
                  confirming.
                </li>
              </ul>
            </div>
            <div className="rounded-[32px] border border-lux-sand bg-white/70 p-8 shadow-[0_20px_60px_rgba(30,30,28,0.08)] space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-lux-accent">Need inspiration?</p>
              <p className="text-sm text-lux-ink opacity-80">
                Browse our latest itineraries before or after you submit the form.
              </p>
              <div className="flex flex-col gap-2 text-sm">
                <Link href="/journeys/quiet-horizon" className="border-b border-lux-accent w-fit text-lux-forest">
                  The Quiet Horizon →
                </Link>
                <Link href="/journeys/elements-of-connection" className="border-b border-lux-accent w-fit text-lux-forest">
                  Elements of Connection →
                </Link>
                <Link href="/journeys/legacy-in-the-wild" className="border-b border-lux-accent w-fit text-lux-forest">
                  Legacy in the Wild →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  )
}
