export type PoojaMaterialCategory = {
  id: string
  name: string
  icon: string
  items: PoojaMaterial[]
}

export type PoojaMaterial = {
  id: string
  name: string
  description: string
  category: string
  image?: string
  included: boolean
  certified?: boolean
}

export const materialCategories: PoojaMaterialCategory[] = [
  {
    id: 'essential',
    name: 'Essential Materials',
    icon: '🪔',
    items: [
      {
        id: 'kumkum',
        name: 'Kumkum & Turmeric',
        description: 'Certified, unadulterated, pure-grade kumkum and turmeric',
        category: 'essential',
        included: true,
        certified: true,
      },
      {
        id: 'camphor',
        name: 'Camphor & Sandalwood Paste',
        description: 'Pure camphor tablets and fresh sandalwood paste',
        category: 'essential',
        included: true,
        certified: true,
      },
      {
        id: 'incense',
        name: 'Incense & Agarbathi',
        description: 'Traditional incense sticks for the pooja atmosphere',
        category: 'essential',
        included: true,
      },
      {
        id: 'sacred-thread',
        name: 'Sacred Raksha Thread',
        description: 'Cotton raksha sutra for sankalpam and ritual binding',
        category: 'essential',
        included: true,
        certified: true,
      },
    ],
  },
  {
    id: 'homam',
    name: 'Homam Materials',
    icon: '🔥',
    items: [
      {
        id: 'ghee',
        name: 'Pure Cow Ghee (A2)',
        description: 'Unadulterated A2 desi cow bilona ghee — the foundation of every homam',
        category: 'homam',
        included: true,
        certified: true,
      },
      {
        id: 'samidha',
        name: 'Sacred Samidhas & Havan Herbs',
        description: 'Sun-dried bilwa, mango wood & 9 sacred grains for Navagrahas',
        category: 'homam',
        included: true,
      },
      {
        id: 'havan-powder',
        name: 'Havan Powder & Samagri',
        description: 'Occasion-specific havan samagri blend',
        category: 'homam',
        included: true,
      },
    ],
  },
  {
    id: 'flowers',
    name: 'Flowers & Garlands',
    icon: '🌸',
    items: [
      {
        id: 'fresh-flowers',
        name: 'Fresh Tropical Flora & Coconuts',
        description: 'Jasmine, marigold, lotus petals & 5 auspicious coconuts with betel leaves',
        category: 'flowers',
        included: true,
      },
      {
        id: 'tulasi',
        name: 'Tulasi & Sacred Leaves',
        description: 'Fresh tulasi, bilwa, and mango leaves for abhishekam',
        category: 'flowers',
        included: true,
      },
    ],
  },
  {
    id: 'fruits',
    name: 'Fruits & Offerings',
    icon: '🍌',
    items: [
      {
        id: 'naivedyam',
        name: 'Naivedyam & Seasonal Fruits',
        description: 'Fresh seasonal fruits arranged as naivedyam offering',
        category: 'fruits',
        included: true,
      },
      {
        id: 'pancha-amrit',
        name: 'Pancha Amrit',
        description: 'Milk, curd, honey, sugar, and ghee for abhishekam',
        category: 'fruits',
        included: true,
        certified: true,
      },
    ],
  },
  {
    id: 'traditional',
    name: 'Traditional Items',
    icon: '🏺',
    items: [
      {
        id: 'kalash',
        name: 'Sacred Kalash & Vessels',
        description: 'Ceremonial copper kalash and pooja vessels',
        category: 'traditional',
        included: false,
      },
      {
        id: 'deepam',
        name: 'Deepam & Diya',
        description: 'Traditional oil lamps for the pooja ambiance',
        category: 'traditional',
        included: true,
      },
    ],
  },
]
