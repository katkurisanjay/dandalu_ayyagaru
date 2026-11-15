'use client';

import { useEffect } from 'react';
// Auto-converted from prototype: dandalu_ayyagaru_nri_family_guest_live_video_stream_bilingual_narration
// Route: /dashboard/live-stream

export default function Page() {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
tailwind.config = { darkMode: "class", theme: { extend: { "colors": { "error-container": "#ffdad6", "on-tertiary-fixed": "#1e1b15", "surface-variant": "#e5e2e1", "surface-container-lowest": "#ffffff", "tertiary-fixed": "#e9e1d8", "outline-variant": "#e0c0b1", "on-surface": "#1c1b1b", "outline": "#8c7164", "secondary-container": "#ffce51", "on-error": "#ffffff", "on-surface-variant": "#584237", "surface-container-high": "#eae7e7", "primary": "#9d4300", "on-secondary": "#ffffff", "background": "#fcf9f8", "secondary-fixed-dim": "#f0c044", "inverse-on-surface": "#f3f0ef", "on-secondary-container": "#735700", "primary-fixed-dim": "#ffb690", "on-tertiary-fixed-variant": "#4a463f", "on-primary": "#ffffff", "on-primary-fixed": "#341100", "on-secondary-fixed": "#251a00", "tertiary-fixed-dim": "#ccc5bc", "on-secondary-fixed-variant": "#5a4300", "on-error-container": "#93000a", "on-primary-container": "#582200", "on-background": "#1c1b1b", "on-tertiary": "#ffffff", "surface-tint": "#9d4300", "inverse-surface": "#313030", "surface-bright": "#fcf9f8", "surface-dim": "#dcd9d9", "secondary": "#775a00", "primary-fixed": "#ffdbca", "tertiary-container": "#a09a91", "surface-container": "#f0eded", "on-tertiary-container": "#36322c", "inverse-primary": "#ffb690", "surface": "#fcf9f8", "on-primary-fixed-variant": "#783200", "error": "#ba1a1a", "primary-container": "#f97316", "surface-container-highest": "#e5e2e1", "tertiary": "#625e56", "secondary-fixed": "#ffdf98", "surface-container-low": "#f6f3f2" }, "borderRadius": { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" }, "spacing": { "gutter-desktop": "2rem", "space-md": "1rem", "space-xs": "0.25rem", "gutter": "1.5rem", "space-lg": "1.5rem", "margin-desktop": "3rem", "margin": "1.5rem", "space-sm": "0.5rem", "space-xl": "2.5rem" }, "fontFamily": { "headline-sm": [ "Manrope" ], "label-sm": [ "Inter" ], "body-lg": [ "Inter" ], "display-hero": [ "Manrope" ], "headline-lg": [ "Manrope" ], "label-md": [ "Inter" ], "headline-lg-mobile": [ "Manrope" ], "body-md": [ "Inter" ], "headline-md": [ "Manrope" ], "display-hero-mobile": [ "Manrope" ], "body-sm": [ "Inter" ] }, "fontSize": { "headline-sm": [ "18px", { "lineHeight": "24px", "letterSpacing": "-0.01em", "fontWeight": "600" } ], "label-sm": [ "11px", { "lineHeight": "14px", "letterSpacing": "0.04em", "fontWeight": "600" } ], "body-lg": [ "16px", { "lineHeight": "26px", "letterSpacing": "-0.01em", "fontWeight": "400" } ], "display-hero": [ "48px", { "lineHeight": "56px", "letterSpacing": "-0.03em", "fontWeight": "600" } ], "headline-lg": [ "32px", { "lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "600" } ], "label-md": [ "13px", { "lineHeight": "16px", "letterSpacing": "0.01em", "fontWeight": "500" } ], "headline-lg-mobile": [ "24px", { "lineHeight": "32px", "letterSpacing": "-0.015em", "fontWeight": "600" } ], "body-md": [ "14px", { "lineHeight": "22px", "letterSpacing": "0em", "fontWeight": "400" } ], "headline-md": [ "22px", { "lineHeight": "28px", "letterSpacing": "-0.015em", "fontWeight": "600" } ], "display-hero-mobile": [ "32px", { "lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "600" } ], "body-sm": [ "13px", { "lineHeight": "18px", "letterSpacing": "0em", "fontWeight": "400" } ] } } } };

    // Muhurtham Countdown Micro-Timer Simulation
    let minutes = 21;
    let seconds = 18;
    const timerEl = document.getElementById('muhurtham-timer');

    setInterval(() => {
      if (seconds > 0) {
        seconds--;
      } else {
        if (minutes > 0) {
          minutes--;
          seconds = 59;
        }
      }
      const mStr = minutes < 10 ? '0' + minutes : minutes;
      const sStr = seconds < 10 ? '0' + seconds : seconds;
      if (timerEl) {
        timerEl.innerHTML = \`\${mStr}:\${sStr} <span class="text-xs font-normal text-on-surface-variant font-sans">(08:22:00 AM IST)</span>\`;
      }
    }, 1000);

    // Interactive Virtual Akshata Showering Button
    const akshataBtn = document.getElementById('btn-akshata');
    const akshataCountEl = document.getElementById('akshata-count');
    let currentCount = 1429;

    if (akshataBtn && akshataCountEl) {
      akshataBtn.addEventListener('click', () => {
        currentCount++;
        akshataCountEl.textContent = currentCount.toLocaleString();
        
        // Quick visual button pulse micro-feedback
        akshataBtn.classList.add('scale-95');
        setTimeout(() => akshataBtn.classList.remove('scale-95'), 150);

        // Append quick feedback wish to list
        const wishesList = document.getElementById('wishes-list');
        if (wishesList) {
          const newWish = document.createElement('div');
          newWish.className = 'p-space-sm rounded-xl bg-surface-container-low flex flex-col gap-1 transition-all duration-300';
          newWish.innerHTML = \`
            <div class="flex items-center justify-between">
              <span class="font-label-md text-label-md text-on-surface font-semibold">You (NRI Live Stream)</span>
              <span class="font-label-sm text-label-sm text-primary font-semibold">Just now</span>
            </div>
            <p class="font-body-sm text-body-sm text-on-surface-variant">Showered fragrant turmeric akshata & rose petals upon the Mandapam sanctum.</p>
            <div class="flex items-center gap-1 text-primary font-label-sm text-label-sm mt-1">
              <span class="material-symbols-outlined text-xs">spa</span>
              <span>Offered with Devotion</span>
            </div>
          \`;
          wishesList.insertBefore(newWish, wishesList.firstChild);
        }
      });
    }

    // Blessing form submission
    const blessingForm = document.getElementById('blessing-form');
    const blessingInput = document.getElementById('blessing-input');
    if (blessingForm && blessingInput) {
      blessingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = blessingInput.value.trim();
        if (text) {
          const wishesList = document.getElementById('wishes-list');
          if (wishesList) {
            const item = document.createElement('div');
            item.className = 'p-space-sm rounded-xl bg-surface-container-low flex flex-col gap-1';
            item.innerHTML = \`
              <div class="flex items-center justify-between">
                <span class="font-label-md text-label-md text-on-surface font-semibold">You (Guest View)</span>
                <span class="font-label-sm text-label-sm text-on-surface-variant">Just now</span>
              </div>
              <p class="font-body-sm text-body-sm text-on-surface leading-normal">“\${text}”</p>
            \`;
            wishesList.insertBefore(item, wishesList.firstChild);
          }
          blessingInput.value = '';
        }
      });
    }
  
`;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <main className="w-full pt-16 sm:pt-20 bg-surface min-h-[calc(100dvh-4rem)] sm:min-h-[calc(100dvh-5rem)]">
<div className="flex flex-col w-full">
{/* Top Broadcast Header & Auspicious Muhurtham Banner */}
<section className="w-full bg-surface-container-low px-4 sm:px-4 sm:px-6 lg:px-10 py-space-md">
<div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
{/* Title & Couple Details */}
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-sm flex-wrap">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-error text-on-error font-label-sm text-label-sm uppercase tracking-wider shadow-sm">
<span className="w-2 h-2 rounded-full bg-surface animate-ping"></span>
            LIVE · 4K ULTRA-HD
          </span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px]">graphic_eq</span>
            48kHz Agamic Spatial Chants
          </span>
<span className="text-on-surface-variant font-body-sm text-body-sm">Taj Krishna Ballroom · Hyderabad</span>
</div>
<div className="flex items-baseline gap-space-sm flex-wrap">
<h1 className="font-headline-md text-headline-md text-on-surface">Ananya Rao <span className="font-label-sm text-label-sm text-on-surface-variant font-normal">(Kasyapa Gotra)</span> &amp; Karthik Bharadwaj <span className="font-label-sm text-label-sm text-on-surface-variant font-normal">(Bharadwaja Gotra)</span></h1>
<span className="font-body-sm text-body-sm text-on-surface-variant">· Vivaha Mahotsavam</span>
</div>
</div>
{/* Planetary Clock & Timezone Selector */}
<div className="flex items-center gap-space-md bg-surface-container-lowest p-space-sm px-space-md rounded-xl shadow-sm">
<div className="flex flex-col text-right">
<span className="font-label-sm text-label-sm uppercase text-primary font-semibold tracking-wider flex items-center justify-end gap-1">
<span className="material-symbols-outlined text-primary text-[14px]">alarm</span>
            T-Minus to Jeelakarra-Bellam
          </span>
<div className="font-headline-sm text-headline-sm text-on-surface font-mono tracking-tight" id="muhurtham-timer">
            21:18 <span className="text-xs font-normal text-on-surface-variant font-sans">(08:22:00 AM IST)</span>
</div>
<span className="font-label-sm text-label-sm text-secondary-fixed-dim font-medium">Vrishabha Lagna · Rohini Nakshatra</span>
</div>
<div className="w-px h-10 bg-outline-variant/30"></div>
<div className="flex flex-col gap-1">
<label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="timezone-select">Your Timezone</label>
<select className="bg-surface-container-low font-label-md text-label-md text-on-surface rounded-lg px-2 py-1 outline-none cursor-pointer" id="timezone-select" defaultValue="IST">
<option value="EST">EST (New York - 09:52 PM)</option>
<option value="PST">PST (San Francisco - 06:52 PM)</option>
<option value="GMT">GMT (London - 02:52 AM)</option>
<option value="IST">IST (Hyderabad - 08:00 AM)</option>
<option value="SGT">SGT (Singapore - 10:30 AM)</option>
</select>
</div>
</div>
</div>
</section>
{/* Main Broadcast Content Stage: 68% Video + 32% Interactive Sidebar */}
<div className="max-w-[1920px] mx-auto w-full px-4 sm:px-4 sm:px-6 lg:px-10 py-space-lg">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
{/* Primary Broadcast Column (12 cols mobile, 8 cols desktop ~ 67-68%) */}
<section className="lg:col-span-8 flex flex-col gap-space-lg">
{/* Video Stream Player Container */}
<div className="relative w-full rounded-2xl overflow-hidden bg-inverse-surface shadow-md group">
{/* Main Feed Video Screen */}
<div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
<img alt="Live Stream View" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AEtjO1XBZzEl_jSmey1ds24TrSeCDYks-4Qi56jtQ4CXIEz4HhuSVCMWDGdpga3NkZGHSlCa71KXXh0kvVyHk5JnIsvgELQk_Ra-lqy2OUT6OSRjnFyqJ5lSqtTCFXvznLySVug4zFPgsNZiZc8YvxeXWUt0jFmiXnxosiJAhKp9WSc5KNdeHq2vLJW-g0UmSzV3QJYgkJ3gxWZhpcMP5gUsX9lagvvQ_C7GyUZck7_Hw7Hklw"/>
{/* Live Overlay Vignette & Micro Indicators */}
<div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/35 pointer-events-none"></div>
{/* Top Camera Controls Bar */}
<div className="absolute top-space-md left-space-md right-space-md flex items-center justify-between pointer-events-auto">
<div className="flex items-center gap-space-xs bg-inverse-surface/80 backdrop-blur-md px-2 py-1 rounded-full text-inverse-on-surface text-label-sm font-label-sm">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span>Asthana Low-Latency (0.2s)</span>
<span className="opacity-40">|</span>
<span className="text-secondary-fixed">Smartha Chants Sync</span>
</div>
{/* Multi-Angle View Selectors */}
<div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md p-1 rounded-full">
<button className="px-2.5 py-1 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm font-semibold transition-all shadow-sm">
                  Cam 1: Sanctum
                </button>
<button className="px-2.5 py-1 rounded-full text-inverse-on-surface hover:bg-white/10 font-label-sm text-label-sm transition-all">
                  Cam 2: Vadhu-Varulu
                </button>
<button className="px-2.5 py-1 rounded-full text-inverse-on-surface hover:bg-white/10 font-label-sm text-label-sm transition-all">
                  Cam 3: Agni Kunda
                </button>
<button className="px-2.5 py-1 rounded-full text-inverse-on-surface hover:bg-white/10 font-label-sm text-label-sm transition-all">
                  Cam 4: Panorama
                </button>
</div>
</div>
{/* Bottom Left Phase Indicator & Live Subtitle Bar */}
<div className="absolute bottom-space-md left-space-md right-space-md flex flex-col gap-space-xs pointer-events-auto">
<div className="flex items-center gap-space-sm">
<span className="px-3 py-1 rounded-full bg-secondary-container/90 text-on-secondary-container font-label-sm text-label-sm font-semibold backdrop-blur-md">
                  Active Rite: Antarpatam Sthapana &amp; Gauri Pooja
                </span>
<span className="px-2.5 py-1 rounded-full bg-white/20 text-white font-label-sm text-label-sm backdrop-blur-md">
                  Sri Vidyaranya Ganapathi Sastry officiating
                </span>
</div>
<div className="flex items-center justify-between text-white/90">
<p className="font-body-sm text-body-sm italic tracking-wide drop-shadow-md">
                  “Kanya varam varayate... The maternal uncles hold the sacred woven silk antarpatam partition.”
                </p>
<div className="flex items-center gap-2">
<button className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm" title="Mute/Unmute">
<span className="material-symbols-outlined text-[18px]">volume_up</span>
</button>
<button className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm" title="Full Screen">
<span className="material-symbols-outlined text-[18px]">fullscreen</span>
</button>
</div>
</div>
</div>
</div>
{/* Broadcast Stream Audio Tracks & Global Controls Strip */}
<div className="bg-surface-container-highest px-space-md py-space-sm flex flex-wrap items-center justify-between gap-space-sm">
{/* Audio Track Selector */}
<div className="flex items-center gap-space-sm">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-base text-primary">headphones</span>
                Audio Stream:
              </span>
<div className="inline-flex rounded-full bg-surface-container-low p-0.5">
<button className="px-3 py-1 rounded-full bg-surface-container-lowest text-primary font-label-sm text-label-sm font-semibold shadow-sm">
                  English + Vedic Chants
                </button>
<button className="px-3 py-1 rounded-full text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm">
                  Agamic Sanskrit Pure
                </button>
<button className="px-3 py-1 rounded-full text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm">
                  Telugu Commentary
                </button>
</div>
</div>
{/* CC and Quality Indicators */}
<div className="flex items-center gap-space-md">
<label className="inline-flex items-center gap-1.5 cursor-pointer font-label-sm text-label-sm text-on-surface-variant">
<input defaultChecked={true} className="accent-primary rounded" type="checkbox"/>
<span>Live Vedic CC (Captions)</span>
</label>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-low px-2 py-0.5 rounded">
                1080p60 · Ultra HD
              </span>
</div>
</div>
</div>
{/* Interactive Remote Devotee Blessing Action Bar */}
<div className="w-full bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<button className="inline-flex items-center gap-2 px-space-lg py-2.5 rounded-full bg-primary-container text-on-primary font-label-md text-label-md shadow-sm hover:bg-primary transition-all active:scale-95" id="btn-akshata">
<span className="material-symbols-outlined text-lg">spa</span>
<span>Shower Virtual Akshata &amp; Pushpam</span>
</button>
<div className="flex flex-col">
<div className="flex items-center gap-1 text-on-surface font-headline-sm text-headline-sm" id="akshata-count">
                1,429
              </div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Remote Sacred Offerings Showered</span>
</div>
</div>
<div className="flex items-center gap-space-sm">
<button className="inline-flex items-center gap-1.5 px-space-md py-2 rounded-full bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-sm text-label-sm transition-colors">
<span className="material-symbols-outlined text-secondary text-base">notifications_active</span>
<span>Ring Temple Bell</span>
</button>
<a className="inline-flex items-center gap-1.5 px-space-md py-2 rounded-full bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-sm text-label-sm transition-colors" href="javascript:void(0)">
<span className="material-symbols-outlined text-primary text-base">menu_book</span>
<span>Sankalpam Booklet (PDF)</span>
</a>
</div>
</div>
{/* Real-Time Bilingual Narration & Agamic Sloka Feed */}
<div className="w-full bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-xl">auto_stories</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Agamic Sloka &amp; English Meaning Feed</h2>
</div>
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span>
              Live Synced to Acharya Mic
            </span>
</div>
{/* Currently Chanting Block */}
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-primary font-semibold uppercase tracking-wider">Rigveda Samhita · 10.85.33 (Vivaha Suktam)</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">08:00:42 AM IST</span>
</div>
{/* Sanskrit / Devanagari Script */}
<p className="font-headline-sm text-headline-sm text-on-surface tracking-normal leading-relaxed">
              ॐ सुमङ्गलीरियं वधूरिमा समेत पश्यत।<br/>
              सौभाग्यमस्यै दत्त्वा याथास्तं विपरेतन॥
            </p>
{/* Telugu Transliteration */}
<div className="bg-surface-container-lowest p-space-sm rounded-lg">
<span className="font-label-sm text-label-sm text-secondary font-medium">Phonetic Telugu:</span>
<p className="font-body-md text-body-md text-on-surface mt-0.5">
                ఓం సుమంగలీరియం వధూరిమా సమేత పశ్యత। సౌభాగ్యమస్యై దత్త్వా యాథాస్తం విపరేతన॥
              </p>
</div>
{/* English Meaning */}
<div className="flex flex-col gap-1 pt-1">
<span className="font-label-sm text-label-sm text-on-surface-variant font-semibold uppercase tracking-wider">English Translation:</span>
<p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                “Behold this auspicious bride gathered here, gaze upon her with blessings in your hearts. Bestow good fortune, health, and steadfast dharma upon her before you depart for your homes.”
              </p>
</div>
{/* Acharya Theological Commentary */}
<div className="p-space-sm rounded-lg bg-surface-container-high/60 flex items-start gap-space-sm mt-1">
<span className="material-symbols-outlined text-secondary text-lg mt-0.5">lightbulb</span>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
<strong className="text-on-surface">Vedic Scholar Insight:</strong> The white silk <em className="text-on-surface">Antarpatam</em> cloth symbolizes the temporary separation of human consciousness before sacred union. At exactly <strong className="text-primary font-medium">08:22:00 AM IST</strong>, as the cloth lowers, both bride and groom apply the sanctified Cumin-Jaggery mixture (<em className="text-on-surface">Jeelakarra-Bellam</em>) on each other’s crown chakra, synchronizing biological and karmic frequencies.
              </p>
</div>
</div>
{/* Previous Chants Archive Snippet */}
<div className="flex items-center justify-between text-on-surface-variant pt-space-xs font-label-md text-label-md">
<span className="flex items-center gap-1 cursor-pointer hover:text-primary">
<span className="material-symbols-outlined text-sm">history</span>
              View 14 previous slokas chanted in Gauri Pooja
            </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Auto-scrolling with priest audio</span>
</div>
</div>
</section>
{/* Right Interactive Sidebar (12 cols mobile, 4 cols desktop ~ 32-33%) */}
<aside className="lg:col-span-4 flex flex-col gap-space-lg">
{/* Sidebar Navigation Tabs */}
<div className="bg-surface-container-lowest p-space-xs rounded-xl shadow-sm flex items-center justify-around">
<button className="tab-btn active px-3 py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-semibold transition-all shadow-sm" data-tab="timeline">
            Ceremony Steps
          </button>
<button className="tab-btn px-3 py-2 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-all" data-tab="guestbook">
            Guest Wishes (184)
          </button>
<button className="tab-btn px-3 py-2 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-all" data-tab="sankalpam">
            Family Gotra
          </button>
</div>
{/* Tab Content 1: Live Wedding Ceremony Pathway Timeline */}
<div className="tab-panel flex flex-col bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm gap-space-md" id="tab-timeline-panel">
<div className="flex items-center justify-between">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Live Vivaha Pathway</h3>
<span className="font-label-sm text-label-sm text-secondary font-semibold uppercase">Step 3 of 7</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Follow each Vedic milestone as it unfolds with exact canonical sequence.
          </p>
{/* Timeline Items */}
<div className="relative flex flex-col gap-space-md pl-4 mt-2">
{/* Timeline Hairline */}
<div className="absolute left-1.5 top-2 bottom-2 w-0.5 bg-outline-variant/40"></div>
{/* Item 1: Completed */}
<div className="relative flex items-start gap-space-sm">
<div className="w-3.5 h-3.5 -ml-1 rounded-full bg-secondary flex items-center justify-center ring-4 ring-surface-container-lowest z-10">
<span className="material-symbols-outlined text-[10px] text-on-secondary font-bold">check</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-on-surface font-semibold">Mangala Snanam</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">06:45 AM</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Purification bath &amp; auspicious harathi</span>
</div>
</div>
{/* Item 2: Completed */}
<div className="relative flex items-start gap-space-sm">
<div className="w-3.5 h-3.5 -ml-1 rounded-full bg-secondary flex items-center justify-center ring-4 ring-surface-container-lowest z-10">
<span className="material-symbols-outlined text-[10px] text-on-secondary font-bold">check</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-on-surface font-semibold">Kasi Yatra &amp; Mahasankalpam</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">07:15 AM</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Solemn oath invoked for 3 generations</span>
</div>
</div>
{/* Item 3: Current Live */}
<div className="relative flex items-start gap-space-sm bg-surface-container-low p-space-sm rounded-xl -ml-2">
<div className="w-4 h-4 -ml-0.5 rounded-full bg-primary flex items-center justify-center ring-4 ring-primary-fixed z-10 animate-pulse">
<span className="w-1.5 h-1.5 rounded-full bg-surface"></span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-primary font-bold">Antarpatam &amp; Gauri Pooja</span>
<span className="px-1.5 py-0.2 bg-primary text-on-primary text-[10px] rounded uppercase font-semibold">Live Now</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Curtain holds couple in quiet anticipation</span>
</div>
</div>
{/* Item 4: Pinnacle Muhurtham */}
<div className="relative flex items-start gap-space-sm">
<div className="w-3.5 h-3.5 -ml-1 rounded-full bg-secondary-fixed-dim ring-4 ring-surface-container-lowest z-10"></div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-on-surface font-semibold text-secondary">Jeelakarra-Bellam</span>
<span className="font-label-sm text-label-sm text-primary font-bold">08:22 AM Sharp</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">The supreme auspicious muhurtham instant</span>
</div>
</div>
{/* Item 5: Upcoming */}
<div className="relative flex items-start gap-space-sm">
<div className="w-3.5 h-3.5 -ml-1 rounded-full bg-outline-variant/60 ring-4 ring-surface-container-lowest z-10"></div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-on-surface font-medium">Mangalasutra &amp; Talambralu</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">08:45 AM</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Tie of the three sacred knots &amp; pearls shower</span>
</div>
</div>
{/* Item 6: Upcoming */}
<div className="relative flex items-start gap-space-sm">
<div className="w-3.5 h-3.5 -ml-1 rounded-full bg-outline-variant/60 ring-4 ring-surface-container-lowest z-10"></div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-on-surface font-medium">Saptapadi (Seven Vows)</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">10:15 AM</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">7 steps circumambulating Agni Bhagawan</span>
</div>
</div>
{/* Item 7: Upcoming */}
<div className="relative flex items-start gap-space-sm">
<div className="w-3.5 h-3.5 -ml-1 rounded-full bg-outline-variant/60 ring-4 ring-surface-container-lowest z-10"></div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-on-surface font-medium">Arundhati &amp; Dhruva Darshanam</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">11:30 AM</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Gazing at the eternal pole star of constancy</span>
</div>
</div>
</div>
</div>
{/* Global NRI Guestbook & Live Feed Component */}
<div className="tab-panel flex flex-col bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm gap-space-md" id="tab-guestbook-panel">
<div className="flex items-center justify-between">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Global Family Presence</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">184 relatives connected worldwide</p>
</div>
<div className="flex -space-x-2">
<span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary-fixed text-primary font-label-sm text-label-sm font-bold">US</span>
<span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-secondary-fixed text-secondary font-label-sm text-label-sm font-bold">UK</span>
<span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm font-bold">SG</span>
</div>
</div>
{/* Recent Guest Blessings Stream */}
<div className="flex flex-col gap-space-sm max-h-72 overflow-y-auto pr-1" id="wishes-list">
{/* Wish 1 */}
<div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-semibold">Mama &amp; Atta (Dallas, TX)</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Just now</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-normal">
                “May Lord Venkateswara bless Ananya and Karthik with longevity, anandam, and supreme samriddhi! Streaming this on the big screen here with grand-parents.”
              </p>
<div className="flex items-center gap-1 text-primary font-label-sm text-label-sm mt-1">
<span className="material-symbols-outlined text-xs">spa</span>
<span>Showered 108 Sacred Akshata grains</span>
</div>
</div>
{/* Wish 2 */}
<div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-semibold">Suresh Rao (San Jose, CA)</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">2 mins ago</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-normal">
                “Chanting is crystal clear. The English translation of the Vivaha Suktam makes this deeply meaningful. Subhamastu!”
              </p>
</div>
{/* Wish 3 */}
<div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-semibold">Dr. Lakshmi B. (London, UK)</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">5 mins ago</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-normal">
                “So wonderful to witness the Antarpatam ritual live. Sending all our love and blessings from London!”
              </p>
<div className="flex items-center gap-1 text-primary font-label-sm text-label-sm mt-1">
<span className="material-symbols-outlined text-xs">spa</span>
<span>Showered 51 Sacred Akshata</span>
</div>
</div>
</div>
{/* Input Box to Write Sacred Blessing */}
<form className="flex flex-col gap-space-xs mt-1" id="blessing-form">
<div className="relative">
<input className="w-full h-11 px-3.5 pr-20 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm placeholder:text-on-surface-variant/60 outline-none focus:bg-surface-container-lowest transition-all" id="blessing-input" placeholder="Type sacred blessing &amp; heartfelt wishes..." type="text"/>
<button className="absolute right-1 top-1 bottom-1 px-3 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm font-semibold hover:bg-primary-container transition-colors flex items-center gap-1" type="submit">
<span>Send</span>
<span className="material-symbols-outlined text-sm">send</span>
</button>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Wishes display directly on the family lounge screen in the Mandapam hall.</span>
</form>
</div>
{/* Remote Gotra & Sankalpam Enrollment Card */}
<div className="w-full bg-secondary-fixed/30 p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-xl">verified</span>
<h4 className="font-headline-sm text-headline-sm text-on-surface">Remote Sankalpam Enrollment</h4>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Ensure your Gotra and family Nakshatras are verbally pronounced during the sacred Saptapadi Homa offering at 10:15 AM IST.
          </p>
<div className="flex items-center justify-between pt-space-xs">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">NRI Family Registry</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">42 Families Registered</span>
</div>
<button className="px-space-md py-2 rounded-full bg-surface-container-lowest text-primary font-label-md text-label-md font-semibold hover:bg-surface-container transition-colors shadow-sm">
              Register Gotra
            </button>
</div>
</div>
{/* NRI Tech Support & Concierge Hotline */}
<div className="w-full bg-surface-container-low p-space-md rounded-2xl flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-2xl">support_agent</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Broadcast Concierge</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">24/7 NRI WhatsApp &amp; Stream Audio Support</span>
</div>
</div>
<a className="px-3 py-1.5 rounded-full bg-surface-container-lowest text-on-surface hover:text-primary font-label-sm text-label-sm font-semibold transition-colors shadow-sm" href="javascript:void(0)">
            Connect
          </a>
</div>
</aside>
</div>
</div>
{/* Client-Side Micro-Interactions Script */}

</div>
    </main>
  );
}
