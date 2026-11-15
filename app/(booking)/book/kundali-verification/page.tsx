'use client';

import { useEffect } from 'react';
// Auto-converted from prototype: dandalu_ayyagaru_kundali_graha_dosha_verification
// Route: /book/kundali-verification

export default function Page() {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
tailwind.config = { darkMode: "class", theme: { extend: { "colors": { "error-container": "#ffdad6", "on-tertiary-fixed": "#1e1b15", "surface-variant": "#e5e2e1", "surface-container-lowest": "#ffffff", "tertiary-fixed": "#e9e1d8", "outline-variant": "#e0c0b1", "on-surface": "#1c1b1b", "outline": "#8c7164", "secondary-container": "#ffce51", "on-error": "#ffffff", "on-surface-variant": "#584237", "surface-container-high": "#eae7e7", "primary": "#9d4300", "on-secondary": "#ffffff", "background": "#fcf9f8", "secondary-fixed-dim": "#f0c044", "inverse-on-surface": "#f3f0ef", "on-secondary-container": "#735700", "primary-fixed-dim": "#ffb690", "on-tertiary-fixed-variant": "#4a463f", "on-primary": "#ffffff", "on-primary-fixed": "#341100", "on-secondary-fixed": "#251a00", "tertiary-fixed-dim": "#ccc5bc", "on-secondary-fixed-variant": "#5a4300", "on-error-container": "#93000a", "on-primary-container": "#582200", "on-background": "#1c1b1b", "on-tertiary": "#ffffff", "surface-tint": "#9d4300", "inverse-surface": "#313030", "surface-bright": "#fcf9f8", "surface-dim": "#dcd9d9", "secondary": "#775a00", "primary-fixed": "#ffdbca", "tertiary-container": "#a09a91", "surface-container": "#f0eded", "on-tertiary-container": "#36322c", "inverse-primary": "#ffb690", "surface": "#fcf9f8", "on-primary-fixed-variant": "#783200", "error": "#ba1a1a", "primary-container": "#f97316", "surface-container-highest": "#e5e2e1", "tertiary": "#625e56", "secondary-fixed": "#ffdf98", "surface-container-low": "#f6f3f2" }, "borderRadius": { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" }, "spacing": { "gutter-desktop": "2rem", "space-md": "1rem", "space-xs": "0.25rem", "gutter": "1.5rem", "space-lg": "1.5rem", "margin-desktop": "3rem", "margin": "1.5rem", "space-sm": "0.5rem", "space-xl": "2.5rem" }, "fontFamily": { "headline-sm": [ "Manrope" ], "label-sm": [ "Inter" ], "body-lg": [ "Inter" ], "display-hero": [ "Manrope" ], "headline-lg": [ "Manrope" ], "label-md": [ "Inter" ], "headline-lg-mobile": [ "Manrope" ], "body-md": [ "Inter" ], "headline-md": [ "Manrope" ], "display-hero-mobile": [ "Manrope" ], "body-sm": [ "Inter" ] }, "fontSize": { "headline-sm": [ "18px", { "lineHeight": "24px", "letterSpacing": "-0.01em", "fontWeight": "600" } ], "label-sm": [ "11px", { "lineHeight": "14px", "letterSpacing": "0.04em", "fontWeight": "600" } ], "body-lg": [ "16px", { "lineHeight": "26px", "letterSpacing": "-0.01em", "fontWeight": "400" } ], "display-hero": [ "48px", { "lineHeight": "56px", "letterSpacing": "-0.03em", "fontWeight": "600" } ], "headline-lg": [ "32px", { "lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "600" } ], "label-md": [ "13px", { "lineHeight": "16px", "letterSpacing": "0.01em", "fontWeight": "500" } ], "headline-lg-mobile": [ "24px", { "lineHeight": "32px", "letterSpacing": "-0.015em", "fontWeight": "600" } ], "body-md": [ "14px", { "lineHeight": "22px", "letterSpacing": "0em", "fontWeight": "400" } ], "headline-md": [ "22px", { "lineHeight": "28px", "letterSpacing": "-0.015em", "fontWeight": "600" } ], "display-hero-mobile": [ "32px", { "lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "600" } ], "body-sm": [ "13px", { "lineHeight": "18px", "letterSpacing": "0em", "fontWeight": "400" } ] } } } };

    (function () {
      // Toggle Symptom Pills
      const pills = document.querySelectorAll('.symptom-pill');
      pills.forEach(pill => {
        pill.addEventListener('click', () => {
          const isSelected = pill.classList.contains('bg-primary-fixed/40');
          if (isSelected) {
            pill.classList.remove('bg-primary-fixed/40', 'border-primary-container', 'text-on-primary-fixed');
            pill.classList.add('bg-surface-container-low', 'border-surface-variant', 'text-on-surface-variant');
            const icon = pill.querySelector('.material-symbols-outlined');
            if (icon) icon.remove();
          } else {
            pill.classList.add('bg-primary-fixed/40', 'border-primary-container', 'text-on-primary-fixed');
            pill.classList.remove('bg-surface-container-low', 'border-surface-variant', 'text-on-surface-variant');
            const checkIcon = document.createElement('span');
            checkIcon.className = 'material-symbols-outlined text-sm text-primary';
            checkIcon.textContent = 'check';
            pill.prepend(checkIcon);
          }
        });
      });

      // Chart Toggle (South Indian vs North Indian Tab Highlight)
      const chartButtons = document.querySelectorAll('.chart-toggle-btn');
      chartButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          chartButtons.forEach(b => {
            b.classList.remove('bg-surface-container-lowest', 'text-on-surface', 'font-semibold', 'shadow-xs');
            b.classList.add('text-on-surface-variant');
          });
          btn.classList.add('bg-surface-container-lowest', 'text-on-surface', 'font-semibold', 'shadow-xs');
          btn.classList.remove('text-on-surface-variant');
        });
      });

      // Recalculate Feedback
      const recalcBtn = document.getElementById('recalc-btn');
      if (recalcBtn) {
        recalcBtn.addEventListener('click', () => {
          const originalText = recalcBtn.innerHTML;
          recalcBtn.innerHTML = '<span class="material-symbols-outlined text-base animate-spin">refresh</span> Recalculating Ephemeris...';
          recalcBtn.classList.add('opacity-80', 'pointer-events-none');
          setTimeout(() => {
            recalcBtn.innerHTML = '<span class="material-symbols-outlined text-base">check</span> Recalculation Complete';
            setTimeout(() => {
              recalcBtn.innerHTML = originalText;
              recalcBtn.classList.remove('opacity-80', 'pointer-events-none');
            }, 1800);
          }, 800);
        });
      }
    })();
  
`;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <main className="w-full pt-16 sm:pt-20 bg-surface min-h-[calc(100dvh-4rem)] sm:min-h-[calc(100dvh-5rem)]">
<div className="flex flex-col w-full">
{/* Top Meta Ribbon */}
<section className="w-full bg-surface-container-low/60 border-b border-surface-variant">
<div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 py-3 flex flex-wrap items-center justify-between gap-3">
<div className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant">
<span className="hover:text-primary transition-colors cursor-pointer">Rituals &amp; Astrology</span>
<span className="text-tertiary">/</span>
<span className="text-on-surface font-semibold">Kundali &amp; Graha Dosha Verification</span>
</div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-lowest shadow-sm border border-surface-variant">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
          Panchangam Engine: <strong className="text-on-surface font-semibold">Drig Ganitha Siddhanta</strong> (Ephemeris Precision ±0.02°)
        </span>
</div>
</div>
</section>
{/* Editorial Hero Section */}
<section className="w-full bg-surface py- space-xl border-b border-surface-variant">
<div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10">
<div className="max-w-3xl flex flex-col gap-3">
<div className="inline-flex items-center gap-2 text-primary font-label-sm text-label-sm uppercase tracking-widest font-semibold">
<span className="material-symbols-outlined text-base">auto_awesome</span>
<span>Vedic Siddhanta &amp; Jyotishya Analysis</span>
</div>
<h1 className="font-display-hero text-display-hero text-on-surface tracking-tight">
          Discover Your Janma Kundali Alignments &amp; Auspicious Ritual Remedies.
        </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          Instant calculation of your Janma Rashi, Nakshatra Pada, current Vimshottari Mahadasha/Antardasha, and clear verification of Kuja (Manglik), Sade Sati, Kala Sarpa, or Pitru Doshas — paired directly with scripture-sanctioned Vedic Homams.
        </p>
</div>
</div>
</section>
{/* Main Diagnostic Workspace (Split Screen 2-Column Grid) */}
<section className="w-full py-space-xl bg-surface">
<div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
{/* LEFT COLUMN: Planetary Input & Birth Details (5 Cols) */}
<div className="lg:col-span-5 flex flex-col gap-space-lg">
{/* Birth Data Form Card */}
<div className="bg-surface-container-lowest rounded-[20px] p-space-lg shadow-sm border border-surface-variant flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-3 border-b border-surface-variant">
<div className="flex items-center gap-2">
<span className="w-7 h-7 rounded-full bg-secondary-fixed/40 text-on-secondary-fixed flex items-center justify-center font-label-sm text-label-sm font-bold">1</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Janma Vivara (Birth Details)</h2>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Step 1 of 2</span>
</div>
<form className="flex flex-col gap-4" id="kundali-form">
{/* Name Input */}
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface-variant" htmlFor="devotee-name">Full Name (Janma Nama)</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-tertiary text-lg">person</span>
<input className="w-full h-12 pl-10 pr-3 rounded-lg border border-surface-variant bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all outline-none" id="devotee-name" placeholder="Enter your registered name" type="text" defaultValue="Ravi Sharma"/>
</div>
</div>
{/* Date & Time Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface-variant" htmlFor="dob-input">Date of Birth</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-tertiary text-lg">calendar_today</span>
<input className="w-full h-12 pl-10 pr-3 rounded-lg border border-surface-variant bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all outline-none" id="dob-input" type="date" defaultValue="1992-05-18"/>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface-variant" htmlFor="tob-input">Time of Birth</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-tertiary text-lg">schedule</span>
<input className="w-full h-12 pl-10 pr-3 rounded-lg border border-surface-variant bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all outline-none" id="tob-input" type="time" defaultValue="06:45"/>
</div>
</div>
</div>
{/* Time Accuracy Toggle */}
<div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low/70 border border-surface-variant">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-medium">Exact Time Precision</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Birth record verified via hospital certificate</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked={true} className="sr-only peer" id="time-toggle" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
</label>
</div>
{/* Birth Place with Geocoordinates */}
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface-variant" htmlFor="birth-place">Birth City &amp; Coordinates</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary text-lg">location_on</span>
<input className="w-full h-12 pl-10 pr-3 rounded-lg border border-surface-variant bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all outline-none" id="birth-place" type="text" defaultValue="Hyderabad, Telangana, India (17.3850° N, 78.4867° E)"/>
</div>
<span className="font-label-sm text-label-sm text-tertiary flex items-center gap-1">
<span className="material-symbols-outlined text-xs">check_circle</span> Auto-calibrated for Indian Standard Time (IST UTC+05:30)
                </span>
</div>
{/* Gotram Selector */}
<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<label className="font-label-md text-label-md text-on-surface-variant" htmlFor="gotram-select">Family Gotram (Lineage)</label>
<span className="font-label-sm text-label-sm text-primary cursor-pointer hover:underline" title="Default Vedic sanction for lineage clarity">Unknown? Kashyapa Fallback</span>
</div>
<select className="w-full h-12 px-3 rounded-lg border border-surface-variant bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all outline-none" id="gotram-select">
<option selected="">Bharadwaja Gotram</option>
<option>Kashyapa Gotram (Universal Lineage)</option>
<option>Vasishta Gotram</option>
<option>Kaundinya Gotram</option>
<option>Haritasa Gotram</option>
<option>Gauthama Gotram</option>
<option>Vishwamitra Gotram</option>
<option>Atreya Gotram</option>
</select>
</div>
</form>
</div>
{/* Life Focus / Symptom Tags Card */}
<div className="bg-surface-container-lowest rounded-[20px] p-space-lg shadow-sm border border-surface-variant flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-3 border-b border-surface-variant">
<div className="flex items-center gap-2">
<span className="w-7 h-7 rounded-full bg-secondary-fixed/40 text-on-secondary-fixed flex items-center justify-center font-label-sm text-label-sm font-bold">2</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Primary Life Focus</h3>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Sankalpam Intent</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Select key life areas currently experiencing delays. Our Acharyas prioritize your remedial homams around these planetary aspects:
            </p>
<div className="flex flex-wrap gap-2" id="symptom-chips">
<button className="symptom-pill px-3 py-2 rounded-full border border-primary-container bg-primary-fixed/40 text-on-primary-fixed text-label-md font-label-md flex items-center gap-1.5 transition-all" type="button">
<span className="material-symbols-outlined text-sm text-primary">check</span>
                Career &amp; Business Delays
              </button>
<button className="symptom-pill px-3 py-2 rounded-full border border-surface-variant bg-surface-container-low text-on-surface-variant text-label-md font-label-md flex items-center gap-1.5 hover:bg-surface-container transition-all" type="button">
                Marriage &amp; Relationship (Kuja Dosha)
              </button>
<button className="symptom-pill px-3 py-2 rounded-full border border-primary-container bg-primary-fixed/40 text-on-primary-fixed text-label-md font-label-md flex items-center gap-1.5 transition-all" type="button">
<span className="material-symbols-outlined text-sm text-primary">check</span>
                Sade Sati / Shani Dhaiya Phase
              </button>
<button className="symptom-pill px-3 py-2 rounded-full border border-surface-variant bg-surface-container-low text-on-surface-variant text-label-md font-label-md flex items-center gap-1.5 hover:bg-surface-container transition-all" type="button">
                Health &amp; Longevity (Ayushya)
              </button>
<button className="symptom-pill px-3 py-2 rounded-full border border-surface-variant bg-surface-container-low text-on-surface-variant text-label-md font-label-md flex items-center gap-1.5 hover:bg-surface-container transition-all" type="button">
                New Property &amp; Vastu Harmony
              </button>
<button className="symptom-pill px-3 py-2 rounded-full border border-surface-variant bg-surface-container-low text-on-surface-variant text-label-md font-label-md flex items-center gap-1.5 hover:bg-surface-container transition-all" type="button">
                Mental Clarity &amp; Anxiety Relief
              </button>
</div>
{/* CTAs */}
<div className="flex flex-col sm:flex-row gap-3 pt-2">
<button className="flex-1 py-3 px-5 rounded-full bg-primary-container text-on-primary font-label-md text-label-md font-semibold flex items-center justify-center gap-2 hover:bg-primary transition-colors shadow-sm" id="recalc-btn" type="button">
<span className="material-symbols-outlined text-base">sync</span>
                Recalculate &amp; Verify Doshas
              </button>
<button className="py-3 px-4 rounded-full border border-surface-variant bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-surface-container-low transition-colors flex items-center justify-center gap-1.5" title="Download Certified Vedic Horoscope Document" type="button">
<span className="material-symbols-outlined text-base">download</span>
                PDF Chart
              </button>
</div>
</div>
{/* Vedic Calculation Lineage Assurance */}
<div className="p-space-md rounded-[20px] bg-secondary-fixed/20 border border-secondary-fixed/40 flex items-start gap-3">
<span className="material-symbols-outlined text-secondary text-xl mt-0.5">verified_user</span>
<div className="flex flex-col gap-1">
<h4 className="font-label-md text-label-md text-on-secondary-container font-semibold">Tirumala-Trained Siddhanti Algorithm</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Calculations strictly follow <em>Surya Siddhanta</em> mathematical formulas cross-defaultChecked against NASA JPL Ephemeris DE440 for planetary coordinates.
              </p>
</div>
</div>
</div>
{/* RIGHT COLUMN: Real-Time Kundali & Dosha Diagnostics (7 Cols) */}
<div className="lg:col-span-7 flex flex-col gap-space-lg">
{/* Profile Snapshot Card */}
<div className="bg-surface-container-lowest rounded-[20px] p-space-lg shadow-sm border border-surface-variant">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-surface-variant">
<div>
<div className="flex items-center gap-2">
<h3 className="font-headline-md text-headline-md text-on-surface">Ravi Sharma</h3>
<span className="px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant text-label-sm font-label-sm uppercase font-semibold">Bharadwaja</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  May 18, 1992 · 06:45 AM IST · Hyderabad, India
                </p>
</div>
{/* Dasha Indicator Pill */}
<div className="bg-surface-container-low px-4 py-2 rounded-xl border border-surface-variant flex flex-col items-start md:items-end">
<span className="font-label-sm text-label-sm text-tertiary uppercase">Current Vimshottari Dasha</span>
<span className="font-label-md text-label-md font-semibold text-primary">
                  Shani Mahadasha · Rahu Antardasha
                </span>
<span className="text-[11px] text-on-surface-variant font-label-sm">Active through Nov 28, 2027</span>
</div>
</div>
{/* Key Rashi & Nakshatra Metrics Strip */}
<div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
<div className="p-3 rounded-xl bg-surface-container-low/60 border border-surface-variant flex flex-col">
<span className="font-label-sm text-label-sm text-tertiary">Janma Rashi (Moon)</span>
<span className="font-label-md text-label-md text-on-surface font-semibold mt-1">Vrishabha (Taurus)</span>
<span className="text-[11px] text-on-surface-variant">Lord: Shukra (Venus)</span>
</div>
<div className="p-3 rounded-xl bg-surface-container-low/60 border border-surface-variant flex flex-col">
<span className="font-label-sm text-label-sm text-tertiary">Janma Nakshatra</span>
<span className="font-label-md text-label-md text-on-surface font-semibold mt-1">Rohini · Pada 2</span>
<span className="text-[11px] text-on-surface-variant">Deity: Prajapati / Brahma</span>
</div>
<div className="p-3 rounded-xl bg-surface-container-low/60 border border-surface-variant flex flex-col">
<span className="font-label-sm text-label-sm text-tertiary">Janma Lagna (Ascendant)</span>
<span className="font-label-md text-label-md text-on-surface font-semibold mt-1">Kanya (Virgo)</span>
<span className="text-[11px] text-on-surface-variant">Degree: 14° 22'</span>
</div>
<div className="p-3 rounded-xl bg-surface-container-low/60 border border-surface-variant flex flex-col">
<span className="font-label-sm text-label-sm text-tertiary">Gana &amp; Yoni</span>
<span className="font-label-md text-label-md text-on-surface font-semibold mt-1">Manushya · Sarpa</span>
<span className="text-[11px] text-on-surface-variant">Nadi: Antya</span>
</div>
</div>
</div>
{/* Dual Kundali Visualizer Section */}
<div className="bg-surface-container-lowest rounded-[20px] p-space-lg shadow-sm border border-surface-variant flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-3 border-b border-surface-variant">
<div>
<h4 className="font-headline-sm text-headline-sm text-on-surface">Lagna Kundali (D-1 Rasi Chart)</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Geocentric planetary positions at exact hour of birth</p>
</div>
{/* Style Switcher: North vs South Indian format */}
<div className="inline-flex rounded-lg border border-surface-variant p-0.5 bg-surface-container-low" id="chart-tabs">
<button className="chart-toggle-btn px-3 py-1 rounded-md text-label-sm font-label-sm bg-surface-container-lowest text-on-surface font-semibold shadow-xs" type="button">
                  South Indian Square
                </button>
<button className="chart-toggle-btn px-3 py-1 rounded-md text-label-sm font-label-sm text-on-surface-variant hover:text-on-surface" type="button">
                  North Indian Diamond
                </button>
</div>
</div>
{/* Geometric Chart Visualizer (SVG) */}
<div className="relative w-full flex flex-col items-center justify-center py-2">
<div className="w-full max-w-[520px] aspect-square rounded-xl bg-surface-container-lowest border border-surface-variant p-2 flex items-center justify-center relative overflow-hidden">
{/* Ambient Subtle Saffron Glow behind active Houses */}
<div className="absolute -top-10 -right-10 w-44 h-44 bg-primary-container/10 rounded-full blur-2xl pointer-events-none"></div>
<div className="absolute -bottom-10 -left-10 w-44 h-44 bg-secondary-container/15 rounded-full blur-2xl pointer-events-none"></div>
{/* South Indian Traditional 12-Box Grid Layout */}
<div className="w-full h-full grid grid-cols-4 grid-rows-4 border-2 border-surface-variant rounded-lg overflow-hidden bg-surface-container-lowest text-on-surface text-center">
{/* Row 1: Meena, Mesha, Vrishabha, Mithuna */}
{/* Box 1: Meena (Pisces) */}
<div className="border border-surface-variant p-1.5 flex flex-col justify-between text-left hover:bg-surface-container-low/50 transition-colors">
<span className="font-label-sm text-[10px] text-tertiary">Pisces (12)</span>
<span className="font-label-md text-label-md font-bold text-on-surface text-center">Su, Me</span>
<span className="text-[9px] text-tertiary text-right">Ravi · Budha</span>
</div>
{/* Box 2: Mesha (Aries) - 8th House from Lagna (Kanya) */}
<div className="border border-surface-variant p-1.5 flex flex-col justify-between text-left bg-error-container/20 hover:bg-error-container/30 transition-colors">
<div className="flex items-center justify-between">
<span className="font-label-sm text-[10px] text-error font-semibold">Aries (1)</span>
<span className="text-[9px] px-1 py-0.2 rounded bg-error-container text-on-error-container font-bold">8th Bhava</span>
</div>
<span className="font-label-md text-label-md font-bold text-primary text-center">Ketu</span>
<span className="text-[9px] text-on-surface-variant text-right">08° 11'</span>
</div>
{/* Box 3: Vrishabha (Taurus) - Janma Rashi */}
<div className="border border-surface-variant p-1.5 flex flex-col justify-between text-left bg-secondary-fixed/20 hover:bg-secondary-fixed/30 transition-colors">
<div className="flex items-center justify-between">
<span className="font-label-sm text-[10px] text-secondary font-bold">Taurus (2)</span>
<span className="text-[9px] px-1 py-0.2 rounded bg-secondary-container text-on-secondary-container font-semibold">Chandra</span>
</div>
<span className="font-label-md text-label-md font-bold text-on-surface text-center">Mo (Rohini)</span>
<span className="text-[9px] text-on-surface-variant text-right">16° 40' Exalted</span>
</div>
{/* Box 4: Mithuna (Gemini) */}
<div className="border border-surface-variant p-1.5 flex flex-col justify-between text-left hover:bg-surface-container-low/50 transition-colors">
<span className="font-label-sm text-[10px] text-tertiary">Gemini (3)</span>
<span className="font-label-md text-label-md font-bold text-on-surface text-center">Ve</span>
<span className="text-[9px] text-tertiary text-right">Shukra</span>
</div>
{/* Row 2: Kumbha, [CENTER SPAN 2x2], Karka */}
{/* Box 5: Kumbha (Aquarius) - Peak Sade Sati Active Phase */}
<div className="border border-surface-variant p-1.5 flex flex-col justify-between text-left bg-primary-fixed/30 hover:bg-primary-fixed/40 transition-colors">
<div className="flex items-center justify-between">
<span className="font-label-sm text-[10px] text-primary font-bold">Aquarius (11)</span>
<span className="text-[9px] px-1 py-0.2 rounded bg-primary-container text-on-primary font-bold">Sade Sati</span>
</div>
<span className="font-label-md text-label-md font-bold text-primary text-center">Sa (Shani)</span>
<span className="text-[9px] text-on-primary-fixed-variant text-right">18° Retrograde</span>
</div>
{/* Center 2x2 Block (Emblem & Janma Details) */}
<div className="col-span-2 row-span-2 border border-surface-variant bg-surface-container-low/70 flex flex-col items-center justify-center p-3 text-center">
<div className="w-10 h-10 rounded-full bg-surface-container-lowest border border-surface-variant flex items-center justify-center mb-1">
<span className="material-symbols-outlined text-primary text-xl">brightness_7</span>
</div>
<h5 className="font-headline-sm text-label-md text-on-surface font-bold uppercase tracking-wider">RASI KUNDALI</h5>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">D-1 Chart · Ayanamsha: Lahiri</span>
<div className="inline-flex items-center gap-1 mt-2 px-2.5 py-0.5 rounded-full bg-surface-container-lowest border border-surface-variant text-[11px] text-tertiary">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                      Transit Phase: Active
                    </div>
</div>
{/* Box 6: Karka (Cancer) */}
<div className="border border-surface-variant p-1.5 flex flex-col justify-between text-left hover:bg-surface-container-low/50 transition-colors">
<span className="font-label-sm text-[10px] text-tertiary">Cancer (4)</span>
<span className="font-label-md text-label-md text-tertiary text-center">—</span>
<span className="text-[9px] text-tertiary text-right">Empty</span>
</div>
{/* Row 3: Makara, [CENTER CONTINUED], Simha */}
{/* Box 7: Makara (Capricorn) */}
<div className="border border-surface-variant p-1.5 flex flex-col justify-between text-left hover:bg-surface-container-low/50 transition-colors">
<span className="font-label-sm text-[10px] text-tertiary">Capricorn (10)</span>
<span className="font-label-md text-label-md font-bold text-on-surface text-center">Ju (Guru)</span>
<span className="text-[9px] text-tertiary text-right">24° 08'</span>
</div>
{/* Box 8: Simha (Leo) - 12th House */}
<div className="border border-surface-variant p-1.5 flex flex-col justify-between text-left hover:bg-surface-container-low/50 transition-colors">
<span className="font-label-sm text-[10px] text-tertiary">Leo (5)</span>
<span className="font-label-md text-label-md text-tertiary text-center">—</span>
<span className="text-[9px] text-tertiary text-right">Empty</span>
</div>
{/* Row 4: Dhanus, Vrishchika, Thula, Kanya (Lagna) */}
{/* Box 9: Dhanus (Sagittarius) */}
<div className="border border-surface-variant p-1.5 flex flex-col justify-between text-left hover:bg-surface-container-low/50 transition-colors">
<span className="font-label-sm text-[10px] text-tertiary">Sagittarius (9)</span>
<span className="font-label-md text-label-md text-tertiary text-center">—</span>
<span className="text-[9px] text-tertiary text-right">Empty</span>
</div>
{/* Box 10: Vrishchika (Scorpio) - 3rd House */}
<div className="border border-surface-variant p-1.5 flex flex-col justify-between text-left hover:bg-surface-container-low/50 transition-colors">
<span className="font-label-sm text-[10px] text-tertiary">Scorpio (8)</span>
<span className="font-label-md text-label-md font-bold text-on-surface text-center">Ma (Mangal)</span>
<span className="text-[9px] text-tertiary text-right">Own House</span>
</div>
{/* Box 11: Thula (Libra) - 2nd House with Rahu transit */}
<div className="border border-surface-variant p-1.5 flex flex-col justify-between text-left bg-surface-container-low/40 hover:bg-surface-container-low/80 transition-colors">
<div className="flex items-center justify-between">
<span className="font-label-sm text-[10px] text-tertiary">Libra (7)</span>
<span className="text-[9px] px-1 py-0.2 rounded bg-surface-variant text-on-surface-variant">Rahu</span>
</div>
<span className="font-label-md text-label-md font-bold text-on-surface text-center">Ra</span>
<span className="text-[9px] text-tertiary text-right">08° 11'</span>
</div>
{/* Box 12: Kanya (Virgo) - LAGNA (1st House) */}
<div className="border border-surface-variant p-1.5 flex flex-col justify-between text-left bg-secondary-fixed/30 hover:bg-secondary-fixed/40 transition-colors">
<div className="flex items-center justify-between">
<span className="font-label-sm text-[10px] text-secondary font-bold">Virgo (6)</span>
<span className="text-[9px] px-1.5 py-0.2 rounded-full bg-secondary text-on-secondary font-bold">LAGNA</span>
</div>
<span className="font-label-md text-label-md font-bold text-on-surface text-center">Ascendant</span>
<span className="text-[9px] text-on-secondary-fixed-variant text-right">14° Kanya</span>
</div>
</div>
</div>
{/* Legend Strip */}
<div className="flex flex-wrap items-center justify-center gap-4 mt-3 text-label-sm font-label-sm text-on-surface-variant">
<span className="inline-flex items-center gap-1.5">
<span className="w-3 h-3 rounded bg-secondary-fixed"></span> Lagna &amp; Chandra Rashi
                </span>
<span className="inline-flex items-center gap-1.5">
<span className="w-3 h-3 rounded bg-primary-fixed"></span> Sade Sati Shani
                </span>
<span className="inline-flex items-center gap-1.5">
<span className="w-3 h-3 rounded bg-error-container"></span> Rahu-Ketu Axis
                </span>
<span className="inline-flex items-center gap-1.5">
<span className="material-symbols-outlined text-xs text-primary">info</span> Click any bhava for sub-degree analysis
                </span>
</div>
</div>
</div>
{/* Diagnostic Verification Breakdown Cards (Traffic Light / Confidence Clarity) */}
<div className="bg-surface-container-lowest rounded-[20px] p-space-lg shadow-sm border border-surface-variant flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-2 border-b border-surface-variant">
<div>
<h4 className="font-headline-sm text-headline-sm text-on-surface">Planetary Dosha Verification</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Scriptural evaluation of the 4 principal celestial afflictions</p>
</div>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container text-on-surface text-label-sm font-label-sm font-semibold">
                4 Evaluated
              </span>
</div>
<div className="flex flex-col gap-3">
{/* Dosha 1: Shani Sade Sati (ACTIVE - Priority) */}
<div className="p-4 rounded-xl border border-primary-container/40 bg-primary-fixed/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
<div className="flex items-start gap-3">
<div className="w-9 h-9 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-lg">warning</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2 flex-wrap">
<h5 className="font-headline-sm text-label-md text-on-surface font-bold">Shani Sade Sati: Peak Phase (Janma Shani)</h5>
<span className="px-2 py-0.5 rounded-full bg-primary-container text-on-primary font-label-sm text-[11px] font-semibold">Active · High Priority</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                      Saturn is transiting your natal Moon in Vrishabha (2nd peak phase). This cycle often manifests as unforeseen workplace delays, mental exhaustion, and unexpected expenses.
                    </p>
</div>
</div>
<div className="shrink-0 flex items-center sm:flex-col items-end gap-1">
<span className="font-label-sm text-label-sm text-primary font-semibold">Remedy Match</span>
<a className="text-label-sm font-label-sm text-on-surface underline hover:text-primary" href="#remedies">Navagraha Homam →</a>
</div>
</div>
{/* Dosha 2: Kuja / Manglik Dosha (PARTIAL / NEUTRALIZED) */}
<div className="p-4 rounded-xl border border-surface-variant bg-surface-container-low/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
<div className="flex items-start gap-3">
<div className="w-9 h-9 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-lg">shield</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2 flex-wrap">
<h5 className="font-headline-sm text-label-md text-on-surface font-bold">Kuja (Manglik) Dosha: Anshik / Neutralized</h5>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-[11px] font-semibold">Low Urgency · Neutralized</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                      Mars is placed in Scorpio (Own Sign / Swakshetra) in the 3rd House. According to <em>Brihat Parashara Hora Shastra</em> (Ch. 80), Mars in its own house cancels full Manglik severity.
                    </p>
</div>
</div>
<div className="shrink-0">
<span className="inline-flex items-center gap-1 text-label-sm font-label-sm text-tertiary">
<span className="material-symbols-outlined text-sm text-secondary">check_circle</span> No Ritual Mandated
                  </span>
</div>
</div>
{/* Dosha 3: Kala Sarpa Yoga (ABSENT) */}
<div className="p-4 rounded-xl border border-surface-variant bg-surface-container-low/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
<div className="flex items-start gap-3">
<div className="w-9 h-9 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-lg">check</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2 flex-wrap">
<h5 className="font-headline-sm text-label-md text-on-surface font-bold">Kala Sarpa Yoga: Nil / Absent</h5>
<span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-[11px] font-semibold">Clear</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                      All planetary bodies are not enclosed within the nodal Rahu-Ketu axis. Jupiter and Moon are freely positioned outside the nodes, ensuring unbroken life progression.
                    </p>
</div>
</div>
<div className="shrink-0">
<span className="inline-flex items-center gap-1 text-label-sm font-label-sm text-tertiary">
<span className="material-symbols-outlined text-sm text-tertiary">check_circle</span> Zero Affliction
                  </span>
</div>
</div>
{/* Dosha 4: Rahu-Ketu Transit (MODERATE) */}
<div className="p-4 rounded-xl border border-surface-variant bg-surface-container-low/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
<div className="flex items-start gap-3">
<div className="w-9 h-9 rounded-full bg-surface-container text-on-surface flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-lg">explore</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2 flex-wrap">
<h5 className="font-headline-sm text-label-md text-on-surface font-bold">Rahu Transit in 10th House (Career Bhava)</h5>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-[11px] font-semibold">Moderate Attention</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                      Transit of North Node across the Midheaven often causes sudden workplace reorganizations or misunderstandings with superiors. Maha Ganapathi sankalpam dissolves these obstacles.
                    </p>
</div>
</div>
<div className="shrink-0 flex items-center sm:flex-col items-end gap-1">
<span className="font-label-sm text-label-sm text-primary font-semibold">Suggested Remedy</span>
<a className="text-label-sm font-label-sm text-on-surface underline hover:text-primary" href="#remedies">Ganapathi Homam →</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Scriptural Vedic Remedies & Homam Recommendations */}
<section className="w-full py-space-xl bg-surface-container-low/40 border-t border-surface-variant" id="remedies">
<div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 flex flex-col gap-space-lg">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div className="flex flex-col gap-2 max-w-2xl">
<div className="inline-flex items-center gap-2 text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">
<span className="material-symbols-outlined text-base">local_fire_department</span>
<span>Scripture-Sanctioned Homams</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">
            Recommended Vedic Remedies Tailored to Ravi's Kundali
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant">
            Each ritual is performed at your home or sacred temple ghat by certified Vedic priests adhering to strict Agama Shastra rules, complete with laboratory-tested unadulterated samagri.
          </p>
</div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-lowest border border-surface-variant text-label-sm font-label-sm text-on-surface-variant shrink-0">
<span className="material-symbols-outlined text-secondary text-base">verified</span>
<span>100% Certified Vedic Lineage Acharyas</span>
</div>
</div>
{/* 3 Remedy Cards Grid */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
{/* Remedy 1: Priority Sade Sati Remedy */}
<div className="bg-surface-container-lowest rounded-[20px] p-space-lg shadow-sm border-2 border-primary-container/40 flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="absolute top-0 right-0 bg-primary-container text-on-primary font-label-sm text-[11px] font-bold px-3 py-1 rounded-bl-lg">
            PRIMARY MATCH (SADE SATI)
          </div>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-xl bg-primary-fixed/40 text-on-primary-fixed flex items-center justify-center">
<span className="material-symbols-outlined text-2xl text-primary">brightness_7</span>
</div>
<div className="flex flex-col">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Navagraha Homam &amp; Shani Shanti</h3>
<span className="font-label-sm text-label-sm text-primary font-semibold">Tila &amp; Shami Ahuti Vidhana</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Targeted pacification for Saturn’s peak 2nd cycle. Includes 108 Shami Samidha oblations, black sesame (tila) homam, Navagraha Mandapa devata avahana, and Shani Stotram parayana.
            </p>
<div className="flex flex-col gap-2 pt-2 border-t border-surface-variant">
<div className="flex items-center gap-2 text-body-sm font-body-sm text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-base">schedule</span>
<span>Duration: 2.5 - 3 Hours</span>
</div>
<div className="flex items-center gap-2 text-body-sm font-body-sm text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-base">inventory_2</span>
<span>All 48 Organic Pooja Samagris Included</span>
</div>
<div className="flex items-center gap-2 text-body-sm font-body-sm text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-base">groups</span>
<span>2 Veda Rig/Yajur Pathashala Acharyas</span>
</div>
</div>
</div>
<div className="flex flex-col gap-3 pt-6 mt-4 border-t border-surface-variant">
<div className="flex items-baseline justify-between">
<div>
<span className="font-headline-md text-headline-md font-bold text-on-surface">₹5,800</span>
<span className="font-body-sm text-body-sm text-on-surface-variant ml-1">all-inclusive</span>
</div>
<span className="font-label-sm text-label-sm text-secondary font-semibold">Dakshina &amp; Kit Included</span>
</div>
<button className="w-full py-3 rounded-full bg-primary-container text-on-primary font-label-md text-label-md font-semibold hover:bg-primary transition-colors flex items-center justify-center gap-2 shadow-xs" type="button">
<span>Book Navagraha Homam</span>
<span className="material-symbols-outlined text-base">arrow_forward</span>
</button>
</div>
</div>
{/* Remedy 2: Career Obstacle Clearance */}
<div className="bg-surface-container-lowest rounded-[20px] p-space-lg shadow-sm border border-surface-variant flex flex-col justify-between relative group hover:shadow-md transition-shadow">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-xl bg-secondary-fixed/40 text-on-secondary-fixed flex items-center justify-center">
<span className="material-symbols-outlined text-2xl text-secondary">workspace_premium</span>
</div>
<div className="flex flex-col">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Maha Ganapathi Homam</h3>
<span className="font-label-sm text-label-sm text-secondary font-semibold">Vighnaharta Blessing</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Recommended for Rahu transit in 10th house to dismantle workplace friction, job instability, and stalled promotions. Features Modaka, sugarcane, and sacred ghee ahutis.
            </p>
<div className="flex flex-col gap-2 pt-2 border-t border-surface-variant">
<div className="flex items-center gap-2 text-body-sm font-body-sm text-on-surface-variant">
<span className="material-symbols-outlined text-secondary text-base">schedule</span>
<span>Duration: 1.5 - 2 Hours</span>
</div>
<div className="flex items-center gap-2 text-body-sm font-body-sm text-on-surface-variant">
<span className="material-symbols-outlined text-secondary text-base">inventory_2</span>
<span>Pure A2 Desi Cow Ghee Samagri Kit</span>
</div>
<div className="flex items-center gap-2 text-body-sm font-body-sm text-on-surface-variant">
<span className="material-symbols-outlined text-secondary text-base">alarm_on</span>
<span>Calculated for Brahma Muhurtham</span>
</div>
</div>
</div>
<div className="flex flex-col gap-3 pt-6 mt-4 border-t border-surface-variant">
<div className="flex items-baseline justify-between">
<div>
<span className="font-headline-md text-headline-md font-bold text-on-surface">₹5,200</span>
<span className="font-body-sm text-body-sm text-on-surface-variant ml-1">all-inclusive</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Home or Temple</span>
</div>
<button className="w-full py-3 rounded-full border border-surface-variant bg-surface-container-lowest text-on-surface font-label-md text-label-md font-semibold hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2" type="button">
<span>View Homam Details</span>
<span className="material-symbols-outlined text-base">chevron_right</span>
</button>
</div>
</div>
{/* Remedy 3: Free Asthana Siddhanti Consultation */}
<div className="bg-surface-container-lowest rounded-[20px] p-space-lg shadow-sm border border-surface-variant flex flex-col justify-between relative group hover:shadow-md transition-shadow">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-xl bg-surface-container-highest text-on-surface flex items-center justify-center">
<span className="material-symbols-outlined text-2xl">record_voice_over</span>
</div>
<div className="flex flex-col">
<h3 className="font-headline-sm text-headline-sm text-on-surface">15-Min Siddhanti Consult</h3>
<span className="font-label-sm text-label-sm text-tertiary font-semibold">Complimentary Guidance</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Unsure which family sankalpam or Gotram to invoke? Speak one-on-one with our senior TTD-trained Jyotishya Acharya before reserving any ritual or homam.
            </p>
<div className="flex flex-col gap-2 pt-2 border-t border-surface-variant">
<div className="flex items-center gap-2 text-body-sm font-body-sm text-on-surface-variant">
<span className="material-symbols-outlined text-tertiary text-base">call</span>
<span>Direct Audio Call (Telugu / Hindi / English)</span>
</div>
<div className="flex items-center gap-2 text-body-sm font-body-sm text-on-surface-variant">
<span className="material-symbols-outlined text-tertiary text-base">pan_tool</span>
<span>Zero Sales Pressure or Fear-Mongering</span>
</div>
<div className="flex items-center gap-2 text-body-sm font-body-sm text-on-surface-variant">
<span className="material-symbols-outlined text-tertiary text-base">event_available</span>
<span>Next Slot: Today, 4:30 PM IST</span>
</div>
</div>
</div>
<div className="flex flex-col gap-3 pt-6 mt-4 border-t border-surface-variant">
<div className="flex items-baseline justify-between">
<div>
<span className="font-headline-md text-headline-md font-bold text-on-surface">FREE</span>
<span className="font-body-sm text-body-sm text-on-surface-variant ml-1">(Worth ₹1,200)</span>
</div>
<span className="font-label-sm text-label-sm text-secondary font-semibold">Devotee Privilege</span>
</div>
<button className="w-full py-3 rounded-full border border-surface-variant bg-surface-container-low text-on-surface font-label-md text-label-md font-semibold hover:bg-surface-container transition-colors flex items-center justify-center gap-2" type="button">
<span className="material-symbols-outlined text-base">support_agent</span>
<span>Request Astrologer Callback</span>
</button>
</div>
</div>
</div>
</div>
</section>
{/* Ethical Vedic Disclaimer & Trust Guarantee */}
<section className="w-full py-space-xl bg-surface">
<div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10">
<div className="p-space-lg rounded-[20px] bg-surface-container-lowest border border-surface-variant shadow-sm flex flex-col md:flex-row items-center gap-space-lg">
<div className="w-20 h-20 rounded-2xl bg-secondary-fixed/30 border border-secondary-fixed flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-secondary text-4xl">temple_hindu</span>
</div>
<div className="flex flex-col gap-2">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface">Why Dandalu Ayyagaru Does Not Sell Fear</span>
<span className="material-symbols-outlined text-secondary text-lg">verified</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            In classical Sanatana Dharma, the Navagrahas are revered celestial teachers (<em>Karma Karakas</em>), not vindictive adversaries. We prescribe traditional homams and stotrams purely to nurture inner stillness, harmonize household energy, and cultivate devotion — never through ominous predictions, superstition, or exploitation.
          </p>
<div className="flex flex-wrap items-center gap-4 pt-1 font-label-sm text-label-sm text-on-surface-variant">
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-primary text-base">gavel</span> Strict Agama Shastra Protocols
            </span>
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-primary text-base">lock</span> 100% Confidential Horoscope Records
            </span>
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-primary text-base">handshake</span> No Commercial Upselling Guarantee
            </span>
</div>
</div>
</div>
</div>
</section>
{/* Interactive Script for Micro-Interactions */}

</div>
    </main>
  );
}
