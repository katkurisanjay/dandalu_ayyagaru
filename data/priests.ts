export type Priest = {
  id: string
  name: string
  title: string
  verified: boolean
  image: string
  languages: string[]
  specializations: string[]
  experienceYears?: number
  tradition?: string
  rating?: number
  bio: string
  credentials: string[]
  featured: boolean
}

export const priests: Priest[] = [
  {
    id: 'dandalu-ayyagaru',
    name: 'Dandalu Ayyagaru',
    title: 'Vedic Purohit',
    verified: true,
    image: '/images/priest-dandalu-ayyagaru.jpg',
    languages: ['Telugu', 'Sanskrit', 'Hindi', 'English'],
    specializations: [
      'Gruha Pravesham',
      'Satyanarayana Vratam',
      'Ganapathi Homam',
      'Navagraha Homam',
      'Wedding Rituals',
      'Naming Ceremonies',
    ],
    tradition: 'Rigvedic',
    bio: 'Dandalu Ayyagaru is a qualified Vedic Purohit trained in the classical Rigvedic tradition. Conducting every pooja with precision, care, and a deep commitment to authentic ritual practice, he brings both traditional knowledge and modern reliability to every family occasion.',
    credentials: [
      'Veda Patashala Certified',
      'Background Verified',
      'Rigvedic Tradition',
    ],
    featured: true,
  },
]
