import Link from 'next/link'
import Container from '@/components/ui/Container'

const footerLinks = {
  Rituals: [
    { label: 'Ganapathi Homam', href: '#poojas' },
    { label: 'Satyanarayana Vratam', href: '#poojas' },
    { label: 'Gruha Pravesham', href: '#poojas' },
    { label: 'Navagraha Homam', href: '#poojas' },
    { label: 'Wedding Rituals', href: '#poojas' },
    { label: 'Naming Ceremony', href: '#poojas' },
  ],
  Experience: [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Verified Priests', href: '#priest' },
    { label: 'Pooja Kits', href: '#materials' },
    { label: 'Transparent Pricing', href: '#packages' },
  ],
  Company: [
    { label: 'About Dandalu Ayyagaru', href: '#priest' },
    { label: 'Trust & Safety', href: '#trust' },
    { label: 'FAQs', href: '#' },
  ],
  'Legal & Support': [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Concierge Support', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#171717] text-white" aria-label="Footer">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <Container>
          <div className="py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#F97316]/10 border border-[#F97316]/20 rounded-full px-3 py-1 mb-4">
                <span className="text-[#F97316] text-xs font-medium">🪔 Auspicious Muhurtham Booking</span>
              </div>
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-3 text-balance">
                Your pooja matters.<br />
                <span className="text-[#F97316]">Arranging it shouldn't be stressful.</span>
              </h2>
              <p className="text-white/60 text-base max-w-lg">
                Choose the pooja, pick the date, and let the rest fall gracefully into place. Reserve your certified purohit today with Dandalu Ayyagaru.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-[#F97316] text-white font-semibold text-sm hover:bg-[#EA580C] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2 focus-visible:ring-offset-[#171717]"
              >
                Book a Pooja Now →
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full border border-white/20 text-white font-semibold text-sm hover:border-white/40 hover:bg-white/5 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                Speak to Concierge
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Main footer */}
      <Container>
        <div className="py-16 grid grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/logo.jpg"
                alt="Dandalu Ayyagaru Logo"
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="font-display font-bold text-sm text-white">Dandalu Ayyagaru</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-[200px]">
              Traditional rituals, arranged with modern care. No last-minute phone calls. No "Pandit ji is on the way" mystery.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-xs text-white/40">100% Certified Vedic Priests</span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
                {category}
              </h3>
              <ul className="space-y-2.5" role="list">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            © 2025 Dandalu Ayyagaru Technologies Private Limited. Sacred traditions, preserved with precision.
          </p>
          <p className="text-xs text-white/30">
            Auspicious Muhurtham Guarantee · Certified Vedic Lineage
          </p>
        </div>
      </Container>
    </footer>
  )
}
