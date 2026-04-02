import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { cormorant, manrope, dmSans } from '@/lib/fonts'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/layout/WhatsAppFloat'
import AOSProvider from '@/components/widgets/AOSProvider'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://colorknit.in'),
  title: {
    default: 'ColorKnit Events | Best Wedding Planner in Pune',
    template: '%s | ColorKnit Events',
  },
  description:
    "ColorKnit Events — Pune's most trusted wedding planner since 2012. 500+ weddings planned across Maharashtra & India. Full wedding planning, decor, catering, photography & destination weddings. Free consultation available in Baner, Pune.",
  keywords: [
    'wedding planner pune',
    'best wedding planner in pune',
    'wedding planning company pune',
    'colorknit events',
    'wedding planner baner pune',
    'destination wedding planner india',
    'wedding decorator pune',
    'wedding decor pune',
    'wedding catering pune',
    'wedding photography pune',
    'luxury wedding planner pune',
    'event management company pune',
    'wedding planner maharashtra',
    'outdoor wedding pune',
    'wedding coordinator pune',
  ],
  authors: [{ name: 'ColorKnit Events', url: 'https://colorknit.in' }],
  creator: 'ColorKnit Events',
  publisher: 'ColorKnit Events',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://colorknit.in',
    siteName: 'ColorKnit Events',
    title: 'ColorKnit Events — Where Love Becomes Art | Pune Wedding Planners',
    description: "Pune's most trusted wedding planners since 2012. 500+ weddings, expert team, flawless execution. Book your free consultation today.",
    images: [{ url: '/images/hero/poster.jpg', width: 1200, height: 630, alt: 'ColorKnit Events — Wedding Planners Pune' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ColorKnit Events | Best Wedding Planner in Pune',
    description: '500+ weddings. 12 years of excellence. Your dream wedding, crafted with love.',
    images: ['/images/hero/poster.jpg'],
  },
  icons: {
    icon: '/images/colorknit-logo-alt.jpg',
    apple: '/images/colorknit-logo-alt.jpg',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 } },
  alternates: { canonical: 'https://colorknit.in' },
  verification: {
    google: 'fPZt-Po1tkKO0a4tAYl4Rk9l7OvRjq7Z0gGUCqkr2Q4',
  },
}

// WebSite schema — enables Google Sitelinks Search Box + AI entity recognition
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'ColorKnit Events',
  url: 'https://colorknit.in',
  description: "Pune's most trusted wedding planning company since 2012.",
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: 'https://colorknit.in/gallery?q={search_term_string}' },
    'query-input': 'required name=search_term_string',
  },
}

// Organization schema — AI engines use this to understand the business entity
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://colorknit.in/#organization',
  name: 'ColorKnit Events',
  legalName: 'ColorKnit Events',
  url: 'https://colorknit.in',
  logo: {
    '@type': 'ImageObject',
    url: 'https://colorknit.in/images/colorknit-logo-alt.jpg',
    width: 140,
    height: 48,
  },
  foundingDate: '2012',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 15 },
  description: "ColorKnit Events is Pune's most trusted wedding planning company, founded in 2012 by Priya Kulkarni. Specializing in full wedding planning, decor, catering, photography and destination weddings across India.",
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Flat No. 303, 3rd Floor, Fortune House, Baner - Pashan Link Rd',
    addressLocality: 'Baner, Pune',
    addressRegion: 'Maharashtra',
    postalCode: '411045',
    addressCountry: 'IN',
  },
  contactPoint: [
    { '@type': 'ContactPoint', telephone: '+91-9271114024', contactType: 'customer service', areaServed: 'IN', availableLanguage: ['English', 'Hindi', 'Marathi'] },
    { '@type': 'ContactPoint', telephone: '+91-9011026236', contactType: 'sales', contactOption: 'TollFree' },
  ],
  sameAs: [
    'https://www.instagram.com/colorknit',
    'https://www.facebook.com/colorknit',
  ],
  knowsAbout: ['Wedding Planning', 'Wedding Decoration', 'Event Management', 'Destination Weddings', 'Wedding Photography', 'Catering Coordination'],
  areaServed: [
    { '@type': 'City', name: 'Pune' },
    { '@type': 'State', name: 'Maharashtra' },
    { '@type': 'Country', name: 'India' },
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'EventPlanner'],
  name: 'ColorKnit Events',
  description: "Pune's most trusted wedding planning company since 2012. End-to-end wedding planning, decor, catering, photography and destination weddings.",
  url: 'https://colorknit.in',
  telephone: '+91-9271114024',
  email: 'info@colorknitevents.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Flat No. 303, 3rd Floor, Fortune House, Baner - Pashan Link Rd',
    addressLocality: 'Baner, Pune',
    addressRegion: 'Maharashtra',
    postalCode: '411045',
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 18.5592, longitude: 73.7742 },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '10:00', closes: '19:00' }
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '240', bestRating: '5' },
  sameAs: [
    'https://www.instagram.com/colorknit',
    'https://www.facebook.com/colorknit',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Wedding Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Full Wedding Planning' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Decor & Florals' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Catering Coordination' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Photography & Videography' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Destination Weddings' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Honeymoon Planning' } },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable} ${dmSans.variable}`}>
      <head>
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        {/* Preload hero poster for LCP */}
        <link rel="preload" as="image" href="/images/hero/poster.jpg" fetchPriority="high" />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body>
        <AOSProvider />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <Analytics />
      </body>
    </html>
  )
}
