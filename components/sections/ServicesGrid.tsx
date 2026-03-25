import Image from 'next/image'
import Link from 'next/link'
import { Heart, Flower2, UtensilsCrossed, Camera, MapPin, ClipboardList, Mail, Music, ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { SERVICES } from '@/lib/constants'

const iconMap: Record<string, React.ElementType> = {
  Heart, Flower2, UtensilsCrossed, Camera, MapPin, ClipboardList, Mail, Music,
}

export default function ServicesGrid() {
  return (
    <section className="bg-brand-cream py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16">
        <SectionHeading
          eyebrow="What We Offer"
          title="Services For Your"
          titleLine2="Perfect Wedding Day"
          subtitle="Everything you need — from first consultation to your final dance — handled with love and expertise."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || Heart
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden shadow-card hover:-translate-y-2 hover:shadow-card-hover transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                {/* Image */}
                <div className="h-52 relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} by ColorKnit Events Pune`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-[1.08] transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 font-body text-xs text-brand-rose font-medium">
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="w-10 h-10 rounded-xl bg-brand-pinkSoft flex-center">
                    <Icon size={18} className="text-brand-rose" />
                  </div>
                  <h3 className="font-body text-[20px] font-semibold text-brand-dark mt-3">{service.title}</h3>
                  <p className="font-fine text-[14px] text-brand-neutral mt-2 leading-relaxed line-clamp-3">{service.description}</p>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-[#F0E6D3]">
                    <Link href="/services" className="font-body text-[13px] text-brand-rose font-medium hover:underline">
                      Explore Service
                    </Link>
                    <ArrowRight size={16} className="text-brand-rose group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button href="/services">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}
