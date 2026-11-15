'use client';

import { useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';

const PRIESTS = [
  {
    id: 'somayaji',
    name: 'Brahmasri K. Subrahmanya Somayaji',
    veda: 'Krishna Yajurveda (Taittiriya Sakha) · Apastamba Grihya Sutra',
    school: 'Tirumala Veda Patashala (18 Years Adhyayanam, Gold Medallist)',
    experience: '18 Years Practicing · 540+ Consecrations',
    languages: 'Telugu (Native), Sanskrit (Fluent), English (Fluent)',
    dakshina: 7500,
    rating: '4.98',
    reviews: 312,
    badge: 'Gold Medallist',
    specialty: 'Recommended For Gruha Pravesham',
    isRecommended: true,
    tags: ['Fire-Safe Apartment Certified', 'Veda Patashala Certified', '+1 Sahaya Purohit'],
    audioLabel: 'Ganapathi Atharvashirsha Swaram Preview',
    audioDuration: '0:38',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAU-XH-07SVzyreMhBUDtyuQfi0kizH9ahQutsIW0YQD_4pn6qV2qevwi3zbiH_txckIwgx8wFp40Mv1Ziud_ADlF9bCiTtXvlUWYabaiSDqBYF0j1CG4eqFbVHoEHTU9xZestqqhwSjJxTucedInH3h63eN-JYNY_OwsrXeRn7KwIpmn8W2E2gEvHHAcSCciS8QYMpnpRBdHUl7dmA3_Q2gQ_0e2q07D2raLFHxD-j',
  },
  {
    id: 'phanindra',
    name: 'Brahmasri Dr. M. S. Phanindra Ghanapati',
    veda: 'Rigveda (Shakala Sakha) · Ashvalayana Sutra',
    school: 'Sringeri Sharada Peetham (Ghananta Veda Pariksha Passed)',
    experience: '22 Years Practicing · 680+ Consecrations',
    languages: 'Telugu, Sanskrit, Kannada, Hindi',
    dakshina: 8000,
    rating: '4.99',
    reviews: 420,
    badge: 'Ghananta Vidwan',
    specialty: 'Rigveda Master · Ghanapati',
    isRecommended: false,
    tags: ['Ph.D. in Vedic Philology', 'Sharada Peetham Certified'],
    audioLabel: 'Rigveda Purusha Suktam Preview',
    audioDuration: '0:45',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChSXmMqX8SEhXTO4M7dWJgRsH5v-ll5tQaxtKtXUdZwKf-frNp2XuqWJBe47nlc-S5YedIMylc3DzRqwbdXVyObdgZTHNvdEtkqZPut5U5fqd809dzp_6JNnqtKfRf8SIzqVo7op90pR6z7GAK8zKlSuwQZjzUVXFym5PPXBFhwPjGXXJiQIc9ugPreFQLR1LO3dzjq6j7xx4wL0dWSu5FRBjAGFS509sUTNNP20Bf',
  },
  {
    id: 'venkata',
    name: 'Brahmasri Venkata Ramana Siddhanti',
    veda: 'Krishna Yajurveda · Smartha Apastambha & Jyotisha Vidwan',
    school: 'Shankara Matham Gurukulam, Hyderabad (15 Years)',
    experience: '16 Years Practicing · 410+ Consecrations',
    languages: 'Telugu, Sanskrit, English',
    dakshina: 7000,
    rating: '4.96',
    reviews: 285,
    badge: 'Asthana Siddhanti',
    specialty: 'Jyotisha Vidwan & Smartha',
    isRecommended: false,
    tags: ['Vastu & Disha Shanti Certified', 'Shankara Matham Gurukulam'],
    audioLabel: 'Chamaka Prashna Recitation Preview',
    audioDuration: '0:42',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfAuEnq1eYd1K7rvs1pCvmIPVZblWvxkO7zkYHR_buthHhNPiHBHOrVeRBIW1NUNAWmKMCYKX6KB4NlMa3El9x-mNH6cCa1iZf8c-VzqjIXDCQ92DUuzT8OtuPL2FK9UMJD-h1KP57bWeXTGxJT5D4yVc5dNMf_hoYrvzTzBo1-sSv61q4ThzDdNY5kzQppl4PjgPPbxsujkriJaGtbFZ-lHPsaNfBLK0Gpg15Otoo',
  },
  {
    id: 'raghavendra',
    name: 'Brahmasri Raghavendra Bhat',
    veda: 'Shukla Yajurveda (Madhyandina Sakha) · Katyayana Sutra',
    school: 'Kashi Veda Samskrita Parishad (14 Years Adhyayanam)',
    experience: '14 Years Practicing · 320+ Consecrations',
    languages: 'Hindi, Sanskrit, English, Telugu',
    dakshina: 6800,
    rating: '4.95',
    reviews: 190,
    badge: 'Kashi Parishad',
    specialty: 'Shukla Yajurveda Acharya',
    isRecommended: false,
    tags: ['Multi-lingual Urban Apt Conduct', 'Kashi Parishad Verified'],
    audioLabel: 'Shukla Yajurveda Shanti Mantra Preview',
    audioDuration: '0:35',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZzKroHjUb9l36ZwYDIZYfnmAQVMW_EcYKabaFpa6_kj8FljtwFObl6dnNIrY6M5l-AXgqh0jxEL2mW7U1dgQCJ-0YrfeoAgFARyTgAT5XXq5EnRL3CXxghl3tC2PveOTbfCcdZY7YMmzgrbOAynsaDozMIqlnp-EwKQ1ARKoO0Ap2q0NPs1HUZCpWV_1Ih0mWG7wh3d1zur8B0c6hS07RQPs3hjnxTfH_0zwgm3VA',
  },
];

const WAVEFORM_HEIGHTS = [3, 5, 2, 6, 4, 5, 3, 2, 4, 6, 3, 5, 2, 4, 5, 2];

function PriestSelectionForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedPriestId, setSelectedPriestId] = useState<string>('somayaji');
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [activeShakha, setActiveShakha] = useState<string>('All');

  const selectedPriest = PRIESTS.find(p => p.id === selectedPriestId) ?? PRIESTS[0];

  const handleNext = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('priest', selectedPriestId);
    params.set('dakshina', String(isAutoAssign ? 7500 : selectedPriest.dakshina));
    router.push(`/book/payment?${params.toString()}`);
  };

  const toggleAudio = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setPlayingId(prev => (prev === id ? null : id));
  };

  const shakhas = ['All', 'Krishna Yajurveda', 'Rigveda', 'Shukla Yajurveda', 'Sama Veda'];

  const filteredPriests = activeShakha === 'All'
    ? PRIESTS
    : PRIESTS.filter(p => p.veda.includes(activeShakha));

  const isAutoAssign = selectedPriestId === 'auto_assign';

  return (
    <main className="w-full pt-16 sm:pt-20 bg-[#FFFDF7] min-h-screen font-sans">

      {/* Progress Header */}
      <section className="w-full bg-[#F8F5EE] border-b border-[#F0E8D5] py-4">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col gap-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <nav className="flex items-center gap-2 text-xs text-[#78716C] uppercase tracking-wider">
              <Link href="/" className="hover:text-[#7F1D1D] transition-colors">Home</Link>
              <span className="material-symbols-outlined text-[13px]">chevron_right</span>
              <Link href="/poojas" className="hover:text-[#7F1D1D] transition-colors">Pooja</Link>
              <span className="material-symbols-outlined text-[13px]">chevron_right</span>
              <span className="text-[#7F1D1D] font-semibold">Choose Acharya</span>
            </nav>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full shadow-sm border border-[#F0E8D5]">
              <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse"></span>
              <span className="text-xs font-bold text-[#4A0404] uppercase tracking-wide">Step 4: Acharya Selection</span>
            </div>
          </div>
          {/* Progress bar */}
          <div className="w-full h-1.5 bg-[#F0E8D5] rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#92400E] to-[#F97316] rounded-full w-[40%] transition-all duration-700"></div>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="w-full bg-gradient-to-br from-[#4A0404] via-[#7F1D1D] to-[#92400E] text-white py-12 lg:py-16">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-[#FBBF24]/40 text-[#FEF3C7] text-xs font-bold uppercase tracking-widest">
                <span className="material-symbols-outlined text-[14px]">workspace_premium</span>
                Asthana Siddhanti Certified Selection
              </div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
                Select Your Certified <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBBF24] to-[#FEF3C7]">Vedic Acharya</span>
              </h1>
              <p className="text-white/80 text-base md:text-lg max-w-2xl leading-relaxed">
                Every Purohit is screened by Senior Asthana Siddhantis for authentic Veda Patashala certification, correct Vedic Swaram intonation, and adherence to our zero-cash-solicitation code.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {['100% Adhyayana Vetted', 'Zero Cash Policy', '45-Min Punctuality Bond'].map(t => (
                  <span key={t} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-medium">
                    <span className="material-symbols-outlined text-[#FBBF24] text-[14px]">check_circle</span>{t}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FBBF24]/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#FBBF24] text-[20px]">verified_user</span>
                </div>
                <div>
                  <p className="font-bold text-white text-base">No Freelance Intermediaries</p>
                  <p className="text-[#FBBF24] text-xs uppercase font-semibold tracking-wide">Rigorous Lineage Audit</p>
                </div>
              </div>
              <p className="text-white/75 text-sm leading-relaxed">
                Every recitation aligns strictly with your familial Gotra, Sutra, and Gruhya Shakha protocols.
              </p>
              <div className="pt-2 flex items-center justify-between text-xs text-white/60">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px] text-[#FBBF24]">gavel</span> Zero Cash Policy</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px] text-[#FBBF24]">schedule</span> 45-Min Punctual</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Strip */}
      <section className="w-full bg-white border-b border-[#F0E8D5] sticky top-[80px] z-30 shadow-sm">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
            <span className="text-xs text-[#B45309] uppercase tracking-wider font-semibold whitespace-nowrap mr-1">Shakha:</span>
            {shakhas.map(s => (
              <button
                key={s}
                type="button"
                onClick={() => setActiveShakha(s)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${activeShakha === s ? 'bg-[#7F1D1D] text-white shadow-md' : 'bg-[#FEF3C7] text-[#92400E] hover:bg-[#FDE68A]'}`}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto no-scrollbar pb-1 md:pb-0 shrink-0">
            <select className="px-4 py-2 rounded-full border border-[#F0E8D5] bg-[#FFFDF7] text-[#4A0404] text-sm focus:border-[#B45309] outline-none">
              <option>Experience: Senior Acharya (15+ Yrs)</option>
              <option>Acharya (8–15 Yrs)</option>
              <option>All Experience Levels</option>
            </select>
            <select className="px-4 py-2 rounded-full border border-[#F0E8D5] bg-[#FFFDF7] text-[#4A0404] text-sm focus:border-[#B45309] outline-none">
              <option>All Languages</option>
              <option>Telugu & Sanskrit</option>
              <option>English Fluent</option>
              <option>Hindi & Sanskrit</option>
            </select>
          </div>
        </div>
      </section>

      {/* Acharya Cards Grid */}
      <section className="w-full bg-[#FFFDF7] py-10 lg:py-14">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#4A0404]">
                Available Verified Acharyas
              </h2>
              <p className="text-[#78716C] text-sm mt-1">
                {filteredPriests.length} eminent scholars match your locked Muhurtham
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-[#92400E] bg-[#FEF3C7] px-3 py-1.5 rounded-full border border-[#FBBF24]/40">
              <span className="material-symbols-outlined text-[16px]">lock</span>
              Escrow Dakshina Protected
            </div>
          </div>

          {/* Auto-Assign Option (Highlighted) */}
          <div 
            onClick={() => setSelectedPriestId('auto_assign')}
            className={`w-full relative overflow-hidden flex flex-col md:flex-row items-center gap-6 p-6 md:p-8 rounded-[24px] border-2 transition-all duration-300 cursor-pointer mb-10 ${
              isAutoAssign 
                ? 'border-[#B45309] bg-gradient-to-r from-[#FFF8E7] to-[#FEF3C7] shadow-[0_0_0_4px_rgba(180,83,9,0.1)]' 
                : 'border-[#F0E8D5] bg-white hover:border-[#B45309]/30 hover:shadow-lg'
            }`}
          >
            {isAutoAssign && (
              <div className="absolute top-4 right-4 bg-[#B45309] text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                <span className="material-symbols-outlined text-[14px]">check_circle</span> Selected
              </div>
            )}
            
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A] flex items-center justify-center border-4 border-white shadow-md shrink-0">
              <span className="material-symbols-outlined text-4xl text-[#B45309]">auto_awesome</span>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#166534]/10 text-[#166534] text-[10px] font-black uppercase tracking-widest mb-3">
                <span className="material-symbols-outlined text-[14px]">verified</span> Most Popular Choice
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#4A0404] mb-2">Let Us Assign a Verified Priest</h2>
              <p className="text-[#78716C] text-sm leading-relaxed max-w-2xl">
                Not sure who to choose? We will automatically assign a highly qualified, Veda-certified Asthana Siddhanti whose expertise perfectly matches your specific pooja requirements and location.
              </p>
            </div>
            
            <div className="shrink-0 flex items-center justify-center mt-4 md:mt-0">
              <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors ${isAutoAssign ? 'bg-[#B45309] border-[#B45309]' : 'border-[#D1D5DB]'}`}>
                {isAutoAssign && <span className="material-symbols-outlined text-white text-[20px]">done</span>}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 py-4 mb-8">
            <div className="h-px bg-[#E2E8F0] flex-1"></div>
            <span className="text-xs text-[#9CA3AF] uppercase font-bold tracking-widest">Or Choose Manually</span>
            <div className="h-px bg-[#E2E8F0] flex-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPriests.map(priest => {
              const isSelected = selectedPriestId === priest.id;
              const isPlaying = playingId === priest.id;
              return (
                <div
                  key={priest.id}
                  onClick={() => setSelectedPriestId(priest.id)}
                  className={`bg-white rounded-[24px] p-6 lg:p-7 cursor-pointer flex flex-col gap-5 transition-all duration-300 border-2 ${isSelected ? 'border-[#7F1D1D] shadow-[0_8px_32px_rgba(127,29,29,0.15)]' : 'border-[#F0E8D5] shadow-sm hover:shadow-lg hover:border-[#B45309]/40'}`}
                >
                  {/* Badge row */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${isSelected ? 'bg-[#7F1D1D] text-white' : 'bg-[#FEF3C7] text-[#92400E]'}`}>
                        {priest.specialty}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-[#FDE68A] text-[#92400E] text-xs font-bold">
                        {priest.rating} ★ ({priest.reviews} Reviews)
                      </span>
                    </div>
                    {isSelected && (
                      <div className="flex items-center gap-1 text-[#7F1D1D]">
                        <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        <span className="text-xs font-bold uppercase tracking-wider">Selected</span>
                      </div>
                    )}
                  </div>

                  {/* Portrait + Info */}
                  <div className="flex flex-col sm:flex-row gap-5 items-start">
                    <div className="relative w-28 h-32 sm:w-32 sm:h-36 rounded-xl overflow-hidden bg-[#FEF3C7] flex-shrink-0 shadow-sm">
                      <img className="w-full h-full object-cover" src={priest.img} alt={priest.name} />
                      <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-[#4A0404]/85 text-white text-[9px] uppercase tracking-wider font-semibold">
                        {priest.badge}
                      </span>
                    </div>
                    <div className="space-y-1.5 flex-grow min-w-0">
                      <h3 className="font-serif text-xl font-bold text-[#4A0404] leading-tight">{priest.name}</h3>
                      <p className="text-[#B45309] text-sm font-semibold">{priest.veda}</p>
                      <div className="space-y-1 pt-1 text-[#78716C] text-sm">
                        <p className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-[16px] text-[#B45309] flex-shrink-0 mt-0.5">school</span>
                          <span><strong className="text-[#4A0404]">{priest.school.split('(')[0].trim()}</strong> ({priest.school.split('(')[1]?.replace(')', '') ?? ''})</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[16px] text-[#B45309] flex-shrink-0">history_edu</span>
                          {priest.experience}
                        </p>
                        <p className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[16px] text-[#B45309] flex-shrink-0">translate</span>
                          {priest.languages}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Audio Preview */}
                  <div className="bg-[#FEF3C7]/60 rounded-xl p-3.5 space-y-2 border border-[#FBBF24]/30">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-[#4A0404] flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[15px] text-[#B45309]">graphic_eq</span>
                        {priest.audioLabel}
                      </span>
                      <span className="text-[#78716C] font-mono">{priest.audioDuration}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={e => toggleAudio(priest.id, e)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all flex-shrink-0 shadow-sm ${isPlaying ? 'bg-[#7F1D1D] text-white' : 'bg-white text-[#7F1D1D] border border-[#B45309]/40 hover:bg-[#7F1D1D] hover:text-white'}`}
                        aria-label={isPlaying ? 'Pause' : 'Play recitation sample'}
                      >
                        <span className="material-symbols-outlined text-[18px]">{isPlaying ? 'pause' : 'play_arrow'}</span>
                      </button>
                      <div className="flex-grow flex items-center gap-1 h-6">
                        {WAVEFORM_HEIGHTS.map((h, i) => (
                          <span
                            key={i}
                            style={{ height: `${h * 4}px` }}
                            className={`w-1 rounded-full transition-all duration-300 ${i < 6 ? (isPlaying ? 'bg-[#7F1D1D] animate-pulse' : 'bg-[#B45309]') : 'bg-[#E0C0B1]'}`}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] text-[#92400E] font-bold uppercase tracking-wider whitespace-nowrap">
                        {isPlaying ? 'Playing…' : 'Listen'}
                      </span>
                    </div>
                  </div>

                  {/* Feature pills */}
                  <div className="flex flex-wrap items-center gap-2">
                    {priest.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 rounded-md bg-[#F8F5EE] border border-[#F0E8D5] text-xs text-[#78716C] flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px] text-[#B45309]">verified</span>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Price + CTA */}
                  <div className="bg-[#FEF3C7]/40 -mx-6 lg:-mx-7 -mb-6 lg:-mb-7 px-6 lg:px-7 py-4 rounded-b-[22px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#F0E8D5]">
                    <div>
                      <span className="text-xs text-[#B45309] uppercase tracking-wider font-bold block">Escrow Dakshina</span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-serif text-2xl font-bold text-[#4A0404]">₹{priest.dakshina.toLocaleString('en-IN')}</span>
                        <span className="text-xs text-[#78716C]">All inclusive</span>
                      </div>
                      <span className="text-[11px] text-[#78716C] flex items-center gap-1 mt-0.5">
                        <span className="material-symbols-outlined text-[12px] text-[#7F1D1D]">shield</span>
                        Zero cash demands guaranteed
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedPriestId(priest.id)}
                      className={`w-full sm:w-auto px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 shadow-sm flex items-center justify-center gap-2 ${isSelected ? 'bg-[#7F1D1D] text-white cursor-default' : 'bg-white text-[#7F1D1D] border-2 border-[#7F1D1D] hover:bg-[#7F1D1D] hover:text-white'}`}
                    >
                      <span className="material-symbols-outlined text-[16px]">{isSelected ? 'check_circle' : 'person_add'}</span>
                      {isSelected ? 'Selected Acharya' : 'Select Acharya'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredPriests.length === 0 && (
            <div className="flex flex-col items-center justify-center py-32 gap-4">
              <span className="material-symbols-outlined text-6xl text-[#E0C0B1]">search_off</span>
              <h3 className="font-serif text-xl text-[#4A0404] font-semibold">No Acharyas found for this Shakha</h3>
              <p className="text-sm text-[#78716C] text-center max-w-xs">Try selecting a different Veda Shakha filter above.</p>
              <button type="button" onClick={() => setActiveShakha('All')} className="px-6 py-3 rounded-full bg-[#7F1D1D] text-white font-semibold text-sm hover:bg-[#4A0404] transition-colors">
                Show All Acharyas
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Purohit Oath Section */}
      <section className="w-full bg-[#F8F5EE] py-12 lg:py-16">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-[#F0E8D5] space-y-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs text-[#B45309] uppercase font-bold tracking-wider">Sanctity Standards</span>
                <h2 className="font-serif text-3xl font-bold text-[#4A0404]">The Dandalu Ayyagaru Purohit Oath</h2>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF3C7] text-[#92400E] text-sm font-bold border border-[#FBBF24]/40">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                Legally Binding Agreement
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: 'fingerprint', title: '100% Background & Lineage Vetted', desc: 'Every Acharya must present their physical Patashala Sanad and pass oral Swaram assessment. Zero impersonation guarantee.' },
                { icon: 'alarm_on', title: '45-Minute Punctuality Bond', desc: 'The assigned Acharya is contractually bound to arrive 45 minutes prior to calculate the exact lagnam and arrange the Navagraha mandalams.' },
                { icon: 'payments', title: 'Zero On-Site Cash Demands', desc: 'Purohits are legally bound never to solicit additional dakshina, tips, or unlisted cash offerings. Everything is settled via escrow.' },
              ].map(item => (
                <div key={item.title} className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#FEF3C7] flex items-center justify-center text-[#B45309]">
                    <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#4A0404]">{item.title}</h3>
                  <p className="text-[#78716C] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Bottom Bar */}
      <aside className="sticky bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl shadow-[0_-4px_24px_rgba(0,0,0,0.08)] border-t border-[#F0E8D5] py-4">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className={`w-12 h-12 rounded-full overflow-hidden flex-shrink-0 shadow-sm hidden sm:flex items-center justify-center ${isAutoAssign ? 'bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A] border-2 border-white' : 'bg-[#FEF3C7]'}`}>
              {isAutoAssign ? (
                <span className="material-symbols-outlined text-2xl text-[#B45309]">auto_awesome</span>
              ) : (
                <img className="w-full h-full object-cover" src={selectedPriest.img} alt={selectedPriest.name} />
              )}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F97316]"></span>
                <span className="text-xs text-[#B45309] uppercase font-bold tracking-wide">Active Selection</span>
              </div>
              <p className="font-serif text-base font-bold text-[#4A0404] truncate">
                {isAutoAssign ? 'Auto-Assigned Verified Priest' : selectedPriest.name}
              </p>
              <p className="text-xs text-[#78716C] truncate">
                {isAutoAssign ? 'Best match for your requirements' : selectedPriest.veda}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
            <div className="text-left md:text-right">
              <span className="text-xs text-[#B45309] uppercase tracking-wider font-bold block">Acharya Dakshina (In Escrow)</span>
              <span className="font-serif text-2xl font-bold text-[#4A0404]">
                ₹{isAutoAssign ? '7,500' : selectedPriest.dakshina.toLocaleString('en-IN')}
              </span>
            </div>
            <button
              onClick={handleNext}
              className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-gradient-to-r from-[#92400E] to-[#7F1D1D] text-white font-semibold text-sm hover:from-[#7F1D1D] hover:to-[#4A0404] transition-all duration-200 shadow-md flex-shrink-0"
              type="button"
            >
              Proceed to Escrow Payment
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </aside>
    </main>
  );
}

export default function Page() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#FFFDF7]">
        <div className="text-center space-y-4">
          <span className="material-symbols-outlined text-5xl text-[#B45309]">pending</span>
          <p className="text-[#4A0404] font-serif text-xl">Loading Acharya Selection…</p>
        </div>
      </div>
    }>
      <PriestSelectionForm />
    </Suspense>
  );
}
