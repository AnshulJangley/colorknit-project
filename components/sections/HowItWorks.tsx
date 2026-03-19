import { MessageCircle, ClipboardList, Users, Sparkles } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { HOW_IT_WORKS } from '@/lib/constants'

const iconMap: Record<string, React.ElementType> = {
  MessageCircle, ClipboardList, Users, Sparkles,
}

const steps = HOW_IT_WORKS.map(step => ({ ...step, Icon: iconMap[step.icon] || Sparkles }))

export default function HowItWorks() {
  return (
    <section className="bg-gradient-cream-green py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16">
        <SectionHeading
          eyebrow="Our Process"
          title="Planning Your Wedding is"
          titleLine2="Easier Than You Think"
          subtitle="Our simple 4-step process takes the stress out of wedding planning, leaving you free to enjoy every moment."
        />

        {/* Desktop horizontal flow */}
        <div className="hidden md:grid grid-cols-4 gap-0 relative">
          <div className="absolute top-10 left-[12.5%] right-[12.5%] h-0.5 border-t-2 border-dashed border-brand-goldPale z-0" />
          {steps.map(({ step, Icon, title, desc }, i) => (
            <div key={i} className="flex flex-col items-center text-center px-6 relative z-10" data-aos="fade-up" data-aos-delay={i * 120}>
              <div className="w-14 h-14 rounded-full bg-gradient-brand flex-center text-white font-display text-[22px] font-bold shadow-brand mb-4">{step}</div>
              <div className="w-12 h-12 rounded-2xl bg-white shadow-card flex-center mb-4"><Icon size={22} className="text-brand-rose" /></div>
              <h3 className="font-body text-[18px] font-semibold text-brand-dark">{title}</h3>
              <p className="font-fine text-[14px] text-brand-neutral mt-2 leading-relaxed max-w-[180px]">{desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile vertical stepper */}
        <div className="md:hidden flex flex-col gap-0 relative">
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-brand opacity-20" />
          {steps.map(({ step, Icon, title, desc }, i) => (
            <div key={i} className="flex gap-6 items-start pl-0 pb-10 relative" data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="w-12 h-12 rounded-full bg-gradient-brand flex-center text-white font-display text-[18px] font-bold shadow-brand flex-shrink-0 relative z-10">{step}</div>
              <div className="pt-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-white shadow-card flex-center"><Icon size={18} className="text-brand-rose" /></div>
                  <h3 className="font-body text-[18px] font-semibold text-brand-dark">{title}</h3>
                </div>
                <p className="font-fine text-[14px] text-brand-neutral leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
