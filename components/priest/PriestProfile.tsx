'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ShieldCheck, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import Container from '@/components/ui/Container'
import Badge from '@/components/ui/Badge'
import { priests } from '@/data/priests'

export default function PriestProfile() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const priest = priests[0]

  return (
    <section
      id="priest"
      ref={ref}
      className="py-20 lg:py-28 bg-[#FFFDF7]"
      aria-label="About the priest"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold text-[#F97316] uppercase tracking-widest mb-3">
            Your Vedic Lineage & Conduct
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[44px] text-[#171717] leading-tight tracking-tight text-balance">
            Meet Dandalu Ayyagaru
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
          {/* Portrait card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full lg:w-[380px] shrink-0"
          >
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#FFF7ED] to-[#FED7AA]/30 border border-[#E7E5E4] shadow-[0_4px_24px_rgba(23,23,23,0.08)]">
              {/* Priest portrait */}
              <div className="relative w-full" style={{ paddingBottom: '133.33%' }}>
                <Image
                  src="/images/priest-dandalu-ayyagaru.jpg"
                  alt="Dandalu Ayyagaru — Vedic Purohit holding a sacred copper kalasha"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 1024px) 100vw, 380px"
                />
              </div>

              {/* Bottom overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#171717]/80 to-transparent p-5">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-display font-bold text-white text-xl">{priest.name}</p>
                  <ShieldCheck size={16} className="text-[#F97316]" aria-label="Verified priest" />
                </div>
                <p className="text-white/70 text-sm">{priest.tradition} Tradition · {priest.title}</p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {priest.languages.map((lang) => (
                    <span
                      key={lang}
                      className="text-[10px] font-medium text-white/80 bg-white/10 rounded-full px-2 py-0.5 border border-white/20"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Veda Patashala badge */}
              <div className="absolute top-4 left-4">
                <Badge variant="gold" size="sm" icon={<ShieldCheck size={10} />}>
                  Veda Patashala Certified
                </Badge>
              </div>
            </div>
          </motion.div>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex-1"
          >
            {/* Intro */}
            <p className="text-[#57534E] text-base lg:text-lg leading-relaxed mb-8 text-pretty">
              {priest.bio}
            </p>

            {/* Credentials grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Tradition', value: `${priest.tradition} Shakha`, icon: '📜' },
                { label: 'School', value: 'Smartha & Vaidika', icon: '🏛️' },
                { label: 'Languages', value: priest.languages.join(', '), icon: '🗣️' },
                { label: 'Authenticity', value: '100% Guaranteed', icon: '✦' },
                { label: 'Background', value: 'Verified', icon: '🛡️' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#E7E5E4]"
                >
                  <span className="text-lg mt-0.5" aria-hidden="true">{item.icon}</span>
                  <div>
                    <p className="text-xs font-semibold text-[#78716C] uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-[#171717]">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Specializations */}
            <div className="mb-8">
              <p className="text-xs font-semibold text-[#78716C] uppercase tracking-widest mb-3">
                Specializations
              </p>
              <div className="flex flex-wrap gap-2">
                {priest.specializations.map((spec) => (
                  <span
                    key={spec}
                    className="inline-flex items-center gap-1 text-sm text-[#57534E] bg-[#F5F5F4] border border-[#E7E5E4] rounded-full px-3 py-1.5"
                  >
                    <CheckCircle2 size={12} className="text-[#F97316]" aria-hidden="true" />
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="h-12 px-7 rounded-full bg-[#F97316] text-white font-semibold text-sm hover:bg-[#EA580C] transition-all duration-200 shadow-[0_2px_8px_rgba(249,115,22,0.25)] hover:shadow-[0_4px_16px_rgba(249,115,22,0.35)] hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2"
              >
                Book with Dandalu Ayyagaru
              </button>
              <button className="h-12 px-7 rounded-full border border-[#E7E5E4] text-[#57534E] font-semibold text-sm hover:border-[#F97316] hover:text-[#F97316] hover:bg-[#FFF7ED] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]">
                View Full Profile
              </button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
