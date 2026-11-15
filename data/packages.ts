export type BookingPackage = {
  id: string
  name: string
  tagline: string
  description: string
  includes: string[]
  featured?: boolean
  badge?: string
}

export const packages: BookingPackage[] = [
  {
    id: 'priest-only',
    name: 'Priest Only',
    tagline: 'You arrange the materials',
    description:
      'For families who prefer to arrange their own pooja materials. Dandalu Ayyagaru arrives with all required knowledge, samagri knowledge, and conducts the pooja fully.',
    includes: [
      'Certified priest service',
      'Full ritual conduct',
      'Sankalpam & mantra recitation',
      'Pre-pooja materials checklist',
      'Guidance call before the event',
    ],
  },
  {
    id: 'priest-materials',
    name: 'Priest + Pooja Materials',
    tagline: 'Priest with essential samagri',
    description:
      'Priest service combined with the essential ritual materials — certified, unadulterated, and delivered fresh.',
    includes: [
      'Everything in Priest Only',
      'Essential pooja samagri kit',
      'Certified kumkum & turmeric',
      'Sacred raksha thread',
      'Havan powders where applicable',
      'Platform-procured, verified purity',
    ],
    badge: 'Popular',
  },
  {
    id: 'complete-pooja',
    name: 'Complete Pooja Package',
    tagline: 'Zero hassle — all included',
    description:
      'A comprehensive arrangement where everything is taken care of. Fresh flowers, fruits, samagri, and all ritual requirements — coordinated and delivered.',
    includes: [
      'Everything in Priest + Materials',
      'Fresh seasonal flowers',
      'Coconuts & fruits',
      'Pure cow ghee (A2)',
      'Camphor & sandalwood paste',
      'All occasion-specific materials',
      'Full logistics coordination',
    ],
    featured: true,
    badge: 'Recommended',
  },
  {
    id: 'premium-experience',
    name: 'Premium Experience',
    tagline: 'Elevated, end-to-end service',
    description:
      'The most comprehensive arrangement — for those who want every detail handled with care. Includes premium materials, bilingual narration, and dedicated coordination.',
    includes: [
      'Everything in Complete Package',
      'Premium brass ritual vessels',
      'Bilingual Sanskrit + Telugu narration',
      'Family sankalpam keepsake',
      'Post-ritual sanctification',
      'Dedicated concierge support',
      'Free rescheduling (up to 48 hrs)',
    ],
  },
]
