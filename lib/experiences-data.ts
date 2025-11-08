// Package Tier → Subcategories → Specific Experiences with Destinations
export interface SpecificExperience {
  id: string
  name: string
  duration: string
  price: string
  description: string
  highlights: string[]
  image: string
  destination: string
  itineraryId: string
}

export interface Subcategory {
  id: string
  name: string
  slug: string
  description: string
  experiences: SpecificExperience[]
}

export interface PackageTier {
  id: string
  name: string
  slug: string
  description: string
  icon: string
  subcategories: Subcategory[]
}

export const packageTiers: PackageTier[] = [
  {
    id: "premium",
    name: "Premium Safari",
    slug: "premium-safari",
    description: "Discover Africa's finest with curated premium experiences",
    icon: "🌟",
    subcategories: [
      {
        id: "premium-signature",
        name: "Signature Safari",
        slug: "signature-safari",
        description: "Small group safaris with departures across all seasons",
        experiences: [
          {
            id: "premium-sig-grand",
            name: "The Grand Serengeti Journey",
            duration: "12 Days",
            price: "From $4,800 per person",
            description: "Experience the best of East Africa with professional guides across multiple national parks",
            highlights: [
              "Big Five encounters",
              "Professional guides",
              "Luxury lodges",
              "Game drives",
              "Cultural experiences",
            ],
            image: "/african-safari-lions-at-sunset.jpg",
            destination: "Kenya & Tanzania",
            itineraryId: "premium-sig-grand",
          },
          {
            id: "premium-sig-mara",
            name: "Masai Mara Explorer",
            duration: "10 Days",
            price: "From $3,900 per person",
            description: "Focused adventure on Africa's most iconic wildlife reserve",
            highlights: ["Migration viewing", "Hot air balloon", "Big Five", "Photography", "Expert naturalists"],
            image: "/giraffe-herd-in-savanna-landscape.jpg",
            destination: "Kenya",
            itineraryId: "premium-sig-mara",
          },
        ],
      },
      {
        id: "premium-private-sig",
        name: "Private Signature Safari",
        slug: "private-signature-safari",
        description: "Exclusive private group safaris with dedicated guides",
        experiences: [
          {
            id: "premium-priv-golden",
            name: "East Africa's Golden Savannahs",
            duration: "14 Days",
            price: "From $7,200 per person",
            description: "Exclusive private group safari through Kenya and Tanzania with personalized itinerary",
            highlights: [
              "Exclusive access",
              "Private vehicles",
              "Flexible timing",
              "Luxury camps",
              "Personalized service",
            ],
            image: "/zebra-migration-across-plains.jpg",
            destination: "Kenya & Tanzania",
            itineraryId: "premium-priv-golden",
          },
          {
            id: "premium-priv-ngoro",
            name: "Ngorongoro Crater Private Experience",
            duration: "9 Days",
            price: "From $5,500 per person",
            description: "Private safari focused on the world's largest intact caldera",
            highlights: ["Crater descent", "Private lodge", "Walking safaris", "Photography focus", "Exclusive access"],
            image: "/elephant-family-drinking-at-watering-hole.jpg",
            destination: "Tanzania",
            itineraryId: "premium-priv-ngoro",
          },
        ],
      },
      {
        id: "premium-custom",
        name: "Private Custom Safari",
        slug: "private-custom-safari",
        description: "Completely tailored safaris designed around your interests",
        experiences: [
          {
            id: "premium-custom-bespoke",
            name: "Bespoke African Adventure",
            duration: "Custom Duration",
            price: "From $6,500 per person",
            description: "Completely customized safari designed exactly how you envision it",
            highlights: [
              "Full customization",
              "Private guide",
              "Custom lodges",
              "Unique experiences",
              "Flexible dates",
            ],
            image: "/leopard-in-acacia-tree-at-dusk.jpg",
            destination: "Any African Destination",
            itineraryId: "premium-custom-bespoke",
          },
        ],
      },
      {
        id: "premium-extensions",
        name: "Options & Extensions",
        slug: "options-extensions",
        description: "Add specialized activities to enhance your safari",
        experiences: [
          {
            id: "premium-ext-balloon",
            name: "Hot Air Balloon Sunrise Experience",
            duration: "Full Day",
            price: "From $500 per person",
            description: "Witness the African landscape from above with champagne breakfast",
            highlights: ["Hot air balloon", "Sunrise views", "Champagne breakfast", "Photography", "Expert pilots"],
            image: "/african-sunset-landscape.jpg",
            destination: "All Regions",
            itineraryId: "premium-ext-balloon",
          },
          {
            id: "premium-ext-walk",
            name: "Walking Safari & Nature Immersion",
            duration: "Half Day",
            price: "From $300 per person",
            description: "Intimate ground-level exploration with expert trackers",
            highlights: ["Walking safari", "Expert trackers", "Flora & fauna", "Photography", "Nature immersion"],
            image: "/giraffe-herd-in-savanna-landscape.jpg",
            destination: "All Regions",
            itineraryId: "premium-ext-walk",
          },
        ],
      },
    ],
  },
  {
    id: "ultra-premium",
    name: "Ultra Premium Safari",
    slug: "ultra-premium-safari",
    description: "The ultimate African experience with unparalleled luxury and exclusive access",
    icon: "👑",
    subcategories: [
      {
        id: "ultra-signature",
        name: "Signature Safari",
        slug: "signature-safari",
        description: "Ultra-luxury multi-destination safaris with five-star accommodations",
        experiences: [
          {
            id: "ultra-sig-grand",
            name: "The Ultimate Grand Safari",
            duration: "15 Days",
            price: "From $8,500 per person",
            description: "Ultra-luxury multi-destination safari with five-star accommodations throughout",
            highlights: [
              "Five-star lodges",
              "Michelin-trained chefs",
              "Premium wines",
              "Concierge service",
              "Private airstrip",
            ],
            image: "/african-sunset-landscape.jpg",
            destination: "Kenya & Tanzania",
            itineraryId: "ultra-sig-grand",
          },
          {
            id: "ultra-sig-splendor",
            name: "African Splendour Ultra",
            duration: "17 Days",
            price: "From $9,800 per person",
            description: "East and Southern Africa's most exclusive ultra-luxury experience",
            highlights: ["Multiple countries", "Elite camps", "Private jets", "Premium everything", "Exclusive access"],
            image: "/zebra-migration-across-plains.jpg",
            destination: "Kenya, Tanzania & South Africa",
            itineraryId: "ultra-sig-splendor",
          },
        ],
      },
      {
        id: "ultra-private-sig",
        name: "Private Signature Safari",
        slug: "private-signature-safari",
        description: "Completely private ultra-luxury safari with exclusive lodge arrangements",
        experiences: [
          {
            id: "ultra-priv-ultimate",
            name: "The Ultimate Private Experience",
            duration: "14 Days",
            price: "From $12,000 per person",
            description: "Completely private ultra-luxury safari with exclusive lodge arrangements",
            highlights: [
              "Private everything",
              "Elite guides",
              "Unlimited activities",
              "Private chef",
              "Helicopter transfers",
            ],
            image: "/leopard-in-acacia-tree-at-dusk.jpg",
            destination: "Kenya & Tanzania",
            itineraryId: "ultra-priv-ultimate",
          },
          {
            id: "ultra-priv-hemingway",
            name: "The Hemingway Wing Ultra",
            duration: "16 Days",
            price: "From $11,500 per person",
            description: "Private ultra-luxury reinterpretation of the classic Hemingway safari",
            highlights: ["Historic route", "Luxury camps", "Private vehicles", "Expert guides", "Exclusive lodges"],
            image: "/giraffe-herd-in-savanna-landscape.jpg",
            destination: "Kenya & Tanzania",
            itineraryId: "ultra-priv-hemingway",
          },
        ],
      },
      {
        id: "ultra-custom",
        name: "Private Custom Safari",
        slug: "private-custom-safari",
        description: "Bespoke ultra-luxury experience crafted to exact specifications",
        experiences: [
          {
            id: "ultra-custom-elite",
            name: "Elite Bespoke Safari",
            duration: "Custom Duration",
            price: "From $10,000 per person",
            description: "Bespoke ultra-luxury experience crafted to your exact specifications",
            highlights: [
              "Complete customization",
              "Elite experiences",
              "Exclusive access",
              "Private teams",
              "Ultimate luxury",
            ],
            image: "/african-safari-lions-at-sunset.jpg",
            destination: "Any African Destination",
            itineraryId: "ultra-custom-elite",
          },
        ],
      },
      {
        id: "ultra-extensions",
        name: "Options & Extensions",
        slug: "options-extensions",
        description: "Premium add-ons to elevate your ultra-luxury experience",
        experiences: [
          {
            id: "ultra-ext-helicopter",
            name: "Helicopter Safari Tour",
            duration: "Full Day",
            price: "From $2,500 per person",
            description: "Exclusive helicopter tour of expansive wildlife areas",
            highlights: ["Helicopter", "Aerial views", "Remote areas", "Photography", "Exclusive access"],
            image: "/african-sunset-landscape.jpg",
            destination: "All Regions",
            itineraryId: "ultra-ext-helicopter",
          },
          {
            id: "ultra-ext-yacht",
            name: "Private Yacht Island Escape",
            duration: "3 Days",
            price: "From $3,500 per person",
            description: "Luxury island escape on private yacht with marine wildlife",
            highlights: ["Private yacht", "Island beaches", "Water activities", "Gourmet dining", "Ultimate luxury"],
            image: "/zebra-migration-across-plains.jpg",
            destination: "Coastal Regions",
            itineraryId: "ultra-ext-yacht",
          },
        ],
      },
    ],
  },
]

// Itinerary data for each specific experience
export interface ItineraryDay {
  day: string
  title: string
  description: string
  activities: string[]
  accommodation?: string
  meals?: string
}

export interface SafariItinerary {
  id: string
  experienceId: string
  title: string
  duration: string
  destination: string
  overview: string
  days: ItineraryDay[]
}

export const itineraries: Record<string, SafariItinerary> = {
  "premium-sig-grand": {
    id: "premium-sig-grand",
    experienceId: "premium-sig-grand",
    title: "The Grand Serengeti Journey",
    duration: "12 Days / 11 Nights",
    destination: "Kenya & Tanzania",
    overview:
      "Embark on an unforgettable journey through East Africa's most iconic destinations. Experience the thrill of game drives, witness the majesty of the Big Five, and connect with the soul of Africa.",
    days: [
      {
        day: "Day 1",
        title: "Depart Home",
        description: "Begin your African adventure with an international flight to Kenya",
        activities: ["Overnight flight", "International transfers"],
        meals: "In-flight meals",
      },
      {
        day: "Days 2 & 3",
        title: "Nairobi, Cultural Capital of Kenya",
        description: "Explore Kenya's vibrant capital and prepare for your safari adventure",
        activities: ["City tour", "Nairobi National Museum", "Visit local markets", "Safari briefing"],
        accommodation: "Luxury Nairobi hotel",
        meals: "Breakfast, lunch, and dinner",
      },
      {
        day: "Days 4 & 5",
        title: "Tsavo National Park - Big Five Territory",
        description: "Experience the famous 'Red Dust' reserve, favored stomping ground for the Big Five",
        activities: ["Dawn game drives", "Sunset game drives", "Nature walks", "Photography sessions"],
        accommodation: "Luxury safari lodge",
        meals: "All meals included",
      },
      {
        day: "Days 6 & 7",
        title: "Masai Mara - Icon of the Safari Cosmos",
        description: "Witness the legendary Masai Mara with its incredible wildlife abundance",
        activities: ["Multiple game drives", "Hot air balloon ride", "Cultural village visit", "Night game drive"],
        accommodation: "Luxury tented camp",
        meals: "All meals included",
      },
      {
        day: "Days 8 to 10",
        title: "Serengeti - Wonder of Africa",
        description: "Experience the vast Serengeti ecosystem during the dramatic migration season",
        activities: ["Extensive game drives", "Walking safaris", "Photography workshops", "Sundowner experiences"],
        accommodation: "Mobile safari camp",
        meals: "All meals included",
      },
      {
        day: "Day 11",
        title: "Return to Nairobi",
        description: "Travel back to Nairobi for your final night before departure",
        activities: ["Morning drive to airstrip", "Lunch and relaxation", "Souvenir shopping"],
        accommodation: "Luxury Nairobi hotel",
        meals: "Breakfast and dinner",
      },
      {
        day: "Day 12",
        title: "Homeward Bound",
        description: "Depart with memories that will last a lifetime",
        activities: ["Airport transfer", "International flight home"],
        meals: "In-flight meals",
      },
    ],
  },
  "premium-sig-mara": {
    id: "premium-sig-mara",
    experienceId: "premium-sig-mara",
    title: "Masai Mara Explorer",
    duration: "10 Days / 9 Nights",
    destination: "Kenya",
    overview:
      "Focused adventure on Africa's most iconic wildlife reserve. Witness the Masai Mara at its finest with concentrated game viewing and cultural immersion.",
    days: [
      {
        day: "Day 1",
        title: "Arrive in Kenya",
        description: "International flight to Nairobi",
        activities: ["Overnight flight", "Airport transfer"],
        accommodation: "Luxury hotel in Nairobi",
        meals: "Breakfast",
      },
      {
        day: "Days 2 & 3",
        title: "Nairobi Orientation",
        description: "Explore Kenya's capital and prepare for Masai Mara",
        activities: ["City tour", "Museum visit", "Market exploration", "Safari briefing"],
        accommodation: "Luxury Nairobi hotel",
        meals: "All meals",
      },
      {
        day: "Days 4 to 9",
        title: "Masai Mara - Prime Game Viewing",
        description: "Extensive exploration of Africa's most abundant wildlife destination",
        activities: [
          "Morning game drives",
          "Afternoon game drives",
          "Hot air balloon",
          "Walking safaris",
          "Cultural visit",
        ],
        accommodation: "Luxury safari lodge",
        meals: "All meals with premium beverages",
      },
      {
        day: "Day 10",
        title: "Return Home",
        description: "Flight back with unforgettable memories",
        activities: ["Morning flight", "Airport transfer", "International departure"],
        meals: "Breakfast and in-flight meals",
      },
    ],
  },
  "premium-priv-golden": {
    id: "premium-priv-golden",
    experienceId: "premium-priv-golden",
    title: "East Africa's Golden Savannahs",
    duration: "14 Days / 13 Nights",
    destination: "Kenya & Tanzania",
    overview:
      "Exclusive private group safari through Kenya and Tanzania with completely personalized itinerary adjustments based on real-time game viewing conditions and your preferences.",
    days: [
      {
        day: "Day 1",
        title: "Departure & Arrival",
        description: "Private airport transfer and welcome to Kenya",
        activities: ["Private airport pickup", "Hotel check-in", "Welcome briefing"],
        accommodation: "Five-star private villa",
        meals: "Welcome dinner",
      },
      {
        day: "Days 2 & 3",
        title: "Ngorongoro Crater - Natural Wonder",
        description: "Descend into the world's largest unfragmented caldera",
        activities: ["Crater game drives", "Walking tours", "Geological exploration", "Photography"],
        accommodation: "Luxury crater lodge",
        meals: "All meals with premium wines",
      },
      {
        day: "Days 4 to 6",
        title: "Serengeti - Private Access",
        description: "Exclusive access to prime wildlife viewing areas",
        activities: ["Flexible game drives", "Private bush dinners", "Nature walks", "Star-gazing"],
        accommodation: "Exclusive private camp",
        meals: "Gourmet meals with private chef",
      },
      {
        day: "Days 7 to 9",
        title: "Masai Mara - Peak Season",
        description: "Experience during its most dynamic wildlife period",
        activities: ["Early morning drives", "Helicopter tours", "Cultural immersion", "Photography"],
        accommodation: "Luxury private lodge",
        meals: "Gourmet prepared meals",
      },
      {
        day: "Days 10 & 11",
        title: "Relaxation & Wellness",
        description: "Unwind at luxury spa resort",
        activities: ["Spa treatments", "Yoga sessions", "Nature walks", "Reflection time"],
        accommodation: "Five-star wellness resort",
        meals: "Healthy gourmet cuisine",
      },
      {
        day: "Days 12 to 14",
        title: "Final Safari Days & Departure",
        description: "Last moments in Africa with optional activities",
        activities: ["Final game drives", "Shopping", "Farewells", "Departure"],
        accommodation: "Luxury hotel",
        meals: "All meals",
      },
    ],
  },
  "premium-priv-ngoro": {
    id: "premium-priv-ngoro",
    experienceId: "premium-priv-ngoro",
    title: "Ngorongoro Crater Private",
    duration: "9 Days / 8 Nights",
    destination: "Tanzania",
    overview:
      "Private safari focused on the world's largest intact caldera with expert naturalists and exclusive lodge access.",
    days: [
      {
        day: "Day 1",
        title: "Arrival in Tanzania",
        description: "Private welcome and transfer to accommodation",
        activities: ["Private transfer", "Check-in", "Welcome orientation"],
        accommodation: "Luxury lodge",
        meals: "Welcome dinner",
      },
      {
        day: "Days 2 to 7",
        title: "Ngorongoro Crater Exploration",
        description: "Multiple descents into the crater with expert guides",
        activities: ["Crater descents", "Walking safaris", "Wildlife photography", "Geological tours"],
        accommodation: "Crater rim lodge",
        meals: "All gourmet meals",
      },
      {
        day: "Day 8",
        title: "Cultural Experience",
        description: "Visit Maasai villages and cultural sites",
        activities: ["Village visits", "Cultural exchange", "Shopping", "Photography"],
        accommodation: "Luxury lodge",
        meals: "All meals",
      },
      {
        day: "Day 9",
        title: "Departure",
        description: "Return with lasting memories",
        activities: ["Final transfer", "Departure"],
        meals: "Breakfast and airport meals",
      },
    ],
  },
  "premium-custom-bespoke": {
    id: "premium-custom-bespoke",
    experienceId: "premium-custom-bespoke",
    title: "Bespoke African Adventure",
    duration: "Custom Duration",
    destination: "Any African Destination",
    overview:
      "Your vision becomes reality. Work with our expert team to design every detail of your perfect African safari adventure.",
    days: [
      {
        day: "Planning Phase",
        title: "Consultation & Design",
        description: "Work with safari specialists to design your itinerary",
        activities: ["Initial consultation", "Interest assessment", "Budget discussion", "Custom itinerary creation"],
        meals: "N/A",
      },
      {
        day: "Implementation",
        title: "Your Custom Safari",
        description: "Experience your uniquely designed adventure",
        activities: ["Custom activities", "Personalized guides", "Flexible schedule", "Real-time adjustments"],
        accommodation: "Custom selected lodges",
        meals: "All included",
      },
    ],
  },
  "premium-ext-balloon": {
    id: "premium-ext-balloon",
    experienceId: "premium-ext-balloon",
    title: "Hot Air Balloon Experience",
    duration: "Full Day",
    destination: "All Regions",
    overview: "Witness the African landscape from above with champagne breakfast and expert pilots.",
    days: [
      {
        day: "Early Morning",
        title: "Balloon Preparation",
        description: "Early wake-up and balloon preparation",
        activities: ["Early wake-up", "Safety briefing", "Balloon setup", "Photography preparation"],
        meals: "Early coffee and pastries",
      },
      {
        day: "Morning Flight",
        title: "Sunrise Balloon Safari",
        description: "Soar above African plains at sunrise",
        activities: [
          "Hot air balloon flight",
          "Aerial photography",
          "Wildlife viewing from above",
          "Sunrise experience",
        ],
        meals: "Champagne breakfast",
      },
    ],
  },
  "premium-ext-walk": {
    id: "premium-ext-walk",
    experienceId: "premium-ext-walk",
    title: "Walking Safari",
    duration: "Half Day",
    destination: "All Regions",
    overview: "Intimate ground-level exploration with expert trackers and naturalists.",
    days: [
      {
        day: "Morning or Afternoon",
        title: "Walking Safari Experience",
        description: "Immersive nature experience on foot",
        activities: ["Walking safari", "Animal tracking", "Flora identification", "Photography", "Expert narration"],
        meals: "Packed snacks and beverages",
      },
    ],
  },
  "ultra-sig-grand": {
    id: "ultra-sig-grand",
    experienceId: "ultra-sig-grand",
    title: "The Ultimate Grand Safari",
    duration: "15 Days / 14 Nights",
    destination: "Kenya & Tanzania",
    overview:
      "Ultra-luxury multi-destination safari with five-star accommodations, private chefs, and exclusive access throughout.",
    days: [
      {
        day: "Day 1",
        title: "Departure",
        description: "Begin your ultra-luxury African journey",
        activities: ["Private jet", "International flight", "Luxury transfers"],
        meals: "In-flight gourmet meals",
      },
      {
        day: "Days 2 to 15",
        title: "Multi-Destination Ultra Experience",
        description: "Explore East Africa's finest with five-star everything",
        activities: [
          "Luxury game drives",
          "Helicopter tours",
          "Private dinners",
          "Exclusive experiences",
          "Photography",
        ],
        accommodation: "Five-star luxury lodges",
        meals: "Michelin-trained chef preparations",
      },
    ],
  },
  "ultra-sig-splendor": {
    id: "ultra-sig-splendor",
    experienceId: "ultra-sig-splendor",
    title: "African Splendour Ultra",
    duration: "17 Days / 16 Nights",
    destination: "Kenya, Tanzania & South Africa",
    overview: "East and Southern Africa's most exclusive ultra-luxury experience covering multiple countries.",
    days: [
      {
        day: "Day 1",
        title: "Private Jet Departure",
        description: "Ultra-luxury journey begins",
        activities: ["Private aviation", "Elite transfers", "Welcome reception"],
        accommodation: "Ultra-luxury suite",
        meals: "Gourmet in-flight service",
      },
      {
        day: "Days 2 to 17",
        title: "Multi-Country Ultra Safari",
        description: "Experience the best of East and Southern Africa",
        activities: ["Exclusive access", "Private teams", "Helicopter services", "Premium experiences"],
        accommodation: "Ultra-luxury properties",
        meals: "Elite chef services",
      },
    ],
  },
  "ultra-priv-ultimate": {
    id: "ultra-priv-ultimate",
    experienceId: "ultra-priv-ultimate",
    title: "The Ultimate Private Experience",
    duration: "14 Days / 13 Nights",
    destination: "Kenya & Tanzania",
    overview: "Completely private ultra-luxury safari with exclusive lodge arrangements and unlimited customization.",
    days: [
      {
        day: "Day 1",
        title: "Private Arrival",
        description: "Ultra-exclusive welcome to Africa",
        activities: ["Private aviation", "Exclusive transfers", "VIP reception"],
        accommodation: "Ultra-luxury private villa",
        meals: "Welcome dinner by private chef",
      },
      {
        day: "Days 2 to 13",
        title: "Your Exclusive Adventure",
        description: "Completely bespoke ultra-luxury experience",
        activities: ["Unlimited activities", "Private guides", "Helicopter tours", "Exclusive experiences"],
        accommodation: "Ultra-luxury exclusive lodges",
        meals: "Private chef preparations",
      },
      {
        day: "Day 14",
        title: "Departure",
        description: "Return with unforgettable memories",
        activities: ["Private aviation", "Luxury transfers"],
        meals: "Departure gourmet service",
      },
    ],
  },
  "ultra-priv-hemingway": {
    id: "ultra-priv-hemingway",
    experienceId: "ultra-priv-hemingway",
    title: "The Hemingway Wing Ultra",
    duration: "16 Days / 15 Nights",
    destination: "Kenya & Tanzania",
    overview: "Private ultra-luxury reinterpretation of the classic Hemingway safari route.",
    days: [
      {
        day: "Day 1",
        title: "Ultra Arrival",
        description: "Begin your legendary journey",
        activities: ["Private transfer", "Welcome briefing"],
        accommodation: "Ultra-luxury hotel",
        meals: "Welcome dinner",
      },
      {
        day: "Days 2 to 15",
        title: "Hemingway's Route in Ultra-Luxury",
        description: "Follow the historic path in ultimate luxury",
        activities: ["Historic sites", "Luxury camps", "Private guides", "Premium experiences"],
        accommodation: "Ultra-luxury lodges",
        meals: "Gourmet private chef",
      },
      {
        day: "Day 16",
        title: "Farewell",
        description: "Depart with legendary memories",
        activities: ["Final experiences", "Departure"],
        meals: "Departure service",
      },
    ],
  },
  "ultra-custom-elite": {
    id: "ultra-custom-elite",
    experienceId: "ultra-custom-elite",
    title: "Elite Bespoke Safari",
    duration: "Custom Duration",
    destination: "Any African Destination",
    overview: "The ultimate bespoke experience - absolute customization with unlimited resources and possibilities.",
    days: [
      {
        day: "Planning",
        title: "Elite Consultation",
        description: "Work with elite safari designers",
        activities: ["Exclusive consultation", "Unlimited options", "Bespoke planning"],
        meals: "N/A",
      },
      {
        day: "Experience",
        title: "Your Elite Adventure",
        description: "Experience the extraordinary",
        activities: ["Exclusive everything", "Private teams", "Unlimited access"],
        accommodation: "Elite properties",
        meals: "Elite culinary experiences",
      },
    ],
  },
  "ultra-ext-helicopter": {
    id: "ultra-ext-helicopter",
    experienceId: "ultra-ext-helicopter",
    title: "Helicopter Safari",
    duration: "Full Day",
    destination: "All Regions",
    overview: "Exclusive helicopter tour of expansive wildlife areas with expert narration.",
    days: [
      {
        day: "Full Day",
        title: "Helicopter Safari Adventure",
        description: "Aerial exploration of African wilderness",
        activities: ["Helicopter flight", "Aerial photography", "Remote area access", "Expert commentary"],
        accommodation: "Return to base",
        meals: "Gourmet packed lunch",
      },
    ],
  },
  "ultra-ext-yacht": {
    id: "ultra-ext-yacht",
    experienceId: "ultra-ext-yacht",
    title: "Private Yacht Escape",
    duration: "3 Days",
    destination: "Coastal Regions",
    overview: "Luxury island escape on private yacht with marine wildlife and water activities.",
    days: [
      {
        day: "Day 1",
        title: "Yacht Embarkation",
        description: "Board your private luxury yacht",
        activities: ["Yacht boarding", "Ocean orientation", "Welcome reception"],
        accommodation: "Luxury yacht suite",
        meals: "Gourmet dinner",
      },
      {
        day: "Day 2",
        title: "Island & Ocean Activities",
        description: "Water activities and marine wildlife",
        activities: ["Snorkeling", "Water sports", "Island exploration", "Whale watching"],
        accommodation: "Luxury yacht",
        meals: "Gourmet meals",
      },
      {
        day: "Day 3",
        title: "Return to Shore",
        description: "Return with ocean memories",
        activities: ["Final activities", "Disembarkation"],
        meals: "Departure service",
      },
    ],
  },
}

// Helper function to get all unique experiences across all tiers
export function getAllExperiences() {
  const experiences: (SpecificExperience & { tier: string; subcategory: string })[] = []

  packageTiers.forEach((tier) => {
    tier.subcategories.forEach((subcat) => {
      subcat.experiences.forEach((exp) => {
        experiences.push({
          ...exp,
          tier: tier.name,
          subcategory: subcat.name,
        })
      })
    })
  })

  return experiences
}

export const experiences = packageTiers
