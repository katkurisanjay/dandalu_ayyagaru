'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'

const steps = [
  {
    number: '01',
    title: 'Choose your pooja',
    description:
      'Browse our catalog of authentic Vedic rituals. Pick the one that matches your occasion.',
    icon: '🕉️',
  },
  {
    number: '02',
    title: 'Pick your date & time',
    description:
      'Select an auspicious date and time window that works for your family and the muhurtham.',
    icon: '📅',
  },
  {
    number: '03',
    title: 'Tell us where',
    description:
      'Enter your home, new home, function hall, or any venue. We come to you.',
    icon: '📍',
  },
  {
    number: '04',
    title: 'Choose your package + materials',
    description:
      'Decide how much you want us to handle — from priest-only to a completely arranged pooja kit.',
    icon: '📦',
  },
  {
    number: '05',
    title: 'Book with confidence',
    description:
      'Confirm your booking. No last-minute surprises. No "Pandit ji is on the way" mystery.',
    icon: '✅',
  },
]

export default function HowItWorks() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="py-20 lg:py-28 bg-[#FFFDF7]"
      aria-label="How it works"
    >
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16"
        >
          <div>
            <span className="inline-block text-xs font-semibold text-[#F97316] uppercase tracking-widest mb-3">
              The Masterless Process
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[44px] text-[#171717] leading-tight tracking-tight text-balance">
              From "We Need a Pooja"<br className="hidden lg:block" />
              to "It's Taken Care Of."
            </h2>
          </div>
          <p className="text-[#57534E] text-sm lg:text-base max-w-xs lg:text-right text-pretty">
            No endless phone tag. No "Pandit ji is on the way" suspense.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-8 left-[calc(10%+20px)] right-[calc(10%+20px)] h-px bg-[#E7E5E4]"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="relative flex flex-col items-start lg:items-center text-left lg:text-center"
              >
                {/* Step number circle */}
                <div className="relative mb-5">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-[#E7E5E4] flex items-center justify-center shadow-[0_2px_8px_rgba(23,23,23,0.06)] group-hover:border-[#F97316] transition-colors duration-300">
                    <span className="text-2xl" aria-hidden="true">{step.icon}</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#F97316] flex items-center justify-center">
                    <span className="text-[9px] font-bold text-white">{step.number}</span>
                  </div>
                </div>

                <h3 className="font-display font-semibold text-base text-[#171717] mb-2 leading-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-[#57534E] leading-relaxed text-pretty">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <div className="p-4 rounded-2xl bg-[#FFF7ED] border border-[#FDBA74]/30 text-center sm:text-left max-w-lg">
            <p className="text-sm text-[#57534E] italic">
              "Not sure what you need? Start with the pooja. We'll guide you through the rest."
            </p>
          </div>
          <button
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="shrink-0 h-12 px-7 rounded-full bg-[#F97316] text-white text-sm font-semibold hover:bg-[#EA580C] transition-colors duration-200 shadow-[0_2px_8px_rgba(249,115,22,0.25)] hover:shadow-[0_4px_16px_rgba(249,115,22,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2"
          >
            Start Booking
          </button>
        </motion.div>
      </Container>
    </section>
  )
}
