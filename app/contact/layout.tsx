import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Book a Free Wedding Consultation in Pune',
  description: 'Get in touch with ColorKnit Events — Pune\'s top wedding planners. Book a free consultation, WhatsApp us, or visit our office in Baner, Pune. We\'ll plan your dream wedding together.',
  keywords: ['contact wedding planner pune', 'book wedding planner pune', 'free wedding consultation pune', 'colorknit events contact', 'wedding planner baner pune'],
  alternates: { canonical: 'https://colorknit.in/contact' },
  openGraph: {
    url: 'https://colorknit.in/contact',
    title: 'Contact ColorKnit Events | Free Wedding Consultation Pune',
    description: 'Book your free consultation with Pune\'s most trusted wedding planners. Based in Baner, Pune.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://colorknit.in' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://colorknit.in/contact' },
  ],
}

// ContactPage schema — AEO: AI engines surface address/phone directly in answers
const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact ColorKnit Events',
  url: 'https://colorknit.in/contact',
  description: 'Book a free wedding planning consultation with ColorKnit Events in Pune. Call, WhatsApp, or fill out the inquiry form.',
  mainEntity: {
    '@type': 'Organization',
    name: 'ColorKnit Events',
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
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '10:00', closes: '19:00' },
    ],
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      {children}
    </>
  )
}
