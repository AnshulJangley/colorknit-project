'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { ChevronLeft, ChevronRight, Expand } from 'lucide-react'
import type { Swiper as SwiperType } from 'swiper'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { GALLERY_IMAGES } from '@/lib/constants'

import 'swiper/css'
import 'swiper/css/pagination'

export default function GalleryCarousel() {
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <section className="bg-brand-dark py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <SectionHeading
            eyebrow="Our Portfolio"
            title="A Glimpse of"
            titleLine2="Our Work"
            subtitle="Every wedding is a unique masterpiece. Here are some of our favourites."
            align="left"
            light
            className="mb-0 md:max-w-xl"
          />
          <div className="flex gap-3 mt-6 md:mt-0">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-12 h-12 rounded-full bg-brand-gold flex-center text-white hover:bg-brand-goldLight transition-colors shadow-float"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-12 h-12 rounded-full bg-brand-gold flex-center text-white hover:bg-brand-goldLight transition-colors shadow-float"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          onSwiper={(swiper) => { swiperRef.current = swiper }}
          spaceBetween={20}
          breakpoints={{
            0:   { slidesPerView: 1.2 },
            640: { slidesPerView: 2.2 },
            1024:{ slidesPerView: 3.4 },
          }}
          loop
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          grabCursor
          pagination={{ clickable: true, el: '.gallery-pagination' }}
          className="!overflow-visible"
        >
          {GALLERY_IMAGES.slice(0, 12).map((img) => (
            <SwiperSlide key={img.id}>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer">
                <Image
                  src={img.src}
                  alt={`ColorKnit Events ${img.category} wedding in Pune`}
                  fill
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 30vw"
                  className="object-cover group-hover:scale-[1.05] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 rounded-2xl flex-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
                    <Expand size={24} className="text-white" />
                    <span className="font-body text-[13px] text-white">{img.category}</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/15 backdrop-blur rounded-full px-3 py-1 font-body text-xs text-white">
                    {img.category}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="gallery-pagination flex gap-2 justify-center mt-6" />

        <div className="text-center mt-10">
          <Button href="/gallery" variant="gold">
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  )
}
