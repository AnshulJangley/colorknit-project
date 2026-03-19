'use client'
import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, CheckCircle2 } from 'lucide-react'

const VIDEOS = [
  '/videos/wedding-night.mp4',
  '/videos/mandap.mp4',
  '/videos/engagement-decor.mp4',
  '/videos/decor.mp4',
]

const fadeUp = (delay: number) => ({
  initial:    { opacity: 0, y: 32 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
})

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [vidIdx, setVidIdx] = useState(0)

  const handleVideoEnd = () => {
    setVidIdx(i => (i + 1) % VIDEOS.length)
  }

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
      videoRef.current.play().catch(() => {})
    }
  }, [vidIdx])

  const nextIdx = (vidIdx + 1) % VIDEOS.length

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: 'calc(100vh - 70px)', minHeight: '580px', background: '#0D1635' }}
    >

      {/* ── Preload next video silently ── */}
      <video key={`pre-${nextIdx}`} preload="auto" muted playsInline className="hidden">
        <source src={VIDEOS[nextIdx]} type="video/mp4" />
      </video>

      {/* ── Background Video ── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={vidIdx}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
        >
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            poster="/images/hero/poster.jpg"
            preload="auto"
          >
            <source src={VIDEOS[vidIdx]} type="video/mp4" />
          </video>
        </motion.div>
      </AnimatePresence>

      {/* ── Dark gradient overlay ── */}
      <div className="absolute inset-0 z-10" style={{ background: 'var(--gradient-hero-overlay)' }} />

      {/* ── Fine pattern ── */}
      <div className="absolute inset-0 z-10 hero-pattern opacity-40" />

      {/* ── Golden vignette sides ── */}
      <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-brand-darkWine/40 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-brand-darkWine/40 to-transparent pointer-events-none" />

      {/* ── Main Content ── */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 max-w-[960px] mx-auto">

        {/* Ornament line */}
        <motion.div
          {...fadeUp(0.1)}
          className="flex items-center gap-4 mb-6"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-brand-gold" />
          <span className="font-fine text-[11px] uppercase tracking-[0.25em] text-brand-goldLight">
            ✦ &nbsp;Pune&apos;s Most Trusted Wedding Planners&nbsp; ✦
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-brand-gold" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          {...fadeUp(0.25)}
          className="font-display font-bold text-white leading-[1.08]"
          style={{ fontSize: 'clamp(40px, 6.5vw, 80px)', textShadow: '0 2px 24px rgba(0,0,0,0.4)' }}
        >
          Your Dream Wedding,{' '}
          <span className="text-gradient-gold">Crafted With Love</span>
        </motion.h1>

        {/* Decorative divider */}
        <motion.div {...fadeUp(0.42)} className="flex items-center gap-3 my-6">
          <div className="h-px w-16 bg-brand-gold/50" />
          <div className="w-2 h-2 rounded-full bg-brand-gold" />
          <div className="h-px w-16 bg-brand-gold/50" />
        </motion.div>

        {/* Subtext */}
        <motion.p
          {...fadeUp(0.5)}
          className="font-body text-[17px] md:text-[19px] text-white/75 max-w-xl leading-[1.75] mb-12"
        >
          From intimate ceremonies to grand celebrations —<br className="hidden md:block" />
          ColorKnit turns your vision into a timeless memory.
        </motion.p>

        {/* Trust badges */}
        <motion.div {...fadeUp(0.78)} className="flex flex-wrap gap-6 justify-center">
          {['500+ Weddings', '5★ Google Rated', '12 Years Experience', 'Pune Based'].map(badge => (
            <span key={badge} className="flex items-center gap-2 font-fine text-[13px] text-white/70">
              <CheckCircle2 size={15} className="text-brand-goldLight flex-shrink-0" />
              {badge}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── Video dots ── */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2">
        {VIDEOS.map((_, i) => (
          <button
            key={i}
            onClick={() => setVidIdx(i)}
            className={`transition-all duration-300 rounded-full ${vidIdx === i ? 'w-5 h-2 bg-brand-gold' : 'w-2 h-2 bg-white/40 hover:bg-white/70'}`}
            aria-label={`Switch to video ${i + 1}`}
          />
        ))}
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5">
        <span className="font-fine text-[10px] text-white/40 uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown size={18} className="text-white/50 animate-bounce-slow" />
      </div>
    </section>
  )
}
