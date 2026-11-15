'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { getPoojaById, PoojaDetail } from '../poojas/poojasDetailData';
import Link from 'next/link';

function BookingForm() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const poojaId = searchParams.get('pooja');
  const packageParam = searchParams.get('package');
  
  const [pooja, setPooja] = useState<PoojaDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const today = new Date();
  const [currentMonth] = useState(today.toLocaleString('default', { month: 'long', year: 'numeric' }));
  const [selectedDate, setSelectedDate] = useState(today.getDate() + 2 > 28 ? 1 : today.getDate() + 2);
  const [selectedTime, setSelectedTime] = useState('08:00 AM');
  const [selectedVenue, setSelectedVenue] = useState('Home Residence');
  const [selectedTier, setSelectedTier] = useState<any>(null);
  const [acharyaSelection, setAcharyaSelection] = useState('Auto-Assign');

  useEffect(() => {
    if (poojaId) {
      const p = getPoojaById(poojaId);
      if (p) {
        setPooja(p);
        const matchedPackage = p.packages.find(pkg => pkg.name === packageParam) || p.packages[1];
        setSelectedTier(matchedPackage);
      }
    }
    setIsLoading(false);
  }, [poojaId, packageParam]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="text-primary font-headline-sm">Preparing Sacred Space...</p>
        </div>
      </div>
    );
  }

  if (!poojaId || !pooja || !selectedTier) {
    return (
      <div className="w-full flex flex-col items-center pt-16 pb-32 px-4 relative overflow-hidden bg-[#FFFDF7]">
        {/* Decorative Backgrounds */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#FEF3C7]/40 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#FFEDD5]/40 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
          <div className="w-20 h-20 rounded-2xl bg-white border border-[#F0E8D5] flex items-center justify-center mb-6 mx-auto shadow-sm text-[#B45309]">
            <span className="material-symbols-outlined text-[40px]">menu_book</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#4A0404] mb-4">
            How to Book a Ritual
          </h1>
          <p className="text-[#78716C] text-lg leading-relaxed">
            Your sacred ceremony is just a few steps away. We ensure complete transparency, authenticity, and peace of mind from start to finish.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-[1000px] mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10 mb-20">
          {[
            { n: '01', title: 'Select a Ritual', desc: 'Browse our catalog of 80+ Vedic poojas and choose the one that fits your occasion.', icon: 'auto_stories' },
            { n: '02', title: 'Pick Muhurtham', desc: 'Select an auspicious date and time window (Panchangam verified) for the ceremony.', icon: 'calendar_month' },
            { n: '03', title: 'Choose Package', desc: 'Opt for spiritual guidance only, or let us bring the complete premium Samagri kit.', icon: 'inventory_2' },
            { n: '04', title: 'Punctual Arrival', desc: 'Ayyagaru arrives 30 mins early to set the mandapam. Pay securely online or later.', icon: 'verified' },
          ].map((step, i) => (
            <div key={step.n} className="bg-white border border-[#F0E8D5] p-6 rounded-2xl shadow-sm flex flex-col gap-4 relative overflow-hidden group hover:-translate-y-1 hover:shadow-md transition-all">
              <div className="absolute -right-4 -top-4 text-[80px] font-bold text-[#FEF3C7]/50 font-serif z-0 pointer-events-none transition-transform group-hover:scale-110">{step.n}</div>
              <div className="w-12 h-12 rounded-xl bg-[#FEF3C7] text-[#92400E] flex items-center justify-center relative z-10 shadow-sm border border-[#FBBF24]/30">
                <span className="material-symbols-outlined">{step.icon}</span>
              </div>
              <div className="relative z-10">
                <h3 className="font-serif text-lg font-bold text-[#4A0404] mb-2">{step.title}</h3>
                <p className="text-[#78716C] text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="relative z-10 flex flex-col items-center">
          <Link 
            href="/poojas" 
            className="px-10 py-5 rounded-2xl bg-gradient-to-r from-[#7F1D1D] to-[#4A0404] hover:from-[#6B1818] hover:to-[#3F0303] text-white font-bold text-lg shadow-xl shadow-[#7F1D1D]/20 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
          >
            <span className="material-symbols-outlined text-[24px]">explore</span>
            Explore Pooja Catalog
          </Link>
          <p className="text-sm text-[#92400E] mt-6 font-semibold">Over 80+ authentic Vedic rituals available.</p>
        </div>
      </div>
    );
  }

  const handleConfirm = () => {
    // Pass everything to the next step
    const params = new URLSearchParams({
      pooja: pooja.id,
      date: selectedDate.toString(),
      time: selectedTime,
      venue: selectedVenue,
      pkg: selectedTier.name,
      price: selectedTier.price.toString(),
      acharya: acharyaSelection
    });
    
    if (acharyaSelection === 'Choose Specific Acharya') {
      router.push(`/book/select-priest?${params.toString()}`);
    } else {
      router.push(`/book/payment?${params.toString()}`);
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Subtle Ambient Glow Scrim */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[840px] h-[320px] bg-gradient-to-b from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-[1920px] mx-auto px-4 md:px-8 pt-8 pb-24 relative">
          
          {/* Breadcrumb & Sanctuary Sub-header */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2 text-sm text-on-surface-variant">
              <Link href={`/poojas/${pooja.id}`} className="hover:text-primary transition-colors flex items-center gap-1">
                <span className="material-symbols-outlined text-base">arrow_back</span>
                Back to {pooja.name}
              </Link>
              <span className="text-tertiary">/</span>
              <span className="text-on-surface font-semibold">Reserve Sacred Pooja</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high border border-primary/20 text-on-surface-variant text-xs shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span>Muhurtham Window Open · Rigveda Samhita Tradition</span>
            </div>
          </div>

          {/* Main Dual-Column Canvas Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* ================= LEFT INTERACTIVE WORKSPACE (7 Cols) ================= */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              
              {/* SECTION 1: Selected Ritual Badge Panel */}
              <section className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-surface-container flex flex-col gap-4 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase border border-primary/20">
                      Step 01 Verified
                    </span>
                    <span className="text-xs text-primary font-medium flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">schedule</span> {pooja.duration}
                    </span>
                  </div>
                  <Link href="/poojas" className="text-xs text-primary hover:text-primary/80 transition-colors underline underline-offset-4 font-semibold">
                    Change Ritual
                  </Link>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-surface-container-low to-transparent rounded-xl p-4 border border-surface-container/50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 shadow-md relative">
                      <img src={pooja.imageUrl} alt={pooja.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-on-surface">{pooja.name}</h2>
                      <p className="text-sm text-on-surface-variant mt-0.5">{pooja.subtitle}</p>
                    </div>
                  </div>
                  <div className="shrink-0 flex items-center gap-1 text-yellow-500">
                    <span className="material-symbols-outlined text-lg" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                    <span className="material-symbols-outlined text-lg" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                    <span className="material-symbols-outlined text-lg" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                    <span className="material-symbols-outlined text-lg" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                    <span className="material-symbols-outlined text-lg" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                    <span className="text-xs text-on-surface font-semibold ml-1">4.98 (340+)</span>
                  </div>
                </div>
              </section>

              {/* SECTION 2: Auspicious Date & Time Picker */}
              <section className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-surface-container flex flex-col gap-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-primary font-bold">Step 02 · Muhurtham Schedule</span>
                    <h3 className="text-xl font-bold text-on-surface mt-1">When should we perform the Pooja?</h3>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-yellow-500/10 text-yellow-700 text-xs font-semibold border border-yellow-500/20">
                    <span className="material-symbols-outlined text-sm">wb_twilight</span>
                    <span>Panchangam Verified</span>
                  </div>
                </div>

                {/* Month Navigator Header */}
                <div className="flex items-center justify-between px-4 py-2 bg-surface-container-low rounded-xl border border-surface-container">
                  <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-lg">chevron_left</span>
                  </button>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-on-surface">{currentMonth}</span>
                  </div>
                  <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-lg">chevron_right</span>
                  </button>
                </div>

                {/* Calendar Minimal Grid */}
                <div>
                  <div className="grid grid-cols-7 text-center text-xs font-bold text-tertiary mb-3">
                    <span>SUN</span><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span>
                  </div>
                  <div className="grid grid-cols-7 gap-2 text-center text-sm">
                    {[28, 29, 30].map(day => (
                      <span key={`prev-${day}`} className="py-2.5 rounded-lg text-on-surface-variant/30">{day}</span>
                    ))}
                    {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                      <button
                        key={day}
                        onClick={() => setSelectedDate(day)}
                        className={
                          selectedDate === day
                            ? "py-2.5 rounded-xl bg-gradient-to-br from-primary to-primary-container/80 text-on-primary font-bold shadow-lg shadow-primary/30 ring-2 ring-offset-2 ring-offset-surface ring-primary transition-all transform scale-110 flex flex-col items-center justify-center relative z-10"
                            : "py-2.5 rounded-lg hover:bg-primary/5 hover:text-primary text-on-surface font-medium cursor-pointer flex flex-col items-center justify-center transition-colors"
                        }
                        type="button"
                      >
                        <span>{day}</span>
                        {selectedDate === day && <span className="w-1 h-1 rounded-full bg-white mt-1"></span>}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Slots Grid */}
                <div>
                  <span className="text-sm text-on-surface font-bold mb-4 block">Select Auspicious Time Window</span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { time: '06:30 AM', label: 'Brahma Muhurtham' },
                      { time: '08:00 AM', label: 'Shubh Choghadiya', recommended: true },
                      { time: '10:00 AM', label: 'Amrit Muhurtham' },
                      { time: '12:00 PM', label: 'Abhijit Kala' },
                      { time: '04:30 PM', label: 'Pradosha Kala' },
                      { time: '06:00 PM', label: 'Sandhya Deeparadhana' }
                    ].map(slot => (
                      <button
                        key={slot.time}
                        onClick={() => setSelectedTime(slot.time)}
                        className={
                          selectedTime === slot.time
                            ? "p-3 rounded-xl bg-primary/10 text-left shadow-sm ring-2 ring-primary relative overflow-hidden transition-all"
                            : "p-3 rounded-xl bg-surface-container-low border border-surface-container text-left hover:bg-surface-container hover:border-primary/30 transition-all group"
                        }
                        type="button"
                      >
                        {slot.recommended && <span className="absolute top-0 right-0 text-[8px] px-2 py-0.5 rounded-bl-lg bg-yellow-500 text-white font-bold uppercase tracking-wider">Ideal</span>}
                        <span className={selectedTime === slot.time ? "text-sm font-bold text-primary block" : "text-sm font-semibold text-on-surface group-hover:text-primary block transition-colors"}>{slot.time}</span>
                        <span className={selectedTime === slot.time ? "text-[10px] text-primary/80 font-medium" : "text-[10px] text-on-surface-variant"}>{slot.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </section>

              {/* SECTION 3: Booking Mode & Venue */}
              <section className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-[#F0E8D5] flex flex-col gap-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#B45309] font-bold">Step 03 · Booking Mode</span>
                  <h3 className="text-xl font-bold text-[#4A0404] mt-1">How would you like to perform the pooja?</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    onClick={() => {
                      setSelectedVenue('Home Residence');
                    }}
                    className={
                      selectedVenue !== 'Online e-Pooja (Live)'
                        ? "p-4 rounded-xl bg-gradient-to-br from-[#FEF3C7] to-white border-2 border-[#B45309] shadow-sm text-left relative overflow-hidden transition-all"
                        : "p-4 rounded-xl bg-white border border-[#F0E8D5] text-left hover:border-[#B45309]/50 transition-all group"
                    }
                    type="button"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`material-symbols-outlined ${selectedVenue !== 'Online e-Pooja (Live)' ? 'text-[#B45309]' : 'text-[#78716C]'}`}>home_pin</span>
                      <span className={`font-bold ${selectedVenue !== 'Online e-Pooja (Live)' ? 'text-[#4A0404]' : 'text-[#4A0404] group-hover:text-[#B45309]'}`}>In-Person Pooja</span>
                    </div>
                    <span className="text-xs text-[#78716C]">Acharya visits your home/venue. Physical samagri included.</span>
                  </button>

                  <button
                    onClick={() => setSelectedVenue('Online e-Pooja (Live)')}
                    className={
                      selectedVenue === 'Online e-Pooja (Live)'
                        ? "p-4 rounded-xl bg-gradient-to-br from-[#FEF3C7] to-white border-2 border-[#B45309] shadow-sm text-left relative overflow-hidden transition-all"
                        : "p-4 rounded-xl bg-white border border-[#F0E8D5] text-left hover:border-[#B45309]/50 transition-all group"
                    }
                    type="button"
                  >
                    <span className="absolute top-0 right-0 text-[10px] px-2 py-1 rounded-bl-lg bg-[#10B981] text-white font-bold uppercase tracking-wider">Live Stream</span>
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`material-symbols-outlined ${selectedVenue === 'Online e-Pooja (Live)' ? 'text-[#B45309]' : 'text-[#78716C]'}`}>videocam</span>
                      <span className={`font-bold ${selectedVenue === 'Online e-Pooja (Live)' ? 'text-[#4A0404]' : 'text-[#4A0404] group-hover:text-[#B45309]'}`}>Online e-Pooja</span>
                    </div>
                    <span className="text-xs text-[#78716C]">Interactive digital sankalpam. Pooja broadcasted live from our studio.</span>
                  </button>
                </div>

                {selectedVenue !== 'Online e-Pooja (Live)' && (
                  <div className="mt-4 animate-in fade-in slide-in-from-top-4">
                    <span className="block text-xs font-bold text-[#78716C] uppercase mb-3">Select Venue Type</span>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {['Home Residence', 'New Home / Gruha Pravesham', 'Banquet / Function Hall', 'Temple Mandapam'].map(venue => (
                        <button
                          key={venue}
                          onClick={() => setSelectedVenue(venue)}
                          className={
                            selectedVenue === venue
                              ? "px-4 py-2 rounded-full bg-[#4A0404] text-white text-sm font-semibold shadow-md transition-all"
                              : "px-4 py-2 rounded-full bg-white border border-[#F0E8D5] text-[#78716C] text-sm font-medium hover:bg-[#FEF3C7] hover:text-[#B45309] hover:border-[#B45309]/30 transition-all"
                          }
                          type="button"
                        >
                          {venue}
                        </button>
                      ))}
                    </div>

                    <label className="block text-xs text-[#78716C] mb-2 font-bold uppercase tracking-wider">Detailed Sanctuary Address</label>
                    <div className="relative flex items-center">
                      <span className="material-symbols-outlined text-[#B45309] absolute left-3">location_on</span>
                      <input 
                        className="w-full h-12 pl-10 pr-24 rounded-xl bg-white border border-[#F0E8D5] text-[#4A0404] text-sm font-medium shadow-inner focus:outline-none focus:ring-2 focus:ring-[#B45309] focus:border-transparent transition-all" 
                        type="text" 
                        defaultValue="Flat 402, Prestige Palms, Road No. 36, Jubilee Hills, Hyderabad"
                      />
                      <button className="absolute right-2 px-3 py-1.5 rounded-lg bg-[#FEF3C7] text-[#92400E] text-xs font-bold hover:bg-[#FDE68A] transition-colors" type="button">
                        Edit
                      </button>
                    </div>
                  </div>
                )}
                
                {selectedVenue === 'Online e-Pooja (Live)' && (
                  <div className="mt-2 p-4 bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl flex items-start gap-3 animate-in fade-in slide-in-from-top-4">
                    <span className="material-symbols-outlined text-[#16A34A] mt-0.5">verified_user</span>
                    <div>
                      <p className="text-sm font-bold text-[#166534]">Secure Live Link Guarantee</p>
                      <p className="text-xs text-[#15803D] mt-1">A private, high-quality stream link will be generated after booking. The Acharya will guide you interactively during the Muhurtham.</p>
                    </div>
                  </div>
                )}
              </section>

              {/* SECTION 4: Package & Pooja Samagri Selection */}
              <section className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-surface-container flex flex-col gap-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-primary font-bold">Step 04 · Ritual Tier</span>
                  <h3 className="text-xl font-bold text-on-surface mt-1">Choose your Package</h3>
                  <p className="text-sm text-on-surface-variant mt-1">From purely spiritual guidance to end-to-end blessed setups.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {pooja.packages.map((tier, idx) => (
                    <div 
                      key={tier.name}
                      onClick={() => setSelectedTier(tier)}
                      className={`p-5 rounded-2xl cursor-pointer flex flex-col justify-between transition-all duration-300 ${
                        selectedTier.name === tier.name 
                          ? 'bg-gradient-to-b from-primary/10 to-transparent ring-2 ring-primary shadow-lg transform scale-[1.02]' 
                          : 'bg-surface-container-low border border-surface-container hover:border-primary/40 hover:shadow-md'
                      }`}
                    >
                      {idx === 1 && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm whitespace-nowrap">Most Popular</span>}
                      
                      <div className="flex flex-col h-full">
                        <div className="flex items-center justify-between mb-4">
                          <span className={`text-lg font-bold ${selectedTier.name === tier.name ? 'text-primary' : 'text-on-surface'}`}>{tier.name}</span>
                          {selectedTier.name === tier.name && (
                            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-sm">
                              <span className="material-symbols-outlined text-white text-sm font-bold">check</span>
                            </div>
                          )}
                        </div>
                        
                        <div className="mb-4">
                          <span className="text-2xl font-bold text-on-surface">₹ {tier.price.toLocaleString()}</span>
                        </div>

                        <ul className="space-y-3 flex-grow mb-4">
                          {tier.includes.map((inc, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-on-surface-variant">
                              <span className="material-symbols-outlined text-primary text-sm shrink-0">check_circle</span>
                              <span className={selectedTier.name === tier.name ? 'font-medium text-on-surface' : ''}>{inc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

            </div>

            {/* ================= RIGHT STICKY BOOKING SUMMARY LEDGER (5 Cols) ================= */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 flex flex-col gap-6">
              <div className="bg-gradient-to-b from-surface-container-lowest to-surface-container-low rounded-3xl p-6 shadow-xl border border-surface-container relative overflow-hidden">
                
                {/* Decorative background mandala/pattern */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-2xl"></div>

                {/* Summary Header */}
                <div className="flex items-center justify-between pb-4 border-b border-surface-container relative z-10">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-primary font-bold">Sacred Reservation</span>
                    <h3 className="text-2xl font-bold text-on-surface font-serif">Pooja Summary</h3>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shadow-sm transform rotate-3">
                    <span className="material-symbols-outlined text-2xl">receipt_long</span>
                  </div>
                </div>

                {/* Ritual Overview Card */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 shadow-sm mt-6 relative z-10">
                  <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0">
                    <img src={pooja.imageUrl} alt={pooja.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col justify-center h-14">
                    <span className="text-base font-bold text-on-surface line-clamp-1">{pooja.name}</span>
                    <span className="text-xs text-on-surface-variant font-medium">Deity: {pooja.deity}</span>
                  </div>
                </div>

                {/* Scheduled Parameters Ledger */}
                <div className="flex flex-col gap-4 mt-6 bg-surface-container-lowest p-5 rounded-2xl border border-surface-container relative z-10 shadow-inner">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-on-surface-variant font-semibold flex items-center gap-2 uppercase tracking-wide">
                      <span className="material-symbols-outlined text-base text-primary">calendar_today</span>
                      Date
                    </span>
                    <span className="text-sm font-bold text-on-surface">{currentMonth.split(' ')[0]} {selectedDate}, {currentMonth.split(' ')[1]}</span>
                  </div>
                  
                  <div className="w-full h-px bg-surface-container"></div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-on-surface-variant font-semibold flex items-center gap-2 uppercase tracking-wide">
                      <span className="material-symbols-outlined text-base text-primary">schedule</span>
                      Time
                    </span>
                    <span className="text-sm font-bold text-on-surface">{selectedTime}</span>
                  </div>
                  
                  <div className="w-full h-px bg-surface-container"></div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-on-surface-variant font-semibold flex items-center gap-2 uppercase tracking-wide">
                      <span className="material-symbols-outlined text-base text-primary">home</span>
                      Venue
                    </span>
                    <span className="text-sm font-bold text-on-surface text-right max-w-[150px] truncate">{selectedVenue}</span>
                  </div>

                  <div className="w-full h-px bg-surface-container"></div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#78716C] font-semibold flex items-center gap-2 uppercase tracking-wide">
                      <span className="material-symbols-outlined text-base text-[#B45309]">package_2</span>
                      Package
                    </span>
                    <span className="text-sm font-bold text-[#B45309]">{selectedTier.name}</span>
                  </div>
                </div>

                {/* Acharya Selection Mode */}
                <div className="mt-6">
                  <span className="text-sm font-bold text-[#4A0404] mb-3 block">Acharya Selection Preference</span>
                  <div className="flex flex-col gap-3">
                    <label 
                      className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                        acharyaSelection === 'Auto-Assign' ? 'bg-[#FEF3C7]/40 border-[#B45309] shadow-sm' : 'bg-white border-[#F0E8D5] hover:border-[#B45309]/30'
                      }`}
                      onClick={() => setAcharyaSelection('Auto-Assign')}
                    >
                      <div className={`w-5 h-5 mt-0.5 rounded-full border-2 flex items-center justify-center shrink-0 ${acharyaSelection === 'Auto-Assign' ? 'border-[#B45309]' : 'border-[#D6D3D1]'}`}>
                        {acharyaSelection === 'Auto-Assign' && <div className="w-2.5 h-2.5 rounded-full bg-[#B45309]"></div>}
                      </div>
                      <div>
                        <span className={`block text-sm font-bold ${acharyaSelection === 'Auto-Assign' ? 'text-[#4A0404]' : 'text-[#78716C]'}`}>Auto-Assign Best Acharya</span>
                        <span className="block text-xs text-[#78716C] mt-0.5">We will assign a verified Asthana Siddhanti based on your Muhurtham and location.</span>
                      </div>
                    </label>

                    <label 
                      className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                        acharyaSelection === 'Choose Specific Acharya' ? 'bg-[#FEF3C7]/40 border-[#B45309] shadow-sm' : 'bg-white border-[#F0E8D5] hover:border-[#B45309]/30'
                      }`}
                      onClick={() => setAcharyaSelection('Choose Specific Acharya')}
                    >
                      <div className={`w-5 h-5 mt-0.5 rounded-full border-2 flex items-center justify-center shrink-0 ${acharyaSelection === 'Choose Specific Acharya' ? 'border-[#B45309]' : 'border-[#D6D3D1]'}`}>
                        {acharyaSelection === 'Choose Specific Acharya' && <div className="w-2.5 h-2.5 rounded-full bg-[#B45309]"></div>}
                      </div>
                      <div>
                        <span className={`block text-sm font-bold ${acharyaSelection === 'Choose Specific Acharya' ? 'text-[#4A0404]' : 'text-[#78716C]'}`}>Browse & Select Acharya</span>
                        <span className="block text-xs text-[#78716C] mt-0.5">Listen to audio swaram recitations and select an Acharya based on their Veda Shakha and lineage.</span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Transparent Price Calculation Breakdown */}
                <div className="mt-6 flex flex-col gap-3 relative z-10">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-on-surface-variant font-medium">Ritual Service & Dakshina</span>
                    <span className="font-semibold text-on-surface">₹ {(selectedTier.price * 0.6).toFixed(0)}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-on-surface-variant font-medium">Samagri & Materials</span>
                    <span className="font-semibold text-on-surface">₹ {(selectedTier.price * 0.4).toFixed(0)}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-green-600 bg-green-50/50 p-2 rounded-lg">
                    <span className="flex items-center gap-1 font-semibold">
                      <span className="material-symbols-outlined text-sm">verified</span>
                      Platform Fee
                    </span>
                    <span className="font-bold">FREE</span>
                  </div>
                  
                  <div className="pt-4 mt-2 border-t-2 border-dashed border-surface-container flex items-end justify-between">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-on-surface">Total Amount</span>
                      <span className="text-[10px] text-tertiary font-medium">Inclusive of all taxes</span>
                    </div>
                    <span className="text-3xl text-primary font-black tracking-tight font-serif">₹ {selectedTier.price.toLocaleString()}</span>
                  </div>
                </div>

                {/* Primary Action CTA */}
                <button 
                  onClick={handleConfirm}
                  className="w-full mt-8 py-4 rounded-xl bg-gradient-to-r from-[#7F1D1D] to-[#4A0404] hover:from-[#6B1818] hover:to-[#3F0303] text-white text-lg font-bold shadow-xl shadow-[#7F1D1D]/20 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group relative z-10 overflow-hidden" 
                  type="button"
                >
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                  <span className="relative z-10">{acharyaSelection === 'Choose Specific Acharya' ? 'Proceed to Select Priest' : 'Confirm & Proceed to Pay'}</span>
                  <span className="material-symbols-outlined relative z-10 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
                
                {/* Micro Assurance Footnote */}
                <div className="flex items-center justify-center gap-2 text-center mt-4 text-xs text-tertiary font-medium relative z-10">
                  <span className="material-symbols-outlined text-sm">lock</span>
                  <span>100% Secure Payment & Satisfaction Guaranteed</span>
                </div>
              </div>

              {/* Concierge Live Callout Card */}
              <div className="p-4 rounded-2xl bg-surface-container-low border border-surface-container flex items-center justify-between shadow-sm hover:border-primary/30 transition-colors cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-2xl">support_agent</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-on-surface">Need Pandit Guidance?</span>
                    <span className="text-xs text-on-surface-variant">Speak to our chief Acharya</span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-sm">call</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="w-full pt-16 sm:pt-20 bg-surface min-h-[calc(100dvh-4rem)] sm:min-h-[calc(100dvh-5rem)]">
      <Suspense fallback={
        <div className="w-full h-[60vh] flex items-center justify-center">
          <div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full"></div>
        </div>
      }>
        <BookingForm />
      </Suspense>
    </main>
  );
}
