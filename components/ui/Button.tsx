'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { type ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'gold' | 'ghost' | 'white' | 'whatsapp'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  external?: boolean
}

const base = 'inline-flex items-center justify-center gap-2 font-body font-semibold rounded-full transition-all duration-300 cursor-pointer select-none btn-shimmer'

const variants = {
  primary:   'bg-gradient-brand text-white shadow-brand hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]',
  secondary: 'border-2 border-brand-rose text-brand-rose hover:bg-brand-rose hover:text-white',
  gold:      'border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white hover:shadow-gold',
  ghost:     'bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20',
  white:     'bg-white text-brand-rose font-semibold shadow-card hover:shadow-card-hover hover:scale-[1.02]',
  whatsapp:  'bg-[#25D366] text-white shadow-wa hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]',
}

const sizes = {
  sm: 'px-5 py-2 text-[13px]',
  md: 'px-7 py-3 text-[14px]',
  lg: 'px-9 py-3.5 text-[15px]',
}

export default function Button({
  children, variant = 'primary', size = 'md',
  href, onClick, className, type = 'button',
  disabled, external
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], disabled && 'opacity-50 pointer-events-none', className)

  if (href) {
    return external
      ? <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>{children}</a>
      : <Link href={href} className={classes}>{children}</Link>
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
