'use client';

import { useEffect } from 'react';
// Auto-converted from prototype: dandalu_ayyagaru_my_bookings_consecration_dashboard
// Route: /dashboard

export default function Page() {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
  (function() {

  // Simple interactive countdown ticker for ceremonial immersion
  (function() {
    let totalSeconds = 18 * 3600 + 42 * 60 + 19;
    const ticker = document.getElementById('countdown-ticker');
    if (!ticker) return;

    setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--;
        const h = Math.floor(totalSeconds / 3600);
        const m = Math.floor((totalSeconds % 3600) / 60);
        const s = totalSeconds % 60;
        const textSpan = ticker.querySelector('span');
        if (textSpan) {
          textSpan.textContent = \`\${h}h \${m}m \${s < 10 ? '0' : ''}\${s}s\`;
        }
      }
    }, 1000);
  })();
  })();
`;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <main className="w-full pt-16 sm:pt-20 bg-surface min-h-[calc(100dvh-4rem)] sm:min-h-[calc(100dvh-5rem)]">
<div className="flex flex-col w-full">
<div className="max-w-[1920px] mx-auto w-full px-4 sm:px-4 sm:px-6 lg:px-10 lg:px-4 sm:px-4 sm:px-6 lg:px-10-desktop py-space-xl">
{/* Top Header & Context Subtitle */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-lg mb-space-xl">
<div className="space-y-space-xs max-w-2xl">
<div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-wider">
<span className="material-symbols-outlined text-[16px]">account_balance</span>
          Vedic Escrow &amp; Sankalpa Console
        </div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
          My Sacred Bookings &amp; Ceremonial Dashboard
        </h1>
<p className="font-body-md text-body-md text-on-surface-variant">
          Track upcoming consecrated muhurthams, samagri logistics dispatch, purohit credentials, and milestone escrow dakshina status.
        </p>
</div>
{/* Quick T-Minus Live Pulse Chip */}
<div className="shrink-0 flex items-center gap-space-md p-space-md rounded-2xl bg-surface-container-lowest shadow-sm">
<div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary text-[26px]">hourglass_top</span>
</div>
<div>
<div className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Active Muhurtham T-Minus</div>
<div className="font-headline-sm text-headline-sm text-primary flex items-center gap-1.5" id="countdown-ticker">
<span>18h 42m 19s</span>
<span className="inline-block w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
</div>
</div>
</div>
</div>
{/* Metric Status Strips & Filtering Tabs */}
<div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-md mb-space-xl">
{/* Tabs */}
<div className="flex flex-wrap items-center gap-space-xs p-1 rounded-full bg-surface-container">
<button className="px-space-md py-space-sm rounded-full bg-surface-container-lowest shadow-sm font-label-md text-label-md text-on-surface flex items-center gap-1.5 transition-all" type="button">
<span>All Bookings</span>
<span className="w-5 h-5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm flex items-center justify-center">3</span>
</button>
<button className="px-space-md py-space-sm rounded-full font-label-md text-label-md text-primary font-semibold flex items-center gap-1.5 hover:bg-surface-container-high transition-all" type="button">
<span>Upcoming Rites</span>
<span className="w-5 h-5 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm flex items-center justify-center">1</span>
</button>
<button className="px-space-md py-space-sm rounded-full font-label-md text-label-md text-on-surface-variant flex items-center gap-1.5 hover:bg-surface-container-high transition-all" type="button">
<span>Completed Sankalpams</span>
<span className="w-5 h-5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm flex items-center justify-center">2</span>
</button>
<button className="px-space-md py-space-sm rounded-full font-label-md text-label-md text-on-surface-variant flex items-center gap-1.5 hover:bg-surface-container-high transition-all" type="button">
<span>Rescheduled</span>
<span className="w-5 h-5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm flex items-center justify-center">0</span>
</button>
</div>
{/* Quick Status Badges */}
<div className="flex flex-wrap items-center gap-space-sm">
<div className="flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-low text-secondary font-label-md text-label-md">
<span className="material-symbols-outlined text-[18px]">local_shipping</span>
<span>Samagri: <strong className="text-on-surface">In-Transit (Dispatched)</strong></span>
</div>
<div className="flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-secondary-fixed/50 text-on-secondary-fixed font-label-md text-label-md">
<span className="material-symbols-outlined text-[18px]">lock</span>
<span>Escrow: <strong className="text-secondary">25% Locked (₹3,050)</strong></span>
</div>
</div>
</div>
{/* Main 12-Column Responsive Bento Layout */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
{/* Primary Left Column: Active Ceremony & Archive (8 Cols) */}
<div className="lg:col-span-8 flex flex-col gap-space-xl">
{/* ACTIVE BOOKING HERO CARD */}
<div className="bg-surface-container-lowest rounded-2xl shadow-md p-space-lg md:p-space-xl relative overflow-hidden">
{/* Subtle decorative amber ambient accent */}
<div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-gradient-to-br from-secondary-fixed/30 to-primary-fixed/20 blur-3xl pointer-events-none"></div>
{/* Card Header & Badge */}
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-md">
<div>
<div className="flex items-center gap-space-xs mb-1">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-outline">Token #DA-BK-2026-4412</span>
<span className="text-outline">·</span>
<span className="font-label-sm text-label-sm text-primary font-semibold">Krishna Yajurveda Apastamba</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">
                Gruha Pravesham &amp; Vastu Shanti Mahotsavam
              </h2>
</div>
<span className="self-start sm:self-auto inline-flex items-center gap-1.5 px-space-md py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md shadow-sm">
<span className="material-symbols-outlined text-[18px] text-secondary">verified</span>
              Auspicious Muhurtham Confirmed
            </span>
</div>
{/* Grid: Timing, Nakshatra, Location Overview */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md py-space-md my-space-sm bg-surface-container-low rounded-xl p-space-md">
<div className="flex items-start gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center shrink-0 shadow-sm text-primary">
<span className="material-symbols-outlined text-[22px]">calendar_clock</span>
</div>
<div>
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block">Shubha Lagna &amp; Date</span>
<span className="font-headline-sm text-headline-sm text-on-surface block">Friday, Feb 20, 2026</span>
<span className="font-body-sm text-body-sm text-secondary font-medium block">
                  06:45 AM – 08:30 AM IST (Mithuna Lagna · Rohini Nakshatra)
                </span>
</div>
</div>
<div className="flex items-start gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center shrink-0 shadow-sm text-secondary">
<span className="material-symbols-outlined text-[22px]">location_on</span>
</div>
<div>
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block">Sanctum Venue</span>
<span className="font-headline-sm text-headline-sm text-on-surface block">Flat 904, Tower B, My Home Bhooja</span>
<span className="font-body-sm text-body-sm text-on-surface-variant block">
                  Silpa Gram Craft Village, Hitec City, Hyderabad - 500081
                </span>
</div>
</div>
</div>
{/* Assigned Purohits Dossier Sub-panel */}
<div className="my-space-md">
<div className="flex items-center justify-between mb-space-sm">
<h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">group</span>
                Assigned Vedic Officiants (Certified Lineage)
              </h3>
<span className="font-label-sm text-label-sm text-outline">Verified by Sri Shankara Gurukulam</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
{/* Lead Acharya */}
<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div className="flex items-start gap-space-md">
<div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-surface-container-high">
<img className="w-full h-full object-cover" data-alt="Traditional south indian vedic priest in white dhoti and panchakacham with sacred vibhuti and tripundra on forehead, serene temple courtyard lighting, authentic dignified portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9OFw5GDUD5SJTnSZG1Mw1sgZg3S5cjhqcYoSxaswDNaeeX3Dv-ZP6W3ZlT7S6wAmXaSJVEbvqWrsARYx8SLURb_ntGRKzr-S9ZYbo8F1hj55VyqSog58KY9yWEfrvEQw14u1QYSaSAeyG_nWdf7b7LLM747aH8K8jgLuN279td346leXwBl2gyiopdlu9ARWEXL9kLe2JusRSBG4P9dFEY7nf0mDSTHu003WqEgtA"/>
</div>
<div className="min-w-0">
<span className="inline-block px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm mb-1">Chief Acharya</span>
<h4 className="font-headline-sm text-headline-sm text-on-surface truncate">Brahmasri K. Subrahmanya Somayaji</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Krishna Yajurveda (18 Yrs Veda Pathashala)</p>
</div>
</div>
<div className="flex items-center gap-space-xs mt-space-md pt-space-xs">
<a className="flex-1 py-1.5 px-space-sm rounded-full bg-surface-container-high text-on-surface hover:bg-primary-fixed transition-colors font-label-md text-label-md text-center flex items-center justify-center gap-1" href="tel:+919848022331">
<span className="material-symbols-outlined text-[16px]">call</span>
                    Call Acharya
                  </a>
<button className="flex-1 py-1.5 px-space-sm rounded-full bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md flex items-center justify-center gap-1" type="button">
<span className="material-symbols-outlined text-[16px]">verified_user</span>
                    Credentials
                  </button>
</div>
</div>
{/* Sahaya Purohit */}
<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div className="flex items-start gap-space-md">
<div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-surface-container-high">
<img className="w-full h-full object-cover" data-alt="Dignified vedic scholar and assistant priest in traditional angavastram, gentle expression, warm early morning warm ivory temple background lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCm6dEUdY_eQlo3VGjc6d6j-V8sCDhMesE3Tgkhx4Vwp5RS5vp25Z_TkAvCtHjaa4zCd4OMS42vgGpQeJsBkD-V8-W5Y3e52XUfke4nuBfmr6hKZOm2cGLjFx-cFqH8Uoad82-xU6K6_1rXJqKMNpEz3sseYOKNVo_EfaVSVyb4tpORRjKYuKpo5KLwc6XfUlaMgPlFMkSRAAb-1S3j_1S_wruD6JELhB-uRJpsyeJT"/>
</div>
<div className="min-w-0">
<span className="inline-block px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm mb-1">Sahaya Purohit</span>
<h4 className="font-headline-sm text-headline-sm text-on-surface truncate">Sri Phanindra Sastry</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Sanskrit Sahitya &amp; Griha Sutra Vidwan</p>
</div>
</div>
<div className="flex items-center gap-space-xs mt-space-md pt-space-xs">
<a className="flex-1 py-1.5 px-space-sm rounded-full bg-surface-container-high text-on-surface hover:bg-primary-fixed transition-colors font-label-md text-label-md text-center flex items-center justify-center gap-1" href="tel:+919848099881">
<span className="material-symbols-outlined text-[16px]">call</span>
                    Direct Line
                  </a>
<button className="flex-1 py-1.5 px-space-sm rounded-full bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md flex items-center justify-center gap-1" type="button">
<span className="material-symbols-outlined text-[16px]">school</span>
                    Patashala
                  </button>
</div>
</div>
</div>
</div>
{/* 4-Stage Consecration Progress Bar */}
<div className="my-space-lg p-space-md bg-surface-container-low rounded-xl">
<div className="flex items-center justify-between mb-space-md">
<span className="font-label-md text-label-md text-on-surface uppercase tracking-wider font-semibold">Real-Time Consecration Milestones</span>
<span className="font-label-sm text-label-sm text-primary font-bold">STAGE 2 OF 4 IN-FLIGHT</span>
</div>
{/* Milestone Tracker */}
<div className="relative grid grid-cols-1 md:grid-cols-4 gap-space-md">
{/* Step 1 */}
<div className="flex flex-col gap-1.5 relative">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-label-md">
<span className="material-symbols-outlined text-[18px]">done</span>
</div>
<div className="h-1 flex-1 bg-primary rounded-full hidden md:block"></div>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface text-[15px]">1. Muhurtham Aligned</span>
<span className="font-body-sm text-body-sm text-secondary">Verified by Jyotish Vidwan</span>
</div>
{/* Step 2 (Active) */}
<div className="flex flex-col gap-1.5 relative">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold text-label-md shadow-md animate-pulse">
<span className="material-symbols-outlined text-[18px]">local_shipping</span>
</div>
<div className="h-1 flex-1 bg-surface-container-highest rounded-full hidden md:block"></div>
</div>
<span className="font-headline-sm text-headline-sm text-primary text-[15px]">2. Samagri Dispatched</span>
<span className="font-body-sm text-body-sm text-primary-container font-medium">Van DL-04-E-8219 · Arr. 06:00 AM</span>
</div>
{/* Step 3 */}
<div className="flex flex-col gap-1.5 relative">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-bold text-label-md">
                    3
                  </div>
<div className="h-1 flex-1 bg-surface-container-highest rounded-full hidden md:block"></div>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface-variant text-[15px]">3. Pandit Arrival</span>
<span className="font-body-sm text-body-sm text-outline">Expected 06:00 AM (45m prior)</span>
</div>
{/* Step 4 */}
<div className="flex flex-col gap-1.5 relative">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-bold text-label-md">
                    4
                  </div>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface-variant text-[15px]">4. Purna Ahuti &amp; Dakshina</span>
<span className="font-body-sm text-body-sm text-outline">OTP Escrow Final Release</span>
</div>
</div>
</div>
{/* Interactive Actions Bar */}
<div className="flex flex-wrap items-center gap-space-sm pt-space-sm">
<button className="px-space-md py-2.5 rounded-full bg-primary-container text-on-primary font-label-md text-label-md shadow-sm hover:bg-on-primary-container transition-all flex items-center gap-2" type="button">
<span className="material-symbols-outlined text-[18px]">download</span>
              Lagna Patrika &amp; Dossier (PDF)
            </button>
<button className="px-space-md py-2.5 rounded-full bg-surface-container-low text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center gap-2" type="button">
<span className="material-symbols-outlined text-[18px]">shield</span>
              Apartment Safety Protocol
            </button>
<button className="px-space-md py-2.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md hover:bg-secondary-container transition-colors flex items-center gap-2" type="button">
<span className="material-symbols-outlined text-[18px]">account_balance_wallet</span>
              Manage Escrow (₹9,150 Due)
            </button>
<button className="px-space-md py-2.5 rounded-full bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors font-label-md text-label-md flex items-center gap-2 shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">share</span>
              WhatsApp Invite
            </button>
</div>
</div>
{/* PAST RITUALS ARCHIVE SECTION */}
<div className="flex flex-col gap-space-md mt-space-sm">
<div className="flex items-center justify-between">
<h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[24px]">history_edu</span>
              Consecrated Archive &amp; Past Sankalpams
            </h3>
<span className="font-label-md text-label-md text-outline">Stored in Cloud Gotra Vault</span>
</div>
{/* Archive Card 1 */}
<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-lg">
<div className="flex items-start gap-space-md">
<div className="w-14 h-14 rounded-2xl bg-surface-container-high flex items-center justify-center shrink-0 text-primary">
<span className="material-symbols-outlined text-[30px]">local_fire_department</span>
</div>
<div>
<div className="flex items-center gap-space-xs mb-1">
<span className="font-label-sm text-label-sm text-outline">Wed, Nov 12, 2025</span>
<span className="text-outline">·</span>
<span className="inline-flex items-center text-secondary font-label-sm text-label-sm gap-1">
<span className="material-symbols-outlined text-[14px]">done_all</span> Consecrated
                  </span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface">Maha Ganapathi Homam</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  Officiant: Brahmasri Venkata Ramana Siddhanti · Consecrated Silver Bhasma vessel dispatched &amp; received.
                </p>
</div>
</div>
<div className="flex items-center gap-space-xs shrink-0 self-start md:self-center">
<button className="px-space-md py-2 rounded-full bg-surface-container-low hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-1.5 transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">audio_file</span>
                Sankalpam Audio
              </button>
<button className="px-space-md py-2 rounded-full bg-primary-fixed hover:bg-primary text-on-primary-fixed hover:text-on-primary font-label-md text-label-md flex items-center gap-1.5 transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">replay</span>
                Book Annual
              </button>
</div>
</div>
{/* Archive Card 2 */}
<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-lg">
<div className="flex items-start gap-space-md">
<div className="w-14 h-14 rounded-2xl bg-surface-container-high flex items-center justify-center shrink-0 text-secondary">
<span className="material-symbols-outlined text-[30px]">temple_hindu</span>
</div>
<div>
<div className="flex items-center gap-space-xs mb-1">
<span className="font-label-sm text-label-sm text-outline">Tue, Aug 19, 2025 (Shravana Pournami)</span>
<span className="text-outline">·</span>
<span className="inline-flex items-center text-secondary font-label-sm text-label-sm gap-1">
<span className="material-symbols-outlined text-[14px]">done_all</span> Consecrated
                  </span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface">Sri Satyanarayana Swamy Vratam</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  Family Sankalpam performed with 5 Upacharas. Prasadam sanctified and distributed.
                </p>
</div>
</div>
<div className="flex items-center gap-space-xs shrink-0 self-start md:self-center">
<button className="px-space-md py-2 rounded-full bg-surface-container-low hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-1.5 transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">photo_camera</span>
                Keepsake Photos
              </button>
<button className="px-space-md py-2 rounded-full bg-surface-container-low hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-1.5 transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">receipt_long</span>
                Dakshina Receipt
              </button>
</div>
</div>
</div>
</div>
{/* Right-Hand Column: Concierge, Escrow Guarantee & Calendar (4 Cols) */}
<div className="lg:col-span-4 flex flex-col gap-space-lg">
{/* 1. Asthana Concierge Helpdesk Card */}
<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm">
<div className="flex items-center gap-space-md mb-space-md">
<div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0 bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Senior Indian temple concierge officer in formal neat attire wearing chandan tilak on forehead, friendly professional hospitality advisor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdnYPOP2H3rrxsZWgivKqJ2B_hLNSzqK0UqtJpQ7ieUtwtTGp-Pk3AnYbvcJeKzSmI5i7a045J2RIFGb67QIQjacmaJ7jui2h31YtgVGMOd2id0ACpUbCJ5HkMQ7T5jFCL2dsywhV67771rm5nVaP-xF5wNgcRAsP0uCzeWrGGHfvFR7r9W_7C0y0und62LRd7zxOzHM0dnIE-0QJlogF8DnEaIYhMRomzBHqo2K0t"/>
</div>
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline block">Dedicated Ritual Officer</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Sri K. S. Narasimha Sastry</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Personal Asthana Concierge</p>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
            Have queries on havana fire protocols, auspicious guest timings, or pure cow ghee deliveries? Your concierge is active.
          </p>
<div className="flex flex-col gap-space-xs">
<a className="w-full py-2.5 px-space-md rounded-full bg-surface-container-high hover:bg-primary-fixed text-on-surface font-label-md text-label-md flex items-center justify-center gap-2 transition-colors" href="https://wa.me/919121288440" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-[20px] text-primary">chat</span>
              WhatsApp Concierge (+91 91212 88440)
            </a>
<a className="w-full py-2 px-space-md rounded-full text-center text-on-surface-variant hover:text-on-surface font-label-md text-label-md flex items-center justify-center gap-1.5 transition-colors" href="tel:+919121288440">
<span className="material-symbols-outlined text-[18px]">phone_in_talk</span>
              Instant Priority Call
            </a>
</div>
</div>
{/* 2. Sacred Escrow Protection Guarantee Card */}
<div className="bg-surface-container-low rounded-2xl p-space-lg">
<div className="flex items-center gap-space-sm mb-space-sm">
<div className="w-8 h-8 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary shrink-0">
<span className="material-symbols-outlined text-[20px]">security</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Sacred Escrow Protection</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
            The platform locks ritual dakshina in institutional escrow. Purohits never solicit cash at the altar. Funds release purely via confidential devotee OTP once Purna Ahuti is completed.
          </p>
{/* Escrow Metrics Infographic Graphic */}
<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm mb-space-md space-y-2">
<div className="flex justify-between items-center font-body-sm text-body-sm">
<span className="text-on-surface-variant">Samagri &amp; Booking Token (Paid)</span>
<span className="font-semibold text-on-surface">₹3,050</span>
</div>
<div className="flex justify-between items-center font-body-sm text-body-sm">
<span className="text-on-surface-variant">Vedic Dakshina in Escrow (Locked)</span>
<span className="font-semibold text-secondary">₹9,150</span>
</div>
<div className="w-full bg-surface-container rounded-full h-2 mt-1">
<div className="bg-secondary h-2 rounded-full" style={{width: "25%"}}></div>
</div>
<div className="flex justify-between items-center font-label-sm text-label-sm text-outline pt-1">
<span>Token: 25%</span>
<span>Final Ahuti Release: 75%</span>
</div>
</div>
<div className="flex items-center gap-space-xs text-secondary font-label-md text-label-md">
<span className="material-symbols-outlined text-[18px]">verified</span>
<span>100% Refund on priest delay or cancellation</span>
</div>
</div>
{/* 3. Upcoming Auspicious Family Tithis Calendar */}
<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-space-md">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline block">Panchangam Sync</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Family Auspicious Tithis</h3>
</div>
<span className="material-symbols-outlined text-primary text-[24px]">event_repeat</span>
</div>
<div className="space-y-space-md">
{/* Tithi Item 1 */}
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">Feb 28, 2026</span>
<span className="font-label-sm text-label-sm text-outline">Bharadwaja Gotra</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface text-[15px]">Rajesh Varma Janma Nakshatra</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Recommended rite: Navagraha Deepam &amp; Rudrabhishekam at sunrise.</p>
<button className="mt-1 self-start inline-flex items-center gap-1 font-label-md text-label-md text-primary font-semibold hover:underline" type="button">
<span className="material-symbols-outlined text-[16px]">add_circle</span>
                Schedule Ritual with 1-Click
              </button>
</div>
{/* Tithi Item 2 */}
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm">Mar 14, 2026</span>
<span className="font-label-sm text-label-sm text-secondary font-medium">Holika Pournami</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface text-[15px]">Pournami Vratam &amp; Sandhya Deepam</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Recommended rite: Sri Satyanarayana Vratam for household prosperity.</p>
<button className="mt-1 self-start inline-flex items-center gap-1 font-label-md text-label-md text-primary font-semibold hover:underline" type="button">
<span className="material-symbols-outlined text-[16px]">add_circle</span>
                Reserve Acharya Slot
              </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

    </main>
  );
}
