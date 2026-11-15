'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { mobileMenuVariants, mobileMenuItemVariants } from '@/lib/animations'

const navLinks = [
  { href: '#poojas', label: 'Poojas' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#materials', label: 'Pooja Materials' },
  { href: '#priest', label: 'About Dandalu Ayyagaru' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const target = document.querySelector(href)
    target?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[rgba(255,253,247,0.92)] backdrop-blur-[16px] border-b border-[rgba(231,229,228,0.8)] shadow-[0_1px_8px_rgba(23,23,23,0.04)]'
            : 'bg-transparent'
        }`}
      >
        <Container>
          <nav
            className="flex items-center justify-between h-16 lg:h-18"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] rounded-lg" aria-label="Dandalu Ayyagaru — Home">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F97316] to-[#EA580C] flex items-center justify-center shadow-[0_2px_8px_rgba(249,115,22,0.3)] group-hover:shadow-[0_4px_12px_rgba(249,115,22,0.4)] transition-shadow duration-300">
                <span className="text-white text-sm font-bold font-display">ॐ</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-sm text-[#171717] tracking-tight">Dandalu Ayyagaru</span>
                <span className="text-[10px] text-[#57534E] font-medium tracking-widest uppercase">Traditional Rituals · Modern Care</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <ul className="hidden lg:flex items-center gap-1" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="px-4 py-2 text-sm font-medium text-[#57534E] hover:text-[#F97316] rounded-lg hover:bg-[#FFF7ED] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="primary"
                size="md"
                magnetic
                id="nav-book-cta"
                onClick={() => {
                  const el = document.getElementById('booking')
                  el?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Book a Pooja
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-[#FFF7ED] text-[#57534E] hover:text-[#F97316] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </nav>
        </Container>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-[rgba(255,253,247,0.98)] backdrop-blur-[20px] flex flex-col pt-16 sm:pt-20 pb-8 px-6 lg:hidden"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1 mt-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  custom={i}
                  variants={mobileMenuItemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-4 py-4 text-xl font-display font-semibold text-[#171717] hover:text-[#F97316] border-b border-[#E7E5E4] hover:bg-[#FFF7ED] rounded-lg transition-all duration-200 min-h-[56px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
                  >
                    {link.label}
                  </button>
                </motion.div>
              ))}
              <motion.div
                custom={navLinks.length}
                variants={mobileMenuItemVariants}
                initial="hidden"
                animate="visible"
                className="mt-6"
              >
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  id="mobile-book-cta"
                  onClick={() => {
                    setMobileOpen(false)
                    const el = document.getElementById('booking')
                    el?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Book a Pooja
                </Button>
              </motion.div>
            </nav>

            <div className="mt-auto">
              <p className="text-xs text-[#57534E] text-center">
                Traditional rituals, arranged with modern care.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
