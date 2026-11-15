'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, ShieldCheck, MapPin, Calendar, Package, Leaf, FileText, PartyPopper } from 'lucide-react'
import Container from '@/components/ui/Container'
import BookingProgress from './BookingProgress'
import { poojas } from '@/data/poojas'
import { packages } from '@/data/packages'
import { materialCategories } from '@/data/materials'
import { bookingStepEnter } from '@/lib/animations'

type BookingState = {
  pooja?: string
  poojaName?: string
  date?: string
  time?: string
  location?: string
  locationType?: string
  priestId: string
  packageId?: string
  packageName?: string
  materials: string[]
}

const STEP_LABELS = ['Ritual', 'Date', 'Venue', 'Package', 'Samagri', 'Confirm']

const timeSlots = [
  { time: '06:30 AM', label: 'Brahma Muhurtham' },
  { time: '08:00 AM', label: 'Shubh Choghadiya', recommended: true },
  { time: '10:00 AM', label: 'Amrit Muhurtham' },
  { time: '12:00 PM', label: 'Abhijit Kala' },
  { time: '04:30 PM', label: 'Pradosha Kala' },
  { time: '06:00 PM', label: 'Sandhya Deeeparadhana' },
]

const locationTypes = ['Home Residence', 'New Home / Gruha Pravesham', 'Banquet / Function Hall', 'Temple Mandapam']

export default function BookingFlow() {
  const [step, setStep] = useState(1)
  const [booking, setBooking] = useState<BookingState>({
    priestId: 'dandalu-ayyagaru',
    materials: [],
  })
  const [confirmed, setConfirmed] = useState(false)

  const updateBooking = (updates: Partial<BookingState>) => {
    setBooking((prev) => ({ ...prev, ...updates }))
  }

  const nextStep = () => setStep((s) => Math.min(s + 1, 6))
  const prevStep = () => setStep((s) => Math.max(s - 1, 1))

  if (confirmed) {
    return (
      <section id="booking" className="py-20 lg:py-28 bg-[#FFFDF7]" aria-label="Booking confirmation">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-lg mx-auto text-center"
          >
            <div className="w-20 h-20 rounded-full bg-[#F0FDF4] border-2 border-[#86EFAC] flex items-center justify-center mx-auto mb-6">
              <PartyPopper size={36} className="text-[#15803D]" />
            </div>
            <h2 className="font-display font-bold text-3xl text-[#171717] mb-3">
              Your Pooja is Reserved!
            </h2>
            <p className="text-[#57534E] mb-6">
              Dandalu Ayyagaru has been notified. You will receive a confirmation shortly. The ritual is in good hands.
            </p>
            <div className="bg-white border border-[#E7E5E4] rounded-2xl p-5 text-left space-y-3 mb-6">
              {booking.poojaName && (
                <div className="flex justify-between text-sm">
                  <span className="text-[#78716C]">Ritual</span>
                  <span className="font-medium text-[#171717]">{booking.poojaName}</span>
                </div>
              )}
              {booking.date && (
                <div className="flex justify-between text-sm">
                  <span className="text-[#78716C]">Date</span>
                  <span className="font-medium text-[#171717]">{booking.date}</span>
                </div>
              )}
              {booking.time && (
                <div className="flex justify-between text-sm">
                  <span className="text-[#78716C]">Time</span>
                  <span className="font-medium text-[#171717]">{booking.time}</span>
                </div>
              )}
              {booking.packageName && (
                <div className="flex justify-between text-sm">
                  <span className="text-[#78716C]">Package</span>
                  <span className="font-medium text-[#171717]">{booking.packageName}</span>
                </div>
              )}
              <div className="flex justify-between text-sm">
                <span className="text-[#78716C]">Priest</span>
                <span className="font-medium text-[#171717] flex items-center gap-1">
                  Dandalu Ayyagaru <ShieldCheck size={12} className="text-[#F97316]" />
                </span>
              </div>
            </div>
            <button
              onClick={() => { setConfirmed(false); setStep(1); setBooking({ priestId: 'dandalu-ayyagaru', materials: [] }) }}
              className="h-12 px-7 rounded-full border border-[#E7E5E4] text-[#57534E] font-semibold text-sm hover:border-[#F97316] hover:text-[#F97316] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
            >
              Book Another Pooja
            </button>
          </motion.div>
        </Container>
      </section>
    )
  }

  return (
    <section id="booking" className="py-20 lg:py-28 bg-[#FFFDF7]" aria-label="Book a pooja">
      <Container>
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FFF7ED] border border-[#FDBA74]/40 rounded-full px-4 py-1.5 mb-4">
            <span className="text-[10px] font-semibold text-[#F97316] uppercase tracking-widest">
              🪔 Rituals Directory / Reserve Sacred Pooja
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[44px] text-[#171717] leading-tight tracking-tight mb-3 text-balance">
            Book Your Sacred Pooja
          </h2>
          <p className="text-[#57534E] text-base max-w-md mx-auto">
            A simple, guided experience. Choose your ritual, pick a time, and we handle the rest.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Progress */}
          <div className="mb-8">
            <BookingProgress currentStep={step} totalSteps={6} steps={STEP_LABELS} />
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Main form area */}
            <div className="flex-1 bg-white rounded-2xl border border-[#E7E5E4] shadow-[0_2px_8px_rgba(23,23,23,0.05)] overflow-hidden">
              {/* Step header */}
              <div className="px-6 py-4 border-b border-[#E7E5E4] bg-[#FFFDF7] flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F97316] text-white flex items-center justify-center text-xs font-bold">
                  {String(step).padStart(2, '0')}
                </div>
                <div>
                  <p className="text-[10px] text-[#78716C] uppercase tracking-widest font-medium">
                    Step {step} of 6
                  </p>
                  <p className="text-sm font-semibold text-[#171717]">
                    {step === 1 && 'Choose Your Sacred Ritual'}
                    {step === 2 && 'When Should We Perform the Pooja?'}
                    {step === 3 && 'Where Will the Rituals Be Hosted?'}
                    {step === 4 && 'Choose How Much You\'d Like Us to Handle'}
                    {step === 5 && 'Add the Pooja Samagri Kit'}
                    {step === 6 && 'Review & Confirm Your Booking'}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <AnimatePresence mode="wait">
                  {/* STEP 1: Pooja Selection */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      variants={bookingStepEnter}
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0, x: -12, transition: { duration: 0.2 } }}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {poojas.map((pooja) => (
                          <button
                            key={pooja.id}
                            onClick={() => updateBooking({ pooja: pooja.id, poojaName: pooja.name })}
                            className={`text-left p-4 rounded-xl border transition-all duration-[180ms] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] ${
                              booking.pooja === pooja.id
                                ? 'border-[#F97316] bg-[#FFF7ED]'
                                : 'border-[#E7E5E4] hover:border-[#FDBA74] hover:bg-[#FFFDF7]'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex items-start gap-2.5">
                                <span className="text-xl mt-0.5">{pooja.icon}</span>
                                <div>
                                  <p className="font-semibold text-sm text-[#171717]">{pooja.name}</p>
                                  <p className="text-xs text-[#78716C] mt-0.5 flex items-center gap-1">
                                    <span>⏱</span> {pooja.duration}
                                  </p>
                                </div>
                              </div>
                              {booking.pooja === pooja.id && (
                                <CheckCircle2 size={16} className="text-[#F97316] shrink-0 mt-0.5" />
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2: Date & Time */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      variants={bookingStepEnter}
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0, x: -12, transition: { duration: 0.2 } }}
                      className="space-y-5"
                    >
                      <div>
                        <label htmlFor="booking-date" className="block text-sm font-medium text-[#57534E] mb-2">
                          <Calendar size={14} className="inline mr-1 text-[#F97316]" aria-hidden="true" />
                          Select an auspicious date
                        </label>
                        <input
                          id="booking-date"
                          type="date"
                          value={booking.date || ''}
                          onChange={(e) => updateBooking({ date: e.target.value })}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full h-12 px-4 rounded-xl border border-[#E7E5E4] text-[#171717] text-sm bg-[#FFFDF7] focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-transparent transition-all duration-200"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#57534E] mb-3">Select Auspicious Time Window</p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                          {timeSlots.map((slot) => (
                            <button
                              key={slot.time}
                              onClick={() => updateBooking({ time: slot.time })}
                              className={`relative p-3 rounded-xl border text-left transition-all duration-[180ms] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] ${
                                booking.time === slot.time
                                  ? 'border-[#F97316] bg-[#FFF7ED]'
                                  : 'border-[#E7E5E4] hover:border-[#FDBA74] hover:bg-[#FFFDF7]'
                              }`}
                            >
                              {slot.recommended && (
                                <span className="absolute -top-2 left-2 text-[9px] font-bold text-white bg-[#F97316] rounded-full px-1.5 py-0.5">
                                  Recommended
                                </span>
                              )}
                              <p className="font-semibold text-sm text-[#171717]">{slot.time}</p>
                              <p className="text-[10px] text-[#78716C] mt-0.5">{slot.label}</p>
                            </button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3: Location */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      variants={bookingStepEnter}
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0, x: -12, transition: { duration: 0.2 } }}
                      className="space-y-5"
                    >
                      <div>
                        <p className="text-sm font-medium text-[#57534E] mb-3">Venue type</p>
                        <div className="flex flex-wrap gap-2">
                          {locationTypes.map((loc) => (
                            <button
                              key={loc}
                              onClick={() => updateBooking({ locationType: loc })}
                              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-[180ms] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] ${
                                booking.locationType === loc
                                  ? 'border-[#F97316] bg-[#FFF7ED] text-[#EA580C]'
                                  : 'border-[#E7E5E4] text-[#57534E] hover:border-[#FDBA74] hover:bg-[#FFFDF7]'
                              }`}
                            >
                              {booking.locationType === loc && <CheckCircle2 size={12} className="inline mr-1.5 text-[#F97316]" />}
                              {loc}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label htmlFor="booking-location" className="block text-sm font-medium text-[#57534E] mb-2">
                          <MapPin size={14} className="inline mr-1 text-[#F97316]" aria-hidden="true" />
                          Detailed Sanctum Address
                        </label>
                        <textarea
                          id="booking-location"
                          rows={3}
                          value={booking.location || ''}
                          onChange={(e) => updateBooking({ location: e.target.value })}
                          placeholder="Flat / Plot No., Street, Area, City — e.g. Flat 404, Prestige Palms, Jubilee Hills, Hyderabad"
                          className="w-full px-4 py-3 rounded-xl border border-[#E7E5E4] text-[#171717] text-sm bg-[#FFFDF7] placeholder-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-transparent transition-all duration-200 resize-none"
                          aria-label="Pooja venue address"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 4: Package */}
                  {step === 4 && (
                    <motion.div
                      key="step4"
                      variants={bookingStepEnter}
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0, x: -12, transition: { duration: 0.2 } }}
                      className="space-y-3"
                    >
                      {packages.map((pkg) => (
                        <button
                          key={pkg.id}
                          onClick={() => updateBooking({ packageId: pkg.id, packageName: pkg.name })}
                          className={`w-full text-left p-4 rounded-xl border transition-all duration-[180ms] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] ${
                            booking.packageId === pkg.id
                              ? 'border-[#F97316] bg-[#FFF7ED]'
                              : pkg.featured
                              ? 'border-[#FDBA74]/50 bg-[#FFFDF7]'
                              : 'border-[#E7E5E4] hover:border-[#FDBA74] hover:bg-[#FFFDF7]'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <p className="font-semibold text-sm text-[#171717]">{pkg.name}</p>
                                {pkg.badge && (
                                  <span className="text-[9px] font-bold text-[#F97316] bg-[#FFF7ED] border border-[#FDBA74]/40 rounded-full px-1.5 py-0.5">
                                    {pkg.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-[#78716C]">{pkg.tagline}</p>
                              <p className="text-xs text-[#57534E] mt-1.5 leading-relaxed">{pkg.description}</p>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                              {booking.packageId === pkg.id ? (
                                <CheckCircle2 size={18} className="text-[#F97316] shrink-0" />
                              ) : (
                                <div className="w-5 h-5 rounded-full border-2 border-[#E7E5E4] shrink-0" />
                              )}
                              <span className="text-xs font-semibold text-[#F97316] whitespace-nowrap">View Price →</span>
                            </div>
                          </div>
                        </button>
                      ))}
                    </motion.div>
                  )}

                  {/* STEP 5: Materials */}
                  {step === 5 && (
                    <motion.div
                      key="step5"
                      variants={bookingStepEnter}
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0, x: -12, transition: { duration: 0.2 } }}
                      className="space-y-4"
                    >
                      <div className="p-4 rounded-xl bg-[#FFF7ED] border border-[#FDBA74]/40">
                        <p className="text-sm font-semibold text-[#171717] mb-1">Need the pooja materials?</p>
                        <p className="text-xs text-[#57534E]">
                          Add a certified organic samagri kit and we'll deliver it alongside the priest.
                        </p>
                      </div>
                      {materialCategories.map((cat) => (
                        <div key={cat.id} className="border border-[#E7E5E4] rounded-xl overflow-hidden">
                          <div className="px-4 py-3 bg-[#FFFDF7] flex items-center gap-2">
                            <span className="text-base" aria-hidden="true">{cat.icon}</span>
                            <span className="font-semibold text-sm text-[#171717]">{cat.name}</span>
                          </div>
                          <div className="p-3 space-y-2">
                            {cat.items.map((item) => (
                              <label
                                key={item.id}
                                className="flex items-center gap-3 cursor-pointer group"
                              >
                                <input
                                  type="checkbox"
                                  checked={booking.materials.includes(item.id)}
                                  onChange={(e) => {
                                    if (e.target.checked) {
                                      updateBooking({ materials: [...booking.materials, item.id] })
                                    } else {
                                      updateBooking({ materials: booking.materials.filter((m) => m !== item.id) })
                                    }
                                  }}
                                  className="w-4 h-4 rounded border-[#E7E5E4] text-[#F97316] focus:ring-[#F97316] accent-[#F97316]"
                                />
                                <div>
                                  <p className="text-sm font-medium text-[#171717] group-hover:text-[#F97316] transition-colors">{item.name}</p>
                                  <p className="text-xs text-[#78716C]">{item.description}</p>
                                </div>
                              </label>
                            ))}
                          </div>
                        </div>
                      ))}
                      <p className="text-xs text-center text-[#78716C]">
                        You can continue without adding a pooja kit.
                      </p>
                    </motion.div>
                  )}

                  {/* STEP 6: Review & Confirm */}
                  {step === 6 && (
                    <motion.div
                      key="step6"
                      variants={bookingStepEnter}
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0, x: -12, transition: { duration: 0.2 } }}
                      className="space-y-4"
                    >
                      <p className="text-sm text-[#57534E]">
                        Review your sacred booking details before confirmation.
                      </p>
                      <div className="space-y-2.5">
                        {[
                          { icon: <span>🕉️</span>, label: 'Ritual', value: booking.poojaName || '—' },
                          { icon: <Calendar size={14} className="text-[#F97316]" />, label: 'Date', value: booking.date || 'Not selected' },
                          { icon: <span>⏱</span>, label: 'Time', value: booking.time || 'Not selected' },
                          { icon: <MapPin size={14} className="text-[#F97316]" />, label: 'Venue', value: booking.location ? `${booking.locationType} — ${booking.location.substring(0, 40)}...` : booking.locationType || 'Not entered' },
                          { icon: <ShieldCheck size={14} className="text-[#F97316]" />, label: 'Priest', value: 'Dandalu Ayyagaru' },
                          { icon: <Package size={14} className="text-[#F97316]" />, label: 'Package', value: booking.packageName || 'Not selected' },
                          { icon: <Leaf size={14} className="text-[#F97316]" />, label: 'Materials', value: booking.materials.length > 0 ? `${booking.materials.length} items selected` : 'No kit added' },
                        ].map(({ icon, label, value }) => (
                          <div key={label} className="flex items-center justify-between py-2.5 border-b border-[#E7E5E4] last:border-0">
                            <div className="flex items-center gap-2 text-[#78716C]">
                              {icon}
                              <span className="text-sm">{label}</span>
                            </div>
                            <span className="text-sm font-medium text-[#171717] text-right max-w-[55%]">{value}</span>
                          </div>
                        ))}
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#F0FDF4] border border-[#86EFAC]/40 flex items-start gap-2">
                        <ShieldCheck size={16} className="text-[#15803D] mt-0.5 shrink-0" />
                        <p className="text-xs text-[#166534]">
                          No surprises. Dandalu Ayyagaru arrives 20 minutes prior with purified samagri. No unannounced additional dakshina demands will ever be made.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Navigation */}
              <div className="px-6 pb-6 flex items-center justify-between gap-3 border-t border-[#E7E5E4] pt-4">
                {step > 1 ? (
                  <button
                    onClick={prevStep}
                    className="h-10 px-5 rounded-full border border-[#E7E5E4] text-[#57534E] text-sm font-medium hover:border-[#F97316] hover:text-[#F97316] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
                  >
                    ← Back
                  </button>
                ) : (
                  <div />
                )}
                {step < 6 ? (
                  <button
                    onClick={nextStep}
                    className="h-10 px-6 rounded-full bg-[#F97316] text-white text-sm font-semibold hover:bg-[#EA580C] transition-colors duration-200 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2"
                  >
                    {step === 1 && (!booking.pooja ? 'Choose a ritual to continue' : 'Next: Date & Time →')}
                    {step === 2 && 'Next: Venue →'}
                    {step === 3 && 'Next: Package →'}
                    {step === 4 && 'Next: Samagri →'}
                    {step === 5 && 'Review Booking →'}
                  </button>
                ) : (
                  <button
                    onClick={() => setConfirmed(true)}
                    className="h-10 px-6 rounded-full bg-[#F97316] text-white text-sm font-semibold hover:bg-[#EA580C] transition-colors duration-200 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2 shadow-[0_2px_8px_rgba(249,115,22,0.3)]"
                  >
                    Confirm & Book Pooja ✓
                  </button>
                )}
              </div>
            </div>

            {/* Sidebar: Booking summary */}
            <div className="w-full lg:w-72 shrink-0 space-y-4">
              <div className="bg-white rounded-2xl border border-[#E7E5E4] shadow-[0_2px_8px_rgba(23,23,23,0.05)] overflow-hidden sticky top-24">
                <div className="px-5 py-4 border-b border-[#E7E5E4] bg-[#FFFDF7] flex items-center justify-between">
                  <p className="font-semibold text-sm text-[#171717]">Your Pooja Summary</p>
                  <FileText size={14} className="text-[#78716C]" aria-hidden="true" />
                </div>
                <div className="p-4 space-y-3">
                  {[
                    { label: 'Ritual', value: booking.poojaName },
                    { label: 'Lineage', value: 'Dandalu Ayyagaru (Rigvedic)' },
                    { label: 'Date', value: booking.date },
                    { label: 'Time', value: booking.time },
                    { label: 'Venue', value: booking.locationType },
                    { label: 'Package', value: booking.packageName },
                  ].map(({ label, value }) => value && (
                    <div key={label} className="flex justify-between gap-2 text-sm">
                      <span className="text-[#78716C] shrink-0">{label}</span>
                      <span className="font-medium text-[#171717] text-right">{value}</span>
                    </div>
                  ))}
                  {booking.materials.length > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-[#78716C]">Samagri</span>
                      <span className="font-medium text-[#F97316]">{booking.materials.length} items</span>
                    </div>
                  )}

                  {!booking.pooja && (
                    <p className="text-xs text-[#A8A29E] italic text-center py-2">
                      Select a ritual to begin your summary
                    </p>
                  )}

                  <div className="pt-3 border-t border-[#E7E5E4]">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#78716C]">Ritual Service</span>
                      <span className="font-semibold text-[#171717]">View Price</span>
                    </div>
                    {booking.materials.length > 0 && (
                      <div className="flex justify-between text-sm mt-1">
                        <span className="text-[#78716C]">Samagri Kit</span>
                        <span className="font-semibold text-[#171717]">View Price</span>
                      </div>
                    )}
                  </div>

                  {step === 6 && (
                    <button
                      onClick={() => setConfirmed(true)}
                      className="mt-2 w-full h-10 rounded-xl bg-[#F97316] text-white text-sm font-semibold hover:bg-[#EA580C] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2"
                    >
                      Confirm & Book Pooja →
                    </button>
                  )}
                </div>
              </div>

              {/* Need help card */}
              <div className="bg-[#FFF7ED] rounded-2xl border border-[#FDBA74]/40 p-4">
                <p className="text-sm font-semibold text-[#171717] mb-1">Need Pandit Guidance?</p>
                <p className="text-xs text-[#57534E] mb-3">Speak to our chief Acharya for gotram advice</p>
                <button className="w-full h-9 rounded-lg border border-[#F97316] text-[#F97316] text-xs font-semibold hover:bg-[#F97316] hover:text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]">
                  Call Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
