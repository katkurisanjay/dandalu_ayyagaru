'use client';

import { useState } from 'react';
import Link from 'next/link';

const CEREMONY_STEPS = [
  { time: '06:45 AM', name: 'Mangala Snanam', desc: 'Purification bath & auspicious harathi', status: 'done' },
  { time: '07:15 AM', name: 'Kasi Yatra & Mahasankalpam', desc: 'Solemn oath invoked for 3 generations', status: 'done' },
  { time: '08:22 AM', name: 'Antarpatam & Gauri Pooja', desc: 'Curtain holds couple in quiet anticipation', status: 'live' },
  { time: '08:45 AM', name: 'Mangalasutram & Thamboolam', desc: 'Tie of the three sacred knots & pearls shower', status: 'upcoming' },
  { time: '10:15 AM', name: 'Saptapadi (Seven Vows)', desc: '7 steps circumambulating Agni Bhagawan', status: 'upcoming' },
  { time: '11:30 AM', name: 'Arundhati & Dhruva Darshanam', desc: 'Gazing at the eternal pole star of constancy', status: 'upcoming' },
];

const WISHES = [
  { name: 'Mama & Atta (Dallas, TX)', time: 'Just now', msg: '"May Lord Venkateswara bless Ananya and Karthik with longevity, affluence, and supreme santanam! Streaming this on the big screen here with grand-parents."' },
  { name: 'Suresh Rao (San Jose, CA)', time: '2 mins ago', msg: '"The English translation of the Vivaha Suktam makes this deeply meaningful. Subhamasthu!"' },
  { name: 'Dr. Lakshmi B. (London, UK)', time: '5 mins ago', msg: '"So wonderful to witness the Antarpatam ritual…"' },
];

const LIVE_POOJAS = [
  { id: 'lp-1', name: 'Vivaha (Wedding) Mahotsavam', tag: 'NOW LIVE', viewers: 1429, priest: 'Sri Viyaranya Ganapathi Sastry', location: 'Taj Krishna Ballroom · Hyderabad', cams: ['Antarpat Sanctum', 'Vadhu-Varulu', 'Agni Kunda', 'Panorama'] },
  { id: 'lp-2', name: 'Satyanarayana Swami Vratham', tag: 'STARTING IN 2H', viewers: 0, priest: 'Dandalu Ayyagaru', location: 'Jubilee Hills Residence · Hyderabad', cams: [] },
  { id: 'lp-3', name: 'Gruha Pravesham Ceremony', tag: 'TOMORROW 9AM', viewers: 0, priest: 'Dandalu Ayyagaru', location: 'Gachibowli New Villa · Hyderabad', cams: [] },
];

export default function OnlineRitualsPage() {
  const [activeCam, setActiveCam] = useState('Antarpat Sanctum');
  const [activeTab, setActiveTab] = useState<'steps'|'wishes'|'gotra'>('steps');
  const [wish, setWish] = useState('');
  const [wishesList, setWishesList] = useState(WISHES);

  const sendWish = () => {
    if (!wish.trim()) return;
    setWishesList(prev => [{ name: 'You', time: 'Just now', msg: `"${wish}"` }, ...prev]);
    setWish('');
  };

  return (
    <main className="w-full pt-16 sm:pt-20 bg-[#0F172A] min-h-screen text-white">

      {/* Top Live Bar */}
      <div className="bg-[#4A0404] border-b border-[#7F1D1D] px-6 py-2.5 flex items-center justify-between gap-4 flex-wrap text-sm">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-600 text-white text-xs font-black uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span> LIVE · 4K ULTRA-HD
          </span>
          <span className="text-[#FEF3C7] font-medium">48kHz Agamic Spatial Chants</span>
          <span className="text-white/60">Taj Krishna Ballroom – Hyderabad</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-center">
            <div className="text-[10px] text-white/50 uppercase tracking-widest">T-MINUS TO JEELAKARRA-BELLAM</div>
            <div className="font-mono text-lg font-bold text-[#FBBF24]">21:13</div>
          </div>
          <div className="text-right">
            <div className="text-[10px] text-white/50 uppercase tracking-widest">Your Timezone</div>
            <div className="text-xs font-semibold text-white">IST (Hyderabad – 08:00 AM)</div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-6">

        {/* Couple + Event Info */}
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight">
            Ananya Rao <span className="text-white/50 text-xl">(Kasyapa Gotra)</span> &amp;{' '}
            Karthik Bharadwaj <span className="text-white/50 text-xl">(Bharadwaja Gotra)</span>
          </h1>
          <div className="flex items-center gap-3 mt-2 flex-wrap text-sm text-white/70">
            <span className="text-[#FBBF24] font-semibold">Vivaha Lagnam</span>
            <span>·</span><span>Balam Intermediate</span>
            <span className="ml-auto px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs">Vivaha Lagnam · Balam Antarmukha</span>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

          {/* Main Video Area */}
          <div className="xl:col-span-8 flex flex-col gap-4">

            {/* Video Player */}
            <div className="relative w-full aspect-video bg-[#1E293B] rounded-2xl overflow-hidden border border-white/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC83w8DZVxYVIwII4H8D5R9QPTqcZiut1Oy9CXBBu51shP1eTqFk04tatPlrwxlMCJRU5IkVnqS8H1-T3oY3LRjUR0nxi7GcEQnwqONzWE6kXnp2sMoYbzw8I-Dq6Xfvo6mNBINb9rNyI9Hb4PmlerXaWG0VosIPa_UoZ3l1upuv7g0fAQLpTB00q3VNIuhW8x886O-VNfdAssG1F33sxioiEY8fgpu8kkjIkaIW6ee"
                  alt="Live ceremony stream"
                  className="w-full h-full object-cover opacity-70"
                />
              </div>
              {/* Overlay info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[#FBBF24] text-xs font-bold uppercase tracking-wider italic mb-1">
                      &quot;Kanya varam varayate... The maternal uncles hold the sacred woven silk anterpatam partition.&quot;
                    </p>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-red-600/90 text-white text-[10px] font-black uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> LIVE
                      </span>
                      <span className="text-white/70 text-xs">{activeCam}</span>
                      <span className="text-white/70 text-xs">Sri Viyaranya Ganapathi Sastry officiating</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button type="button" className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                      <span className="material-symbols-outlined text-white text-[18px]">volume_up</span>
                    </button>
                    <button type="button" className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                      <span className="material-symbols-outlined text-white text-[18px]">fullscreen</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* Live badge top */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-600/90 backdrop-blur-md text-white text-xs font-black uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span> LIVE
                </span>
                <span className="px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-semibold">
                  1,429 watching
                </span>
              </div>
            </div>

            {/* Camera Selector */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {LIVE_POOJAS[0].cams.map(cam => (
                <button
                  key={cam} type="button"
                  onClick={() => setActiveCam(cam)}
                  className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-semibold transition-all ${activeCam === cam ? 'bg-[#FBBF24] text-[#4A0404]' : 'bg-white/10 text-white/80 hover:bg-white/20'}`}
                >
                  Cam: {cam}
                </button>
              ))}
            </div>

            {/* Sloka Feed */}
            <div className="bg-[#1E293B] border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#FBBF24] text-[20px]">menu_book</span>
                  Agamic Sloka &amp; English Meaning Feed
                </h3>
                <span className="px-3 py-1 rounded-full bg-green-600/20 border border-green-500/30 text-green-400 text-xs font-bold">🔴 Live Synced to Acharya Mic</span>
              </div>
              <div className="bg-[#0F172A] rounded-xl p-5 border border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] text-[#FBBF24] font-black uppercase tracking-widest">RIGVEDA SAMHITA · 10.85.33 (VIVAHA SUKTAM)</span>
                  <span className="text-white/40 text-[10px]">08:00:42 AM IST</span>
                </div>
                <p className="text-[#FEF3C7] font-serif text-base mb-3 leading-relaxed">
                  ॐ सुमङ्गलीरियं वधूरिमां समेत पश्यत।<br />सौभाग्यमस्यै दत्वाया थास्ता विपरेतन॥
                </p>
                <p className="text-white/50 text-xs mb-3">Phonetic Telugu: సుమంగళీరియం వధూరిమాం సమేత పశ్యత…</p>
                <div className="border-t border-white/10 pt-3">
                  <p className="text-[10px] text-[#FBBF24] font-bold uppercase tracking-widest mb-1">ENGLISH TRANSLATION</p>
                  <p className="text-white/80 text-sm leading-relaxed italic">
                    &quot;Behold this auspicious bride gathered here; gaze upon her with blessings in your hearts. Bestow good fortune, health, and steadfast dharma upon her before you depart for your homes.&quot;
                  </p>
                </div>
                <div className="mt-3 flex items-start gap-2 text-xs text-white/50">
                  <span className="material-symbols-outlined text-[14px] text-[#FBBF24] shrink-0 mt-0.5">lightbulb</span>
                  <p><span className="text-[#FBBF24] font-bold">Vedic Scholar Insight:</span> The white silk Antarpatam cloth symbolizes the temporary separation of human consciousness before sacred union. At exactly 08:22:00 AM IST, as the cloth lowers, both bride and groom apply the sanctified Cumin-Jaggery mixture (Jeelakarra-Bellam) on each other&apos;s crown chakra, synchronizing biological and karmic frequencies.</p>
                </div>
              </div>
              <p className="text-white/30 text-xs mt-3 text-center">📜 View 14 previous shlokas chanted in Gauri Pooja · Auto-scrolling with priest audio</p>
            </div>

            {/* Action Row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: 'shower', label: 'Shower Virtual Akshata & Pushpam', count: '108 Sacred Offerings Showered' },
                { icon: 'notifications', label: 'Ring Temple Bell', count: null },
                { icon: 'description', label: 'Sankalpam Booklet (PDF)', count: null },
              ].map(item => (
                <button key={item.label} type="button" className="flex flex-col items-center gap-2 p-4 bg-[#1E293B] border border-white/10 rounded-2xl hover:border-[#FBBF24]/50 hover:bg-white/5 transition-all text-center">
                  <span className="material-symbols-outlined text-[#FBBF24] text-[28px]">{item.icon}</span>
                  <span className="text-white text-xs font-semibold leading-tight">{item.label}</span>
                  {item.count && <span className="text-white/40 text-[10px]">{item.count}</span>}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="xl:col-span-4 flex flex-col gap-4">

            {/* Tabs */}
            <div className="flex rounded-xl bg-[#1E293B] p-1 gap-1 border border-white/10">
              {(['steps', 'wishes', 'gotra'] as const).map(tab => (
                <button key={tab} type="button" onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all capitalize ${activeTab === tab ? 'bg-[#FBBF24] text-[#4A0404]' : 'text-white/60 hover:text-white'}`}>
                  {tab === 'steps' ? 'Ceremony' : tab === 'wishes' ? 'Guest Wishes' : 'Family Gotra'}
                </button>
              ))}
            </div>

            {activeTab === 'steps' && (
              <div className="bg-[#1E293B] border border-white/10 rounded-2xl p-5 flex flex-col gap-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-white">Live Vivaha Pathway</h3>
                  <span className="text-[#FBBF24] text-xs font-bold">STEP 3 OF 7</span>
                </div>
                <div className="flex flex-col gap-3">
                  {CEREMONY_STEPS.map(step => (
                    <div key={step.name} className={`flex items-start gap-3 p-3 rounded-xl transition-all ${step.status === 'live' ? 'bg-[#FBBF24]/10 border border-[#FBBF24]/30' : step.status === 'done' ? 'opacity-60' : 'opacity-40'}`}>
                      <div className={`w-6 h-6 rounded-full shrink-0 flex items-center justify-center mt-0.5 ${step.status === 'live' ? 'bg-red-600' : step.status === 'done' ? 'bg-green-600' : 'bg-white/20'}`}>
                        {step.status === 'live' ? <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span> :
                         step.status === 'done' ? <span className="material-symbols-outlined text-white text-[14px]">check</span> :
                         <span className="w-2 h-2 rounded-full bg-white/40"></span>}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className={`text-sm font-bold ${step.status === 'live' ? 'text-[#FBBF24]' : 'text-white'}`}>{step.name}</span>
                          <span className="text-white/40 text-[10px]">{step.time}</span>
                        </div>
                        <p className="text-white/60 text-xs mt-0.5">{step.desc}</p>
                        {step.status === 'live' && <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-red-600 text-white text-[9px] font-black uppercase tracking-wider">LIVE NOW</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'wishes' && (
              <div className="bg-[#1E293B] border border-white/10 rounded-2xl p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-white">Guest Wishes</h3>
                  <span className="text-white/50 text-xs">184 relatives connected worldwide</span>
                </div>
                <div className="flex flex-col gap-3 max-h-[320px] overflow-y-auto pr-1">
                  {wishesList.map((w, i) => (
                    <div key={i} className="bg-[#0F172A] rounded-xl p-4 border border-white/5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-bold text-sm">{w.name}</span>
                        <span className="text-white/30 text-[10px]">{w.time}</span>
                      </div>
                      <p className="text-white/70 text-xs leading-relaxed">{w.msg}</p>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 pt-2">
                  <input value={wish} onChange={e => setWish(e.target.value)} onKeyDown={e => e.key === 'Enter' && sendWish()} type="text" placeholder="Type sacred blessing & heartfelt wishes…" className="flex-1 px-4 py-2.5 rounded-xl bg-[#0F172A] border border-white/10 text-white text-sm placeholder:text-white/30 focus:border-[#FBBF24]/50 outline-none" />
                  <button type="button" onClick={sendWish} className="px-4 py-2.5 rounded-xl bg-[#7F1D1D] hover:bg-[#4A0404] text-white text-sm font-bold transition-colors">Send →</button>
                </div>
                <p className="text-white/30 text-[10px] text-center">Wishes display directly on the family lounge screen in the Mandapam hall.</p>
              </div>
            )}

            {activeTab === 'gotra' && (
              <div className="bg-[#1E293B] border border-white/10 rounded-2xl p-5 flex flex-col gap-4">
                <h3 className="font-semibold text-white">Global Family Presence</h3>
                <div className="flex gap-2 flex-wrap">
                  {['🇮🇳 India', '🇺🇸 US', '🇸🇬 SG', '🇬🇧 UK', '🇦🇪 UAE'].map(f => (
                    <span key={f} className="px-3 py-1.5 rounded-full bg-white/10 text-white text-sm font-semibold">{f}</span>
                  ))}
                </div>
                <div className="bg-[#0F172A] rounded-xl p-4 border border-white/5">
                  <p className="text-[10px] text-[#FBBF24] font-bold uppercase tracking-widest mb-2">Remote Sankalpam Enrollment</p>
                  <p className="text-white/70 text-xs mb-3">Ensure your Gotra and family Nakshatram are verbally pronounced during the sacred Saptapadi Homa offering at 10:15 AM IST.</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-white/40 uppercase">NRI Family Registry</p>
                      <p className="text-white font-bold text-sm">42 Families Registered</p>
                    </div>
                    <button type="button" className="px-4 py-2 rounded-xl bg-[#7F1D1D] text-white text-sm font-bold hover:bg-[#4A0404] transition-colors">Register Gotra</button>
                  </div>
                </div>
              </div>
            )}

            {/* Broadcast Concierge */}
            <div className="bg-[#1E293B] border border-white/10 rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#7F1D1D] flex items-center justify-center text-[#FBBF24]">
                  <span className="material-symbols-outlined text-[20px]">headset_mic</span>
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">Broadcast Concierge</p>
                  <p className="text-white/50 text-xs">24/7 NRI WhatsApp & Stream Audio Support</p>
                </div>
                <button type="button" className="px-4 py-2 rounded-xl bg-[#7F1D1D] text-white text-xs font-bold hover:bg-[#4A0404] transition-colors">Connect</button>
              </div>
            </div>

          </div>
        </div>

        {/* More Live Events */}
        <div className="mt-12">
          <h2 className="font-serif text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-[#FBBF24]">live_tv</span>
            More Live &amp; Upcoming Rituals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LIVE_POOJAS.map((pooja, i) => (
              <div key={pooja.id} className={`group relative rounded-2xl border ${i === 0 ? 'border-[#FBBF24]/40 bg-[#FBBF24]/5' : 'border-white/10 bg-[#1E293B]'} p-6 hover:border-white/30 transition-all cursor-pointer hover:-translate-y-1`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${pooja.tag === 'NOW LIVE' ? 'bg-red-600 text-white flex items-center gap-1.5' : 'bg-white/10 text-white/70'}`}>
                    {pooja.tag === 'NOW LIVE' && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>}
                    {pooja.tag}
                  </span>
                  {pooja.viewers > 0 && <span className="text-white/50 text-xs">{pooja.viewers.toLocaleString()} watching</span>}
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-1 group-hover:text-[#FBBF24] transition-colors">{pooja.name}</h3>
                <p className="text-white/50 text-xs mb-1">{pooja.priest}</p>
                <p className="text-white/40 text-xs mb-4 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[12px]">location_on</span>{pooja.location}
                </p>
                <Link href="#" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#7F1D1D] text-white text-sm font-bold hover:bg-[#4A0404] transition-colors">
                  {i === 0 ? 'Watch Live' : 'Book Vivaha Package'}
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
