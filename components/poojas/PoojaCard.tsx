'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Clock } from 'lucide-react'
import { Pooja } from '@/data/poojas'
import { staggerItem } from '@/lib/animations'
import Badge from '@/components/ui/Badge'

interface PoojaCardProps {
  pooja: Pooja
  index: number
}

export default function PoojaCard({ pooja, index }: PoojaCardProps) {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.article
      variants={staggerItem}
      role="listitem"
      className="group relative bg-[#FFFDF7] rounded-2xl border border-[#E7E5E4] overflow-hidden cursor-pointer hover:border-[#FDBA74]/60 transition-all duration-[220ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(23,23,23,0.08),0_16px_40px_rgba(23,23,23,0.06)]"
      onClick={scrollToBooking}
      onKeyDown={(e) => e.key === 'Enter' && scrollToBooking()}
      tabIndex={0}
      aria-label={`${pooja.name} — ${pooja.shortDescription}`}
    >
      {/* Image area */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#FFF7ED] to-[#FED7AA]/30">
        {/* Icon placeholder (since images are real assets) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-[220ms]">
            {pooja.icon}
          </span>
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFFDF7]/90 via-transparent to-transparent" />

        {/* Badge */}
        {pooja.badge && (
          <div className="absolute top-3 left-3">
            <Badge variant="saffron" size="sm">{pooja.badge}</Badge>
          </div>
        )}

        {/* Duration */}
        <div className="absolute bottom-3 right-3">
          <span className="inline-flex items-center gap-1 bg-white/80 backdrop-blur-sm rounded-full px-2 py-1 text-[10px] font-medium text-[#57534E] border border-[#E7E5E4]/60">
            <Clock size={9} aria-hidden="true" />
            {pooja.duration}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <span className="text-[10px] font-semibold text-[#F97316] uppercase tracking-widest">
          {pooja.category}
        </span>
        <h3 className="font-display font-semibold text-base text-[#171717] mt-1 mb-2 leading-tight">
          {pooja.name}
        </h3>
        <p className="text-xs text-[#57534E] leading-relaxed line-clamp-2">
          {pooja.shortDescription}
        </p>
      </div>

      {/* CTA row */}
      <div className="px-4 pb-4 flex items-center justify-between">
        <span className="text-xs font-medium text-[#57534E] group-hover:text-[#F97316] transition-colors duration-200">
          Select Ritual
        </span>
        <ArrowRight
          size={14}
          className="text-[#A8A29E] group-hover:text-[#F97316] group-hover:translate-x-1 transition-all duration-[220ms]"
          aria-hidden="true"
        />
      </div>
    </motion.article>
  )
}
