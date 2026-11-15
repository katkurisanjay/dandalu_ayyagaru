'use client';

import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { getPoojaById } from '../poojasDetailData';
import { useState } from 'react';

export default function PoojaDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const pooja = getPoojaById(id);
  const [selectedPackage, setSelectedPackage] = useState(1); // Default: Standard

  if (!pooja) {
    return (
      <main className="w-full pt-[80px] min-h-screen flex flex-col items-center justify-center gap-4">
        <span className="material-symbols-outlined text-6xl text-outline-variant">search_off</span>
        <h1 className="text-2xl font-serif text-on-surface font-semibold">Pooja not found</h1>
        <Link href="/poojas" className="text-primary hover:underline font-medium">← Back to Catalog</Link>
      </main>
    );
  }

  const pkg = pooja.packages[selectedPackage];

  return (
    <main className="w-full pt-[80px] bg-[#FFFDF7] min-h-screen pb-20 font-sans">
      
      {/* ── Hero Banner ── */}
      <section className="relative w-full h-[380px] md:h-[480px] overflow-hidden">
        <img
          src={pooja.imageUrl}
          alt={pooja.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />

        {/* Breadcrumb */}
        <div className="absolute top-6 left-0 right-0 px-6 md:px-12">
          <nav className="flex items-center gap-1.5 text-white/70 text-xs uppercase tracking-widest">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <Link href="/poojas" className="hover:text-white transition-colors">Pooja Services</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-[#FBBF24] font-semibold">{pooja.name}</span>
          </nav>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-10">
          {/* Category Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {pooja.categories.map(cat => (
              <span key={cat} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[11px] font-medium uppercase tracking-wider">
                {cat}
              </span>
            ))}
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold leading-tight drop-shadow-lg">
            {pooja.name}
          </h1>
          <p className="text-[#FBBF24] text-lg mt-2 font-medium">{pooja.subtitle}</p>

          {/* Quick Stats Row */}
          <div className="flex flex-wrap gap-6 mt-6">
            {[
              { icon: 'schedule', label: 'Duration', value: pooja.duration },
              { icon: 'record_voice_over', label: 'Language', value: pooja.language },
              { icon: 'auto_awesome', label: 'Deity', value: pooja.deity },
              { icon: 'event', label: 'Occasion', value: pooja.occasion },
            ].map(s => (
              <div key={s.label} className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#FBBF24] text-[20px]">{s.icon}</span>
                <div className="flex flex-col">
                  <span className="text-white/60 text-[10px] uppercase tracking-widest">{s.label}</span>
                  <span className="text-white text-sm font-medium">{s.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Content + Booking Panel ── */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 mt-12 flex flex-col lg:flex-row gap-10 items-start">
        
        {/* ── LEFT COLUMN: Detail Content ── */}
        <div className="flex-1 flex flex-col gap-12 min-w-0">
          
          {/* About */}
          <section>
            <h2 className="font-serif text-2xl text-[#4A0404] font-bold mb-4 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-[#C48B2A] inline-block"></span>
              About This Ritual
              <span className="flex-1 h-0.5 bg-[#E5D5B0] inline-block"></span>
            </h2>
            <p className="text-on-surface-variant leading-relaxed text-[15px]">{pooja.shortDesc}</p>
            <p className="text-on-surface-variant leading-relaxed text-[15px] mt-4">{pooja.significance}</p>
          </section>

          {/* Benefits */}
          <section>
            <h2 className="font-serif text-2xl text-[#4A0404] font-bold mb-5 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-[#C48B2A] inline-block"></span>
              Benefits
              <span className="flex-1 h-0.5 bg-[#E5D5B0] inline-block"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {pooja.benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3 bg-white border border-[#F0E8D5] rounded-xl p-4 shadow-sm">
                  <div className="w-7 h-7 rounded-full bg-[#FEF3C7] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[16px] text-[#B45309]">check_circle</span>
                  </div>
                  <span className="text-[14px] text-on-surface leading-snug">{b}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Ritual Process (Steps) */}
          <section>
            <h2 className="font-serif text-2xl text-[#4A0404] font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-[#C48B2A] inline-block"></span>
              Ritual Process
              <span className="flex-1 h-0.5 bg-[#E5D5B0] inline-block"></span>
            </h2>
            <div className="relative flex flex-col gap-0">
              {pooja.process.map((step, i) => (
                <div key={i} className="relative flex gap-5">
                  {/* Vertical line */}
                  <div className="flex flex-col items-center">
                    <div className="w-11 h-11 rounded-full bg-[#7F1D1D] text-white font-serif font-bold text-sm flex items-center justify-center shrink-0 shadow-md z-10">
                      {step.step}
                    </div>
                    {i < pooja.process.length - 1 && (
                      <div className="w-0.5 flex-1 bg-[#E5D5B0] my-1"></div>
                    )}
                  </div>
                  {/* Content */}
                  <div className={`flex flex-col pb-8 ${i < pooja.process.length - 1 ? 'pb-8' : 'pb-0'}`}>
                    <h3 className="font-semibold text-[#4A0404] text-[16px] mt-2.5">{step.title}</h3>
                    <p className="text-on-surface-variant text-[14px] leading-relaxed mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Materials Needed */}
          <section>
            <h2 className="font-serif text-2xl text-[#4A0404] font-bold mb-5 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-[#C48B2A] inline-block"></span>
              Puja Materials
              <span className="flex-1 h-0.5 bg-[#E5D5B0] inline-block"></span>
            </h2>
            <div className="bg-white border border-[#F0E8D5] rounded-2xl p-6 shadow-sm">
              <p className="text-sm text-on-surface-variant mb-4">The following materials are arranged by our pandits (included in Standard & Premium packages):</p>
              <div className="flex flex-wrap gap-2">
                {pooja.materials.map((m, i) => (
                  <span key={i} className="px-3 py-1.5 bg-[#FEF3C7]/60 border border-[#FBBF24]/30 rounded-full text-[13px] text-[#92400E] font-medium">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section>
            <h2 className="font-serif text-2xl text-[#4A0404] font-bold mb-5 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-[#C48B2A] inline-block"></span>
              Frequently Asked Questions
              <span className="flex-1 h-0.5 bg-[#E5D5B0] inline-block"></span>
            </h2>
            <div className="flex flex-col gap-4">
              {pooja.faqs.map((faq, i) => (
                <details key={i} className="group bg-white border border-[#F0E8D5] rounded-xl p-5 shadow-sm cursor-pointer">
                  <summary className="flex items-center justify-between font-semibold text-[#4A0404] text-[15px] list-none">
                    {faq.q}
                    <span className="material-symbols-outlined text-[20px] text-on-surface-variant group-open:rotate-180 transition-transform duration-300">expand_more</span>
                  </summary>
                  <p className="text-on-surface-variant text-[14px] leading-relaxed mt-3">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

        </div>

        {/* ── RIGHT COLUMN: Booking Panel (Sticky) ── */}
        <aside className="w-full lg:w-[380px] shrink-0 sticky top-28 flex flex-col gap-4">
          
          {/* Package Selector */}
          <div className="bg-white border border-[#F0E8D5] rounded-2xl shadow-[0_4px_24px_rgba(157,67,0,0.08)] overflow-hidden">
            
            {/* Panel Header */}
            <div className="bg-[#7F1D1D] px-6 py-5 text-white">
              <h3 className="font-serif text-xl font-bold">Book This Ritual</h3>
              <p className="text-white/70 text-xs mt-1">Select a package and proceed to booking</p>
            </div>

            <div className="p-6 flex flex-col gap-5">
              {/* Package Tabs */}
              <div className="flex flex-col gap-2">
                <p className="text-[12px] font-semibold text-on-surface-variant uppercase tracking-widest mb-1">Select Package</p>
                {pooja.packages.map((pkg, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedPackage(i)}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 text-left ${
                      selectedPackage === i
                        ? 'border-[#7F1D1D] bg-[#FFF5F5]'
                        : 'border-[#F0E8D5] bg-white hover:border-[#C48B2A]/50'
                    }`}
                  >
                    <div>
                      <span className={`font-semibold text-[14px] ${selectedPackage === i ? 'text-[#7F1D1D]' : 'text-on-surface'}`}>{pkg.name}</span>
                    </div>
                    <span className={`font-bold text-[15px] ${selectedPackage === i ? 'text-[#7F1D1D]' : 'text-on-surface'}`}>₹{pkg.price.toLocaleString('en-IN')}</span>
                  </button>
                ))}
              </div>

              {/* Selected Package Details */}
              <div className="bg-[#FFFDF7] border border-[#F0E8D5] rounded-xl p-4">
                <p className="text-[12px] font-semibold text-on-surface-variant uppercase tracking-widest mb-3">What's Included</p>
                <ul className="flex flex-col gap-2">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-[13px] text-on-surface">
                      <span className="material-symbols-outlined text-[16px] text-[#B45309]">check</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Summary */}
              <div className="flex items-center justify-between pt-2 border-t border-[#F0E8D5]">
                <div className="flex flex-col">
                  <span className="text-[11px] text-on-surface-variant uppercase tracking-widest">Total</span>
                  <span className="font-serif text-2xl text-[#7F1D1D] font-bold">₹{pkg.price.toLocaleString('en-IN')}</span>
                </div>
                <span className="text-[11px] text-on-surface-variant text-right">Incl. pandit fees<br />& samagri</span>
              </div>

              {/* CTA Button */}
              <Link
                href={`/book?pooja=${encodeURIComponent(pooja.id)}&package=${encodeURIComponent(pkg.name)}&price=${pkg.price}`}
                className="w-full bg-[#7F1D1D] hover:bg-[#6B1818] text-white font-bold py-4 rounded-xl text-center text-[15px] tracking-wide transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                Book This Pooja
              </Link>

              {/* Trust Signals */}
              <div className="flex items-center justify-center gap-6 pt-1">
                {[
                  { icon: 'verified', label: 'Verified Pandits' },
                  { icon: 'lock', label: 'Secure Booking' },
                  { icon: 'support_agent', label: '24/7 Support' },
                ].map(t => (
                  <div key={t.label} className="flex flex-col items-center gap-1">
                    <span className="material-symbols-outlined text-[18px] text-[#B45309]">{t.icon}</span>
                    <span className="text-[10px] text-on-surface-variant text-center leading-tight">{t.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Helpline Box */}
          <div className="bg-white border border-[#F0E8D5] rounded-2xl p-5 shadow-sm flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-[#FEF3C7] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[22px] text-[#B45309]">call</span>
            </div>
            <div>
              <p className="text-[12px] text-on-surface-variant font-medium">Have Questions?</p>
              <p className="font-bold text-[#7F1D1D] text-lg leading-tight">9869 92 92 92</p>
              <p className="text-[11px] text-on-surface-variant">Mon–Sun, 6 AM – 9 PM</p>
            </div>
          </div>

        </aside>
      </div>

      {/* ── Back to Catalog ── */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 mt-16">
        <Link
          href="/poojas"
          className="inline-flex items-center gap-2 text-[#7F1D1D] font-medium text-sm hover:underline"
        >
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          Back to Pooja Catalog
        </Link>
      </div>

    </main>
  );
}
