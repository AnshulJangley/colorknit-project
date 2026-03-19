'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Heart, Flower2, UtensilsCrossed, Camera, MapPin, Plane, ArrowRight, Check, ChevronDown } from 'lucide-react'
import * as Accordion from '@radix-ui/react-accordion'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import CTABanner from '@/components/sections/CTABanner'
import { SERVICES, PACKAGES, FAQ } from '@/lib/constants'
import { cn } from '@/lib/utils'

const iconMap: Record<string, React.ElementType> = {
  Heart, Flower2, UtensilsCrossed, Camera, MapPin, Plane,
}

const categories = ['All', 'Planning', 'Decor', 'Catering', 'Photography', 'Destination', 'Honeymoon']

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://colorknit.in' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://colorknit.in/services' },
  ],
}

// HowTo schema — AEO: AI engines surface this as a direct answer to "how to hire a wedding planner"
const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Plan Your Wedding with ColorKnit Events',
  description: 'ColorKnit Events\' simple 4-step process to plan your dream wedding in Pune.',
  image: 'https://colorknit.in/images/services/srv-planning.jpg',
  totalTime: 'P6M',
  estimatedCost: { '@type': 'MonetaryAmount', currency: 'INR', value: 'Contact for quote' },
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Initial Consultation', text: 'Sit down with our team — virtually or in person — to share your vision, guest count, date preferences, and style.' },
    { '@type': 'HowToStep', position: 2, name: 'Custom Wedding Plan', text: 'We create a bespoke wedding plan with timelines, vendor shortlists, mood boards, and a detailed checklist.' },
    { '@type': 'HowToStep', position: 3, name: 'Vendor Coordination', text: 'We coordinate with our 50+ verified vendors — caterers, decorators, photographers, and more — on your behalf.' },
    { '@type': 'HowToStep', position: 4, name: 'Your Perfect Day', text: 'Our team is on-ground on your wedding day, managing everything flawlessly so you can celebrate without worry.' },
  ],
}

// Service schemas — AEO: individual service entities for AI knowledge graphs
const serviceSchemas = SERVICES.map(service => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.title,
  description: service.description,
  provider: { '@type': 'Organization', name: 'ColorKnit Events', url: 'https://colorknit.in' },
  areaServed: { '@type': 'City', name: 'Pune' },
  url: 'https://colorknit.in/services',
}))

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('All')
  const filtered = activeTab === 'All' ? SERVICES : SERVICES.filter(s => s.category === activeTab)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {serviceSchemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      {/* Hero Banner */}
      <div className="relative h-[380px] md:h-[440px] overflow-hidden">
        <Image
          src="/images/services/srv-planning.jpg"
          alt="Wedding planning services by ColorKnit Events Pune"
          fill sizes="100vw" className="object-cover"
          priority
        />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero-dark)' }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-20">
          <p className="font-fine text-[12px] uppercase tracking-[0.2em] text-brand-goldLight mb-3">
            What We Offer
          </p>
          <h1 className="font-display font-bold text-white" style={{ fontSize: 'clamp(36px,5vw,60px)' }}>
            Our Wedding Services
          </h1>
          <p className="mt-3 font-body text-[16px] text-white/70 max-w-lg">
            Everything you need for your perfect wedding day — handled with love and expertise.
          </p>
          <nav className="mt-4 font-fine text-[13px] text-white/50">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span className="text-white/80">Services</span>
          </nav>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="sticky top-[68px] z-40 bg-white shadow-sm border-b border-brand-neutralLight">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16 py-3 flex gap-2 overflow-x-auto scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={cn(
                'flex-shrink-0 font-body text-[13px] font-medium rounded-full px-5 py-2 transition-all duration-200',
                activeTab === cat
                  ? 'bg-gradient-brand text-white shadow-brand'
                  : 'text-brand-neutral hover:text-brand-rose border border-brand-neutralLight'
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <section className="bg-brand-cream py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((service, i) => {
              const Icon = iconMap[service.icon] || Heart
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-card hover:-translate-y-2 hover:shadow-card-hover transition-all duration-300 group"
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                >
                  <div className="h-56 relative overflow-hidden">
                    <Image src={service.image} alt={service.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-[1.06] transition-transform duration-500" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 font-body text-xs text-brand-rose font-medium">{service.category}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="w-10 h-10 rounded-xl bg-brand-pinkSoft flex-center"><Icon size={18} className="text-brand-rose" /></div>
                    <h3 className="font-body text-[20px] font-semibold text-brand-dark mt-3">{service.title}</h3>
                    <p className="font-fine text-[14px] text-brand-neutral mt-2 leading-relaxed">{service.description}</p>
                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-[#F0E6D3]">
                      <a href="/contact" className="font-body text-[13px] text-brand-rose font-medium hover:underline">Get a Quote</a>
                      <ArrowRight size={16} className="text-brand-rose group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16">
          <SectionHeading
            eyebrow="Choose Your Plan"
            title="Wedding Packages"
            titleLine2="For Every Dream"
            subtitle="Flexible packages, fully customizable to fit your vision perfectly."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {PACKAGES.map((pkg, i) => (
              <div
                key={i}
                className={cn(
                  'rounded-2xl p-8 relative',
                  pkg.featured && 'scale-[1.04] z-10',
                  pkg.color === 'light' && 'bg-white border-2 border-brand-neutralLight',
                  pkg.color === 'brand' && 'bg-gradient-brand text-white shadow-brand',
                  pkg.color === 'dark'  && 'bg-brand-darkNavy text-white'
                )}
                data-aos="fade-up"
                data-aos-delay={i * 120}
              >
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-white text-brand-rose font-body text-xs font-semibold rounded-full px-4 py-1.5 shadow-card whitespace-nowrap">
                      Most Popular
                    </span>
                  </div>
                )}
                <p className={cn('font-fine text-[12px] uppercase tracking-widest mb-2',
                  pkg.color === 'light' ? 'text-brand-rose' : pkg.color === 'dark' ? 'text-brand-gold' : 'text-white/75'
                )}>{pkg.tagline}</p>
                <h3 className={cn('font-display text-[32px] font-bold', pkg.color === 'light' ? 'text-brand-dark' : 'text-white')}>{pkg.name}</h3>
                <div className="w-full h-px bg-current opacity-10 my-6" />
                <ul className="flex flex-col gap-3">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex gap-3 items-start">
                      <Check size={16} className={cn('flex-shrink-0 mt-0.5',
                        pkg.color === 'light' ? 'text-brand-rose' : pkg.color === 'dark' ? 'text-brand-gold' : 'text-white'
                      )} />
                      <span className={cn('font-body text-[14px]',
                        pkg.color === 'light' ? 'text-brand-neutral' : 'text-white/80'
                      )}>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  {pkg.color === 'brand'
                    ? <Button href="/contact" variant="white" className="w-full justify-center">Get Started</Button>
                    : pkg.color === 'dark'
                    ? <Button href="/contact" variant="gold" className="w-full justify-center">Get Started</Button>
                    : <Button href="/contact" variant="secondary" className="w-full justify-center">Get Started</Button>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-cream py-20">
        <div className="max-w-[760px] mx-auto px-4 md:px-8">
          <SectionHeading eyebrow="Got Questions?" title="Frequently Asked" titleLine2="Questions" />
          <Accordion.Root type="single" collapsible className="flex flex-col gap-3">
            {FAQ.map((item, i) => (
              <Accordion.Item
                key={i}
                value={`faq-${i}`}
                className="bg-white rounded-2xl shadow-card overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={i * 60}
              >
                <Accordion.Trigger className="w-full flex justify-between items-center p-6 text-left group">
                  <span className="font-body text-[16px] font-semibold text-brand-dark pr-4">{item.q}</span>
                  <ChevronDown size={20} className="text-brand-rose accordion-chevron flex-shrink-0" />
                </Accordion.Trigger>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <p className="px-6 pb-6 font-body text-[15px] text-brand-neutral leading-relaxed">{item.a}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
