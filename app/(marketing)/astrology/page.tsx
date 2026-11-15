'use client';

import { useState } from 'react';
import Link from 'next/link';

const PLANETS = [
  { name: 'Sun', house: 1 }, { name: 'Moon', house: 4 }, { name: 'Mars', house: 7 },
  { name: 'Mercury', house: 12 }, { name: 'Jupiter', house: 3 }, { name: 'Venus', house: 1 },
  { name: 'Saturn', house: 4 }, { name: 'Rahu', house: 9 }, { name: 'Ketu', house: 3 },
];

const DOSHAS = [
  { name: 'Shani Sade Sati', severity: 'Moderate', color: '#B45309', bg: '#FEF3C7', icon: 'warning_amber',
    desc: 'Saturn is transiting your Janma Rasi (Cancer). A period of discipline, challenges, and spiritual growth over next 2.4 years.' },
  { name: 'Mangal Dosha', severity: 'Mild', color: '#B45309', bg: '#FEF3C7', icon: 'warning_amber',
    desc: 'Mars is in the 7th House (Aries). Mild effect on marriage prospects. A simple Mangala Chandi pooja is advised.' },
  { name: 'Kaal Sarp Dosha', severity: 'Not Present', color: '#047857', bg: '#D1FAE5', icon: 'check_circle',
    desc: 'Not detected in your chart placements. All planets are free from Rahu/Ketu axis.' },
  { name: 'Pitra Dosha', severity: 'Not Present', color: '#047857', bg: '#D1FAE5', icon: 'check_circle',
    desc: 'Not detected in your chart placements. Ancestral karma appears balanced.' },
];

const REMEDIES = [
  { name: 'Navagraha Homam', reason: 'Recommended for Rahu in 9th House and to stabilize Saturn transit affecting Sade Sati period.', duration: '2.5 - 3 Hours', priests: '2 Certified Pandits', price: 8200, tag: 'Priority Remedy' },
  { name: 'Maha Ganapathi Homam', reason: 'Recommended for Mercury weakness in 12th House, for clarity, mental acuity, and academic success.', duration: '1.5 - 2 Hours', priests: '1 Certified Pandit', price: 5200, tag: null },
  { name: '75-Min Jyothishi Consult', reason: 'In-depth life guidance, career path, marriage prospects, and wealth trajectory from an expert Jyothishi.', duration: '75 Minutes', priests: '1 Expert Jyothishi', price: 0, tag: 'Free' },
];

const houseMap: Record<number, { house: number; label: string }> = {
  0: { house: 12, label: '12' }, 1: { house: 1, label: 'AS · 1' }, 2: { house: 2, label: '2' }, 3: { house: 3, label: '3' },
  4: { house: 11, label: '11' }, 5: { house: -1, label: '' }, 6: { house: -1, label: '' }, 7: { house: 4, label: '4' },
  8: { house: 10, label: '10' }, 9: { house: -1, label: '' }, 10: { house: -1, label: '' }, 11: { house: 5, label: '5' },
  12: { house: 9, label: '9' }, 13: { house: 8, label: '8' }, 14: { house: 7, label: '7' }, 15: { house: 6, label: '6' },
};

export default function AstrologyPage() {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [tob, setTob] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focus, setFocus] = useState<string[]>(['Career & Business']);

  const toggleFocus = (item: string) => setFocus(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);

  const handleAnalyze = () => {
    setLoading(true);
    setTimeout(() => { setLoading(false); setShowResults(true); }, 1800);
  };

  const focusOptions = ['Career & Business', 'Marriage & Relationships', 'Health & Wellbeing', 'Finance & Property', 'Education & Success', 'Family Harmony'];

  return (
    <main className="w-full pt-16 sm:pt-20 bg-[#FFFDF7] min-h-screen">

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-[#4A0404] via-[#7F1D1D] to-[#92400E] text-white py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FBBF24]/15 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#92400E]/20 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
            <div className="flex flex-col gap-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FBBF24]/40 bg-[#FBBF24]/10 text-[#FEF3C7] text-xs font-black uppercase tracking-widest w-fit">
                <span className="material-symbols-outlined text-[16px]">stars</span>
                Vedic Jyotish · AI-Powered Analysis
              </div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
                Discover Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBBF24] to-[#FEF3C7] italic">Janma Kundali</span> Alignments &amp; Auspicious Ritual Remedies.
              </h1>
              <p className="text-white/75 text-base leading-relaxed font-light max-w-xl">
                Personalized using your exact Janma Rashi, Nakshatra Pada, current Dasha/Antardasha, and clear verification of Rahu/Mangal, Sade Sati, Kala Sarpa, or Pitra Doshas.
              </p>
            </div>
            <div className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md p-6 w-full max-w-xs shrink-0">
              <p className="text-[#FEF3C7] text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#FBBF24] text-[16px]">auto_awesome</span>
                Platform Statistics
              </p>
              {[['Kundalis Analyzed', '12,400+'], ['Remedies Matched', '3,200+'], ['Accuracy Rate', '94.2%'], ['Expert Jyothishis', '8 Active']].map(([k, v]) => (
                <div key={k} className="flex justify-between items-center py-2.5 border-b border-white/10 last:border-0">
                  <span className="text-white/60 text-sm">{k}</span>
                  <span className="text-white font-bold text-sm">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* LEFT: Input Form */}
          <div className="lg:col-span-4">
            <div className="bg-white border border-[#F0E8D5] rounded-[28px] shadow-sm p-8 flex flex-col gap-6 sticky top-24">
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#4A0404] mb-1">Janma Kundali (Birth Details)</h2>
                <p className="text-[#78716C] text-sm">Enter birth information for your complete Vedic analysis</p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-[#92400E] uppercase tracking-widest">Full Name (Janma Naama)</label>
                  <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your full name" className="w-full px-4 py-3 rounded-xl border border-[#F0E8D5] bg-[#FFFDF7] text-[#4A0404] focus:border-[#B45309] focus:ring-1 focus:ring-[#B45309] outline-none transition-all" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-[#92400E] uppercase tracking-widest">Date of Birth</label>
                    <input type="date" value={dob} onChange={e => setDob(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#F0E8D5] bg-[#FFFDF7] text-[#4A0404] focus:border-[#B45309] focus:ring-1 focus:ring-[#B45309] outline-none transition-all" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-[#92400E] uppercase tracking-widest">Time of Birth</label>
                    <input type="time" value={tob} onChange={e => setTob(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#F0E8D5] bg-[#FFFDF7] text-[#4A0404] focus:border-[#B45309] focus:ring-1 focus:ring-[#B45309] outline-none transition-all" />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-[#92400E] uppercase tracking-widest">Birth City &amp; Location</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#B45309] text-[18px]">location_on</span>
                    <input type="text" defaultValue="Hyderabad, India" className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#F0E8D5] bg-[#FFFDF7] text-[#4A0404] focus:border-[#B45309] focus:ring-1 focus:ring-[#B45309] outline-none transition-all" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-[#92400E] uppercase tracking-widest">Primary Life Focus</label>
                <div className="flex flex-wrap gap-2">
                  {focusOptions.map(opt => (
                    <button key={opt} type="button" onClick={() => toggleFocus(opt)} className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${focus.includes(opt) ? 'bg-[#7F1D1D] text-white border-[#7F1D1D]' : 'bg-[#FFFDF7] border-[#F0E8D5] text-[#78716C] hover:border-[#B45309]'}`}>{opt}</button>
                  ))}
                </div>
              </div>
              <button type="button" onClick={handleAnalyze} disabled={loading} className="w-full py-4 rounded-xl bg-gradient-to-r from-[#7F1D1D] to-[#4A0404] text-white font-bold text-sm uppercase tracking-wider shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-60">
                {loading ? <><span className="material-symbols-outlined text-[20px] animate-spin">autorenew</span> Analyzing Kundali…</> : <><span className="material-symbols-outlined text-[20px]">psychology</span> Analyze &amp; Verify Doshas</>}
              </button>
              <p className="text-[#78716C] text-[11px] text-center">🔒 Your birth details are never stored or shared externally.</p>
            </div>
          </div>

          {/* RIGHT: Results */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {!showResults ? (
              <div className="flex flex-col items-center justify-center min-h-[500px] bg-white border border-[#F0E8D5] rounded-[28px] p-12 text-center gap-6">
                <div className="w-24 h-24 rounded-full bg-[#FEF3C7] flex items-center justify-center text-[#B45309]">
                  <span className="material-symbols-outlined text-[48px]">stars</span>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#4A0404] mb-2">Enter Your Birth Details</h3>
                  <p className="text-[#78716C] text-base max-w-md">Fill in your Janma details on the left and click Analyze to receive your personalized Kundali chart and Dosha verification.</p>
                </div>
                <div className="grid grid-cols-3 gap-4 w-full max-w-md">
                  {[['account_circle', 'Kundali Chart'], ['health_and_safety', 'Dosha Analysis'], ['spa', 'Ritual Remedies']].map(([icon, label]) => (
                    <div key={label} className="flex flex-col items-center gap-2 p-4 bg-[#FFFDF7] rounded-xl border border-[#F0E8D5]">
                      <span className="material-symbols-outlined text-[28px] text-[#B45309]">{icon}</span>
                      <span className="text-xs font-semibold text-[#4A0404] text-center">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <>
                {/* Profile Summary + Chart */}
                <div className="bg-white border border-[#F0E8D5] rounded-[28px] shadow-sm p-8">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                    <div>
                      <span className="inline-flex items-center gap-1 mb-3 px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider">
                        <span className="material-symbols-outlined text-[14px]">verified</span> Kundali Verified
                      </span>
                      <h2 className="font-serif text-3xl font-bold text-[#4A0404]">{name || 'Your Name'}</h2>
                      <p className="text-[#78716C] mt-1">Born {dob ? new Date(dob).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }) : '—'} · {tob || '—'} IST · Hyderabad, India</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 shrink-0 max-w-xs">
                      {[['Janma Rashi', 'Karkataka (Cancer)'], ['Lagna (Rising)', 'Thula (Libra)'], ['Nakshatra', 'Pushya Pada 2'], ['Current Dasha', 'Saturn – 2.4 yrs']].map(([l, v]) => (
                        <div key={l} className="bg-[#FFFDF7] border border-[#F0E8D5] rounded-xl p-3">
                          <p className="text-[10px] text-[#92400E] font-bold uppercase tracking-widest">{l}</p>
                          <p className="text-[#4A0404] font-bold text-sm mt-0.5">{v}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Kundali Grid */}
                  <div className="bg-[#FEF3C7]/20 border border-[#E5D5B0] rounded-2xl p-6">
                    <h3 className="font-serif text-lg font-bold text-[#4A0404] mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#B45309] text-[20px]">grid_view</span> Lagna Kundali (D-1 Rasi Chart)
                    </h3>
                    <div className="grid grid-cols-4 gap-0.5 w-full max-w-[240px] mx-auto border border-[#D97706]/30">
                      {Array.from({ length: 16 }, (_, i) => {
                        const cell = houseMap[i];
                        const planets = PLANETS.filter(p => p.house === cell.house);
                        return (
                          <div key={i} className={`border border-[#D97706]/20 min-h-[54px] flex flex-col items-center justify-center p-1 ${cell.house === -1 ? 'bg-[#FEF3C7]/5' : 'bg-white/70 hover:bg-[#FEF3C7]/60 cursor-pointer transition-colors'}`}>
                            {cell.label && <span className="text-[8px] text-[#92400E] font-bold leading-tight">{cell.label}</span>}
                            {planets.map(p => <span key={p.name} className="text-[7px] text-[#4A0404] font-semibold">{p.name.slice(0, 2)}</span>)}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Dosha Verification */}
                <div className="bg-white border border-[#F0E8D5] rounded-[28px] shadow-sm p-8">
                  <h3 className="font-serif text-xl font-bold text-[#4A0404] mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#B45309]">health_and_safety</span> Planetary Dosha Verification
                  </h3>
                  <div className="flex flex-col gap-4">
                    {DOSHAS.map(d => (
                      <div key={d.name} className="flex items-start gap-4 p-5 rounded-2xl border border-[#F0E8D5] hover:border-[#B45309]/30 transition-colors">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: d.bg, color: d.color }}>
                          <span className="material-symbols-outlined text-[20px]">{d.icon}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-[#4A0404]">{d.name}</span>
                            <span className="text-xs font-black uppercase tracking-wider px-3 py-0.5 rounded-full" style={{ background: d.bg, color: d.color }}>{d.severity}</span>
                          </div>
                          <p className="text-[#78716C] text-sm leading-relaxed">{d.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Remedies */}
                <div className="bg-white border border-[#F0E8D5] rounded-[28px] shadow-sm p-8">
                  <h3 className="font-serif text-2xl font-bold text-[#4A0404] mb-2">Recommended Vedic Remedies</h3>
                  <p className="text-[#78716C] text-sm mb-8">Tailored to your Dosha impact level and current Dasha period, as per scripture mandates.</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {REMEDIES.map(r => (
                      <div key={r.name} className="group flex flex-col border border-[#F0E8D5] rounded-2xl hover:border-[#B45309]/40 hover:shadow-lg transition-all duration-300 overflow-hidden">
                        <div className="p-6 flex-1">
                          {r.tag && <span className={`inline-block mb-3 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${r.tag === 'Free' ? 'bg-green-100 text-green-800' : 'bg-[#FEF3C7] text-[#92400E]'}`}>{r.tag}</span>}
                          <h4 className="font-serif text-lg font-bold text-[#4A0404] mb-2">{r.name}</h4>
                          <p className="text-[#78716C] text-xs leading-relaxed mb-4">{r.reason}</p>
                          <div className="flex flex-col gap-1.5">
                            <span className="flex items-center gap-1.5 text-xs text-[#78716C]"><span className="material-symbols-outlined text-[14px] text-[#B45309]">schedule</span>{r.duration}</span>
                            <span className="flex items-center gap-1.5 text-xs text-[#78716C]"><span className="material-symbols-outlined text-[14px] text-[#B45309]">person</span>{r.priests}</span>
                          </div>
                        </div>
                        <div className="border-t border-[#F0E8D5] p-5 flex items-center justify-between">
                          <div>{r.price > 0 ? <><span className="text-[10px] text-[#92400E] uppercase font-bold tracking-wider block">All-Inclusive</span><span className="font-bold text-[#4A0404] text-xl">₹{r.price.toLocaleString('en-IN')}</span></> : <span className="text-green-700 font-black text-xl">FREE</span>}</div>
                          <Link href="/poojas" className="px-5 py-2.5 rounded-xl bg-[#7F1D1D] text-white text-sm font-bold hover:bg-[#4A0404] transition-colors">Book Now</Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
