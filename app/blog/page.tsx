import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import CTABanner from '@/components/sections/CTABanner'
import { BLOG_POSTS } from '@/lib/constants'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wedding Planning Blog | Tips, Trends & Stories — ColorKnit Events Pune',
  description: 'Expert wedding planning tips, decor trends, destination wedding guides and real stories from ColorKnit Events — Pune\'s leading wedding planners since 2012.',
  keywords: ['wedding planning tips india', 'wedding decor trends 2024', 'destination wedding guide', 'wedding blog pune', 'how to plan a wedding india'],
  alternates: { canonical: 'https://colorknit.in/blog' },
  openGraph: {
    url: 'https://colorknit.in/blog',
    title: 'Wedding Planning Blog | ColorKnit Events Pune',
    description: 'Expert tips, real stories and guides from Pune\'s most trusted wedding planners.',
    images: [{ url: '/images/services/srv-planning.jpg', width: 1200, height: 630, alt: 'ColorKnit Wedding Planning Blog' }],
  },
}

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS

  return (
    <>
      {/* Hero */}
      <div className="relative h-[300px] overflow-hidden">
        <Image src="/images/services/srv-planning.jpg" alt="ColorKnit Events wedding planning blog — tips and guides from Pune's top wedding planners" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero-dark)' }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-20">
          <p className="font-fine text-[12px] uppercase tracking-[0.2em] text-brand-goldLight mb-3">Wedding Wisdom</p>
          <h1 className="font-display font-bold text-white" style={{ fontSize: 'clamp(36px,5vw,56px)' }}>Planning Journal</h1>
          <nav className="mt-3 font-fine text-[13px] text-white/50">
            <a href="/" className="hover:text-white">Home</a><span className="mx-2">/</span>
            <span className="text-white/80">Blog</span>
          </nav>
        </div>
      </div>

      <section className="bg-brand-cream py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16">
          <SectionHeading eyebrow="Latest Posts" title="From Our" titleLine2="Planning Journal" />

          {/* Featured post */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 mb-10 flex flex-col md:flex-row"
            data-aos="fade-up"
          >
            <div className="relative md:w-1/2 h-64 md:h-auto overflow-hidden">
              <Image src={featured.image} alt={featured.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-[1.04] transition-transform duration-500" />
              <div className="absolute top-4 left-4">
                <span className="bg-brand-rose text-white font-body text-xs font-medium rounded-full px-3 py-1">{featured.category}</span>
              </div>
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center md:w-1/2">
              <span className="font-fine text-[12px] text-brand-neutral uppercase tracking-wide mb-2">Featured Post</span>
              <h2 className="font-display text-[28px] font-semibold text-brand-dark leading-snug group-hover:text-brand-rose transition-colors">
                {featured.title}
              </h2>
              <p className="font-body text-[15px] text-brand-neutral mt-3 leading-relaxed">{featured.excerpt}</p>
              <div className="flex items-center gap-4 mt-6">
                <span className="font-fine text-[13px] text-brand-neutral">{featured.date}</span>
                <span className="font-fine text-[13px] text-brand-neutral">{featured.readTime}</span>
                <span className="flex items-center gap-1 font-body text-[13px] text-brand-rose font-medium ml-auto">
                  Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </Link>

          {/* Rest of posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {rest.map((post, i) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="relative h-52 overflow-hidden">
                  <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-[1.06] transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-rose text-white font-body text-xs font-medium rounded-full px-3 py-1">{post.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex gap-3 mb-3">
                    <span className="font-fine text-[12px] text-brand-neutral">{post.date}</span>
                    <span className="font-fine text-[12px] text-brand-neutral">{post.readTime}</span>
                  </div>
                  <h3 className="font-display text-[20px] font-semibold text-brand-dark group-hover:text-brand-rose transition-colors line-clamp-2">{post.title}</h3>
                  <p className="font-fine text-[14px] text-brand-neutral mt-2 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center gap-1 mt-4 font-body text-[13px] text-brand-rose font-medium">
                    Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
