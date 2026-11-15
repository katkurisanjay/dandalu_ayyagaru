'use client';

import { useEffect } from 'react';
// Auto-converted from prototype: dandalu_ayyagaru_gruha_pravesham_pooja_detail
// Route: /poojas/gruha-pravesham

export default function Page() {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
tailwind.config = { darkMode: "class", theme: { extend: { "colors": { "error-container": "#ffdad6", "on-tertiary-fixed": "#1e1b15", "surface-variant": "#e5e2e1", "surface-container-lowest": "#ffffff", "tertiary-fixed": "#e9e1d8", "outline-variant": "#e0c0b1", "on-surface": "#1c1b1b", "outline": "#8c7164", "secondary-container": "#ffce51", "on-error": "#ffffff", "on-surface-variant": "#584237", "surface-container-high": "#eae7e7", "primary": "#9d4300", "on-secondary": "#ffffff", "background": "#fcf9f8", "secondary-fixed-dim": "#f0c044", "inverse-on-surface": "#f3f0ef", "on-secondary-container": "#735700", "primary-fixed-dim": "#ffb690", "on-tertiary-fixed-variant": "#4a463f", "on-primary": "#ffffff", "on-primary-fixed": "#341100", "on-secondary-fixed": "#251a00", "tertiary-fixed-dim": "#ccc5bc", "on-secondary-fixed-variant": "#5a4300", "on-error-container": "#93000a", "on-primary-container": "#582200", "on-background": "#1c1b1b", "on-tertiary": "#ffffff", "surface-tint": "#9d4300", "inverse-surface": "#313030", "surface-bright": "#fcf9f8", "surface-dim": "#dcd9d9", "secondary": "#775a00", "primary-fixed": "#ffdbca", "tertiary-container": "#a09a91", "surface-container": "#f0eded", "on-tertiary-container": "#36322c", "inverse-primary": "#ffb690", "surface": "#fcf9f8", "on-primary-fixed-variant": "#783200", "error": "#ba1a1a", "primary-container": "#f97316", "surface-container-highest": "#e5e2e1", "tertiary": "#625e56", "secondary-fixed": "#ffdf98", "surface-container-low": "#f6f3f2" }, "borderRadius": { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" }, "spacing": { "gutter-desktop": "2rem", "space-md": "1rem", "space-xs": "0.25rem", "gutter": "1.5rem", "space-lg": "1.5rem", "margin-desktop": "3rem", "margin": "1.5rem", "space-sm": "0.5rem", "space-xl": "2.5rem" }, "fontFamily": { "headline-sm": [ "Manrope" ], "label-sm": [ "Inter" ], "body-lg": [ "Inter" ], "display-hero": [ "Manrope" ], "headline-lg": [ "Manrope" ], "label-md": [ "Inter" ], "headline-lg-mobile": [ "Manrope" ], "body-md": [ "Inter" ], "headline-md": [ "Manrope" ], "display-hero-mobile": [ "Manrope" ], "body-sm": [ "Inter" ] }, "fontSize": { "headline-sm": [ "18px", { "lineHeight": "24px", "letterSpacing": "-0.01em", "fontWeight": "600" } ], "label-sm": [ "11px", { "lineHeight": "14px", "letterSpacing": "0.04em", "fontWeight": "600" } ], "body-lg": [ "16px", { "lineHeight": "26px", "letterSpacing": "-0.01em", "fontWeight": "400" } ], "display-hero": [ "48px", { "lineHeight": "56px", "letterSpacing": "-0.03em", "fontWeight": "600" } ], "headline-lg": [ "32px", { "lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "600" } ], "label-md": [ "13px", { "lineHeight": "16px", "letterSpacing": "0.01em", "fontWeight": "500" } ], "headline-lg-mobile": [ "24px", { "lineHeight": "32px", "letterSpacing": "-0.015em", "fontWeight": "600" } ], "body-md": [ "14px", { "lineHeight": "22px", "letterSpacing": "0em", "fontWeight": "400" } ], "headline-md": [ "22px", { "lineHeight": "28px", "letterSpacing": "-0.015em", "fontWeight": "600" } ], "display-hero-mobile": [ "32px", { "lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "600" } ], "body-sm": [ "13px", { "lineHeight": "18px", "letterSpacing": "0em", "fontWeight": "400" } ] } } } };

  // Simple micro-interaction for date change notification
  const dateInput = document.querySelector('input[type="date"]');
  if (dateInput) {
    dateInput.addEventListener('change', (e) => {
      const selected = new Date(e.target.value);
      const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
      console.log('Selected Muhurtham Date:', selected.toLocaleDateString(undefined, options));
    });
  }

`;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <main className="w-full pt-16 sm:pt-20 bg-surface min-h-[calc(100dvh-4rem)] sm:min-h-[calc(100dvh-5rem)]">
<div className="flex flex-col w-full">
{/* Micro Top Context / Breadcrumb Bar */}
<section className="w-full bg-surface-container-low/70 border-b border-[#E7E5E4]">
<div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 py-3 flex flex-wrap items-center justify-between gap-3">
<nav className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md">
<a className="hover:text-primary transition-colors" href="/poojas">Poojas</a>
<span className="material-symbols-outlined text-xs text-outline/60">chevron_right</span>
<span className="hover:text-primary transition-colors cursor-pointer">Sanctification &amp; Vastu</span>
<span className="material-symbols-outlined text-xs text-outline/60">chevron_right</span>
<span className="text-on-surface font-semibold">Gruha Pravesham</span>
</nav>
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest border border-[#E7E5E4] shadow-sm">
<span className="material-symbols-outlined text-secondary text-sm">auto_awesome</span>
<span className="font-label-sm text-label-sm uppercase tracking-wide text-on-surface font-semibold">Panchangam Verified Lineage</span>
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
</div>
</div>
</section>
{/* Hero & Executive Reservation Showcase */}
<section className="w-full py-8 md:py-12 bg-surface">
<div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
{/* Left 7 Cols: Ritual Presentation */}
<div className="lg:col-span-7 flex flex-col gap-6">
<div className="relative w-full rounded-[20px] overflow-hidden bg-surface-container shadow-md group">
<img className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-[1.02]" data-alt="Vedic Hindu housewarming Gruha Pravesham ceremony inside a modern living room. A consecrated brass kalash with coconut and mango leaves sits in the center atop an intricate rangoli kolam of yellow and orange flower petals. In the background, family members dressed in silk sarees and traditional dhotis sit with reverence around an auspicious brick havan kund emitting gentle holy smoke. Twin brass standing samai lamps glow with lit wicks." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKp-5R6E-H0Dfgf1n7e-QpC4u6qgYxYpL1pL7P9kLmNjQwRyStUvWxYzAbCdEfGhIjKlMnOpQrStUvWxYzAbCdEfGhIjKlMnOpQrStUv"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
<div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-md border border-white/40 shadow-sm">
<span className="material-symbols-outlined text-primary text-sm">temple_hindu</span>
<span className="font-label-sm text-label-sm font-semibold tracking-wider text-on-surface uppercase">Smartha Vidhanam · Rig &amp; Krishna Yajurveda</span>
</div>
<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
<div className="flex items-center gap-2 text-xs font-label-md">
<span className="material-symbols-outlined text-secondary-container text-base">verified</span>
<span>Performed by Veda Murthy Dandalu Ayyagaru</span>
</div>
<span className="px-2.5 py-1 rounded-md bg-black/40 backdrop-blur-sm text-[11px] font-mono tracking-wider">REF: GP-2025-V7</span>
</div>
</div>
{/* Title Block */}
<div className="flex flex-col gap-3">
<div className="inline-flex items-center gap-2">
<span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm uppercase tracking-wider font-semibold">Housewarming &amp; Sanctification</span>
<span className="text-on-surface-variant font-label-sm text-label-sm">· Vastu Dosha Nivarana</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              Gruha Pravesham &amp; Vastu Shanti Ritual
            </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              A sacred Vedic consecration invoking Mahalakshmi, pacifying the 8 guardian directions (Ashta Dikpalakas), and cleansing architectural residual doshas to anchor continuous peace, wellbeing, and prosperity within your new home.
            </p>
</div>
{/* Micro Spec Grid (Bento mini-cards) */}
<div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
<div className="p-3.5 rounded-xl bg-surface-container-low border border-[#E7E5E4] flex flex-col gap-1">
<div className="flex items-center gap-1.5 text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-base">schedule</span>
<span className="font-label-sm text-label-sm uppercase">Duration</span>
</div>
<p className="font-headline-sm text-[16px] text-on-surface">3.5 – 4.5 Hours</p>
<span className="text-[11px] text-on-surface-variant">Brahma / Ushas Muhurtham</span>
</div>
<div className="p-3.5 rounded-xl bg-surface-container-low border border-[#E7E5E4] flex flex-col gap-1">
<div className="flex items-center gap-1.5 text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-base">group</span>
<span className="font-label-sm text-label-sm uppercase">Priesthood</span>
</div>
<p className="font-headline-sm text-[16px] text-on-surface">1 Chief + 1 Sahaya</p>
<span className="text-[11px] text-on-surface-variant">Two Certified Acharyas</span>
</div>
<div className="p-3.5 rounded-xl bg-surface-container-low border border-[#E7E5E4] flex flex-col gap-1">
<div className="flex items-center gap-1.5 text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-base">calendar_month</span>
<span className="font-label-sm text-label-sm uppercase">Tithi Alignments</span>
</div>
<p className="font-headline-sm text-[16px] text-on-surface">Shukla Paksha</p>
<span className="text-[11px] text-on-surface-variant">Vidiya, Tadiya, Panchami</span>
</div>
<div className="p-3.5 rounded-xl bg-surface-container-low border border-[#E7E5E4] flex flex-col gap-1">
<div className="flex items-center gap-1.5 text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-base">translate</span>
<span className="font-label-sm text-label-sm uppercase">Recitation Tongue</span>
</div>
<p className="font-headline-sm text-[16px] text-on-surface">Telugu &amp; Sanskrit</p>
<span className="text-[11px] text-on-surface-variant">Tamil / Kannada on request</span>
</div>
<div className="p-3.5 rounded-xl bg-surface-container-low border border-[#E7E5E4] flex flex-col gap-1">
<div className="flex items-center gap-1.5 text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-base">local_fire_department</span>
<span className="font-label-sm text-label-sm uppercase">Homa Kunda</span>
</div>
<p className="font-headline-sm text-[16px] text-on-surface">Copper Kunda</p>
<span className="text-[11px] text-on-surface-variant">Floor protection pad provided</span>
</div>
<div className="p-3.5 rounded-xl bg-surface-container-low border border-[#E7E5E4] flex flex-col gap-1">
<div className="flex items-center gap-1.5 text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-base">inventory_2</span>
<span className="font-label-sm text-label-sm uppercase">Samagri Kit</span>
</div>
<p className="font-headline-sm text-[16px] text-on-surface">42 Pure Items</p>
<span className="text-[11px] text-on-surface-variant">A2 Gir Ghee + Havan herbs</span>
</div>
</div>
{/* Secondary Advisory Row */}
<div className="p-4 rounded-xl bg-surface-container-lowest border border-[#E7E5E4] flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-secondary-container/20 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-secondary">support_agent</span>
</div>
<div>
<p className="font-headline-sm text-[15px] text-on-surface">Need Gotram &amp; Janma Nakshatra checking?</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Our Asthana Siddhanti calculates your zero-conflict auspicious entry window.</p>
</div>
</div>
<button className="shrink-0 px-4 py-2 rounded-full border border-[#E7E5E4] hover:bg-surface-container-low font-label-md text-label-md text-on-surface transition-colors flex items-center gap-1.5">
<span>Free Astro Verification</span>
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
</div>
{/* Right 5 Cols: Sticky Booking Dossier Card */}
<div className="lg:col-span-5 relative">
<div className="sticky top-24 bg-surface-container-lowest rounded-[20px] p-6 border border-[#E7E5E4] shadow-[0_8px_30px_rgba(23,23,23,0.05)] flex flex-col gap-5">
<div className="flex items-start justify-between pb-4 border-b border-[#E7E5E4]">
<div>
<span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">All-Inclusive Consecration</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-headline-lg text-[32px] text-on-surface font-semibold">₹ 6,800</span>
<span className="font-body-sm text-body-sm text-on-surface-variant line-through">₹ 8,500</span>
</div>
<p className="text-[12px] text-on-surface-variant mt-0.5">Two Acharyas Dakshina + Full 42-Item Samagri Kit</p>
</div>
<div className="px-2.5 py-1 rounded bg-secondary-fixed text-on-secondary-fixed text-xs font-semibold">
                Most Chosen
              </div>
</div>
{/* Booking Parameter Form */}
<div className="flex flex-col gap-3.5">
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-1.5">Preferred Move-in / Muhurtham Window</label>
<div className="relative">
<input className="w-full h-12 px-3.5 rounded-lg border border-[#E7E5E4] bg-white text-on-surface font-body-md text-body-md focus:border-primary-container focus:outline-none focus:ring-2 focus:ring-primary-container/20" type="date" defaultValue="2025-04-14"/>
<span className="absolute right-3.5 top-3.5 material-symbols-outlined text-outline text-lg pointer-events-none">event</span>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-1.5">Preferred Slot</label>
<select className="w-full h-12 px-3 rounded-lg border border-[#E7E5E4] bg-white text-on-surface font-body-sm text-body-sm focus:border-primary-container focus:outline-none focus:ring-2 focus:ring-primary-container/20">
<option>Brahma Muhurtham (4:30 AM)</option>
<option selected="">Morning Shubha (6:15 AM)</option>
<option>Abhijit Muhurtham (11:45 AM)</option>
</select>
</div>
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-1.5">Property Type</label>
<select className="w-full h-12 px-3 rounded-lg border border-[#E7E5E4] bg-white text-on-surface font-body-sm text-body-sm focus:border-primary-container focus:outline-none focus:ring-2 focus:ring-primary-container/20">
<option>2 / 3 BHK Apartment</option>
<option>Independent Villa / House</option>
<option>Gated Duplex / Penthouse</option>
<option>Rented Home (Sanctification)</option>
</select>
</div>
</div>
{/* Inclusions Check-list */}
<div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col gap-2 font-body-sm text-body-sm text-on-surface">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-base">task_alt</span>
<span>1 Head Purohit + 1 Sahaya Acharya arrives on exact time</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-base">task_alt</span>
<span>Complete 42 Samagri packed in sealed eco-carton</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-base">task_alt</span>
<span>Clean Havan Kund, brass lamps &amp; floor heat shields</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-base">task_alt</span>
<span>Milk boiling ritual (Ksheera Paaka) coordination</span>
</div>
</div>
</div>
{/* Primary Action */}
<div className="flex flex-col gap-2.5 pt-2">
<a className="w-full py-3.5 px-6 rounded-full bg-primary-container text-on-primary font-headline-sm text-headline-sm font-semibold text-center hover:bg-primary transition-colors shadow-[0_2px_8px_rgba(23,23,23,0.06)]" href="/book">
                Reserve Auspicious Muhurtham
              </a>
<button className="w-full py-2.5 px-4 rounded-full border border-[#E7E5E4] text-on-surface font-label-md text-label-md hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-base text-primary">chat</span>
<span>Speak with Acharya on WhatsApp</span>
</button>
</div>
{/* Guarantee Badges */}
<div className="pt-3 border-t border-[#E7E5E4] flex flex-col gap-2 text-[12px] text-on-surface-variant font-label-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-sm">shield</span>
<span>Punctuality Commitment: On-site 45 min before Muhurtham</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-sm">published_with_changes</span>
<span>Complimentary date rescheduling up to 24 hrs prior</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-sm">verified_user</span>
<span>Zero hidden dakshina demand guarantee</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Interactive Section Nav */}
<section className="w-full sticky top-20 z-30 bg-[#FFFDF7]/95 backdrop-blur-md border-y border-[#E7E5E4]">
<div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 flex items-center gap-6 overflow-x-auto py-3">
<a className="text-primary font-semibold text-label-md whitespace-nowrap border-b-2 border-primary pb-1" href="#kramas">7 Sacred Ritual Stages</a>
<a className="text-on-surface-variant hover:text-on-surface text-label-md whitespace-nowrap transition-colors" href="#samagri">Included Samagri &amp; Kits</a>
<a className="text-on-surface-variant hover:text-on-surface text-label-md whitespace-nowrap transition-colors" href="#acharya">Vedic Acharya Lineage</a>
<a className="text-on-surface-variant hover:text-on-surface text-label-md whitespace-nowrap transition-colors" href="#family-checklist">What Family Prepares</a>
<a className="text-on-surface-variant hover:text-on-surface text-label-md whitespace-nowrap transition-colors" href="#faqs">Homeowner FAQs</a>
</div>
</section>
{/* Section A: 7 Sacred Ritual Steps (Timeline & Editorial Depth) */}
<section className="w-full py-16 bg-surface-container-low/50" id="kramas">
<div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 flex flex-col gap-10">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Vedic Sequence &amp; Vidhanam</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">The 7 Sacred Chapters of Gruha Pravesham</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Conducted systematically according to Bodhayana &amp; Apastamba Grihya Sutras. Every step is clearly explained in Telugu or your chosen tongue.
        </p>
</div>
{/* Timeline Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{/* Step 1 */}
<div className="bg-surface-container-lowest p-6 rounded-[20px] border border-[#E7E5E4] flex flex-col gap-4 relative overflow-hidden group hover:border-primary/40 transition-colors">
<div className="flex items-center justify-between">
<span className="font-mono text-2xl font-bold text-primary/40 group-hover:text-primary transition-colors">01</span>
<span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-surface-container text-on-surface-variant uppercase">At Threshold</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Dwara Pooja &amp; Torana Bandhanam</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
              Sanctifying the main threshold with turmeric, kumkum, and fresh mango leaves. The family enters holding the sacred Kalash, moving with the right foot forward during the precise Shubha Lagna.
            </p>
</div>
<div className="mt-auto pt-3 border-t border-[#E7E5E4] text-[12px] text-on-surface-variant flex items-center gap-1.5">
<span className="material-symbols-outlined text-secondary text-sm">schedule</span>
<span>Duration: ~25 mins</span>
</div>
</div>
{/* Step 2 */}
<div className="bg-surface-container-lowest p-6 rounded-[20px] border border-[#E7E5E4] flex flex-col gap-4 relative overflow-hidden group hover:border-primary/40 transition-colors">
<div className="flex items-center justify-between">
<span className="font-mono text-2xl font-bold text-primary/40 group-hover:text-primary transition-colors">02</span>
<span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-surface-container text-on-surface-variant uppercase">Purification</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Ganapathi Pooja &amp; Punyahavachanam</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
              Invoking Lord Vighneshwara to dismantle unforeseen obstacles. Consecrated holy water infused with Vedic suktas is sprinkled throughout every room, dispelling negative energies.
            </p>
</div>
<div className="mt-auto pt-3 border-t border-[#E7E5E4] text-[12px] text-on-surface-variant flex items-center gap-1.5">
<span className="material-symbols-outlined text-secondary text-sm">schedule</span>
<span>Duration: ~30 mins</span>
</div>
</div>
{/* Step 3 */}
<div className="bg-surface-container-lowest p-6 rounded-[20px] border border-[#E7E5E4] flex flex-col gap-4 relative overflow-hidden group hover:border-primary/40 transition-colors">
<div className="flex items-center justify-between">
<span className="font-mono text-2xl font-bold text-primary/40 group-hover:text-primary transition-colors">03</span>
<span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-surface-container text-on-surface-variant uppercase">Architectural</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Vastu Shanti &amp; Dikpalaka Pooja</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
              Pacifying Vastu Purusha and the guardians of the eight cardinal points. Addresses unseen architectural shifts, land vibrations, and corner deviations without altering walls.
            </p>
</div>
<div className="mt-auto pt-3 border-t border-[#E7E5E4] text-[12px] text-on-surface-variant flex items-center gap-1.5">
<span className="material-symbols-outlined text-secondary text-sm">schedule</span>
<span>Duration: ~40 mins</span>
</div>
</div>
{/* Step 4 */}
<div className="bg-surface-container-lowest p-6 rounded-[20px] border border-[#E7E5E4] flex flex-col gap-4 relative overflow-hidden group hover:border-primary/40 transition-colors">
<div className="flex items-center justify-between">
<span className="font-mono text-2xl font-bold text-primary/40 group-hover:text-primary transition-colors">04</span>
<span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-surface-container text-on-surface-variant uppercase">Sacred Fire</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Navagraha &amp; Vastu Homam</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
              Igniting the sacrificial fire (Agni Mukham) with medicinal samidhas and pure A2 cow ghee. Chanting 108 planetary mantras ensuring harmonious astrological periods for all residents.
            </p>
</div>
<div className="mt-auto pt-3 border-t border-[#E7E5E4] text-[12px] text-on-surface-variant flex items-center gap-1.5">
<span className="material-symbols-outlined text-secondary text-sm">schedule</span>
<span>Duration: ~60 mins</span>
</div>
</div>
{/* Step 5 */}
<div className="bg-surface-container-lowest p-6 rounded-[20px] border border-[#E7E5E4] flex flex-col gap-4 relative overflow-hidden group hover:border-primary/40 transition-colors">
<div className="flex items-center justify-between">
<span className="font-mono text-2xl font-bold text-primary/40 group-hover:text-primary transition-colors">05</span>
<span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-surface-container text-on-surface-variant uppercase">Kitchen Sanctum</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Ksheera Paaka (Milk Boiling)</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
              The sacred first lighting of the kitchen hearth. Fresh milk is boiled until it overflows gracefully from the vessel, symbolizing eternal abundance, nourishment, and sweet prosperity.
            </p>
</div>
<div className="mt-auto pt-3 border-t border-[#E7E5E4] text-[12px] text-on-surface-variant flex items-center gap-1.5">
<span className="material-symbols-outlined text-secondary text-sm">schedule</span>
<span>Duration: ~20 mins</span>
</div>
</div>
{/* Step 6 & 7 Combined High Card */}
<div className="bg-surface-container-lowest p-6 rounded-[20px] border border-[#E7E5E4] flex flex-col gap-4 relative overflow-hidden group hover:border-primary/40 transition-colors">
<div className="flex items-center justify-between">
<span className="font-mono text-2xl font-bold text-primary/40 group-hover:text-primary transition-colors">06-07</span>
<span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-secondary-fixed text-on-secondary-fixed uppercase">Culmination</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Purnahuti &amp; Ashirvachanam</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
              Offering the final silk cloth, dry coconut, and herbs into Agni. Followed by grand Maha Mangala Harathi and senior Acharyas bestowing Vedic Akshataropanam upon all elders and children.
            </p>
</div>
<div className="mt-auto pt-3 border-t border-[#E7E5E4] text-[12px] text-on-surface-variant flex items-center gap-1.5">
<span className="material-symbols-outlined text-secondary text-sm">schedule</span>
<span>Duration: ~35 mins</span>
</div>
</div>
</div>
</div>
</section>
{/* Section B: 42-Item Sacred Samagri Kit Breakdown */}
<section className="w-full py-16 bg-surface" id="samagri">
<div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 flex flex-col gap-10">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Uncompromising Quality</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">Everything Arranged by Dandalu Ayyagaru</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-xl">
            You do not need to run to grocery stores or traditional bazaars clutching crumpled paper lists. All 42 authentic samagri arrive hermetically sealed and sanitized.
          </p>
</div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-low border border-[#E7E5E4] text-xs font-semibold">
<span className="material-symbols-outlined text-primary text-base">eco</span>
<span>100% Unadulterated &amp; Chemical-Free</span>
</div>
</div>
{/* Samagri Bento Categories */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{/* Category 1 */}
<div className="bg-surface-container-lowest p-6 rounded-[20px] border border-[#E7E5E4] flex flex-col gap-4">
<div className="w-12 h-12 rounded-xl bg-primary-fixed/40 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-2xl">local_fire_department</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Sacred Woods &amp; Ghee</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Pure combustible offerings that produce medicinal, aromatic smoke.</p>
</div>
<ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface mt-2">
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span>Pure A2 Gir Cow Ghee (1.0 kg)</span></li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span>Palasha (Butea) Samidha bundle</span></li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span>Peepal &amp; Mango Wood Sticks</span></li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span>Havan Kootam (32 rare herbs)</span></li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span>Organic Cow Dung Cakes</span></li>
</ul>
</div>
{/* Category 2 */}
<div className="bg-surface-container-lowest p-6 rounded-[20px] border border-[#E7E5E4] flex flex-col gap-4">
<div className="w-12 h-12 rounded-xl bg-secondary-fixed/40 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-2xl">spa</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Aromatic Offerings</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Panchamritam ingredients &amp; divine fragrances for Lakshmi.</p>
</div>
<ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface mt-2">
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span>Bhimseni Pacha Camphor</span></li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span>Pure Sandalwood (Chandan) paste</span></li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span>Kasturi Kumkum &amp; Pasupu</span></li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span>Sugandha Dravyalu &amp; Vibhuti</span></li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span>Kesar (Saffron threads)</span></li>
</ul>
</div>
{/* Category 3 */}
<div className="bg-surface-container-lowest p-6 rounded-[20px] border border-[#E7E5E4] flex flex-col gap-4">
<div className="w-12 h-12 rounded-xl bg-tertiary-fixed/60 flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined text-2xl">nest_eco_leaf</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Fresh Flora &amp; Foliage</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Farm-harvested leaves, flowers, and holy plant elements.</p>
</div>
<ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface mt-2">
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span>Fresh Mango Leaf Toranam</span></li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span>5 Water Coconuts with Kudaka</span></li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span>Krishna Tulasi &amp; Bilva patra</span></li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span>Jasmine, Marigold, Red Lotus</span></li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span>Fresh Betel Leaves &amp; Supari</span></li>
</ul>
</div>
{/* Category 4 */}
<div className="bg-surface-container-lowest p-6 rounded-[20px] border border-[#E7E5E4] flex flex-col gap-4">
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface">
<span className="material-symbols-outlined text-2xl">sanitizer</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Sacred Brass &amp; Hardware</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Cleaned, high-gauge vessels brought directly by the Acharya.</p>
</div>
<ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface mt-2">
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span>Pure Copper Havan Kund</span></li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span>Insulated Floor Heat Shield</span></li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span>Brass Kalash &amp; Panchapatra</span></li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span>Bell, Arathi &amp; Dhuparti</span></li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span>Kusha grass asanams</span></li>
</ul>
</div>
</div>
{/* Family Checklist: What You Need to Keep Ready */}
<div className="p-6 md:p-8 rounded-[20px] bg-secondary-fixed/20 border border-secondary/20 flex flex-col md:flex-row items-center justify-between gap-6" id="family-checklist">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 text-secondary">
<span className="material-symbols-outlined text-2xl">checklist</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">What the Family Keeps Ready (Only 3 Things)</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">
              To keep your morning effortless, you only need: (1) Two brass lamps with sesame oil/wicks, (2) One liter fresh milk for boiling, and (3) Clean floor space with mats for sitting. Everything else is on us.
            </p>
</div>
</div>
<div className="shrink-0 flex items-center gap-3">
<a className="px-5 py-2.5 rounded-full bg-surface-container-lowest border border-[#E7E5E4] font-label-md text-label-md text-on-surface hover:bg-white shadow-sm transition-all flex items-center gap-2" href="javascript:void(0)">
<span className="material-symbols-outlined text-primary text-base">download</span>
<span>Download 1-Page PDF Checklist</span>
</a>
</div>
</div>
</div>
</section>
{/* Section C: Lead Purohit Lineage & Verification */}
<section className="w-full py-16 bg-surface-container-low/40" id="acharya">
<div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
{/* Priest Portrait Dossier */}
<div className="lg:col-span-5 flex flex-col gap-4">
<div className="relative bg-surface-container-lowest rounded-[20px] p-6 border border-[#E7E5E4] shadow-sm flex flex-col gap-4">
<div className="flex items-center gap-4">
<img className="w-20 h-20 rounded-2xl object-cover border border-[#E7E5E4]" data-alt="Dandalu Ayyagaru Head Purohit portrait. An elderly Vedic priest with a warm, serene smile, white vibhuti and kumkum thilakam, wearing a traditional cream angavastram shawl." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC83w8DZVxYVIwII4H8D5R9QPTqcZiut1Oy9CXBBu51shP1eTqFk04tatPlrwxlMCJRU5IkVnqS8H1-T3oY3LRjUR0nxi7GcEQnwqONzWE6kXnp2sMoYbzw8I-Dq6Xfvo6mNBINb9rNyI9Hb4PmlerXaWG0VosIPa_UoZ3l1upuv7g0fAQLpTB00q3VNIuhW8x886O-VNfdAssG1F33sxioiEY8fgpu8kkjIkaIW6ee"/>
<div>
<div className="inline-flex items-center gap-1 text-[11px] font-semibold text-secondary uppercase tracking-wider">
<span className="material-symbols-outlined text-xs">verified</span>
<span>Chief Veda Smartha Purohit</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Veda Murthy Dandalu Ayyagaru</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">24+ Years Dedication · 3,400+ Sanctifications</p>
</div>
</div>
<div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-[#E7E5E4]">
<div className="p-2 rounded bg-surface-container-low">
<span className="text-on-surface-variant block text-[11px]">Veda Shakha</span>
<span className="font-semibold text-on-surface">Taittiriya Krishna Yajurveda</span>
</div>
<div className="p-2 rounded bg-surface-container-low">
<span className="text-on-surface-variant block text-[11px]">Veda Pathashala</span>
<span className="font-semibold text-on-surface">Tirupati SV Vedic University</span>
</div>
</div>
<div className="p-3 rounded-xl bg-surface-container flex items-center justify-between text-xs font-label-md">
<span className="text-on-surface">Police &amp; Background Verified</span>
<span className="text-emerald-700 font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-sm">check_circle</span> 100% Certified
              </span>
</div>
</div>
</div>
{/* Lineage Narrative */}
<div className="lg:col-span-7 flex flex-col gap-5">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Veda Acharya Lineage</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
            Sacred Rituals, Carried with Grace and Deep Scholarly Clarity
          </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Our Acharyas do not rush through mantras or speak in mechanical murmurs. In ancient Vedic tradition, the householders must comprehend the meaning of each offering. Dandalu Ayyagaru explains the spiritual essence of every stage in lucid language so your entire family feels spiritually enriched.
          </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-xl">timer</span>
<div>
<p className="font-headline-sm text-[15px] text-on-surface">Absolute Punctuality</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Priests arrive 45 minutes ahead of the Muhurtham to setup the altar and kolam.</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-xl">sentiment_very_satisfied</span>
<div>
<p className="font-headline-sm text-[15px] text-on-surface">No Unexpected Demands</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Dakshina is completely upfront and settled digitally. Zero awkward negotiation on ceremony day.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Section D: Frequently Asked Questions for New Homeowners */}
<section className="w-full py-16 bg-surface" id="faqs">
<div className="max-w-[960px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 flex flex-col gap-10">
<div className="text-center flex flex-col items-center gap-2">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Clarity For Homeowners</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Frequently Asked Questions</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
          Practical answers addressing woodwork, unfinished interiors, auspicious muhurtham calculations, and guest protocol.
        </p>
</div>
<div className="flex flex-col gap-3">
{/* Accordion 1 */}
<details className="group bg-surface-container-lowest rounded-xl border border-[#E7E5E4] p-5 [&amp;_summary::-webkit-details-marker]:hidden" open="">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="font-headline-sm text-[16px] text-on-surface">What if our interior woodwork is 90% complete? Can we still perform Gruha Pravesham?</span>
<span className="material-symbols-outlined text-on-surface-variant transition group-open:rotate-180">expand_more</span>
</summary>
<p className="font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed">
            Yes. As per Vastu Shastra traditions, the primary structural prerequisites are: the main door (Simha Dwaram) must have shutters fitted, the roof and ceiling must be fully enclosed, and the kitchen hearth (gas stove or induction) must be in place. Minor polish work, wardrobes, and furniture can follow after the Gruha Pravesham has sanctified the space.
          </p>
</details>
{/* Accordion 2 */}
<details className="group bg-surface-container-lowest rounded-xl border border-[#E7E5E4] p-5 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="font-headline-sm text-[16px] text-on-surface">How do you calculate our exact Gotram &amp; Janma Nakshatra Muhurtham?</span>
<span className="material-symbols-outlined text-on-surface-variant transition group-open:rotate-180">expand_more</span>
</summary>
<p className="font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed">
            Upon submitting your booking request, our Asthana Siddhanti compares the Janma Nakshatra of the primary owners against the solar month (Sauramana) and lunar tithis (Chandramana). We eliminate Rahu Kalam, Yamagandam, and Gulika to provide the exact 24-minute Shubha Lagna window for your threshold crossing.
          </p>
</details>
{/* Accordion 3 */}
<details className="group bg-surface-container-lowest rounded-xl border border-[#E7E5E4] p-5 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="font-headline-sm text-[16px] text-on-surface">Will the Havan fire damage Italian marble or wooden flooring?</span>
<span className="material-symbols-outlined text-on-surface-variant transition group-open:rotate-180">expand_more</span>
</summary>
<p className="font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed">
            Not at all. Our Acharyas bring custom-insulated fireproof floor base plates, topped with red soil and brick layering beneath the copper havan kunda. This prevents thermal transfer, ensuring delicate vitrified tiles, Italian marble, and engineered wood remain spotless.
          </p>
</details>
{/* Accordion 4 */}
<details className="group bg-surface-container-lowest rounded-xl border border-[#E7E5E4] p-5 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="font-headline-sm text-[16px] text-on-surface">Can we include Satyanarayana Swamy Vratam along with Gruha Pravesham?</span>
<span className="material-symbols-outlined text-on-surface-variant transition group-open:rotate-180">expand_more</span>
</summary>
<p className="font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed">
            Yes, Satyanarayana Swamy Vratam is frequently appended right after the milk boiling ritual. You can choose the "Complete Mahalakshmi &amp; Satyanarayana" combo during checkout, extending the ceremony by approximately 1 hour with full Katha recitation.
          </p>
</details>
{/* Accordion 5 */}
<details className="group bg-surface-container-lowest rounded-xl border border-[#E7E5E4] p-5 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="font-headline-sm text-[16px] text-on-surface">What happens if we need to reschedule our move-in date?</span>
<span className="material-symbols-outlined text-on-surface-variant transition group-open:rotate-180">expand_more</span>
</summary>
<p className="font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed">
            We understand construction and painting schedules can shift unpredictably. You can reschedule your date with zero penalty up to 24 hours prior to the booked slot via your booking link or direct concierge message.
          </p>
</details>
</div>
</div>
</section>
{/* Section E: Bottom Warm Call To Action Banner */}
<section className="w-full py-16 bg-gradient-to-b from-surface to-surface-container-low border-t border-[#E7E5E4]">
<div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10">
<div className="relative bg-surface-container-lowest rounded-[24px] p-8 md:p-12 border border-[#E7E5E4] shadow-[0_8px_30px_rgba(23,23,23,0.04)] overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
{/* Subtle saffron glow corner background */}
<div className="absolute -right-24 -bottom-24 w-80 h-80 rounded-full bg-primary-container/10 blur-3xl pointer-events-none"></div>
<div className="flex flex-col gap-3 max-w-xl z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-fixed/60 text-on-primary-fixed font-label-sm text-label-sm w-fit uppercase font-semibold">
<span>Auspicious Dates Filling for Upcoming Shukla Paksha</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">
            Step into your sanctuary with timeless Vedic dignity.
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant">
            Connect with Dandalu Ayyagaru today. Have your muhurtham verified, custom samagri dispatched, and your ceremony conducted with pristine care.
          </p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto z-10">
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary-container text-on-primary font-headline-sm text-headline-sm text-center font-semibold hover:bg-primary transition-all shadow-md" href="/book">
            Check Muhurtham Availability
          </a>
<a className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-[#E7E5E4] bg-surface-container-lowest text-on-surface font-label-md text-label-md text-center hover:bg-surface-container-low transition-all" href="/dashboard/concierge">
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
