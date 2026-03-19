import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Royal Maroon / Deep Crimson
          rose:         '#6B1230',
          roseMid:      '#8B1A42',
          roseLight:    '#A8214F',
          pink:         '#C4365F',
          pinkSoft:     '#F5E8EE',

          // Royal Gold
          gold:         '#C9973A',
          goldLight:    '#E0B855',
          goldPale:     '#F5E6C8',

          // Royal Deep Ivory Cream
          cream:        '#FDF8F0',
          creamDeep:    '#F7F0E6',
          creamWarm:    '#F0E6D3',

          // Deep Navy / Royal Dark
          dark:         '#0D1635',
          darkNavy:     '#080F26',
          darkWine:     '#2A0A1E',
          darkPurple:   '#1A0A3C',

          // Neutrals
          neutral:      '#7A8090',
          neutralLight: '#D8DCE6',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body:    ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        accent:  ['var(--font-jakarta)', 'sans-serif'],
        fine:    ['var(--font-lato)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand':        'linear-gradient(90deg, #6B1230 0%, #8B1A42 20%, #A8214F 52%, #8B1A42 80%, #6B1230 100%)',
        'gradient-dark-luxury':  'linear-gradient(146deg, #2A0A1E 0%, #080F26 100%)',
        'gradient-royal':        'linear-gradient(135deg, #0D1635 0%, #2A0A1E 50%, #0D1635 100%)',
        'gradient-hero-pink':    'linear-gradient(39deg, #F5E8EE 51.59%, rgba(245,232,238,0.2) 100%)',
        'gradient-gold-fade':    'linear-gradient(90deg, #F5E6C8 2.38%, hsla(38,70%,93%,0) 100%)',
        'gradient-cream-green':  'linear-gradient(180deg, #ffffff 0%, #F7F0E6 100%)',
        'gradient-gold-brand':   'linear-gradient(90deg, #C9973A 0%, #E0B855 50%, #C9973A 100%)',
        'gradient-announcement': 'linear-gradient(90deg, #6B1230 0%, #A8214F 50%, #6B1230 100%)',
      },
      boxShadow: {
        'card':       '0 2px 16px rgba(13,22,53,0.08), 0 1px 4px rgba(0,0,0,0.04)',
        'card-hover': '0 12px 40px rgba(107,18,48,0.18), 0 2px 8px rgba(0,0,0,0.08)',
        'float':      '0 4px 24px rgba(0,0,0,0.28)',
        'brand':      '0 4px 18px rgba(107,18,48,0.45)',
        'gold':       '0 4px 18px rgba(201,151,58,0.4)',
        'wa':         '0 4px 20px rgba(37,211,102,0.5)',
        'nav':        '0 2px 24px rgba(13,22,53,0.10)',
      },
      animation: {
        'ping-slow':   'ping 2.5s cubic-bezier(0,0,0.2,1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'shimmer':     'shimmer 2.5s linear infinite',
        'float':       'floatY 4s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        floatY: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
