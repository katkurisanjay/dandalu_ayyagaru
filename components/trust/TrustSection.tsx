'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Container from '@/components/ui/Container'

const trustItems = [
  {
    icon: '🛡️',
    title: 'Certified Vedic Purohit',
    description:
      'Each priest undergoes formal Veda Patashala certification, comprehensive scriptural verification, and lineage validation. No compromises on Vedic authenticity.',
  },
  {
    icon: '💎',
    title: 'Completely Transparent Pricing',
    description:
      'Zero ambiguity. Complete dakshina and materials amounts are communicated without undisclosed demands on the ceremony day.',
  },
  {
    icon: '📦',
    title: 'Zero Supply Scramble',
    description:
      'Pre-sourced, certified organic samagri delivered directly to your venue. Priest arrives 20 minutes early with all materials sealed and ready for execution.',
  },
  {
    icon: '⏰',
    title: 'Punctual Arrival Guarantee',
    description:
      'Our priests follow a strict 20-minute pre-arrival protocol. We coordinate the priest and samagri arrival, and around-day timing with absolute precision.',
  },
  {
    icon: '🙏',
    title: 'Custom Family Traditions',
    description:
      'Telugu, Sanskrit, and bilingual recitation for customary, regional customs, and the ceremony is adapted with absolute proximity to your heritage.',
  },
  {
    icon: '💬',
    title: 'Dedicated Concierge Desk',
    description:
      'From birth-chart consultations to last-minute changes, our team of ritual directors, schedulers, and special-request managers is here for you.',
  },
]

export default function TrustSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="trust"
      ref={ref}
      className="py-20 lg:py-28 bg-white"
      aria-label="Trust and guarantees"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold text-[#F97316] uppercase tracking-widest mb-3">
            The Dandalu Standard
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[44px] text-[#171717] leading-tight tracking-tight mb-4 text-balance">
            Traditional Service.<br />Modern Peace of Mind.
          </h2>
          <p className="text-[#57534E] text-base max-w-xl mx-auto text-pretty">
            We built this platform to honor the quality of traditions while weaving common everyday stress.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.07,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="p-6 rounded-2xl bg-[#FFFDF7] border border-[#E7E5E4] hover:border-[#FDBA74]/50 hover:shadow-[0_4px_16px_rgba(23,23,23,0.06)] transition-all duration-[220ms]"
            >
              <div className="w-11 h-11 rounded-xl bg-[#FFF7ED] border border-[#FDBA74]/30 flex items-center justify-center text-2xl mb-4" aria-hidden="true">
                {item.icon}
              </div>
              <h3 className="font-display font-semibold text-base text-[#171717] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#57534E] leading-relaxed text-pretty">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom guarantee strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-12 rounded-2xl bg-gradient-to-r from-[#FFF7ED] to-[#FFFDF7] border border-[#FDBA74]/30 p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="text-center sm:text-left">
            <p className="font-display font-semibold text-lg text-[#171717] mb-1">
              A meaningful ritual deserves a reliable experience.
            </p>
            <p className="text-sm text-[#57534E]">
              Verified priest · Clear booking flow · Transparent packages · Material support · Secure payment
            </p>
          </div>
          <button
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="shrink-0 h-12 px-7 rounded-full bg-[#F97316] text-white font-semibold text-sm hover:bg-[#EA580C] transition-colors duration-200 shadow-[0_2px_8px_rgba(249,115,22,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2"
          >
            Book with Confidence
          </button>
        </motion.div>
      </Container>
    </section>
  )
}
