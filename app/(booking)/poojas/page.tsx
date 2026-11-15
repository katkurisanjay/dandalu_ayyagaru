'use client';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import { categories, poojaItems } from './poojasData';

const CATEGORY_ICONS: Record<string, string> = {
  'All': 'apps',
  'Homam': 'local_fire_department',
  'Relationship and Marriages': 'favorite',
  'New Beginnings': 'cottage',
  'Astrology Dosha Related': 'stars',
  'Money and Debt Related': 'payments',
  'Festival Poojas': 'celebration',
  'Dharmic Rituals & Samskaras': 'menu_book',
  'Vitals & Samskaras': 'child_care',
};

// Category-matched image map for relevant ritual photos
const CATEGORY_IMAGE_MAP: Record<string, string> = {
  'New Beginnings':           'https://images.unsplash.com/photo-1604604994733-411db1898739?auto=format&fit=crop&q=80&w=600&h=700',
  'Education and Career':     'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600&h=700',
  'Astrology Dosha Related':  'https://images.unsplash.com/photo-1543168256-418811576931?auto=format&fit=crop&q=80&w=600&h=700',
  'Money and Debt Related':   'https://images.unsplash.com/photo-1582560469792-5642cb6be220?auto=format&fit=crop&q=80&w=600&h=700',
  'Relationship and Marriages':'https://images.unsplash.com/photo-1583324113626-70df0f4deaab?auto=format&fit=crop&q=80&w=600&h=700',
  'Protection and Victory':   'https://images.unsplash.com/photo-1605806616949-1e87b487bc2a?auto=format&fit=crop&q=80&w=600&h=700',
  'Death Rituals':            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=700',
  'Ancestors/Pitru':          'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&q=80&w=600&h=700',
  'Baby Related':             'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=600&h=700',
  'Health Issues':            'https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?auto=format&fit=crop&q=80&w=600&h=700',
  'Festival Poojas':          'https://images.unsplash.com/photo-1605806616949-1e87b487bc2a?auto=format&fit=crop&q=80&w=600&h=700',
  'Ceremonies':               'https://images.unsplash.com/photo-1583324113626-70df0f4deaab?auto=format&fit=crop&q=80&w=600&h=700',
};

// Name-based overrides for specific well-known rituals
const NAME_IMAGE_MAP: Record<string, string> = {
  'Ganesh Puja':              'https://images.unsplash.com/photo-1583244532610-c3b1a1e8ea51?auto=format&fit=crop&q=80&w=600&h=700',
  'Ganapathi Havan':          'https://images.unsplash.com/photo-1583244532610-c3b1a1e8ea51?auto=format&fit=crop&q=80&w=600&h=700',
  'Ganesh Chaturthi':         'https://images.unsplash.com/photo-1583244532610-c3b1a1e8ea51?auto=format&fit=crop&q=80&w=600&h=700',
  'Satyanarayan Puja':        'https://images.unsplash.com/photo-1604604994733-411db1898739?auto=format&fit=crop&q=80&w=600&h=700',
  'Vivah (Marriage)':         'https://images.unsplash.com/photo-1583324113626-70df0f4deaab?auto=format&fit=crop&q=80&w=600&h=700',
  'Engagement Puja - Sagai':  'https://images.unsplash.com/photo-1583324113626-70df0f4deaab?auto=format&fit=crop&q=80&w=600&h=700',
  'Navagraha Havan':          'https://images.unsplash.com/photo-1543168256-418811576931?auto=format&fit=crop&q=80&w=600&h=700',
  'Rudrabhishek Puja':        'https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?auto=format&fit=crop&q=80&w=600&h=700',
  'Diwali Lakshmi Puja':      'https://images.unsplash.com/photo-1605806616949-1e87b487bc2a?auto=format&fit=crop&q=80&w=600&h=700',
  'Vastu Shanti Puja':        'https://images.unsplash.com/photo-1582560469792-5642cb6be220?auto=format&fit=crop&q=80&w=600&h=700',
  'Bhoomi Puja':              'https://images.unsplash.com/photo-1604604994733-411db1898739?auto=format&fit=crop&q=80&w=600&h=700',
  'Namakaranam':              'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=600&h=700',
  'Annaprashana':             'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=600&h=700',
  'Upanayanam (Thread Ceremony)': 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600&h=700',
  'Shradh':                   'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&q=80&w=600&h=700',
  'Pind Daan':                'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&q=80&w=600&h=700',
  'Maha Mrityunjaya Jaap':    'https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?auto=format&fit=crop&q=80&w=600&h=700',
  'Saraswati Puja':           'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600&h=700',
  'Saraswati Havan':          'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600&h=700',
  'Varalakshmi Vratam':       'https://images.unsplash.com/photo-1582560469792-5642cb6be220?auto=format&fit=crop&q=80&w=600&h=700',
  'Mahalakshmi Pooja':        'https://images.unsplash.com/photo-1582560469792-5642cb6be220?auto=format&fit=crop&q=80&w=600&h=700',
};

function getCardInfo(pooja: { name: string; categories: string[] }) {
  const hash = pooja.name.split('').reduce((acc: number, c: string) => acc + c.charCodeAt(0), 0);
  const price = ((hash % 8) + 2) * 1000;
  // Pick image: name-specific override → first category match → hash fallback
  const img = NAME_IMAGE_MAP[pooja.name]
    ?? CATEGORY_IMAGE_MAP[pooja.categories[0]]
    ?? 'https://images.unsplash.com/photo-1604604994733-411db1898739?auto=format&fit=crop&q=80&w=600&h=700';
  const duration = ['1.5 - 2 Hrs', '2 - 3 Hrs', '3 - 4 Hrs', '45 - 60 Min'][(hash % 4)];
  const priests = hash % 3 === 0 ? '2 Certified Priests' : '1 Certified Priest';
  const samagri = hash % 2 === 0 ? 'Samagri Included' : 'Zero Cash Elements';
  const rating = (4.6 + (hash % 4) * 0.1).toFixed(1);
  const reviews = 40 + (hash % 200);
  const tags = [];
  if (hash % 5 === 0) tags.push('BEST SELLER');
  if (pooja.categories.includes('Homam')) tags.push('HOMAM SPECIAL');
  if (pooja.categories.includes('Relationship and Marriages')) tags.push('MARRIAGE RITUAL');
  return { price, img, duration, priests, samagri, rating, reviews, tags };
}

export default function PoojasPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('Popular');

  const handleCategorySelect = (cat: string) => {
    setActiveCategory(cat);
    // Smooth scroll to the top of the grid with a slight delay to allow render
    setTimeout(() => {
      document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  const filteredPoojas = useMemo(() => {
    return poojaItems.filter(pooja => {
      const matchesCategory = activeCategory === 'All' || pooja.categories.includes(activeCategory);
      const matchesSearch = pooja.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <main className="w-full pt-[80px] bg-[#FFFDF7] min-h-screen font-sans">

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-[#4A0404] via-[#7F1D1D] to-[#92400E] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FBBF24]/10 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 pt-12 pb-16 relative z-10">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-white/50 text-xs uppercase tracking-widest mb-8">
            <Link className="hover:text-white transition-colors" href="/">Home</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-white/80 cursor-pointer hover:text-white" onClick={() => handleCategorySelect('All')}>Choose Your Sacred Ritual</span>
            {activeCategory !== 'All' && (
              <>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span className="text-[#FBBF24] font-semibold">{activeCategory}</span>
              </>
            )}
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FBBF24]/30 bg-[#FBBF24]/10 text-[#FEF3C7] text-xs font-black uppercase tracking-widest w-fit">
                <span className="material-symbols-outlined text-[14px]">verified</span>
                Authentic Vedic Purohits · Certified
              </div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
                Choose Sacred Pooja &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBBF24] to-[#FEF3C7]">Auspicious Rituals</span>
              </h1>
              <p className="text-white/75 text-base leading-relaxed max-w-xl">
                Authenticated Vedic Purohits, Astrologically sealed organic samagri, and zero-compromise certified services for every sacred milestone of your family.
              </p>
              <div className="flex flex-wrap gap-3 mt-2">
                {['Veda Patashala Certified', 'Zero Cash Elements (Zero Bills)', 'Time-Safe Appointment Protocol'].map(t => (
                  <span key={t} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-medium backdrop-blur-md">
                    <span className="material-symbols-outlined text-[#FBBF24] text-[14px]">check_circle</span>{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Preview Cards */}
            <div className="lg:col-span-5 hidden lg:flex justify-end gap-4">
              <div className="relative w-48 h-64 rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <img src="https://images.unsplash.com/photo-1604604994733-411db1898739?auto=format&fit=crop&q=80&w=600&h=700" alt="Ritual" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[#FBBF24] font-serif text-sm font-bold">Gruha Pravesham &amp; Vastu Flow</p>
                </div>
              </div>
              <div className="relative w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border border-white/20 self-end">
                <img src="https://images.unsplash.com/photo-1604604994733-411db1898739?auto=format&fit=crop&q=80&w=600&h=700" alt="Ritual" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white font-serif text-xs font-bold">Sri Satyanarayana Swami Vratham</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search + Sort Bar */}
      <section className="bg-white border-b border-[#F0E8D5] shadow-sm sticky top-[80px] z-40">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 py-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Search */}
            <div className="relative flex-1 w-full">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#B45309] text-[20px]">search</span>
              <input
                type="text"
                placeholder="Search by pooja name, category, deity, Nakshatra, slokam, or muhurtam purpose…"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-[#F0E8D5] bg-[#FFFDF7] text-[#4A0404] text-sm focus:border-[#B45309] focus:ring-1 focus:ring-[#B45309] outline-none transition-all"
              />
            </div>
            {/* Filters */}
            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto no-scrollbar pb-1 md:pb-0 shrink-0">
              <select value={activeCategory} onChange={e => handleCategorySelect(e.target.value)} className="px-4 py-2.5 rounded-full border border-[#F0E8D5] bg-[#FFFDF7] text-[#4A0404] text-sm focus:border-[#B45309] outline-none">
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <select className="px-4 py-2.5 rounded-full border border-[#F0E8D5] bg-[#FFFDF7] text-[#4A0404] text-sm focus:border-[#B45309] outline-none">
                <option>Schedule &amp; Homa Recordings</option>
                <option>Event &amp; Functions</option>
                <option>Vitals &amp; Samskaras</option>
              </select>
              <select className="px-4 py-2.5 rounded-full border border-[#F0E8D5] bg-[#FFFDF7] text-[#4A0404] text-sm focus:border-[#B45309] outline-none">
                <option>All Venue Locations</option>
                <option>Hyderabad</option>
                <option>Bangalore</option>
                <option>Chennai</option>
              </select>
              <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="px-4 py-2.5 rounded-full border border-[#F0E8D5] bg-[#FFFDF7] text-[#4A0404] text-sm focus:border-[#B45309] outline-none">
                <option>Popular</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Top Rated</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Nakshatra Matchmaker Banner */}
      <section className="bg-gradient-to-r from-[#FEF3C7] to-[#FFEDD5] border-b border-[#F0E8D5]">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#B45309] text-[20px]">stars</span>
            <p className="text-sm text-[#92400E] font-medium">
              <span className="font-bold">Unsure which sacred Homam matches your Janma Nakshatra?</span> Speak with our Jyothishi for a perfect match with your sacred milestones of your family.
            </p>
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto no-scrollbar pb-1 md:pb-0 shrink-0">
            <Link href="/astrology" className="px-4 py-2 rounded-full border border-[#B45309] text-[#7F1D1D] text-sm font-bold hover:bg-[#7F1D1D] hover:text-white transition-all whitespace-nowrap">
              ✨ My Nakshatra Matcher
            </Link>
            <Link href="/astrology" className="px-4 py-2 rounded-full bg-[#7F1D1D] text-white text-sm font-bold hover:bg-[#4A0404] transition-all whitespace-nowrap">
              Get Guidance Instantly
            </Link>
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="bg-white border-b border-[#F0E8D5]">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 py-4 flex gap-2 overflow-x-auto no-scrollbar">
          {categories.map(cat => {
            const icon = CATEGORY_ICONS[cat] || 'spa';
            return (
              <button
                key={cat} type="button"
                onClick={() => handleCategorySelect(cat)}
                className={`flex items-center gap-2 whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === cat ? 'bg-[#7F1D1D] text-white shadow-md' : 'bg-[#F8F5EE] text-[#78716C] border border-[#F0E8D5] hover:border-[#B45309]/40 hover:text-[#4A0404]'}`}
              >
                <span className={`material-symbols-outlined text-[16px] ${activeCategory === cat ? 'text-[#FBBF24]' : 'text-[#B45309]'}`}>{icon}</span>
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Main Content */}
      <section id="catalog-section" className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 py-8 min-h-[800px] scroll-mt-[180px]">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#4A0404]">Vedic Ritual Catalog</h2>
            <p className="text-[#78716C] text-sm mt-1">Carefully requested ceremonies according to Swamis, conducted with absolute reverence.</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#78716C] text-sm">{filteredPoojas.length} rituals</span>
            <span className="text-[#78716C] text-sm">·</span>
            <span className="text-[#92400E] text-sm font-semibold">Swamis &amp; Certified Rishi-Sishtis</span>
          </div>
        </div>

        {filteredPoojas.length === 0 ? (
          <div className="w-full flex flex-col items-center justify-center py-32 gap-4">
            <span className="material-symbols-outlined text-6xl text-[#E5D5B0]">search_off</span>
            <h3 className="text-xl text-[#4A0404] font-serif font-semibold">No rituals found</h3>
            <p className="text-sm text-[#78716C] text-center max-w-xs">Try adjusting your filters or search query to find the sacred ritual you are looking for.</p>
            <button type="button" onClick={() => { handleCategorySelect('All'); setSearchQuery(''); }} className="px-6 py-3 rounded-full bg-[#7F1D1D] text-white font-semibold text-sm hover:bg-[#4A0404] transition-colors">
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {filteredPoojas.map(pooja => {
              const id = pooja.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
              const { price, img, duration, priests, samagri, rating, reviews, tags } = getCardInfo(pooja);

              return (
                <div key={id} className="group flex flex-col bg-white rounded-[24px] border border-[#F0E8D5] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                  
                  {/* Card Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#FEF3C7]">
                    <img src={img} alt={pooja.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                    {/* Tags */}
                    <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                      {tags.map(tag => (
                        <span key={tag} className="px-2.5 py-1 rounded-full bg-[#FBBF24] text-[#4A0404] text-[9px] font-black uppercase tracking-widest shadow-md">{tag}</span>
                      ))}
                    </div>

                    {/* Duration top right */}
                    <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-[10px] font-bold">
                      <span className="material-symbols-outlined text-[12px]">schedule</span>{duration}
                    </div>

                    {/* Pooja name overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-[#FBBF24] font-serif text-xl font-bold leading-snug drop-shadow-lg">{pooja.name}</p>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex flex-col gap-4 flex-1">
                    {/* Category Tag */}
                    <div className="flex items-center gap-2 flex-wrap">
                      {pooja.categories.slice(0, 2).map(cat => (
                        <span key={cat} className="px-2.5 py-1 rounded-full bg-[#FEF3C7] text-[#92400E] text-[10px] font-bold uppercase tracking-wider">{cat}</span>
                      ))}
                    </div>

                    <h3 className="font-serif text-lg font-bold text-[#4A0404] leading-snug group-hover:text-[#7F1D1D] transition-colors line-clamp-2">{pooja.name}</h3>

                    {/* Features list */}
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-xs text-[#78716C]">
                        <span className="material-symbols-outlined text-[14px] text-[#B45309]">person</span>
                        {priests}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#78716C]">
                        <span className="material-symbols-outlined text-[14px] text-[#B45309]">inventory_2</span>
                        {samagri}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#78716C]">
                        <span className="material-symbols-outlined text-[14px] text-green-600">check_circle</span>
                        Zero Cash Elements
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }, (_, i) => (
                          <span key={i} className={`material-symbols-outlined text-[14px] ${i < 4 ? 'text-[#F59E0B]' : 'text-[#D1D5DB]'}`} style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        ))}
                      </div>
                      <span className="text-sm font-bold text-[#4A0404]">{rating}</span>
                      <span className="text-xs text-[#78716C]">({reviews} reviews)</span>
                    </div>

                    {/* Price + Book Button */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#F0E8D5]">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-[#92400E] font-bold uppercase tracking-wider">All-Inclusive Starting From</span>
                        <span className="font-bold text-[#4A0404] text-2xl">₹{price.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex gap-2">
                        <Link href={`/poojas/${id}`} className="px-3 py-2 rounded-xl border border-[#F0E8D5] text-[#4A0404] text-sm font-semibold hover:border-[#B45309] transition-colors">
                          View Details
                        </Link>
                        <Link href={`/book?poojaId=${id}`} className="px-4 py-2 rounded-xl bg-[#7F1D1D] text-white text-sm font-bold hover:bg-[#4A0404] transition-colors shadow-sm">
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Pagination */}
        {filteredPoojas.length > 0 && (
          <div className="w-full flex justify-center mt-16 mb-8">
            <div className="flex items-center gap-2 bg-white border border-[#F0E8D5] rounded-full p-1.5 shadow-sm" suppressHydrationWarning>
              <button type="button" className="px-4 py-2 text-sm font-medium text-[#78716C] hover:text-[#4A0404] transition-colors flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">chevron_left</span> Previous
              </button>
              <button type="button" className="w-9 h-9 flex items-center justify-center rounded-full text-sm font-bold text-[#4A0404] hover:bg-[#FEF3C7] transition-colors">1</button>
              <button type="button" className="w-9 h-9 flex items-center justify-center rounded-full text-sm font-bold bg-[#7F1D1D] text-white shadow-md">2</button>
              <button type="button" className="w-9 h-9 flex items-center justify-center rounded-full text-sm font-bold text-[#4A0404] hover:bg-[#FEF3C7] transition-colors">3</button>
              <button type="button" className="px-4 py-2 text-sm font-medium text-[#78716C] hover:text-[#4A0404] transition-colors flex items-center gap-1">
                Next <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Purity Code Banner */}
      <section className="bg-[#FFF8E7] border-t border-[#F0E8D5] py-16">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="text-[#92400E] text-xs font-black uppercase tracking-[0.3em] block mb-3">SACRED PURITY ASSURED</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4A0404]">The Dandalu Ayyagaru Purity Code</h2>
            <p className="text-[#78716C] mt-3 max-w-xl mx-auto">We bring uncompromising integrity in scripture adherence, witnessing, and language usage and enforcing pure lineage continuity.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: 'gavel', title: 'Zero-Bargaining Code', desc: 'Fixed, respectful fees upfront so your family stays focussed on the ceremony and not on pricing negotiation.' },
              { icon: 'history_edu', title: 'Veda Patashala Certified', desc: 'Priests undergo rigorous Patashala-based studies conforming to Smartha and Vaidika Prayoga traditions.' },
              { icon: 'eco', title: '100% Organic Samagri', desc: 'Meticulously sourced for zero-dye grains, chemical-quality leaves for mango, champhor, haldi, and pure dhanya ceremonial materials.' },
              { icon: 'schedule', title: 'Punctuality Guarantee', desc: 'Acharya arrives 30 minutes before the Muhurtham time with the full mandapam setup without a single second of delay.' },
            ].map(item => (
              <div key={item.title} className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#F0E8D5] shadow-sm flex items-center justify-center text-[#B45309]">
                  <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#4A0404]">{item.title}</h3>
                <p className="text-[#78716C] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
