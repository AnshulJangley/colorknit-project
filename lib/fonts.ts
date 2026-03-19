import { Cormorant_Garamond, Manrope, DM_Sans } from 'next/font/google'

export const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
})

export const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['400', '500', '700', '800'],
})

export const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
  weight: ['400', '500', '700'],
})

// Keep these for backward compat aliases
export const playfair  = cormorant
export const poppins   = manrope
export const jakarta   = manrope
export const lato      = dmSans
