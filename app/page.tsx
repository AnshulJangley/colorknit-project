import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Hero from '@/components/sections/Hero'
import StatsBar from '@/components/sections/StatsBar'

const AboutIntro     = dynamic(() => import('@/components/sections/AboutIntro'))
const ServicesGrid   = dynamic(() => import('@/components/sections/ServicesGrid'))
const HowItWorks     = dynamic(() => import('@/components/sections/HowItWorks'))
const GalleryCarousel = dynamic(() => import('@/components/sections/GalleryCarousel'))
const Testimonials   = dynamic(() => import('@/components/sections/Testimonials'))
const CTABanner      = dynamic(() => import('@/components/sections/CTABanner'))
const BlogPreview    = dynamic(() => import('@/components/sections/BlogPreview'))

export const metadata: Metadata = {
  title: 'ColorKnit Events | Best Wedding Planner in Pune',
  description: "Pune's most trusted wedding planner since 2012. 500+ weddings, full planning, decor, catering & photography. Free consultation in Baner, Pune.",
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
