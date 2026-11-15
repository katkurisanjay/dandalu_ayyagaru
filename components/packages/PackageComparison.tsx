'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Container from '@/components/ui/Container'
import { packages } from '@/data/packages'
import { CheckCircle2 } from 'lucide-react'
import Badge from '@/components/ui/Badge'

export default function PackageComparison() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="packages"
      ref={ref}
      className="py-20 lg:py-28 bg-[#FFFDF7]"
      aria-label="Booking packages"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold text-[#F97316] uppercase tracking-widest mb-3">
            Ritual Tiers
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[44px] text-[#171717] leading-tight tracking-tight mb-4 text-balance">
            Choose How Much You'd Like Us to Handle
          </h2>
          <p className="text-[#57534E] text-base max-w-xl mx-auto text-pretty">
            From purely spiritual guidance to end-to-end havan setups.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className={`relative rounded-2xl border p-6 flex flex-col transition-shadow duration-300 hover:shadow-[0_4px_16px_rgba(23,23,23,0.08)] ${
                pkg.featured
                  ? 'border-[#F97316] bg-[#FFF7ED] shadow-[0_4px_16px_rgba(249,115,22,0.12)]'
                  : 'border-[#E7E5E4] bg-white'
              }`}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant={pkg.featured ? 'saffron' : 'neutral'} size="sm">
                    {pkg.badge}
                  </Badge>
                </div>
              )}

              {/* Header */}
              <div className="mb-5">
                <h3 className="font-display font-bold text-lg text-[#171717] mb-1">
                  {pkg.name}
                </h3>
                <p className="text-xs font-medium text-[#F97316]">{pkg.tagline}</p>
              </div>

              {/* Description */}
              <p className="text-sm text-[#57534E] leading-relaxed mb-5 text-pretty">
                {pkg.description}
              </p>

              {/* Features */}
              <ul className="space-y-2.5 mb-6 flex-1" role="list">
                {pkg.includes.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-[#57534E]">
                    <CheckCircle2
                      size={14}
                      className="text-[#F97316] mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full h-10 rounded-xl font-semibold text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2 ${
                  pkg.featured
                    ? 'bg-[#F97316] text-white hover:bg-[#EA580C] shadow-[0_2px_8px_rgba(249,115,22,0.25)]'
                    : 'border border-[#E7E5E4] text-[#57534E] hover:border-[#F97316] hover:text-[#F97316] hover:bg-[#FFF7ED]'
                }`}
              >
                View Price
              </button>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
