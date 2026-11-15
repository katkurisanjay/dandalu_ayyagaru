'use client';

import { useEffect } from 'react';
// Auto-converted from prototype: dandalu_ayyagaru_review_booking_dakshina_breakdown
// Route: /book/review

export default function Page() {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
tailwind.config = { darkMode: "class", theme: { extend: { "colors": { "error-container": "#ffdad6", "on-tertiary-fixed": "#1e1b15", "surface-variant": "#e5e2e1", "surface-container-lowest": "#ffffff", "tertiary-fixed": "#e9e1d8", "outline-variant": "#e0c0b1", "on-surface": "#1c1b1b", "outline": "#8c7164", "secondary-container": "#ffce51", "on-error": "#ffffff", "on-surface-variant": "#584237", "surface-container-high": "#eae7e7", "primary": "#9d4300", "on-secondary": "#ffffff", "background": "#fcf9f8", "secondary-fixed-dim": "#f0c044", "inverse-on-surface": "#f3f0ef", "on-secondary-container": "#735700", "primary-fixed-dim": "#ffb690", "on-tertiary-fixed-variant": "#4a463f", "on-primary": "#ffffff", "on-primary-fixed": "#341100", "on-secondary-fixed": "#251a00", "tertiary-fixed-dim": "#ccc5bc", "on-secondary-fixed-variant": "#5a4300", "on-error-container": "#93000a", "on-primary-container": "#582200", "on-background": "#1c1b1b", "on-tertiary": "#ffffff", "surface-tint": "#9d4300", "inverse-surface": "#313030", "surface-bright": "#fcf9f8", "surface-dim": "#dcd9d9", "secondary": "#775a00", "primary-fixed": "#ffdbca", "tertiary-container": "#a09a91", "surface-container": "#f0eded", "on-tertiary-container": "#36322c", "inverse-primary": "#ffb690", "surface": "#fcf9f8", "on-primary-fixed-variant": "#783200", "error": "#ba1a1a", "primary-container": "#f97316", "surface-container-highest": "#e5e2e1", "tertiary": "#625e56", "secondary-fixed": "#ffdf98", "surface-container-low": "#f6f3f2" }, "borderRadius": { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" }, "spacing": { "gutter-desktop": "2rem", "space-md": "1rem", "space-xs": "0.25rem", "gutter": "1.5rem", "space-lg": "1.5rem", "margin-desktop": "3rem", "margin": "1.5rem", "space-sm": "0.5rem", "space-xl": "2.5rem" }, "fontFamily": { "headline-sm": [ "Manrope" ], "label-sm": [ "Inter" ], "body-lg": [ "Inter" ], "display-hero": [ "Manrope" ], "headline-lg": [ "Manrope" ], "label-md": [ "Inter" ], "headline-lg-mobile": [ "Manrope" ], "body-md": [ "Inter" ], "headline-md": [ "Manrope" ], "display-hero-mobile": [ "Manrope" ], "body-sm": [ "Inter" ] }, "fontSize": { "headline-sm": [ "18px", { "lineHeight": "24px", "letterSpacing": "-0.01em", "fontWeight": "600" } ], "label-sm": [ "11px", { "lineHeight": "14px", "letterSpacing": "0.04em", "fontWeight": "600" } ], "body-lg": [ "16px", { "lineHeight": "26px", "letterSpacing": "-0.01em", "fontWeight": "400" } ], "display-hero": [ "48px", { "lineHeight": "56px", "letterSpacing": "-0.03em", "fontWeight": "600" } ], "headline-lg": [ "32px", { "lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "600" } ], "label-md": [ "13px", { "lineHeight": "16px", "letterSpacing": "0.01em", "fontWeight": "500" } ], "headline-lg-mobile": [ "24px", { "lineHeight": "32px", "letterSpacing": "-0.015em", "fontWeight": "600" } ], "body-md": [ "14px", { "lineHeight": "22px", "letterSpacing": "0em", "fontWeight": "400" } ], "headline-md": [ "22px", { "lineHeight": "28px", "letterSpacing": "-0.015em", "fontWeight": "600" } ], "display-hero-mobile": [ "32px", { "lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "600" } ], "body-sm": [ "13px", { "lineHeight": "18px", "letterSpacing": "0em", "fontWeight": "400" } ] } } } };

    (function() {
      const optAdvance = document.getElementById('opt_advance');
      const optFull = document.getElementById('opt_full');
      const ctaBtn = document.getElementById('proceedCtaBtn');

      function updateCtaText() {
        if (optAdvance && optAdvance.checked) {
          ctaBtn.innerHTML = '<span>Proceed to Pay ₹3,050 (Lock-in)</span><span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>';
        } else if (optFull && optFull.checked) {
          ctaBtn.innerHTML = '<span>Proceed to Pay ₹11,590 (Full Escrow)</span><span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>';
        }
      }

      if (optAdvance && optFull && ctaBtn) {
        optAdvance.addEventListener('change', updateCtaText);
        optFull.addEventListener('change', updateCtaText);
        updateCtaText();
      }
    })();
  
`;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <main className="w-full pt-16 sm:pt-20 bg-surface min-h-[calc(100dvh-4rem)] sm:min-h-[calc(100dvh-5rem)]">
<div className="flex flex-col w-full">
{/* Subtle Ambient Glow */}
<div className="relative w-full max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 py-space-lg">
<div className="absolute top-12 left-1/3 -z-10 w-96 h-96 rounded-full bg-secondary-fixed/20 blur-3xl pointer-events-none"></div>
<div className="absolute top-80 right-10 -z-10 w-80 h-80 rounded-full bg-primary-fixed/20 blur-3xl pointer-events-none"></div>
{/* Stepper (Step 8 of 10) */}
<section className="mb-space-xl">
<div className="flex flex-col gap-space-sm bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<div className="flex items-center gap-space-xs font-semibold uppercase tracking-wider text-primary">
<span className="material-symbols-outlined text-base">verified</span>
<span>Step 8 of 10 : Consecration Review</span>
</div>
<div className="flex items-center gap-space-xs text-on-surface-variant">
<span>Ref: DA-REV-2026-4412</span>
<span className="inline-block w-1 h-1 rounded-full bg-outline"></span>
<span>Concierge: Sri K. S. Narasimha Sastry</span>
</div>
</div>
{/* Progress Track */}
<div className="w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden">
<div className="bg-primary h-full rounded-full transition-all duration-500" style={{width: "80%"}}></div>
</div>
{/* Breadcrumb Ribbon */}
<nav aria-label="Booking steps" className="hidden md:flex items-center justify-between pt-space-xs font-label-sm text-label-sm overflow-x-auto text-tertiary">
<span className="text-on-surface-variant">1. Pooja Selection</span>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<span className="text-on-surface-variant">2. Details</span>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<span className="text-on-surface-variant">3. Muhurtham</span>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<span className="text-on-surface-variant">4. Location</span>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<span className="text-on-surface-variant">5. Priest Vetting</span>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<span className="text-on-surface-variant">6. Package</span>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<span className="text-on-surface-variant">7. Samagri</span>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<span className="text-primary font-bold bg-primary-fixed/60 px-2 py-0.5 rounded-full">8. Review Booking</span>
<span className="material-symbols-outlined text-xs text-outline-variant">chevron_right</span>
<span className="text-outline">9. Payment</span>
<span className="material-symbols-outlined text-xs text-outline-variant">chevron_right</span>
<span className="text-outline">10. Sankalpam Confirmation</span>
</nav>
</div>
</section>
{/* Page Header & Heroic Visual Accent */}
<header className="mb-space-xl flex flex-col lg:flex-row lg:items-end justify-between gap-space-md">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-space-xs px-space-md py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase tracking-widest mb-space-sm font-semibold">
<span className="material-symbols-outlined text-sm">auto_awesome</span>
          Pre-Consecration Final Audit
        </div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-space-xs">
          Review Your Sacred Booking &amp; Dakshina Breakdown
        </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">
          Review ceremonial details, verify Sankalpam family gotras, and confirm all-inclusive transparent dakshina before formal Acharya allotment.
        </p>
</div>
{/* Quick Trust Badges Pill */}
<div className="flex items-center gap-space-sm bg-surface-container-low px-space-md py-space-sm rounded-xl">
<div className="flex -space-x-2">
<span className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold font-label-sm text-label-sm">ॐ</span>
<span className="w-8 h-8 rounded-full bg-primary-fixed text-primary flex items-center justify-center font-bold font-label-sm text-label-sm">VED</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Veda Patashala Certified</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Zero Onsite Dakshina Demands</span>
</div>
</div>
</header>
{/* Two-Column Editorial Grid */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
{/* Left Column (65% -> 8 cols) */}
<div className="lg:col-span-8 flex flex-col gap-space-xl">
{/* 1. Ceremonial Summary Card */}
<article className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-lg">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-sm">
<div className="flex items-center gap-space-sm">
<span className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
<span className="material-symbols-outlined">temple_hindu</span>
</span>
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Primary Ritual</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Gruha Pravesham &amp; Vastu Shanti Mahotsavam</h2>
</div>
</div>
<span className="inline-flex items-center gap-1 px-space-sm py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm self-start sm:self-auto font-semibold">
<span className="material-symbols-outlined text-sm">schedule</span>
              4-Hour Sanctification
            </span>
</div>
{/* Ritual Visual Feature Banner */}
<div className="relative w-full h-56 rounded-lg overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Traditional Indian Vedic Gruha Pravesham homam setup inside a sunlit luxury modern apartment living room, sacred copper havan kund with glowing flames, nine sacred grains navadhanya rangoli floor art, brass oil lamps kuthuvilakku, fragrant marigold and hibiscus garlands, offering bowls with A2 ghee and coconuts, cinematic warm morning natural light." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfNuVEVVu79PGqqEeZGVb9PZL-EoyNVorr-ma23HYRowXofQfSXGjGs7g7lHLwVeDTwSeTtZB5iy8V6pmEtm5EkvooM1O9gyClAmJ_fwWGO5dlQLq2rPEnABlzeYhVI11HPxioWkwHrLYXAjPAR8G5TqktXMNn6wjj-HcxRMWI9ofXfnGMAyfIlOLFy5Plru3LhoodNDqkR0FyMunxAf6mxQvmbT1-FhzjcDR-5ULl"/>
<div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent flex items-end p-space-md">
<div className="text-surface flex flex-wrap items-center gap-space-md font-label-sm text-label-sm">
<span className="flex items-center gap-1 bg-on-surface/40 backdrop-blur-md px-2.5 py-1 rounded-full">
<span className="material-symbols-outlined text-secondary-container text-xs">wb_sunny</span>
                  Brahma Muhurtham Timing
                </span>
<span className="flex items-center gap-1 bg-on-surface/40 backdrop-blur-md px-2.5 py-1 rounded-full">
<span className="material-symbols-outlined text-secondary-container text-xs">local_fire_department</span>
                  Low-Smoke Eco Samidha
                </span>
<span className="flex items-center gap-1 bg-on-surface/40 backdrop-blur-md px-2.5 py-1 rounded-full">
<span className="material-symbols-outlined text-secondary-container text-xs">shield</span>
                  Marble Insulated Plate
                </span>
</div>
</div>
</div>
{/* Muhurtham, Priest & Venue Specs */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
{/* Muhurtham Box */}
<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Auspicious Muhurtham</span>
<span className="font-label-sm text-label-sm text-secondary font-bold">100% Panchanga Verified</span>
</div>
<p className="font-headline-sm text-headline-sm text-on-surface">Friday, Feb 20, 2026</p>
<p className="font-body-md text-body-md text-primary font-medium">06:45 AM – 08:30 AM IST</p>
<div className="flex items-center gap-2 mt-1 text-on-surface-variant font-label-sm text-label-sm">
<span className="bg-surface-container px-2 py-0.5 rounded">Mithuna Lagna</span>
<span className="bg-surface-container px-2 py-0.5 rounded">Rohini Nakshatra</span>
<span className="bg-surface-container px-2 py-0.5 rounded">Shukla Paksha</span>
</div>
</div>
{/* Tradition & Dialect Box */}
<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Tradition &amp; Delivery</span>
<p className="font-headline-sm text-headline-sm text-on-surface">Smartha Telugu Tradition</p>
<p className="font-body-md text-body-md text-on-surface-variant">Chants in Vedic Sanskrit with fluent bilingual explanations.</p>
<div className="flex items-center gap-2 mt-1">
<span className="font-label-sm text-label-sm bg-primary-fixed/40 text-on-primary-fixed px-2 py-0.5 rounded-full font-semibold">Telugu</span>
<span className="font-label-sm text-label-sm bg-primary-fixed/40 text-on-primary-fixed px-2 py-0.5 rounded-full font-semibold">English</span>
<span className="font-label-sm text-label-sm bg-surface-container text-tertiary px-2 py-0.5 rounded-full font-semibold">Devanagari Sanskrit</span>
</div>
</div>
</div>
{/* Assigned Priest Dossier */}
<div className="bg-surface-container p-space-md rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="relative">
<img className="w-16 h-16 rounded-xl object-cover shadow-sm" data-alt="Dignified South Indian Vedic Pandit scholar Brahmasri K Subrahmanya Somayaji wearing traditional dhoti and angavastram with vibhuti tilak, serene wise expression, warm temple school library background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxy3QOd4BQ4JqQiPIIyCajLkCRD5FZ4gy0EgYxxyKFiVdQ03y96klEztjI043yBxCm35uBvNT_IS3ZY6ctEpC_qI_TO6jyRbM5E-YgW-WHvbeD2TZhmO4kjLCayH-Xe8HcB21ltmgqBczgWW60tWvKw4SL0G110Gx6qWFCKz21qidrQq7CNHiL1M32AP9ajaCBPZgEe5X5k0AybDnmXRhWNFjgwZcIGZqZ2xW9W77k"/>
<span className="absolute -bottom-1 -right-1 w-5 h-5 bg-secondary-container rounded-full flex items-center justify-center shadow-xs">
<span className="material-symbols-outlined text-xs text-on-secondary-container font-bold">verified</span>
</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface">Brahmasri K. Subrahmanya Somayaji</span>
<span className="text-xs bg-surface-container-lowest px-2 py-0.5 rounded text-primary font-bold">+1 Sahaya Purohit</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  Krishna Yajurveda Apastamba Sutra · 18 yrs Vedic Adhyayanam · Veda Bhashya Praveena
                </p>
<div className="flex items-center gap-space-md mt-1 font-label-sm text-label-sm text-secondary font-medium">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-sm">workspace_premium</span>
                    Tirumala Veda Pathashala Gold Medallist
                  </span>
<span className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-sm">history_edu</span>
                    540+ Gruha Praveshams Completed
                  </span>
</div>
</div>
</div>
<a className="font-label-sm text-label-sm text-primary font-bold hover:underline whitespace-nowrap self-end sm:self-center" href="javascript:void(0)">
              View Certified Credentials
            </a>
</div>
{/* Mandapam Coordinates */}
<div className="flex items-start gap-space-sm pt-space-xs text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-xl mt-0.5">pin_drop</span>
<div className="flex-1">
<span className="font-label-sm text-label-sm text-on-surface font-semibold uppercase">Ceremonial Venue Coordinates:</span>
<p className="font-body-md text-body-md text-on-surface">
                Flat 904, Tower B, My Home Bhooja, Silpa Gram Craft Village, Hitec City, Hyderabad - 500081
              </p>
<div className="flex items-center gap-2 mt-1 text-secondary font-label-sm text-label-sm font-medium">
<span className="material-symbols-outlined text-sm">security</span>
<span>Floor heat protection &amp; smoke-safe apartment protocol pre-confirmed by residential security desk.</span>
</div>
</div>
</div>
</article>
{/* 2. Sankalpam Devotee Details (The Agamic Foundation) */}
<article className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-space-sm">
<span className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
<span className="material-symbols-outlined">family_history</span>
</span>
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Vedic Recital Registry</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Sankalpam Devotee Lineage</h3>
</div>
</div>
<button className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary font-semibold hover:text-on-primary-container transition-colors" type="button">
<span className="material-symbols-outlined text-base">edit</span>
<span>Edit Gotram &amp; Names</span>
</button>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            These sacred particulars will be uttered verbatim by the Acharya during Maha Sankalpam invocation to channel universal planetary blessings into your family’s lineage.
          </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs">
{/* Karta Details */}
<div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-primary font-bold uppercase">Karta / Head of Household</span>
<p className="font-headline-sm text-headline-sm text-on-surface">Rajesh Varma</p>
<div className="flex flex-col gap-0.5 text-on-surface-variant font-body-sm text-body-sm mt-1">
<span>Gotram: <strong className="text-on-surface">Bharadwaja Gotra</strong></span>
<span>Janma Nakshatra: <strong className="text-on-surface">Uttara Phalguni</strong> (Charan: 2)</span>
<span>Rashi: <strong className="text-on-surface">Kanya (Virgo)</strong></span>
</div>
</div>
{/* Dharma Patni Details */}
<div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-primary font-bold uppercase">Dharma Patni / Spouse</span>
<p className="font-headline-sm text-headline-sm text-on-surface">Sravani Varma</p>
<div className="flex flex-col gap-0.5 text-on-surface-variant font-body-sm text-body-sm mt-1">
<span>Gotram: <strong className="text-on-surface">Bharadwaja Gotra</strong></span>
<span>Janma Nakshatra: <strong className="text-on-surface">Rohini</strong> (Charan: 4)</span>
<span>Rashi: <strong className="text-on-surface">Vrishabha (Taurus)</strong></span>
</div>
</div>
</div>
{/* Children & Sankalpam Objective */}
<div className="bg-surface-container p-space-md rounded-lg flex flex-col md:flex-row justify-between gap-space-md">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Included Family / Children:</span>
<div className="flex items-center gap-space-sm mt-1">
<span className="px-2.5 py-1 rounded-full bg-surface-container-lowest font-body-sm text-body-sm text-on-surface">
                  Master Aarav <span className="text-tertiary text-xs">(Punarvasu)</span>
</span>
<span className="px-2.5 py-1 rounded-full bg-surface-container-lowest font-body-sm text-body-sm text-on-surface">
                  Kum. Ananya <span className="text-tertiary text-xs">(Hastha)</span>
</span>
</div>
</div>
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Specific Phala Sankalpam:</span>
<p className="font-body-sm text-body-sm text-on-surface font-medium mt-1">
                Gruha Santhi · Ayur-Arogya-Aishwarya Siddhi · Vastu Dosha Nivarana
              </p>
</div>
</div>
</article>
{/* 3. Sacred Samagri & Logistics Verification */}
<article className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
<div className="flex items-center gap-space-sm">
<span className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
<span className="material-symbols-outlined">inventory_2</span>
</span>
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Materials &amp; Logistics</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Hermetic Samagri Suite &amp; Protocols</h3>
</div>
</div>
<span className="font-label-sm text-label-sm bg-secondary-fixed text-on-secondary-fixed font-semibold px-space-sm py-1 rounded-full self-start">
              Suite: Premium Vedic Heritage
            </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Everything is certified agamic standard, unadulterated, and packaged fresh at sunrise. You do not need to visit grocery stores or buy separate pooja provisions.
          </p>
{/* Interactive Samagri Checklist */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs">
<div className="flex items-center gap-space-sm p-space-sm rounded-lg bg-surface-container-low">
<span className="material-symbols-outlined text-primary text-lg">check_circle</span>
<div className="flex flex-col">
<span className="font-body-md text-body-md text-on-surface font-medium">64 Agamic Hermetically Sealed Items</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Kumkum, Haldi, Chandanam, Camphor, Dhoop</span>
</div>
</div>
<div className="flex items-center gap-space-sm p-space-sm rounded-lg bg-surface-container-low">
<span className="material-symbols-outlined text-primary text-lg">check_circle</span>
<div className="flex flex-col">
<span className="font-body-md text-body-md text-on-surface font-medium">2.0 kg Pure A2 Gir Cow Ghee</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Bilona churned, consecrated for sacred havan</span>
</div>
</div>
<div className="flex items-center gap-space-sm p-space-sm rounded-lg bg-surface-container-low">
<span className="material-symbols-outlined text-primary text-lg">check_circle</span>
<div className="flex flex-col">
<span className="font-body-md text-body-md text-on-surface font-medium">Handcrafted Brass Kuthuvilakku Set</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Pair of 18-inch ceremonial brass lamps</span>
</div>
</div>
<div className="flex items-center gap-space-sm p-space-sm rounded-lg bg-surface-container-low">
<span className="material-symbols-outlined text-primary text-lg">check_circle</span>
<div className="flex flex-col">
<span className="font-body-md text-body-md text-on-surface font-medium">Low-Smoke Samidhas &amp; Navadhanyas</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Sun-dried Bilwa, Mango twigs &amp; 9 sacred grains</span>
</div>
</div>
</div>
{/* Logistics & Gau Pooja Highlight Bar */}
<div className="flex flex-col gap-space-sm p-space-md rounded-xl bg-surface-container-high mt-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-secondary font-bold">directions_car</span>
<span className="font-body-md text-body-md text-on-surface font-semibold">Chauffeur &amp; Samagri Delivery</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface font-bold bg-surface-container-lowest px-2 py-0.5 rounded">
                Arrives 06:00 AM IST (45m early)
              </span>
</div>
<div className="flex items-center justify-between pt-space-xs">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-secondary font-bold">pets</span>
<span className="font-body-md text-body-md text-on-surface font-semibold">Doorstep Gau Pooja (Desi Cow &amp; Calf)</span>
</div>
<span className="font-label-sm text-label-sm text-primary font-bold bg-surface-container-lowest px-2 py-0.5 rounded">
                Confirmed for 06:15 AM
              </span>
</div>
</div>
</article>
{/* 4. Sacred Policy Guarantees (The Friction Eraser) */}
<article className="bg-surface-container-low rounded-xl p-space-lg flex flex-col gap-space-md">
<h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-primary">verified_user</span>
            The Dandalu Ayyagaru Sacred Code &amp; Guarantees
          </h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
<div className="bg-surface-container-lowest p-space-md rounded-lg flex flex-col gap-1 shadow-sm">
<span className="material-symbols-outlined text-primary text-2xl">sentiment_very_satisfied</span>
<h4 className="font-headline-sm text-headline-sm text-on-surface text-base">Zero-Bargaining Guarantee</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Priests are legally bonded not to request supplementary dakshina, tips, or vehicle fuel charges at your doorstep.
              </p>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-lg flex flex-col gap-1 shadow-sm">
<span className="material-symbols-outlined text-primary text-2xl">menu_book</span>
<h4 className="font-headline-sm text-headline-sm text-on-surface text-base">Vedic Lineage Vetting</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Every Acharya holds verified Veda Patashala certificates and minimum 10 years experience conducting orthodox rituals.
              </p>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-lg flex flex-col gap-1 shadow-sm">
<span className="material-symbols-outlined text-primary text-2xl">event_repeat</span>
<h4 className="font-headline-sm text-headline-sm text-on-surface text-base">Muhurtham Rescheduling</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Free date or timing adjustment up to 48 hours prior if planetary positions or family emergencies require changes.
              </p>
</div>
</div>
</article>
</div>
{/* Right Column (35% -> 4 cols): Sticky Financial Card */}
<div className="lg:col-span-4 sticky top-24 flex flex-col gap-space-md">
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-xs">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Transparent Escrow</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Dakshina Investment</h3>
</div>
<span className="material-symbols-outlined text-primary text-2xl">account_balance</span>
</div>
{/* Financial Breakdown Table */}
<div className="flex flex-col gap-space-sm font-body-sm text-body-sm text-on-surface">
<div className="flex justify-between items-start">
<div>
<p className="font-medium">Chief Acharya &amp; Sahaya Purohit</p>
<span className="text-tertiary text-xs">Honorarium for 2 consecrated priests</span>
</div>
<span className="font-semibold">₹7,500</span>
</div>
<div className="flex justify-between items-start">
<div>
<p className="font-medium">Sacred Samagri Suite (64 items)</p>
<span className="text-tertiary text-xs">Includes 2kg Gir cow bilona ghee</span>
</div>
<span className="font-semibold">₹3,200</span>
</div>
<div className="flex justify-between items-start">
<div>
<p className="font-medium">Doorstep Gau Pooja Coordination</p>
<span className="text-tertiary text-xs">Desi Cow &amp; Calf logistics and feed</span>
</div>
<span className="font-semibold">₹1,500</span>
</div>
<div className="flex justify-between items-start text-secondary">
<div>
<p className="font-medium">Heat-Shield &amp; Low-Smoke Protocol</p>
<span className="text-xs">Apartment compliant havan base</span>
</div>
<span className="font-bold">₹0 <span className="text-xs line-through text-outline">₹800</span></span>
</div>
<div className="flex justify-between items-start text-secondary">
<div>
<p className="font-medium">Bilingual Devotee Guide &amp; Sankalpam Leaf</p>
<span className="text-xs">Framed ritual sankalpam keepsake</span>
</div>
<span className="font-bold">₹0</span>
</div>
<div className="flex justify-between items-center text-on-surface-variant pt-space-xs">
<span>Platform Fee &amp; Scheduling</span>
<span className="font-semibold text-primary">₹0 (Zero Markup)</span>
</div>
{/* Total Bar */}
<div className="bg-surface-container-low p-space-md rounded-lg flex items-center justify-between mt-space-xs">
<div>
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant font-bold">Total Sacred Dakshina</span>
<p className="font-headline-sm text-headline-sm text-on-surface font-bold">₹12,200</p>
</div>
<span className="font-label-sm text-label-sm bg-surface-container px-2 py-1 rounded text-tertiary font-semibold">
                All-Inclusive
              </span>
</div>
</div>
{/* Payment Option Radio Selector */}
<fieldset className="flex flex-col gap-space-sm pt-space-xs">
<legend className="font-label-sm text-label-sm text-on-surface font-bold uppercase mb-1">
              Select Dakshina Commitment Mode:
            </legend>
{/* Option A: 25% Advance Lock-in */}
<label className="relative flex items-start gap-space-sm p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer group">
<input defaultChecked={true} className="mt-1 accent-primary w-4 h-4" id="opt_advance" name="payment_mode" type="radio" defaultValue="advance"/>
<div className="flex-1">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-on-surface text-sm">25% Advance Lock-in</span>
<span className="font-headline-sm text-headline-sm text-primary text-sm">₹3,050 today</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  Remaining balance of ₹9,150 settles safely upon Acharya arrival at your residence.
                </p>
</div>
</label>
{/* Option B: Full Upfront Dakshina */}
<label className="relative flex items-start gap-space-sm p-space-md rounded-lg bg-secondary-fixed/40 hover:bg-secondary-fixed/60 transition-colors cursor-pointer group">
<input className="mt-1 accent-primary w-4 h-4" id="opt_full" name="payment_mode" type="radio" defaultValue="full"/>
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="font-headline-sm text-headline-sm text-on-surface text-sm">Full Upfront Dakshina</span>
<span className="font-label-sm text-label-sm bg-secondary-container text-on-secondary-container px-1.5 py-0.5 rounded font-bold">Save ₹610</span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface text-sm font-bold">₹11,590</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  5% Devotee Benefit discount applied. 100% Escrow protected until Poornahuti completion.
                </p>
</div>
</label>
</fieldset>
{/* Primary CTA Button */}
<a className="w-full py-space-md rounded-full bg-primary-container text-on-primary font-headline-sm text-headline-sm text-center shadow-md hover:bg-primary transition-all duration-200 flex items-center justify-center gap-2 group" href="/book" id="proceedCtaBtn">
<span>Proceed to Secure Agamic Payment</span>
<span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
{/* Escrow Trust Badges */}
<div className="flex flex-col gap-space-xs pt-space-xs font-body-sm text-body-sm text-on-surface-variant">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-base">lock</span>
<span>100% Escrow Protected: Released only after Poornahuti</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-base">chat</span>
<span>Instant WhatsApp ritual itinerary dispatched to family</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-base">support_agent</span>
<span>Dedicated Concierge Line: +91 91212 88440</span>
</div>
</div>
</div>
{/* Concierge Help Floating Prompt */}
<div className="bg-surface-container p-space-md rounded-xl flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-xl">help_outline</span>
<div>
<p className="font-label-sm text-label-sm text-on-surface font-bold">Need Nakshatra or Gotram Guidance?</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Our Vedic Jyotish desk is available on WhatsApp.</p>
</div>
</div>
<a className="font-label-sm text-label-sm text-primary font-bold hover:underline whitespace-nowrap" href="javascript:void(0)">
            Ask Astrologer
          </a>
</div>
</div>
</div>
</div>
{/* Inline Script for Dakshina Selection Dynamic Update */}

</div>
    </main>
  );
}
