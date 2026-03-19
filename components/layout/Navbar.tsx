'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { NAV_LINKS, WA_LINK, CONTACT_INFO } from '@/lib/constants'
import { cn } from '@/lib/utils'

const SERVICES_DROPDOWN = [
  'Full Wedding Planning',
  'Decor & Florals',
  'Catering Coordination',
  'Photography & Video',
  'Destination Weddings',
  'Honeymoon Planning',
]

export default function Navbar() {
  const [scrolled, setScrolled]        = useState(false)
  const [menuOpen, setMenuOpen]        = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false); setServicesOpen(false) }, [pathname])

  return (
    <>
      {/* ── Main Navbar ── */}
      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300',
          scrolled
            ? 'bg-white shadow-nav border-b border-brand-creamWarm'
            : 'bg-white border-b border-brand-creamWarm'
        )}
      >
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16 h-[70px] flex items-center justify-between gap-8">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/colorknit-logo.webp"
              alt="ColorKnit Events n Production"
              width={160}
              height={56}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(link => {
              const isServices = link.label === 'Services'
              return isServices ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button className={cn(
                    'nav-link flex items-center gap-1 px-4 py-2 font-body text-[14px] font-medium text-brand-dark hover:text-brand-rose transition-colors duration-200',
                    pathname.startsWith('/services') && 'active text-brand-rose'
                  )}>
                    {link.label}
                    <ChevronDown size={14} className={cn('transition-transform duration-200', servicesOpen && 'rotate-180')} />
                  </button>
                  <div className={cn(
                    'absolute top-full left-0 pt-2 transition-all duration-200',
                    servicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                  )}>
                    <div className="bg-white rounded-2xl shadow-float border border-brand-creamWarm py-2 min-w-[220px] overflow-hidden">
                      {SERVICES_DROPDOWN.map(s => (
                        <Link key={s} href="/services" className="block px-5 py-2.5 font-body text-[14px] text-brand-dark hover:bg-brand-cream hover:text-brand-rose transition-colors">
                          {s}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'nav-link px-4 py-2 font-body text-[14px] font-medium text-brand-dark hover:text-brand-rose transition-colors duration-200',
                    pathname === link.href && 'active text-brand-rose'
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[13px] font-medium text-[#25D366] border border-[#25D366] rounded-full px-4 py-2 hover:bg-[#25D366] hover:text-white transition-all duration-200"
            >
              WhatsApp
            </a>
            <Link
              href="/contact"
              className="bg-gradient-brand text-white font-body text-[13px] font-semibold rounded-full px-6 py-2.5 shadow-brand btn-shimmer hover:opacity-90 hover:scale-[1.02] transition-all duration-200"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-10 h-10 rounded-xl flex-center text-brand-dark hover:bg-brand-cream transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* ── Mobile full-screen menu ── */}
      <div className={cn(
        'fixed inset-0 z-40 transition-all duration-300 lg:hidden',
        menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      )}>
        <div className="absolute inset-0" style={{ background: 'var(--gradient-dark-luxury)' }} />
        <div className="relative h-full flex flex-col pt-28 px-8 pb-10 overflow-y-auto">
          <nav className="flex flex-col gap-0">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'font-display text-[26px] font-semibold py-4 border-b border-white/10',
                  'text-white/75 hover:text-white transition-colors',
                  pathname === link.href && 'text-brand-goldLight'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto pt-8 flex flex-col gap-3">
            <a href={CONTACT_INFO.phoneRaw} className="flex items-center gap-2 font-fine text-[14px] text-white/60">
              <Phone size={16} className="text-brand-gold" /> {CONTACT_INFO.phone}
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white font-body text-[15px] font-semibold rounded-full px-6 py-3.5 text-center shadow-wa"
            >
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="bg-gradient-brand text-white font-body text-[15px] font-semibold rounded-full px-6 py-3.5 text-center shadow-brand"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
