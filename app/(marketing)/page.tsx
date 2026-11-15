'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedPooja, setSelectedPooja] = useState<string>('Gruha Pravesham');

  return (
    <main className="w-full pt-16 sm:pt-20 bg-[#FFFDF7] min-h-[calc(100dvh-4rem)] sm:min-h-[calc(100dvh-5rem)] font-sans">
      <div className="flex flex-col w-full">

        {/* HERO SECTION */}
        <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFFDF7] via-[#FFF8E7] to-[#FFFDF7] py-14 lg:py-24 border-b border-[#F0E8D5]">
          {/* Subtle Ambient Warm Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FEF3C7]/40 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#FFEDD5]/40 rounded-full blur-[90px] pointer-events-none"></div>

          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
              {/* Left Column: Authentic Cultural Copy */}
              <div className="w-full lg:w-[56%] flex flex-col gap-5 z-10 lg:pr-6 text-center lg:text-left items-center lg:items-start">
                
                {/* Cultural Pill */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEF3C7] border border-[#FBBF24]/40 text-[#92400E] shadow-sm">
                  <span className="text-[14px]">🚩</span>
                  <span className="font-semibold text-xs uppercase tracking-wider">
                    వేదోక్త సాంప్రదాయం · విశ్వసనీయ పురోహిత సేవలు
                  </span>
                </div>

                {/* Primary Headline */}
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#4A0404] font-bold leading-[1.15] tracking-tight">
                  మీ ఇంట్లో శుభకార్యానికి,<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#92400E] via-[#B45309] to-[#7F1D1D] italic">
                    అనుభవజ్ఞులైన పురోహితులు
                  </span> &amp; సంపూర్ణ పూజా సామాగ్రి.
                </h1>

                {/* Subtitle */}
                <p className="text-[#57534E] text-base sm:text-lg max-w-xl leading-relaxed">
                  Book certified Vedic purohits for Gruha Pravesham, Satyanarayana Vratam, Ganapathi Homam &amp; Vivaham. Authentic mantra uccharana, meaningful Telugu explanation, and zero last-minute stress.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                  <Link 
                    href="/poojas" 
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#7F1D1D] to-[#92400E] hover:from-[#6B1818] hover:to-[#78350F] text-white font-semibold text-sm shadow-lg shadow-[#7F1D1D]/25 hover:-translate-y-0.5 transition-all duration-200 min-h-[46px]"
                  >
                    <span>Book a Pooja (పూజ బుక్ చేయండి)</span>
                    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_forward</span>
                  </Link>

                  <a 
                    href="https://wa.me/919154088200?text=Namaskaram%20Dandalu%20Ayyagaru,%20I%20want%20to%20inquire%20about%20a%20pooja." 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white border border-[#25D366]/40 hover:border-[#25D366] text-[#1E7E34] font-semibold text-sm shadow-sm hover:bg-[#F0FDF4] transition-all duration-200 min-h-[46px]"
                  >
                    <span className="text-[18px]">💬</span>
                    <span>WhatsApp Assistance</span>
                  </a>
                </div>

                {/* Micro-trust Bar with Cultural Assurances */}
                <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-[#78716C]">
                  {[
                    { icon: 'verified', text: '100% Shastra Sammatham' },
                    { icon: 'inventory_2', text: 'Fresh Samagri Included' },
                    { icon: 'schedule', text: 'Brahma Muhurtham Punctual' },
                    { icon: 'translate', text: 'Telugu & Sanskrit Chanting' },
                  ].map(tag => (
                    <span 
                      key={tag.text} 
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E7E5E4] shadow-xs text-xs font-medium text-[#44403C]"
                    >
                      <span className="material-symbols-outlined text-[#B45309] text-[15px]" aria-hidden="true">{tag.icon}</span> 
                      {tag.text}
                    </span>
                  ))}
                </div>

              </div>

              {/* Right Column: Authentic Purohit Portrait */}
              <div className="w-full lg:w-[44%] relative flex justify-center lg:justify-end mt-4 lg:mt-0">
                <div className="relative w-full max-w-[460px] rounded-[28px] overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img
                    alt="Sri Dandalu Ayyagaru, experienced Vedic purohit"
                    className="w-full aspect-[4/4.5] object-cover object-top"
                    loading="eager"
                    src="/images/priest-dandalu-ayyagaru.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4A0404]/90 via-[#4A0404]/20 to-transparent" />
                  
                  {/* Floating Badges */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-2 border border-[#F0E8D5]">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[#92400E] text-xs font-bold uppercase tracking-wider">Available for Hyderabad &amp; AP</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl flex flex-col gap-1 border border-[#F0E8D5]">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 text-[#92400E] font-semibold text-xs uppercase tracking-wider">
                        <span className="material-symbols-outlined text-sm">verified</span>
                        వేద విజ్ఞాన భూషణ
                      </span>
                      <span className="inline-flex items-center gap-1 bg-[#FEF3C7] text-[#92400E] px-2.5 py-0.5 rounded-full font-bold text-xs">
                        <span className="material-symbols-outlined text-[13px] text-amber-600">star</span> 4.9 (2,400+ Poojas)
                      </span>
                    </div>
                    <p className="font-serif text-xl font-bold text-[#4A0404]">ఆచార్య దండాలు అయ్యగారు</p>
                    <p className="text-xs text-[#78716C]">Krishna Yajurveda &amp; Smartha Prayoga · Traditional Purohit</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* QUICK 3-STEP INTERACTIVE BOOKING PREVIEW */}
        <section className="w-full py-20 bg-[#FFFDF7] relative overflow-hidden" id="quick-book">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
            <div className="bg-white border border-[#F0E8D5] rounded-[32px] shadow-[0_8px_40px_rgba(157,67,0,0.06)] p-6 sm:p-10 md:p-12 flex flex-col gap-8 relative overflow-hidden">
              
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[#B45309]">
                    <span className="material-symbols-outlined text-[18px]">event_available</span>
                    <span className="font-bold text-xs uppercase tracking-widest">సరళమైన బుకింగ్ · 3 Simple Steps</span>
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#4A0404] font-bold leading-tight">
                    Reserve Your Purohit in <span className="text-[#92400E] italic">Minutes</span>
                  </h2>
                </div>
                <p className="text-[#78716C] text-sm max-w-md leading-relaxed">
                  Select your ritual, pick the auspicious muhurtham, and we take care of the entire mandapam preparation &amp; samagri.
                </p>
              </div>

              {/* Step Buttons */}
              <div className="flex flex-wrap gap-2 bg-[#FFF8E7] p-1.5 rounded-2xl w-fit border border-[#F0E8D5]">
                {[
                  { n: 1, label: '1. Choose Ritual (పూజ ఎంచుకోండి)', icon: 'auto_stories' },
                  { n: 2, label: '2. Muhurtham (ముహూర్తం)', icon: 'schedule' },
                  { n: 3, label: '3. Venue & Samagri (సామాగ్రి వివరాలు)', icon: 'inventory_2' },
                ].map(({ n, label, icon }) => (
                  <button
                    key={n}
                    onClick={() => setActiveStep(n)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 ${
                      activeStep === n 
                        ? 'bg-gradient-to-r from-[#92400E] to-[#7F1D1D] text-white shadow-md' 
                        : 'text-[#92400E] hover:bg-white'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[16px]">{icon}</span>
                    <span>{label}</span>
                  </button>
                ))}
              </div>

              {/* Step 1: Ritual Cards with Authentic Devotional Images */}
              {activeStep === 1 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {[
                    { 
                      icon: 'local_fire_department', 
                      name: 'Ganapathi Homam', 
                      telugu: 'గణపతి హోమం',
                      desc: 'Obstacle removal & auspicious beginnings for new work or milestones.', 
                      dur: '1.5 - 2 hours', 
                      img: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&q=80&w=600' 
                    },
                    { 
                      icon: 'auto_stories', 
                      name: 'Satyanarayana Vratham', 
                      telugu: 'సత్యనారాయణ వ్రతం',
                      desc: 'Family prosperity, peace, and sacred katha with prasadam preparation.', 
                      dur: '2.5 - 3 hours', 
                      img: 'https://images.unsplash.com/photo-1604604994733-411db1898739?auto=format&fit=crop&q=80&w=600' 
                    },
                    { 
                      icon: 'cottage', 
                      name: 'Gruha Pravesham', 
                      telugu: 'గృహప్రవేశం',
                      desc: 'Complete house sanctification with Gomatha pooja, Vastu homam & Navagraha.', 
                      dur: '3 - 4 hours', 
                      img: 'https://images.unsplash.com/photo-1583324113626-70df0f4deaab?auto=format&fit=crop&q=80&w=600' 
                    },
                    { 
                      icon: 'sunny', 
                      name: 'Navagraha Homam', 
                      telugu: 'నవగ్రహ హోమం',
                      desc: 'Balancing the 9 celestial planetary energies to remove doshas & health hurdles.', 
                      dur: '2 - 2.5 hours', 
                      img: 'https://images.unsplash.com/photo-1543168256-418811576931?auto=format&fit=crop&q=80&w=600' 
                    },
                  ].map(({ icon, name, telugu, desc, dur, img }) => (
                    <div
                      key={name}
                      onClick={() => setSelectedPooja(name)}
                      className={`cursor-pointer group relative overflow-hidden rounded-2xl transition-all duration-300 border-2 flex flex-col bg-white ${
                        selectedPooja === name 
                          ? 'border-[#7F1D1D] shadow-lg ring-2 ring-[#7F1D1D]/20 scale-[1.01]' 
                          : 'border-[#E7E5E4] hover:border-[#B45309]/50 hover:shadow-md'
                      }`}
                    >
                      {/* Authentic Image Header */}
                      <div className="h-36 w-full relative overflow-hidden bg-[#FEF3C7]">
                        <img 
                          src={img} 
                          alt={name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                        <span className="absolute bottom-2 left-3 text-white text-xs font-bold drop-shadow">
                          {telugu}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-5 flex flex-col flex-grow justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h3 className={`font-serif text-lg font-bold ${selectedPooja === name ? 'text-[#7F1D1D]' : 'text-[#4A0404]'}`}>
                              {name}
                            </h3>
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${selectedPooja === name ? 'bg-[#7F1D1D] text-white' : 'bg-[#F0E8D5] text-[#A8A29E]'}`}>
                              <span className="material-symbols-outlined text-[13px]">check</span>
                            </div>
                          </div>
                          <p className="text-[#78716C] text-xs leading-relaxed mb-4">{desc}</p>
                        </div>
                        <div className="border-t border-[#F0E8D5] pt-3 flex items-center justify-between text-xs text-[#92400E] font-medium">
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">schedule</span> {dur}
                          </span>
                          <span className="text-emerald-700 font-semibold">Samagri Included</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Step 2: Muhurtham Picker */}
              {activeStep === 2 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
                  <div className="p-6 bg-[#FFFDF7] border border-[#F0E8D5] rounded-2xl flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-[#4A0404]">
                      <span className="material-symbols-outlined text-[#B45309]">calendar_month</span>
                      <h3 className="font-serif text-base font-bold">Select Date (తేదీ)</h3>
                    </div>
                    <input 
                      className="w-full p-3.5 rounded-xl bg-white border border-[#E5E5E5] text-sm text-[#44403C] focus:border-[#B45309] outline-none" 
                      type="date" 
                      defaultValue="2026-11-20" 
                    />
                    <div className="p-3 bg-[#FEF3C7]/60 rounded-xl border border-[#FBBF24]/30 flex items-start gap-2">
                      <span className="text-[16px]">🕉️</span>
                      <span className="text-xs text-[#92400E] leading-relaxed">
                        <strong>Tithi Check:</strong> Shukla Paksha Ekadashi / Pournami days are considered most auspicious.
                      </span>
                    </div>
                  </div>

                  <div className="p-6 bg-[#FFFDF7] border border-[#F0E8D5] rounded-2xl flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-[#4A0404]">
                      <span className="material-symbols-outlined text-[#B45309]">schedule</span>
                      <h3 className="font-serif text-base font-bold">Auspicious Slot (ముహూర్తం)</h3>
                    </div>
                    <div className="flex flex-col gap-2.5">
                      {[
                        { time: '04:30 AM – 06:00 AM', slot: 'Brahma Muhurtham (Best for Gruha Pravesham)', tag: 'Recommended' },
                        { time: '07:30 AM – 10:00 AM', slot: 'Shubh Choghadiya (Ideal for Homams)' },
                        { time: '11:45 AM – 01:00 PM', slot: 'Abhijit Muhurtham' },
                      ].map((item, idx) => (
                        <button 
                          key={item.time} 
                          className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all ${
                            idx === 1 
                              ? 'bg-[#7F1D1D] text-white border-[#7F1D1D] shadow-sm' 
                              : 'bg-white border-[#E5E5E5] text-[#44403C] hover:border-[#B45309]'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-bold">{item.time}</span>
                            {item.tag && <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-semibold">{item.tag}</span>}
                          </div>
                          <span className={`text-xs block mt-0.5 ${idx === 1 ? 'text-white/80' : 'text-[#78716C]'}`}>{item.slot}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 bg-[#FFFDF7] border border-[#F0E8D5] rounded-2xl flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-[#4A0404]">
                      <span className="material-symbols-outlined text-[#B45309]">record_voice_over</span>
                      <h3 className="font-serif text-base font-bold">Purohit Language (భాష)</h3>
                    </div>
                    <p className="text-xs text-[#78716C]">Choose the language in which you want the mantras and rituals explained to your family:</p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {['Telugu (తెలుగు)', 'Sanskrit (సంస్కృతం)', 'Hindi (हिंदी)', 'Tamil (தமிழ்)', 'Kannada (ಕನ್ನಡ)'].map((lang, i) => (
                        <button 
                          key={lang} 
                          className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                            i === 0 
                              ? 'bg-[#FEF3C7] text-[#92400E] border border-[#FBBF24]' 
                              : 'bg-white border border-[#E5E5E5] text-[#57534E] hover:border-[#B45309]'
                          }`}
                        >
                          {lang}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Venue & Materials */}
              {activeStep === 3 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
                  <div className="p-6 bg-[#FFFDF7] border border-[#F0E8D5] rounded-2xl flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-[#4A0404]">
                      <span className="material-symbols-outlined text-[#B45309]">location_on</span>
                      <h3 className="font-serif text-base font-bold">Venue Type &amp; City</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['Apartment / Flat', 'Independent Villa', 'Function Hall', 'Temple Courtyard'].map((v, i) => (
                        <button 
                          key={v} 
                          className={`flex-1 py-2.5 px-3 text-center rounded-xl text-xs font-semibold ${
                            i === 0 
                              ? 'bg-[#FEF3C7] text-[#92400E] border border-[#FBBF24]' 
                              : 'bg-white border border-[#E5E5E5] text-[#57534E]'
                          }`}
                        >
                          {v}
                        </button>
                      ))}
                    </div>
                    <input 
                      className="w-full p-3.5 rounded-xl bg-white border border-[#E5E5E5] text-sm text-[#44403C] focus:border-[#B45309] outline-none" 
                      placeholder="e.g. Kokapet, Gachibowli, Hyderabad" 
                      defaultValue="Madhapur, Hyderabad"
                    />
                  </div>

                  <div className="p-6 bg-gradient-to-br from-[#FEF3C7]/60 to-[#FFEDD5]/60 border border-[#FBBF24]/40 rounded-2xl flex flex-col justify-between gap-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-[18px]">🪔</span>
                          <h3 className="font-serif text-base font-bold text-[#4A0404]">సంపూర్ణ పూజా సామాగ్రి కిట్</h3>
                        </div>
                        <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase px-2 py-0.5 rounded-full">100% Pure</span>
                      </div>
                      <p className="text-xs text-[#78716C] leading-relaxed">
                        Pure A2 Gir Cow Ghee, Salem Haldi &amp; Kumkum, Bhimseni Camphor, fresh bilwa leaves, navadhanyalu, and sacred samidha wood. Delivered with the purohit.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 border-t border-[#FBBF24]/30 pt-3">
                      <span className="material-symbols-outlined text-[18px] text-emerald-600">check_circle</span>
                      <span>No Market Running Around — We Bring Everything!</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Navigation */}
              <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-[#F0E8D5] gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FEF3C7] flex items-center justify-center text-[#B45309]">
                    <span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-[#78716C] font-semibold">Need Help Choosing a Muhurtham?</p>
                    <a href="tel:+919154088200" className="text-sm font-bold text-[#4A0404] hover:text-[#92400E]">
                      +91 91540 88200 (Direct Call)
                    </a>
                  </div>
                </div>
                <Link 
                  href="/book" 
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#7F1D1D] to-[#92400E] text-white font-bold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                >
                  <span>Proceed to Finalize Booking</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* POOJA DISCOVERY GRID (AUTHENTIC VISUALS) */}
        <section className="w-full py-24 bg-[#FFFDF7] relative overflow-hidden border-b border-[#F0E8D5]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col gap-12 relative z-10">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#F0E8D5] pb-8">
              <div className="flex flex-col gap-2 max-w-2xl">
                <span className="text-[#92400E] text-xs font-bold uppercase tracking-widest">
                  సాంప్రదాయ పూజా విశేషాలు · Popular Ceremonies
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl text-[#4A0404] font-bold leading-tight">
                  Ceremonies for <span className="text-[#92400E] italic">Every Sacred Milestone</span>
                </h2>
              </div>
              <Link 
                href="/poojas" 
                className="group inline-flex items-center gap-2 text-[#7F1D1D] font-bold text-sm uppercase tracking-wider hover:text-[#4A0404] transition-colors"
              >
                <span>View All 80+ Poojas &amp; Homams</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">east</span>
              </Link>
            </div>

            {/* Bento Grid with Distinct Devotional Photos */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              
              {/* Card 1: Satyanarayana Vratham (Featured) */}
              <Link 
                href="/poojas/satyanarayana-vratam" 
                className="group relative col-span-1 md:col-span-2 lg:col-span-2 rounded-3xl overflow-hidden bg-white shadow-md border border-[#F0E8D5] hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="h-64 sm:h-72 w-full relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1604604994733-411db1898739?auto=format&fit=crop&q=80&w=800" 
                    alt="Satyanarayana Vratham Altar" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#7F1D1D] text-white text-[11px] font-bold uppercase tracking-wider">
                    Most Popular · అత్యంత పవిత్రమైనది
                  </span>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold">శ్రీ సత్యనారాయణ స్వామి వ్రతం</h3>
                    <p className="text-xs sm:text-sm text-white/90 mt-1">Sri Satyanarayana Swamy Vratham</p>
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <p className="text-[#78716C] text-sm leading-relaxed mb-4">
                    Complete Vratam with Katha sravanam, Panchamrutha abhishekam, and pure wheat rava prasadam preparation for family prosperity and gratitude.
                  </p>
                  <div className="flex items-center justify-between text-xs text-[#92400E] font-semibold border-t border-[#F0E8D5] pt-3">
                    <span>Duration: 2.5 – 3 Hours</span>
                    <span className="text-[#7F1D1D]">Learn More →</span>
                  </div>
                </div>
              </Link>

              {/* Card 2: Homam & Havan */}
              <Link 
                href="/poojas/maha-ganapathi-homam" 
                className="group relative col-span-1 md:col-span-1 lg:col-span-2 rounded-3xl overflow-hidden bg-white shadow-md border border-[#F0E8D5] hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="h-64 sm:h-72 w-full relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&q=80&w=800" 
                    alt="Maha Ganapathi Homam" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#92400E] text-white text-[11px] font-bold uppercase tracking-wider">
                    Vedic Agni Karyam
                  </span>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold">మహా గణపతి హోమం</h3>
                    <p className="text-xs sm:text-sm text-white/90 mt-1">Maha Ganapathi Homam</p>
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <p className="text-[#78716C] text-sm leading-relaxed mb-4">
                    Sacred fire ritual using pure A2 cow ghee, modaks, and medicinal samidha sticks to invoke Lord Ganesha and clear life obstacles.
                  </p>
                  <div className="flex items-center justify-between text-xs text-[#92400E] font-semibold border-t border-[#F0E8D5] pt-3">
                    <span>Duration: 1.5 – 2 Hours</span>
                    <span className="text-[#7F1D1D]">Learn More →</span>
                  </div>
                </div>
              </Link>

              {/* Card 3: Gruha Pravesham */}
              <Link 
                href="/poojas/gruha-pravesham" 
                className="group relative col-span-1 rounded-3xl overflow-hidden bg-white shadow-md border border-[#F0E8D5] hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="h-44 w-full relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1583324113626-70df0f4deaab?auto=format&fit=crop&q=80&w=600" 
                    alt="Gruha Pravesham" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h4 className="absolute bottom-3 left-3 text-white font-serif font-bold text-lg">గృహప్రవేశం</h4>
                </div>
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <h3 className="font-serif font-bold text-base text-[#4A0404] mb-1">Gruha Pravesham</h3>
                  <p className="text-[#78716C] text-xs leading-relaxed mb-3">Vastu Shanti, milk boiling, Gomatha pooja, and Navagraha mandapam.</p>
                  <span className="text-xs font-semibold text-[#7F1D1D]">View Ritual Details →</span>
                </div>
              </Link>

              {/* Card 4: Navagraha Homam */}
              <Link 
                href="/poojas/navagraha-homam" 
                className="group relative col-span-1 rounded-3xl overflow-hidden bg-white shadow-md border border-[#F0E8D5] hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="h-44 w-full relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1543168256-418811576931?auto=format&fit=crop&q=80&w=600" 
                    alt="Navagraha Homam" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h4 className="absolute bottom-3 left-3 text-white font-serif font-bold text-lg">నవగ్రహ శాంతి</h4>
                </div>
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <h3 className="font-serif font-bold text-base text-[#4A0404] mb-1">Navagraha Shanti Homam</h3>
                  <p className="text-[#78716C] text-xs leading-relaxed mb-3">Harmonizing the 9 planetary forces with navadhanya and dedicated mantras.</p>
                  <span className="text-xs font-semibold text-[#7F1D1D]">View Ritual Details →</span>
                </div>
              </Link>

              {/* Card 5: Namakarana & Baby Ceremonies */}
              <Link 
                href="/poojas" 
                className="group relative col-span-1 rounded-3xl overflow-hidden bg-white shadow-md border border-[#F0E8D5] hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="h-44 w-full relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=600" 
                    alt="Namakarana ceremony" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h4 className="absolute bottom-3 left-3 text-white font-serif font-bold text-lg">నామకరణం</h4>
                </div>
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <h3 className="font-serif font-bold text-base text-[#4A0404] mb-1">Namakaranam (Naming)</h3>
                  <p className="text-[#78716C] text-xs leading-relaxed mb-3">Vedic naming ceremony aligning janma nakshatra and ayushya homam.</p>
                  <span className="text-xs font-semibold text-[#7F1D1D]">View Ritual Details →</span>
                </div>
              </Link>

              {/* Card 6: Vivaha Sanskar */}
              <Link 
                href="/poojas" 
                className="group relative col-span-1 rounded-3xl overflow-hidden bg-white shadow-md border border-[#F0E8D5] hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="h-44 w-full relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1583324113626-70df0f4deaab?auto=format&fit=crop&q=80&w=600" 
                    alt="Vivaha Sanskar" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h4 className="absolute bottom-3 left-3 text-white font-serif font-bold text-lg">వివాహ సంస్కారం</h4>
                </div>
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <h3 className="font-serif font-bold text-base text-[#4A0404] mb-1">Vivaha (Marriage)</h3>
                  <p className="text-[#78716C] text-xs leading-relaxed mb-3">Authentic Saptapadi, Kanyadanam, and Mangalya Dharana by senior purohits.</p>
                  <span className="text-xs font-semibold text-[#7F1D1D]">View Ritual Details →</span>
                </div>
              </Link>

            </div>

          </div>
        </section>

        {/* HOW BOOKING WORKS (GROUNDED & CLEAR) */}
        <section className="w-full py-20 bg-gradient-to-b from-[#4A0404] to-[#3B0202] text-white relative overflow-hidden">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
            
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-3 mb-16">
              <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-white/10 text-[#FEF3C7] text-xs font-bold uppercase tracking-widest">
                సులభమైన విధానం · Simple 5-Step Experience
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
                How Your Pooja is <span className="text-[#FBBF24] italic">Arranged</span>
              </h2>
              <p className="text-white/75 text-sm sm:text-base leading-relaxed">
                No endless phone calls or unclear dakshina demands. Clear communication, verified purohits, and complete peace of mind.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { n: '01', title: 'Choose Pooja', tel: 'పూజ ఎంచుకోండి', desc: 'Select the ceremony as per your family sampradayam and purpose.', icon: 'auto_stories' },
                { n: '02', title: 'Select Muhurtham', tel: 'ముహూర్తం నిర్ణయం', desc: 'Pick your date & time, or ask our astrologer for panchangam advice.', icon: 'calendar_month' },
                { n: '03', title: 'Venue Details', tel: 'స్థలం వివరాలు', desc: 'Flat, independent house, or hall. Purohit contact shared 24h ahead.', icon: 'location_on' },
                { n: '04', title: 'Samagri Included', tel: 'సామాగ్రి తెస్తారు', desc: 'Pure cow ghee, havan herbs, flowers & samidhas delivered fresh.', icon: 'inventory_2' },
                { n: '05', title: 'Sacred Ceremony', tel: 'వేదోక్త నిర్వహణ', desc: 'Purohit arrives 30 mins early, sets up the mandapam, and chants clearly.', icon: 'verified' },
              ].map(({ n, title, tel, desc, icon }) => (
                <div key={n} className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FBBF24]/50 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-[#7F1D1D] border border-[#FBBF24]/40 flex items-center justify-center text-[#FBBF24] text-xl shadow-md">
                    <span className="material-symbols-outlined">{icon}</span>
                  </div>
                  <span className="text-[#FBBF24] font-bold text-xs uppercase tracking-widest">Step {n}</span>
                  <h3 className="font-serif text-lg font-bold text-white">{title}</h3>
                  <span className="text-xs text-[#FEF3C7]/70 -mt-2">{tel}</span>
                  <p className="text-white/65 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <Link 
                href="/book" 
                className="px-8 py-3.5 rounded-full bg-[#FBBF24] hover:bg-[#F59E0B] text-[#4A0404] font-bold text-sm shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2"
              >
                <span>Book Your Auspicious Date Now</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>

          </div>
        </section>

        {/* COMPLETE SAMAGRI PROVISIONING (WARM & CULTURAL) */}
        <section className="w-full py-20 bg-white relative">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="bg-[#FFFDF7] border border-[#F0E8D5] rounded-3xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-2">
              
              {/* Content Side */}
              <div className="p-8 sm:p-12 md:p-14 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-[#92400E] mb-3">
                  <span className="material-symbols-outlined text-[18px]">inventory_2</span>
                  <span className="text-xs font-bold uppercase tracking-widest">సంపూర్ణ పూజా సామాగ్రి కిట్</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#4A0404] font-bold leading-tight mb-4">
                  Everything the Pooja Needs.<br />
                  <span className="text-[#92400E] italic">We Bring It Directly to Your Door.</span>
                </h2>
                <p className="text-[#78716C] text-sm sm:text-base leading-relaxed mb-8">
                  No running to crowded markets with confusing Sanskrit lists. We handpick, certify, and deliver 100% pure ritual samagri directly with the purohit.
                </p>
                
                <div className="flex flex-col gap-5">
                  {[
                    { icon: 'opacity', title: 'Pure A2 Gir Cow Ghee', desc: 'Traditionally bilona-churned desi cow ghee for sacred havan offerings.' },
                    { icon: 'eco', title: 'Organic Haldi & Kumkum', desc: 'Direct from authentic Salem farms, completely chemical-free and skin-safe.' },
                    { icon: 'park', title: 'Medicinal Samidha Wood', desc: 'Palasha (Moduga), Ravi, and Bilwa wood cut to precise ritual measure.' },
                    { icon: 'spa', title: 'Fresh Flowers & Toranam', desc: 'Fresh jasmine, marigold garlands, mango leaves & 5 auspicious coconuts.' },
                  ].map(({ icon, title, desc }) => (
                    <div key={title} className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-full bg-[#FEF3C7] flex items-center justify-center text-[#B45309] shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[18px]">{icon}</span>
                      </div>
                      <div className="flex flex-col">
                        <h4 className="font-serif text-base font-bold text-[#4A0404]">{title}</h4>
                        <p className="text-[#78716C] text-xs mt-0.5 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Image Side with Real Samagri Photo */}
              <div className="relative bg-[#FEF3C7] min-h-[380px] lg:min-h-full overflow-hidden flex items-center justify-center p-6 sm:p-10">
                <img 
                  src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800" 
                  alt="Pure Pooja Samagri Kit"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                
                <div className="relative z-10 w-full max-w-sm bg-white/95 backdrop-blur-md rounded-2xl border border-white p-6 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-[#F0E8D5] pb-3 mb-3">
                    <h3 className="font-serif text-lg font-bold text-[#4A0404]">Certified Samagri Box</h3>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase px-2 py-0.5 rounded-full">Zero Adulteration</span>
                  </div>
                  <ul className="flex flex-col gap-2.5 text-xs text-[#57534E] mb-5">
                    <li className="flex justify-between"><span>Total Items:</span><strong className="text-[#4A0404]">36+ Verified Ingredients</strong></li>
                    <li className="flex justify-between"><span>Camphor:</span><strong className="text-[#4A0404]">100% Pure Bhimseni</strong></li>
                    <li className="flex justify-between"><span>Delivery:</span><strong className="text-[#4A0404]">Brought by Purohit</strong></li>
                  </ul>
                  <div className="bg-[#FEF3C7] text-[#92400E] p-3 rounded-xl flex items-center justify-between text-xs font-bold">
                    <span>Included in Complete Package</span>
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* REAL DEVOTEE EXPERIENCES (AUTHENTIC SOCIAL PROOF) */}
        <section className="w-full py-20 bg-[#FFFDF7] border-b border-[#F0E8D5]">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-2 mb-14">
              <span className="text-[#92400E] text-xs font-bold uppercase tracking-widest">
                భక్తుల అనుభవాలు · Devotee Experiences
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#4A0404] font-bold">
                Trusted by 2,400+ Families
              </h2>
              <p className="text-[#78716C] text-sm">
                Hear from families across Hyderabad, Bangalore, and Vijayawada who conducted their home ceremonies with Dandalu Ayyagaru.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  quote: "We booked Dandalu Ayyagaru for our Gruha Pravesham in Tellapur. The purohit arrived 40 minutes before Brahma Muhurtham, brought all fresh samagri, and explained every mantra in Telugu so my parents and children could actively participate.",
                  name: "Suresh & Lavanya Varma",
                  location: "Tellapur, Hyderabad",
                  ritual: "Gruha Pravesham & Vastu Homam",
                  rating: 5,
                },
                {
                  quote: "On Karthika Pournami, getting a reliable purohit in Bangalore used to be a huge headache. With Dandalu Ayyagaru, everything was transparent from day one. Zero bargaining, pure devotion, and authentic Satyanarayana katha.",
                  name: "Sridhar Rao",
                  location: "Whitefield, Bangalore",
                  ritual: "Satyanarayana Swamy Vratham",
                  rating: 5,
                },
                {
                  quote: "The Ganapathi Homam was conducted with such serene purity. The priest used pure A2 cow ghee and medicinal samidha wood. No heavy black smoke, just sweet sacred aroma in our apartment.",
                  name: "K. Lakshmi Narayana & Family",
                  location: "Gachibowli, Hyderabad",
                  ritual: "Maha Ganapathi Homam",
                  rating: 5,
                },
              ].map((rev) => (
                <div 
                  key={rev.name} 
                  className="p-7 rounded-2xl bg-white border border-[#F0E8D5] shadow-xs flex flex-col justify-between gap-5 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(rev.rating)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-[18px]">star</span>
                      ))}
                    </div>
                    <p className="text-[#44403C] text-sm leading-relaxed italic">
                      &ldquo;{rev.quote}&rdquo;
                    </p>
                  </div>
                  <div className="border-t border-[#F0E8D5] pt-4 flex flex-col">
                    <span className="font-serif font-bold text-[#4A0404] text-sm">{rev.name}</span>
                    <span className="text-xs text-[#78716C]">{rev.location}</span>
                    <span className="text-[11px] font-semibold text-[#92400E] mt-1 bg-[#FEF3C7] px-2 py-0.5 rounded-full w-fit">
                      {rev.ritual}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DANDALU AYYAGARU EDITORIAL PROFILE */}
        <section className="w-full py-20 bg-white" id="editorial-profile">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Portrait Column */}
              <div className="lg:col-span-5">
                <div className="relative w-full aspect-[4/4.8] rounded-3xl overflow-hidden shadow-xl border-4 border-[#FFFDF7]">
                  <img 
                    alt="Portrait of Dandalu Ayyagaru in traditional angavastram" 
                    className="w-full h-full object-cover object-top" 
                    src="/images/priest-dandalu-ayyagaru.jpg" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4A0404]/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#FBBF24]">వేద విజ్ఞాన భూషణ</span>
                    <h3 className="font-serif text-2xl font-bold mt-1">ఆచార్య దండాలు అయ్యగారు</h3>
                    <p className="text-xs text-white/80 mt-0.5">Senior Purohit &amp; Spiritual Mentor · 22+ Years Lineage</p>
                  </div>
                </div>
              </div>

              {/* Bio & Credentials */}
              <div className="lg:col-span-7 flex flex-col gap-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF3C7] text-[#92400E] w-fit font-bold text-xs uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[16px]">history_edu</span> వేద సాంప్రదాయం &amp; విధి విధానాలు
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#4A0404] font-bold leading-tight">
                  Rooted in Shastra. Reverent in Practice. Clear in Guidance.
                </h2>
                <p className="text-[#57534E] text-sm sm:text-base leading-relaxed">
                  Trained under distinguished Veda Pathashalas in Krishna Yajurveda and Smartha Prayoga traditions. Known for composed demeanour and authentic Sanskrit uccharana, bridging ancient sanctity with modern family needs.
                </p>
                <p className="text-[#57534E] text-sm sm:text-base leading-relaxed">
                  Every mantra is rendered with its full meaning explained in simple Telugu, allowing your family to feel the divine grace of the ritual rather than remaining passive observers.
                </p>

                {/* Credentials Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  {[
                    ['Tradition', 'Krishna Yajurveda'],
                    ['Sampradayam', 'Smartha & Vaidika'],
                    ['Languages', 'Telugu, Sanskrit, Hindi'],
                    ['Punctuality', '100% Guaranteed'],
                    ['Verification', 'Certified Scholar'],
                    ['Experience', '2,400+ Ceremonies'],
                  ].map(([label, val]) => (
                    <div key={label} className="p-3.5 bg-[#FFF8E7] border border-[#F0E8D5] rounded-xl flex flex-col gap-0.5">
                      <span className="text-[10px] text-[#78716C] uppercase font-bold tracking-wider">{label}</span>
                      <span className="font-serif text-sm font-bold text-[#4A0404]">{val}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Link 
                    href="/book" 
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#7F1D1D] to-[#92400E] text-white font-bold text-sm shadow-md hover:-translate-y-0.5 transition-all"
                  >
                    <span>Request Booking with Dandalu Ayyagaru</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FINAL CALL TO ACTION */}
        <section className="w-full py-16 bg-[#FFFDF7]">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#7F1D1D] via-[#92400E] to-[#4A0404] p-8 sm:p-14 md:p-16 text-white shadow-xl">
              <div className="relative z-10 max-w-2xl flex flex-col gap-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FEF3C7] w-fit text-xs font-bold uppercase tracking-wider">
                  <span>🪔</span> Auspicious Muhurtham Booking
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                  Your pooja matters.<br />
                  Arranging it shouldn&apos;t be stressful.
                </h2>
                <p className="text-white/85 text-sm sm:text-base leading-relaxed">
                  Choose the ritual, pick the date, and let the rest fall gracefully into place. Reserve your certified purohit today with Dandalu Ayyagaru.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link 
                    href="/poojas" 
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#4A0404] font-bold text-sm shadow-lg hover:bg-[#FEF3C7] transition-all"
                  >
                    <span>Book a Pooja Now</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                  <a 
                    href="tel:+919154088200" 
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/15 backdrop-blur-sm text-white font-semibold text-sm hover:bg-white/25 transition-all"
                  >
                    <span className="material-symbols-outlined text-[18px]">call</span>
                    <span>Direct Call: +91 91540 88200</span>
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
