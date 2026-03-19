import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wedding Services in Pune | Full Planning, Decor, Catering & More',
  description: 'Explore ColorKnit Events\' complete wedding services in Pune — full wedding planning, floral decor, catering coordination, photography & videography, destination weddings, and honeymoon planning.',
  keywords: ['wedding services pune', 'wedding decor pune', 'wedding catering pune', 'destination wedding india', 'wedding photography pune', 'wedding planning packages pune'],
  alternates: { canonical: 'https://colorknit.in/services' },
  openGraph: {
    url: 'https://colorknit.in/services',
    title: 'Wedding Services | ColorKnit Events Pune',
    description: 'End-to-end wedding services — planning, decor, catering, photography & destination weddings across India.',
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
