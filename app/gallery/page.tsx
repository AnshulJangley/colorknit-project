'use client'
import { useState } from 'react'
import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import { X, ChevronLeft, ChevronRight, Expand } from 'lucide-react'
import { GALLERY_IMAGES } from '@/lib/constants'
import { cn } from '@/lib/utils'
import CTABanner from '@/components/sections/CTABanner'

const categories = ['All', 'Ceremony', 'Reception', 'Decor', 'Portraits', 'Destination']

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIdx, setCurrentIdx] = useState(0)

  const filtered = activeFilter === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeFilter)

  const openLightbox = (idx: number) => { setCurrentIdx(idx); setLightboxOpen(true) }
  const prev = () => setCurrentIdx(i => (i - 1 + filtered.length) % filtered.length)
  const next = () => setCurrentIdx(i => (i + 1) % filtered.length)

  return (
    <>
      {/* Hero */}
      <div className="relative h-[340px] overflow-hidden">
        <Image src="/images/gallery/9baa9fabed9356f3b6e4efefcffbb2c2.jpg" alt="ColorKnit Events wedding gallery — ceremonies and decor in Pune" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero-dark)' }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-20">
          <p className="font-fine text-[12px] uppercase tracking-[0.2em] text-brand-goldLight mb-3">Our Work</p>
          <h1 className="font-display font-bold text-white" style={{ fontSize: 'clamp(36px,5vw,60px)' }}>
            Wedding Gallery
          </h1>
          <nav className="mt-3 font-fine text-[13px] text-white/50">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span className="text-white/80">Gallery</span>
          </nav>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-[68px] z-40 bg-white shadow-sm border-b border-brand-neutralLight">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16 py-3 flex gap-2 overflow-x-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={cn(
                'flex-shrink-0 font-body text-[13px] font-medium rounded-full px-5 py-2 transition-all duration-200',
                activeFilter === cat
                  ? 'bg-gradient-brand text-white shadow-brand'
                  : 'text-brand-neutral hover:text-brand-rose border border-brand-neutralLight'
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry grid */}
      <section className="bg-brand-cream py-16">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {filtered.map((img, i) => (
              <div
                key={img.id}
                className="mb-4 break-inside-avoid rounded-2xl overflow-hidden relative group cursor-pointer"
                onClick={() => openLightbox(i)}
                data-aos="zoom-in"
                data-aos-delay={i * 60}
              >
                <Image
                  src={img.src}
                  alt={`ColorKnit Events ${img.category} wedding in Pune`}
                  width={600}
                  height={800}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
                    <Expand size={28} className="text-white" />
                    <span className="font-body text-[13px] text-white font-medium">{img.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog.Root open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/90 z-50 backdrop-blur-sm" />
          <Dialog.Content className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <Dialog.Close className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex-center text-white hover:bg-white/20 transition-colors">
              <X size={20} />
            </Dialog.Close>
            <button onClick={prev} className="absolute left-4 w-12 h-12 rounded-full bg-white/10 flex-center text-white hover:bg-white/20 transition-colors">
              <ChevronLeft size={24} />
            </button>
            <div className="relative max-w-4xl w-full max-h-[80vh] aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src={filtered[currentIdx]?.src || ''} alt={`ColorKnit Events ${filtered[currentIdx]?.category} wedding`} fill sizes="(max-width: 768px) 100vw, 896px" className="object-contain" />
            </div>
            <button onClick={next} className="absolute right-4 w-12 h-12 rounded-full bg-white/10 flex-center text-white hover:bg-white/20 transition-colors">
              <ChevronRight size={24} />
            </button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <span className="font-fine text-[13px] text-white/60">{currentIdx + 1} / {filtered.length} · {filtered[currentIdx]?.category}</span>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <CTABanner />
    </>
  )
}
