import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react'
import { NAV_LINKS, SERVICES, WA_LINK, CONTACT_INFO } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-brand-darkNavy">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 — Brand */}
          <div>
            <Link href="/">
              <Image
                src="/images/colorknit-logo.webp"
                alt="ColorKnit Events"
                width={160}
                height={56}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="font-body text-[14px] text-white/60 mt-4 leading-relaxed max-w-[240px]">
              We craft memorable events through meticulous planning, innovative design, and flawless execution.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { Icon: Instagram, href: 'https://www.instagram.com/colorknitevents/' },
                { Icon: Facebook,  href: 'https://www.facebook.com/ColorKnitEvents/' },
                { Icon: Youtube,   href: 'https://www.youtube.com/@ColorKnitEvents' },
                { Icon: Linkedin,  href: 'https://www.linkedin.com/company/colorknit-events-n-production/' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex-center text-white/70 hover:bg-brand-rose hover:text-white transition-all duration-300"
                  aria-label="Social link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h3 className="font-body text-[16px] font-semibold text-white mb-5">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-[14px] text-white/60 hover:text-white hover:pl-1 transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <h3 className="font-body text-[16px] font-semibold text-white mb-5">Our Services</h3>
            <ul className="flex flex-col gap-3">
              {SERVICES.map(s => (
                <li key={s.id}>
                  <Link
                    href="/services"
                    className="font-body text-[14px] text-white/60 hover:text-white hover:pl-1 transition-all duration-200"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h3 className="font-body text-[16px] font-semibold text-white mb-5">Get In Touch</h3>
            <ul className="flex flex-col gap-4">
              {[
                { Icon: MapPin, text: 'Fortune House, Baner - Pashan Link Rd, Baner, Pune 411045' },
                { Icon: Phone,  text: CONTACT_INFO.phone, href: CONTACT_INFO.phoneRaw },
                { Icon: Mail,   text: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
                { Icon: Clock,  text: CONTACT_INFO.hours },
              ].map(({ Icon, text, href }, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <Icon size={16} className="text-brand-gold mt-0.5 flex-shrink-0" />
                  {href
                    ? <a href={href} className="font-fine text-[14px] text-white/60 hover:text-white transition-colors">{text}</a>
                    : <span className="font-fine text-[14px] text-white/60">{text}</span>
                  }
                </li>
              ))}
            </ul>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 bg-[#25D366] text-white font-body text-[13px] font-medium rounded-full px-5 py-2.5 hover:opacity-90 transition"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-fine text-[13px] text-white/40">
            © {new Date().getFullYear()} ColorKnit. All rights reserved.
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map(item => (
              <Link key={item} href="#" className="font-fine text-[13px] text-white/40 hover:text-white/70 transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
