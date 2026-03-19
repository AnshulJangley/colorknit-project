import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import StatsBar from '@/components/sections/StatsBar'
import AboutIntro from '@/components/sections/AboutIntro'
import ServicesGrid from '@/components/sections/ServicesGrid'
import HowItWorks from '@/components/sections/HowItWorks'
import GalleryCarousel from '@/components/sections/GalleryCarousel'
import Testimonials from '@/components/sections/Testimonials'
import CTABanner from '@/components/sections/CTABanner'
import BlogPreview from '@/components/sections/BlogPreview'

export const metadata: Metadata = {
  title: 'ColorKnit Events | Best Wedding Planner in Pune',
  description: 'ColorKnit Events — Pune\'s most trusted wedding planner since 2012. 500+ weddings, full planning, stunning decor, catering & photography. Book a free consultation in Baner, Pune.',
  alternates: { canonical: 'https://colorknit.in' },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <AboutIntro />
      <ServicesGrid />
      <HowItWorks />
      <GalleryCarousel />
      <Testimonials />
      <CTABanner />
      <BlogPreview />
    </>
  )
}
