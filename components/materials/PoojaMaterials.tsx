'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown, CheckCircle2, ShieldCheck } from 'lucide-react'
import Container from '@/components/ui/Container'
import { materialCategories } from '@/data/materials'

export default function PoojaMaterials() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [openCategory, setOpenCategory] = useState<string | null>('essential')

  return (
    <section
      id="materials"
      ref={ref}
      className="py-20 lg:py-28 bg-white"
      aria-label="Pooja materials"
    >
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex-1"
          >
            <span className="inline-block text-xs font-semibold text-[#F97316] uppercase tracking-widest mb-3">
              Zero-Stress Provisioning
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[44px] text-[#171717] leading-tight tracking-tight mb-5 text-balance">
              Everything the Pooja Needs.<br />
              One Less Thing<br className="hidden lg:block" /> for You to Arrange.
            </h2>
            <p className="text-[#57534E] text-base leading-relaxed mb-8 max-w-md text-pretty">
              Running around to buy market stalls depleting freshness? We deliver certified, unadulterated, organic samagri — directly to your home.
            </p>

            {/* Category accordion */}
            <div className="space-y-3" role="list">
              {materialCategories.map((cat) => (
                <div
                  key={cat.id}
                  className="border border-[#E7E5E4] rounded-xl overflow-hidden"
                  role="listitem"
                >
                  <button
                    onClick={() => setOpenCategory(openCategory === cat.id ? null : cat.id)}
                    className="w-full flex items-center justify-between px-4 py-3.5 text-left hover:bg-[#FFFDF7] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#F97316]"
                    aria-expanded={openCategory === cat.id}
                    aria-controls={`cat-${cat.id}`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-lg" aria-hidden="true">{cat.icon}</span>
                      <span className="font-semibold text-sm text-[#171717]">{cat.name}</span>
                      <span className="text-xs text-[#78716C] bg-[#F5F5F4] rounded-full px-2 py-0.5">
                        {cat.items.length} items
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: openCategory === cat.id ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={16} className="text-[#78716C]" aria-hidden="true" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {openCategory === cat.id && (
                      <motion.div
                        id={`cat-${cat.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 space-y-2.5 border-t border-[#E7E5E4] pt-3">
                          {cat.items.map((item) => (
                            <div key={item.id} className="flex items-start gap-2.5">
                              <CheckCircle2
                                size={14}
                                className="text-[#F97316] mt-0.5 shrink-0"
                                aria-hidden="true"
                              />
                              <div>
                                <div className="flex items-center gap-1.5">
                                  <span className="text-sm font-medium text-[#171717]">
                                    {item.name}
                                  </span>
                                  {item.certified && (
                                    <span className="inline-flex items-center gap-0.5 text-[9px] font-medium text-[#15803D] bg-[#F0FDF4] border border-[#86EFAC]/40 rounded-full px-1.5 py-0.5">
                                      <ShieldCheck size={8} aria-hidden="true" />
                                      Pure
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-[#78716C] leading-relaxed">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Kit summary card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full lg:w-80 lg:sticky lg:top-24"
          >
            <div className="bg-[#FFFDF7] rounded-2xl border border-[#E7E5E4] shadow-[0_2px_8px_rgba(23,23,23,0.06)] overflow-hidden">
              {/* Header */}
              <div className="px-5 py-4 bg-[#FFF7ED] border-b border-[#FDBA74]/30 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-sm text-[#171717]">Samagri Kit Summary</p>
                  <p className="text-xs text-[#57534E]">Complete Pooja Package</p>
                </div>
                <span className="inline-flex items-center gap-1 bg-[#F97316] text-white text-[10px] font-semibold rounded-full px-2.5 py-1">
                  100% Pure Certified
                </span>
              </div>

              <div className="p-5 space-y-3">
                {[
                  { label: 'Ritual items', value: '32 Notified Items' },
                  { label: 'Packaging', value: 'Eco-friendly Cloth Pouches' },
                  { label: 'Delivery', value: 'Delivered With Priest' },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between text-sm">
                    <span className="text-[#78716C]">{row.label}</span>
                    <span className="font-medium text-[#171717]">{row.value}</span>
                  </div>
                ))}

                <div className="pt-3 border-t border-[#E7E5E4]">
                  <p className="text-xs text-[#57534E] font-medium uppercase tracking-widest mb-2">
                    Authenticity
                  </p>
                  <p className="text-xs text-[#57534E] leading-relaxed">
                    Blue-Flame tested pure cow ghee, chemical-free bhilwadi camphor for zero soot.
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E7E5E4]">
                  <p className="text-xs text-[#57534E] leading-relaxed">
                    Already have your own items? You can freely substitute and supply your own samagri anytime.
                  </p>
                </div>

                <button
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  className="mt-2 w-full h-10 rounded-xl bg-[#F97316] text-white text-sm font-semibold hover:bg-[#EA580C] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2"
                >
                  Add Materials to Booking
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
