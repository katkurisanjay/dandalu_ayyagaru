'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { useLanguage, Language } from '@/components/providers/LanguageContext';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t.nav.about, path: '/about' },
    { label: t.nav.categories, path: '/poojas' },
    { label: t.nav.booking, path: '/book' },
    { label: t.nav.samagri, path: '/store' },
    { label: t.nav.astrology, path: '/astrology' },
    { label: t.nav.onlineRituals, path: '/online-rituals', live: true },
    { label: t.nav.myBookings, path: '/dashboard' },
  ];

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    }
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClick);
    }
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <header
      ref={menuRef}
      className="fixed top-0 left-0 right-0 z-50 bg-[#FFFDF7]/95 backdrop-blur-md border-b border-[#E7E5E4] transition-all duration-300"
      role="banner"
    >
      {/* Main nav bar */}
      <div className="h-16 sm:h-20 w-full max-w-[1920px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-3">
        
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-3 group flex-shrink-0"
          aria-label="Dandalu Ayyagaru — Home"
        >
          <img
            src="/logo.jpg"
            alt="Dandalu Ayyagaru Logo"
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover drop-shadow-sm flex-shrink-0"
            aria-hidden="true"
          />
          <span className="font-headline-sm text-headline-sm gradient-text font-bold tracking-tight transition-colors leading-tight">
            Dandalu<br className="hidden xs:hidden" />{' '}
            <span className="hidden xs:inline">Ayyagaru</span>
          </span>
        </Link>

        {/* Desktop nav — only shows xl+ */}
        <nav
          className="hidden xl:flex items-center gap-1 2xl:gap-2"
          aria-label="Main navigation"
        >
          {navLinks.map(({ label, path, live }) => (
            <Link
              key={path}
              href={path}
              className={`relative inline-flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors whitespace-nowrap font-label-md text-label-md min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                pathname === path || pathname.startsWith(path + '/')
                  ? 'text-primary font-semibold bg-primary/5'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
              }`}
            >
              {label}
              {live && (
                <span className="inline-flex items-center gap-1 ml-1 px-1.5 py-0.5 rounded-full bg-red-600 text-white text-[9px] font-black uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse inline-block" />
                  LIVE
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Language Switcher Pill (Desktop & Tablet) */}
          <div 
            className="flex items-center p-1 rounded-full bg-[#FFF8E7] border border-[#F0E8D5] shadow-xs text-xs font-semibold"
            role="group"
            aria-label="Language selector"
          >
            {[
              { code: 'en' as Language, label: 'EN' },
              { code: 'te' as Language, label: 'తెలుగు' },
              { code: 'hi' as Language, label: 'हिंदी' },
            ].map(({ code, label }) => (
              <button
                key={code}
                onClick={() => setLanguage(code)}
                className={`px-2.5 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                  language === code
                    ? 'bg-[#7F1D1D] text-white shadow-xs font-bold'
                    : 'text-[#78716C] hover:text-[#4A0404]'
                }`}
                aria-pressed={language === code}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Assistance — hidden on small screens */}
          <a
            href="tel:+919154088200"
            className="hidden lg:inline-flex items-center gap-1.5 font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-[16px] text-primary">phone_in_talk</span>
            <span>+91 91540 88200</span>
          </a>

          {/* Book CTA */}
          <Link
            href="/poojas"
            className="inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-primary-container text-on-primary font-label-md text-label-md shadow-sm hover:bg-primary transition-colors whitespace-nowrap min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <span className="hidden xs:inline">{t.nav.bookPooja}</span>
            <span className="xs:hidden">Book</span>
          </Link>

          {/* Profile avatar — hidden on mobile */}
          <Link
            href="/profile"
            className="relative hidden sm:flex items-center justify-center p-0.5 rounded-full border border-[#E7E5E4] bg-[#FFF8E7] min-h-[40px] min-w-[40px] text-[#92400E] hover:bg-[#FEF3C7] transition-colors"
            aria-label="My Profile"
          >
            <span className="material-symbols-outlined text-[20px]">person</span>
          </Link>

          {/* Mobile/tablet menu toggle — hidden on xl+ */}
          <button
            className="xl:hidden flex items-center justify-center w-11 h-11 rounded-full hover:bg-surface-container text-on-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
          >
            <span className="material-symbols-outlined text-[24px]" aria-hidden="true">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile/Tablet slide-down menu */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="xl:hidden fixed inset-0 top-16 sm:top-20 bg-black/30 backdrop-blur-sm z-40"
            aria-hidden="true"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu panel */}
          <nav
            id="mobile-nav"
            aria-label="Mobile navigation"
            className="xl:hidden absolute top-16 sm:top-20 left-0 right-0 z-50 bg-[#FFFDF7] border-b border-[#E7E5E4] shadow-xl max-h-[calc(100dvh-4rem)] sm:max-h-[calc(100dvh-5rem)] overflow-y-auto"
          >
            <div className="px-4 sm:px-6 py-4 flex flex-col gap-1">
              
              {/* Mobile Language Switcher */}
              <div className="p-3 bg-[#FFF8E7] rounded-2xl border border-[#F0E8D5] flex flex-col gap-2 mb-2">
                <span className="text-[11px] font-bold text-[#92400E] uppercase tracking-wider flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">translate</span>
                  భాషను ఎంచుకోండి / Language
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { code: 'en' as Language, label: 'English' },
                    { code: 'te' as Language, label: 'తెలుగు' },
                    { code: 'hi' as Language, label: 'हिंदी' },
                  ].map(({ code, label }) => (
                    <button
                      key={code}
                      onClick={() => setLanguage(code)}
                      className={`py-2 px-3 rounded-xl text-xs font-bold transition-all text-center ${
                        language === code
                          ? 'bg-[#7F1D1D] text-white shadow-xs'
                          : 'bg-white text-[#57534E] border border-[#E7E5E4]'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {navLinks.map(({ label, path, live }) => (
                <Link
                  key={path}
                  href={path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-xl font-label-md text-label-md transition-colors min-h-[52px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    pathname === path || pathname.startsWith(path + '/')
                      ? 'bg-primary/10 text-primary font-semibold'
                      : 'text-on-surface hover:bg-surface-container'
                  }`}
                >
                  <span>{label}</span>
                  {live && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-600 text-white text-[9px] font-black uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse inline-block" />
                      LIVE
                    </span>
                  )}
                </Link>
              ))}

              <div className="border-t border-[#E7E5E4] my-3" />

              <Link
                href="/profile"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3.5 text-on-surface hover:bg-surface-container rounded-xl min-h-[52px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span className="material-symbols-outlined text-primary" aria-hidden="true">person</span>
                <span className="font-label-md text-label-md">My Profile</span>
              </Link>

              <a
                href="tel:+919154088200"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3.5 text-on-surface hover:bg-surface-container rounded-xl min-h-[52px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span className="material-symbols-outlined text-primary" aria-hidden="true">phone_in_talk</span>
                <span className="font-label-md text-label-md">{t.nav.assistance} (+91 91540 88200)</span>
              </a>

              {/* Safe area bottom padding for notched phones */}
              <div className="h-[env(safe-area-inset-bottom)]" />
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
