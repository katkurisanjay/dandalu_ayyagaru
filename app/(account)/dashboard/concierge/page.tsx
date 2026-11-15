'use client';

import { useEffect } from 'react';
// Auto-converted from prototype: dandalu_ayyagaru_wedding_concierge_day_of_event_command_center
// Route: /dashboard/concierge

export default function Page() {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
tailwind.config = { darkMode: "class", theme: { extend: { "colors": { "error-container": "#ffdad6", "on-tertiary-fixed": "#1e1b15", "surface-variant": "#e5e2e1", "surface-container-lowest": "#ffffff", "tertiary-fixed": "#e9e1d8", "outline-variant": "#e0c0b1", "on-surface": "#1c1b1b", "outline": "#8c7164", "secondary-container": "#ffce51", "on-error": "#ffffff", "on-surface-variant": "#584237", "surface-container-high": "#eae7e7", "primary": "#9d4300", "on-secondary": "#ffffff", "background": "#fcf9f8", "secondary-fixed-dim": "#f0c044", "inverse-on-surface": "#f3f0ef", "on-secondary-container": "#735700", "primary-fixed-dim": "#ffb690", "on-tertiary-fixed-variant": "#4a463f", "on-primary": "#ffffff", "on-primary-fixed": "#341100", "on-secondary-fixed": "#251a00", "tertiary-fixed-dim": "#ccc5bc", "on-secondary-fixed-variant": "#5a4300", "on-error-container": "#93000a", "on-primary-container": "#582200", "on-background": "#1c1b1b", "on-tertiary": "#ffffff", "surface-tint": "#9d4300", "inverse-surface": "#313030", "surface-bright": "#fcf9f8", "surface-dim": "#dcd9d9", "secondary": "#775a00", "primary-fixed": "#ffdbca", "tertiary-container": "#a09a91", "surface-container": "#f0eded", "on-tertiary-container": "#36322c", "inverse-primary": "#ffb690", "surface": "#fcf9f8", "on-primary-fixed-variant": "#783200", "error": "#ba1a1a", "primary-container": "#f97316", "surface-container-highest": "#e5e2e1", "tertiary": "#625e56", "secondary-fixed": "#ffdf98", "surface-container-low": "#f6f3f2" }, "borderRadius": { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" }, "spacing": { "gutter-desktop": "2rem", "space-md": "1rem", "space-xs": "0.25rem", "gutter": "1.5rem", "space-lg": "1.5rem", "margin-desktop": "3rem", "margin": "1.5rem", "space-sm": "0.5rem", "space-xl": "2.5rem" }, "fontFamily": { "headline-sm": [ "Manrope" ], "label-sm": [ "Inter" ], "body-lg": [ "Inter" ], "display-hero": [ "Manrope" ], "headline-lg": [ "Manrope" ], "label-md": [ "Inter" ], "headline-lg-mobile": [ "Manrope" ], "body-md": [ "Inter" ], "headline-md": [ "Manrope" ], "display-hero-mobile": [ "Manrope" ], "body-sm": [ "Inter" ] }, "fontSize": { "headline-sm": [ "18px", { "lineHeight": "24px", "letterSpacing": "-0.01em", "fontWeight": "600" } ], "label-sm": [ "11px", { "lineHeight": "14px", "letterSpacing": "0.04em", "fontWeight": "600" } ], "body-lg": [ "16px", { "lineHeight": "26px", "letterSpacing": "-0.01em", "fontWeight": "400" } ], "display-hero": [ "48px", { "lineHeight": "56px", "letterSpacing": "-0.03em", "fontWeight": "600" } ], "headline-lg": [ "32px", { "lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "600" } ], "label-md": [ "13px", { "lineHeight": "16px", "letterSpacing": "0.01em", "fontWeight": "500" } ], "headline-lg-mobile": [ "24px", { "lineHeight": "32px", "letterSpacing": "-0.015em", "fontWeight": "600" } ], "body-md": [ "14px", { "lineHeight": "22px", "letterSpacing": "0em", "fontWeight": "400" } ], "headline-md": [ "22px", { "lineHeight": "28px", "letterSpacing": "-0.015em", "fontWeight": "600" } ], "display-hero-mobile": [ "32px", { "lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "600" } ], "body-sm": [ "13px", { "lineHeight": "18px", "letterSpacing": "0em", "fontWeight": "400" } ] } } } };

    // Live Dynamic Countdown Clock for Muhurtham
    let totalSeconds = 23 * 60 + 48; // 23 mins 48 secs
    const hoursEl = document.getElementById('hours-val');
    const minsEl = document.getElementById('mins-val');
    const secsEl = document.getElementById('secs-val');

    setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--;
        const hours = Math.floor(totalSeconds / 3600);
        const mins = Math.floor((totalSeconds % 3600) / 60);
        const secs = totalSeconds % 60;

        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minsEl) minsEl.textContent = String(mins).padStart(2, '0');
        if (secsEl) secsEl.textContent = String(secs).padStart(2, '0');
      }
    }, 1000);

    // Operational Interactive Micro-functions
    function triggerBroadcastModal() {
      const modal = document.getElementById('liveModal');
      if (modal) modal.classList.remove('hidden');
    }

    function closeModal() {
      const modal = document.getElementById('liveModal');
      if (modal) modal.classList.add('hidden');
    }

    function confirmBroadcast() {
      closeModal();
      alert('Alert Dispatched: 42 Family Elders alerted via WhatsApp & SMS for Sumuhurtham staging.');
    }

    function triggerPurohitPing() {
      alert('Connecting direct VoIP line to Brhaspati Phanindra Sharma on-mandapam wireless earset...');
    }

    function dispatchRunner() {
      alert('Runner Request Sent: Runner Sri Harsha notified for Mandapam staging zone.');
    }

    function markMilestoneDone(btn) {
      btn.innerText = 'Completed';
      btn.disabled = true;
      btn.classList.add('opacity-50');
      alert('Milestone updated. Timeline synchronization logged in Dandalu Ayyagaru Audit Ledger.');
    }

    function toggleAudioCue(btn) {
      const originalText = btn.innerHTML;
      btn.innerHTML = '<span class="material-symbols-outlined text-base">music_note</span> Ringing Mandapam Chime...';
      setTimeout(() => {
        btn.innerHTML = originalText;
        alert('Asthana Mandapam Chime played successfully on Ballroom master console.');
      }, 1200);
    }

    function notifyFamilyWhatsapp() {
      alert('WhatsApp broadcast sent to Rao and Bharadwaj family groups: Assemble around bride and groom.');
    }

    function pingFamilyWhatsapp(target) {
      alert('Direct message opened for ' + target + ' coordinator.');
    }

    function triggerQuickAction(actionName) {
      alert('Protocol Triggered: ' + actionName);
    }

    function instantChimeBroadcast() {
      alert('Ballroom Audio Cue Chime #3 Triggered: Antarpatam lowering notice sound playing.');
    }

    function emergencyConciergeAlert() {
      const reason = prompt('Enter priority memo for Mandapam floor concierges:', 'Bride requesting brief 2-minute water break');
      if (reason) {
        alert('Floor Notice Broadcasted: ' + reason);
      }
    }
  
`;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <main className="w-full pt-16 sm:pt-20 bg-surface min-h-[calc(100dvh-4rem)] sm:min-h-[calc(100dvh-5rem)]">
<div className="flex flex-col w-full">
{/* Top Operational Banner & Live Muhurtham Command Bar */}
<section className="w-full bg-surface-container-low border-b border-[#E7E5E4] py-space-md">
<div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 flex flex-col xl:flex-row xl:items-center justify-between gap-space-md">
{/* Event Meta & Phase */}
<div className="flex flex-col gap-space-xs">
<div className="flex flex-wrap items-center gap-space-sm">
<span className="px-space-sm py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm uppercase tracking-wider">Live Mandapam Operations</span>
<span className="font-body-sm text-body-sm text-on-surface-variant font-medium">Wedding Ref #DA-VIV-2026-8942</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#E7E5E4]"></span>
<span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">Taj Krishna Grand Ballroom, Hyderabad</span>
</div>
<div className="flex flex-wrap items-baseline gap-space-sm">
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
            Ananya Rao <span className="font-body-md text-body-md text-on-surface-variant font-normal">(Kasyapa Gotra)</span>
<span className="text-primary font-light mx-1">&amp;</span> 
            Karthik Bharadwaj <span className="font-body-md text-body-md text-on-surface-variant font-normal">(Bharadwaja Gotra)</span>
</h1>
<span className="font-label-md text-label-md px-space-sm py-0.5 rounded bg-surface-container-high text-on-surface-variant">
            Day 2 of 3 · Morning Sumuhurtham
          </span>
</div>
</div>
{/* Quick Toggles & Chief Actions */}
<div className="flex flex-wrap items-center gap-space-sm">
<button className="inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-full bg-surface-container-lowest border border-[#E7E5E4] hover:bg-surface-container transition-colors text-on-surface font-label-md text-label-md shadow-sm" id="broadcastBtn" data-onclick="triggerBroadcastModal()" onClick={(e) => { const code = e.currentTarget.getAttribute('data-onclick'); if(code) { (new Function('event', code)).call(e.currentTarget, e); } }}>
<span className="material-symbols-outlined text-primary text-base">cell_tower</span>
<span>Broadcast Muhurtham Alert</span>
</button>
<button className="inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-full bg-surface-container-lowest border border-[#E7E5E4] hover:bg-surface-container transition-colors text-on-surface font-label-md text-label-md shadow-sm" data-onclick="triggerPurohitPing()" onClick={(e) => { const code = e.currentTarget.getAttribute('data-onclick'); if(code) { (new Function('event', code)).call(e.currentTarget, e); } }}>
<span className="material-symbols-outlined text-secondary text-base">mic</span>
<span>Call Chief Brhaspati</span>
</button>
<button className="inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-full bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md transition-colors shadow-sm" data-onclick="dispatchRunner()" onClick={(e) => { const code = e.currentTarget.getAttribute('data-onclick'); if(code) { (new Function('event', code)).call(e.currentTarget, e); } }}>
<span className="material-symbols-outlined text-base">bolt</span>
<span>Samagri Runner Direct</span>
</button>
</div>
</div>
</section>
{/* Real-Time Sumuhurtham Countdown Module */}
<section className="w-full bg-gradient-to-r from-[#FFFDF7] via-[#FFF8EB] to-[#FFFDF7] border-b border-[#E7E5E4] py-space-lg">
<div className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10">
<div className="p-space-lg rounded-[20px] bg-surface-container-lowest border border-[#E7E5E4] shadow-sm flex flex-col lg:flex-row items-center justify-between gap-space-lg">
<div className="flex items-center gap-space-md w-full lg:w-auto">
<div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>nest_clock_farsight_analog</span>
</div>
<div>
<div className="flex items-center gap-space-xs">
<span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold">T-Minus Primary Astrological Window</span>
</div>
<h2 className="font-headline-md text-headline-md text-on-surface">Jeelakarra-Bellam Sumuhurtham</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Target Time: <span className="font-semibold text-on-surface">08:22:00 AM Sharp</span> · Vrishabha Lagna (Kanya Navamsha) · Planetary Grace Window: 08:14 AM – 08:38 AM
            </p>
</div>
</div>
{/* Clock Digital Counter */}
<div className="flex items-center gap-space-md shrink-0">
<div className="flex items-center gap-space-xs bg-surface-container-low px-space-lg py-space-md rounded-xl border border-[#E7E5E4]">
<div className="flex flex-col items-center">
<span className="font-display-hero text-display-hero text-on-surface tracking-tighter leading-none" id="hours-val">00</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase mt-1">Hours</span>
</div>
<span className="font-display-hero text-display-hero text-primary font-light px-1">:</span>
<div className="flex flex-col items-center">
<span className="font-display-hero text-display-hero text-primary tracking-tighter leading-none" id="mins-val">23</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase mt-1">Minutes</span>
</div>
<span className="font-display-hero text-display-hero text-primary font-light px-1">:</span>
<div className="flex flex-col items-center">
<span className="font-display-hero text-display-hero text-on-surface tracking-tighter leading-none" id="secs-val">48</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase mt-1">Seconds</span>
</div>
</div>
<div className="hidden sm:flex flex-col gap-space-xs text-right">
<span className="font-label-sm text-label-sm text-emerald-700 bg-emerald-50 border border-emerald-200 px-space-sm py-0.5 rounded-full font-semibold inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">check_circle</span> Perfect Synchronization
            </span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Stage Audio Cue: <strong>Queue Chime #3 Ready</strong></span>
</div>
</div>
</div>
</div>
</section>
{/* 4-Stat Real-Time Operation Readiness Grid */}
<section className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 py-space-xl w-full">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
{/* Card 1 */}
<div className="p-space-lg rounded-[20px] bg-surface-container-lowest border border-[#E7E5E4] shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Acharya Peetham</span>
<span className="font-headline-md text-headline-md text-on-surface mt-1">3 of 3 On-Stage</span>
</div>
<div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-xl">diversity_3</span>
</div>
</div>
<div className="mt-space-md pt-space-sm border-t border-[#E7E5E4] flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant">Panchakattu &amp; Mic Checked</span>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-emerald-600 font-semibold">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span> Live
          </span>
</div>
</div>
{/* Card 2 */}
<div className="p-space-lg rounded-[20px] bg-surface-container-lowest border border-[#E7E5E4] shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Sacred Samagri Staging</span>
<span className="font-headline-md text-headline-md text-on-surface mt-1">100% Consecrated</span>
</div>
<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-xl">spa</span>
</div>
</div>
<div className="mt-space-md pt-space-sm border-t border-[#E7E5E4] flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant">64 Vedic Items Verified</span>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary font-semibold">
            15kg Talambralu
          </span>
</div>
</div>
{/* Card 3 */}
<div className="p-space-lg rounded-[20px] bg-surface-container-lowest border border-[#E7E5E4] shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Taj Ballroom Fire Safety</span>
<span className="font-headline-md text-headline-md text-on-surface mt-1">0% Sensor Risk</span>
</div>
<div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
<span className="material-symbols-outlined text-xl">shield_with_heart</span>
</div>
</div>
<div className="mt-space-md pt-space-sm border-t border-[#E7E5E4] flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant">Index 12 PPM (Max 45)</span>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-emerald-600 font-semibold">
            Shield Active
          </span>
</div>
</div>
{/* Card 4 */}
<div className="p-space-lg rounded-[20px] bg-surface-container-lowest border border-[#E7E5E4] shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Mandapam Presence</span>
<span className="font-headline-md text-headline-md text-on-surface mt-1">Bride &amp; Groom In</span>
</div>
<div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container">
<span className="material-symbols-outlined text-xl">wb_twilight</span>
</div>
</div>
<div className="mt-space-md pt-space-sm border-t border-[#E7E5E4] flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant">Antarpatam Screen Erected</span>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary font-semibold">
            Phase 3 Active
          </span>
</div>
</div>
</div>
</section>
{/* Main Dual-Column Command Dashboard */}
<section className="max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 pb-space-xl w-full">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
{/* LEFT COLUMN (Operations Stream - 65% / 8 Cols) */}
<div className="lg:col-span-8 flex flex-col gap-space-lg">
{/* Live Ritual Milestones Timeline */}
<div className="p-space-lg rounded-[20px] bg-surface-container-lowest border border-[#E7E5E4] shadow-sm">
<div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-lg">
<div>
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">Live Path Sequence</span>
<span className="px-2 py-0.5 rounded text-[11px] bg-secondary-container/20 text-on-secondary-container font-semibold">Vedic Smartha Paddhati</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mt-0.5">Day 2 Sumuhurtham Pathway</h3>
</div>
<div className="flex items-center gap-space-xs">
<span className="font-body-sm text-body-sm text-on-surface-variant">Auto-updating with Acharya Bell cues</span>
</div>
</div>
{/* Timeline Steps List */}
<div className="flex flex-col gap-space-md">
{/* Milestone 1 - Done */}
<div className="flex items-start gap-space-md p-space-md rounded-xl bg-surface-container-low/60 border border-[#E7E5E4]/80">
<div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-base font-bold">check</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex flex-wrap items-center justify-between gap-1">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">06:45 AM</span>
<span className="font-headline-sm text-headline-sm text-on-surface">Mangala Snanam &amp; Pratah Sandhyavandanam</span>
</div>
<span className="font-label-sm text-label-sm text-emerald-700 font-medium">Completed at 06:40 AM</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Conducted in Bride &amp; Groom suites by Sahaya Purohits. Sacred waters infused with Navaratna theertham.</p>
</div>
</div>
{/* Milestone 2 - Done */}
<div className="flex items-start gap-space-md p-space-md rounded-xl bg-surface-container-low/60 border border-[#E7E5E4]/80">
<div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-base font-bold">check</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex flex-wrap items-center justify-between gap-1">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">07:15 AM</span>
<span className="font-headline-sm text-headline-sm text-on-surface">Kasi Yatra &amp; Mahasankalpam</span>
</div>
<span className="font-label-sm text-label-sm text-emerald-700 font-medium">Completed at 07:35 AM</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Groom welcomed to Mandapam with silver umbrella, Geeta grantham, and new wooden sandals by Bride’s father.</p>
</div>
</div>
{/* Milestone 3 - IN PROGRESS */}
<div className="flex items-start gap-space-md p-space-md rounded-xl bg-[#FFFBF0] border-2 border-primary/40 relative">
<div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 mt-0.5 animate-pulse">
<span className="material-symbols-outlined text-base">hourglass_top</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex flex-wrap items-center justify-between gap-1">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-primary font-bold">07:45 AM</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Antarpatam Sthapana &amp; Gauri Pooja</span>
<span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-bold animate-pulse">CURRENT PHASE</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Est. Ending: 08:18 AM</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface mt-1">
                  Sacred curtain of Raw Silk separating the bride and groom held by maternal uncles. Smt. Ananya performing Gauri Pooja with 108 wet turmeric cones.
                </p>
<div className="mt-space-sm flex flex-wrap items-center gap-space-sm pt-space-xs border-t border-[#E7E5E4]">
<span className="font-body-sm text-body-sm text-secondary font-medium">Assigned Lead: Brahmasri V. Phanindra Sharma</span>
<div className="ml-auto flex items-center gap-space-xs">
<button className="px-space-sm py-1 rounded bg-surface-container-lowest border border-[#E7E5E4] hover:bg-surface-container font-label-sm text-label-sm text-on-surface font-semibold" data-onclick="markMilestoneDone(this)" onClick={(e) => { const code = e.currentTarget.getAttribute('data-onclick'); if(code) { (new Function('event', code)).call(e.currentTarget, e); } }}>Advance to Muhurtham</button>
<button className="px-space-sm py-1 rounded bg-surface-container-lowest border border-[#E7E5E4] hover:bg-surface-container font-label-sm text-label-sm text-on-surface font-semibold">+3 Min Buffer</button>
</div>
</div>
</div>
</div>
{/* Milestone 4 - THE SUMUHURTHAM PINNACLE */}
<div className="p-space-lg rounded-2xl bg-gradient-to-br from-[#FFF9EE] via-[#FFF3D6] to-[#FFF9EE] border-2 border-secondary shadow-md relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-secondary/10 rounded-full blur-xl pointer-events-none"></div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm border-b border-secondary/20 pb-space-sm mb-space-md">
<div className="flex items-center gap-space-sm">
<span className="px-space-sm py-1 rounded-full bg-secondary text-surface font-label-sm text-label-sm font-bold uppercase tracking-wider">
                    Sacred Pinnacle Moment
                  </span>
<span className="font-headline-sm text-headline-sm text-secondary font-bold">08:22 AM SHARP</span>
</div>
<div className="inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary font-bold">
<span className="material-symbols-outlined text-base">stars</span>
<span>T-23 Minutes Countdown Active</span>
</div>
</div>
<div className="flex items-start gap-space-md">
<div className="w-10 h-10 rounded-xl bg-secondary text-surface flex items-center justify-center shrink-0 shadow-sm">
<span className="material-symbols-outlined text-2xl">auto_awesome</span>
</div>
<div className="flex-1">
<h4 className="font-headline-md text-headline-md text-on-surface font-bold">
                    Jeelakarra-Bellam Dharanam (Maha Sumuhurtham)
                  </h4>
<p className="font-body-md text-body-md text-on-surface-variant mt-1 leading-relaxed">
                    Simultaneous placement of consecrated cumin-jaggery paste on each other's heads (Sahasrara Chakra) at the exact moment the Antarpatam drops. Rigveda Smartha mantras recited by all 3 priests in unison.
                  </p>
<div className="mt-space-md grid grid-cols-1 sm:grid-cols-2 gap-space-sm bg-surface-container-lowest/80 p-space-md rounded-xl border border-secondary/20">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-lg">check_circle</span>
<span className="font-body-sm text-body-sm text-on-surface">Silver paste cups inspected &amp; held by elders</span>
</div>
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-lg">check_circle</span>
<span className="font-body-sm text-body-sm text-on-surface">Banquet Nadhaswaram players primed for cue</span>
</div>
</div>
<div className="mt-space-md flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<button className="px-space-md py-space-xs rounded-full bg-surface-container-lowest border border-secondary/40 text-secondary hover:bg-secondary hover:text-surface font-label-md text-label-md font-semibold transition-colors flex items-center gap-1" data-onclick="toggleAudioCue(this)" onClick={(e) => { const code = e.currentTarget.getAttribute('data-onclick'); if(code) { (new Function('event', code)).call(e.currentTarget, e); } }}>
<span className="material-symbols-outlined text-base">volume_up</span>
<span>Test Asthana Audio-Bell</span>
</button>
<button className="px-space-md py-space-xs rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-label-md text-label-md font-semibold transition-colors flex items-center gap-1" data-onclick="notifyFamilyWhatsapp()" onClick={(e) => { const code = e.currentTarget.getAttribute('data-onclick'); if(code) { (new Function('event', code)).call(e.currentTarget, e); } }}>
<span className="material-symbols-outlined text-base">send</span>
<span>Notify Both Families on WhatsApp</span>
</button>
</div>
<span className="font-label-sm text-label-sm text-secondary font-semibold">Planetary Latency: ±0.0 sec</span>
</div>
</div>
</div>
</div>
{/* Milestone 5 - Pending */}
<div className="flex items-start gap-space-md p-space-md rounded-xl bg-surface-container-low border border-[#E7E5E4] opacity-80">
<div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-base">schedule</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex flex-wrap items-center justify-between gap-1">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">08:45 AM</span>
<span className="font-headline-sm text-headline-sm text-on-surface">Mangalasutra Dharana &amp; Talambralu</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Queue #5 · Ready</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Tying of the two holy gold discs with three sacred knots, followed by reciprocal pouring of golden turmeric pearls.</p>
</div>
</div>
{/* Milestone 6 - Pending */}
<div className="flex items-start gap-space-md p-space-md rounded-xl bg-surface-container-low border border-[#E7E5E4] opacity-70">
<div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-base">schedule</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex flex-wrap items-center justify-between gap-1">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">10:15 AM</span>
<span className="font-headline-sm text-headline-sm text-on-surface">Agni Pradakshinam &amp; Saptapadi (7 Steps)</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Queue #6 · Staged</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Circumbulation of Havan Kund, taking 7 steps together in northern direction reciting Vedic vows of sustenance.</p>
</div>
</div>
{/* Milestone 7 - Pending */}
<div className="flex items-start gap-space-md p-space-md rounded-xl bg-surface-container-low border border-[#E7E5E4] opacity-60">
<div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-base">schedule</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex flex-wrap items-center justify-between gap-1">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">11:30 AM</span>
<span className="font-headline-sm text-headline-sm text-on-surface">Laja Homam &amp; Arundhati-Vasishta Darshanam</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Queue #7 · Staged</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Puffed rice oblation offered by bride's brother, followed by viewing the twin stars representing marital fidelity.</p>
</div>
</div>
</div>
</div>
{/* Sacred Samagri Live Physical Checklist */}
<div className="p-space-lg rounded-[20px] bg-surface-container-lowest border border-[#E7E5E4] shadow-sm">
<div className="flex items-center justify-between mb-space-md">
<div>
<span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">Physical Staging Audit</span>
<h3 className="font-headline-md text-headline-md text-on-surface">Samagri &amp; Sacred Offerings Inspection</h3>
</div>
<span className="font-label-sm text-label-sm bg-emerald-50 text-emerald-700 border border-emerald-200 px-space-sm py-1 rounded-full font-semibold">
              All 6 Staged Items Verified
            </span>
</div>
<div className="divide-y divide-[#E7E5E4]">
{/* Item 1 */}
<div className="py-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="flex items-start gap-space-sm">
<input defaultChecked={true} className="mt-1 w-4 h-4 rounded text-primary focus:ring-primary accent-primary cursor-pointer" id="samagri-1" type="checkbox"/>
<div>
<label className="font-headline-sm text-headline-sm text-on-surface font-semibold cursor-pointer" htmlFor="samagri-1">
                    Hand-pounded Organic Turmeric Talambralu (15kg)
                  </label>
<p className="font-body-sm text-body-sm text-on-surface-variant">Infused with real saffron threads and rose water; partitioned into two ornate silver urns on both sides of Vedi.</p>
</div>
</div>
<div className="flex items-center gap-space-sm self-end sm:self-center shrink-0">
<span className="font-label-sm text-label-sm text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-semibold">Weight &amp; Moisture Pass</span>
<span className="material-symbols-outlined text-emerald-600 text-lg">verified</span>
</div>
</div>
{/* Item 2 */}
<div className="py-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="flex items-start gap-space-sm">
<input defaultChecked={true} className="mt-1 w-4 h-4 rounded text-primary focus:ring-primary accent-primary cursor-pointer" id="samagri-2" type="checkbox"/>
<div>
<label className="font-headline-sm text-headline-sm text-on-surface font-semibold cursor-pointer" htmlFor="samagri-2">
                    Consecrated Jeelakarra-Bellam Paste in Silver Cups
                  </label>
<p className="font-body-sm text-body-sm text-on-surface-variant">Ground 45 minutes prior with unrefined organic palm jaggery &amp; fresh cumin; sealed in twin pure silver katoris.</p>
</div>
</div>
<div className="flex items-center gap-space-sm self-end sm:self-center shrink-0">
<span className="font-label-sm text-label-sm text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-semibold">Freshness Guaranteed</span>
<span className="material-symbols-outlined text-emerald-600 text-lg">verified</span>
</div>
</div>
{/* Item 3 */}
<div className="py-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="flex items-start gap-space-sm">
<input defaultChecked={true} className="mt-1 w-4 h-4 rounded text-primary focus:ring-primary accent-primary cursor-pointer" id="samagri-3" type="checkbox"/>
<div>
<label className="font-headline-sm text-headline-sm text-on-surface font-semibold cursor-pointer" htmlFor="samagri-3">
                    Mangalasutram (3-Knot Yellow Cord + Twin 22k Gold Thalis)
                  </label>
<p className="font-body-sm text-body-sm text-on-surface-variant">Kumkum-anointed thread inspected by Brhaspati; blessed on silver betel platter with gotra archana.</p>
</div>
</div>
<div className="flex items-center gap-space-sm self-end sm:self-center shrink-0">
<span className="font-label-sm text-label-sm text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-semibold">Custody: Smt. Sunitha Rao</span>
<span className="material-symbols-outlined text-emerald-600 text-lg">verified</span>
</div>
</div>
{/* Item 4 */}
<div className="py-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="flex items-start gap-space-sm">
<input defaultChecked={true} className="mt-1 w-4 h-4 rounded text-primary focus:ring-primary accent-primary cursor-pointer" id="samagri-4" type="checkbox"/>
<div>
<label className="font-headline-sm text-headline-sm text-on-surface font-semibold cursor-pointer" htmlFor="samagri-4">
                    108 Fresh Pink Lotuses &amp; Bilwa Patras
                  </label>
<p className="font-body-sm text-body-sm text-on-surface-variant">Chilled in moisture-lock coolers, sprinkled with sacred Ganga water; stems cut and ready for Homa offerings.</p>
</div>
</div>
<div className="flex items-center gap-space-sm self-end sm:self-center shrink-0">
<span className="font-label-sm text-label-sm text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-semibold">Temperature 14°C</span>
<span className="material-symbols-outlined text-emerald-600 text-lg">verified</span>
</div>
</div>
{/* Item 5 */}
<div className="py-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="flex items-start gap-space-sm">
<input defaultChecked={true} className="mt-1 w-4 h-4 rounded text-primary focus:ring-primary accent-primary cursor-pointer" id="samagri-5" type="checkbox"/>
<div>
<label className="font-headline-sm text-headline-sm text-on-surface font-semibold cursor-pointer" htmlFor="samagri-5">
                    Pure A2 Vedic Desi Gir Cow Ghee (3 Litres)
                  </label>
<p className="font-body-sm text-body-sm text-on-surface-variant">Bilona-method clarified butter heated in double-walled brass pouring spouts for zero spatter during Sankalpam.</p>
</div>
</div>
<div className="flex items-center gap-space-sm self-end sm:self-center shrink-0">
<span className="font-label-sm text-label-sm text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-semibold">Warmth Ready</span>
<span className="material-symbols-outlined text-emerald-600 text-lg">verified</span>
</div>
</div>
{/* Item 6 */}
<div className="py-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="flex items-start gap-space-sm">
<input defaultChecked={true} className="mt-1 w-4 h-4 rounded text-primary focus:ring-primary accent-primary cursor-pointer" id="samagri-6" type="checkbox"/>
<div>
<label className="font-headline-sm text-headline-sm text-on-surface font-semibold cursor-pointer" htmlFor="samagri-6">
                    Low-Smoke Medicinal Bilwa &amp; Mango Samidha Sticks
                  </label>
<p className="font-body-sm text-body-sm text-on-surface-variant">Naturally solar-cured for 60 days, verified zero chemical additives. Conforms to indoor hotel ballroom norms.</p>
</div>
</div>
<div className="flex items-center gap-space-sm self-end sm:self-center shrink-0">
<span className="font-label-sm text-label-sm text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-semibold">Zero-Smoke Spec</span>
<span className="material-symbols-outlined text-emerald-600 text-lg">verified</span>
</div>
</div>
</div>
</div>
{/* Live Audio & Bilingual Narration Stream Console */}
<div className="p-space-lg rounded-[20px] bg-surface-container-lowest border border-[#E7E5E4] shadow-sm">
<div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-md">
<div>
<span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">Acoustic &amp; Translation Feed</span>
<h3 className="font-headline-md text-headline-md text-on-surface">Bilingual Live Narration Audio Desk</h3>
</div>
<span className="font-label-sm text-label-sm text-emerald-700 bg-emerald-50 px-space-sm py-1 rounded-full font-semibold inline-flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span> 48kHz Direct Digital Link
            </span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div className="p-space-md rounded-xl bg-surface-container-low border border-[#E7E5E4]">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface">Acharya Wireless Lapels</span>
<span className="font-label-sm text-label-sm text-emerald-600 font-semibold">Ch 1-3 Live</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">Captures crisp Vedic accentuation (Svara, Udatta, Anudatta) without Mandapam feedback.</p>
<div className="flex items-center justify-between pt-space-xs border-t border-[#E7E5E4]">
<span className="font-body-sm text-body-sm text-on-surface-variant">Volume Output</span>
<span className="font-label-sm text-label-sm font-semibold text-on-surface">-1.8 dB (Optimum)</span>
</div>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low border border-[#E7E5E4]">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface">NRI &amp; Guest Live Explanations</span>
<span className="font-label-sm text-label-sm text-primary font-semibold">Telugu + English</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">Real-time commentary on cultural significance relayed to Ballroom side speakers and private web stream.</p>
<div className="flex items-center justify-between pt-space-xs border-t border-[#E7E5E4]">
<span className="font-body-sm text-body-sm text-on-surface-variant">Remote Listeners</span>
<span className="font-label-sm text-label-sm font-semibold text-on-surface">84 Family Devices</span>
</div>
</div>
</div>
</div>
</div>
{/* RIGHT COLUMN (Logistics, Safety & Hotlines - 35% / 4 Cols) */}
<div className="lg:col-span-4 flex flex-col gap-space-lg">
{/* Onsite Personnel & Communications Hotlines */}
<div className="p-space-lg rounded-[20px] bg-surface-container-lowest border border-[#E7E5E4] shadow-sm">
<div className="flex items-center justify-between mb-space-md">
<div>
<span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">Command Roster</span>
<h3 className="font-headline-md text-headline-md text-on-surface">Onsite Key Stakeholders</h3>
</div>
<span className="material-symbols-outlined text-secondary">contact_phone</span>
</div>
<div className="flex flex-col gap-space-md">
{/* Priest 1 */}
<div className="p-space-sm rounded-xl bg-surface-container-low border border-[#E7E5E4] flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="relative">
<div className="w-10 h-10 rounded-full bg-secondary-container/30 text-on-secondary-container flex items-center justify-center font-bold text-sm">
                    PS
                  </div>
<span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-surface-container-lowest"></span>
</div>
<div>
<h4 className="font-headline-sm text-headline-sm text-on-surface leading-tight">Brhaspati V. Phanindra</h4>
<span className="font-body-sm text-body-sm text-on-surface-variant">Chief Officiant · Rigveda</span>
</div>
</div>
<a className="w-8 h-8 rounded-full bg-surface-container-lowest border border-[#E7E5E4] hover:bg-surface-container flex items-center justify-center text-primary shadow-sm" href="tel:+919848011234" title="Call Chief Priest">
<span className="material-symbols-outlined text-base">call</span>
</a>
</div>
{/* Concierge */}
<div className="p-space-sm rounded-xl bg-[#FFF8EB] border border-primary/30 flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="relative">
<div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm">
                    KS
                  </div>
<span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-surface-container-lowest"></span>
</div>
<div>
<h4 className="font-headline-sm text-headline-sm text-on-surface leading-tight">Sri K. S. Narasimha Sastry</h4>
<span className="font-body-sm text-body-sm text-primary font-medium">Head Concierge (You)</span>
</div>
</div>
<span className="px-2 py-0.5 rounded bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">Active Floor</span>
</div>
{/* Taj Ballroom Banquet Director */}
<div className="p-space-sm rounded-xl bg-surface-container-low border border-[#E7E5E4] flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-bold text-sm">
                  RV
                </div>
<div>
<h4 className="font-headline-sm text-headline-sm text-on-surface leading-tight">Mr. Rajesh Varma</h4>
<span className="font-body-sm text-body-sm text-on-surface-variant">Taj Banquet Director</span>
</div>
</div>
<div className="flex items-center gap-1">
<span className="font-label-sm text-label-sm text-on-surface-variant px-1.5 py-0.5 rounded bg-surface-container">Radio Ch 3</span>
<a className="w-8 h-8 rounded-full bg-surface-container-lowest border border-[#E7E5E4] hover:bg-surface-container flex items-center justify-center text-primary shadow-sm" href="tel:+919876543210">
<span className="material-symbols-outlined text-base">call</span>
</a>
</div>
</div>
{/* Bride Family Representative */}
<div className="p-space-sm rounded-xl bg-surface-container-low border border-[#E7E5E4] flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-bold text-sm">
                  SR
                </div>
<div>
<h4 className="font-headline-sm text-headline-sm text-on-surface leading-tight">Smt. Sunitha Rao</h4>
<span className="font-body-sm text-body-sm text-on-surface-variant">Bride's Mother (Kanyadanam)</span>
</div>
</div>
<button className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 flex items-center justify-center shadow-sm" data-onclick="pingFamilyWhatsapp('Bride Family')" onClick={(e) => { const code = e.currentTarget.getAttribute('data-onclick'); if(code) { (new Function('event', code)).call(e.currentTarget, e); } }} title="WhatsApp Message">
<span className="material-symbols-outlined text-base">chat</span>
</button>
</div>
{/* Groom Family Representative */}
<div className="p-space-sm rounded-xl bg-surface-container-low border border-[#E7E5E4] flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-bold text-sm">
                  AK
                </div>
<div>
<h4 className="font-headline-sm text-headline-sm text-on-surface leading-tight">Sri V. Anand Kumar</h4>
<span className="font-body-sm text-body-sm text-on-surface-variant">Groom's Father</span>
</div>
</div>
<button className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 flex items-center justify-center shadow-sm" data-onclick="pingFamilyWhatsapp('Groom Family')" onClick={(e) => { const code = e.currentTarget.getAttribute('data-onclick'); if(code) { (new Function('event', code)).call(e.currentTarget, e); } }} title="WhatsApp Message">
<span className="material-symbols-outlined text-base">chat</span>
</button>
</div>
</div>
</div>
{/* Venue Safety & Ballroom Compliance Monitor */}
<div className="p-space-lg rounded-[20px] bg-surface-container-lowest border border-[#E7E5E4] shadow-sm">
<div className="flex items-center justify-between mb-space-md">
<div>
<span className="font-label-sm text-label-sm text-emerald-700 font-bold uppercase tracking-wider">Hotel HVAC &amp; Safety</span>
<h3 className="font-headline-md text-headline-md text-on-surface">Smoke &amp; Heat Compliance</h3>
</div>
<span className="material-symbols-outlined text-emerald-600">thermostat</span>
</div>
<div className="flex flex-col gap-space-md">
{/* Sensor 1: Smoke PPM */}
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant">Mandapam Canopy Smoke Index</span>
<span className="font-label-sm text-label-sm font-bold text-emerald-700">12 PPM <span className="font-normal text-on-surface-variant">/ 45 PPM Max</span></span>
</div>
<div className="w-full bg-surface-container-high rounded-full h-2">
<div className="bg-emerald-500 h-2 rounded-full" style={{width: "27%"}}></div>
</div>
</div>
{/* Sensor 2: Marble Shield Temp */}
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant">Under-Havan Marble Temp</span>
<span className="font-label-sm text-label-sm font-bold text-on-surface">38°C <span className="font-normal text-on-surface-variant">/ Safe &lt;55°C</span></span>
</div>
<div className="w-full bg-surface-container-high rounded-full h-2">
<div className="bg-secondary h-2 rounded-full" style={{width: "42%"}}></div>
</div>
</div>
{/* Sensor 3: Exhaust Vent Flow */}
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant">Exhaust Extraction Airflow</span>
<span className="font-label-sm text-label-sm font-bold text-emerald-700">Optimal (820 CFM)</span>
</div>
<div className="w-full bg-surface-container-high rounded-full h-2">
<div className="bg-emerald-500 h-2 rounded-full" style={{width: "85%"}}></div>
</div>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low text-on-surface-variant font-body-sm text-body-sm flex items-start gap-space-xs">
<span className="material-symbols-outlined text-primary text-base mt-0.5">info</span>
<span>Double-layered vermiculite thermal blanket certified by Taj Chief Engineer at 06:15 AM today.</span>
</div>
</div>
</div>
{/* Contingency & Quick-Action Triggers */}
<div className="p-space-lg rounded-[20px] bg-surface-container-lowest border border-[#E7E5E4] shadow-sm">
<span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">Fast Response Protocol</span>
<h3 className="font-headline-md text-headline-md text-on-surface mb-space-md">Contingency Controls</h3>
<div className="flex flex-col gap-space-sm">
<button className="w-full text-left p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors border border-[#E7E5E4] flex items-center justify-between group" data-onclick="triggerQuickAction('Request Extra Cow Ghee &amp; Flowers Runner')" onClick={(e) => { const code = e.currentTarget.getAttribute('data-onclick'); if(code) { (new Function('event', code)).call(e.currentTarget, e); } }}>
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary">delivery_truck_speed</span>
<div>
<h4 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">Backup Samagri Dispatch</h4>
<span className="font-body-sm text-body-sm text-on-surface-variant">Extra ghee, coconuts, or lotus garlands</span>
</div>
</div>
<span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">chevron_right</span>
</button>
<button className="w-full text-left p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors border border-[#E7E5E4] flex items-center justify-between group" data-onclick="triggerQuickAction('Buffer Ritural Pace +5 min for Photo/Family')" onClick={(e) => { const code = e.currentTarget.getAttribute('data-onclick'); if(code) { (new Function('event', code)).call(e.currentTarget, e); } }}>
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-secondary">pace</span>
<div>
<h4 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">Pacing Buffer Signal</h4>
<span className="font-body-sm text-body-sm text-on-surface-variant">Alert Acharya for 5 min photo window</span>
</div>
</div>
<span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">chevron_right</span>
</button>
<button className="w-full text-left p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors border border-[#E7E5E4] flex items-center justify-between group" data-onclick="triggerQuickAction('Connect with Asthana Siddhanti Phone Verification')" onClick={(e) => { const code = e.currentTarget.getAttribute('data-onclick'); if(code) { (new Function('event', code)).call(e.currentTarget, e); } }}>
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-on-surface-variant">calculate</span>
<div>
<h4 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">Remote Siddhanti Hotline</h4>
<span className="font-body-sm text-body-sm text-on-surface-variant">Live planetary micro-correction call</span>
</div>
</div>
<span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
</section>
{/* Sticky Operational Floating Status Strip */}
<div className="sticky bottom-4 max-w-[1200px] w-full mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 pointer-events-none z-40">
<div className="pointer-events-auto p-space-md rounded-2xl bg-on-surface/95 text-surface-container-lowest backdrop-blur-md shadow-2xl flex flex-wrap items-center justify-between gap-space-md border border-white/10">
<div className="flex items-center gap-space-md">
<div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
<div>
<span className="font-label-sm text-label-sm text-emerald-300 uppercase tracking-widest font-bold">Mandapam Active Protocol</span>
<h4 className="font-headline-sm text-headline-sm text-white">Jeelakarra-Bellam in 23m 48s</h4>
</div>
</div>
<div className="flex items-center gap-space-sm">
<button className="px-space-md py-space-xs rounded-full bg-white/10 hover:bg-white/20 text-white font-label-md text-label-md transition-colors flex items-center gap-1.5 border border-white/20" data-onclick="instantChimeBroadcast()" onClick={(e) => { const code = e.currentTarget.getAttribute('data-onclick'); if(code) { (new Function('event', code)).call(e.currentTarget, e); } }}>
<span className="material-symbols-outlined text-base">notifications_active</span>
<span>Audio Sync Chime</span>
</button>
<button className="px-space-md py-space-xs rounded-full bg-primary-container hover:bg-primary text-white font-label-md text-label-md font-semibold transition-colors flex items-center gap-1.5 shadow-md" data-onclick="emergencyConciergeAlert()" onClick={(e) => { const code = e.currentTarget.getAttribute('data-onclick'); if(code) { (new Function('event', code)).call(e.currentTarget, e); } }}>
<span className="material-symbols-outlined text-base">warning</span>
<span>Concierge Direct Alert</span>
</button>
</div>
</div>
</div>
{/* Notification Toast Modal Container */}
<div className="fixed inset-0 bg-on-surface/40 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4" id="liveModal">
<div className="bg-surface-container-lowest rounded-2xl max-w-md w-full p-space-lg border border-[#E7E5E4] shadow-2xl flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-2xl">campaign</span>
<h4 className="font-headline-sm text-headline-sm text-on-surface">Broadcast Family Muhurtham Alert</h4>
</div>
<button className="text-on-surface-variant hover:text-on-surface" data-onclick="closeModal()" onClick={(e) => { const code = e.currentTarget.getAttribute('data-onclick'); if(code) { (new Function('event', code)).call(e.currentTarget, e); } }}>
<span className="material-symbols-outlined">close</span>
</button>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
        This will immediately trigger an automated WhatsApp message and SMS to all 42 registered family elders asking them to assemble immediately at the Mandapam for Jeelakarra-Bellam Dharanam.
      </p>
<div className="p-space-sm rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm border border-[#E7E5E4]">
        "Auspicious Sumuhurtham in 20 minutes (08:22 AM). All elders and Sumangalis are requested to gather near the holy Vedi at Taj Krishna."
      </div>
<div className="flex items-center justify-end gap-space-sm pt-space-xs">
<button className="px-space-md py-space-sm rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md" data-onclick="closeModal()" onClick={(e) => { const code = e.currentTarget.getAttribute('data-onclick'); if(code) { (new Function('event', code)).call(e.currentTarget, e); } }}>
          Cancel
        </button>
<button className="px-space-md py-space-sm rounded-full bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md font-semibold" data-onclick="confirmBroadcast()" onClick={(e) => { const code = e.currentTarget.getAttribute('data-onclick'); if(code) { (new Function('event', code)).call(e.currentTarget, e); } }}>
          Dispatch WhatsApp Push
        </button>
</div>
</div>
</div>

</div>
    </main>
  );
}
