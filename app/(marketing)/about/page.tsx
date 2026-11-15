import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="w-full pt-16 sm:pt-20 bg-[#FFFDF7] min-h-screen font-sans">
      
      {/* Hero Section */}
      <section className="relative w-full py-32 overflow-hidden bg-[#4A0404] text-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#B45309]/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#7F1D1D]/40 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        
        <div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 relative z-10 text-center flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#FEF3C7] text-xs font-bold uppercase tracking-widest mb-6">
            <span className="material-symbols-outlined text-[16px]">history_edu</span>
            Our Lineage
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight drop-shadow-lg mb-6">
            Preserving the <span className="text-[#FBBF24] italic">Sacred</span>.
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl leading-relaxed">
            Dandalu Ayyagaru was born from a simple devotion: to bring authentic, highly verified Vedic rituals to modern homes without the friction, opacity, or stress of traditional planning.
          </p>
        </div>
      </section>

      {/* The Story & Vision */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#FEF3C7] to-[#FFEDD5] rounded-3xl transform rotate-3 -z-10 blur-sm"></div>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC83w8DZVxYVIwII4H8D5R9QPTqcZiut1Oy9CXBBu51shP1eTqFk04tatPlrwxlMCJRU5IkVnqS8H1-T3oY3LRjUR0nxi7GcEQnwqONzWE6kXnp2sMoYbzw8I-Dq6Xfvo6mNBINb9rNyI9Hb4PmlerXaWG0VosIPa_UoZ3l1upuv7g0fAQLpTB00q3VNIuhW8x886O-VNfdAssG1F33sxioiEY8fgpu8kkjIkaIW6ee" 
                alt="Dandalu Ayyagaru conducting a ritual"
                className="w-full h-auto aspect-[4/5] object-cover rounded-2xl shadow-[0_20px_50px_rgba(127,29,29,0.15)]"
              />
              <div className="absolute bottom-6 -right-6 md:-right-12 bg-white p-6 rounded-2xl shadow-xl border border-[#F0E8D5] max-w-[240px]">
                <div className="flex gap-1 text-[#FBBF24] mb-2">
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                </div>
                <p className="text-[#4A0404] font-bold text-sm">"The most peaceful Gruha Pravesham we have ever experienced."</p>
                <p className="text-[#92400E] text-xs mt-2 font-semibold">— The Sharma Family</p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="font-serif text-4xl text-[#4A0404] font-bold">The Problem We Solved</h2>
              <div className="w-16 h-1 bg-[#B45309] rounded-full"></div>
              <p className="text-[#78716C] leading-relaxed text-lg mt-2">
                For generations, planning a family pooja meant endless phone calls, haggling over dakshina, running to crowded markets with confusing lists written in Sanskrit, and waiting anxiously for the Pandit ji to arrive.
              </p>
              <p className="text-[#78716C] leading-relaxed text-lg">
                We believe devotion should bring peace, not anxiety. That's why we established a platform that curates verified Vedic scholars, guarantees transparent pricing, provides all pure samagri, and ensures absolute punctuality.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-[#FEF3C7]/40 p-5 rounded-2xl border border-[#FBBF24]/30">
                  <span className="material-symbols-outlined text-[#B45309] text-3xl mb-3">verified</span>
                  <h3 className="font-serif font-bold text-[#4A0404] text-xl mb-2">Vedic Purity</h3>
                  <p className="text-[#92400E] text-sm">No shortcuts. Every mantra is chanted fully, with its meaning explained to the family.</p>
                </div>
                <div className="bg-[#FEF3C7]/40 p-5 rounded-2xl border border-[#FBBF24]/30">
                  <span className="material-symbols-outlined text-[#B45309] text-3xl mb-3">schedule</span>
                  <h3 className="font-serif font-bold text-[#4A0404] text-xl mb-2">Absolute Punctuality</h3>
                  <p className="text-[#92400E] text-sm">Our Pandits arrive 30 minutes prior to the muhurtham to arrange the mandapam gracefully.</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Stats/Credibility */}
      <section className="bg-gradient-to-r from-[#7F1D1D] to-[#4A0404] py-20">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20">
          {[
            { num: '2400+', label: 'Poojas Conducted' },
            { num: '80+', label: 'Verified Purohits' },
            { num: '100%', label: 'Transparent Pricing' },
            { num: '4.9/5', label: 'Client Satisfaction' },
          ].map(stat => (
            <div key={stat.label} className="flex flex-col items-center text-center px-4">
              <span className="font-serif text-4xl md:text-5xl font-bold text-[#FBBF24] mb-2">{stat.num}</span>
              <span className="text-white/80 text-sm font-semibold uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-[#4A0404] font-bold mb-6">Ready to bring grace into your home?</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/poojas" className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#7F1D1D] to-[#4A0404] text-white font-bold shadow-lg hover:-translate-y-1 transition-transform">
            Book a Pooja
          </Link>
          <Link href="/store" className="px-8 py-4 rounded-xl bg-white border border-[#F0E8D5] text-[#92400E] font-bold shadow-sm hover:bg-[#FEF3C7] transition-colors">
            Shop Sacred Samagri
          </Link>
        </div>
      </section>
      
    </main>
  );
}
