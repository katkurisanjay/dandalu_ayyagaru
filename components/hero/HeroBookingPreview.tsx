'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, MapPin, CheckCircle2, ChevronRight, ShieldCheck, Star } from 'lucide-react'
import { bookingStepEnter } from '@/lib/animations'

const poojaOptions = [
  'Ganapathi Pooja',
  'Satyanarayana Pooja',
  'Gruha Pravesham',
  'Navagraha Homam',
  'Wedding Ritual',
  'Naming Ceremony',
  'Vastu Pooja',
  'Other',
]

export default function HeroBookingPreview() {
  const [selectedPooja, setSelectedPooja] = useState('Ganapathi Pooja')
  const [step, setStep] = useState(1)

  return (
    <div className="relative w-full max-w-[580px] mx-auto lg:mx-0 lg:ml-auto">
      {/* Main booking card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative bg-white rounded-2xl border border-[#E7E5E4] shadow-[0_2px_8px_rgba(23,23,23,0.06),0_16px_48px_rgba(23,23,23,0.08)] overflow-hidden"
      >
        {/* Header bar */}
        <div className="px-5 py-4 bg-[#FFFDF7] border-b border-[#E7E5E4] flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-[#57534E] uppercase tracking-wider">Plan Your Auspicious Pooja</p>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-[#15803D]" />
            <span className="text-xs text-[#15803D] font-medium">Secure Booking</span>
          </div>
        </div>

        {/* Step tabs */}
        <div className="px-5 pt-4 pb-0 flex gap-1">
          {['01 Select Pooja', '02 Date & Time', '03 Location & Materials'].map((tab, i) => (
            <button
              key={tab}
              onClick={() => setStep(i + 1)}
              className={`flex-1 text-[11px] font-medium py-1.5 rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] ${
                step === i + 1
                  ? 'bg-[#FFF7ED] text-[#F97316]'
                  : 'text-[#78716C] hover:text-[#57534E]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="p-5">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                variants={bookingStepEnter}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, x: -12, transition: { duration: 0.2 } }}
              >
                <p className="text-sm font-medium text-[#57534E] mb-3">What would you like to perform?</p>
                <div className="grid grid-cols-2 gap-2">
                  {poojaOptions.map((pooja) => (
                    <button
                      key={pooja}
                      onClick={() => setSelectedPooja(pooja)}
                      className={`text-left px-3 py-2.5 rounded-xl text-sm font-medium border transition-all duration-[180ms] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] ${
                        selectedPooja === pooja
                          ? 'border-[#F97316] bg-[#FFF7ED] text-[#EA580C]'
                          : 'border-[#E7E5E4] text-[#57534E] hover:border-[#FDBA74] hover:bg-[#FFFDF7]'
                      }`}
                    >
                      <span className="flex items-center justify-between gap-1">
                        {pooja}
                        {selectedPooja === pooja && (
                          <CheckCircle2 size={14} className="text-[#F97316] shrink-0" />
                        )}
                      </span>
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setStep(2)}
                  className="mt-4 w-full h-10 rounded-xl bg-[#F97316] text-white text-sm font-semibold hover:bg-[#EA580C] transition-colors duration-200 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2"
                >
                  Continue to Date & Time
                  <ChevronRight size={16} />
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                variants={bookingStepEnter}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, x: -12, transition: { duration: 0.2 } }}
                className="space-y-4"
              >
                <p className="text-sm font-medium text-[#57534E]">When should we come?</p>
                <div className="flex items-center gap-3 p-3 rounded-xl border border-[#E7E5E4] bg-[#FFFDF7] hover:border-[#FDBA74] transition-colors cursor-pointer">
                  <Calendar size={16} className="text-[#F97316] shrink-0" />
                  <div>
                    <p className="text-xs text-[#78716C]">Select date</p>
                    <p className="text-sm font-medium text-[#171717]">Choose an auspicious date</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {['06:30 AM', '08:00 AM', '10:00 AM', '12:00 PM', '04:30 PM', '06:00 PM'].map((time) => (
                    <button
                      key={time}
                      className="py-2 px-2 rounded-lg text-xs font-medium text-[#57534E] border border-[#E7E5E4] hover:border-[#F97316] hover:text-[#F97316] hover:bg-[#FFF7ED] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
                    >
                      {time}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setStep(3)}
                  className="w-full h-10 rounded-xl bg-[#F97316] text-white text-sm font-semibold hover:bg-[#EA580C] transition-colors duration-200 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2"
                >
                  Next: Location
                  <ChevronRight size={16} />
                </button>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                variants={bookingStepEnter}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, x: -12, transition: { duration: 0.2 } }}
                className="space-y-4"
              >
                <p className="text-sm font-medium text-[#57534E]">Where is the pooja?</p>
                <div className="flex items-center gap-3 p-3 rounded-xl border border-[#F97316] bg-[#FFF7ED]">
                  <MapPin size={16} className="text-[#F97316] shrink-0" />
                  <input
                    type="text"
                    placeholder="Enter your home / venue location"
                    className="flex-1 bg-transparent text-sm text-[#171717] placeholder-[#A8A29E] outline-none"
                    aria-label="Pooja location"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Home Residence', 'New Home', 'Function Hall', 'Temple / Venue'].map((loc) => (
                    <button
                      key={loc}
                      className="px-3 py-1.5 rounded-full text-xs font-medium text-[#57534E] border border-[#E7E5E4] hover:border-[#F97316] hover:text-[#F97316] hover:bg-[#FFF7ED] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
                    >
                      {loc}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => {
                    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="w-full h-10 rounded-xl bg-[#F97316] text-white text-sm font-semibold hover:bg-[#EA580C] transition-colors duration-200 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2"
                >
                  Continue to Full Booking
                  <ChevronRight size={16} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Floating priest card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-[#E7E5E4] shadow-[0_4px_16px_rgba(23,23,23,0.08)] z-10"
        aria-label="Priest badge"
      >
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFF7ED] to-[#FED7AA] border-2 border-[#FDBA74]/30 flex items-center justify-center text-lg">
          🙏
        </div>
        <div>
          <div className="flex items-center gap-1">
            <p className="text-sm font-semibold text-[#171717]">Dandalu Ayyagaru</p>
            <ShieldCheck size={13} className="text-[#F97316]" aria-label="Verified" />
          </div>
          <p className="text-xs text-[#57534E]">Vedic Purohit & Traditional Priest</p>
          <div className="flex items-center gap-1 mt-0.5">
            {[1,2,3,4,5].map(n => (
              <Star key={n} size={9} className="fill-[#F97316] text-[#F97316]" aria-hidden="true" />
            ))}
            <span className="text-[10px] text-[#57534E] ml-1">100% Family Trusted</span>
          </div>
        </div>
      </motion.div>

      {/* Floating confirmation badge */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute -top-4 -right-4 hidden md:flex items-center gap-2 bg-[#F0FDF4] rounded-xl px-3 py-2.5 border border-[#86EFAC]/40 shadow-[0_2px_8px_rgba(21,128,61,0.08)] z-10"
      >
        <CheckCircle2 size={16} className="text-[#15803D]" aria-hidden="true" />
        <div>
          <p className="text-xs font-semibold text-[#15803D]">Zero Bargaining</p>
          <p className="text-[10px] text-[#166534]/70">Transparent, all-inclusive dakshina</p>
        </div>
      </motion.div>
    </div>
  )
}
