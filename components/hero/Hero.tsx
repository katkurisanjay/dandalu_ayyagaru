'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import HeroBookingPreview from './HeroBookingPreview'
import { fadeInUp, fadeIn, staggerContainer, staggerItem } from '@/lib/animations'

const trustItems = [
  'Verified Priest',
  'Transparent Pricing',
  'Secure Booking',
  'Pooja Materials Available',
]

export default function Hero() {
  return (
    <section
      className="relative min-h-screen pt-16 sm:pt-20 lg:pt-24 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#FFFDF7]" />
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(249,115,22,0.07) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 80% 80%, rgba(212,167,44,0.05) 0%, transparent 50%)',
        }}
      />

      {/* Subtle geometric accent */}
      <div
        className="absolute top-24 right-[5%] w-64 h-64 opacity-[0.04] pointer-events-none"
        aria-hidden="true"
        style={{
          background: `url("data:image/svg+xml,%3Csvg width='256' height='256' viewBox='0 0 256 256' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='128' cy='128' r='120' stroke='%23F97316' stroke-width='1'/%3E%3Ccircle cx='128' cy='128' r='80' stroke='%23F97316' stroke-width='1'/%3E%3Ccircle cx='128' cy='128' r='40' stroke='%23F97316' stroke-width='1'/%3E%3Cline x1='8' y1='128' x2='248' y2='128' stroke='%23F97316' stroke-width='0.5'/%3E%3Cline x1='128' y1='8' x2='128' y2='248' stroke='%23F97316' stroke-width='0.5'/%3E%3Cline x1='42' y1='42' x2='214' y2='214' stroke='%23F97316' stroke-width='0.5'/%3E%3Cline x1='214' y1='42' x2='42' y2='214' stroke='%23F97316' stroke-width='0.5'/%3E%3C/svg%3E") center/contain no-repeat`,
        }}
      />

      <Container>
        <div className="relative flex flex-col lg:flex-row items-center gap-12 lg:gap-8 pt-12 pb-20 lg:pt-16 lg:pb-24">
          {/* Left: Content */}
          <motion.div
            className="flex-1 max-w-2xl lg:max-w-none lg:w-[45%] lg:flex-none"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.div variants={staggerItem} className="mb-6">
              <Badge variant="saffron" size="md" icon={<span>✦</span>}>
                Authentic Vedic Lineage · Modern Precision
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-[56px] xl:text-[64px] leading-[1.08] tracking-tight text-[#171717] mb-6 text-balance"
            >
              The Right Pooja.{' '}
              <span className="text-[#F97316]">The Right Priest.</span>{' '}
              Peace of Mind.
            </motion.h1>

            {/* Supporting copy */}
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[#57534E] leading-relaxed mb-8 max-w-xl text-pretty"
            >
              Book a trusted priest, choose your pooja, add the required materials, and get everything arranged without the usual last-minute calls.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={staggerItem}
              className="flex flex-wrap items-center gap-3 mb-10"
            >
              <Button
                variant="primary"
                size="lg"
                magnetic
                id="hero-book-cta"
                onClick={() => {
                  document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Book a Pooja
                <ArrowRight size={18} />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                id="hero-meet-cta"
                onClick={() => {
                  document.getElementById('priest')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Meet Dandalu Ayyagaru
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div variants={staggerItem}>
              <ul className="flex flex-wrap gap-x-5 gap-y-2" role="list">
                {trustItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-1.5 text-sm text-[#57534E]"
                  >
                    <CheckCircle2 size={14} className="text-[#F97316] shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[#78716C] mt-3">
                Trusted for meaningful family occasions
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Visual + Booking UI */}
          <motion.div
            className="w-full lg:w-[55%] lg:flex-none relative"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <HeroBookingPreview />
          </motion.div>
        </div>
      </Container>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(255,253,247,0.6))',
        }}
        aria-hidden="true"
      />
    </section>
  )
}
