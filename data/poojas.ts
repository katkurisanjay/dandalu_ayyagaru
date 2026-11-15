export type Pooja = {
  id: string
  name: string
  slug: string
  shortName: string
  description: string
  shortDescription: string
  image: string
  icon: string
  category: string
  duration: string
  occasions: string[]
  featured?: boolean
  badge?: string
}

export const poojas: Pooja[] = [
  {
    id: 'homam-havan',
    name: 'Homam / Havan',
    slug: 'homam-havan',
    shortName: 'Homam',
    description:
      'A sacred fire ritual performed to invoke divine blessings, remove negative energies, and promote prosperity and well-being. Conducted with authentic Vedic mantras and pure organic materials.',
    shortDescription: 'Sacred fire ritual for blessings, prosperity, and removal of obstacles.',
    image: '/images/pooja-homam.webp',
    icon: '🔥',
    category: 'Shanti & Homams',
    duration: '3–4 hrs',
    occasions: ['New beginnings', 'Business launch', 'Obstacle removal'],
    featured: true,
    badge: 'Most Popular',
  },
  {
    id: 'ganapathi-pooja',
    name: 'Ganapathi Pooja',
    slug: 'ganapathi-pooja',
    shortName: 'Ganapathi Pooja',
    description:
      'Begin every auspicious occasion with the blessings of Lord Ganapathi. This pooja ensures the removal of obstacles and invites divine grace for new beginnings.',
    shortDescription: 'Invoke Lord Ganapathi for auspicious beginnings and obstacle removal.',
    image: '/images/pooja-ganapathi.webp',
    icon: '🐘',
    category: 'Grihuda & Home Blessings',
    duration: '1–2 hrs',
    occasions: ['Any auspicious occasion', 'New home', 'Before any major ritual'],
    featured: true,
  },
  {
    id: 'satyanarayana-pooja',
    name: 'Satyanarayana Pooja',
    slug: 'satyanarayana-pooja',
    shortName: 'Satyanarayana Vratam',
    description:
      'A deeply revered Vratam dedicated to Lord Vishnu in his form as Satyanarayana, performed for gratitude, prosperity, and family well-being.',
    shortDescription: 'Family pooja for prosperity, gratitude, and divine grace.',
    image: '/images/pooja-satyanarayana.webp',
    icon: '🪔',
    category: 'Grihuda & Home Blessings',
    duration: '2.5–3 hrs',
    occasions: ['Family occasions', 'Gratitude', 'New home', 'Pournami'],
    featured: true,
  },
  {
    id: 'gruha-pravesham',
    name: 'Gruha Pravesham',
    slug: 'gruha-pravesham',
    shortName: 'Gruha Pravesham',
    description:
      'Consecrate your new home with divine energies. A complete sanctification ceremony performed with Vastu Purusha, Navagraha, Ganapathi, and Lakshmi invocations.',
    shortDescription: 'Complete sanctification for your new home.',
    image: '/images/pooja-gruha-pravesham.webp',
    icon: '🏠',
    category: 'Grihuda & Home Blessings',
    duration: '3–4 hrs',
    occasions: ['New home entry', 'House warming'],
    featured: true,
  },
  {
    id: 'wedding-rituals',
    name: 'Wedding Rituals',
    slug: 'wedding-rituals',
    shortName: 'Vivaha Sanskar',
    description:
      'Sacred matrimonial ceremonies conducted with full Vedic tradition, including Muhurtham alignment, Saptapadi, and family lineage sankalpam.',
    shortDescription: 'Vedic marriage ceremonies with complete traditional rituals.',
    image: '/images/pooja-wedding.webp',
    icon: '💐',
    category: 'Vivaha & Sanskaras',
    duration: '4–6 hrs',
    occasions: ['Wedding', 'Engagement', 'Muhurtham'],
  },
  {
    id: 'naming-ceremony',
    name: 'Naming Ceremony',
    slug: 'naming-ceremony',
    shortName: 'Namakaranam',
    description:
      'The sacred ritual of giving a name to a newborn, performed according to birth star, Nakshatra, and family tradition to bestow divine blessings on the child.',
    shortDescription: 'Sacred naming ceremony performed according to Nakshatra and tradition.',
    image: '/images/pooja-naming-ceremony.webp',
    icon: '👶',
    category: 'Vivaha & Sanskaras',
    duration: '1.5–2 hrs',
    occasions: ['Newborn naming', '11th day ceremony'],
  },
  {
    id: 'vastu-pooja',
    name: 'Vastu Pooja',
    slug: 'vastu-pooja',
    shortName: 'Vastu Shanti',
    description:
      'Harmonize the five elements within your home or workspace. Vastu Shanti corrects imbalances and establishes positive energies at the sacred four corners.',
    shortDescription: 'Harmonize elemental forces for peace and prosperity in your space.',
    image: '/images/pooja-vastu.webp',
    icon: '🧭',
    category: 'Grihuda & Home Blessings',
    duration: '2–3 hrs',
    occasions: ['New home', 'Renovated space', 'Business premises'],
  },
  {
    id: 'funeral-last-rites',
    name: 'Funeral / Last Rites',
    slug: 'funeral-last-rites',
    shortName: 'Antima Sanskar',
    description:
      'Conducted with the utmost reverence, respect, and adherence to tradition. The final rites are performed according to family lineage and regional customs.',
    shortDescription: 'Reverent and tradition-faithful final rites for the departed.',
    image: '/images/pooja-funeral.webp',
    icon: '🕯️',
    category: 'Antima Sanskar',
    duration: 'As required',
    occasions: ['Antima Samskar', 'Shraddha', 'Annual ceremony'],
  },
  {
    id: 'festival-poojas',
    name: 'Festival Poojas',
    slug: 'festival-poojas',
    shortName: 'Festival Poojas',
    description:
      'Celebrate sacred festivals with a qualified priest conducting the traditional rituals — from Navaratri to Diwali, Ugadi to Karthika Masam.',
    shortDescription: 'Traditional festival celebrations with full ritual conduct.',
    image: '/images/pooja-festival.webp',
    icon: '🎊',
    category: 'Festival & Vratas',
    duration: '1–3 hrs',
    occasions: ['Navaratri', 'Diwali', 'Ugadi', 'Karthika Masam', 'Any festival'],
  },
  {
    id: 'other-services',
    name: 'Other Services',
    slug: 'other-services',
    shortName: 'Custom Ritual',
    description:
      'Every family tradition is unique. If you need a specific pooja, ancestral ceremony, or regional ritual not listed, we can arrange it with proper consultation.',
    shortDescription: 'Custom rituals tailored to your family tradition and needs.',
    image: '/images/pooja-homam.webp',
    icon: '🙏',
    category: 'Custom',
    duration: 'As required',
    occasions: ['Custom rituals', 'Ancestral ceremonies', 'Regional traditions'],
  },
]
