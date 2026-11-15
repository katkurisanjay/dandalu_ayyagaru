'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Container from '@/components/ui/Container'
import PoojaCard from './PoojaCard'
import { poojas } from '@/data/poojas'
import { staggerContainer, fadeInUp } from '@/lib/animations'

export default function PoojaGrid() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="poojas"
      ref={ref}
      className="py-20 lg:py-28 bg-white"
      aria-label="Pooja services"
    >
      <Container>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold text-[#F97316] uppercase tracking-widest mb-3">
            Ritual Portfolio
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[44px] text-[#171717] leading-tight tracking-tight mb-4 text-balance">
            Whatever the Occasion,<br className="hidden lg:block" />
            Begin with the Right Ritual.
          </h2>
          <p className="text-[#57534E] text-base lg:text-lg max-w-xl mx-auto text-pretty">
            Every ritual conducted strictly according to Vedic scriptures with complete pronunciation care and explanation.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          role="list"
        >
          {poojas.map((pooja, index) => (
            <PoojaCard key={pooja.id} pooja={pooja} index={index} />
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
