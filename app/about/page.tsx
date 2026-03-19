import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Us | ColorKnit Events — Wedding Planners in Pune Since 2012',
  description: 'Meet the ColorKnit Events team — passionate wedding planners in Pune with 12+ years of experience. We\'ve crafted 500+ weddings across Maharashtra & India. Know our story.',
  alternates: { canonical: 'https://colorknit.in/about' },
  openGraph: {
    url: 'https://colorknit.in/about',
    title: 'About ColorKnit Events | Pune\'s Trusted Wedding Planners',
    description: '12+ years, 500+ weddings, a team that treats every celebration as their own. Based in Baner, Pune.',
  },
}
import { Heart, Award, Users, Sparkles } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import CTABanner from '@/components/sections/CTABanner'
import { TEAM } from '@/lib/constants'

const values = [
  { icon: Heart,    title: 'Love in Every Detail',  desc: 'We pour genuine care into every element of your wedding. For us, it\'s never just a job — it\'s someone\'s most important day.' },
  { icon: Award,    title: 'Excellence Without Compromise', desc: 'From our vetted vendors to our meticulous planning process, we hold ourselves to the highest standards — always.' },
  { icon: Sparkles, title: 'Your Vision, Amplified', desc: 'We don\'t impose our aesthetic. We take your dreams and amplify them into something even more beautiful than you imagined.' },
]

const milestones = [
  { year: '2012', title: 'ColorKnit Founded',        desc: 'Started with a small team of 3 in Pune with a big dream.' },
  { year: '2015', title: 'First 100 Weddings',       desc: 'Reached our 100th wedding milestone. Expanded our vendor network.' },
  { year: '2018', title: 'Destination Weddings',     desc: 'Launched destination wedding services across India.' },
  { year: '2020', title: 'Virtual Planning Launched', desc: 'Adapted to serve couples through the pandemic with virtual consultations.' },
  { year: '2022', title: '400+ Weddings Milestone',  desc: 'Celebrated 400 love stories with a team of 15 dedicated planners.' },
  { year: '2024', title: 'Pune\'s #1 Planner',       desc: 'Rated Pune\'s most trusted wedding planners by WeddingWire India.' },
]

const aboutSchemas = [
  // BreadcrumbList
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://colorknit.in' },
      { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://colorknit.in/about' },
    ],
  },
  // Person schema for founder — AEO: AI engines understand who runs this business
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Priya Kulkarni',
    jobTitle: 'Founder & Lead Wedding Planner',
    worksFor: { '@type': 'Organization', name: 'ColorKnit Events', url: 'https://colorknit.in' },
    description: 'Priya Kulkarni is the founder of ColorKnit Events, Pune\'s most trusted wedding planner since 2012. With 12+ years of experience, she has crafted over 500 weddings across Maharashtra and India.',
    knowsAbout: ['Wedding Planning', 'Event Management', 'Wedding Decor', 'Destination Weddings'],
    url: 'https://colorknit.in/about',
  },
  // AboutPage speakable — AEO: marks content for AI/voice reading
  {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About ColorKnit Events',
    url: 'https://colorknit.in/about',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'blockquote', 'section p:first-of-type'],
    },
    mainEntity: {
      '@type': 'Organization',
      name: 'ColorKnit Events',
      foundingDate: '2012',
      foundingLocation: { '@type': 'Place', name: 'Pune, Maharashtra, India' },
      description: 'ColorKnit Events was founded in 2012 by Priya Kulkarni in Pune, Maharashtra. The company specializes in full wedding planning, decor, catering coordination, photography, and destination weddings across India.',
    },
  },
]

export default function AboutPage() {
  return (
    <>
      {aboutSchemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      {/* Hero */}
      <div className="relative h-[340px] overflow-hidden">
        <Image src="/images/gallery/9baa9fabed9356f3b6e4efefcffbb2c2.jpg" alt="ColorKnit Events — wedding ceremony with couple at mandap in Pune" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero-dark)' }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-20">
          <p className="font-fine text-[12px] uppercase tracking-[0.2em] text-brand-goldLight mb-3">Our Story</p>
          <h1 className="font-display font-bold text-white" style={{ fontSize: 'clamp(36px,5vw,60px)' }}>About ColorKnit</h1>
          <nav className="mt-3 font-fine text-[13px] text-white/50">
            <a href="/" className="hover:text-white">Home</a>
            <span className="mx-2">/</span>
            <span className="text-white/80">About</span>
          </nav>
        </div>
      </div>

      {/* Story split */}
      <section className="bg-white py-24">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image collage */}
            <div className="grid grid-cols-2 gap-4" data-aos="zoom-in">
              <div className="col-span-2 relative h-64 rounded-2xl overflow-hidden">
                <Image src="/images/services/srv-planning.jpg" alt="ColorKnit Events team planning a wedding in Pune" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="relative h-44 rounded-2xl overflow-hidden">
                <Image src="/images/services/srv-decor.jpg" alt="Luxury wedding decor and florals by ColorKnit Events Pune" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
              </div>
              <div className="relative h-44 rounded-2xl overflow-hidden">
                <Image src="/images/services/srv-destination.jpg" alt="Destination wedding at Goa beach planned by ColorKnit Events" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
              </div>
            </div>
            {/* Text */}
            <div data-aos="fade-up" data-aos-delay="150">
              <SectionHeading eyebrow="Our Story" title="Born From a Passion" titleLine2="For Love Stories" align="left" />
              <p className="font-body text-[16px] text-brand-neutral leading-[1.75] mb-4">
                ColorKnit was born in 2012 when our founder Priya Kulkarni planned her sister&apos;s wedding and realized how fragmented and stressful the process was. She set out to create a one-stop wedding experience — warm, professional, and completely personal.
              </p>
              <p className="font-body text-[16px] text-brand-neutral leading-[1.75] mb-6">
                Today, with over 500 weddings and a team of 15 passionate planners, ColorKnit is Pune&apos;s most trusted name in wedding management. But our heart remains the same — we treat every couple&apos;s wedding as if it were our own.
              </p>
              <blockquote className="border-l-4 border-brand-rose pl-6 italic font-display text-[20px] text-brand-dark leading-snug">
                &ldquo;Every love story is beautiful. Our job is to make yours unforgettable.&rdquo;
                <footer className="mt-3 font-fine text-[13px] text-brand-neutral not-italic">— Priya Kulkarni, Founder</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gradient-hero-pink py-24">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16">
          <SectionHeading eyebrow="What We Stand For" title="Our Values" titleLine2="Drive Everything We Do" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-card text-center" data-aos="fade-up" data-aos-delay={i * 120}>
                <div className="w-16 h-16 rounded-2xl bg-brand-pinkSoft flex-center mx-auto mb-5">
                  <Icon size={32} className="text-brand-rose" />
                </div>
                <h3 className="font-body text-[22px] font-semibold text-brand-dark mb-3">{title}</h3>
                <p className="font-fine text-[15px] text-brand-neutral leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-24">
        <div className="max-w-[900px] mx-auto px-4 md:px-8">
          <SectionHeading eyebrow="Our Journey" title="12 Years of" titleLine2="Love Stories" />
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-brand opacity-20 -translate-x-px" />
            {milestones.map((m, i) => (
              <div
                key={i}
                className={`flex gap-6 md:gap-0 items-start mb-10 relative ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className={`hidden md:block flex-1 ${i % 2 === 0 ? 'text-right pr-10' : 'text-left pl-10'}`}>
                  {i % 2 === 0 ? (
                    <>
                      <h3 className="font-body text-[18px] font-semibold text-brand-dark">{m.title}</h3>
                      <p className="font-fine text-[14px] text-brand-neutral mt-1">{m.desc}</p>
                    </>
                  ) : (
                    <p className="font-display text-[28px] font-bold text-gradient-brand">{m.year}</p>
                  )}
                </div>
                <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-brand flex-center text-white font-body text-[13px] font-bold flex-shrink-0 shadow-brand">
                  {m.year.slice(-2)}
                </div>
                <div className={`flex-1 md:${i % 2 === 0 ? 'pl-10' : 'pr-10'} pl-6 md:pl-0`}>
                  {i % 2 === 0 ? (
                    <p className="hidden md:block font-display text-[28px] font-bold text-gradient-brand">{m.year}</p>
                  ) : (
                    <>
                      <h3 className="font-body text-[18px] font-semibold text-brand-dark">{m.title}</h3>
                      <p className="font-fine text-[14px] text-brand-neutral mt-1">{m.desc}</p>
                    </>
                  )}
                  <div className="md:hidden">
                    <p className="font-display text-[22px] font-bold text-gradient-brand">{m.year}</p>
                    <h3 className="font-body text-[17px] font-semibold text-brand-dark">{m.title}</h3>
                    <p className="font-fine text-[14px] text-brand-neutral mt-1">{m.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-brand-cream py-24">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16">
          <SectionHeading eyebrow="The People Behind the Magic" title="Meet Our" titleLine2="Team" subtitle="A family of passionate planners, creative directors, and coordination experts." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {TEAM.map((member, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-card text-center hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="relative w-28 h-28 rounded-full overflow-hidden ring-4 ring-brand-goldPale mx-auto">
                  <Image src={member.avatar} alt={member.name} fill sizes="112px" className="object-cover" />
                </div>
                <h3 className="font-body text-[18px] font-semibold text-brand-dark mt-4">{member.name}</h3>
                <p className="font-fine text-[12px] text-brand-rose uppercase tracking-wider mt-1">{member.role}</p>
                <p className="font-fine text-[13px] text-brand-neutral mt-2 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
