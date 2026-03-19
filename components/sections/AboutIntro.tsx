import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

const features = [
  { title: 'Personalized Planning',  desc: 'Every detail tailored to your unique love story and vision.' },
  { title: '200+ Vendor Network',    desc: 'Trusted caterers, decorators, and photographers across Pune.' },
  { title: 'Day-of Coordination',    desc: 'Our team on-ground so you can be fully present to celebrate.' },
]

export default function AboutIntro() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Image */}
          <div className="relative" data-aos="zoom-in" data-aos-delay="100">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] ring-4 ring-brand-gold/20 shadow-2xl">
              <Image
                src="/images/hero/poster.jpg"
                alt="ColorKnit Events — luxury wedding planning in Pune"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Decorative corner */}
              <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-brand-gold/60 rounded-tl-xl" />
              <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-brand-gold/60 rounded-br-xl" />
            </div>
            {/* Est badge */}
            <div className="absolute -bottom-6 -right-4 md:-right-6 bg-white rounded-2xl px-6 py-4 shadow-float z-10 border border-brand-creamWarm">
              <p className="font-display text-[22px] italic text-brand-rose font-bold leading-none">Est. 2012</p>
              <p className="font-fine text-[12px] text-brand-neutral mt-1">A decade of love stories</p>
            </div>
          </div>

          {/* Right — Text */}
          <div data-aos="fade-up" data-aos-delay="200">
            <SectionHeading
              eyebrow="✦ About ColorKnit"
              title="We Don't Just Plan Weddings,"
              titleLine2="We Create Memories"
              align="left"
            />

            <p className="font-body text-[16px] text-brand-neutral leading-[1.8] mb-4">
              Born in Pune with a deep passion for love stories, ColorKnit has been
              transforming wedding dreams into breathtaking realities since 2012. Our team
              of dedicated planners, creative directors and coordination experts bring your
              vision to life — down to the very last petal.
            </p>
            <p className="font-body text-[16px] text-brand-neutral leading-[1.8]">
              With over 500 weddings crafted across Maharashtra and beyond, we combine
              professional excellence with genuine warmth. For us, every wedding is personal.
            </p>

            <div className="w-16 h-0.5 bg-gradient-brand rounded my-7" />

            <div className="flex flex-col gap-5">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-brand-pinkSoft flex-center flex-shrink-0">
                    <CheckCircle2 size={18} className="text-brand-rose" />
                  </div>
                  <div>
                    <p className="font-body text-[15px] font-semibold text-brand-dark">{f.title}</p>
                    <p className="font-fine text-[13px] text-brand-neutral mt-0.5">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 mt-9 flex-wrap">
              <Button href="/about">Our Full Story</Button>
              <Button href="/contact" variant="secondary">Free Consultation</Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
