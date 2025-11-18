export type Journey = {
  id: string
  title: string
  subtitle: string
  meta: string
  regionTag: string
  priceLine: string
  finePrint: string
  badge?: string
  itinerary?: JourneyItinerary
  expressions?: JourneyExpression[]
}

export type JourneyItinerary = {
  overview: string
  days: { day: string; title: string; description: string }[]
}

export type JourneyExpression = {
  key: "kenya" | "tanzania"
  label: string
  itinerary: JourneyItinerary
}

export const journeys: Journey[] = [
  {
    id: "seasons-of-the-migration",
    title: "Seasons of the Migration",
    subtitle:
      "Follow the arc of the great herds at a calmer pace, with space to pause, breathe, and share the wonder together.",
    meta: "10–12 days · Kenya & Tanzania · Migration-focused · Private vehicle",
    regionTag: "Kenya & Tanzania",
    priceLine: "From USD XX,000 per person*",
    finePrint: "Indicative starting point; final journey tailored to season, lodges, and routing.",
    badge: "Country focus: Kenya & Tanzania",
    itinerary: {
      overview:
        "A classic East Africa arc tracking the Great Migration through Kenya and Tanzania, paced for presence and wonder.",
      days: [
        { day: "Day 1", title: "Arrive Nairobi", description: "Private welcome and overnight for a gentle start." },
        { day: "Days 2–4", title: "Mara Conservancy", description: "Golden-hour drives, river bends, and host-led evenings." },
        { day: "Days 5–8", title: "Northern Serengeti", description: "Follow crossings and quiet plains at an unhurried rhythm." },
        { day: "Days 9–11", title: "Central Serengeti", description: "Broad savannah game drives and stargazing suppers." },
        { day: "Day 12", title: "Departure", description: "Return via Arusha or Nairobi with unhurried transfers." },
      ],
    },
  },
  {
    id: "elements-of-connection",
    title: "Elements of Connection",
    subtitle:
      "A classic East Africa safari shaped around shared moments, golden-hour drives, and unhurried mornings together.",
    meta: "8–10 days · Kenya-only · Private or small group",
    regionTag: "Kenya-only",
    priceLine: "From USD XX,000 per person*",
    finePrint: "Indicative starting point; final journey tailored to season, lodges, and routing.",
    badge: "Country focus: Kenya",
    itinerary: {
      overview:
        "Available as a Kenya-only journey, with the option to extend into Tanzania as a Bespoke expression.",
      days: [
        { day: "Day 1", title: "Nairobi or straight to the bush", description: "Soft landing and briefing." },
        { day: "Days 2–5", title: "Maasai Mara / Conservancy", description: "Shared moments and golden-hour drives." },
        { day: "Days 6–8", title: "Laikipia or Amboseli (optional)", description: "Contrasting landscapes and pacing." },
        { day: "Day 9–10", title: "Return & Reflect", description: "Unhurried morning and return flights." },
      ],
    },
  },
  {
    id: "legacy-in-the-wild",
    title: "Legacy in the Wild",
    subtitle:
      "A multi-generational safari created for stories, connection, and memories that live far beyond the journey.",
    meta: "9–12 days · Kenya-only · Family & multi-gen · Private vehicle",
    regionTag: "Kenya-only",
    priceLine: "From USD XX,000 per person*",
    finePrint: "Indicative starting point; final journey tailored to season, lodges, and routing.",
    badge: "Country focus: Kenya",
    itinerary: {
      overview:
        "Created as a Kenya-only family journey, with the option to extend into Tanzania as a Bespoke design for certain groups.",
      days: [
        { day: "Day 1", title: "Nairobi or Naivasha", description: "Soft start for kids and grandparents alike." },
        { day: "Days 2–6", title: "Mara / Conservancy", description: "Private vehicle, flexible pacing for all ages." },
        { day: "Days 7–9", title: "Second Kenyan region", description: "Choose Laikipia or Amboseli based on interests." },
        { day: "Days 10–12", title: "At Ease", description: "Villa time, gentle walks, and storytelling circles." },
      ],
    },
  },
  {
    id: "quiet-horizons",
    title: "Quiet Horizons",
    subtitle:
      "A slow safari with fewer stops and longer stays, designed for deep rest, reflection, and quiet connection with the wild.",
    meta: "8–10 days · Kenya-only · Slow safari · Fewer stops",
    regionTag: "Kenya-only",
    priceLine: "From USD XX,000 per person*",
    finePrint: "Indicative starting point; final journey tailored to season, lodges, and routing.",
    badge: "Country focus: Kenya",
    itinerary: {
      overview:
        "Designed as a Kenya-only slow safari, with longer stays and fewer lodge changes.",
      days: [
        { day: "Day 1", title: "Arrive Nairobi", description: "Settle and exhale." },
        { day: "Days 2–5", title: "Mara Conservancy (long stay)", description: "Deep rest, reflective mornings, and unhurried drives." },
        { day: "Days 6–8", title: "Laikipia or Amboseli (long stay)", description: "Fewer transitions, more presence." },
        { day: "Days 9–10", title: "Quiet Departure", description: "Leisurely breakfast and return." },
      ],
    },
  },
  {
    id: "tides-of-stillness",
    title: "Tides of Stillness",
    subtitle:
      "Begin in the quiet drama of the savannah, then exhale on the Indian Ocean coast, with time for renewal and connection.",
    meta: "10–14 days · Bush & Coast · Kenya or Tanzania",
    regionTag: "Bush & Coast",
    priceLine: "From USD XX,000 per person*",
    finePrint:
      "Indicative starting point; final journey tailored to season, lodges, routing, and coastal expression.",
    badge: "Two expressions: Kenya or Tanzania",
    expressions: [
      {
        key: "kenya",
        label: "Kenya expression",
        itinerary: {
          overview:
            "Maasai Mara + Indian Ocean coast (Diani/Watamu/Lamu) with an emphasis on renewal and connection.",
          days: [
            { day: "Day 1", title: "Arrive Nairobi", description: "Private welcome and optional city interlude." },
            { day: "Days 2–6", title: "Maasai Mara / Conservancy", description: "Unhurried drives and sundowner rituals." },
            { day: "Days 7–10", title: "Indian Ocean Coast", description: "Diani, Watamu, or Lamu—dhow sails and sea air." },
            { day: "Days 11–14", title: "Optional Extensions", description: "Wellness days or cultural exploration before departure." },
          ],
        },
      },
      {
        key: "tanzania",
        label: "Tanzania expression",
        itinerary: {
          overview: "Serengeti + Zanzibar or Pemba with a gentle rhythm between bush and coast.",
          days: [
            { day: "Day 1", title: "Arrive Arusha", description: "Settle and prepare for the bush." },
            { day: "Days 2–6", title: "Serengeti", description: "Expansive plains, flexible drives, and quiet nights." },
            { day: "Days 7–10", title: "Zanzibar / Pemba", description: "Spice island culture, reefs, and restorative time." },
            { day: "Days 11–14", title: "Optional Extensions", description: "Sailing, wellness, or Stone Town before departure." },
          ],
        },
      },
    ],
  },
]
