import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import CTABanner from '@/components/sections/CTABanner'
import { BLOG_POSTS } from '@/lib/constants'

export function generateStaticParams() {
  return BLOG_POSTS.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug)
  if (!post) return { title: 'Blog Post' }
  return {
    title: `${post.title} | ColorKnit Events`,
    description: post.excerpt,
    alternates: { canonical: `https://colorknit.in/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      url: `https://colorknit.in/blog/${post.slug}`,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: ['Priya Kulkarni'],
      images: [{ url: `https://colorknit.in${post.image}`, width: 1200, height: 630, alt: post.title }],
    },
    twitter: { card: 'summary_large_image', title: post.title, description: post.excerpt },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug) || BLOG_POSTS[0]
  const related = BLOG_POSTS.filter(p => p.slug !== post.slug)

  const blogPostSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `https://colorknit.in${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: 'Priya Kulkarni',
      jobTitle: 'Founder & Lead Wedding Planner',
      url: 'https://colorknit.in/about',
      worksFor: { '@type': 'Organization', name: 'ColorKnit Events', url: 'https://colorknit.in' },
    },
    publisher: {
      '@type': 'Organization',
      name: 'ColorKnit Events',
      logo: { '@type': 'ImageObject', url: 'https://colorknit.in/images/colorknit-logo-alt.jpg' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://colorknit.in/blog/${post.slug}` },
    keywords: post.category,
    articleSection: post.category,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.prose p:first-child'],
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://colorknit.in' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://colorknit.in/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://colorknit.in/blog/${post.slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Hero */}
      <div className="relative h-[420px] overflow-hidden">
        <Image src={post.image} alt={post.title} fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero-dark)' }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-20">
          <span className="bg-brand-rose text-white font-body text-xs font-medium rounded-full px-4 py-1.5 mb-4">{post.category}</span>
          <h1 className="font-display font-bold text-white max-w-3xl" style={{ fontSize: 'clamp(28px,4vw,48px)' }}>
            {post.title}
          </h1>
          <div className="flex gap-4 mt-4 font-fine text-[13px] text-white/60">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="bg-white py-16">
        <div className="max-w-[760px] mx-auto px-4 md:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 font-body text-[14px] text-brand-rose hover:underline mb-8">
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          <div className="prose max-w-none">
            <p className="font-body text-[17px] text-brand-neutral leading-[1.8]">
              {post.excerpt} Planning a wedding is one of the most exciting journeys of your life, but it can also feel overwhelming without the right guidance.
            </p>
            <h2>Why This Matters for Your Big Day</h2>
            <p>
              At ColorKnit, we&apos;ve helped over 500 couples navigate the beautiful chaos of wedding planning. Through our experience, we&apos;ve learned that the couples who enjoy their wedding day the most are those who planned thoughtfully — and didn&apos;t try to do it all alone.
            </p>
            <h2>Our Top Tips</h2>
            <p>
              Start with a clear vision. Before you look at venues, caterers, or decorators — sit down together and write down 5 words that describe your dream wedding. These words become your North Star for every decision.
            </p>
            <p>
              Budget honestly. The number one source of wedding stress is an unrealistic budget. Factor in everything — vendor gratuities, day-after brunch, beauty touch-ups on the day.
            </p>
            <h2>The ColorKnit Advantage</h2>
            <p>
              When you work with us, you&apos;re not just hiring a planner. You&apos;re gaining a partner who is as invested in your wedding as you are — someone who will lose sleep thinking about your florals and smile when you walk down the aisle.
            </p>
          </div>

          {/* Author card */}
          <div className="mt-12 p-6 bg-brand-cream rounded-2xl flex gap-4 items-center">
            <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
              <Image src="/images/colorknit-logo-alt.jpg" alt="Priya Kulkarni — Founder & Lead Planner at ColorKnit Events Pune" fill sizes="64px" className="object-cover" />
            </div>
            <div>
              <p className="font-body text-[16px] font-semibold text-brand-dark">Priya Kulkarni</p>
              <p className="font-fine text-[13px] text-brand-rose">Founder & Lead Planner, ColorKnit</p>
              <p className="font-fine text-[13px] text-brand-neutral mt-1">12+ years crafting luxury weddings across Maharashtra.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related posts */}
      <section className="bg-brand-cream py-16">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="font-display text-[32px] font-bold text-brand-dark mb-8 text-center">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {related.map(p => (
              <Link key={p.id} href={`/blog/${p.slug}`} className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group flex gap-0 flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image src={p.image} alt={p.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-[1.05] transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="font-fine text-[12px] text-brand-rose uppercase tracking-wide">{p.category}</span>
                  <h3 className="font-display text-[18px] font-semibold text-brand-dark mt-1 group-hover:text-brand-rose transition-colors">{p.title}</h3>
                  <p className="font-fine text-[13px] text-brand-neutral mt-2 line-clamp-2">{p.excerpt}</p>
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
