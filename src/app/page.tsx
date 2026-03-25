import { ScrollExpandMedia } from "@/components/ui/scroll-expansion-hero";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Flower2, Camera, UtensilsCrossed, Mail, CalendarCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero */}
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc="/images/gallery/Picture19.jpg"
        bgImageSrc="/images/gallery/Picture3.png"
        title="ColorKnit Wedding Events"
        date="Est. 2012"
        scrollToExpand="Scroll to Discover"
        textBlend
      />

      {/* 2. Marquee Strip */}
      <section className="bg-blush py-4 overflow-hidden border-y border-border">
        <div className="whitespace-nowrap flex animate-[marquee_20s_linear_infinite]">
          {Array(4).fill(0).map((_, i) => (
            <span key={i} className="font-sans text-[12px] uppercase tracking-[0.2em] text-muted mx-4 shrink-0">
              CEREMONIES • FLORAL DESIGN • CATERING • DECORATION • PHOTOGRAPHY • VENUE STYLING •
            </span>
          ))}
        </div>
      </section>

      {/* 3. Introduction / Story */}
      <section className="py-[64px] md:py-[120px] px-8 md:px-[64px] max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-serif italic text-4xl md:text-[42px] leading-tight text-primary">
            &quot;We don&apos;t just plan weddings — we knit memories into every color.&quot;
          </h2>
        </div>
        <div>
          <p className="font-sans text-[16px] text-primary/80 leading-[1.75] mb-6">
            At ColorKnit, we believe that every couple has a unique story waiting to be told. Our passion lies in weaving the finest details, turning your vision into an elegant celebration that reflects your personal aesthetic and values.
          </p>
          <p className="font-sans text-[16px] text-primary/80 leading-[1.75] mb-8">
            From intimate gatherings to grand celebrations, our boutique approach ensures a seamless, refined, and exquisite wedding experience, curated entirely around you.
          </p>
          <Link href="/about" className="group font-sans text-[11px] font-medium tracking-[0.18em] uppercase text-muted hover:text-gold transition-colors inline-block relative">
            Read Our Story &rarr;
            <span className="absolute left-0 bottom-[-4px] w-0 h-[1px] bg-gold transition-all duration-300 ease-out group-hover:w-full" />
          </Link>
        </div>
      </section>

      {/* 4. Services Overview */}
      <section className="bg-bg py-[64px] md:py-[120px] px-8 md:px-[64px] border-t border-border">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-16">
            <span className="font-sans text-[12px] uppercase tracking-[0.18em] text-muted block mb-4">Our Services</span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary">Everything Your Wedding Deserves</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Flower2, title: "Venue Decoration", desc: "Bespoke floral and spatial design." },
              { icon: Sparkles, title: "Floral Arrangements", desc: "Curated blooms for every setting." },
              { icon: UtensilsCrossed, title: "Catering Coordination", desc: "Exquisite culinary experiences." },
              { icon: Camera, title: "Photography & Film", desc: "Capturing memories in high editorial style." },
              { icon: Mail, title: "Invitation Design", desc: "Custom stationery and fine paper goods." },
              { icon: CalendarCheck, title: "Day-of Coordination", desc: "Flawless execution of your event." }
            ].map((service, idx) => (
              <div key={idx} className="bg-bg border border-transparent hover:border-border transition-colors p-10 group">
                <service.icon className="w-8 h-8 text-gold mb-8 shrink-0" strokeWidth={1} />
                <h3 className="font-serif text-2xl font-medium text-primary mb-3">
                  {service.title}
                </h3>
                <p className="font-sans text-primary/70 leading-[1.75] mb-8 h-12">
                  {service.desc}
                </p>
                <Link href="/services" className="font-sans text-sm text-primary group-hover:text-gold transition-colors inline-flex items-center gap-2">
                  Explore <span className="text-gold">&rarr;</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Portfolio Teaser */}
      <section className="bg-[#1A1A18] text-bg overflow-hidden border-t-4 border-gold">
        <ContainerScroll
          titleComponent={
            <div className="mb-10 pt-20">
              <span className="font-sans text-[12px] uppercase tracking-[0.18em] text-muted block mb-4">Our Portfolio</span>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-bg mb-6">
                A Glimpse of Our Work
              </h2>
              <p className="font-sans text-muted max-w-xl mx-auto">
                From intimate garden ceremonies to grand ballroom celebrations — ColorKnit brings every vision to life.
              </p>
            </div>
          }
        >
          <div className="relative w-full h-[30rem] md:h-[40rem]">
            <Image
              src="/images/gallery/Picture1.png"
              alt="ColorKnit wedding event – beautifully decorated wedding ceremony setup by ColorKnit Wedding Planners India"
              fill
              className="object-cover"
            />
          </div>
        </ContainerScroll>

        {/* Glimpse Grid */}
        <div className="px-8 md:px-[64px] max-w-[1280px] mx-auto mt-[-2rem] pb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: "/images/gallery/Picture5.png",  alt: "ColorKnit outdoor wedding decoration – floral ceremony arch setup by ColorKnit Events" },
              { src: "/images/gallery/Picture9.png",  alt: "ColorKnit wedding venue styling – elegant mandap and stage decoration" },
              { src: "/images/gallery/Picture17.jpg", alt: "ColorKnit destination wedding – scenic outdoor wedding setup in India" },
              { src: "/images/gallery/Picture21.png", alt: "ColorKnit wedding photography – candid couple moment at a ColorKnit planned celebration" },
            ].map((img, i) => (
              <div key={i} className="relative h-[180px] md:h-[240px] overflow-hidden group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center pb-24 mt-6">
          <Link href="/portfolio" className="border border-[#D6CEC4]/30 hover:bg-gold hover:border-gold hover:text-[#1A1A18] text-bg px-8 py-4 font-sans text-sm tracking-widest uppercase transition-all">
            View Full Portfolio
          </Link>
        </div>
      </section>

      {/* 6. Why ColorKnit */}
      <section className="bg-[#1A1A18] text-[#F5F0EB] py-[64px] md:py-[120px] px-8 md:px-[64px] border-t border-muted/20">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-16">
            Why Couples Choose ColorKnit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-muted/30">
            {[
              { num: "200+", label: "Weddings Planned" },
              { num: "12", label: "Years Experience" },
              { num: "5★", label: "Average Rating" },
              { num: "Pan-India", label: "Service Area" }
            ].map((stat, i) => (
              <div key={i} className="pt-8 md:pt-0 pb-8 md:pb-0 px-4">
                <div className="font-serif text-5xl md:text-6xl text-gold mb-4">{stat.num}</div>
                <div className="font-sans text-[12px] uppercase tracking-[0.18em] text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-[64px] md:py-[120px] px-8 md:px-[64px] max-w-[1280px] mx-auto">
        <span className="font-sans text-[12px] uppercase tracking-[0.18em] text-muted block mb-12 text-center">Testimonials</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { quote: "Every detail was absolute perfection. They took our vision and elevated it beyond imagination.", author: "TANYA & RAHUL", date: "WINTER 2023" },
            { quote: "The team at ColorKnit gave us the peace of mind to truly enjoy our wedding day. Flawless execution.", author: "SARA & MICHAEL", date: "SPRING 2022" },
            { quote: "From the floral arches to the table settings, it was a dream come true. Highly, highly recommend.", author: "PRIYA & AMAN", date: "AUTUMN 2023" }
          ].map((testi, i) => (
            <div key={i} className="p-8 bg-bg border border-border flex flex-col items-center text-center">
              <span className="font-serif text-6xl text-gold leading-none mb-4">"</span>
              <p className="font-serif italic text-xl md:text-2xl text-primary leading-snug mb-8 grow">
                {testi.quote}
              </p>
              <div className="font-sans text-[11px] font-medium tracking-[0.18em] uppercase text-muted">
                {testi.author}
                <div className="mt-1 text-primary/50">{testi.date}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Contact CTA Band */}
      <section className="bg-blush py-[80px] md:py-[120px] px-8 text-center border-y border-border">
        <h2 className="font-serif text-4xl md:text-5xl font-light text-primary mb-10">
          Let's Begin Planning Your Day
        </h2>
        <Link href="/contact" className="bg-primary hover:bg-gold text-bg px-10 py-5 font-sans text-[13px] tracking-widest uppercase transition-colors">
          Get in Touch
        </Link>
      </section>
    </main>
  );
}
