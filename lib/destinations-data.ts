export interface Destination {
  id: string
  name: string
  slug: string
  description: string
  shortDescription: string
  image: string
  highlights: string[]
  bestTime: string
  wildlife: string[]
  activities: string[]
}

export const destinations: Destination[] = [
  {
    id: "maasai-mara-conservancies",
    name: "Maasai Mara & Conservancies",
    slug: "maasai-mara-conservancies",
    shortDescription: "Open plains, golden light, and private conservancies where sightings feel unhurried",
    description:
      "Open plains, golden light, and private conservancies where sightings feel unhurried and evenings end with silence and stars. The Maasai Mara ecosystem extends beyond the national reserve into community conservancies, offering exclusive wildlife experiences with fewer crowds and deeper cultural connections.",
    image: "/kenya-safari-landscape-with-masai-giraffes-and-aca.jpg",
    highlights: [
      "Private conservancy game drives with exclusive access",
      "Great Migration river crossings (July-October)",
      "Maasai cultural experiences and village visits",
      "Hot air balloon safaris over endless plains",
      "Night game drives and bush dinners under stars",
    ],
    bestTime: "June to October for migration, December to March for calving season",
    wildlife: ["Lions", "Leopards", "Cheetahs", "Elephants", "Wildebeest", "Zebras", "Giraffes", "Rhinos"],
    activities: ["Private conservancy game drives", "Hot air balloon safari", "Maasai cultural visits", "Bush dinners", "Photography workshops"],
  },
  {
    id: "laikipia",
    name: "Laikipia",
    slug: "laikipia",
    shortDescription: "Highland plateaus and intimate camps with conservation work and community stories",
    description:
      "Highland plateaus and intimate camps with a sense of living close to conservation work and local community stories. Laikipia offers a different perspective on safari—one where conservation, community, and wildlife coexist in harmony across vast private ranches and conservancies.",
    image: "/elephant-family-drinking-at-watering-hole.jpg",
    highlights: [
      "Private ranch experiences with conservation focus",
      "Walking safaris and horseback riding",
      "Community-led conservation projects",
      "Rare northern species like Grevy's zebra",
      "Intimate camps with personalized service",
    ],
    bestTime: "June to October (dry season), January to March",
    wildlife: ["Elephants", "Lions", "Leopards", "Grevy's zebras", "Reticulated giraffes", "Wild dogs", "Rhinos"],
    activities: ["Walking safaris", "Horseback riding", "Conservation experiences", "Community visits", "Camel trekking"],
  },
  {
    id: "samburu",
    name: "Samburu",
    slug: "samburu",
    shortDescription: "Distinctive landscapes and rare northern species with elemental rhythm",
    description:
      "Distinctive landscapes and rare northern species set against a slow, elemental rhythm that encourages reflection. Samburu's arid beauty and unique wildlife create an otherworldly safari experience, where ancient cultures and pristine wilderness converge.",
    image: "/giraffe-herd-in-savanna-landscape.jpg",
    highlights: [
      "Unique northern species found nowhere else",
      "Samburu cultural experiences and traditions",
      "Ewaso Ng'iro River wildlife viewing",
      "Dramatic landscapes and geological formations",
      "Intimate camps with authentic atmosphere",
    ],
    bestTime: "June to October, December to March",
    wildlife: ["Reticulated giraffes", "Grevy's zebras", "Beisa oryx", "Gerenuk", "Lions", "Leopards", "Elephants"],
    activities: ["Game drives", "Cultural visits", "River walks", "Bird watching", "Photography"],
  },
  {
    id: "serengeti-surrounds",
    name: "Serengeti & Surrounds",
    slug: "serengeti-surrounds",
    shortDescription: "Endless seasonal movement with careful timing away from crowds",
    description:
      "Endless seasonal movement and careful timing that keeps you away from crowds and close to big-sky serenity. The greater Serengeti ecosystem offers year-round wildlife spectacles, from calving seasons to river crossings, experienced in exclusive locations.",
    image: "/tanzania-serengeti-savanna-with-zebra-herd-and-mou.jpg",
    highlights: [
      "Great Migration throughout the year",
      "Exclusive mobile camps following wildlife",
      "Ngorongoro Crater descent experiences",
      "Remote areas away from tourist crowds",
      "Big-sky landscapes and endless horizons",
    ],
    bestTime: "Year-round depending on migration patterns",
    wildlife: ["Wildebeest", "Zebras", "Lions", "Cheetahs", "Leopards", "Elephants", "Rhinos", "Hyenas"],
    activities: ["Migration tracking", "Mobile camping", "Crater tours", "Walking safaris", "Cultural experiences"],
  },
  {
    id: "indian-ocean-coast",
    name: "Indian Ocean Coast",
    slug: "indian-ocean-coast",
    shortDescription: "Quiet beaches and warm waters bringing body and mind into stillness",
    description:
      "Quiet beaches and warm waters that bring your body and mind into stillness—ideal at the start or end of a journey. The East African coast offers pristine beaches, rich Swahili culture, and the perfect complement to safari adventures.",
    image: "/african-sunset-landscape.jpg",
    highlights: [
      "Pristine beaches with minimal crowds",
      "Swahili culture and historic stone towns",
      "Dhow sailing and ocean adventures",
      "Wellness and restoration experiences",
      "Fresh seafood and coastal cuisine",
    ],
    bestTime: "June to September, December to March",
    wildlife: ["Dolphins", "Whale sharks", "Sea turtles", "Tropical fish", "Coral reefs"],
    activities: ["Dhow sailing", "Snorkeling", "Cultural tours", "Wellness treatments", "Beach relaxation"],
  },
]

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug)
}
