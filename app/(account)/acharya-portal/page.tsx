'use client';

import { useEffect } from 'react';
// Auto-converted from prototype: dandalu_ayyagaru_acharya_portal_dakshina_escrow_command
// Route: /acharya-portal

export default function Page() {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
tailwind.config = {
    darkMode: "class",
    theme: {
      extend: {
        "colors": {
          "secondary": "#775a00",
          "inverse-surface": "#313030",
          "on-secondary-fixed": "#251a00",
          "on-background": "#1c1b1b",
          "primary-fixed": "#ffdbca",
          "on-tertiary-fixed": "#1e1b15",
          "on-error-container": "#93000a",
          "background": "#fcf9f8",
          "primary-fixed-dim": "#ffb690",
          "error": "#ba1a1a",
          "surface-container-lowest": "#ffffff",
          "on-error": "#ffffff",
          "secondary-container": "#ffce51",
          "tertiary-container": "#a09a91",
          "on-secondary-fixed-variant": "#5a4300",
          "on-surface": "#1c1b1b",
          "on-secondary-container": "#735700",
          "surface": "#fcf9f8",
          "secondary-fixed-dim": "#f0c044",
          "on-primary-container": "#582200",
          "on-tertiary-container": "#36322c",
          "primary-container": "#f97316",
          "surface-tint": "#9d4300",
          "surface-container-highest": "#e5e2e1",
          "outline": "#8c7164",
          "tertiary": "#625e56",
          "surface-container-low": "#f6f3f2",
          "on-surface-variant": "#584237",
          "secondary-fixed": "#ffdf98",
          "error-container": "#ffdad6",
          "on-secondary": "#ffffff",
          "on-primary": "#ffffff",
          "tertiary-fixed": "#e9e1d8",
          "on-primary-fixed": "#341100",
          "surface-bright": "#fcf9f8",
          "tertiary-fixed-dim": "#ccc5bc",
          "primary": "#9d4300",
          "outline-variant": "#e0c0b1",
          "surface-container-high": "#eae7e7",
          "surface-variant": "#e5e2e1",
          "on-tertiary": "#ffffff",
          "inverse-primary": "#ffb690",
          "on-primary-fixed-variant": "#783200",
          "inverse-on-surface": "#f3f0ef",
          "surface-container": "#f0eded",
          "surface-dim": "#dcd9d9",
          "on-tertiary-fixed-variant": "#4a463f"
        },
        "borderRadius": {
          "DEFAULT": "0.25rem",
          "lg": "0.5rem",
          "xl": "0.75rem",
          "full": "9999px"
        },
        "spacing": {
          "margin": "1.5rem",
          "space-xs": "0.25rem",
          "space-sm": "0.5rem",
          "space-lg": "1.5rem",
          "margin-desktop": "3rem",
          "gutter-desktop": "2rem",
          "space-xl": "2.5rem",
          "space-md": "1rem",
          "gutter": "1.5rem"
        },
        "fontFamily": {
          "label-md": [
            "Inter"
          ],
          "body-md": [
            "Inter"
          ],
          "headline-lg": [
            "Manrope"
          ],
          "display-hero-mobile": [
            "Manrope"
          ],
          "display-hero": [
            "Manrope"
          ],
          "headline-md": [
            "Manrope"
          ],
          "label-sm": [
            "Inter"
          ],
          "body-lg": [
            "Inter"
          ],
          "headline-lg-mobile": [
            "Manrope"
          ],
          "body-sm": [
            "Inter"
          ],
          "headline-sm": [
            "Manrope"
          ]
        },
        "fontSize": {
          "label-md": [
            "13px",
            {
              "lineHeight": "16px",
              "letterSpacing": "0.01em",
              "fontWeight": "500"
            }
          ],
          "body-md": [
            "14px",
            {
              "lineHeight": "22px",
              "letterSpacing": "0em",
              "fontWeight": "400"
            }
          ],
          "headline-lg": [
            "32px",
            {
              "lineHeight": "40px",
              "letterSpacing": "-0.02em",
              "fontWeight": "600"
            }
          ],
          "display-hero-mobile": [
            "32px",
            {
              "lineHeight": "40px",
              "letterSpacing": "-0.02em",
              "fontWeight": "600"
            }
          ],
          "display-hero": [
            "48px",
            {
              "lineHeight": "56px",
              "letterSpacing": "-0.03em",
              "fontWeight": "600"
            }
          ],
          "headline-md": [
            "22px",
            {
              "lineHeight": "28px",
              "letterSpacing": "-0.015em",
              "fontWeight": "600"
            }
          ],
          "label-sm": [
            "11px",
            {
              "lineHeight": "14px",
              "letterSpacing": "0.04em",
              "fontWeight": "600"
            }
          ],
          "body-lg": [
            "16px",
            {
              "lineHeight": "26px",
              "letterSpacing": "-0.01em",
              "fontWeight": "400"
            }
          ],
          "headline-lg-mobile": [
            "24px",
            {
              "lineHeight": "32px",
              "letterSpacing": "-0.015em",
              "fontWeight": "600"
            }
          ],
          "body-sm": [
            "13px",
            {
              "lineHeight": "18px",
              "letterSpacing": "0em",
              "fontWeight": "400"
            }
          ],
          "headline-sm": [
            "18px",
            {
              "lineHeight": "24px",
              "letterSpacing": "-0.01em",
              "fontWeight": "600"
            }
          ]
        }
      }
    }
  };

  // Copy Shloka functionality
  const copyBtn = document.getElementById('copy-sankalpam-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const shlokaText = "ममोपात्त दुरितक्षयद्वारा श्री परमेश्वर प्रीत्यर्थम्, श्री क्रोधी नाम संवत्सरे, दक्षिणायने, शरदृतौ, आश्वयुज मासे, शुक्ल पक्षे, दशम्याम् तिथौ, स्थिर वासरे, रोहिणी नक्षत्रे, भारद्वाज गोत्रोत्पन्नस्य राजेश शर्मणः, सहधर्मिणी श्रवणी देव्याः सह, गृहे नवप्रवेशे वास्तुदोषोपशमनार्थम्...";
      navigator.clipboard.writeText(shlokaText).then(() => {
        copyBtn.innerHTML = '<span class="material-symbols-outlined text-[14px]">check</span> Copied!';
        setTimeout(() => {
          copyBtn.innerHTML = '<span class="material-symbols-outlined text-[14px]">content_copy</span> Copy Shloka';
        }, 2000);
      });
    });
  }

`;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <main className="w-full pt-16 sm:pt-20 bg-surface min-h-[calc(100dvh-4rem)] sm:min-h-[calc(100dvh-5rem)]">
      <div className="flex flex-col w-full">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 py-8 w-full space-y-10">
          {/* Top Identity & Status Banner */}
          <div className="relative overflow-hidden rounded-2xl bg-surface-container-lowest p-6 lg:p-8 shadow-sm">
            <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-primary-fixed/30 blur-3xl pointer-events-none"></div>
            <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex items-start sm:items-center gap-5">
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-md">
                    <img className="w-full h-full object-cover" data-alt="A dignified South Indian Vedic scholar and Brahmasri Acharya in traditional ivory khadi uttariyam, sacred vibhuti and vermillion tilakam, calm wise eyes, bathed in soft divine morning sanctum illumination." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoyRhtv3z47faAJWFNToPNrgUGazxtv5NaLJnF6RKR6MOOupVtmtJ2UGy11jSnx0B_-QHR2lGxryR9lOy2WEerwK-v4tRKtXU8HuKak3F9yGtfls6zmXQ-H0Xfu7LWcwp55KVIl35cmNA8vnI7Q72QqNN5_Rph3csS9uB2ldbPAlEM20gzSwVptQf8lS6JE5BsJzTKe9Y5cilK4A8EipKMOhsN-FNxbZwGhaMjssS4" />
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center text-[13px] shadow">
                    <span className="material-symbols-outlined text-[14px]">verified</span>
                  </span>
                </div>
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase tracking-wider font-semibold">Tirumala Suvarna Padakam</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Krishna Yajurveda</span>
                    <span className="inline-flex items-center gap-1 text-primary font-label-sm text-label-sm font-semibold">
                      <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span> On-Duty Active Muhurtham
                    </span>
                  </div>
                  <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
                    Brahmasri K. Subrahmanya Somayaji
                  </h1>
                  <p className="font-body-md text-body-md text-on-surface-variant flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span>Taittiriya Sakha · Apastamba Grihya Sutra</span>
                    <span className="text-tertiary">/</span>
                    <span>Veda Adhyayanam 18 Years</span>
                    <span className="text-tertiary">/</span>
                    <span className="text-secondary font-medium">Acharya ID #AA-8842-HYD</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 self-end lg:self-center">
                <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" type="button">
                  <span className="material-symbols-outlined text-[18px]">menu_book</span>
                  <span>Veda Mantradhi Patha</span>
                </button>
                <a className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-all shadow-md" href="#quick-escrow">
                  <span className="material-symbols-outlined text-[18px]">account_balance_wallet</span>
                  <span>Instant Escrow Payout</span>
                </a>
              </div>
            </div>
          </div>
          {/* Metrics Bento Grid (Fintech Precision + Sacred Sanctity) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold tracking-wider">Today's Muhurthams</span>
                <div className="w-9 h-9 rounded-xl bg-primary-fixed flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[20px]">wb_sunny</span>
                </div>
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-display-hero text-display-hero text-on-surface font-bold leading-none">02</span>
                  <span className="font-label-md text-label-md text-primary font-medium">1 In-Flight</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">1 Active Ceremony · 1 Evening Vratam</p>
              </div>
              <div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
                <div className="bg-primary-container h-full rounded-full" style={{ width: "50%" }}></div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold tracking-wider">Escrow Ready to Clear</span>
                <div className="w-9 h-9 rounded-xl bg-secondary-fixed flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-[20px]">lock_open</span>
                </div>
              </div>
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-headline-lg text-headline-lg text-on-surface font-bold leading-none">₹16,650</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Requires 4-Digit Blessing OTP from Yajnashala</p>
              </div>
              <span className="inline-flex items-center gap-1 text-[12px] text-secondary font-medium font-label-sm">
                <span className="material-symbols-outlined text-[14px]">shield</span> Instant UPI Bank Credit Guarantee
              </span>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold tracking-wider">This Month's Dakshina</span>
                <div className="w-9 h-9 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface">
                  <span className="material-symbols-outlined text-[20px]">currency_rupee</span>
                </div>
              </div>
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-headline-lg text-headline-lg text-on-surface font-bold leading-none">₹1,24,500</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Disbursed with 0% platform deduction</p>
              </div>
              <div className="flex items-center gap-1.5 text-secondary font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[15px]">trending_up</span>
                <span>+18.4% vs last Pournami cycle</span>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold tracking-wider">Sanctity &amp; Swaram Score</span>
                <div className="w-9 h-9 rounded-xl bg-secondary-fixed-dim flex items-center justify-center text-on-secondary-fixed">
                  <span className="material-symbols-outlined text-[20px]">star</span>
                </div>
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-display-hero text-display-hero text-on-surface font-bold leading-none">4.98</span>
                  <span className="font-label-md text-label-md text-secondary font-semibold">/ 5.0</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">420+ Grihastha Consecrations</p>
              </div>
              <span className="inline-flex items-center gap-1 text-[12px] text-tertiary font-label-sm">
                <span className="material-symbols-outlined text-[14px]">verified_user</span> 100% Shastra Paripurna Certified
              </span>
            </div>
          </div>
          {/* Main Workspace (2-Column Asymmetric Layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Primary Command Column (7 cols) */}
            <div className="lg:col-span-8 space-y-8">
              {/* 1. Active In-Flight Ceremony Command Card */}
              <section className="bg-surface-container-lowest rounded-2xl shadow-md p-6 lg:p-8 space-y-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-container via-secondary-container to-primary"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-primary-container animate-ping"></span>
                    <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-widest">In-Progress Consecration</span>
                    <span className="text-tertiary">·</span>
                    <span className="font-label-md text-label-md text-on-surface-variant font-semibold">T-Minus 01h 15m to Purna Ahuti</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold">
                    Shukla Dashami · Rohini Muhurtham
                  </span>
                </div>
                <div className="space-y-2">
                  <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
                    Gruha Pravesham &amp; Vastu Shanti Mahotsavam
                  </h2>
                  <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-on-surface-variant font-body-md text-body-md">
                    <span className="flex items-center gap-1.5 text-on-surface font-semibold">
                      <span className="material-symbols-outlined text-[18px] text-secondary">family_restroom</span>
                      Rajesh Varma &amp; Sravani Varma
                    </span>
                    <span>·</span>
                    <span>Bharadwaja Gotram</span>
                    <span>·</span>
                    <span>Rohini &amp; Uttara Bhadra Nakshatram</span>
                  </div>
                </div>
                {/* Location & Gate Security Clearance Pill */}
                <div className="bg-surface-container-low p-4 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[18px]">location_on</span>
                    </div>
                    <div>
                      <p className="font-label-md text-label-md text-on-surface font-semibold">Flat 904, Tower B, My Home Bhooja</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Silpa Gram Craft Village Road, Hitec City, Hyderabad - 500081</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-mono text-[13px] font-semibold flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-secondary">shield_lock</span>
                      Gate Code: <span className="text-primary font-bold">#9042</span>
                    </div>
                    <a className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container-highest text-on-surface font-label-sm text-label-sm hover:bg-surface-container transition-colors" href="javascript:void(0)">
                      <span className="material-symbols-outlined text-[16px]">navigation</span> GPS
                    </a>
                  </div>
                </div>
                {/* Live Sankalpam Recitation Dossier */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold tracking-wider flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px]">menu_book</span> Live Sankalpam Pronunciation Dossier
                    </span>
                    <button className="font-label-sm text-label-sm text-primary hover:underline flex items-center gap-1" id="copy-sankalpam-btn" type="button">
                      <span className="material-symbols-outlined text-[14px]">content_copy</span> Copy Shloka
                    </button>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container-lowest shadow-[inset_0_1px_4px_rgba(0,0,0,0.03)] space-y-3">
                    <p className="font-body-md text-body-md text-on-surface font-serif italic leading-relaxed tracking-wide bg-surface-container-low/50 p-3 rounded-lg">
                      "ममोपात्त दुरितक्षयद्वारा श्री परमेश्वर प्रीत्यर्थम्, श्री क्रोधी नाम संवत्सरे, दक्षिणायने, शरदृतौ, आश्वयुज मासे, शुक्ल पक्षे, दशम्याम् तिथौ, स्थिर वासरे, रोहिणी नक्षत्रे, भारद्वाज गोत्रोत्पन्नस्य राजेश शर्मणः, सहधर्मिणी श्रवणी देव्याः सह, गृहे नवप्रवेशे वास्तुदोषोपशमनार्थम्..."
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-body-sm text-body-sm">
                      <div className="p-2 rounded-lg bg-surface-container">
                        <span className="block text-[11px] font-label-sm text-on-surface-variant uppercase">Yajamana</span>
                        <span className="font-medium text-on-surface">Rajesh Varma</span>
                      </div>
                      <div className="p-2 rounded-lg bg-surface-container">
                        <span className="block text-[11px] font-label-sm text-on-surface-variant uppercase">Dharmapatni</span>
                        <span className="font-medium text-on-surface">Sravani Varma</span>
                      </div>
                      <div className="p-2 rounded-lg bg-surface-container">
                        <span className="block text-[11px] font-label-sm text-on-surface-variant uppercase">Santana Prapti</span>
                        <span className="font-medium text-on-surface">Ananya (Daughter)</span>
                      </div>
                      <div className="p-2 rounded-lg bg-surface-container">
                        <span className="block text-[11px] font-label-sm text-on-surface-variant uppercase">Kula Daivam</span>
                        <span className="font-medium text-on-surface">Sri Venkateswara</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Live Consecration Ritual Milestones Tracker */}
                <div className="space-y-3">
                  <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold tracking-wider block">
                    Vedic Vidhi Milestones &amp; Checkpoints
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-low cursor-pointer">
                      <input defaultChecked={true} className="w-5 h-5 rounded text-primary-container focus:ring-0 accent-primary" disabled={true} type="checkbox" />
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md font-medium text-on-surface line-through text-on-surface-variant">1. Ganapathi Puja &amp; Punyahavachanam</span>
                        <span className="font-label-sm text-label-sm text-secondary font-medium">Completed at 06:15 AM</span>
                      </div>
                    </label>
                    <label className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-low cursor-pointer">
                      <input defaultChecked={true} className="w-5 h-5 rounded text-primary-container focus:ring-0 accent-primary" disabled={true} type="checkbox" />
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md font-medium text-on-surface line-through text-on-surface-variant">2. Vastu Kalasha Sthapana &amp; Navagraha</span>
                        <span className="font-label-sm text-label-sm text-secondary font-medium">Completed at 07:05 AM</span>
                      </div>
                    </label>
                    <label className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-low cursor-pointer">
                      <input defaultChecked={true} className="w-5 h-5 rounded text-primary-container focus:ring-0 accent-primary" disabled={true} type="checkbox" />
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md font-medium text-on-surface line-through text-on-surface-variant">3. Agni Pratishthapana &amp; Havis Offerings</span>
                        <span className="font-label-sm text-label-sm text-secondary font-medium">Ignited &amp; Chanting ongoing</span>
                      </div>
                    </label>
                    <label className="flex items-center gap-3 p-3 rounded-xl bg-secondary-fixed/40">
                      <input className="w-5 h-5 rounded text-primary-container focus:ring-0 accent-primary" type="checkbox" />
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md font-bold text-on-surface">4. Maha Purna Ahuti &amp; Mangala Harati</span>
                        <span className="font-label-sm text-label-sm text-primary font-semibold">Scheduled at 08:30 AM Muhurtham</span>
                      </div>
                    </label>
                  </div>
                </div>
                {/* Escrow Release Action Box */}
                <div className="p-5 rounded-2xl bg-surface-container space-y-4" id="quick-escrow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[20px] text-primary">security</span>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Conclude Ritual &amp; Disburse ₹7,500 Dakshina</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase">Escrow Locked · 0% Deductions</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Upon performing the Maha Purna Ahuti, ask the Yajamana (Devotee Rajesh Varma) for the sacred 4-digit completion OTP sent to his Dandalu Ayyagaru mobile app. Entering it initiates immediate IMPS/UPI settlement to your registered bank account.
                  </p>
                  <form className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-2">
                      <input className="w-32 h-11 text-center font-mono font-bold text-[18px] tracking-widest rounded-xl bg-surface-container-lowest text-on-surface shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container" maxLength={4} placeholder="••••" required={true} type="text" />
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Yajamana OTP</span>
                    </div>
                    <button className="h-11 px-6 rounded-xl bg-primary-container text-on-primary font-label-md text-label-md font-semibold hover:bg-primary transition-colors shadow-sm flex items-center gap-2" type="submit">
                      <span className="material-symbols-outlined text-[18px]">verified</span>
                      Release ₹7,500 Instantly
                    </button>
                  </form>
                  <div className="hidden p-3 rounded-lg bg-surface-container-lowest text-secondary font-label-md text-label-md flex items-center gap-2" id="escrow-msg">
                    <span className="material-symbols-outlined text-[18px]">check_circle</span>
                    <span>Sanctity OTP verified. ₹7,500 initiated via UTR #HDFC00921443209 to Brahmasri K. Subrahmanya Somayaji.</span>
                  </div>
                </div>
              </section>
              {/* 2. Upcoming Bookings Manifest & Calendar Queue */}
              <section className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-headline-md text-headline-md text-on-surface font-bold">Upcoming Consecration Queue</h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Assigned and verified by the Dandalu Ayyagaru Asthana Secretariat</p>
                  </div>
                  <span className="font-label-sm text-label-sm text-secondary font-semibold px-3 py-1 rounded-full bg-secondary-fixed">2 Confirmed Ahead</span>
                </div>
                <div className="space-y-3">
                  {/* Queue Card 1 */}
                  <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm space-y-4 hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary font-bold">
                          <span className="material-symbols-outlined text-[20px]">candle</span>
                        </div>
                        <div>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Sri Satyanarayana Swamy Vratam</h3>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Devotee: Venkat Rao (Kashyapa Gotra) · Full Family Sankalpam</p>
                        </div>
                      </div>
                      <div className="flex sm:flex-col items-end justify-between sm:justify-center">
                        <span className="font-headline-sm text-headline-sm text-secondary font-bold">₹4,500</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">Escrow Held</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-body-sm font-body-sm">
                      <div className="flex items-center gap-4 text-on-surface-variant">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px] text-primary">schedule</span> Today · 05:30 PM IST
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px] text-primary">pin_drop</span> Raghavendra Colony, Kondapur
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors" type="button">
                          Lineage Dossier
                        </button>
                        <button className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors" type="button">
                          Samagri Verified (24/24)
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Queue Card 2 */}
                  <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm space-y-4 hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary font-bold">
                          <span className="material-symbols-outlined text-[20px]">local_fire_department</span>
                        </div>
                        <div>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Maha Ganapathi Homam &amp; Ayushya Suktam</h3>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Devotee: Dr. Anand Sharma · Shasti Poorthi Prelude</p>
                        </div>
                      </div>
                      <div className="flex sm:flex-col items-end justify-between sm:justify-center">
                        <span className="font-headline-sm text-headline-sm text-secondary font-bold">₹4,800</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">Escrow Held</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-body-sm font-body-sm">
                      <div className="flex items-center gap-4 text-on-surface-variant">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px] text-primary">schedule</span> Tomorrow · 06:45 AM (Brahmi Muhurtham)
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px] text-primary">pin_drop</span> Road No. 36, Jubilee Hills
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors" type="button">
                          Lineage Dossier
                        </button>
                        <button className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors" type="button">
                          Samagri Dispatched
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* 3. Dakshina Escrow Ledger & Direct Payouts */}
              <section className="bg-surface-container-lowest rounded-2xl p-6 lg:p-8 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="font-headline-md text-headline-md text-on-surface font-bold">Vedic Dakshina Escrow Ledger</h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Direct UPI &amp; NEFT clearing with zero commission or intermediary fees</p>
                  </div>
                  <button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold hover:bg-surface-container transition-colors" type="button">
                    <span className="material-symbols-outlined text-[16px]">download</span> Download Samvatsara Tax Dossier
                  </button>
                </div>
                {/* Transaction Ledger Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left font-body-sm text-body-sm">
                    <thead>
                      <tr className="text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
                        <th className="pb-3 font-semibold">Date &amp; UTR Ref</th>
                        <th className="pb-3 font-semibold">Consecration / Devotee</th>
                        <th className="pb-3 font-semibold">Platform Fee</th>
                        <th className="pb-3 font-semibold">Dakshina Disbursed</th>
                        <th className="pb-3 font-semibold text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="space-y-2">
                      <tr className="hover:bg-surface-container-low transition-colors rounded-lg">
                        <td className="py-3 pr-4">
                          <span className="block font-medium text-on-surface">Oct 24, 2024</span>
                          <span className="font-mono text-[11px] text-tertiary">UTR #UPI/429810488102</span>
                        </td>
                        <td className="py-3 pr-4">
                          <span className="font-medium text-on-surface">Navagraha Shanti Homam</span>
                          <span className="block text-on-surface-variant text-[12px]">K. Srinivas Murthy (Gachibowli)</span>
                        </td>
                        <td className="py-3 pr-4 font-mono text-secondary">₹0.00 (Zero)</td>
                        <td className="py-3 pr-4 font-bold text-on-surface font-mono">₹6,200.00</td>
                        <td className="py-3 text-right">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[11px] font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Settled UPI
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container-low transition-colors rounded-lg">
                        <td className="py-3 pr-4">
                          <span className="block font-medium text-on-surface">Oct 22, 2024</span>
                          <span className="font-mono text-[11px] text-tertiary">UTR #NEFT/AXIS89218731</span>
                        </td>
                        <td className="py-3 pr-4">
                          <span className="font-medium text-on-surface">Sudharshana Homam &amp; Vastu</span>
                          <span className="block text-on-surface-variant text-[12px]">T. Padmanabhan (Banjara Hills)</span>
                        </td>
                        <td className="py-3 pr-4 font-mono text-secondary">₹0.00 (Zero)</td>
                        <td className="py-3 pr-4 font-bold text-on-surface font-mono">₹11,500.00</td>
                        <td className="py-3 text-right">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[11px] font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Settled NEFT
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container-low transition-colors rounded-lg">
                        <td className="py-3 pr-4">
                          <span className="block font-medium text-on-surface">Oct 20, 2024</span>
                          <span className="font-mono text-[11px] text-tertiary">UTR #UPI/429400192831</span>
                        </td>
                        <td className="py-3 pr-4">
                          <span className="font-medium text-on-surface">Ayushya Homam (1st Birthday)</span>
                          <span className="block text-on-surface-variant text-[12px]">G. Venkataramani (Madhapur)</span>
                        </td>
                        <td className="py-3 pr-4 font-mono text-secondary">₹0.00 (Zero)</td>
                        <td className="py-3 pr-4 font-bold text-on-surface font-mono">₹5,000.00</td>
                        <td className="py-3 text-right">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[11px] font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Settled UPI
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
            {/* Secondary Sidebar Column (4 cols) */}
            <div className="lg:col-span-4 space-y-8">
              {/* 1. Priest Veda Adhyayanam & Lineage Accreditation Card */}
              <section className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm space-y-5">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold tracking-wider">
                    Vedic Lineage &amp; Accreditation
                  </span>
                  <span className="material-symbols-outlined text-[20px] text-primary">workspace_premium</span>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-surface-container-low space-y-2">
                    <span className="block font-label-sm text-label-sm text-secondary font-bold uppercase">Accredited Alma Mater</span>
                    <p className="font-headline-sm text-headline-sm text-on-surface font-bold leading-snug">
                      Sri Venkateswara Veda Vishwavidyalayam (TTD, Tirumala)
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      12 Years Residential Rigorous Gurukula Veda Adhyayanam with Suvarna Padakam (Gold Medal) in Taittiriya Samhita.
                    </p>
                  </div>
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-body-sm font-body-sm">
                      <span className="text-on-surface-variant">Swaram &amp; Phonetics Precision</span>
                      <span className="font-bold text-on-surface">100% Shastra Compliant</span>
                    </div>
                    <div className="w-full bg-surface-container rounded-full h-2 overflow-hidden">
                      <div className="bg-secondary h-full rounded-full" style={{ width: "100%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2 font-body-sm text-body-sm">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-secondary">verified</span>
                      <span className="text-on-surface">Certified by Sri Shankara Gurukulam, Kalady</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-secondary">verified</span>
                      <span className="text-on-surface">Vaidika Smartha Prayoga Praveena</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-secondary">verified</span>
                      <span className="text-on-surface">Annual Background &amp; Criminal Verification Clear</span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <button className="w-full py-2.5 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md font-semibold hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2" type="button">
                      <span className="material-symbols-outlined text-[18px]">verified</span>
                      <span>View Full Shastra Sanad &amp; Credentials</span>
                    </button>
                  </div>
                </div>
              </section>
              {/* 2. Tithi & Muhurtham Availability Manager */}
              <section className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Muhurtham Calendar</h2>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">Kartika Masam · Shuklapaksha</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface font-medium">Nov 2024</span>
                </div>
                {/* Mini Calendar Grid */}
                <div className="space-y-3">
                  <div className="grid grid-cols-7 gap-1 text-center font-label-sm text-label-sm text-on-surface-variant font-semibold">
                    <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center font-body-sm text-body-sm">
                    <span className="p-2 text-tertiary">27</span>
                    <span className="p-2 text-tertiary">28</span>
                    <span className="p-2 text-tertiary">29</span>
                    <span className="p-2 text-tertiary">30</span>
                    <span className="p-2 rounded-lg bg-surface-container-low font-medium">1</span>
                    <span className="p-2 rounded-lg bg-secondary-fixed text-on-secondary-fixed font-bold">2</span>
                    <span className="p-2 rounded-lg bg-primary-container text-on-primary font-bold shadow-sm">3</span>
                    <span className="p-2 rounded-lg bg-surface-container-low font-medium">4</span>
                    <span className="p-2 rounded-lg bg-secondary-fixed text-on-secondary-fixed font-bold">5</span>
                    <span className="p-2 rounded-lg bg-surface-container-low font-medium">6</span>
                    <span className="p-2 rounded-lg bg-surface-container-high line-through text-on-surface-variant">7</span>
                    <span className="p-2 rounded-lg bg-surface-container-low font-medium">8</span>
                    <span className="p-2 rounded-lg bg-secondary-fixed text-on-secondary-fixed font-bold">9</span>
                    <span className="p-2 rounded-lg bg-surface-container-low font-medium">10</span>
                  </div>
                </div>
                {/* Calendar Legend */}
                <div className="flex flex-wrap items-center gap-3 font-label-sm text-label-sm text-on-surface-variant pt-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-primary-container"></span>
                    <span>Active Today</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-secondary-fixed"></span>
                    <span>Booked</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-surface-container-high"></span>
                    <span>Blocked/Asthana</span>
                  </div>
                </div>
                {/* Quick Toggle for Vivaha */}
                <div className="p-4 rounded-xl bg-surface-container-low flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="font-label-md text-label-md font-bold text-on-surface block">Vivaha Multi-Day Inquiries</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant block">Open for 2-day wedding rites</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input defaultChecked={true} className="sr-only peer" type="checkbox" />
                    <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
                  </label>
                </div>
              </section>
              {/* 3. Acharya Help Desk & Emergency Support */}
              <section className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[20px]">support_agent</span>
                  </div>
                  <div>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Asthana Concierge Desk</h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Dedicated 24/7 Acharya Support</p>
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Experiencing missing ritual samagri, apartment gate access delays, or transport bottlenecks? The central Asthana desk intervenes immediately.
                </p>
                <div className="p-4 rounded-xl bg-surface-container space-y-2">
                  <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold block">Acharya Priority Hotline</span>
                  <div className="flex items-center justify-between">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold font-mono">+91 91212 88440</span>
                    <a className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary-container text-on-primary font-label-sm text-label-sm font-semibold hover:bg-primary transition-colors" href="tel:+919121288440">
                      <span className="material-symbols-outlined text-[16px]">call</span> Call Now
                    </a>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1 font-label-sm text-label-sm">
                  <button className="py-2.5 px-3 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors text-center font-medium" type="button">
                    Missing Samagri Dispatch
                  </button>
                  <button className="py-2.5 px-3 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors text-center font-medium" type="button">
                    Security Gate Clearance
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
