'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedPooja, setSelectedPooja] = useState<string | null>(null);

  return (
    <main className="w-full pt-16 sm:pt-20 bg-surface min-h-[calc(100dvh-4rem)] sm:min-h-[calc(100dvh-5rem)]">
      <div className="flex flex-col w-full">

        {/* HERO SECTION */}
        <section className="relative w-full overflow-hidden bg-gradient-to-b from-surface via-surface-container-low to-surface min-h-[calc(100dvh-4rem)] sm:min-h-[calc(100dvh-5rem)] flex flex-col justify-center py-12 lg:py-0">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
              {/* Left Column: Copy & Actions */}
              <div className="w-full lg:w-[54%] flex flex-col gap-4 z-10 lg:pr-8 text-center lg:text-left items-center lg:items-start">
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container border-0 w-fit">
                  <span className="material-symbols-outlined text-primary text-[16px]">verified</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider text-[10px] sm:text-[11px]">Authentic Vedic Lineage · Modern Precision</span>
                </div>
                <h1 className="font-display-hero text-display-hero text-on-surface leading-tight tracking-tight">
                  The Right Pooja.<br />
                  <span className="text-primary">The Right Priest.</span><br />
                  Peace of Mind.
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
                  Book a trusted priest, choose your pooja, add the required materials, and get everything arranged without the usual last-minute phone calls and uncertainties.
                </p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
                  <Link href="/poojas" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-container text-on-primary font-label-md text-label-md shadow-md hover:bg-primary transition-all duration-200 min-h-[44px]">
                    <span>Book a Pooja</span>
                    <span className="material-symbols-outlined text-base" aria-hidden="true">arrow_forward</span>
                  </Link>
                  <a href="#editorial-profile" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm hover:bg-surface-container transition-all duration-200 min-h-[44px]">
                    <span className="material-symbols-outlined text-primary text-base" aria-hidden="true">person</span>
                    <span>Meet Dandalu Ayyagaru</span>
                  </a>
                </div>
                {/* Micro-trust Bar */}
                <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-on-surface-variant">
                  {['Verified Priest', 'Transparent Pricing', 'Secure Booking', 'Pooja Materials Included'].map(tag => (
                    <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-lowest shadow-sm font-label-sm text-label-sm text-[10px] sm:text-[11px]">
                      <span className="material-symbols-outlined text-primary text-[13px] font-semibold" aria-hidden="true">check_circle</span> {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Visual Showcase */}
              <div className="w-full lg:w-[46%] relative flex justify-center lg:justify-end mt-6 lg:mt-0">
                <div className="relative w-full max-w-[480px] sm:max-w-[600px] lg:max-w-none aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/3] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-xl bg-surface-container-lowest">
                  <img
                    alt="Editorial portrait of Dandalu Ayyagaru, Vedic scholar and verified priest"
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                    loading="eager"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC83w8DZVxYVIwII4H8D5R9QPTqcZiut1Oy9CXBBu51shP1eTqFk04tatPlrwxlMCJRU5IkVnqS8H1-T3oY3LRjUR0nxi7GcEQnwqONzWE6kXnp2sMoYbzw8I-Dq6Xfvo6mNBINb9rNyI9Hb4PmlerXaWG0VosIPa_UoZ3l1upuv7g0fAQLpTB00q3VNIuhW8x886O-VNfdAssG1F33sxioiEY8fgpu8kkjIkaIW6ee"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-surface-container-lowest/90 backdrop-blur-md shadow-lg flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                        <span className="material-symbols-outlined text-sm" aria-hidden="true">verified</span> Verified Purohit
                      </span>
                      <span className="inline-flex items-center gap-1 bg-secondary-fixed text-on-secondary-fixed px-2 py-0.5 rounded-full font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-xs" aria-hidden="true">star</span> 5.0 (2,400+)
                      </span>
                    </div>
                    <p className="font-headline-sm text-headline-sm text-on-surface">Dandalu Ayyagaru</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant hidden sm:block">Vedic Rituals &amp; Traditional Poojas · 100% Shastra Fidelity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QUICK 3-STEP INTERACTIVE BOOKING PREVIEW */}
        <section className="w-full py-24 bg-[#FFFDF7] relative overflow-hidden" id="quick-book">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#FEF3C7]/40 to-transparent rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#FFEDD5]/40 to-transparent rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 relative z-10">
            <div className="bg-white/80 backdrop-blur-xl border border-[#F0E8D5] rounded-[32px] shadow-[0_8px_40px_rgba(157,67,0,0.06)] p-8 md:p-12 flex flex-col gap-10 relative overflow-hidden">
              
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[#B45309]">
                    <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                    <span className="font-semibold text-sm uppercase tracking-widest">Guided Reservation</span>
                  </div>
                  <h2 className="font-serif text-4xl md:text-5xl text-[#4A0404] font-bold leading-tight max-w-2xl">
                    Seamlessly plan your <span className="text-[#B45309] italic">auspicious</span> moment.
                  </h2>
                </div>
                <p className="text-on-surface-variant text-[15px] max-w-sm leading-relaxed">
                  Reserve certified purohit services with complete clarity on samagri, muhurtham, and ceremony procedures in just three simple steps.
                </p>
              </div>

              {/* Tab Selection Interface */}
              <div className="flex flex-wrap gap-2 bg-[#FFF8E7] p-2 rounded-2xl w-fit border border-[#F0E8D5] relative z-10">
                {[
                  { n: 1, label: 'Choose Ritual', icon: 'auto_stories' },
                  { n: 2, label: 'Set Muhurtham', icon: 'schedule' },
                  { n: 3, label: 'Confirm Details', icon: 'check_circle' },
                ].map(({ n, label, icon }) => (
                  <button
                    key={n}
                    onClick={() => setActiveStep(n)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                      activeStep === n 
                        ? 'bg-gradient-to-r from-[#92400E] to-[#7F1D1D] text-white shadow-lg shadow-[#7F1D1D]/20' 
                        : 'text-[#92400E] hover:bg-white hover:shadow-sm'
                    }`}
                  >
                    <span className={`material-symbols-outlined text-[18px] ${activeStep === n ? 'text-white' : 'text-[#B45309]'}`}>{icon}</span>
                    <span>{label}</span>
                  </button>
                ))}
              </div>

              {/* Step 1: Select Pooja */}
              {activeStep === 1 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  {[
                    { icon: 'local_fire_department', name: 'Ganapathi Homam', desc: 'Obstacle removal & auspicious beginnings.', dur: '90-120 mins', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC83w8DZVxYVIwII4H8D5R9QPTqcZiut1Oy9CXBBu51shP1eTqFk04tatPlrwxlMCJRU5IkVnqS8H1-T3oY3LRjUR0nxi7GcEQnwqONzWE6kXnp2sMoYbzw8I-Dq6Xfvo6mNBINb9rNyI9Hb4PmlerXaWG0VosIPa_UoZ3l1upuv7g0fAQLpTB00q3VNIuhW8x886O-VNfdAssG1F33sxioiEY8fgpu8kkjIkaIW6ee' },
                    { icon: 'auto_stories', name: 'Satyanarayana Vratham', desc: 'Family prosperity, peace, and sacred katha.', dur: '2.5 - 3 hours', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC83w8DZVxYVIwII4H8D5R9QPTqcZiut1Oy9CXBBu51shP1eTqFk04tatPlrwxlMCJRU5IkVnqS8H1-T3oY3LRjUR0nxi7GcEQnwqONzWE6kXnp2sMoYbzw8I-Dq6Xfvo6mNBINb9rNyI9Hb4PmlerXaWG0VosIPa_UoZ3l1upuv7g0fAQLpTB00q3VNIuhW8x886O-VNfdAssG1F33sxioiEY8fgpu8kkjIkaIW6ee' },
                    { icon: 'cottage', name: 'Gruha Pravesham', desc: 'Complete sanctification for your new home.', dur: '3 - 4 hours', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC83w8DZVxYVIwII4H8D5R9QPTqcZiut1Oy9CXBBu51shP1eTqFk04tatPlrwxlMCJRU5IkVnqS8H1-T3oY3LRjUR0nxi7GcEQnwqONzWE6kXnp2sMoYbzw8I-Dq6Xfvo6mNBINb9rNyI9Hb4PmlerXaWG0VosIPa_UoZ3l1upuv7g0fAQLpTB00q3VNIuhW8x886O-VNfdAssG1F33sxioiEY8fgpu8kkjIkaIW6ee' },
                    { icon: 'sunny', name: 'Navagraha Homam', desc: 'Balancing 9 celestial planetary energies.', dur: '2 hours', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC83w8DZVxYVIwII4H8D5R9QPTqcZiut1Oy9CXBBu51shP1eTqFk04tatPlrwxlMCJRU5IkVnqS8H1-T3oY3LRjUR0nxi7GcEQnwqONzWE6kXnp2sMoYbzw8I-Dq6Xfvo6mNBINb9rNyI9Hb4PmlerXaWG0VosIPa_UoZ3l1upuv7g0fAQLpTB00q3VNIuhW8x886O-VNfdAssG1F33sxioiEY8fgpu8kkjIkaIW6ee' },
                  ].map(({ icon, name, desc, dur, img }) => (
                    <div
                      key={name}
                      onClick={() => setSelectedPooja(name)}
                      className={`cursor-pointer group relative overflow-hidden rounded-2xl transition-all duration-300 border-2 ${
                        selectedPooja === name 
                          ? 'border-[#7F1D1D] shadow-[0_0_0_4px_rgba(127,29,29,0.1)] scale-[1.02]' 
                          : 'border-[#F0E8D5] hover:border-[#B45309]/50 hover:shadow-lg'
                      }`}
                    >
                      <div className="absolute inset-0 z-0">
                        <img src={img} alt={name} className="w-full h-full object-cover opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 mix-blend-multiply" />
                      </div>
                      <div className="relative z-10 p-6 flex flex-col h-full bg-gradient-to-b from-white/90 to-white/95">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${selectedPooja === name ? 'bg-[#7F1D1D] text-white' : 'bg-[#FEF3C7] text-[#B45309]'}`}>
                          <span className="material-symbols-outlined text-[24px]">{icon}</span>
                        </div>
                        <h3 className={`font-serif text-lg font-bold mb-2 ${selectedPooja === name ? 'text-[#7F1D1D]' : 'text-[#4A0404]'}`}>{name}</h3>
                        <p className="text-[#78716C] text-sm leading-relaxed mb-6 flex-grow">{desc}</p>
                        <div className="flex items-center justify-between border-t border-[#F0E8D5] pt-4">
                          <span className="text-[#92400E] text-xs font-semibold uppercase tracking-widest flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">schedule</span> {dur}
                          </span>
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${selectedPooja === name ? 'bg-[#7F1D1D] text-white' : 'bg-[#F0E8D5] text-[#A8A29E]'}`}>
                            <span className="material-symbols-outlined text-[14px]">done</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Step 2: Date & Muhurtham */}
              {activeStep === 2 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="p-6 bg-white border border-[#F0E8D5] rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#B45309]">calendar_today</span>
                      <h3 className="font-serif text-lg font-bold text-[#4A0404]">Preferred Date</h3>
                    </div>
                    <input className="w-full p-4 rounded-xl bg-[#FFFDF7] border border-[#E5E5E5] text-on-surface text-base focus:border-[#B45309] focus:ring-1 focus:ring-[#B45309] outline-none transition-all" type="date" defaultValue="2026-10-18" />
                    <div className="px-4 py-3 bg-[#FEF3C7]/50 rounded-xl border border-[#FBBF24]/30 flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#D97706] text-[18px]">wb_twilight</span>
                      <span className="text-xs text-[#92400E] font-medium leading-relaxed">Tithi: Shukla Panchami<br/>Considered highly auspicious for this ritual.</span>
                    </div>
                  </div>

                  <div className="p-6 bg-white border border-[#F0E8D5] rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#B45309]">schedule</span>
                      <h3 className="font-serif text-lg font-bold text-[#4A0404]">Muhurtham Slot</h3>
                    </div>
                    <div className="flex flex-col gap-3">
                      <button className="w-full text-left p-4 rounded-xl bg-gradient-to-r from-[#7F1D1D] to-[#92400E] text-white shadow-md relative overflow-hidden group">
                        <span className="absolute top-0 right-0 px-2 py-1 bg-white/20 text-white text-[10px] font-bold uppercase tracking-wider rounded-bl-lg">Ideal</span>
                        <div className="flex flex-col">
                          <span className="font-bold text-base">08:00 AM - 10:30 AM</span>
                          <span className="text-white/80 text-xs mt-1">Shubh Choghadiya</span>
                        </div>
                      </button>
                      <button className="w-full text-left p-4 rounded-xl bg-[#FFFDF7] border border-[#E5E5E5] hover:border-[#B45309]/40 text-on-surface transition-colors flex flex-col">
                        <span className="font-semibold text-sm">11:30 AM - 01:00 PM</span>
                        <span className="text-on-surface-variant text-xs mt-1">Abhijit Muhurtham</span>
                      </button>
                    </div>
                  </div>

                  <div className="p-6 bg-white border border-[#F0E8D5] rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#B45309]">record_voice_over</span>
                      <h3 className="font-serif text-lg font-bold text-[#4A0404]">Priest Language</h3>
                    </div>
                    <p className="text-xs text-on-surface-variant">Select the language for the priest's explanations and sankalpam.</p>
                    <div className="flex flex-wrap gap-2">
                      {['Telugu', 'Sanskrit', 'Hindi', 'English'].map((lang, i) => (
                        <button key={lang} className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${i === 0 ? 'bg-[#FEF3C7] text-[#92400E] border border-[#FBBF24]/50' : 'bg-[#FFFDF7] border border-[#E5E5E5] text-on-surface-variant hover:border-[#B45309]/30'}`}>
                          {lang}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Location & Materials */}
              {activeStep === 3 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="p-6 bg-white border border-[#F0E8D5] rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col gap-5">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#B45309]">location_on</span>
                      <h3 className="font-serif text-lg font-bold text-[#4A0404]">Ceremony Venue</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['Residence / Flat', 'Function Hall', 'Temple'].map((loc, i) => (
                        <button key={loc} className={`flex-1 py-3 px-4 text-center rounded-xl text-sm font-semibold transition-colors ${i === 0 ? 'bg-[#FEF3C7] text-[#92400E] border border-[#FBBF24]/50' : 'bg-[#FFFDF7] border border-[#E5E5E5] text-on-surface-variant hover:border-[#B45309]/30'}`}>
                          {loc}
                        </button>
                      ))}
                    </div>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
                      <input className="w-full py-4 pl-12 pr-4 rounded-xl bg-[#FFFDF7] border border-[#E5E5E5] text-on-surface text-sm focus:border-[#B45309] focus:ring-1 focus:ring-[#B45309] outline-none transition-all" placeholder="Enter City & Area (e.g., Jubilee Hills, Hyderabad)" type="text" />
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-[#FEF3C7]/40 to-[#FFEDD5]/40 border border-[#FBBF24]/30 rounded-2xl shadow-sm flex flex-col justify-between gap-4 relative overflow-hidden">
                    <div className="absolute -right-10 -bottom-10 opacity-10 rotate-12">
                      <span className="material-symbols-outlined text-[120px] text-[#B45309]">inventory_2</span>
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[#B45309]">spa</span>
                          <h3 className="font-serif text-lg font-bold text-[#4A0404]">Samagri Kit</h3>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider">Premium Inclusion</span>
                      </div>
                      <p className="text-sm text-[#78716C] leading-relaxed">
                        Curated A2 Gir cow ghee, dry fruits, fresh tropical flowers, certified samidha wood, and pristine brass vessels. Delivered directly with the Purohit.
                      </p>
                    </div>
                    <div className="relative z-10 flex items-center gap-3 pt-4 border-t border-[#FBBF24]/20">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <span className="material-symbols-outlined text-green-600">verified</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[#92400E] font-bold text-sm">Zero Shopping Hassle</span>
                        <span className="text-[#78716C] text-xs">Everything arranged for you.</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-[#F0E8D5] relative z-10 gap-4 mt-2">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FFFDF7] border border-[#E5E5E5]">
                  <div className="w-10 h-10 rounded-full bg-[#FEF3C7] flex items-center justify-center text-[#B45309] shrink-0">
                    <span className="material-symbols-outlined text-[20px]">support_agent</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] uppercase tracking-widest text-on-surface-variant font-semibold">Concierge Support</span>
                    <a href="tel:1800VEDACARE" className="text-sm font-bold text-[#4A0404] hover:text-[#B45309] transition-colors">1800-VEDA-CARE</a>
                  </div>
                </div>
                <Link href="/book" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#7F1D1D] to-[#4A0404] hover:from-[#6B1818] hover:to-[#3F0303] text-white font-bold shadow-xl shadow-[#7F1D1D]/20 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
                  <span>Continue to Checkout</span>
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* POOJA DISCOVERY GRID (MASTERPIECE LIGHT) */}
        <section className="w-full py-32 bg-[#FFFDF7] relative overflow-hidden border-y border-[#F0E8D5]">
          {/* Subtle Ambient Lighting */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#FEF3C7]/40 via-transparent to-transparent rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#FFEDD5]/40 via-transparent to-transparent rounded-full blur-[60px] pointer-events-none"></div>

          <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col gap-16 relative z-10">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-[#E5D5B0] pb-10">
              <div className="flex flex-col gap-4 max-w-3xl">
                <div className="inline-flex items-center gap-3">
                  <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#B45309]"></div>
                  <span className="text-[#92400E] text-sm font-black uppercase tracking-[0.25em]">
                    Ritual Portfolio
                  </span>
                  <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#B45309]"></div>
                </div>
                <h2 className="font-serif text-5xl md:text-7xl text-[#4A0404] font-bold leading-[1.1] tracking-tight">
                  Ceremonies for <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#92400E] to-[#B45309] italic font-medium">Every Milestone</span>
                </h2>
              </div>
              <div className="max-w-sm">
                <p className="text-[#78716C] text-lg leading-relaxed">
                  Every ritual is conducted strictly according to Vedic scriptures with complete pronunciation and clear explanations for your family.
                </p>
                <Link href="/poojas" className="group inline-flex items-center gap-2 mt-6 text-[#7F1D1D] font-bold uppercase tracking-widest text-sm hover:text-[#4A0404] transition-colors">
                  <span className="border-b-2 border-[#7F1D1D]/30 pb-0.5 group-hover:border-[#4A0404] transition-colors">Explore All 80+ Poojas</span>
                  <span className="material-symbols-outlined transform group-hover:translate-x-1 transition-transform text-[18px]">east</span>
                </Link>
              </div>
            </div>

            {/* Bento Grid (Light/Warm Palette) */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[340px]">
              
              {/* Card 1: Large Featured */}
              <Link href="/poojas" className="group relative col-span-1 md:col-span-2 lg:col-span-2 row-span-2 rounded-[32px] overflow-hidden bg-white shadow-xl border border-[#F0E8D5] hover:border-[#B45309]/30 transition-all duration-700 hover:-translate-y-2 block">
                <div className="absolute inset-0 z-0 bg-[#FFF8E7]">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC83w8DZVxYVIwII4H8D5R9QPTqcZiut1Oy9CXBBu51shP1eTqFk04tatPlrwxlMCJRU5IkVnqS8H1-T3oY3LRjUR0nxi7GcEQnwqONzWE6kXnp2sMoYbzw8I-Dq6Xfvo6mNBINb9rNyI9Hb4PmlerXaWG0VosIPa_UoZ3l1upuv7g0fAQLpTB00q3VNIuhW8x886O-VNfdAssG1F33sxioiEY8fgpu8kkjIkaIW6ee" alt="Satyanarayana Vratham" className="w-full h-full object-cover opacity-[0.85] mix-blend-multiply group-hover:scale-105 transition-transform duration-1000 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
                </div>
                <div className="absolute inset-0 p-10 flex flex-col justify-end z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-[#F0E8D5] text-[#92400E] text-xs font-bold uppercase tracking-widest shadow-sm">3 hrs</span>
                    <span className="px-4 py-1.5 rounded-full bg-[#7F1D1D] text-white text-xs font-bold uppercase tracking-widest shadow-md">Most Popular</span>
                  </div>
                  <h3 className="font-serif text-4xl md:text-5xl font-bold text-[#4A0404] mb-3 group-hover:text-[#92400E] transition-colors leading-tight">Satyanarayana Vratham</h3>
                  <p className="text-[#78716C] text-base md:text-lg max-w-md leading-relaxed font-medium">Sacred narration and vratham invoking Lord Vishnu for family prosperity, joy, and profound inner peace.</p>
                  
                  <div className="absolute top-10 right-10 w-16 h-16 rounded-full bg-white/90 backdrop-blur-xl flex items-center justify-center text-[#7F1D1D] border border-[#F0E8D5] shadow-lg group-hover:bg-[#FEF3C7] group-hover:border-[#FBBF24]/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                    <span className="material-symbols-outlined text-[32px]">menu_book</span>
                  </div>
                </div>
              </Link>

              {/* Card 2 */}
              <Link href="/poojas" className="group relative col-span-1 md:col-span-1 lg:col-span-2 row-span-1 rounded-[32px] overflow-hidden bg-gradient-to-br from-[#FEF3C7] to-[#FFFDF7] shadow-lg border border-[#F0E8D5] hover:border-[#B45309]/30 transition-all duration-700 hover:-translate-y-2 block">
                <div className="absolute right-0 top-0 bottom-0 w-1/2 z-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FEF3C7] via-[#FEF3C7]/80 to-transparent z-10"></div>
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC83w8DZVxYVIwII4H8D5R9QPTqcZiut1Oy9CXBBu51shP1eTqFk04tatPlrwxlMCJRU5IkVnqS8H1-T3oY3LRjUR0nxi7GcEQnwqONzWE6kXnp2sMoYbzw8I-Dq6Xfvo6mNBINb9rNyI9Hb4PmlerXaWG0VosIPa_UoZ3l1upuv7g0fAQLpTB00q3VNIuhW8x886O-VNfdAssG1F33sxioiEY8fgpu8kkjIkaIW6ee" alt="Homam / Havan" className="w-full h-full object-cover opacity-[0.15] mix-blend-multiply group-hover:scale-110 transition-transform duration-1000 ease-out" />
                </div>
                <div className="absolute inset-0 p-8 flex flex-col justify-center z-10 w-2/3">
                  <div className="w-12 h-12 rounded-full bg-white text-[#D97706] flex items-center justify-center mb-6 shadow-sm border border-[#F0E8D5] group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[24px]">local_fire_department</span>
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-[#4A0404] mb-2">Homam / Havan</h3>
                  <p className="text-[#78716C] text-sm leading-relaxed font-medium">Sacred fire ritual invoking agni for purification, health, and positive planetary harmony.</p>
                </div>
              </Link>

              {/* Card 3 */}
              <Link href="/poojas" className="group relative col-span-1 rounded-[32px] overflow-hidden bg-white shadow-lg border border-[#F0E8D5] hover:border-[#B45309]/30 transition-all duration-700 hover:-translate-y-2 flex flex-col">
                <div className="h-[45%] w-full relative overflow-hidden bg-[#FFF8E7]">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC83w8DZVxYVIwII4H8D5R9QPTqcZiut1Oy9CXBBu51shP1eTqFk04tatPlrwxlMCJRU5IkVnqS8H1-T3oY3LRjUR0nxi7GcEQnwqONzWE6kXnp2sMoYbzw8I-Dq6Xfvo6mNBINb9rNyI9Hb4PmlerXaWG0VosIPa_UoZ3l1upuv7g0fAQLpTB00q3VNIuhW8x886O-VNfdAssG1F33sxioiEY8fgpu8kkjIkaIW6ee" alt="Gruha Pravesham" className="w-full h-full object-cover opacity-70 mix-blend-multiply group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                </div>
                <div className="flex-1 w-full px-8 pb-8 pt-4 flex flex-col justify-end relative z-10 bg-white">
                  <h3 className="font-serif text-2xl font-bold text-[#4A0404] mb-2">Gruha Pravesham</h3>
                  <p className="text-[#78716C] text-sm leading-relaxed font-medium">Housewarming ceremony with Gomatha pooja and Vastu homam.</p>
                </div>
              </Link>

              {/* Card 4 */}
              <Link href="/poojas" className="group relative col-span-1 rounded-[32px] overflow-hidden bg-gradient-to-br from-[#F0FDF4] to-white shadow-lg border border-[#E2E8F0] hover:border-green-300 transition-all duration-700 hover:-translate-y-2 flex flex-col p-8 justify-between">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-full bg-white text-green-700 flex items-center justify-center shadow-sm border border-green-100 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[24px]">child_care</span>
                  </div>
                  <span className="text-green-700 text-xs font-bold uppercase tracking-widest">2 hrs</span>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#4A0404] mb-3">Namakarana Pooja</h3>
                  <p className="text-[#78716C] text-sm leading-relaxed font-medium">Sacred Vedic naming ritual aligning astrological nakshatra for the newborn.</p>
                </div>
              </Link>

            </div>

          </div>
        </section>

        {/* HOW IT WORKS TIMELINE */}
        <section className="w-full py-24 bg-[#4A0404] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none"></div>
          <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-[#7F1D1D] rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 relative z-10">
            
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-4 mb-20">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#FEF3C7] text-xs font-bold uppercase tracking-widest shadow-sm backdrop-blur-md">
                <span className="material-symbols-outlined text-[16px]">sync</span>
                The Frictionless Process
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight text-white drop-shadow-md">
                From <span className="italic text-[#FBBF24]">"We Need a Pooja"</span> to <span className="italic text-[#FBBF24]">"It's Taken Care Of"</span>
              </h2>
              <p className="text-white/70 text-base md:text-lg max-w-2xl mt-2">
                No endless phone tag. No "Pandit ji is on the way" suspense. A streamlined, fully transparent journey for your family's peace of mind.
              </p>
            </div>

            <div className="relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden lg:block absolute top-[52px] left-0 right-0 h-1 bg-gradient-to-r from-[#7F1D1D] via-[#FBBF24] to-[#7F1D1D] rounded-full opacity-30"></div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
                {[
                  { n: '01', title: 'Choose Pooja', desc: 'Select the exact ceremony according to your family tradition, deity, or milestone.', icon: 'auto_stories' },
                  { n: '02', title: 'Pick Date & Time', desc: 'Choose your auspicious muhurtham slot or request our astrologer to calculate it.', icon: 'calendar_month' },
                  { n: '03', title: 'Specify Venue', desc: 'Home, clubhouse, rented hall, or temple courtyard. We map transit precisely.', icon: 'location_on' },
                  { n: '04', title: 'Add Samagri Kit', desc: 'Opt for our curated kit so you don’t spend hours tracking down rare items.', icon: 'inventory_2' },
                  { n: '05', title: 'Punctual Ritual', desc: 'Ayyagaru arrives 30 mins before muhurtham, sets the mandapam, and conducts.', icon: 'verified' },
                ].map(({ n, title, desc, icon }, idx) => (
                  <div key={n} className="flex flex-col items-center text-center gap-5 group">
                    <div className="relative">
                      <div className="w-28 h-28 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex flex-col items-center justify-center shadow-xl group-hover:bg-[#FBBF24] group-hover:border-[#FBBF24] transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_0_40px_rgba(251,191,36,0.3)]">
                        <span className="material-symbols-outlined text-[32px] text-[#FBBF24] group-hover:text-[#4A0404] transition-colors">{icon}</span>
                        <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#7F1D1D] border-2 border-[#4A0404] flex items-center justify-center text-xs font-bold text-white shadow-md">
                          {n}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 px-2">
                      <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#FBBF24] transition-colors">{title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-20">
              <Link href="/book" className="px-8 py-4 rounded-xl bg-white text-[#4A0404] font-bold shadow-[0_8px_30px_rgba(255,255,255,0.15)] hover:bg-[#FBBF24] hover:shadow-[0_8px_30px_rgba(251,191,36,0.25)] hover:-translate-y-1 transition-all flex items-center gap-2">
                Experience the Process
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>

          </div>
        </section>

        {/* ZERO-STRESS PROVISIONING (REFINED) */}
        <section className="w-full py-24 bg-white relative">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10">
            <div className="bg-[#FFFDF7] border border-[#F0E8D5] rounded-3xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-2">
              
              {/* Content Side */}
              <div className="p-10 md:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-[#92400E] mb-4">
                  <span className="material-symbols-outlined text-lg">inventory_2</span>
                  <span className="text-xs font-bold uppercase tracking-widest">Zero-Stress Provisioning</span>
                </div>
                <h2 className="font-serif text-4xl text-[#4A0404] font-bold leading-tight mb-6">
                  Everything the Pooja Needs.<br />
                  <span className="text-[#92400E] italic">One Less Thing for You.</span>
                </h2>
                <p className="text-[#78716C] text-base leading-relaxed mb-10">
                  Eliminate running around busy market stalls deciphering handwritten Sanskrit lists. We curate, verify, and deliver premium-grade ritual samagri directly to your doorstep.
                </p>
                
                <div className="flex flex-col gap-6">
                  {[
                    { icon: 'eco', title: 'Vedic Samagri & Herbs', desc: 'Kumkum, turmeric roots, navadhanyalu, and sacred darbha grass.' },
                    { icon: 'opacity', title: 'A2 Gir Cow Ghee & Camphor', desc: 'Bilona-churned desi cow ghee and chemical-free bhimseni camphor.' },
                    { icon: 'park', title: 'Sacred Samidha', desc: 'Moduga (Palasha) and Ravi wood sticks cut to precise ritual measure.' },
                  ].map(({ icon, title, desc }) => (
                    <div key={title} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#FEF3C7] flex items-center justify-center text-[#B45309] shrink-0 mt-1">
                        <span className="material-symbols-outlined text-[20px]">{icon}</span>
                      </div>
                      <div className="flex flex-col">
                        <h4 className="font-serif text-lg font-bold text-[#4A0404]">{title}</h4>
                        <p className="text-[#78716C] text-sm mt-1">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Image & Card Side */}
              <div className="relative bg-[#FEF3C7] min-h-[400px] lg:min-h-full overflow-hidden flex items-center justify-center p-8">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC83w8DZVxYVIwII4H8D5R9QPTqcZiut1Oy9CXBBu51shP1eTqFk04tatPlrwxlMCJRU5IkVnqS8H1-T3oY3LRjUR0nxi7GcEQnwqONzWE6kXnp2sMoYbzw8I-Dq6Xfvo6mNBINb9rNyI9Hb4PmlerXaWG0VosIPa_UoZ3l1upuv7g0fAQLpTB00q3VNIuhW8x886O-VNfdAssG1F33sxioiEY8fgpu8kkjIkaIW6ee" 
                  alt="Premium Pooja Samagri Kit"
                  className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-50"
                />
                
                <div className="relative z-10 w-full max-w-sm bg-white/90 backdrop-blur-md rounded-2xl border border-white p-6 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-[#F0E8D5] pb-4 mb-4">
                    <h3 className="font-serif text-xl font-bold text-[#4A0404]">Complete Ritual Kit</h3>
                    <span className="bg-green-100 text-green-800 text-[10px] font-bold uppercase px-2 py-1 rounded-full">Certified Pure</span>
                  </div>
                  <ul className="flex flex-col gap-3 text-sm text-[#78716C] mb-6">
                    <li className="flex justify-between"><span>Items Count:</span><strong className="text-[#4A0404]">32+ Verified Items</strong></li>
                    <li className="flex justify-between"><span>Packaging:</span><strong className="text-[#4A0404]">Eco-friendly Pouches</strong></li>
                    <li className="flex justify-between"><span>Delivery:</span><strong className="text-[#4A0404]">Delivered with Priest</strong></li>
                  </ul>
                  <div className="bg-[#FEF3C7] text-[#92400E] p-4 rounded-xl flex items-center justify-between">
                    <span className="font-bold text-sm uppercase tracking-wide">Included in Booking</span>
                    <span className="material-symbols-outlined text-2xl">check_circle</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* DANDALU AYYAGARU EDITORIAL PROFILE */}
        <section className="w-full py-space-xl bg-surface" id="editorial-profile">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
              {/* Portrait Column */}
              <div className="lg:col-span-5">
                <div className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden shadow-xl bg-surface-container-lowest">
                  <img alt="Portrait of Dandalu Ayyagaru in traditional angavastram" className="w-full h-full object-cover object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC83w8DZVxYVIwII4H8D5R9QPTqcZiut1Oy9CXBBu51shP1eTqFk04tatPlrwxlMCJRU5IkVnqS8H1-T3oY3LRjUR0nxi7GcEQnwqONzWE6kXnp2sMoYbzw8I-Dq6Xfvo6mNBINb9rNyI9Hb4PmlerXaWG0VosIPa_UoZ3l1upuv7g0fAQLpTB00q3VNIuhW8x886O-VNfdAssG1F33sxioiEY8fgpu8kkjIkaIW6ee" />
                  <div className="absolute inset-0 bg-gradient-to-t from-on-surface/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-on-primary">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-container">Veda Vijnana Bhushana</span>
                    <h3 className="font-headline-lg text-headline-lg mt-0.5">Dandalu Ayyagaru</h3>
                    <p className="font-body-sm text-body-sm opacity-90 mt-1">Head Purohit &amp; Spiritual Mentor · 22+ Years Lineage</p>
                  </div>
                </div>
              </div>

              {/* Bio & Credentials Column */}
              <div className="lg:col-span-7 flex flex-col gap-space-md">
                <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container text-on-surface-variant w-fit font-label-sm text-label-sm font-semibold uppercase">
                  <span className="material-symbols-outlined text-primary text-sm">history_edu</span> Vedic Lineage &amp; Conduct
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">
                  Rooted in Tradition. Reverent in Practice. Clear in Guidance.
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Dandalu Ayyagaru was groomed under distinguished Veda Pathashalas, mastering Krishna Yajurveda and Smartha Prayoga traditions. Known for calm composure and authentic Sanskrit enunciation, he bridges ancient sanctity with contemporary family needs.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Every mantra is rendered with its full significance explained in accessible terms, allowing you and your family to actively feel the grace of the ritual rather than remaining passive spectators.
                </p>
                {/* Credential Badges Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-space-sm pt-space-xs">
                  {[
                    ['Tradition', 'Krishna Yajurveda'],
                    ['School', 'Smartha & Vaidika'],
                    ['Languages', 'Telugu, Sanskrit, Hindi'],
                    ['Punctuality', '100% Guaranteed'],
                    ['Verification', 'Background Verified'],
                    ['Experience', '2,400+ Ceremonies'],
                  ].map(([label, val]) => (
                    <div key={label} className="p-space-sm bg-surface-container-low rounded-xl flex flex-col gap-1">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">{label}</span>
                      <span className="font-headline-sm text-headline-sm text-on-surface">{val}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-space-xs">
                  <Link href="/book" className="inline-flex items-center gap-space-sm px-space-xl py-space-sm rounded-full bg-primary-container text-on-primary font-label-md text-label-md shadow-md hover:bg-primary transition-all">
                    <span>Book with Dandalu Ayyagaru</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* THE DANDALU STANDARD (CREATIVE & ANIMATED) */}
        <section className="w-full py-32 bg-[#4A0404] relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#7F1D1D] to-transparent rounded-full blur-[100px] opacity-40 animate-pulse duration-10000"></div>
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-[#92400E] to-transparent rounded-full blur-[120px] opacity-30"></div>
          
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10 flex flex-col gap-20">
            
            <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-6">
              <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-[#FBBF24]/30 bg-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(251,191,36,0.1)]">
                <span className="material-symbols-outlined text-[#FBBF24] text-[18px]">workspace_premium</span>
                <span className="text-[#FBBF24] text-xs font-black uppercase tracking-[0.3em]">Our Promise</span>
              </div>
              <h2 className="font-serif text-5xl md:text-6xl text-white font-bold leading-tight">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBBF24] via-[#FEF3C7] to-[#FBBF24]">Dandalu Standard</span>
              </h2>
              <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed">
                We built this platform to honor the absolute sanctity of Vedic traditions while entirely erasing the modern-day stress of organizing them.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  icon: 'verified_user', 
                  title: 'Certified Vedic Purohits', 
                  desc: 'Every priest undergoes strict Veda certification and background reviews. No compromises on authenticity.',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC83w8DZVxYVIwII4H8D5R9QPTqcZiut1Oy9CXBBu51shP1eTqFk04tatPlrwxlMCJRU5IkVnqS8H1-T3oY3LRjUR0nxi7GcEQnwqONzWE6kXnp2sMoYbzw8I-Dq6Xfvo6mNBINb9rNyI9Hb4PmlerXaWG0VosIPa_UoZ3l1upuv7g0fAQLpTB00q3VNIuhW8x886O-VNfdAssG1F33sxioiEY8fgpu8kkjIkaIW6ee'
                },
                { 
                  icon: 'spa', 
                  title: 'Verified Sacred Samagri', 
                  desc: 'Pre-measured, premium organic samagri delivered right on schedule so your family stays focused on devotion.',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC83w8DZVxYVIwII4H8D5R9QPTqcZiut1Oy9CXBBu51shP1eTqFk04tatPlrwxlMCJRU5IkVnqS8H1-T3oY3LRjUR0nxi7GcEQnwqONzWE6kXnp2sMoYbzw8I-Dq6Xfvo6mNBINb9rNyI9Hb4PmlerXaWG0VosIPa_UoZ3l1upuv7g0fAQLpTB00q3VNIuhW8x886O-VNfdAssG1F33sxioiEY8fgpu8kkjIkaIW6ee'
                },
                { 
                  icon: 'schedule', 
                  title: 'Punctual Arrival', 
                  desc: 'Our priests arrive 30 minutes ahead of the sacred muhurtham time to prepare the mandapam meticulously.',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC83w8DZVxYVIwII4H8D5R9QPTqcZiut1Oy9CXBBu51shP1eTqFk04tatPlrwxlMCJRU5IkVnqS8H1-T3oY3LRjUR0nxi7GcEQnwqONzWE6kXnp2sMoYbzw8I-Dq6Xfvo6mNBINb9rNyI9Hb4PmlerXaWG0VosIPa_UoZ3l1upuv7g0fAQLpTB00q3VNIuhW8x886O-VNfdAssG1F33sxioiEY8fgpu8kkjIkaIW6ee'
                }
              ].map(({ icon, title, desc, img }, i) => (
                <div key={title} className={`group relative rounded-[32px] overflow-hidden bg-[#7F1D1D]/20 border border-white/10 hover:border-[#FBBF24]/50 transition-all duration-700 hover:-translate-y-3 flex flex-col h-[480px] ${i === 1 ? 'md:-translate-y-8' : ''}`}>
                  <div className="h-[55%] w-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#4A0404] z-0"></div>
                    <img src={img} alt={title} className="w-full h-full object-cover opacity-50 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-110 group-hover:opacity-90 transition-all duration-1000 ease-out relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#4A0404] via-[#4A0404]/50 to-transparent z-20"></div>
                  </div>
                  
                  <div className="flex-1 p-8 flex flex-col items-center text-center relative z-30 -mt-12">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FBBF24] to-[#B45309] p-[2px] mb-6 group-hover:shadow-[0_0_30px_rgba(251,191,36,0.4)] transition-all duration-500">
                      <div className="w-full h-full rounded-full bg-[#4A0404] flex items-center justify-center">
                        <span className="material-symbols-outlined text-[32px] text-[#FBBF24]">{icon}</span>
                      </div>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-white mb-3 group-hover:text-[#FBBF24] transition-colors">{title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed font-light">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
                 {[
                   { i: 'payments', t: 'Transparent Pricing', d: 'Zero ambiguity. No hidden demands on the day.' },
                   { i: 'diversity_1', t: 'Custom Traditions', d: 'Tailored precisely to your Smartha or Vaishnava customs.' },
                   { i: 'headset_mic', t: 'Dedicated Concierge', d: 'Direct 24/7 assistance from booking to completion.' }
                 ].map(item => (
                   <div key={item.t} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
                     <div className="w-10 h-10 rounded-full bg-[#7F1D1D] flex items-center justify-center flex-shrink-0 text-[#FBBF24]">
                        <span className="material-symbols-outlined text-[20px]">{item.i}</span>
                     </div>
                     <div className="flex flex-col">
                       <span className="text-white font-bold text-sm">{item.t}</span>
                       <span className="text-white/50 text-xs mt-0.5">{item.d}</span>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
            
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="w-full py-space-xl bg-surface">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10">
            <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-primary via-primary-container to-secondary p-space-xl md:p-20 text-on-primary shadow-xl">
              <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>
              <div className="relative z-10 max-w-2xl flex flex-col gap-space-md">
                <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-surface-container-lowest/20 backdrop-blur-sm w-fit font-label-sm text-label-sm uppercase tracking-wider">
                  <span className="material-symbols-outlined text-sm">wb_sunny</span> Auspicious Muhurtham Booking
                </div>
                <h2 className="font-display-hero text-display-hero leading-tight">
                  Your pooja matters.<br />
                  Arranging it shouldn&apos;t be stressful.
                </h2>
                <p className="font-body-lg text-body-lg opacity-90 max-w-xl">
                  Choose the ritual, pick the date, and let the rest fall gracefully into place. Reserve your certified purohit today with Dandalu Ayyagaru.
                </p>
                <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                  <Link href="/poojas" className="inline-flex items-center gap-space-sm px-space-xl py-space-md rounded-full bg-surface-container-lowest text-primary font-label-md text-label-md shadow-lg hover:bg-surface-container-low transition-all">
                    <span>Book a Pooja Now</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                  <a href="tel:1800VEDACARE" className="inline-flex items-center gap-space-sm px-space-lg py-space-md rounded-full bg-surface-container-lowest/15 backdrop-blur-sm text-on-primary font-label-md text-label-md hover:bg-surface-container-lowest/25 transition-all">
                    <span className="material-symbols-outlined text-sm">call</span>
                    <span>Speak to Concierge</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
