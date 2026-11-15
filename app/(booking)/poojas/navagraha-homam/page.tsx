'use client';

import { useEffect } from 'react';
// Auto-converted from prototype: dandalu_ayyagaru_navagraha_homam_shanti_detail
// Route: /poojas/navagraha-homam

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
{/* Sub-navigation / Breadcrumb & Status Bar */}
<div className="w-full bg-surface-container-low/80 backdrop-blur-sm">
<div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 py-space-sm flex flex-wrap items-center justify-between gap-space-sm text-body-sm">
<nav aria-label="Breadcrumb" className="flex items-center gap-space-xs text-on-surface-variant font-label-md">
<a className="hover:text-primary transition-colors" href="javascript:void(0)">Poojas</a>
<span className="material-symbols-outlined text-sm text-outline">chevron_right</span>
<a className="hover:text-primary transition-colors" href="javascript:void(0)">Homams &amp; Havans</a>
<span className="material-symbols-outlined text-sm text-outline">chevron_right</span>
<span className="text-on-surface font-semibold">Navagraha Homam</span>
</nav>
<div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-lowest shadow-sm">
<span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
<span className="font-label-sm uppercase tracking-wider text-emerald-800 font-semibold">Panchangam Verified Graha Shanti Muhurtham Active</span>
</div>
</div>
</div>
{/* Main Hero & Sticky Reservation Showcase */}
<section className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 py-space-xl w-full">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
{/* Left Column: Media, Essence, Matrix, Astrological Check */}
<div className="lg:col-span-7 flex flex-col gap-space-xl">
{/* Hero Media Card with Vignette & Overlays */}
<div className="relative w-full rounded-2xl overflow-hidden shadow-xl bg-surface-container">
<img alt="Vedic Navagraha Homam altar arrangement featuring consecrated copper kunda, sacred fire with rising smoke, and 3x3 Navadhanya mandala with decorated brass kalash pots." className="w-full h-[420px] sm:h-[480px] object-cover object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIosvg_Nw5uchqicMY0rBhZkRZwQ7kldVYcTSYeEZYmvh0ZtJFSBMvPrvltzyA8tyrJ3STT4Huce0W-D2nCq8GjDb0BVckFuIVvKwLDRPeNqlYzhU4uxB4mlxWrOKyWZXl6t0Db46hmqtEiqmQbzZIhAOsT_3Ym9edrBTnfu7RILDR75rxwzP1XPMcB3LtFsTp662KgCWwgD_6t8pqI3Qu5Y0qO2VbfNF4IP4_jdJv"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
{/* Top Badges */}
<div className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-space-xs pointer-events-none">
<span className="px-space-md py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md font-label-sm text-on-surface uppercase tracking-wider shadow-sm font-semibold">
              Veda Smartha Vidhanam · Rig &amp; Krishna Yajurveda
            </span>
<span className="px-space-md py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm uppercase tracking-wider shadow-sm font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-xs">auto_awesome</span> Highest Rated for Graha Shanti
            </span>
</div>
{/* Bottom Ribbon */}
<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/90 text-label-sm font-label-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary-fixed text-base">verified</span>
<span>Performed by Certified Vedic Acharyas | Ref: NH-2026-N9</span>
</div>
<span className="hidden sm:inline bg-white/20 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-white">45-Item Pure Samagri Included</span>
</div>
</div>
{/* Title, Philosophy & Editorial Header */}
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-sm text-primary font-label-sm uppercase tracking-widest font-semibold">
<span>Planetary Harmony &amp; Dosha Nivarana</span>
<span>·</span>
<span>Bodhayana &amp; Shaunaka Prayoga Vidhanam</span>
</div>
<h1 className="font-display-hero text-display-hero text-on-surface tracking-tight">
            Navagraha Homam &amp; Graha Shanti
          </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mt-space-xs">
            The supreme Vedic fire ritual invoking the 9 celestial cosmic guardians (Navagrahas) to pacify planetary afflictions, dissolve Sade Sati, Kuja (Manglik) &amp; Rahu-Ketu doshas, align your Janma Nakshatra, and usher enduring health, career stability, and spiritual tranquility into your life.
          </p>
</div>
{/* Ritual Quick Specs Matrix (6 Bento Cards) */}
<div className="grid grid-cols-2 sm:grid-cols-3 gap-space-md">
<div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs text-primary">
<span className="material-symbols-outlined text-lg">schedule</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-medium">Duration</span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface">2.5 – 3.0 Hours</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Morning Brahma or Surya Hora</span>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs text-primary">
<span className="material-symbols-outlined text-lg">group</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-medium">Priesthood</span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface">1 Acharya + 1 Sahaya</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Dual Purohit Vedic arrangement</span>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs text-primary">
<span className="material-symbols-outlined text-lg">calendar_month</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-medium">Occasions</span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface">Nakshatra / Amavasya</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Also Sundays or planetary transits</span>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs text-primary">
<span className="material-symbols-outlined text-lg">translate</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-medium">Chanting</span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface">Telugu / Sanskrit</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Kannada &amp; English briefings</span>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs text-primary">
<span className="material-symbols-outlined text-lg">local_fire_department</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-medium">Altar Setup</span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface">Copper Kunda</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">3x3 Mandala + floor heat shield</span>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs text-primary">
<span className="material-symbols-outlined text-lg">inventory_2</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-medium">Samagri Kit</span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface">45 Inclusions</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">9 Samidhas &amp; hermetic A2 ghee</span>
</div>
</div>
{/* Astrological Compass & Kundali Checker Banner */}
<div className="p-space-lg rounded-2xl bg-secondary-fixed/40 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-2xl">explore</span>
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-surface">Unsure of your running Mahadasha or Antardasha?</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Our Asthana Siddhanti calculates your natal planetary positions &amp; optimal hora without charge.</p>
</div>
</div>
<button className="px-space-md py-2.5 rounded-full bg-surface-container-lowest text-on-surface hover:text-primary font-label-md text-label-md shadow-sm transition-all whitespace-nowrap flex items-center gap-1 font-semibold">
            Verify Janma Kundali <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
</div>
{/* Right Column: Sticky Reservation & Booking Card */}
<div className="lg:col-span-5 sticky top-24">
<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-xl flex flex-col gap-space-lg">
{/* Pricing Block */}
<div className="flex flex-col gap-space-xs pb-space-md">
<div className="flex items-center justify-between">
<div className="flex items-baseline gap-space-xs">
<span className="font-display-hero text-display-hero font-bold text-on-surface">₹ 5,800</span>
<span className="font-body-lg text-body-lg text-on-surface-variant line-through">₹ 7,200</span>
</div>
<span className="px-space-sm py-1 rounded-full bg-secondary-container font-label-sm text-on-secondary-container uppercase tracking-wider font-semibold">
                Most Chosen for Graha Dosha
              </span>
</div>
<span className="font-label-sm text-label-sm text-primary font-semibold uppercase tracking-wider">
              All-Inclusive Consecration Package
            </span>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Covers two Vedic Acharyas' Dakshina, complete 45-item hermetic samagri kit, 9 planetary brass kalash setup, Navadhanya mandala, and 108 Ahutis per Graha.
            </p>
</div>
{/* Reservation Form */}
<form className="flex flex-col gap-space-md">
{/* Preferred Date */}
<div className="flex flex-col gap-1">
<label className="font-label-md text-label-md text-on-surface-variant font-medium flex items-center justify-between">
<span>Preferred Muhurtham Date</span>
<span className="text-primary font-label-sm">Upcoming Ravi / Shani Trayodashi</span>
</label>
<div className="relative">
<input className="w-full h-12 px-space-md rounded-lg bg-surface-container-low text-on-surface font-body-md focus:outline-none focus:bg-surface-container-lowest shadow-inner" type="date" defaultValue="2026-08-11"/>
<span className="material-symbols-outlined absolute right-3 top-3 pointer-events-none text-on-surface-variant">calendar_today</span>
</div>
<span className="text-[11px] font-label-sm text-on-surface-variant">Amavasya, Janma Nakshatra &amp; Graha transitions auto-highlighted</span>
</div>
{/* Hora / Auspicious Window Selector */}
<div className="flex flex-col gap-2">
<span className="font-label-md text-label-md text-on-surface-variant font-medium">Select Auspicious Hora Window</span>
<div className="grid grid-cols-1 gap-2">
<label className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container cursor-pointer flex items-start gap-space-sm transition-colors">
<input defaultChecked={true} className="mt-1 accent-primary" name="hora_slot" type="radio"/>
<div className="flex flex-col">
<span className="font-headline-sm text-sm text-on-surface font-semibold flex items-center gap-1.5">
                      Morning (Surya Hora / Brahma Muhurtham)
                      <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] uppercase font-bold tracking-wider">Optimal</span>
</span>
<span className="text-body-sm text-on-surface-variant">06:30 AM – 09:30 AM · Maximum planetary vitality &amp; peace</span>
</div>
</label>
<label className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container cursor-pointer flex items-start gap-space-sm transition-colors">
<input className="mt-1 accent-primary" name="hora_slot" type="radio"/>
<div className="flex flex-col">
<span className="font-headline-sm text-sm text-on-surface font-semibold">Abhijit Muhurtham (Midday Auspicious)</span>
<span className="text-body-sm text-on-surface-variant">11:30 AM – 02:00 PM · Ideal for business, victory &amp; removing obstacles</span>
</div>
</label>
</div>
</div>
{/* Sankalpam Purpose */}
<div className="flex flex-col gap-1">
<label className="font-label-md text-label-md text-on-surface-variant font-medium">Primary Sankalpam Purpose</label>
<select className="w-full h-12 px-space-md rounded-lg bg-surface-container-low text-on-surface font-body-md focus:outline-none focus:bg-surface-container-lowest" defaultValue="General Graha Shanti & Planetary Harmony">
<option>General Graha Shanti &amp; Planetary Harmony</option>
<option>Sade Sati / Shani Dasha Nivarana</option>
<option>Kuja (Manglik) Dosha Shanti &amp; Vivaha Delay Removal</option>
<option>Rahu-Ketu Transit Shanti &amp; Sarpa Dosha</option>
<option>Career, Financial Stagnation &amp; Health Obstacle Removal</option>
</select>
</div>
{/* Trust Checkpoints */}
<div className="flex flex-col gap-2 pt-2 font-body-sm text-body-sm text-on-surface">
<div className="flex items-center gap-space-xs text-xs">
<span className="material-symbols-outlined text-emerald-700 text-sm">check_circle</span>
<span>2 Vedic Acharyas arrive with pristine 45-item kit &amp; insulated heat shield</span>
</div>
<div className="flex items-center gap-space-xs text-xs">
<span className="material-symbols-outlined text-emerald-700 text-sm">check_circle</span>
<span>Authentic 9-Graha Mandala setup with specific 9 sacred samidha woods</span>
</div>
<div className="flex items-center gap-space-xs text-xs">
<span className="material-symbols-outlined text-emerald-700 text-sm">check_circle</span>
<span>100% smoke-controlled apartment friendly ritual with pure A2 cow ghee</span>
</div>
</div>
{/* Primary CTAs */}
<div className="flex flex-col gap-space-xs pt-space-xs">
<button className="w-full py-3.5 rounded-full bg-primary-container hover:bg-primary text-on-primary font-headline-sm text-headline-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2">
<span>Reserve Auspicious Muhurtham</span>
<span className="material-symbols-outlined text-lg">arrow_forward</span>
</button>
<button className="w-full py-2.5 rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high font-label-md text-label-md flex items-center justify-center gap-2 transition-colors" type="button">
<span className="material-symbols-outlined text-emerald-600 text-base">chat</span>
<span>Speak with Acharya on WhatsApp</span>
</button>
</div>
</form>
{/* Punctuality & Guarantee Footer */}
<div className="p-space-sm rounded-xl bg-surface-container-low text-[12px] text-on-surface-variant flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-lg shrink-0">verified_user</span>
<p><strong>Punctuality Commitment:</strong> Acharya arrives 30 mins prior. Zero hidden dakshina demand guarantee. Free rescheduling up to 24 hrs prior.</p>
</div>
</div>
</div>
</div>
</section>
{/* Horizontal Anchor Navigation Bar */}
<section className="sticky top-20 z-40 bg-surface-container-lowest/95 backdrop-blur-md shadow-sm">
<div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 py-3 overflow-x-auto no-scrollbar flex items-center gap-space-xs text-label-md font-label-md whitespace-nowrap">
<a className="px-space-md py-1.5 rounded-full bg-primary-container text-on-primary font-semibold transition-colors" href="#deities">The 9 Celestial Deities</a>
<a className="px-space-md py-1.5 rounded-full text-on-surface-variant hover:bg-surface-container transition-colors" href="#stages">7 Sacred Ritual Stages</a>
<a className="px-space-md py-1.5 rounded-full text-on-surface-variant hover:bg-surface-container transition-colors" href="#samagri">9 Sacred Samidhas &amp; Kit</a>
<a className="px-space-md py-1.5 rounded-full text-on-surface-variant hover:bg-surface-container transition-colors" href="#apartment-safety">Apartment &amp; Smoke Safety</a>
<a className="px-space-md py-1.5 rounded-full text-on-surface-variant hover:bg-surface-container transition-colors" href="#family-ready">What Family Keeps Ready</a>
<a className="px-space-md py-1.5 rounded-full text-on-surface-variant hover:bg-surface-container transition-colors" href="#acharyas">Vedic Acharya Lineage</a>
<a className="px-space-md py-1.5 rounded-full text-on-surface-variant hover:bg-surface-container transition-colors" href="#faq">Devotee FAQs</a>
</div>
</section>
{/* Section 1: The 9 Celestial Deities & Navadhanya Mandala (Cosmic 3x3 Grid) */}
<section className="w-full bg-surface-container-low/50 py-space-xl" id="deities">
<div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 flex flex-col gap-space-xl">
<div className="flex flex-col gap-space-xs max-w-3xl">
<span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-semibold">Vedic Cosmology &amp; Harmony · The 9 Celestial Guardians</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Understanding the Navagrahas &amp; Their Sacred Elements</h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          Each planetary deity governs specific facets of karmic destiny, biological vigor, and mental composure. In our Vedic ritual, each Graha is invoked with their consecrated grain (Dhanya), sacred tree twig (Samidha), cardinal direction, and planetary mantra.
        </p>
</div>
{/* 3x3 Cosmic Navagraha Matrix */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
{/* 1. Surya */}
<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-semibold tracking-wide">East / Center · Sun</span>
<span className="font-label-sm text-primary font-semibold">108 Ahutis</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">Surya Bhagavan</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Bestows vitality, leadership, soul clarity, fatherly blessing, and physical immunity.</p>
</div>
<div className="flex flex-col gap-1 text-xs font-label-md text-on-surface-variant bg-surface-container-low p-space-sm rounded-lg">
<div><strong className="text-on-surface">Grain (Dhanya):</strong> Wheat (Godhuma)</div>
<div><strong className="text-on-surface">Sacred Samidha:</strong> Arka Wood (Calotropis)</div>
<div><strong className="text-on-surface">Gem / Color:</strong> Ruby / Deep Crimson</div>
</div>
</div>
{/* 2. Chandra */}
<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm uppercase px-2 py-0.5 rounded bg-stone-100 text-stone-800 font-semibold tracking-wide">Southeast · Moon</span>
<span className="font-label-sm text-primary font-semibold">108 Ahutis</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">Chandra Deva</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Bestows psychological calmness, emotional intelligence, serene sleep, and maternal grace.</p>
</div>
<div className="flex flex-col gap-1 text-xs font-label-md text-on-surface-variant bg-surface-container-low p-space-sm rounded-lg">
<div><strong className="text-on-surface">Grain (Dhanya):</strong> Paddy / Raw Rice (Tandula)</div>
<div><strong className="text-on-surface">Sacred Samidha:</strong> Palasha Wood (Flame of Forest)</div>
<div><strong className="text-on-surface">Gem / Color:</strong> Natural Pearl / Pure White</div>
</div>
</div>
{/* 3. Mangala */}
<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md">
<div className="flex items-center justify-between">
<span className="font-label-sm uppercase px-2 py-0.5 rounded bg-red-100 text-red-900 font-semibold tracking-wide">South · Mars</span>
<span className="font-label-sm text-primary font-semibold">Kuja Shanti</span>
</div>
<div className="flex flex-col gap-space-xs">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Mangala (Angaraka)</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Dissolves Kuja (Manglik) dosha, pacifies anger, grants land ownership and fiery courage.</p>
</div>
<div className="flex flex-col gap-1 text-xs font-label-md text-on-surface-variant bg-surface-container-low p-space-sm rounded-lg">
<div><strong className="text-on-surface">Grain (Dhanya):</strong> Toor Dal / Red Gram (Adhaka)</div>
<div><strong className="text-on-surface">Sacred Samidha:</strong> Khadira Wood (Acacia)</div>
<div><strong className="text-on-surface">Gem / Color:</strong> Red Coral / Vermilion</div>
</div>
</div>
{/* 4. Budha */}
<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 font-semibold tracking-wide">Northeast · Mercury</span>
<span className="font-label-sm text-primary font-semibold">Buddhi Siddhi</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">Budha Graha</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Enhances business negotiations, analytical intellect, speech eloquence, and academic triumphs.</p>
</div>
<div className="flex flex-col gap-1 text-xs font-label-md text-on-surface-variant bg-surface-container-low p-space-sm rounded-lg">
<div><strong className="text-on-surface">Grain (Dhanya):</strong> Green Gram (Moong / Mudga)</div>
<div><strong className="text-on-surface">Sacred Samidha:</strong> Apamarga Wood</div>
<div><strong className="text-on-surface">Gem / Color:</strong> Emerald / Sacred Green</div>
</div>
</div>
{/* 5. Brihaspati / Guru */}
<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm uppercase px-2 py-0.5 rounded bg-yellow-100 text-yellow-900 font-semibold tracking-wide">North · Jupiter</span>
<span className="font-label-sm text-primary font-semibold">Guru Kripa</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">Brihaspati (Guru)</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Bestows spiritual wisdom, virtuous progeny, high reputation, wealth, and Guru guidance.</p>
</div>
<div className="flex flex-col gap-1 text-xs font-label-md text-on-surface-variant bg-surface-container-low p-space-sm rounded-lg">
<div><strong className="text-on-surface">Grain (Dhanya):</strong> Bengal Gram (Chana Dal)</div>
<div><strong className="text-on-surface">Sacred Samidha:</strong> Ashwattha (Peepal Wood)</div>
<div><strong className="text-on-surface">Gem / Color:</strong> Yellow Sapphire / Gold</div>
</div>
</div>
{/* 6. Shukra */}
<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm uppercase px-2 py-0.5 rounded bg-rose-100 text-rose-900 font-semibold tracking-wide">East · Venus</span>
<span className="font-label-sm text-primary font-semibold">Bhoga &amp; Vivaha</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">Shukra Deva</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Harmonizes marital ties, fosters artistic refinement, comforts, and material opulence.</p>
</div>
<div className="flex flex-col gap-1 text-xs font-label-md text-on-surface-variant bg-surface-container-low p-space-sm rounded-lg">
<div><strong className="text-on-surface">Grain (Dhanya):</strong> White Field Beans (Kulattha)</div>
<div><strong className="text-on-surface">Sacred Samidha:</strong> Audumbara (Fig / Atti Wood)</div>
<div><strong className="text-on-surface">Gem / Color:</strong> Diamond / Lustrous White</div>
</div>
</div>
{/* 7. Shani */}
<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm uppercase px-2 py-0.5 rounded bg-slate-200 text-slate-800 font-semibold tracking-wide">West · Saturn</span>
<span className="font-label-sm text-primary font-semibold">Sade Sati Shanti</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">Shani Bhagavan</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Pacifies Sade Sati, Kantaka Shani, instills dharmic discipline, dissolves prolonged obstacles.</p>
</div>
<div className="flex flex-col gap-1 text-xs font-label-md text-on-surface-variant bg-surface-container-low p-space-sm rounded-lg">
<div><strong className="text-on-surface">Grain (Dhanya):</strong> Black Sesame (Krishna Tila)</div>
<div><strong className="text-on-surface">Sacred Samidha:</strong> Shami Wood (Prosopis)</div>
<div><strong className="text-on-surface">Gem / Color:</strong> Blue Sapphire / Deep Indigo</div>
</div>
</div>
{/* 8. Rahu */}
<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm uppercase px-2 py-0.5 rounded bg-zinc-200 text-zinc-900 font-semibold tracking-wide">Southwest · North Node</span>
<span className="font-label-sm text-primary font-semibold">Sarpa Dosha Nivarana</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">Rahu Graha</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Neutralizes psychological anxieties, sudden mishaps, foreign travel impediments &amp; illusions.</p>
</div>
<div className="flex flex-col gap-1 text-xs font-label-md text-on-surface-variant bg-surface-container-low p-space-sm rounded-lg">
<div><strong className="text-on-surface">Grain (Dhanya):</strong> Black Gram / Urad Dal (Masha)</div>
<div><strong className="text-on-surface">Sacred Samidha:</strong> Fresh Durva Grass</div>
<div><strong className="text-on-surface">Gem / Color:</strong> Gomedha (Hessonite) / Smoky Ash</div>
</div>
</div>
{/* 9. Ketu */}
<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm uppercase px-2 py-0.5 rounded bg-orange-100 text-orange-950 font-semibold tracking-wide">Northwest · South Node</span>
<span className="font-label-sm text-primary font-semibold">Moksha &amp; Healing</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">Ketu Graha</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Bestows spiritual perception, psychic immunity, cures mysterious physical ailments, liberates.</p>
</div>
<div className="flex flex-col gap-1 text-xs font-label-md text-on-surface-variant bg-surface-container-low p-space-sm rounded-lg">
<div><strong className="text-on-surface">Grain (Dhanya):</strong> Horsegram (Kollu / Kulattha)</div>
<div><strong className="text-on-surface">Sacred Samidha:</strong> Consecrated Kusha Grass</div>
<div><strong className="text-on-surface">Gem / Color:</strong> Cat's Eye (Vaidurya) / Multi-hued</div>
</div>
</div>
</div>
</div>
</section>
{/* Section 2: The 7 Sacred Stages of Navagraha Homam */}
<section className="w-full py-space-xl" id="stages">
<div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 flex flex-col gap-space-xl">
<div className="flex flex-col gap-space-xs max-w-3xl">
<span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-semibold">Vedic Sequence &amp; Vidhanam</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">The 7 Sacred Stages of Navagraha Homam</h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          Conducted systematically according to Bodhayana and Shaunaka Grihya Sutras. Every mantra chanted with precise phonetic enunciation (Udatta, Anudatta, Swarita) and explained in lucid Telugu or your preferred language.
        </p>
</div>
{/* 7 Visual Chapter Flow */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
{/* 01 */}
<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-primary text-xl font-bold font-display-hero">01</span>
<span className="font-label-sm text-label-sm px-2.5 py-0.5 rounded-full bg-surface-container-low text-on-surface-variant">~25 Mins</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Maha Sankalpam &amp; Kalasha Avahana</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Articulating the 9 Gotrams, Janma Rashi, and Janma Nakshatras of every family member to orient cosmic intention towards ancestral and planetary protection.
            </p>
</div>
<div className="font-label-sm text-xs text-primary font-semibold flex items-center gap-1">
<span>Sankalpa Patham Verified</span>
</div>
</div>
{/* 02 */}
<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-primary text-xl font-bold font-display-hero">02</span>
<span className="font-label-sm text-label-sm px-2.5 py-0.5 rounded-full bg-surface-container-low text-on-surface-variant">~25 Mins</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Navagraha Mandala Prathistapana</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Geometric installation of the 9 sacred grains in the 3x3 cosmic mandala layout, seating the consecrated brass kalash pots with coconuts and sacred threads.
            </p>
</div>
<div className="font-label-sm text-xs text-primary font-semibold flex items-center gap-1">
<span>Ashta Dikpalaka Avahana</span>
</div>
</div>
{/* 03 */}
<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-primary text-xl font-bold font-display-hero">03</span>
<span className="font-label-sm text-label-sm px-2.5 py-0.5 rounded-full bg-surface-container-low text-on-surface-variant">~30 Mins</span>
</div>
<div className="flex flex-col gap-space-xs">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Navagraha Gayatri &amp; Bija Mantra Japa</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Recitation of the ancient Vedic Suktams and 108 Bija Mantras specific to each of the nine deities to awaken the consecrated kalasha theertham.
            </p>
</div>
<div className="font-label-sm text-xs text-primary font-semibold flex items-center gap-1">
<span>Vedic Sukta Parayanam</span>
</div>
</div>
{/* 04 (Pinnacle) */}
<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-md md:col-span-2 lg:col-span-3 flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg">
<div className="flex flex-col gap-space-xs max-w-2xl">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-primary text-2xl font-bold font-display-hero">04</span>
<span className="px-2.5 py-0.5 rounded-full bg-primary-container text-on-primary font-label-sm font-semibold uppercase">Pinnacle Stage · ~35 Mins</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface">Agni Prathistapana &amp; 9 Sacred Samidha Ahutis</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Igniting the consecrated sacred Agni inside the pure copper kunda. Performing sequential 108 oblations with each Graha’s designated sacred tree wood (Arka, Palasha, Khadira, Apamarga, Ashwattha, Audumbara, Shami, Durva, Kusha) soaked in pure Gir cow A2 ghee and honey.
            </p>
</div>
<div className="flex flex-col gap-2 shrink-0 bg-surface-container-low p-space-md rounded-xl w-full md:w-auto">
<div className="flex items-center gap-2 text-xs font-label-md text-on-surface font-semibold">
<span className="material-symbols-outlined text-primary text-base">check_circle</span>
<span>100% Smoke Safe Farm Samidhas</span>
</div>
<div className="flex items-center gap-2 text-xs font-label-md text-on-surface font-semibold">
<span className="material-symbols-outlined text-primary text-base">check_circle</span>
<span>Individual Family Ahuti Participation</span>
</div>
<div className="flex items-center gap-2 text-xs font-label-md text-on-surface font-semibold">
<span className="material-symbols-outlined text-primary text-base">check_circle</span>
<span>Thermal Insulation Floor Barrier</span>
</div>
</div>
</div>
{/* 05 */}
<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-primary text-xl font-bold font-display-hero">05</span>
<span className="font-label-sm text-label-sm px-2.5 py-0.5 rounded-full bg-surface-container-low text-on-surface-variant">~20 Mins</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Dosha Nivarana &amp; Mrityunjaya Homam</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Specialized oblations for longevity (Ayushya) and health restoration, actively pacifying malefic Dasha, Bhukti, and planetary transit afflictions.
            </p>
</div>
<div className="font-label-sm text-xs text-primary font-semibold flex items-center gap-1">
<span>Maha Mrityunjaya Ahuti</span>
</div>
</div>
{/* 06 */}
<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-primary text-xl font-bold font-display-hero">06</span>
<span className="font-label-sm text-label-sm px-2.5 py-0.5 rounded-full bg-surface-container-low text-on-surface-variant">~15 Mins</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Maha Purnahuti &amp; Vasordhara</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Offering consecrated silk vastram, dried coconut halves, fragrant spices, and pouring an uninterrupted stream of A2 cow ghee accompanied by Chamaka Prashna chanting.
            </p>
</div>
<div className="font-label-sm text-xs text-primary font-semibold flex items-center gap-1">
<span>Vasordhara Dhara Pratigraha</span>
</div>
</div>
{/* 07 */}
<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-primary text-xl font-bold font-display-hero">07</span>
<span className="font-label-sm text-label-sm px-2.5 py-0.5 rounded-full bg-surface-container-low text-on-surface-variant">~20 Mins</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Graha Raksha Bhasma &amp; Ashirvachanam</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Collecting the cooling planetary Agni bhasma (protective ash), distributing the consecrated kalasha theertham, and Vedic blessings by both Acharyas.
            </p>
</div>
<div className="font-label-sm text-xs text-primary font-semibold flex items-center gap-1">
<span>Raksha Bandhanam &amp; Prasada</span>
</div>
</div>
</div>
</div>
</section>
{/* Section 3: 45-Item Curated Samagri Kit & Signature 9 Samidhas */}
<section className="w-full bg-surface-container-low/50 py-space-xl" id="samagri">
<div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 flex flex-col gap-space-xl">
{/* Highlight Banner */}
<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg">
<div className="flex flex-col gap-space-xs max-w-2xl">
<span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-semibold">The Signature Offering</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Authentic 9 Sacred Samidhas (Planetary Woods)</h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            In Navagraha Homam, ordinary firewood is strictly forbidden. Dandalu Ayyagaru procures authentic, farm-harvested twigs corresponding to each celestial body: Arka, Palasha, Khadira, Apamarga, Ashwattha, Audumbara, Shami, Durva, and Kusha.
          </p>
<div className="flex flex-wrap gap-2 pt-2">
<span className="px-3 py-1 rounded-full bg-surface-container font-label-sm text-on-surface font-semibold">100% Naturally Dried</span>
<span className="px-3 py-1 rounded-full bg-surface-container font-label-sm text-on-surface font-semibold">Zero Chemical Preservatives</span>
<span className="px-3 py-1 rounded-full bg-surface-container font-label-sm text-on-surface font-semibold">Hand-Sorted Vedic Samidha</span>
<span className="px-3 py-1 rounded-full bg-surface-container font-label-sm text-on-surface font-semibold">Bhimseni Camphor</span>
</div>
</div>
<div className="w-full md:w-auto p-space-md rounded-xl bg-surface-container-low flex flex-col gap-2 shrink-0">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-xl">spa</span>
<span className="font-headline-sm text-sm text-on-surface">Pure A2 Cow Ghee (1.2 kg)</span>
</div>
<p className="text-xs text-on-surface-variant max-w-xs">Laboratory-tested bilona ghee produced from indigenous grass-fed cows. Ensures non-pungent, sweet-smelling homam atmosphere.</p>
</div>
</div>
{/* 4 Category Breakdown Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
{/* Cat 1 */}
<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
<div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
<span className="material-symbols-outlined">forest</span>
</div>
<div className="flex flex-col gap-1">
<h4 className="font-headline-sm text-headline-sm text-on-surface">Sacred Woods &amp; Havan Dravya</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">9 Samidhas (Arka to Kusha), dry cow dung cakes, pure black til, honey, dried lotus seeds (kamalgatta), and 1.2 kg pure A2 cow ghee.</p>
</div>
</div>
{/* Cat 2 */}
<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
<div className="w-10 h-10 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center">
<span className="material-symbols-outlined">grain</span>
</div>
<div className="flex flex-col gap-1">
<h4 className="font-headline-sm text-headline-sm text-on-surface">Navadhanya Offerings</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">The 9 unpolished sacred grains (Godhuma, Tandula, Adhaka, Mudga, Chana, Kulattha, Tila, Masha, Kollu) pre-portioned for mandala installation.</p>
</div>
</div>
{/* Cat 3 */}
<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
<div className="w-10 h-10 rounded-xl bg-primary-container/20 text-primary flex items-center justify-center">
<span className="material-symbols-outlined">local_florist</span>
</div>
<div className="flex flex-col gap-1">
<h4 className="font-headline-sm text-headline-sm text-on-surface">Sanctified Powders</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Bhimseni Pacha Karpooram, Sandalwood paste, Kasturi turmeric, sacred kumkum, unbroken Akshata, and fragrant Guggulu dhoop cones.</p>
</div>
</div>
{/* Cat 4 */}
<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
<div className="w-10 h-10 rounded-xl bg-tertiary-container/30 text-on-surface flex items-center justify-center">
<span className="material-symbols-outlined">table_restaurant</span>
</div>
<div className="flex flex-col gap-1">
<h4 className="font-headline-sm text-headline-sm text-on-surface">Brass &amp; Hardware Kit</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Pure copper havan kund, 9 brass kalash pots with lids, wooden ritual ladles (Sruva &amp; Sruk), silk purnahuti cloth, and floor heat shields.</p>
</div>
</div>
</div>
</div>
</section>
{/* Section 4: Apartment & Villa Friendly Protocol */}
<section className="w-full py-space-xl" id="apartment-safety">
<div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10">
<div className="p-space-xl rounded-2xl bg-surface-container-low shadow-sm flex flex-col lg:flex-row items-center justify-between gap-space-xl">
<div className="flex flex-col gap-space-md max-w-2xl">
<div className="flex items-center gap-space-xs text-primary font-label-sm font-semibold uppercase tracking-wider">
<span className="material-symbols-outlined text-base">apartment</span>
<span>Engineered for Modern Residences</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">100% Floor &amp; Smoke Safe for Gated Communities</h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Many urban families hesitate to book a traditional homam due to fear of optical smoke alarms and scorched Italian marble or wooden flooring. Dandalu Ayyagaru utilizes modern ceremonial engineering to protect your home.
          </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-emerald-700 text-xl mt-0.5">shield</span>
<div className="flex flex-col">
<span className="font-headline-sm text-sm text-on-surface font-semibold">Thermal Floor Shield</span>
<span className="text-body-sm text-on-surface-variant">Multi-layered aerated aluminum thermal tray placed underneath the copper kunda. Zero floor discoloration guaranteed.</span>
</div>
</div>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-emerald-700 text-xl mt-0.5">air</span>
<div className="flex flex-col">
<span className="font-headline-sm text-sm text-on-surface font-semibold">Low-Smoke Samidha Selection</span>
<span className="text-body-sm text-on-surface-variant">Kiln-dried medicinal woods generate thin, aromatic white vapor rather than acrid black soot. Temporary optical detector covers provided.</span>
</div>
</div>
</div>
</div>
<div className="w-full lg:w-80 p-space-lg rounded-2xl bg-surface-container-lowest shadow-md flex flex-col gap-space-md shrink-0">
<div className="flex items-center gap-space-sm text-emerald-700">
<span className="material-symbols-outlined text-2xl">verified</span>
<span className="font-headline-sm text-headline-sm text-on-surface">Urban Safety Guarantee</span>
</div>
<div className="flex flex-col gap-space-xs text-xs font-label-md text-on-surface-variant">
<div className="flex justify-between py-1 border-b border-surface-container-low">
<span>Marble Tile Scorch Rate</span>
<span className="font-bold text-emerald-800">0.00% Across 12,000+ Bookings</span>
</div>
<div className="flex justify-between py-1 border-b border-surface-container-low">
<span>Smoke Sensor Alarms</span>
<span className="font-bold text-emerald-800">Prevented by Acharya Protocol</span>
</div>
<div className="flex justify-between py-1">
<span>Post-Ritual Cleanliness</span>
<span className="font-bold text-emerald-800">Cleaned &amp; Packaged by Purohit</span>
</div>
</div>
<div className="text-[11px] text-on-surface-variant bg-surface-container-low p-space-sm rounded-lg">
            Acharyas carry high-temperature silicone pads, copper ash containment scoops, and eco-friendly disposal bags.
          </div>
</div>
</div>
</div>
</section>
{/* Section 5: Zero Hassle Hosting: What Family Keeps Ready (Only 3 Items) */}
<section className="w-full bg-surface-container-low/50 py-space-xl" id="family-ready">
<div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 flex flex-col gap-space-xl">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-md">
<div className="flex flex-col gap-space-xs max-w-2xl">
<span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-semibold">Zero Bazaar Hassle</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">What the Family Keeps Ready (Only 3 Items)</h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            No chaotic early morning grocery hunts or forgotten items. Dandalu Ayyagaru brings all 45 consecrated ritual elements in our hermetic kit. You only need to have these 3 simple household basics ready:
          </p>
</div>
<button className="px-space-md py-2.5 rounded-full bg-surface-container-lowest text-on-surface hover:text-primary font-label-md text-label-md shadow-sm transition-all whitespace-nowrap flex items-center gap-2 self-start font-semibold">
<span className="material-symbols-outlined text-base">download</span>
<span>Download 1-Page Checklist PDF</span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
{/* Item 1 */}
<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center font-display-hero text-lg font-bold text-primary">01</span>
<span className="material-symbols-outlined text-primary text-2xl">nutrition</span>
</div>
<div className="flex flex-col gap-1">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Fresh Flowers &amp; Fruits</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              5 Bananas, 3 Coconuts (with water &amp; tuft), 2 apples or pomegranates, and 250g seasonal loose flowers or small garlands for deity adornment.
            </p>
</div>
</div>
{/* Item 2 */}
<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center font-display-hero text-lg font-bold text-primary">02</span>
<span className="material-symbols-outlined text-primary text-2xl">light_mode</span>
</div>
<div className="flex flex-col gap-1">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Two Traditional Brass Diyas</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Two cleaned brass or copper deepams (oil lamps), cotton wicks, and lamp oil (sesame or groundnut oil) placed near the puja altar.
            </p>
</div>
</div>
{/* Item 3 */}
<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center font-display-hero text-lg font-bold text-primary">03</span>
<span className="material-symbols-outlined text-primary text-2xl">chair</span>
</div>
<div className="flex flex-col gap-1">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Floor Space &amp; Seating Mats</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              A swept clean floor area approximately 6x6 feet facing East or North, with cotton mats (asanas) or blankets for the family to comfortably sit.
            </p>
</div>
</div>
</div>
</div>
</section>
{/* Section 6: Assigned Vedic Acharya Credential */}
<section className="w-full py-space-xl" id="acharyas">
<div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 flex flex-col gap-space-xl">
<div className="flex flex-col gap-space-xs max-w-2xl">
<span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-semibold">Authentic Lineage &amp; Sastra Adhyayanam</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Led by Rigveda &amp; Krishna Yajurveda Scholars</h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          Every Acharya assigned to Navagraha Homam has completed formal Smartha Prayoga Veda Pathashala education and undergone rigorous background verification.
        </p>
</div>
<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-md flex flex-col lg:flex-row items-center gap-space-xl">
{/* Acharya Portrait */}
<div className="w-36 h-36 lg:w-44 lg:h-44 rounded-2xl overflow-hidden shrink-0 shadow-sm bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Dignified portrait of a senior South Indian Vedic Purohit dressed in traditional silk pancha with sacred vibhuti and vermilion marks, looking serene and respectful in warm sanctum lighting with soft temple architecture in the backdrop." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCll-JzPHReS4_yprzeY4lFazSYUibn51DDtfM3PXEJeYTuBs-Rpyey0KUQymuL3n-OtJxUZqF7tzFvhmT-tqQD5MrCstfwwWVkCh7VRqCt-5dLfMzJijoWXRooiu3PG3_E2_PyJ9lkZzQxk5LL-Z-VZJVTMYrSABOP-1Kyu691bHVh0i1jZ_XiGW93FXh_7oSfVs3-mgzD2aO0W8erS9E0ftFw7lYNlS85cPhjwTWT"/>
</div>
{/* Details */}
<div className="flex flex-col gap-space-sm flex-1">
<div className="flex flex-wrap items-center justify-between gap-space-xs">
<div className="flex flex-col">
<h3 className="font-headline-md text-headline-md text-on-surface">Brahmasri Venkata Rama Sharma Ghanapati</h3>
<span className="font-label-sm text-label-sm text-on-surface-variant">Chief Vedic Purohit · Bodhayana Sutra &amp; Navagraha Vidhanam Lead</span>
</div>
<span className="px-space-md py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-xs">verified</span> 22+ Years Lineage
            </span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Graduated with honours from TTD Sri Venkateswara Veda Pathashala, Tirumala. Specializes in Shakha Bheda, Navagraha Bija Japa, and Graha Shanti rituals. Fluent in delivering Sanskrit slokas with detailed word-by-word meaning explained in colloquial Telugu, Kannada, and English.
          </p>
<div className="flex flex-wrap items-center gap-2 pt-space-xs">
<span className="px-3 py-1 rounded-full bg-surface-container-low text-xs font-label-md font-semibold text-on-surface">TTD Veda Pathashala Certified</span>
<span className="px-3 py-1 rounded-full bg-surface-container-low text-xs font-label-md font-semibold text-on-surface">Police &amp; KYC Verified</span>
<span className="px-3 py-1 rounded-full bg-surface-container-low text-xs font-label-md font-semibold text-on-surface">Zero Extra Demands / Fixed Dakshina</span>
<span className="px-3 py-1 rounded-full bg-surface-container-low text-xs font-label-md font-semibold text-on-surface">Accompanied by Trained Sahaya</span>
</div>
</div>
</div>
</div>
</section>
{/* Section 7: Frequently Asked Questions (Accordion Style) */}
<section className="w-full bg-surface-container-low/50 py-space-xl" id="faq">
<div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 flex flex-col gap-space-xl">
<div className="flex flex-col gap-space-xs max-w-2xl">
<span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-semibold">Devotee Clarity</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Frequently Asked Questions</h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          Common queries answered regarding homam logistics, doshas, and family participation.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
{/* Q1 */}
<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-xs">
<h4 className="font-headline-sm text-headline-sm text-on-surface flex items-start gap-2">
<span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5">help</span>
<span>Can Navagraha Homam be safely performed inside a high-rise flat with smoke detectors?</span>
</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed pl-7">
            Yes, absolutely. Over 80% of our homams take place in multi-story apartments across Hyderabad, Bengaluru, Chennai, and Mumbai. We provide specialized thermal floor shields and bring zero-carbon, dried samidhas with pure A2 cow ghee that generate fragrant, minimal white vapor rather than heavy smoke.
          </p>
</div>
{/* Q2 */}
<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-xs">
<h4 className="font-headline-sm text-headline-sm text-on-surface flex items-start gap-2">
<span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5">help</span>
<span>How do I know which planetary dosha I have (Sade Sati, Kuja, Rahu-Ketu)?</span>
</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed pl-7">
            During booking, you can submit the birth date, time, and birthplace of your family members. Our platform Asthana Siddhanti cross-references your Janma Kundali and identifies active Mahadashas, Antardashas, and transit afflictions, ensuring the Acharya offers personalized ahutis.
          </p>
</div>
{/* Q3 */}
<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-xs">
<h4 className="font-headline-sm text-headline-sm text-on-surface flex items-start gap-2">
<span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5">help</span>
<span>Can all family members participate in offering Ahutis into the sacred Agni?</span>
</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed pl-7">
            Yes. The Karta (head of household) sits in the central seat for Sankalpam, but our Purohits invite children, elders, and spouse to offer ghee and sacred samidha sticks during the 9 Graha ahutis and the pinnacle Maha Purnahuti.
          </p>
</div>
{/* Q4 */}
<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-xs">
<h4 className="font-headline-sm text-headline-sm text-on-surface flex items-start gap-2">
<span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5">help</span>
<span>What is the best tithi or day to perform Navagraha Homam?</span>
</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed pl-7">
            While any auspicious morning (Surya Hora) is suitable, your Janma Nakshatra day, Sundays, Amavasya, Shani Trayodashi, or Graha Transit (Peyarchi / Sankranti) days are considered exceptionally potent for clearing planetary karmic blocks.
          </p>
</div>
{/* Q5 */}
<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-xs md:col-span-2">
<h4 className="font-headline-sm text-headline-sm text-on-surface flex items-start gap-2">
<span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5">help</span>
<span>What should we do with the 9 sacred grains (Navadhanyas) after the pooja?</span>
</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed pl-7">
            The consecrated grains can either be buried in potted home plants (where they sprout into auspicious green shoots representing growth and vitality) or offered to feeding birds / flowing water bodies as per the Acharya's specific guidance at the end of the ritual.
          </p>
</div>
</div>
</div>
</section>
{/* Section 8: Closing Auspicious CTA Banner */}
<section className="w-full py-space-xl">
<div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10">
<div className="p-space-xl rounded-3xl bg-gradient-to-br from-primary-container via-primary to-on-primary-fixed text-on-primary shadow-xl flex flex-col lg:flex-row items-center justify-between gap-space-lg">
<div className="flex flex-col gap-space-xs max-w-2xl text-center lg:text-left">
<span className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-widest font-semibold">Sacred Vedic Protection · Lifelong Peace</span>
<h2 className="font-display-hero text-display-hero-mobile sm:text-display-hero text-on-primary leading-tight">
            Harmonize Celestial Energies. Begin Every Milestone in Peace.
          </h2>
<p className="font-body-lg text-body-lg text-white/90 leading-relaxed mt-1">
            Panchangam verified slots fill rapidly for upcoming Ravi &amp; Shani transit muhurthams. Secure your preferred date today with certified Vedic purohits and guaranteed all-inclusive samagri.
          </p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-space-md w-full sm:w-auto shrink-0">
<a className="w-full sm:w-auto px-space-xl py-4 rounded-full bg-surface-container-lowest text-primary font-headline-sm text-headline-sm shadow-lg hover:bg-surface-container-low transition-all text-center" href="javascript:void(0)">
            Check Muhurtham Availability
          </a>
<a className="w-full sm:w-auto px-space-lg py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-label-md text-label-md transition-all text-center backdrop-blur-sm" href="javascript:void(0)">
            Talk to Concierge
          </a>
</div>
</div>
</div>
</section>
</div>
    </main>
  );
}
