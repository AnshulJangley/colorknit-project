import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { STATS } from '@/lib/constants'

export default function StatsBar() {
  return (
    <div className="bg-gradient-brand py-0">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-center py-7 relative ${i < STATS.length - 1 ? 'after:absolute after:right-0 after:top-1/4 after:h-1/2 after:w-px after:bg-white/20' : ''}`}
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <span className="font-display text-[42px] font-bold text-white leading-none">
                <AnimatedCounter target={stat.number} suffix={stat.suffix} />
              </span>
              <span className="font-fine text-[13px] text-white/70 mt-1.5 tracking-wide">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
