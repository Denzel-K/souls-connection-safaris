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
    id: "kenya",
    name: "Kenya",
    slug: "kenya",
    shortDescription: "Home to iconic wildlife and the legendary Masai Mara",
    description:
      "Kenya is the jewel of East Africa, renowned for its abundance of wildlife, stunning landscapes, and rich cultural heritage. From the Great Migration in the Masai Mara to the snow-capped peaks of Mount Kenya, this country offers unforgettable safari experiences.",
    image: "/kenya-safari-landscape-with-masai-giraffes-and-aca.jpg",
    highlights: [
      "Masai Mara National Reserve",
      "Mount Kenya trekking",
      "Great Migration",
      "Nairobi National Museum",
      "Traditional Maasai villages",
    ],
    bestTime: "June to September (Migration), December to March",
    wildlife: ["Lions", "Elephants", "Giraffes", "Zebras", "Wildebeest", "Leopards", "Rhinos"],
    activities: ["Game drives", "Hot air balloon safari", "Walking safaris", "Cultural tours", "Photography"],
  },
  {
    id: "tanzania",
    name: "Tanzania",
    slug: "tanzania",
    shortDescription: "Home to Mount Kilimanjaro and the vast Serengeti ecosystem",
    description:
      "Tanzania offers some of Africa's most spectacular wildlife viewing opportunities. The Serengeti's endless plains, the Ngorongoro Crater's dramatic caldera, and the slopes of Mount Kilimanjaro create an unforgettable backdrop for your safari adventure.",
    image: "/tanzania-serengeti-savanna-with-zebra-herd-and-mou.jpg",
    highlights: [
      "Serengeti National Park",
      "Ngorongoro Crater",
      "Mount Kilimanjaro",
      "Zanzibar beaches",
      "Tarangire National Park",
    ],
    bestTime: "June to October, November to March",
    wildlife: ["Lions", "Elephants", "Zebras", "Wildebeest", "Cheetahs", "Cape buffalo", "Hyenas"],
    activities: ["Game drives", "Crater descent", "Mountain climbing", "Beach relaxation", "Cultural experiences"],
  },
  {
    id: "botswana",
    name: "Botswana",
    slug: "botswana",
    shortDescription: "Known for pristine wilderness and the Okavango Delta",
    description:
      "Botswana is a safari enthusiast's paradise, featuring diverse ecosystems including the world-renowned Okavango Delta. With low tourist density and exceptional wildlife viewing, Botswana offers exclusive and intimate safari experiences.",
    image: "/botswana-okavango-delta-water-channels-with-elepha.jpg",
    highlights: [
      "Okavango Delta",
      "Chobe National Park",
      "Moremi Game Reserve",
      "Kalahari Desert",
      "Makgadikgadi Pans",
    ],
    bestTime: "May to September (dry season), November to March",
    wildlife: ["Elephants", "Lions", "Buffalo", "Hippos", "Leopards", "African wild dogs", "Hyenas"],
    activities: ["Mokoro canoe safaris", "Game drives", "Walking safaris", "Bird watching", "Photography"],
  },
  {
    id: "south-africa",
    name: "South Africa",
    slug: "south-africa",
    shortDescription: "Premier destination featuring the Kruger National Park and Cape Town",
    description:
      "South Africa combines world-class safari experiences with cosmopolitan cities and stunning coastal scenery. The Kruger National Park offers some of Africa's most reliable Big Five viewing, while Cape Town provides cultural richness and natural beauty.",
    image: "/south-africa-kruger-national-park-sunset-with-big-.jpg",
    highlights: [
      "Kruger National Park",
      "Cape Town and Table Mountain",
      "Garden Route",
      "Winelands",
      "Drakensberg Mountains",
    ],
    bestTime: "May to September (dry season), November to March",
    wildlife: ["Lions", "Elephants", "Rhinos", "Leopards", "Buffalo", "Giraffe", "Hyena"],
    activities: ["Game drives", "City tours", "Wine tasting", "Hiking", "Beach activities"],
  },
  {
    id: "rwanda",
    name: "Rwanda",
    slug: "rwanda",
    shortDescription: "The land of a thousand hills and endangered mountain gorillas",
    description:
      "Rwanda is a unique and transformative safari destination, famous for its mountain gorilla trekking experiences. Combined with lush landscapes, terraced hillsides, and vibrant culture, Rwanda offers an unparalleled wildlife adventure.",
    image: "/rwanda-mountain-gorilla-in-misty-forest-with-veget.jpg",
    highlights: [
      "Volcanoes National Park",
      "Mountain gorilla trekking",
      "Lake Kivu",
      "Nyungwe Forest",
      "Kigali city tours",
    ],
    bestTime: "June to September, December to February",
    wildlife: ["Mountain gorillas", "Golden monkeys", "Chimpanzees", "Forest elephants", "Buffalo"],
    activities: ["Gorilla trekking", "Hiking", "Bird watching", "Cultural tours", "Lake activities"],
  },
  {
    id: "uganda",
    name: "Uganda",
    slug: "uganda",
    shortDescription: "The Pearl of Africa with diverse wildlife and landscapes",
    description:
      "Uganda is an incredibly biodiverse destination offering everything from mountain gorillas and chimpanzee trekking to traditional savanna safaris. Its lush landscapes and varied ecosystems make it one of Africa's most rewarding safari destinations.",
    image: "/uganda-queen-elizabeth-national-park-with-tree-cli.jpg",
    highlights: [
      "Bwindi Impenetrable National Park",
      "Queen Elizabeth National Park",
      "Kibale Forest",
      "Rwenzori Mountains",
      "Lake Victoria",
    ],
    bestTime: "June to August, December to February",
    wildlife: ["Mountain gorillas", "Chimpanzees", "Lions", "Elephants", "Buffalo", "Hippos"],
    activities: ["Gorilla trekking", "Chimpanzee tracking", "Game drives", "Boat safaris", "Hiking"],
  },
]

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug)
}
