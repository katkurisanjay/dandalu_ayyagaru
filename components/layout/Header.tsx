'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

const navLinks = [
  { label: 'About', path: '/about' },
  { label: 'Categories', path: '/poojas' },
  { label: 'Instant Booking', path: '/book' },
  { label: 'Sacred Samagri', path: '/store' },
  { label: 'Astrology', path: '/astrology' },
  { label: 'Online Rituals', path: '/online-rituals', live: true },
  { label: 'My Bookings', path: '/dashboard' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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
          <svg
            className="w-9 h-9 sm:w-11 sm:h-11 drop-shadow-sm flex-shrink-0"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="flameGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9d4300" />
                <stop offset="50%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#ffce51" />
              </linearGradient>
              <linearGradient id="flameInner" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#ffce51" />
              </linearGradient>
            </defs>
            <path d="M50 85 C20 85, 10 55, 15 45 C25 65, 45 75, 50 75 C55 75, 75 65, 85 45 C90 55, 80 85, 50 85Z" fill="url(#flameGrad)" opacity="0.95"/>
            <path d="M40 75 C15 70, 20 40, 30 25 C30 45, 40 55, 45 65 C43 68, 41 71, 40 75Z" fill="url(#flameGrad)" opacity="0.85"/>
            <path d="M60 75 C85 70, 80 40, 70 25 C70 45, 60 55, 55 65 C57 68, 59 71, 60 75Z" fill="url(#flameGrad)" opacity="0.85"/>
            <path d="M50 80 C35 70, 35 30, 50 10 C65 30, 65 70, 50 80Z" fill="url(#flameInner)"/>
            <path d="M50 70 C42 60, 45 40, 50 30 C55 40, 58 60, 50 70Z" fill="#FFFDF7"/>
          </svg>
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
          {/* Assistance — hidden on small screens */}
          <a
            href="tel:1800VEDACARE"
            className="hidden lg:inline-flex items-center font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap"
          >
            Need Assistance?
          </a>

          {/* Book CTA */}
          <Link
            href="/poojas"
            className="inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-primary-container text-on-primary font-label-md text-label-md shadow-sm hover:bg-primary transition-colors whitespace-nowrap min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <span className="hidden xs:inline">Book a Pooja</span>
            <span className="xs:hidden">Book</span>
          </Link>

          {/* Profile avatar — hidden on mobile */}
          <Link
            href="/profile"
            className="relative hidden sm:flex items-center justify-center p-0.5 rounded-full border border-outline-variant/60 bg-surface-container-lowest min-h-[44px] min-w-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="My Profile"
          >
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC83w8DZVxYVIwII4H8D5R9QPTqcZiut1Oy9CXBBu51shP1eTqFk04tatPlrwxlMCJRU5IkVnqS8H1-T3oY3LRjUR0nxi7GcEQnwqONzWE6kXnp2sMoYbzw8I-Dq6Xfvo6mNBINb9rNyI9Hb4PmlerXaWG0VosIPa_UoZ3l1upuv7g0fAQLpTB00q3VNIuhW8x886O-VNfdAssG1F33sxioiEY8fgpu8kkjIkaIW6ee"
            />
            <span
              className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-secondary-container border border-surface-container-lowest rounded-full flex items-center justify-center"
              title="Veda Verified"
            >
              <span className="material-symbols-outlined text-[8px] text-on-secondary-container font-bold">verified</span>
            </span>
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
                href="tel:1800VEDACARE"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3.5 text-on-surface hover:bg-surface-container rounded-xl min-h-[52px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span className="material-symbols-outlined text-primary" aria-hidden="true">support_agent</span>
                <span className="font-label-md text-label-md">Need Assistance?</span>
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
