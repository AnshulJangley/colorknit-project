import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://colorknit.com"),
  title: "ColorKnit | Wedding Event Management Company India",
  description: "ColorKnit is a premium wedding event management company offering end-to-end planning, decoration, floral design, catering, and venue styling across India.",
  openGraph: {
    title: "ColorKnit Wedding Events",
    description: "Bespoke weddings crafted with love. ColorKnit handles every detail.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://colorknit.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${dmSans.variable} antialiased font-sans`}>
        <header className="sticky top-0 z-50 bg-bg/90 backdrop-blur-md border-b border-border">
          <nav className="max-w-[1280px] mx-auto px-8 md:px-[64px] h-20 flex items-center justify-between">
            <Link href="/" className="font-serif text-2xl tracking-wide text-primary">
              ColorKnit
            </Link>
            <div className="flex gap-8">
              {["Services", "Portfolio", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="font-sans text-[13px] font-medium tracking-[0.08em] uppercase text-primary relative group"
                >
                  {item}
                  <span className="absolute left-0 bottom-[-4px] w-0 h-[1px] bg-gold transition-all duration-300 ease-out group-hover:w-full" />
                </Link>
              ))}
            </div>
          </nav>
        </header>

        {children}

        <footer className="bg-primary text-bg py-[64px] md:py-[120px]">
          <div className="max-w-[1280px] mx-auto px-8 md:px-[64px] grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="font-serif text-3xl mb-4">ColorKnit</div>
              <p className="font-sans text-muted text-sm max-w-xs">
                We {"don't"} just plan weddings — we knit memories into every color.
              </p>
            </div>
            <div>
              <h4 className="font-sans text-[11px] font-medium tracking-[0.18em] uppercase text-muted mb-6">Services</h4>
              <ul className="flex flex-col gap-3 font-sans text-[13px] tracking-[0.08em] text-[#D6CEC4]">
                <li><Link href="/services" className="hover:text-gold transition-colors">Venue Decoration</Link></li>
                <li><Link href="/services" className="hover:text-gold transition-colors">Floral Design</Link></li>
                <li><Link href="/services" className="hover:text-gold transition-colors">Catering</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-sans text-[11px] font-medium tracking-[0.18em] uppercase text-muted mb-6">Quick Links</h4>
              <ul className="flex flex-col gap-3 font-sans text-[13px] tracking-[0.08em] text-[#D6CEC4]">
                <li><Link href="/portfolio" className="hover:text-gold transition-colors">Portfolio</Link></li>
                <li><Link href="/about" className="hover:text-gold transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-sans text-[11px] font-medium tracking-[0.18em] uppercase text-muted mb-6">Contact</h4>
              <ul className="flex flex-col gap-3 font-sans text-[13px] tracking-[0.08em] text-[#D6CEC4]">
                <li>hello@colorknit.com</li>
                <li>+91-XXXXXXXXXX</li>
              </ul>
            </div>
          </div>
          <div className="max-w-[1280px] mx-auto px-8 md:px-[64px] mt-[64px] pt-[32px] border-t border-muted/30 flex justify-between items-center text-[11px] font-sans font-medium tracking-[0.18em] uppercase text-muted">
            <p>&copy; {new Date().getFullYear()} ColorKnit</p>
            <p>Wedding Event Management Company India</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
