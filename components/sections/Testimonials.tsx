'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import { Star } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { TESTIMONIALS } from '@/lib/constants'
import { cn } from '@/lib/utils'

import 'keen-slider/keen-slider.min.css'

const STARS = Array.from({ length: 5 })

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: { perView: 1, spacing: 24 },
    breakpoints: {
      '(min-width: 768px)': { slides: { perView: 2, spacing: 24 } },
      '(min-width: 1024px)': { slides: { perView: 3, spacing: 24 } },
    },
    loop: true,
    slideChanged(s) { setCurrent(s.track.details.rel) },
  })

  return (
    <section className="bg-gradient-hero-pink py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16">
        <SectionHeading
          eyebrow="Love Letters"
          title="Words From"
          titleLine2="Our Couples"
          subtitle="Don't just take our word for it — hear from the couples whose love stories we've helped write."
        />

        <div ref={sliderRef} className="keen-slider">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="keen-slider__slide">
              <div className="bg-white rounded-2xl p-8 shadow-card border border-[#F0E6D3] relative h-full flex flex-col">
                {/* Big quote mark */}
                <span className="absolute top-4 left-6 font-display text-[72px] leading-none text-brand-rose/10 select-none">
                  &ldquo;
                </span>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {STARS.slice(0, t.rating).map((_, i) => (
                    <Star key={i} size={16} className="fill-brand-gold text-brand-gold" />
                  ))}
                </div>

                {/* Review */}
                <p className="font-body text-[15px] text-brand-dark italic leading-[1.75] relative z-10 flex-1 line-clamp-5">
                  &ldquo;{t.review}&rdquo;
                </p>

                {/* Reviewer */}
                <div className="flex gap-3 items-center mt-6 pt-4 border-t border-[#F0E6D3]">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-brand-goldPale flex-shrink-0">
                    <Image src={t.avatar} alt={t.name} fill sizes="48px" className="object-cover" />
                  </div>
                  <div>
                    <p className="font-body text-[15px] font-semibold text-brand-dark">{t.name}</p>
                    <p className="font-fine text-[12px] text-brand-neutral">{t.type} · {t.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex gap-2 justify-center mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => instanceRef.current?.moveToIdx(i)}
              className={cn('keen-dot transition-all duration-300', current === i && 'active')}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
