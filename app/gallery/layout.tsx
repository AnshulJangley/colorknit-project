import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wedding Gallery | Real Weddings by ColorKnit Events Pune',
  description: 'Browse stunning photos from 500+ real weddings planned by ColorKnit Events in Pune. Mandaps, decor, florals, ceremonies, receptions & destination weddings across India.',
  keywords: ['wedding gallery pune', 'wedding photos pune', 'indian wedding decor photos', 'mandap decoration photos', 'colorknit weddings gallery'],
  alternates: { canonical: 'https://colorknit.in/gallery' },
  openGraph: {
    url: 'https://colorknit.in/gallery',
    title: 'Wedding Gallery | ColorKnit Events — Real Weddings in Pune',
    description: 'Stunning photos from 500+ weddings — mandaps, decor, florals, ceremonies & destination celebrations.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://colorknit.in' },
    { '@type': 'ListItem', position: 2, name: 'Gallery', item: 'https://colorknit.in/gallery' },
  ],
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  )
}
