'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { getPoojaById, PoojaDetail } from '../../poojas/poojasDetailData';
import Link from 'next/link';

function PaymentPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const poojaId = searchParams.get('pooja') || 'satyanarayan-puja';
  const pkgParam = searchParams.get('pkg');
  const priceParam = searchParams.get('price');
  const dateParam = searchParams.get('date');
  const timeParam = searchParams.get('time');
  const venueParam = searchParams.get('venue');

  const [pooja, setPooja] = useState<PoojaDetail | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<'partial' | 'full'>('partial');
  const [selectedMethod, setSelectedMethod] = useState<string>('upi');

  useEffect(() => {
    const p = getPoojaById(poojaId);
    if (p) setPooja(p);
  }, [poojaId]);

  if (!pooja) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFFDF7]">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-[#B45309] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-[#B45309] font-serif">Preparing Secure Escrow...</p>
        </div>
      </div>
    );
  }

  const basePrice = parseInt(priceParam || '12200', 10);
  const advanceAmount = Math.floor(basePrice * 0.25);
  const fullAmount = basePrice - 610; // 5% dev discount approx

  const currentAmount = selectedPlan === 'partial' ? advanceAmount : fullAmount;

  const handlePay = () => {
    router.push(`/book/confirmation?pooja=${pooja.id}`);
  };

  return (
    <div className="flex flex-col w-full bg-[#FFFDF7] min-h-screen font-sans text-[#4A0404]">
      
      {/* Top Banner Navigation */}
      <div className="w-full bg-[#FFFDF7] border-b border-[#F0E8D5] py-4">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between text-[#78716C] text-xs">
            <div className="flex items-center gap-2">
              <span className="text-[#B45309] font-bold uppercase tracking-widest">STEP 02 OF 03 · ESCROW SETTLEMENT PHASE</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">lock</span>
              <span className="font-bold">Sacred Token #DA-PAY-2026-4412</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-xs mt-3 opacity-60 font-medium">
            <span>Home</span>
            <span className="material-symbols-outlined text-[12px]">chevron_right</span>
            <span>Pooja</span>
            <span className="material-symbols-outlined text-[12px]">chevron_right</span>
            <span>Muhurtham</span>
            <span className="material-symbols-outlined text-[12px]">chevron_right</span>
            <span>Acharya</span>
            <span className="material-symbols-outlined text-[12px]">chevron_right</span>
            <span>Samagri</span>
            <span className="material-symbols-outlined text-[12px]">chevron_right</span>
            <span className="font-bold text-[#B45309]">Secure Payment</span>
            <span className="material-symbols-outlined text-[12px]">chevron_right</span>
            <span>Confirmation</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 py-8 md:py-12 w-full">
        <div className="flex flex-col mb-8 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEF3C7] text-[#92400E] text-[10px] font-bold uppercase tracking-widest w-fit mb-4">
            <span className="material-symbols-outlined text-[14px]">shield</span>
            AGAMIC MILESTONE ESCROW SYSTEM
          </div>
          <div className="flex justify-between items-start">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#4A0404] leading-tight">
                Secure Agamic Payment &amp; Milestone Escrow
              </h1>
              <p className="text-[#78716C] mt-2">
                Sanctified milestone escrow protects your ceremonial dakshina. Zero cash demands, zero on-site negotiations guaranteed under strict Vedic code.
              </p>
            </div>
            <div className="hidden lg:flex items-center gap-3 px-4 py-3 bg-white rounded-xl shadow-sm border border-[#F0E8D5]">
              <div className="w-10 h-10 bg-[#FEF3C7] text-[#92400E] rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined">receipt_long</span>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-[#78716C] tracking-widest">AUTHORIZED BOOKING TOKEN</p>
                <p className="font-bold text-[#4A0404]">#DA-PAY-2026-4412</p>
                <p className="text-xs text-[#B45309] font-medium">Ready for Consecration</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column (Forms) */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            
            {/* Choose Escrow Allocation */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-5 bg-[#F97316] rounded-full"></span>
                  <h2 className="text-xl font-bold font-serif">1. Choose Escrow Allocation</h2>
                </div>
                <span className="text-xs text-[#78716C]">Both plans hold funds in trust</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 25% Advance Lock */}
                <button 
                  onClick={() => setSelectedPlan('partial')}
                  className={`text-left p-6 rounded-xl border-2 transition-all relative ${
                    selectedPlan === 'partial' 
                      ? 'border-[#F97316] bg-white shadow-md ring-4 ring-[#F97316]/10' 
                      : 'border-[#F0E8D5] bg-[#F8F5EE] hover:border-[#F97316]/50'
                  }`}
                >
                  <span className="absolute top-4 right-4 px-2.5 py-0.5 rounded-sm bg-[#FEF3C7] text-[#92400E] text-[10px] font-bold uppercase tracking-widest">POPULAR</span>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center border-2 ${selectedPlan === 'partial' ? 'bg-[#F97316] border-[#F97316] text-white' : 'border-[#D6D3D1]'}`}>
                        {selectedPlan === 'partial' && <span className="material-symbols-outlined text-[12px] font-bold">check</span>}
                      </div>
                      <span className="font-bold">25% Advance Lock</span>
                    </div>
                    <div className="flex items-baseline gap-2 mt-2">
                      <span className="text-3xl font-bold text-[#F97316]">₹{advanceAmount.toLocaleString()}</span>
                      <span className="text-[10px] text-[#78716C] uppercase font-bold tracking-widest">Due today</span>
                    </div>
                    <p className="text-xs text-[#78716C] mt-2 leading-relaxed">
                      Locks your Acharya and dispatches consecrated samagri. The remaining <span className="font-bold text-[#4A0404]">₹{(basePrice - advanceAmount).toLocaleString()}</span> is held safe in escrow and released only after final ritual ashirwadam.
                    </p>
                    <div className="flex items-center gap-1.5 mt-3 text-[#B45309] text-xs font-semibold">
                      <span className="material-symbols-outlined text-[14px]">lock_reset</span>
                      Balance settled via OTP on ritual day
                    </div>
                  </div>
                </button>

                {/* Full Upfront */}
                <button 
                  onClick={() => setSelectedPlan('full')}
                  className={`text-left p-6 rounded-xl border-2 transition-all relative ${
                    selectedPlan === 'full' 
                      ? 'border-[#F97316] bg-white shadow-md ring-4 ring-[#F97316]/10' 
                      : 'border-[#F0E8D5] bg-[#F8F5EE] hover:border-[#F97316]/50'
                  }`}
                >
                  <span className="absolute top-4 right-4 px-2.5 py-0.5 rounded-sm bg-[#FEE2E2] text-[#991B1B] text-[10px] font-bold uppercase tracking-widest">SAVE ₹610</span>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center border-2 ${selectedPlan === 'full' ? 'bg-[#F97316] border-[#F97316] text-white' : 'border-[#D6D3D1]'}`}>
                        {selectedPlan === 'full' && <span className="material-symbols-outlined text-[12px] font-bold">check</span>}
                      </div>
                      <span className="font-bold">Full Upfront Escrow</span>
                    </div>
                    <div className="flex items-baseline gap-2 mt-2">
                      <span className="text-3xl font-bold">₹{fullAmount.toLocaleString()}</span>
                      <span className="text-xs text-[#78716C] line-through">₹{basePrice.toLocaleString()}</span>
                    </div>
                    <p className="text-xs text-[#78716C] mt-2 leading-relaxed">
                      5% Devotee Benefit applied. 100% of dakshina sits secured in regulated escrow. Completely cashless ritual day with instant priest dakshina release.
                    </p>
                    <div className="flex items-center gap-1.5 mt-3 text-[#B45309] text-xs font-semibold">
                      <span className="material-symbols-outlined text-[14px]">redeem</span>
                      Instant 5% ceremony blessing waiver
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Select Payment Conduit */}
            <div className="mt-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-5 bg-[#F97316] rounded-full"></span>
                  <h2 className="text-xl font-bold font-serif">2. Select Payment Conduit</h2>
                </div>
                <div className="flex items-center gap-1 text-[#B45309] text-xs font-bold">
                  <span className="material-symbols-outlined text-[14px]">lock</span>
                  256-bit Encrypted
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {/* UPI Method */}
                <div className={`border rounded-2xl transition-colors ${selectedMethod === 'upi' ? 'bg-white border-[#F97316] shadow-sm' : 'bg-white border-[#F0E8D5]'}`}>
                  <button onClick={() => setSelectedMethod('upi')} className="w-full flex items-center justify-between p-5 text-left">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${selectedMethod === 'upi' ? 'bg-[#FFEDD5] text-[#F97316]' : 'bg-[#F8F5EE] text-[#78716C]'}`}>
                        <span className="material-symbols-outlined text-[20px]">qr_code_scanner</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-base">Instant UPI &amp; Sacred QR</span>
                          <span className="px-2 py-0.5 rounded-full bg-[#FEF3C7] text-[#92400E] text-[9px] font-bold uppercase">Fastest</span>
                        </div>
                        <span className="text-xs text-[#78716C]">Google Pay, PhonePe, Paytm, BHIM, Cred</span>
                      </div>
                    </div>
                    <span className={`material-symbols-outlined transition-transform ${selectedMethod === 'upi' ? 'rotate-180' : ''}`}>expand_more</span>
                  </button>
                  
                  {selectedMethod === 'upi' && (
                    <div className="px-5 pb-5">
                      <div className="bg-[#F8F5EE] rounded-2xl p-6 flex flex-col md:flex-row gap-8 items-center border border-[#F0E8D5]">
                        <div className="flex flex-col items-center gap-2">
                          <div className="bg-white p-3 rounded-2xl shadow-sm">
                            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=dandalu@okhdfcbank&pn=Dandalu%20Ayyagaru&cu=INR" alt="QR Code" className="w-32 h-32 rounded-lg" />
                          </div>
                          <span className="text-[10px] uppercase tracking-widest font-bold text-[#78716C]">Scan &amp; Authorize Escrow</span>
                          <span className="text-sm font-bold">Amount: ₹{currentAmount.toLocaleString()}</span>
                        </div>
                        <div className="flex-1 w-full flex flex-col gap-4">
                          <span className="text-xs font-bold text-[#78716C]">Or Enter Devotee UPI ID / VPA</span>
                          <div className="flex gap-3">
                            <input type="text" placeholder="sarma.family@okhdfc" className="flex-1 h-12 px-4 rounded-xl border border-[#D6D3D1] focus:outline-none focus:border-[#F97316] text-sm bg-white" />
                            <button onClick={handlePay} className="px-6 h-12 rounded-xl bg-[#F97316] text-white font-bold text-sm hover:bg-[#EA580C] transition-colors shadow-sm">
                              Verify &amp; Pay
                            </button>
                          </div>
                          <span className="text-[10px] text-[#78716C]">Compatible with Google Pay, BHIM, Paytm, PhonePe &amp; Cred</span>
                          <div className="flex gap-2 flex-wrap mt-1">
                            {['@okhdfcbank', '@okicici', '@ybl', '@paytm'].map(h => (
                              <span key={h} className="px-2 py-1 bg-[#E7E5E4] rounded-md text-[10px] text-[#57534E] font-medium">{h}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Method */}
                <div className={`border rounded-2xl transition-colors ${selectedMethod === 'card' ? 'bg-white border-[#F97316] shadow-sm' : 'bg-white border-[#F0E8D5]'}`}>
                  <button onClick={() => setSelectedMethod('card')} className="w-full flex items-center justify-between p-5 text-left">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${selectedMethod === 'card' ? 'bg-[#FFEDD5] text-[#F97316]' : 'bg-[#F8F5EE] text-[#78716C]'}`}>
                        <span className="material-symbols-outlined text-[20px]">credit_card</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-base">Credit / Debit Cards</span>
                          <span className="px-2 py-0.5 rounded-full bg-[#F3F4F6] text-[#4B5563] text-[9px] font-bold uppercase">Global &amp; NRI</span>
                        </div>
                        <span className="text-xs text-[#78716C]">Visa, Mastercard, RuPay, Amex &amp; International FX Cards</span>
                      </div>
                    </div>
                    <span className={`material-symbols-outlined transition-transform ${selectedMethod === 'card' ? 'rotate-180' : ''}`}>expand_more</span>
                  </button>
                  
                  {selectedMethod === 'card' && (
                    <div className="px-5 pb-5">
                      <div className="bg-[#F8F5EE] rounded-2xl p-6 flex flex-col gap-4 border border-[#F0E8D5]">
                         <div className="flex flex-col gap-1.5">
                           <label className="text-xs font-bold text-[#78716C]">Card Number</label>
                           <input type="text" placeholder="0000 0000 0000 0000" className="w-full h-12 px-4 rounded-xl border border-[#D6D3D1] focus:outline-none focus:border-[#F97316] text-sm bg-white" />
                         </div>
                         <div className="grid grid-cols-2 gap-4">
                           <div className="flex flex-col gap-1.5">
                             <label className="text-xs font-bold text-[#78716C]">Expiry</label>
                             <input type="text" placeholder="MM/YY" className="w-full h-12 px-4 rounded-xl border border-[#D6D3D1] focus:outline-none focus:border-[#F97316] text-sm bg-white" />
                           </div>
                           <div className="flex flex-col gap-1.5">
                             <label className="text-xs font-bold text-[#78716C]">CVV</label>
                             <input type="password" placeholder="123" className="w-full h-12 px-4 rounded-xl border border-[#D6D3D1] focus:outline-none focus:border-[#F97316] text-sm bg-white" />
                           </div>
                         </div>
                         <button onClick={handlePay} className="w-full h-12 mt-2 rounded-xl bg-[#F97316] text-white font-bold text-sm hover:bg-[#EA580C] transition-colors shadow-sm">
                           Complete Payment of ₹{currentAmount.toLocaleString()}
                         </button>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Net Banking */}
                <div className="bg-white border border-[#F0E8D5] rounded-2xl p-5 flex items-center justify-between opacity-80 cursor-not-allowed">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#F8F5EE] text-[#78716C] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[20px]">account_balance</span>
                    </div>
                    <div>
                      <span className="font-bold text-base block">Net Banking</span>
                      <span className="text-xs text-[#78716C]">Direct settlement via 54+ Scheduled Indian Commercial Banks</span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-[#78716C]">expand_more</span>
                </div>

                {/* US Acharya Desk */}
                <div className="bg-white border border-[#F0E8D5] rounded-2xl p-5 flex items-center justify-between opacity-80 cursor-not-allowed">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#FEF3C7] text-[#92400E] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[20px]">language</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-base">US Acharya Desk / Overseas Wire</span>
                        <span className="px-2 py-0.5 rounded-full bg-[#FEF3C7] text-[#92400E] text-[9px] font-bold uppercase">NRI Priority</span>
                      </div>
                      <span className="text-xs text-[#78716C]">ACH Transfer (US Banks), Zelle, or SWIFT Wire for family ceremonies</span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-[#78716C]">expand_more</span>
                </div>
              </div>
            </div>

            {/* Protocol Notice */}
            <div className="bg-[#FFF8E7] rounded-2xl border border-[#FDE68A] p-6 mt-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#F59E0B]"></div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FEF3C7] flex items-center justify-center text-[#92400E] shrink-0">
                  <span className="material-symbols-outlined">security</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">The Sacred Escrow Protocol</h3>
                  <p className="text-xs text-[#B45309] uppercase tracking-widest font-bold mb-4">Preserving Agamic Dignity with Zero Cash Bargaining</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
                    {[
                      { icon: '1', title: 'Trust Vault', desc: 'Dakshina is held safely in escrow trustee custody.' },
                      { icon: '2', title: 'Punctual Arrival', desc: 'Acharya team arrives 45 minutes prior with samagri.' },
                      { icon: '3', title: 'Pure Rites', desc: 'Rituals conducted strictly per Krishna Yajurveda shastra.' },
                      { icon: '4', title: 'OTP Blessing', desc: 'You verify completion with a 1-tap OTP blessing code.' },
                      { icon: '5', title: 'Direct Payout', desc: 'Acharya receives dakshina instantly to verified account.' }
                    ].map(step => (
                      <div key={step.icon} className="flex flex-col gap-2">
                        <div className="w-6 h-6 rounded-full bg-white border border-[#D6D3D1] flex items-center justify-center text-[10px] font-bold text-[#78716C]">
                          {step.icon}
                        </div>
                        <h4 className="text-sm font-bold">{step.title}</h4>
                        <p className="text-[10px] text-[#78716C] leading-relaxed">{step.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 bg-white p-4 rounded-xl flex items-start gap-3 shadow-sm border border-[#F0E8D5]">
                    <span className="material-symbols-outlined text-[#DC2626]">gavel</span>
                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-widest text-[#7F1D1D]">Strict Zero-Cash Solicitation Legal Mandate</h5>
                      <p className="text-xs text-[#78716C] mt-1">Every empanelled Acharya and assistant strictly abides by our platform code of conduct. Purohits are legally bound never to solicit additional cash dakshina or tips on the event floor.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (Order Summary Sticky) */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 flex flex-col gap-6">
              
              <div className="bg-white rounded-3xl border border-[#F0E8D5] shadow-xl overflow-hidden flex flex-col relative z-10">
                <div className="h-40 relative">
                  <img src="https://images.unsplash.com/photo-1582560469792-5642cb6be220?auto=format&fit=crop&q=80&w=600" alt="Pooja" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-serif text-xl font-bold leading-tight">{pooja.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-widest">{pkgParam || 'Shukla Paksha'}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-col gap-3 pb-5 border-b border-[#F0E8D5]">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#B45309] text-[18px]">calendar_today</span>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold">Friday, Feb 20, 2026 · {timeParam || '08:45 AM IST'}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#B45309] text-[18px]">location_on</span>
                      <div className="flex flex-col">
                        <span className="text-xs text-[#78716C]">{venueParam || 'My Home Bhoja, Hitec City, Hyderabad'}</span>
                      </div>
                    </div>
                  </div>

                  <div className="py-5 border-b border-[#F0E8D5] flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-[#F8F5EE] overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" alt="Priest" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold">Brahmasri K. S. Somayaji</span>
                      <span className="text-[10px] text-[#78716C]">Krishna Yajurveda · Veda Salakshana</span>
                      <div className="flex items-center gap-1 mt-0.5">
                        <span className="material-symbols-outlined text-[#F59E0B] text-[12px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                        <span className="text-[10px] font-bold">4.98</span>
                        <span className="text-[10px] text-[#78716C]">(420+ Rites)</span>
                      </div>
                    </div>
                  </div>

                  <div className="py-5 border-b border-[#F0E8D5] flex flex-col gap-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#78716C]">Total Ceremonial Dakshina</span>
                      <span className="font-bold">₹{basePrice.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#78716C]">Selected Plan</span>
                      <span className="font-bold text-[#B45309]">{selectedPlan === 'partial' ? '25% Advance Lock' : 'Full Upfront (5% Off)'}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#78716C]">Escrow Service Fee <span className="material-symbols-outlined text-[12px] align-middle ml-1">info</span></span>
                      <span className="font-bold">FREE (₹0)</span>
                    </div>
                  </div>

                  <div className="pt-5 flex flex-col gap-4">
                    <div className="bg-[#F8F5EE] p-4 rounded-xl flex flex-col gap-2">
                      <div className="flex items-baseline justify-between">
                        <span className="text-sm font-bold">Amount Payable Now</span>
                        <span className="text-3xl font-bold text-[#F97316]">₹{currentAmount.toLocaleString()}</span>
                      </div>
                      {selectedPlan === 'partial' && (
                        <div className="flex items-center justify-between text-[10px] text-[#78716C] pt-2 border-t border-[#E7E5E4]">
                          <span>Balance Held Safe for Ritual Day:</span>
                          <span className="font-bold text-[#4A0404]">₹{(basePrice - advanceAmount).toLocaleString()}</span>
                        </div>
                      )}
                    </div>

                    <button onClick={handlePay} className="w-full py-4 rounded-full bg-[#F97316] text-white font-bold hover:bg-[#EA580C] transition-colors shadow-lg shadow-[#F97316]/30 flex flex-col items-center justify-center gap-0.5 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
                      <span className="flex items-center gap-2 text-sm relative z-10">
                        <span className="material-symbols-outlined text-[18px]">verified_user</span>
                        COMPLETE SACRED PAYMENT
                      </span>
                      <span className="text-[10px] relative z-10">₹{currentAmount.toLocaleString()}</span>
                    </button>
                    <p className="text-center text-[9px] text-[#78716C] uppercase tracking-widest font-bold">Locks Muhurtham immediately • Zero risk escrow</p>

                    <div className="mt-2 bg-[#F0FDF4] border border-[#DCFCE7] rounded-xl p-3 flex items-start gap-3">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-5 h-5 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-[#166534]">1-Click WhatsApp Consecration Dossier</h4>
                        <p className="text-[10px] text-[#15803D] mt-0.5 leading-tight">Ritual samagri receipt and Pandit contact dispatched immediately.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#F8F5EE] px-6 py-4 border-t border-[#F0E8D5] flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-[#78716C]">
                    <span className="material-symbols-outlined text-[16px]">headset_mic</span>
                    Need Assistance? Asthana Concierge:
                  </div>
                  <span className="text-xs font-bold text-[#B45309]">+91 98400 12345</span>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-[#F0E8D5] p-5 shadow-sm flex items-start gap-4">
                <span className="material-symbols-outlined text-[#B45309] text-[24px]">verified</span>
                <div>
                  <h4 className="text-sm font-bold">100% Muhurtham Arrival Assurance</h4>
                  <p className="text-xs text-[#78716C] mt-1 leading-relaxed">If priest arrives later than designated Brahma-Muhurtham window, 100% dakshina is reimbursed instantly.</p>
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
    <main className="w-full bg-[#FFFDF7]">
      <Suspense fallback={
        <div className="w-full h-screen flex items-center justify-center">
          <div className="animate-spin w-12 h-12 border-4 border-[#B45309] border-t-transparent rounded-full"></div>
        </div>
      }>
        <PaymentPageContent />
      </Suspense>
    </main>
  );
}
