"use client"

import Link from "next/link"
import { useMemo, useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Clock3, Leaf, Shield, Star, MapPin } from "lucide-react"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { journeys, type Journey } from "@/lib/journeys-data"
import { destinations, type Destination } from "@/lib/destinations-data"

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
  const searchParams = useSearchParams()
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
  
  // Context from URL parameters
  const journeyId = searchParams?.get('journey')
  const tier = searchParams?.get('tier')
  const focus = searchParams?.get('focus')
  const destination = searchParams?.get('destination')
  const mode = searchParams?.get('mode') // private, small-group, etc.
  
  // Get contextual data
  const selectedJourney = journeyId ? journeys.find(j => j.id === journeyId) : null
  const selectedDestination = destination ? destinations.find(d => d.slug === destination) : null
  
  // Dynamic context for messaging
  const context = useMemo(() => {
    if (selectedJourney) {
      return {
        type: 'journey',
        title: selectedJourney.title,
        subtitle: selectedJourney.subtitle,
        meta: selectedJourney.meta,
        suggestedFeelings: getSuggestedFeelingsForJourney(selectedJourney)
      }
    }
    if (selectedDestination) {
      return {
        type: 'destination',
        title: selectedDestination.name,
        subtitle: selectedDestination.shortDescription,
        meta: selectedDestination.bestTime,
        suggestedFeelings: getSuggestedFeelingsForDestination(selectedDestination)
      }
    }
    if (tier || focus) {
      return {
        type: 'experience',
        title: `${tier ? tier.charAt(0).toUpperCase() + tier.slice(1) : ''} Experience`,
        subtitle: focus ? `Focused on ${focus.replace('-', ' ')}` : 'Tailored to your preferences',
        meta: 'Custom experience design',
        suggestedFeelings: ['Adventure', 'Discovery', 'Luxury']
      }
    }
    if (mode === 'private') {
      return {
        type: 'mode',
        title: 'Private Safari Experience',
        subtitle: 'Exclusive vehicle and personalized itinerary',
        meta: 'Private vehicle · Flexible pacing · Intimate moments',
        suggestedFeelings: ['Privacy', 'Intimacy', 'Flexibility']
      }
    }
    return null
  }, [selectedJourney, selectedDestination, tier, focus, mode])
  
  // Helper functions for suggested feelings
  function getSuggestedFeelingsForJourney(journey: Journey): string[] {
    const feelingMap: Record<string, string[]> = {
      'seasons-of-the-migration': ['Wonder', 'Adventure', 'Connection'],
      'elements-of-connection': ['Connection', 'Intimacy', 'Meaning'],
      'legacy-in-the-wild': ['Legacy', 'Family', 'Storytelling'],
      'quiet-horizons': ['Peace', 'Reflection', 'Stillness'],
      'tides-of-stillness': ['Renewal', 'Balance', 'Restoration']
    }
    return feelingMap[journey.id] || ['Connection', 'Meaning', 'Wonder']
  }
  
  function getSuggestedFeelingsForDestination(dest: Destination): string[] {
    const feelingMap: Record<string, string[]> = {
      'maasai-mara-conservancies': ['Wonder', 'Adventure', 'Wildlife'],
      'laikipia': ['Conservation', 'Community', 'Authenticity'],
      'samburu': ['Culture', 'Reflection', 'Uniqueness'],
      'serengeti-surrounds': ['Migration', 'Vastness', 'Freedom'],
      'indian-ocean-coast': ['Restoration', 'Peace', 'Balance']
    }
    return feelingMap[dest.slug] || ['Connection', 'Adventure', 'Peace']
  }
  
  // Auto-fill form based on context
  useEffect(() => {
    if (context?.suggestedFeelings && selectedFeelings.length === 0) {
      setSelectedFeelings(context.suggestedFeelings)
    }
    
    if (mode === 'private' && tripType !== 'Private') {
      setTripType('Private')
    }
    
    if (selectedJourney) {
      const journeyNotes = `Interested in: ${selectedJourney.title}\n${selectedJourney.meta}`
      if (!notes.includes(selectedJourney.title)) {
        setNotes(prev => prev ? `${prev}\n\n${journeyNotes}` : journeyNotes)
      }
    }
    
    if (selectedDestination) {
      const destNotes = `Interested in: ${selectedDestination.name}\nBest time: ${selectedDestination.bestTime}`
      if (!notes.includes(selectedDestination.name)) {
        setNotes(prev => prev ? `${prev}\n\n${destNotes}` : destNotes)
      }
    }
  }, [context, selectedJourney, selectedDestination, mode])

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
    if (selectedFeelings.length === 0) {
      nextErrors.feelings = context?.suggestedFeelings 
        ? `Select at least one feeling. We've suggested some based on your ${context.type} choice.`
        : "Select at least one feeling."
    }
    if (!consent) nextErrors.consent = "Please confirm consent."
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!validate()) return
    setStatus("sending")
    
    // In a real implementation, you would send the form data including context
    const formData = {
      fullName,
      email,
      country,
      dateMode,
      travelDates: dateMode === 'dates' ? travelDates : '',
      selectedSeasons: dateMode === 'flexible' ? selectedSeasons : [],
      tripType,
      selectedFeelings,
      notes,
      context: context ? {
        type: context.type,
        title: context.title,
        journeyId: selectedJourney?.id,
        destinationSlug: selectedDestination?.slug,
        tier,
        focus,
        mode
      } : null
    }
    
    console.log('Form submission with context:', formData)
    
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
          {context ? (
            <>
              <p className="text-xs uppercase tracking-[0.4em] text-lux-accent">
                {context.type === 'journey' ? 'Journey Request' : 
                 context.type === 'destination' ? 'Destination Interest' :
                 context.type === 'experience' ? 'Experience Design' :
                 'Private Experience'}
              </p>
              <h1 className="font-niconne text-5xl text-lux-forest">{context.title}</h1>
              <p className="text-lg text-lux-ink opacity-80">{context.subtitle}</p>
              <div className="flex items-center justify-center gap-2 text-sm text-lux-accent">
                <MapPin className="w-4 h-4" />
                <span>{context.meta}</span>
              </div>
              <p className="text-base text-lux-ink opacity-70">
                Your hosts will craft two personalized options for this experience within 48 hours.
              </p>
            </>
          ) : (
            <>
              <p className="text-xs uppercase tracking-[0.4em] text-lux-accent">Plan my journey</p>
              <h1 className="font-niconne text-5xl text-lux-forest">Start My Journey</h1>
              <p className="text-lg text-lux-ink opacity-80">
                Tell us how you want to feel. Your hosts will craft two clear options within 48 hours—private or small group,
                always at your pace.
              </p>
            </>
          )}
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
          <div className="border border-lux-sand bg-white/90 p-10 shadow-[0_40px_90px_rgba(30,30,28,0.12)] backdrop-blur-sm">
            {status === "success" ? (
              <div className="space-y-6 text-center">
                <p className="text-xs uppercase tracking-[0.4em] text-lux-accent">
                  {context ? `${context.type} request received` : 'Plan request received'}
                </p>
                <h2 className="font-niconne text-4xl text-lux-forest">Your hosts are on it.</h2>
                <p className="text-lg text-lux-ink opacity-80">
                  A host will review and email {context ? `personalized ${context.title} options` : 'a first plan'} to {submittedEmail} within 24–48 hours.
                </p>
                
                {context && (
                  <div className="bg-lux-shell/30 p-4 border border-lux-sand/50">
                    <div className="flex items-center justify-center gap-2 text-sm text-lux-accent mb-2">
                      <Star className="w-4 h-4" />
                      <span className="font-semibold">Your Selection: {context.title}</span>
                    </div>
                    <p className="text-sm text-lux-ink/70">{context.subtitle}</p>
                  </div>
                )}
                
                <div className="grid gap-3 md:grid-cols-3">
                  <Link href="/schedule" className="border border-lux-forest px-4 py-3 text-sm hover:bg-lux-forest hover:text-white transition-colors">
                    Add a 15-minute intro call
                  </Link>
                  <Link href="https://wa.me/254700000000" className="border border-lux-forest px-4 py-3 text-sm hover:bg-lux-forest hover:text-white transition-colors">
                    Message on WhatsApp
                  </Link>
                  <Link href="/sample-itinerary.pdf" className="border border-lux-forest px-4 py-3 text-sm hover:bg-lux-forest hover:text-white transition-colors">
                    Download the planner
                  </Link>
                </div>
                <ul className="text-sm text-lux-ink opacity-70 space-y-2">
                  <li>• Human review by George or Wambui</li>
                  <li>• {context ? 'Tailored options for your selected experience' : 'Two itineraries aligned to your pace'}</li>
                  <li>• Zero obligation—just clarity</li>
                </ul>
                
                {context && (
                  <div className="pt-4 border-t border-lux-sand/30">
                    <p className="text-sm text-lux-ink/60 mb-3">While you wait, explore related experiences:</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {journeys.filter(j => j.id !== selectedJourney?.id).slice(0, 2).map(journey => (
                        <Link 
                          key={journey.id}
                          href={`/journeys/${journey.id}`}
                          className="text-xs px-3 py-2 bg-white border border-lux-sand hover:border-lux-accent hover:text-lux-accent transition-colors"
                        >
                          {journey.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-lux-accent">Consult form</p>
                  <h2 className="font-niconne text-4xl text-lux-forest mt-2">
                    {context ? `Plan your ${context.type}` : 'Tell us how you want to feel.'}
                  </h2>
                  <p className="text-lg text-lux-ink opacity-80">
                    {context ? 'Your hosts will design around your chosen experience.' : 'Your hosts will design around that.'}
                  </p>
                  {context && (
                    <div className="mt-4 p-4 bg-lux-shell/50 border border-lux-sand/50">
                      <div className="flex items-center gap-2 text-sm text-lux-accent mb-2">
                        <Star className="w-4 h-4" />
                        <span className="font-semibold">Selected: {context.title}</span>
                      </div>
                      <p className="text-sm text-lux-ink/70">{context.subtitle}</p>
                    </div>
                  )}
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold text-lux-forest">Name</label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(event) => setFullName(event.target.value)}
                      className="mt-2 w-full border border-lux-stone bg-white px-4 py-3"
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
                      className="mt-2 w-full border border-lux-stone bg-white px-4 py-3"
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
                      className="mt-2 w-full border border-lux-stone bg-white px-4 py-3"
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
                        className={`px-4 py-2 border ${
                          dateMode === "dates" ? "text-white bg-lux-forest" : "border-lux-stone text-lux-ink opacity-70"
                        }`}
                      >
                        Pick dates
                      </button>
                      <button
                        type="button"
                        onClick={() => setDateMode("flexible")}
                        className={`px-4 py-2 border ${
                          dateMode === "flexible"
                            ? "text-white bg-lux-forest"
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
                        className="mt-3 w-full border border-lux-stone bg-white px-4 py-3"
                        placeholder="e.g., 12–22 July 2025"
                      />
                    ) : (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {flexibleSeasons.map((season) => (
                          <button
                            type="button"
                            key={season}
                            onClick={() => toggleSeason(season)}
                            className={`px-3 py-2 border text-sm ${
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
                        className={`px-4 py-2 border ${
                          tripType === type ? "text-white bg-lux-forest" : "border-lux-stone text-lux-ink opacity-70"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </fieldset>
                <fieldset className="space-y-3">
                  <legend className="text-sm font-semibold text-lux-forest">
                    Desired feelings
                    {context?.suggestedFeelings && (
                      <span className="ml-2 text-xs text-lux-accent font-normal">
                        (suggested for {context.type})
                      </span>
                    )}
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {/* Show context-suggested feelings first */}
                    {context?.suggestedFeelings?.map((feeling) => (
                      <button
                        type="button"
                        key={feeling}
                        onClick={() => toggleFeeling(feeling)}
                        className={`px-4 py-2 border text-sm relative ${
                          selectedFeelings.includes(feeling)
                            ? "border-lux-forest text-lux-forest bg-lux-forest/5"
                            : "border-lux-accent text-lux-accent hover:bg-lux-accent/5"
                        }`}
                      >
                        {feeling}
                        {context.suggestedFeelings.includes(feeling) && (
                          <Star className="w-3 h-3 absolute -top-1 -right-1 text-lux-accent fill-lux-accent" />
                        )}
                      </button>
                    ))}
                    {/* Show other base feelings */}
                    {feelingBaseOptions.filter(f => !context?.suggestedFeelings?.includes(f)).map((feeling) => (
                      <button
                        type="button"
                        key={feeling}
                        onClick={() => toggleFeeling(feeling)}
                        className={`px-4 py-2 border text-sm ${
                          selectedFeelings.includes(feeling)
                            ? "border-lux-forest text-lux-forest"
                            : "border-lux-stone text-lux-ink opacity-70"
                        }`}
                      >
                        {feeling}
                      </button>
                    ))}
                    {/* Show custom feelings */}
                    {customFeelings.map((feeling) => (
                      <button
                        type="button"
                        key={feeling}
                        onClick={() => toggleFeeling(feeling)}
                        className={`px-4 py-2 border text-sm ${
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
                      className="px-4 py-2 border border-dashed border-lux-stone text-sm text-lux-ink opacity-70 hover:border-lux-accent hover:text-lux-accent transition-colors"
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
                    className="mt-2 w-full border border-lux-stone bg-white px-4 py-3"
                  />
                </div>
                <label className="flex items-start gap-3 text-sm text-lux-ink opacity-80">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(event) => setConsent(event.target.checked)}
                    className="mt-1 h-5 w-5 border-lux-stone"
                    required
                  />
                  Yes—contact me about this plan. No marketing lists, ever.
                </label>
                {errors.consent && <p className="text-sm text-red-600">{errors.consent}</p>}
                <button
                  type="submit"
                  className="w-full bg-lux-forest py-4 text-sm uppercase tracking-[0.3em] text-white disabled:opacity-60 hover:bg-lux-forest/90 transition-colors"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending…" : 
                   context ? `Request ${context.title} Plan` : "Get My Plan"}
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
            {/* Context-specific information */}
            {context && (
              <div className="border border-lux-sand bg-white/70 p-8 shadow-[0_25px_70px_rgba(30,30,28,0.08)]">
                <p className="text-xs uppercase tracking-[0.4em] text-lux-accent">
                  {context.type === 'journey' ? 'Journey Details' :
                   context.type === 'destination' ? 'Destination Info' :
                   'Experience Details'}
                </p>
                <h3 className="font-niconne text-2xl text-lux-forest mt-3 mb-4">{context.title}</h3>
                <p className="text-sm text-lux-ink/80 mb-4">{context.subtitle}</p>
                <div className="text-xs text-lux-accent bg-lux-shell/30 px-3 py-2">
                  {context.meta}
                </div>
                
                {selectedJourney && (
                  <div className="mt-4 pt-4 border-t border-lux-sand/50">
                    <p className="text-xs uppercase tracking-[0.3em] text-lux-accent mb-2">Journey Highlights</p>
                    <ul className="text-sm text-lux-ink/70 space-y-1">
                      <li>• {selectedJourney.meta}</li>
                      <li>• {selectedJourney.regionTag}</li>
                      <li>• Private vehicle included</li>
                    </ul>
                  </div>
                )}
                
                {selectedDestination && (
                  <div className="mt-4 pt-4 border-t border-lux-sand/50">
                    <p className="text-xs uppercase tracking-[0.3em] text-lux-accent mb-2">Destination Highlights</p>
                    <ul className="text-sm text-lux-ink/70 space-y-1">
                      {selectedDestination.highlights.slice(0, 3).map((highlight, idx) => (
                        <li key={idx}>• {highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
            
            <div className="border border-lux-sand bg-white/70 p-8 shadow-[0_25px_70px_rgba(30,30,28,0.08)]">
              <p className="text-xs uppercase tracking-[0.4em] text-lux-accent">What happens next</p>
              <ul className="mt-6 space-y-4 text-sm text-lux-ink opacity-80">
                <li>
                  <span className="font-semibold text-lux-forest">01 — Share feelings.</span> We listen for mood, pace, and
                  privacy cues.
                </li>
                <li>
                  <span className="font-semibold text-lux-forest">02 — Receive two routes.</span> 
                  {context ? 'Personalized options for your selected experience' : 'Side-by-side comparisons'}
                  within 48 hours.
                </li>
                <li>
                  <span className="font-semibold text-lux-forest">03 — Refine with your host.</span> Adjust anything before
                  confirming.
                </li>
              </ul>
            </div>
            
            {!context && (
              <div className="border border-lux-sand bg-white/70 p-8 shadow-[0_20px_60px_rgba(30,30,28,0.08)] space-y-4">
                <p className="text-xs uppercase tracking-[0.4em] text-lux-accent">Need inspiration?</p>
                <p className="text-sm text-lux-ink opacity-80">
                  Browse our latest itineraries before or after you submit the form.
                </p>
                <div className="flex flex-col gap-2 text-sm">
                  <Link href="/journeys/quiet-horizons" className="border-b border-lux-accent w-fit text-lux-forest hover:text-lux-accent transition-colors">
                    Quiet Horizons →
                  </Link>
                  <Link href="/journeys/elements-of-connection" className="border-b border-lux-accent w-fit text-lux-forest hover:text-lux-accent transition-colors">
                    Elements of Connection →
                  </Link>
                  <Link href="/journeys/legacy-in-the-wild" className="border-b border-lux-accent w-fit text-lux-forest hover:text-lux-accent transition-colors">
                    Legacy in the Wild →
                  </Link>
                </div>
              </div>
            )}
            
            {context && (
              <div className="border border-lux-sand bg-white/70 p-8 shadow-[0_20px_60px_rgba(30,30,28,0.08)] space-y-4">
                <p className="text-xs uppercase tracking-[0.4em] text-lux-accent">Explore more</p>
                <p className="text-sm text-lux-ink opacity-80">
                  Discover other experiences that might interest you.
                </p>
                <div className="flex flex-col gap-2 text-sm">
                  {journeys.filter(j => j.id !== selectedJourney?.id).slice(0, 3).map(journey => (
                    <Link 
                      key={journey.id}
                      href={`/booking?journey=${journey.id}`} 
                      className="border-b border-lux-accent w-fit text-lux-forest hover:text-lux-accent transition-colors"
                    >
                      {journey.title} →
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  )
}
