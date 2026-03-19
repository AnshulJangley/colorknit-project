import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { BLOG_POSTS } from '@/lib/constants'

export default function BlogPreview() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16">
        <SectionHeading
          eyebrow="Wedding Wisdom"
          title="From Our Planning"
          titleLine2="Journal"
          subtitle="Tips, trends, and stories from the world of weddings — straight from our planners."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {BLOG_POSTS.map((post, i) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group block"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-[1.06] transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-rose text-white text-xs font-body font-medium rounded-full px-3 py-1">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-fine text-[12px] text-brand-neutral">{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-brand-neutralLight" />
                  <span className="font-fine text-[12px] text-brand-neutral">{post.readTime}</span>
                </div>
                <h3 className="font-display text-[20px] font-semibold text-brand-dark leading-snug line-clamp-2 group-hover:text-brand-rose transition-colors">
                  {post.title}
                </h3>
                <p className="font-fine text-[14px] text-brand-neutral mt-2 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-1 mt-4 font-body text-[13px] text-brand-rose font-medium">
                  Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/blog" variant="secondary">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  )
}
