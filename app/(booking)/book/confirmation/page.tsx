'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { getPoojaById, PoojaDetail } from '../../poojas/poojasDetailData';
import Link from 'next/link';

function ConfirmationPageContent() {
  const searchParams = useSearchParams();
  const poojaId = searchParams.get('pooja') || 'satyanarayan-puja';
  
  const [pooja, setPooja] = useState<PoojaDetail | null>(null);

  useEffect(() => {
    const p = getPoojaById(poojaId);
    if (p) setPooja(p);
  }, [poojaId]);

  if (!pooja) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="text-primary font-headline-sm">Retrieving Sanctified Order...</p>
        </div>
      </div>
    );
  }

  const addToCalendar = () => {
    const title = encodeURIComponent(`${pooja.name} - Dandalu Ayyagaru`);
    const details = encodeURIComponent(`Confirmed Vedic Pooja Ceremony. Order Ref: #DA-2026-${Math.floor(Math.random() * 10000)}.`);
    const location = encodeURIComponent("Confirmed Venue");
    const dates = "20261018T023000Z/20261018T060000Z";
    const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
    window.open(gcalUrl, '_blank');
  };

  const downloadPass = () => {
    alert("Generating signed Dandalu Ayyagaru ritual verification pass & samagri receipt (PDF)...");
  };

  return (
    <div className="flex flex-col w-full">
      {/* Ambient Atmospheric Backing Elements */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[480px] bg-gradient-to-b from-primary/10 via-primary-container/10 to-transparent blur-3xl pointer-events-none rounded-full"></div>
        
        {/* Hero / Serene Confirmation State */}
        <section className="relative max-w-[1920px] mx-auto px-4 md:px-8 pt-24 pb-12 flex flex-col items-center text-center">
          {/* Celebratory Sacred Sigil & Checkmark Badge */}
          <div className="relative mb-6 flex items-center justify-center">
            <div className="absolute w-24 h-24 rounded-full bg-green-500/20 animate-pulse blur-md"></div>
            <div className="relative w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center text-green-500 border border-green-100">
              <svg className="w-10 h-10 stroke-current" fill="none" viewBox="0 0 48 48">
                <circle className="opacity-25" cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="2.5"></circle>
                <path d="M14 24.5L20.8 31.3L34 16.7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5"></path>
              </svg>
            </div>
          </div>
          
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 text-green-700 text-xs uppercase tracking-widest mb-4 font-bold border border-green-100">
            <span className="material-symbols-outlined text-sm">check_circle</span>
            Reservation Authenticated · Auspicious Muhurtham Guaranteed
          </span>
          
          <h1 className="text-4xl md:text-5xl font-bold text-on-surface max-w-2xl tracking-tight mb-4 font-serif">
            Your pooja is taken care of.
          </h1>
          <p className="text-on-surface-variant max-w-xl leading-relaxed mb-8">
            We've arranged every sacred element with precision. You can look forward to the auspicious day without the usual planning stress or last-minute uncertainty.
          </p>

          {/* 4 Confirmation Status Pills */}
          <div className="w-full max-w-4xl grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 text-left">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-surface-container flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-green-600">task_alt</span>
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider">Status</p>
                <p className="text-sm font-bold text-on-surface truncate">Booking Confirmed</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-sm border border-surface-container flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary">verified</span>
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider">Purohit</p>
                <p className="text-sm font-bold text-on-surface truncate">Dandalu Ayyagaru</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-sm border border-surface-container flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary">calendar_month</span>
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider">Muhurtham</p>
                <p className="text-sm font-bold text-on-surface truncate">Oct 18, 08:00 AM</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-sm border border-surface-container flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary">inventory_2</span>
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider">Samagri</p>
                <p className="text-sm font-bold text-on-surface truncate">Full Kit Arranged</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section: Receipt Dossier & Vedic Steps Bento */}
        <section className="max-w-[1920px] mx-auto px-4 md:px-8 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Master Ritual Dossier Receipt (7 Cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl shadow-xl p-6 md:p-8 flex flex-col gap-6 border border-surface-container">
              {/* Dossier Header & Badge */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-surface-container">
                <div>
                  <span className="text-xs text-primary tracking-wider uppercase font-bold">Official Ritual Order</span>
                  <h2 className="text-2xl font-bold text-on-surface tracking-tight mt-1">{pooja.name}</h2>
                </div>
                <div className="bg-surface-container-low px-4 py-2 rounded-full border border-surface-container flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                  <span className="text-sm font-bold text-primary">#DA-2026-{Math.floor(Math.random() * 10000)}</span>
                </div>
              </div>

              {/* Priest Dossier Profile Snapshot */}
              <div className="bg-gradient-to-r from-surface-container-low to-transparent rounded-2xl p-6 border border-surface-container flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 shadow-md">
                    <img alt="Assigned Purohit" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC83w8DZVxYVIwII4H8D5R9QPTqcZiut1Oy9CXBBu51shP1eTqFk04tatPlrwxlMCJRU5IkVnqS8H1-T3oY3LRjUR0nxi7GcEQnwqONzWE6kXnp2sMoYbzw8I-Dq6Xfvo6mNBINb9rNyI9Hb4PmlerXaWG0VosIPa_UoZ3l1upuv7g0fAQLpTB00q3VNIuhW8x886O-VNfdAssG1F33sxioiEY8fgpu8kkjIkaIW6ee"/>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-on-surface">Dandalu Ayyagaru</h3>
                      <span className="material-symbols-outlined text-primary text-base" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                    </div>
                    <p className="text-xs text-on-surface-variant font-medium mt-1">Chief Vedic Purohit · Rigveda & Yajurveda Sampradayam</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-bold">Telugu</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-bold">Sanskrit</span>
                      <span className="text-[10px] text-on-surface-variant font-bold">22+ Years Lineage</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ritual Overview Specification Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-surface-container-low p-4 rounded-xl border border-surface-container flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-primary mb-1">
                    <span className="material-symbols-outlined text-lg">schedule</span>
                    <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-wider">Auspicious Time</span>
                  </div>
                  <p className="text-base font-bold text-on-surface">Sunday, Oct 18, 2026</p>
                  <p className="text-xs text-on-surface-variant">08:00 AM sharp (Brahma Muhurtham)</p>
                </div>
                <div className="bg-surface-container-low p-4 rounded-xl border border-surface-container flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-primary mb-1">
                    <span className="material-symbols-outlined text-lg">location_on</span>
                    <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-wider">Ceremony Venue</span>
                  </div>
                  <p className="text-base font-bold text-on-surface">Home Residence</p>
                  <p className="text-xs text-on-surface-variant">As provided during booking</p>
                </div>
              </div>

              {/* Interactive Action Suite */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button 
                  onClick={downloadPass}
                  className="flex-1 py-3 px-4 rounded-xl bg-primary text-white text-sm font-bold shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-base">download</span>
                  <span>Download Receipt & Checklist</span>
                </button>
                <button 
                  onClick={addToCalendar}
                  className="flex-1 py-3 px-4 rounded-xl bg-surface-container-low border border-surface-container text-on-surface text-sm font-bold hover:bg-surface-container hover:border-primary/30 transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-base text-primary">event</span>
                  <span>Add to Calendar</span>
                </button>
              </div>
            </div>

            {/* Right Column: "What to Expect Next" Sacred Timeline & Household Prep (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Next Steps Journey Card */}
              <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 flex flex-col gap-6 border border-surface-container relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10"></div>
                <div>
                  <span className="text-[10px] text-primary uppercase tracking-widest font-bold">Ritual Readiness</span>
                  <h3 className="text-xl font-bold text-on-surface mt-1">What to expect next</h3>
                  <p className="text-xs text-on-surface-variant mt-1">Here is how the Vedic sequence unfolds from now until the ceremony.</p>
                </div>

                {/* Vedic Step Progression */}
                <div className="relative flex flex-col gap-6 pl-8 before:content-[''] before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-surface-container">
                  <div className="relative flex flex-col gap-1">
                    <span className="absolute -left-[37px] top-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[10px] font-bold ring-4 ring-white">1</span>
                    <span className="text-[10px] text-primary uppercase font-bold tracking-wider">1 Day Prior</span>
                    <h4 className="text-sm font-bold text-on-surface">Pre-Pooja Sankalpam Call</h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      Dandalu Ayyagaru will phone you directly to record family members' Gotram, Nakshatram, and customized prayer intentions.
                    </p>
                  </div>
                  
                  <div className="relative flex flex-col gap-1">
                    <span className="absolute -left-[37px] top-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[10px] font-bold ring-4 ring-white">2</span>
                    <span className="text-[10px] text-primary uppercase font-bold tracking-wider">Oct 18 · 07:40 AM</span>
                    <h4 className="text-sm font-bold text-on-surface">Materials Arrival</h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      The fresh flowers, samagri chest, and ritual tools arrive directly with the priest 20 minutes in advance.
                    </p>
                  </div>
                  
                  <div className="relative flex flex-col gap-1">
                    <span className="absolute -left-[37px] top-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-bold ring-4 ring-white">3</span>
                    <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider">Oct 18 · 08:00 AM</span>
                    <h4 className="text-sm font-bold text-on-surface">Homam Commences</h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      The sacred fire is rekindled with pure Ghee, followed by chanting and blessing of the residence.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Support Assistance Banner */}
              <div className="bg-surface-container-low border border-surface-container rounded-2xl p-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    <span className="material-symbols-outlined text-xl">phone_in_talk</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface">Vedic Helpline</p>
                    <p className="text-[10px] text-on-surface-variant font-medium">Open daily from 6 AM to 9 PM</p>
                  </div>
                </div>
                <a className="shrink-0 px-4 py-2 rounded-lg bg-white border border-surface-container text-primary text-xs font-bold hover:border-primary/30 transition-colors shadow-sm" href="tel:+918000458899">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Contextual Action & Next Ritual Discovery Strip */}
        <section className="max-w-[1920px] mx-auto px-4 md:px-8 pb-12">
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-surface-container flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                <span className="material-symbols-outlined text-primary text-2xl">temple_hindu</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-on-surface">Planning future family muhurthams?</h4>
                <p className="text-xs text-on-surface-variant mt-0.5">Browse verified ceremonies for Gruha Pravesham or Satyanarayana Vratham.</p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link href="/poojas" className="px-6 py-2.5 rounded-xl bg-primary text-white text-sm font-bold shadow-sm hover:bg-primary/90 transition-colors">
                Explore Poojas
              </Link>
            </div>
          </div>
        </section>

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
        <ConfirmationPageContent />
      </Suspense>
    </main>
  );
}
