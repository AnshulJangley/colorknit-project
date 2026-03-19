import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  titleLine2?: string
  subtitle?: string
  align?: 'center' | 'left'
  light?: boolean
  className?: string
}

export default function SectionHeading({
  eyebrow, title, titleLine2, subtitle,
  align = 'center', light = false, className
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-14', align === 'center' && 'text-center', className)}>
      {eyebrow && (
        <p
          className={cn(
            'font-fine text-[11px] font-semibold uppercase tracking-[0.2em] mb-3',
            light ? 'text-brand-goldLight' : 'text-brand-rose'
          )}
          data-aos="fade-up"
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={cn(
          'font-display font-bold leading-[1.18]',
          'text-[clamp(30px,4vw,46px)]',
          light ? 'text-white' : 'text-brand-dark'
        )}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {title}
        {titleLine2 && (
          <>
            <br />
            <em className={cn(
              'not-italic',
              light ? 'text-gradient-gold' : 'text-gradient-brand'
            )}>
              {titleLine2}
            </em>
          </>
        )}
      </h2>

      <div
        className={cn('heading-line mt-3', align === 'left' ? 'ml-0 mr-auto' : 'mx-auto')}
        data-aos="fade-up"
        data-aos-delay="150"
      />

      {subtitle && (
        <p
          className={cn(
            'mt-5 font-body text-[16px] leading-[1.75] max-w-2xl',
            align === 'center' && 'mx-auto',
            light ? 'text-white/60' : 'text-brand-neutral'
          )}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
