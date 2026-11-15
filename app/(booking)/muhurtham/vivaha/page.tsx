'use client';

import { useEffect } from 'react';
// Auto-converted from prototype: dandalu_ayyagaru_vivaha_wedding_muhurtham_multi_day_matcher
// Route: /muhurtham/vivaha

export default function Page() {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
tailwind.config = { darkMode: "class", theme: { extend: { "colors": { "error-container": "#ffdad6", "on-tertiary-fixed": "#1e1b15", "surface-variant": "#e5e2e1", "surface-container-lowest": "#ffffff", "tertiary-fixed": "#e9e1d8", "outline-variant": "#e0c0b1", "on-surface": "#1c1b1b", "outline": "#8c7164", "secondary-container": "#ffce51", "on-error": "#ffffff", "on-surface-variant": "#584237", "surface-container-high": "#eae7e7", "primary": "#9d4300", "on-secondary": "#ffffff", "background": "#fcf9f8", "secondary-fixed-dim": "#f0c044", "inverse-on-surface": "#f3f0ef", "on-secondary-container": "#735700", "primary-fixed-dim": "#ffb690", "on-tertiary-fixed-variant": "#4a463f", "on-primary": "#ffffff", "on-primary-fixed": "#341100", "on-secondary-fixed": "#251a00", "tertiary-fixed-dim": "#ccc5bc", "on-secondary-fixed-variant": "#5a4300", "on-error-container": "#93000a", "on-primary-container": "#582200", "on-background": "#1c1b1b", "on-tertiary": "#ffffff", "surface-tint": "#9d4300", "inverse-surface": "#313030", "surface-bright": "#fcf9f8", "surface-dim": "#dcd9d9", "secondary": "#775a00", "primary-fixed": "#ffdbca", "tertiary-container": "#a09a91", "surface-container": "#f0eded", "on-tertiary-container": "#36322c", "inverse-primary": "#ffb690", "surface": "#fcf9f8", "on-primary-fixed-variant": "#783200", "error": "#ba1a1a", "primary-container": "#f97316", "surface-container-highest": "#e5e2e1", "tertiary": "#625e56", "secondary-fixed": "#ffdf98", "surface-container-low": "#f6f3f2" }, "borderRadius": { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" }, "spacing": { "gutter-desktop": "2rem", "space-md": "1rem", "space-xs": "0.25rem", "gutter": "1.5rem", "space-lg": "1.5rem", "margin-desktop": "3rem", "margin": "1.5rem", "space-sm": "0.5rem", "space-xl": "2.5rem" }, "fontFamily": { "headline-sm": [ "Manrope" ], "label-sm": [ "Inter" ], "body-lg": [ "Inter" ], "display-hero": [ "Manrope" ], "headline-lg": [ "Manrope" ], "label-md": [ "Inter" ], "headline-lg-mobile": [ "Manrope" ], "body-md": [ "Inter" ], "headline-md": [ "Manrope" ], "display-hero-mobile": [ "Manrope" ], "body-sm": [ "Inter" ] }, "fontSize": { "headline-sm": [ "18px", { "lineHeight": "24px", "letterSpacing": "-0.01em", "fontWeight": "600" } ], "label-sm": [ "11px", { "lineHeight": "14px", "letterSpacing": "0.04em", "fontWeight": "600" } ], "body-lg": [ "16px", { "lineHeight": "26px", "letterSpacing": "-0.01em", "fontWeight": "400" } ], "display-hero": [ "48px", { "lineHeight": "56px", "letterSpacing": "-0.03em", "fontWeight": "600" } ], "headline-lg": [ "32px", { "lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "600" } ], "label-md": [ "13px", { "lineHeight": "16px", "letterSpacing": "0.01em", "fontWeight": "500" } ], "headline-lg-mobile": [ "24px", { "lineHeight": "32px", "letterSpacing": "-0.015em", "fontWeight": "600" } ], "body-md": [ "14px", { "lineHeight": "22px", "letterSpacing": "0em", "fontWeight": "400" } ], "headline-md": [ "22px", { "lineHeight": "28px", "letterSpacing": "-0.015em", "fontWeight": "600" } ], "display-hero-mobile": [ "32px", { "lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "600" } ], "body-sm": [ "13px", { "lineHeight": "18px", "letterSpacing": "0em", "fontWeight": "400" } ] } } } };
`;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <main className="w-full pt-16 sm:pt-20 bg-surface min-h-[calc(100dvh-4rem)] sm:min-h-[calc(100dvh-5rem)]">
<div className="flex flex-col w-full">
{/* TOP CONTEXT BANNER & BREADCRUMBS */}
<section className="w-full bg-surface-container-low/70 py-space-lg">
<div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 flex flex-col gap-space-md">
{/* Breadcrumbs & Ephemeris Indicator */}
<div className="flex flex-wrap items-center justify-between gap-space-sm text-body-sm text-on-surface-variant">
<nav className="flex items-center gap-space-xs font-label-md text-label-md">
<a className="hover:text-primary transition-colors" href="javascript:void(0)">Home</a>
<span className="material-symbols-outlined text-[16px] text-tertiary">chevron_right</span>
<a className="hover:text-primary transition-colors" href="javascript:void(0)">Vedic Muhurtham Tools</a>
<span className="material-symbols-outlined text-[16px] text-tertiary">chevron_right</span>
<span className="text-on-surface font-semibold">Vivaha Multi-Day Matcher</span>
</nav>
<div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-lowest shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container"></span>
</span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold tracking-wide">
            Surya Siddhanta &amp; Drik Ganitha Engine · 21 Mahadosha Filter Active
          </span>
</div>
</div>
{/* Main Headline + Editorial Introduction */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end pt-space-xs">
<div className="lg:col-span-8 flex flex-col gap-space-sm">
<span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-semibold">
            Micro-Accurate Vedic Astrology · Dharma Shastra Verified
          </span>
<h1 className="font-display-hero text-display-hero text-on-surface leading-tight tracking-tight">
            Sacred Vivaha Muhurtham &amp; Multi-Day Date-Matching Engine
          </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Discover conflict-free, shuddha wedding lagnams for the bride (<span className="text-on-surface font-medium italic">Vadhuvu</span>) and groom (<span className="text-on-surface font-medium italic">Varudu</span>). Eliminate Shunya Masam &amp; Kartari doshas, align family dates, and harmonize three-day celebrations with certified Vedic Acharyas.
          </p>
</div>
{/* Trust Credentials Strip */}
<div className="lg:col-span-4 flex flex-col gap-space-xs pb-1">
<div className="flex items-center gap-space-sm bg-surface-container-lowest p-space-sm rounded-xl shadow-sm">
<span className="material-symbols-outlined text-primary text-xl">auto_awesome</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm font-semibold text-on-surface">NASA DE440 Ephemeris Accuracy</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">Sub-second planetary arc precision</span>
</div>
</div>
<div className="flex items-center gap-space-sm bg-surface-container-lowest p-space-sm rounded-xl shadow-sm">
<span className="material-symbols-outlined text-secondary-container text-xl text-[#B45309]" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm font-semibold text-on-surface">TTD Asthana Siddhanti Reviewed</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">Validated against Apastamba &amp; Bodhayana Sutras</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/* INTERACTIVE INPUT DOSSIER & COMPATIBILITY BAR */}
<section className="w-full py-space-xl bg-surface">
<div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 flex flex-col gap-space-lg">
{/* Section Header */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Step 01 · Janma Shuddhi Dossier</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Dual Janma Kundali &amp; Gotram Exogamy Audit</h2>
</div>
<div className="inline-flex items-center gap-2 text-label-md font-label-md text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-lg">chevron_forward</span>
<span>Calculations Anchored to Hyderabad Geo-Coordinates (17.3850° N, 78.4867° E)</span>
</div>
</div>
{/* 2-Column Couple Dossier */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
{/* Bride (Vadhuvu) Card */}
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-md relative overflow-hidden">
<div className="absolute top-0 right-0 px-space-md py-1 bg-surface-container-low text-primary font-label-sm text-label-sm uppercase tracking-wider rounded-bl-xl font-bold">
            Vadhuvu (Bride)
          </div>
<div className="flex items-start gap-space-md">
<div className="w-14 h-14 rounded-xl bg-[#FFF7ED] flex items-center justify-center text-primary shrink-0 shadow-inner">
<span className="material-symbols-outlined text-2xl">temple_hindu</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Janma Name</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Ananya Rao</h3>
<span className="font-body-sm text-body-sm text-primary font-medium">Kasyapa Gotram · Pravara: 3 Rishis</span>
</div>
</div>
<div className="grid grid-cols-2 gap-space-sm bg-surface-container-low/60 p-space-md rounded-xl text-body-sm">
<div>
<span className="block text-on-surface-variant text-[11px] font-semibold uppercase">Janma Nakshatra</span>
<span className="text-on-surface font-semibold">Rohini (Pada 2)</span>
</div>
<div>
<span className="block text-on-surface-variant text-[11px] font-semibold uppercase">Janma Rashi &amp; Lord</span>
<span className="text-on-surface font-semibold">Vrishabha (Venus / Shukra)</span>
</div>
<div>
<span className="block text-on-surface-variant text-[11px] font-semibold uppercase">Birth Coordinates</span>
<span className="text-on-surface font-semibold">Hyderabad · 06:45 AM</span>
</div>
<div>
<span className="block text-on-surface-variant text-[11px] font-semibold uppercase">Janma Gana &amp; Yoni</span>
<span className="text-on-surface font-semibold">Manushya · Sarpa Yoni</span>
</div>
</div>
<div className="flex items-center justify-between text-body-sm pt-space-xs text-on-surface-variant">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-[#059669]">
<span className="material-symbols-outlined text-base">check_circle</span> Surya Bala: Strong (Sun in Benefic Upachaya)
            </span>
<button className="text-primary hover:underline font-label-sm text-label-sm font-semibold">Edit Janma Details</button>
</div>
</div>
{/* Groom (Varudu) Card */}
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-md relative overflow-hidden">
<div className="absolute top-0 right-0 px-space-md py-1 bg-surface-container-low text-primary font-label-sm text-label-sm uppercase tracking-wider rounded-bl-xl font-bold">
            Varudu (Groom)
          </div>
<div className="flex items-start gap-space-md">
<div className="w-14 h-14 rounded-xl bg-[#FFF7ED] flex items-center justify-center text-primary shrink-0 shadow-inner">
<span className="material-symbols-outlined text-2xl">shield_person</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Janma Name</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Karthik Bharadwaj</h3>
<span className="font-body-sm text-body-sm text-primary font-medium">Bharadwaja Gotram · Pravara: Angirasa, Barhaspatya</span>
</div>
</div>
<div className="grid grid-cols-2 gap-space-sm bg-surface-container-low/60 p-space-md rounded-xl text-body-sm">
<div>
<span className="block text-on-surface-variant text-[11px] font-semibold uppercase">Janma Nakshatra</span>
<span className="text-on-surface font-semibold">Uttara Phalguni (Pada 3)</span>
</div>
<div>
<span className="block text-on-surface-variant text-[11px] font-semibold uppercase">Janma Rashi &amp; Lord</span>
<span className="text-on-surface font-semibold">Kanya (Mercury / Budha)</span>
</div>
<div>
<span className="block text-on-surface-variant text-[11px] font-semibold uppercase">Birth Coordinates</span>
<span className="text-on-surface font-semibold">Vijayawada · 08:20 AM</span>
</div>
<div>
<span className="block text-on-surface-variant text-[11px] font-semibold uppercase">Janma Gana &amp; Yoni</span>
<span className="text-on-surface font-semibold">Manushya · Gau Yoni</span>
</div>
</div>
<div className="flex items-center justify-between text-body-sm pt-space-xs text-on-surface-variant">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-[#059669]">
<span className="material-symbols-outlined text-base">check_circle</span> Guru Bala: Exalted (Jupiter Transit Auspicious)
            </span>
<button className="text-primary hover:underline font-label-sm text-label-sm font-semibold">Edit Janma Details</button>
</div>
</div>
</div>
{/* Gotram Shuddhi & Ashta Koota Gunamilan Deep Matrix */}
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-md">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm pb-space-xs border-b border-surface-container">
<div className="flex items-center gap-space-sm">
<span className="w-8 h-8 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold">
<span className="material-symbols-outlined text-lg">verified</span>
</span>
<div>
<h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Gotram Exogamy &amp; Shuddhi Passed</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Kasyapa ≠ Bharadwaja. Zero Sagotra or Samana Pravara flaws found.</p>
</div>
</div>
<div className="flex items-center gap-space-md">
<div className="text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Gunamilan Score</span>
<div className="font-headline-lg text-headline-lg text-primary font-bold tracking-tight">31 <span className="text-body-lg text-on-surface-variant font-normal">/ 36 Gunas</span></div>
</div>
<span className="px-space-md py-1 rounded-full bg-[#ECFDF5] text-[#059669] font-label-sm text-label-sm font-semibold">
              Uttama Vivaha Yoga
            </span>
</div>
</div>
{/* Ashtakoota Pills Breakdown */}
<div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-space-xs">
<div className="bg-surface-container-low p-space-xs rounded-xl text-center">
<span className="block font-label-sm text-[10px] text-on-surface-variant uppercase">Varna (1)</span>
<span className="font-label-md text-label-md font-semibold text-on-surface">1.0 / 1.0</span>
<span className="block text-[10px] text-[#059669] font-medium">Brahmin-Vaishya</span>
</div>
<div className="bg-surface-container-low p-space-xs rounded-xl text-center">
<span className="block font-label-sm text-[10px] text-on-surface-variant uppercase">Vashya (2)</span>
<span className="font-label-md text-label-md font-semibold text-on-surface">2.0 / 2.0</span>
<span className="block text-[10px] text-[#059669] font-medium">Chatushpada</span>
</div>
<div className="bg-surface-container-low p-space-xs rounded-xl text-center">
<span className="block font-label-sm text-[10px] text-on-surface-variant uppercase">Tara (3)</span>
<span className="font-label-md text-label-md font-semibold text-on-surface">3.0 / 3.0</span>
<span className="block text-[10px] text-[#059669] font-medium">Sampat Tara</span>
</div>
<div className="bg-surface-container-low p-space-xs rounded-xl text-center">
<span className="block font-label-sm text-[10px] text-on-surface-variant uppercase">Yoni (4)</span>
<span className="font-label-md text-label-md font-semibold text-on-surface">3.0 / 4.0</span>
<span className="block text-[10px] text-[#059669] font-medium">Mitra Yoni</span>
</div>
<div className="bg-surface-container-low p-space-xs rounded-xl text-center">
<span className="block font-label-sm text-[10px] text-on-surface-variant uppercase">Graha Maitri (5)</span>
<span className="font-label-md text-label-md font-semibold text-on-surface">5.0 / 5.0</span>
<span className="block text-[10px] text-[#059669] font-medium">Shukra-Budha Mitra</span>
</div>
<div className="bg-surface-container-low p-space-xs rounded-xl text-center">
<span className="block font-label-sm text-[10px] text-on-surface-variant uppercase">Gana (6)</span>
<span className="font-label-md text-label-md font-semibold text-on-surface">6.0 / 6.0</span>
<span className="block text-[10px] text-[#059669] font-medium">Manushya-Manushya</span>
</div>
<div className="bg-surface-container-low p-space-xs rounded-xl text-center">
<span className="block font-label-sm text-[10px] text-on-surface-variant uppercase">Bhakoot (7)</span>
<span className="font-label-md text-label-md font-semibold text-on-surface">7.0 / 7.0</span>
<span className="block text-[10px] text-[#059669] font-medium">5/9 Trikona (Sutra)</span>
</div>
<div className="bg-surface-container-low p-space-xs rounded-xl text-center">
<span className="block font-label-sm text-[10px] text-on-surface-variant uppercase">Nadi (8)</span>
<span className="font-label-md text-label-md font-semibold text-on-surface">4.0 / 8.0</span>
<span className="block text-[10px] text-[#059669] font-medium">Adi vs Antya (Safe)</span>
</div>
</div>
{/* Filter & Calculation Preference Bar */}
<div className="bg-surface-container-low p-space-md rounded-xl flex flex-wrap items-center justify-between gap-space-md mt-space-xs">
<div className="flex flex-wrap items-center gap-space-lg text-body-sm">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">Season Scope</span>
<span className="font-medium text-on-surface">Nov 2025 – Feb 2026 (Kartika &amp; Magha)</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">Ceremony Format</span>
<span className="font-medium text-on-surface">3-Day Traditional (Haldi · Muhurtham · Reception)</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">Venue Center</span>
<span className="font-medium text-on-surface">Hyderabad / Secunderabad (IST)</span>
</div>
</div>
<div className="flex items-center gap-space-sm">
<button className="inline-flex items-center gap-2 px-space-md py-2 rounded-full bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-base">picture_as_pdf</span>
<span>Export Kundali Report</span>
</button>
<button className="inline-flex items-center gap-2 px-space-lg py-2 rounded-full bg-primary-container text-on-primary font-label-md text-label-md shadow-sm hover:bg-primary transition-colors">
<span className="material-symbols-outlined text-base">refresh</span>
<span>Recalculate Shuddha Lagnams</span>
</button>
</div>
</div>
</div>
</div>
</section>
{/* MULTI-DAY CANDIDATE MATCHING SHOWCASE */}
<section className="w-full py-space-xl bg-surface-container-low/40">
<div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 flex flex-col gap-space-xl">
{/* Section Header */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div className="flex flex-col gap-space-xs">
<div className="inline-flex items-center gap-space-xs text-primary font-label-sm text-label-sm font-bold uppercase tracking-wider">
<span className="material-symbols-outlined text-base">event_upcoming</span> Step 02 · Ranked Multi-Day Muhurtham Windows
          </div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Prioritized Ceremonial Wedding Windows</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Each date package contains the exact golden Sumuhurtham micro-window, 3-day itinerary, and assigned senior archaryas.</p>
</div>
<div className="flex items-center gap-space-xs text-label-sm font-label-sm">
<span className="px-space-md py-1 rounded-full bg-[#ECFDF5] text-[#059669] font-semibold">Uttama (Pinnacle)</span>
<span className="px-space-md py-1 rounded-full bg-[#EFF6FF] text-[#1D4ED8] font-semibold">Shuddha (Approved)</span>
<span className="px-space-md py-1 rounded-full bg-[#FEF3C7] text-[#92400E] font-semibold">Madhyama (Pariharam Req.)</span>
</div>
</div>
{/* CANDIDATE 01 — UTTAMA RANK #1 (HERO CARD) */}
<div className="bg-surface-container-lowest rounded-3xl p-space-xl shadow-md flex flex-col gap-space-xl relative overflow-hidden">
<div className="absolute top-0 left-0 w-2 h-full bg-primary-container"></div>
{/* Header Strip */}
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md pb-space-md border-b border-surface-container">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-space-sm flex-wrap">
<span className="px-space-md py-0.5 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm uppercase tracking-wider font-bold">
                Uttama Rank #1 · Highest Cosmic Blessing
              </span>
<span className="px-space-md py-0.5 rounded-full bg-[#FFF7ED] text-primary font-label-sm text-label-sm font-semibold">
                Magha Shukla Dasami · Rohini Amsha
              </span>
</div>
<h3 className="font-headline-lg text-headline-lg text-on-surface font-semibold pt-1">
              January 29 (Thu) – January 31 (Sat), 2026
            </h3>
<span className="font-body-sm text-body-sm text-on-surface-variant">
              Optimal weekend schedule for guest hospitality, wedding mandapam availability, and zero Rahu-Kalam clashes.
            </span>
</div>
{/* Price & Booking Quick Strip */}
<div className="flex flex-col lg:items-end gap-1 bg-surface-container-low/60 p-space-md rounded-2xl">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Complete 3-Day Vivaha Acharya Package</span>
<div className="font-headline-lg text-headline-lg text-on-surface font-bold">₹48,000 <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">all-inclusive</span></div>
<span className="font-body-sm text-[12px] text-primary font-medium">3 Veda Murthis + Agamic Samagri Kit Included</span>
</div>
</div>
{/* The Golden Sumuhurtham Feature Callout */}
<div className="bg-[#FFFDF7] p-space-lg rounded-2xl shadow-inner flex flex-col lg:flex-row items-stretch justify-between gap-space-lg">
<div className="flex flex-col gap-space-xs max-w-xl">
<div className="flex items-center gap-2 text-primary font-label-sm text-label-sm font-bold uppercase tracking-wider">
<span className="material-symbols-outlined text-lg">alarm_on</span> The Golden Sumuhurtham (Jeelakarra Bellam)
            </div>
<h4 className="font-headline-md text-headline-md text-on-surface font-semibold">
              Friday, Jan 30, 2026 · Vrishabha Lagna (Pinnacle 08:22 AM)
            </h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Sumuhurtham Window spans <strong className="text-on-surface">08:14 AM – 08:38 AM IST</strong>. Rohini nakshatra is rising on the ascendant matching the bride's Janma Nakshatra. Jupiter (Guru) is perfectly situated in the 9th Bhagya house showering divine grace on the couple.
            </p>
<div className="flex flex-wrap gap-space-xs pt-space-xs font-label-sm text-label-sm">
<span className="px-space-sm py-1 bg-surface-container-lowest text-on-surface rounded-lg font-medium shadow-sm">
                Jupiter in 9th (Bhagya)
              </span>
<span className="px-space-sm py-1 bg-surface-container-lowest text-on-surface rounded-lg font-medium shadow-sm">
                Venus Exalted in 11th (Labha)
              </span>
<span className="px-space-sm py-1 bg-surface-container-lowest text-on-surface rounded-lg font-medium shadow-sm">
                Mars in 6th (Upachaya Shuddhi)
              </span>
<span className="px-space-sm py-1 bg-[#ECFDF5] text-[#059669] rounded-lg font-semibold shadow-sm">
                Zero Kuja / Rahu Vedha
              </span>
</div>
</div>
{/* Micro Planetary Chart Radial Graphic */}
<div className="bg-surface-container-lowest p-space-md rounded-2xl flex flex-col justify-between items-center text-center shrink-0 min-w-[240px] shadow-sm">
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant font-bold">Lagna Shuddhi Score</span>
<div className="relative w-28 h-28 my-2 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
<path className="text-primary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="98, 100" strokeLinecap="round" strokeWidth="3.5"></path>
</svg>
<div className="absolute flex flex-col items-center">
<span className="font-headline-md text-headline-md font-bold text-on-surface leading-none">98%</span>
<span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-wider">Flawless</span>
</div>
</div>
<span className="font-body-sm text-[11px] text-[#059669] font-semibold">21 Mahadoshas Filtered</span>
</div>
</div>
{/* Multi-Day Detailed Timeline Tracker */}
<div className="flex flex-col gap-space-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
            Chronological 3-Day Ritual Itinerary
          </span>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
{/* Day 1 Card */}
<div className="bg-surface-container-low/60 p-space-md rounded-2xl flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="px-space-sm py-0.5 rounded-full bg-surface-container-lowest font-label-sm text-label-sm font-bold text-on-surface">
                  Day 1 · Thursday, Jan 29
                </span>
<span className="font-body-sm text-body-sm text-on-surface-variant font-medium">Evening</span>
</div>
<h5 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Pellikuthuru &amp; Mandapam Prathishta</h5>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Mangala Snanam, Nalugu, Vratham, Gauri Pooja, and Ganapathi Avahanam at the bride and groom homes.
              </p>
<div className="mt-auto pt-space-xs font-label-sm text-label-sm text-primary font-medium">
                Window: 04:30 PM – 07:00 PM
              </div>
</div>
{/* Day 2 Card (Sumuhurtham) */}
<div className="bg-surface-container-low/60 p-space-md rounded-2xl flex flex-col gap-space-sm relative overflow-hidden">
<div className="absolute top-0 right-0 px-space-xs py-0.5 bg-[#FFF7ED] text-primary font-label-sm text-[10px] font-bold uppercase rounded-bl-lg">
                Core Muhurtham
              </div>
<div className="flex items-center justify-between">
<span className="px-space-sm py-0.5 rounded-full bg-surface-container-lowest font-label-sm text-label-sm font-bold text-on-surface">
                  Day 2 · Friday, Jan 30
                </span>
<span className="font-body-sm text-body-sm text-primary font-bold">Dawn to Dusk</span>
</div>
<h5 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Kanyadanam &amp; Mangalasutram</h5>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Kasi Yatra, Jeelakarra-Bellam (08:22 AM sharp), Mangalasutra Dharana, Saptapadi, followed by evening Reception.
              </p>
<div className="mt-auto pt-space-xs font-label-sm text-label-sm text-primary font-semibold">
                Muhurtham: 08:14 AM – 08:38 AM
              </div>
</div>
{/* Day 3 Card */}
<div className="bg-surface-container-low/60 p-space-md rounded-2xl flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="px-space-sm py-0.5 rounded-full bg-surface-container-lowest font-label-sm text-label-sm font-bold text-on-surface">
                  Day 3 · Saturday, Jan 31
                </span>
<span className="font-body-sm text-body-sm text-on-surface-variant font-medium">Morning</span>
</div>
<h5 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Appaginthalu &amp; Gruha Pravesham</h5>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Formal handing-over ceremony, bride departure, auspicious threshold welcome, and Satyanarayana Swamy Vratam.
              </p>
<div className="mt-auto pt-space-xs font-label-sm text-label-sm text-primary font-medium">
                Window: 10:15 AM – 11:30 AM
              </div>
</div>
</div>
</div>
{/* Clearance Badges & CTA Footer */}
<div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-sm border-t border-surface-container">
<div className="flex flex-wrap items-center gap-space-sm">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-[#059669]">
<span className="material-symbols-outlined text-base">verified</span> Zero Kartari Dosha
            </span>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-[#059669]">
<span className="material-symbols-outlined text-base">verified</span> Tribala Shuddhi Passed
            </span>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-[#059669]">
<span className="material-symbols-outlined text-base">verified</span> Zero Jamitra Malefic
            </span>
</div>
<div className="flex items-center gap-space-sm w-full sm:w-auto">
<button className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-space-md py-2.5 rounded-full bg-surface-container-low text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-base">file_download</span>
<span>Draft Lagna Patrika</span>
</button>
<button className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-space-xl py-2.5 rounded-full bg-primary-container text-on-primary font-label-md text-label-md shadow-md hover:bg-primary transition-colors">
<span className="material-symbols-outlined text-base">event_available</span>
<span>Lock Jan 30 Muhurtham</span>
</button>
</div>
</div>
</div>
{/* CANDIDATE 02 & CANDIDATE 03 DUAL TILES */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
{/* CANDIDATE 02 */}
<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col gap-space-md relative overflow-hidden">
<div className="flex items-center justify-between">
<span className="px-space-md py-0.5 rounded-full bg-[#EFF6FF] text-[#1D4ED8] font-label-sm text-label-sm uppercase font-bold tracking-wider">
              Uttama Rank #2 · Devutthana Ekadashi
            </span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">November 2025</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-on-surface font-semibold">
              November 21 (Fri) – November 23 (Sun), 2025
            </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant pt-1">
              Consecrated on Kartika Shukla Ekadashi. High weekend accessibility with maximum travel ease for extended relatives.
            </p>
</div>
<div className="bg-surface-container-low/70 p-space-md rounded-xl flex items-center justify-between">
<div>
<span className="block font-label-sm text-label-sm text-on-surface-variant font-bold uppercase">Main Sumuhurtham</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Saturday, Nov 22 · 07:54 AM</span>
<span className="block font-body-sm text-[12px] text-primary">Mithuna Lagna · Mrigashira Amsha</span>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm text-[#059669] font-bold block">94% Shuddhi</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">2 Acharyas Avail.</span>
</div>
</div>
<div className="flex items-center justify-between text-body-sm pt-space-xs text-on-surface-variant">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-[#059669]">
<span className="material-symbols-outlined text-base">check</span> Zero Shunya Masa Delay
            </span>
<button className="inline-flex items-center gap-1 text-primary hover:underline font-label-md text-label-md font-semibold">
<span>View Itinerary Breakdown</span>
<span className="material-symbols-outlined text-base">arrow_forward</span>
</button>
</div>
</div>
{/* CANDIDATE 03 */}
<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col gap-space-md relative overflow-hidden">
<div className="flex items-center justify-between">
<span className="px-space-md py-0.5 rounded-full bg-[#FEF3C7] text-[#92400E] font-label-sm text-label-sm uppercase font-bold tracking-wider">
              Madhyama Rank #3 · Mid-Week Window
            </span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">February 2026</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-on-surface font-semibold">
              February 18 (Wed) – February 20 (Fri), 2026
            </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant pt-1">
              Phalguna Shukla Panchami. Strong auspicious Guru placement, requires small Chandra Vedha pariharam during Sankalpam.
            </p>
</div>
<div className="bg-surface-container-low/70 p-space-md rounded-xl flex items-center justify-between">
<div>
<span className="block font-label-sm text-label-sm text-on-surface-variant font-bold uppercase">Main Sumuhurtham</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Thursday, Feb 19 · 09:22 AM</span>
<span className="block font-body-sm text-[12px] text-primary">Meena Lagna · Uttarabhadra Amsha</span>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm text-[#B45309] font-bold block">88% Shuddhi</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">Pariharam Incl.</span>
</div>
</div>
<div className="flex items-center justify-between text-body-sm pt-space-xs text-on-surface-variant">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-[#B45309]">
<span className="material-symbols-outlined text-base">info</span> Navagraha Shanti Pre-Ceremony
            </span>
<button className="inline-flex items-center gap-1 text-primary hover:underline font-label-md text-label-md font-semibold">
<span>View Itinerary Breakdown</span>
<span className="material-symbols-outlined text-base">arrow_forward</span>
</button>
</div>
</div>
</div>
</div>
</section>
{/* EDITORIAL MANDAPAM SHOWCASE BANNER */}
<section className="w-full py-space-xl bg-surface">
<div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 flex flex-col gap-space-lg">
<div className="relative w-full rounded-3xl overflow-hidden shadow-xl min-h-[460px] flex flex-col justify-end p-space-xl text-on-primary">
<img alt="Sacred Vivaha Mandapam Setup" className="absolute inset-0 w-full h-full object-cover" data-alt="Magnificent traditional South Indian wedding mandapam decorated with yellow marigold and jasmine garlands, banana stems, brass lamps burning with holy oil, a sacred havan fire kund in the center, and brass pooja thalis arranged with turmeric and kumkum on a ceremonial carpet under warm golden temple light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA08bJ7VVB686Kk5iSqRFo5Ox9GhcwrGduoGq3xhUdiPkbLyuAn-xIxeLVntlq56KQEFBL4CnsrVY_wqNc_aUXqjQppxezuKcbkd1S1NZQHQSUhRaLMroyMaPEJBqgY5Nd_zN6blwxEHBcLKo9d0ZtZoTRqgRtXq_r_Jg8M9y_S9Ys2ogy9LPoMWUB0ZZ80tTvlkVM35qZ1-ZgOmBwwIbBbXeiCupvub9DeKnbUNPIw"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>
<div className="relative z-10 flex flex-col gap-space-sm max-w-3xl">
<span className="px-space-md py-1 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm uppercase tracking-wider font-bold w-fit">
            Vedic Vivaha Mandapam Sanctuary
          </span>
<h2 className="font-display-hero text-display-hero leading-tight text-white font-semibold">
            Preserving Agamic Majesty in Every Sacred Vow
          </h2>
<p className="font-body-lg text-body-lg text-gray-200">
            Dandalu Ayyagaru brings certified Vedic scholars, low-smoke organic samidhas, consecrated silver Jeelakarra-Bellam utensils, and bilingual Sanskrit chant explanations directly to your celebration venue.
          </p>
<div className="flex flex-wrap items-center gap-space-md pt-space-sm font-label-md text-label-md">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-container">local_fire_department</span>
<span>Cow-Dung &amp; Medicinal Samidha Fire</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-container">record_voice_over</span>
<span>English &amp; Telugu Sloka Meaning Narration</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-container">history_edu</span>
<span>Handwritten Palm-Leaf Lagna Patrika</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/* THE 21 VIVAHA MAHA DOSHA SCIENTIFIC AUDIT */}
<section className="w-full py-space-xl bg-surface-container-low/40">
<div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 flex flex-col gap-space-xl">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div className="flex flex-col gap-space-xs">
<span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">Step 03 · Astro-Mathematical Rigor</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">The 21 Vivaha Mahadosha Elimination Matrix</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
            Per ancient treatises <em className="text-on-surface font-medium">Muhurtha Chintamani</em> and <em className="text-on-surface font-medium">Brihat Samhita</em>, 21 principal cosmic blemishes must be vetted before setting the Mangalasutra timing.
          </p>
</div>
<div className="bg-surface-container-lowest px-space-md py-space-sm rounded-xl shadow-sm text-body-sm font-medium">
<span className="text-[#059669] font-bold">100% Cleared</span> for Jan 30, 2026 Sumuhurtham
        </div>
</div>
{/* Grid of Audited Flaws */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
{/* Flaw 1 */}
<div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex items-start gap-space-sm">
<span className="w-7 h-7 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-base">check</span>
</span>
<div className="flex flex-col gap-1">
<span className="font-label-md text-label-md font-semibold text-on-surface">1. Kartari Dosha</span>
<p className="font-body-sm text-[12px] text-on-surface-variant">Lagna is unencumbered. No malefic planets (Sun, Mars, Saturn) flank adjacent 12th &amp; 2nd houses.</p>
</div>
</div>
{/* Flaw 2 */}
<div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex items-start gap-space-sm">
<span className="w-7 h-7 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-base">check</span>
</span>
<div className="flex flex-col gap-1">
<span className="font-label-md text-label-md font-semibold text-on-surface">2. Shunya Masam &amp; Malamasa</span>
<p className="font-body-sm text-[12px] text-on-surface-variant">Clear solar month progression. Pure Magha Shukla Paksha without extra Adhika Masa intercalations.</p>
</div>
</div>
{/* Flaw 3 */}
<div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex items-start gap-space-sm">
<span className="w-7 h-7 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-base">check</span>
</span>
<div className="flex flex-col gap-1">
<span className="font-label-md text-label-md font-semibold text-on-surface">3. Guru &amp; Shukra Moudhyam</span>
<p className="font-body-sm text-[12px] text-on-surface-variant">Combustion test negative. Both Jupiter and Venus are luminescent, direct, and far beyond solar combustion orbs.</p>
</div>
</div>
{/* Flaw 4 */}
<div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex items-start gap-space-sm">
<span className="w-7 h-7 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-base">check</span>
</span>
<div className="flex flex-col gap-1">
<span className="font-label-md text-label-md font-semibold text-on-surface">4. Jamitra Dosha (7th House Affliction)</span>
<p className="font-body-sm text-[12px] text-on-surface-variant">The crucial 7th bhava of marital longevity is completely spotless of Rahu, Ketu, or Mars aspects.</p>
</div>
</div>
{/* Flaw 5 */}
<div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex items-start gap-space-sm">
<span className="w-7 h-7 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-base">check</span>
</span>
<div className="flex flex-col gap-1">
<span className="font-label-md text-label-md font-semibold text-on-surface">5. Mrityu &amp; Dagdha Yoga</span>
<p className="font-body-sm text-[12px] text-on-surface-variant">Tithi-Vara combinations pass full structural shuddhi. Zero planetary collisions with inauspicious degrees.</p>
</div>
</div>
{/* Flaw 6 */}
<div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex items-start gap-space-sm">
<span className="w-7 h-7 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-base">check</span>
</span>
<div className="flex flex-col gap-1">
<span className="font-label-md text-label-md font-semibold text-on-surface">6. Visha Ghati &amp; Varjyam</span>
<p className="font-body-sm text-[12px] text-on-surface-variant">The 08:22 AM pinnacle falls safely 4 ghatikas away from any Nakshatra Varjyam or Durmuhurtham spans.</p>
</div>
</div>
</div>
</div>
</section>
{/* MULTI-DAY CEREMONIAL RITUAL JOURNEY STRIP */}
<section className="w-full py-space-xl bg-surface">
<div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 flex flex-col gap-space-xl">
<div className="flex flex-col gap-space-xs">
<span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">Step 04 · The Sacred Milestones</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">The Complete Vivaha Sampradayam Path</h2>
<p className="font-body-md text-body-md text-on-surface-variant">
          From the first stroke of vermillion on the Lagna Patrika to the final sapta rishi blessings under Arundhati Nakshatra.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-space-md">
{/* Step 1 */}
<div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col gap-space-xs justify-between">
<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-primary font-bold">01</span>
<h4 className="font-label-md text-label-md text-on-surface font-semibold">Lagna Patrika</h4>
<p className="font-body-sm text-[12px] text-on-surface-variant">Formal writing &amp; invocation inviting the 33 crore Devas to witness the union.</p>
</div>
<span className="text-[11px] text-on-surface-variant font-medium pt-2">Prior to Muhurtham</span>
</div>
{/* Step 2 */}
<div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col gap-space-xs justify-between">
<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-primary font-bold">02</span>
<h4 className="font-label-md text-label-md text-on-surface font-semibold">Gauri Pooja</h4>
<p className="font-body-sm text-[12px] text-on-surface-variant">The bride invokes Mother Parvati for eternal Saubhagyam and marital grace.</p>
</div>
<span className="text-[11px] text-on-surface-variant font-medium pt-2">Morning of Day 2</span>
</div>
{/* Step 3 */}
<div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col gap-space-xs justify-between">
<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-primary font-bold">03</span>
<h4 className="font-label-md text-label-md text-on-surface font-semibold">Jeelakarra Bellam</h4>
<p className="font-body-sm text-[12px] text-on-surface-variant">Cumin &amp; jaggery paste placed on Sahasrara crowns at the exact second.</p>
</div>
<span className="text-[11px] text-primary font-bold pt-2">Pinnacle Sumuhurtham</span>
</div>
{/* Step 4 */}
<div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col gap-space-xs justify-between">
<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-primary font-bold">04</span>
<h4 className="font-label-md text-label-md text-on-surface font-semibold">Mangalasutram</h4>
<p className="font-body-sm text-[12px] text-on-surface-variant">Three holy knots tied: Manasa (mind), Vacha (speech), and Karmana (deed).</p>
</div>
<span className="text-[11px] text-on-surface-variant font-medium pt-2">Sacred Knot Binding</span>
</div>
{/* Step 5 */}
<div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col gap-space-xs justify-between">
<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-primary font-bold">05</span>
<h4 className="font-label-md text-label-md text-on-surface font-semibold">Saptapadi &amp; Laja</h4>
<p className="font-body-sm text-[12px] text-on-surface-variant">Seven circumambulations around Agni Devata establishing eternal friendship.</p>
</div>
<span className="text-[11px] text-on-surface-variant font-medium pt-2">Homa Pradakshinam</span>
</div>
{/* Step 6 */}
<div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col gap-space-xs justify-between">
<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-primary font-bold">06</span>
<h4 className="font-label-md text-label-md text-on-surface font-semibold">Arundhati Darshanam</h4>
<p className="font-body-sm text-[12px] text-on-surface-variant">Beholding the constellation of Sage Vashistha &amp; Arundhati for fidelity.</p>
</div>
<span className="text-[11px] text-on-surface-variant font-medium pt-2">Elder Ashirvachanam</span>
</div>
</div>
</div>
</section>
{/* DANDALU AYYAGARU VIVAHA ASSURANCE PILLARS */}
<section className="w-full py-space-xl bg-surface-container-low/50">
<div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 flex flex-col gap-space-xl">
<div className="text-center max-w-2xl mx-auto flex flex-col gap-space-xs">
<span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">Uncompromising Standards</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">The Dandalu Ayyagaru Vivaha Guarantee</h2>
<p className="font-body-md text-body-md text-on-surface-variant">We eliminate uncertainty so your family can immerse entirely in divine joy.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-[#FFF7ED] text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-2xl">workspace_premium</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Tirumala &amp; Sringeri Lineage</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Acharyas possess a minimum of 15 years rigorous Gurukula training, delivering authentic Veda vakyams with flawless Vedic phonetics.
          </p>
</div>
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-[#FFF7ED] text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-2xl">inventory_2</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">64-Item Agamic Samagri</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Zero last-minute shopping panic. Cold-pressed cow ghee, pristine havan woods, and organic herbs delivered 3 hours prior to venue.
          </p>
</div>
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-[#FFF7ED] text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-2xl">translate</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Bilingual Sloka Meaning</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Each ritual step is elucidated in real-time in Telugu, Kannada, or English so the modern bride and groom understand the spiritual vow.
          </p>
</div>
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-[#FFF7ED] text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-2xl">co_present</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Direct Venue Coordination</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Our ceremony concierge liaises seamlessly with your banquet managers, mandapam florists, and event planners for fire safety &amp; timing.
          </p>
</div>
</div>
</div>
</section>
{/* SIDDHANTI EXPERT CONSULTATION CALLOUT */}
<section className="w-full py-space-xl bg-surface">
<div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10">
<div className="bg-surface-container-lowest rounded-3xl p-space-xl shadow-md flex flex-col lg:flex-row items-center justify-between gap-space-xl">
<div className="flex items-center gap-space-lg">
<div className="w-20 h-20 rounded-2xl bg-[#FFF7ED] text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-4xl">psychology_alt</span>
</div>
<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">Personalized Elder Guidance</span>
<h3 className="font-headline-lg text-headline-lg text-on-surface font-semibold">
              Need Custom Lagna Patrika or In-Depth Family Review?
            </h3>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
              Arrange a private 30-minute consultation with our Senior Asthana Siddhanti. Address Gotram nuances, specific family customs, and get printed Patrika authorization.
            </p>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center gap-space-md w-full lg:w-auto shrink-0">
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-space-lg py-3 rounded-full bg-surface-container-low text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-base">support_agent</span>
<span>Talk to Vivaha Concierge</span>
</button>
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-space-xl py-3 rounded-full bg-primary-container text-on-primary font-label-md text-label-md shadow-md hover:bg-primary transition-colors">
<span className="material-symbols-outlined text-base">calendar_month</span>
<span>Book Siddhanti Consult (₹999)</span>
</button>
</div>
</div>
</div>
</section>
</div>
    </main>
  );
}
