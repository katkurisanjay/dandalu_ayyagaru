'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState('All Items');

  const handleCategorySelect = (cat: string) => {
    setActiveCategory(cat);
    // Smooth scroll to the top of the grid with a slight delay to allow render
    setTimeout(() => {
      document.getElementById('store-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };
  
  const products = [
    {
      id: 'prod-1',
      name: 'A2 Gir Cow Ghee (Bilona Churned)',
      price: 1200,
      weight: '1 Litre',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC83w8DZVxYVIwII4H8D5R9QPTqcZiut1Oy9CXBBu51shP1eTqFk04tatPlrwxlMCJRU5IkVnqS8H1-T3oY3LRjUR0nxi7GcEQnwqONzWE6kXnp2sMoYbzw8I-Dq6Xfvo6mNBINb9rNyI9Hb4PmlerXaWG0VosIPa_UoZ3l1upuv7g0fAQLpTB00q3VNIuhW8x886O-VNfdAssG1F33sxioiEY8fgpu8kkjIkaIW6ee',
      desc: '100% pure, traditionally churned A2 ghee from indigenous Gir cows, ideal for homam agni and deepam.',
      tag: 'Best Seller',
      category: 'Ghee & Oils'
    },
    {
      id: 'prod-2',
      name: 'Pure Bhimseni Camphor',
      price: 450,
      weight: '250 grams',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC83w8DZVxYVIwII4H8D5R9QPTqcZiut1Oy9CXBBu51shP1eTqFk04tatPlrwxlMCJRU5IkVnqS8H1-T3oY3LRjUR0nxi7GcEQnwqONzWE6kXnp2sMoYbzw8I-Dq6Xfvo6mNBINb9rNyI9Hb4PmlerXaWG0VosIPa_UoZ3l1upuv7g0fAQLpTB00q3VNIuhW8x886O-VNfdAssG1F33sxioiEY8fgpu8kkjIkaIW6ee',
      desc: 'Edible grade, chemical-free raw camphor that burns completely without leaving black soot or residue.',
      tag: 'Veda Certified',
      category: 'Havan Samidha'
    },
    {
      id: 'prod-3',
      name: 'Navagraha Samidha Set',
      price: 350,
      weight: '9 Bundles',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC83w8DZVxYVIwII4H8D5R9QPTqcZiut1Oy9CXBBu51shP1eTqFk04tatPlrwxlMCJRU5IkVnqS8H1-T3oY3LRjUR0nxi7GcEQnwqONzWE6kXnp2sMoYbzw8I-Dq6Xfvo6mNBINb9rNyI9Hb4PmlerXaWG0VosIPa_UoZ3l1upuv7g0fAQLpTB00q3VNIuhW8x886O-VNfdAssG1F33sxioiEY8fgpu8kkjIkaIW6ee',
      desc: 'Set of 9 sacred woods (Arka, Palasha, Khadira, etc.) precisely cut for Navagraha Shanti Homam.',
      category: 'Havan Samidha'
    },
    {
      id: 'prod-4',
      name: 'Organic Turmeric & Kumkum Combo',
      price: 250,
      weight: '200g each',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC83w8DZVxYVIwII4H8D5R9QPTqcZiut1Oy9CXBBu51shP1eTqFk04tatPlrwxlMCJRU5IkVnqS8H1-T3oY3LRjUR0nxi7GcEQnwqONzWE6kXnp2sMoYbzw8I-Dq6Xfvo6mNBINb9rNyI9Hb4PmlerXaWG0VosIPa_UoZ3l1upuv7g0fAQLpTB00q3VNIuhW8x886O-VNfdAssG1F33sxioiEY8fgpu8kkjIkaIW6ee',
      desc: 'Chemical-free, naturally processed haldi and pure red kumkum sourced directly from Salem farms.',
      category: 'Kumkum & Turmeric'
    },
    {
      id: 'prod-5',
      name: 'Complete Homam Samagri Kit',
      price: 2499,
      weight: '45+ Items',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC83w8DZVxYVIwII4H8D5R9QPTqcZiut1Oy9CXBBu51shP1eTqFk04tatPlrwxlMCJRU5IkVnqS8H1-T3oY3LRjUR0nxi7GcEQnwqONzWE6kXnp2sMoYbzw8I-Dq6Xfvo6mNBINb9rNyI9Hb4PmlerXaWG0VosIPa_UoZ3l1upuv7g0fAQLpTB00q3VNIuhW8x886O-VNfdAssG1F33sxioiEY8fgpu8kkjIkaIW6ee',
      desc: 'An all-inclusive ritual kit containing dry fruits, havan samagri, navadhanyalu, vastram, and purnahuti items.',
      tag: 'Most Popular',
      category: 'Complete Kits'
    },
    {
      id: 'prod-6',
      name: 'Pure Sandalwood (Chandan) Billets',
      price: 1800,
      weight: '100 grams',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC83w8DZVxYVIwII4H8D5R9QPTqcZiut1Oy9CXBBu51shP1eTqFk04tatPlrwxlMCJRU5IkVnqS8H1-T3oY3LRjUR0nxi7GcEQnwqONzWE6kXnp2sMoYbzw8I-Dq6Xfvo6mNBINb9rNyI9Hb4PmlerXaWG0VosIPa_UoZ3l1upuv7g0fAQLpTB00q3VNIuhW8x886O-VNfdAssG1F33sxioiEY8fgpu8kkjIkaIW6ee',
      desc: 'Authentic Mysore sandalwood billets for rubbing and producing fresh, pure chandan paste for deity abhishekam.',
      category: 'Deity Alankaram'
    },
  ];

  const categories = ['All Items', 'Ghee & Oils', 'Havan Samidha', 'Kumkum & Turmeric', 'Deity Alankaram', 'Complete Kits'];
  const filteredProducts = activeCategory === 'All Items' ? products : products.filter(p => p.category === activeCategory);

  const handleAddToCart = (name: string) => {
    alert(`${name} has been added to your cart!`);
  };

  return (
    <main className="w-full pt-16 sm:pt-20 bg-[#FFFDF7] min-h-screen font-sans">
      
      {/* Hero Header */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#4A0404] via-[#7F1D1D] to-[#92400E] text-white py-20 md:py-32">
        {/* Background Gradients & Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#FBBF24]/20 to-transparent rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#B45309]/30 to-transparent rounded-full blur-[80px] pointer-events-none"></div>
        
        {/* Decorative Floating Elements Collage (Pooja Samagri) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden max-w-[1920px] mx-auto">
          {/* Main Kalash */}
          <div className="absolute right-[5%] md:right-[15%] top-[10%] w-32 h-32 md:w-56 md:h-56 rounded-full p-1 bg-gradient-to-bl from-white/20 to-transparent backdrop-blur-sm border border-white/20 shadow-[0_0_60px_rgba(255,255,255,0.1)] opacity-70 md:opacity-100 mix-blend-luminosity animate-[float_6s_ease-in-out_infinite]">
            <img src="https://images.unsplash.com/photo-1604604994733-411db1898739?auto=format&fit=crop&q=80&w=400" alt="Brass Pooja Kalash" className="w-full h-full object-cover rounded-full shadow-inner" />
          </div>
          {/* Glowing Diya */}
          <div className="absolute -left-10 md:left-[10%] top-[40%] md:top-[30%] w-40 h-40 md:w-64 md:h-64 rounded-full p-2 bg-gradient-to-br from-[#FBBF24]/40 to-transparent backdrop-blur-md border border-[#FBBF24]/30 shadow-[0_0_80px_rgba(251,191,36,0.4)] animate-[float_8s_ease-in-out_infinite_reverse] opacity-80 md:opacity-100">
            <img src="https://images.unsplash.com/photo-1574068468668-a05a11f871da?auto=format&fit=crop&q=80&w=400" alt="Lit Diya" className="w-full h-full object-cover rounded-full shadow-inner" />
          </div>
          {/* Haldi / Kumkum Plates */}
          <div className="absolute right-[20%] md:right-[5%] bottom-[5%] w-28 h-28 md:w-48 md:h-48 rounded-full p-1.5 bg-gradient-to-tr from-[#EF4444]/30 to-transparent backdrop-blur-sm border border-white/20 shadow-[0_0_50px_rgba(239,68,68,0.2)] animate-[float_7s_ease-in-out_infinite] opacity-70 md:opacity-100">
            <img src="https://images.unsplash.com/photo-1582560469792-5642cb6be220?auto=format&fit=crop&q=80&w=400" alt="Haldi Kumkum" className="w-full h-full object-cover rounded-full shadow-inner" />
          </div>
          {/* Marigold Flowers */}
          <div className="absolute left-[20%] md:left-[30%] bottom-[-5%] w-32 h-32 md:w-56 md:h-56 rounded-full p-2 bg-gradient-to-t from-[#B45309]/40 to-transparent backdrop-blur-sm border border-[#FBBF24]/20 shadow-[0_0_60px_rgba(180,83,9,0.3)] animate-[float_9s_ease-in-out_infinite_reverse] opacity-60 md:opacity-90">
            <img src="https://images.unsplash.com/photo-1605806616949-1e87b487bc2a?auto=format&fit=crop&q=80&w=400" alt="Marigold Flowers" className="w-full h-full object-cover rounded-full shadow-inner" />
          </div>
          {/* Sandalwood */}
          <div className="absolute left-[5%] md:left-[5%] top-[10%] w-24 h-24 md:w-36 md:h-36 rounded-full p-1 bg-gradient-to-br from-[#78350F]/40 to-transparent backdrop-blur-sm border border-white/10 shadow-[0_0_40px_rgba(120,53,15,0.3)] animate-[float_5s_ease-in-out_infinite] opacity-50 md:opacity-80">
            <img src="https://images.unsplash.com/photo-1583324113626-70df0f4deaab?auto=format&fit=crop&q=80&w=400" alt="Sandalwood" className="w-full h-full object-cover rounded-full shadow-inner" />
          </div>
        </div>

        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 flex flex-col items-center text-center gap-6 mt-4">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/30 border border-[#FBBF24]/40 text-[#FEF3C7] text-xs font-bold uppercase tracking-widest shadow-lg backdrop-blur-md">
            <span className="material-symbols-outlined text-[18px]">spa</span>
            Sacred Samagri Store
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight drop-shadow-2xl">
            Sacred <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBBF24] to-[#FEF3C7] italic">Samagri</span>
          </h1>
          <p className="text-white/90 text-lg md:text-2xl max-w-2xl leading-relaxed drop-shadow-md">
            Pure, unadulterated, and Veda-certified. 
            <br/><span className="text-sm font-medium opacity-80 mt-2 block">Directly sourced to bring divine energy to your every ritual.</span>
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b border-[#E2E8F0] bg-white/80 backdrop-blur-xl sticky top-[80px] z-40 shadow-sm">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 py-4 flex items-center gap-3 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button 
              key={cat} type="button"
              onClick={() => handleCategorySelect(cat)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-gradient-to-r from-[#92400E] to-[#7F1D1D] text-white shadow-lg scale-105' 
                  : 'bg-[#FEF3C7] text-[#92400E] hover:bg-[#FDE68A] hover:text-[#7F1D1D]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section id="store-grid" className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 py-16 min-h-[800px] scroll-mt-[160px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((prod, index) => (
            <div key={prod.id} className="group flex flex-col bg-white rounded-[32px] shadow-sm hover:shadow-[0_20px_40px_rgba(127,29,29,0.1)] transition-all duration-500 overflow-hidden hover:-translate-y-2 border border-[#F0E8D5] relative">
              
              {/* Product Image Box */}
              <div className="relative aspect-square overflow-hidden p-8 flex items-center justify-center bg-gradient-to-br from-[#FFFDF7] to-[#FEF3C7]">
                {/* Colorful blob behind product */}
                <div className={`absolute inset-0 opacity-20 blur-2xl rounded-full transition-transform duration-700 group-hover:scale-150 ${index % 3 === 0 ? 'bg-[#7F1D1D]' : index % 3 === 1 ? 'bg-[#92400E]' : 'bg-[#FBBF24]'}`}></div>
                
                {prod.tag && (
                  <span className="absolute top-6 left-6 z-10 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#7F1D1D] text-[10px] font-black uppercase tracking-widest shadow-sm border border-[#F0E8D5]">
                    {prod.tag}
                  </span>
                )}
                <img 
                  src={prod.img} 
                  alt={prod.name} 
                  className="relative z-10 w-[80%] h-[80%] object-cover rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
                />
              </div>

              {/* Product Info */}
              <div className="p-8 flex flex-col flex-grow relative z-20 bg-white">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[#92400E] bg-[#FEF3C7] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">{prod.weight}</span>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-[#F59E0B]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                    <span className="text-sm font-bold text-[#4A0404]">5.0</span>
                  </div>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-[#4A0404] leading-snug mb-3 group-hover:text-[#7F1D1D] transition-colors">{prod.name}</h3>
                <p className="text-[#78716C] text-sm leading-relaxed mb-8 flex-grow">{prod.desc}</p>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#B45309] font-bold uppercase tracking-wider mb-1">Price</span>
                    <span className="font-sans text-3xl font-black text-[#4A0404]">₹{prod.price}</span>
                  </div>
                  <button 
                    onClick={() => handleAddToCart(prod.name)}
                    className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#92400E] to-[#7F1D1D] text-white flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer z-30"
                  >
                    <span className="material-symbols-outlined text-[24px]">add_shopping_cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-[#4A0404] py-16 text-white mt-10">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: 'verified', title: '100% Shuddha (Pure)', desc: 'No chemicals, artificial colors, or adulterants in any of our samagri.', color: 'text-[#FBBF24]', bg: 'bg-[#FBBF24]/20' },
            { icon: 'local_shipping', title: 'Express Delivery', desc: 'Ships safely to your doorstep within 2-3 business days across India.', color: 'text-[#FEF3C7]', bg: 'bg-[#FEF3C7]/20' },
            { icon: 'eco', title: 'Ethically Sourced', desc: 'Directly supporting gaushalas, organic farmers, and traditional artisans.', color: 'text-[#FDE68A]', bg: 'bg-[#FDE68A]/20' },
          ].map(t => (
            <div key={t.title} className="flex items-start gap-5">
              <div className={`w-16 h-16 rounded-2xl ${t.bg} ${t.color} flex items-center justify-center shrink-0`}>
                <span className="material-symbols-outlined text-[32px]">{t.icon}</span>
              </div>
              <div className="flex flex-col">
                <h4 className="font-serif text-xl font-bold text-white mb-2">{t.title}</h4>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
