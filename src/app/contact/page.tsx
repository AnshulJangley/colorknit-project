"use client";
import React from "react";
import Script from "next/script";

export default function ContactPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "ColorKnit Wedding Events",
        "description": "Premium wedding event management services across India",
        "url": "https://colorknit.com",
        "telephone": "+91-XXXXXXXXXX",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
        },
        "priceRange": "₹₹₹"
    };

    return (
        <main className="min-h-screen bg-bg">
            <Script
                id="schema-local-business"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero */}
            <section className="py-[80px] md:py-[120px] px-8 text-center max-w-[1280px] mx-auto border-b border-border">
                <span className="font-sans text-[12px] uppercase tracking-[0.18em] text-muted block mb-4">Inquire</span>
                <h1 className="font-serif text-5xl md:text-7xl font-light text-primary mb-8">
                    Plan Your Wedding With Us
                </h1>
                <p className="font-sans text-[16px] text-primary/80 max-w-xl mx-auto leading-[1.75]">
                    Let's discuss how we can bring your vision to life. Please share a few details, and our team will get back to you to schedule a consultation.
                </p>
            </section>

            {/* Content */}
            <section className="py-[80px] md:py-[120px] px-8 md:px-[64px] max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
                {/* Left: Form */}
                <div>
                    <form className="flex flex-col gap-10" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="flex flex-col gap-2">
                                <label className="font-sans text-[11px] font-medium tracking-[0.18em] uppercase text-muted">Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-transparent border-b border-[#D6CEC4] py-2 focus:outline-none focus:border-gold transition-colors font-sans text-primary"
                                    placeholder="Your full name"
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-sans text-[11px] font-medium tracking-[0.18em] uppercase text-muted">Partner's Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-transparent border-b border-[#D6CEC4] py-2 focus:outline-none focus:border-gold transition-colors font-sans text-primary"
                                    placeholder="Their full name"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="flex flex-col gap-2">
                                <label className="font-sans text-[11px] font-medium tracking-[0.18em] uppercase text-muted">Wedding Date</label>
                                <input
                                    type="text"
                                    className="w-full bg-transparent border-b border-[#D6CEC4] py-2 focus:outline-none focus:border-gold transition-colors font-sans text-primary placeholder-primary/30"
                                    placeholder="e.g. November 2024"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-sans text-[11px] font-medium tracking-[0.18em] uppercase text-muted">Event Type</label>
                                <input
                                    type="text"
                                    className="w-full bg-transparent border-b border-[#D6CEC4] py-2 focus:outline-none focus:border-gold transition-colors font-sans text-primary"
                                    placeholder="Destination, Intimate, Grand..."
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="flex flex-col gap-2">
                                <label className="font-sans text-[11px] font-medium tracking-[0.18em] uppercase text-muted">City / Location</label>
                                <input
                                    type="text"
                                    className="w-full bg-transparent border-b border-[#D6CEC4] py-2 focus:outline-none focus:border-gold transition-colors font-sans text-primary"
                                    placeholder="Where are you celebrating?"
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-sans text-[11px] font-medium tracking-[0.18em] uppercase text-muted">Budget Range</label>
                                <select className="w-full bg-transparent border-b border-[#D6CEC4] py-2 focus:outline-none focus:border-gold transition-colors font-sans text-primary cursor-pointer appearance-none rounded-none">
                                    <option value="" disabled selected>Select an option</option>
                                    <option value="luxury">Luxury (₹50L - ₹1Cr)</option>
                                    <option value="premium">Premium (₹1Cr - ₹3Cr)</option>
                                    <option value="bespoke">Bespoke (₹3Cr+)</option>
                                    <option value="undecided">Still Deciding</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-sans text-[11px] font-medium tracking-[0.18em] uppercase text-muted">Message</label>
                            <textarea
                                className="w-full bg-transparent border-b border-[#D6CEC4] py-2 focus:outline-none focus:border-gold transition-colors font-sans text-primary resize-none h-24"
                                placeholder="Tell us about your vision..."
                                required
                            />
                        </div>

                        <button type="submit" className="bg-primary hover:bg-gold text-bg px-10 py-5 font-sans text-[13px] tracking-widest uppercase transition-colors w-full md:w-auto self-start mt-4">
                            Send Inquiry
                        </button>
                    </form>
                </div>

                {/* Right: Contact Details + Map */}
                <div className="flex flex-col gap-16">
                    <div className="flex flex-col gap-10">
                        <div>
                            <h3 className="font-serif text-3xl font-medium text-primary mb-6">Contact Information</h3>
                            <p className="font-sans text-[16px] text-primary/80 leading-[1.75] mb-8">
                                Our atelier is open by appointment only. We are currently accepting inquiries for late 2024 and 2025 celebrations.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <span className="font-sans text-[11px] font-medium tracking-[0.18em] uppercase text-muted block mb-2">Email</span>
                                <a href="mailto:hello@colorknit.com" className="font-sans text-[15px] text-primary hover:text-gold transition-colors">hello@colorknit.com</a>
                            </div>
                            <div>
                                <span className="font-sans text-[11px] font-medium tracking-[0.18em] uppercase text-muted block mb-2">Phone</span>
                                <a href="tel:+91XXXXXXXXXX" className="font-sans text-[15px] text-primary hover:text-gold transition-colors">+91 98765 43210</a>
                            </div>
                            <div className="col-span-2">
                                <span className="font-sans text-[11px] font-medium tracking-[0.18em] uppercase text-muted block mb-2">Studio</span>
                                <p className="font-sans text-[15px] text-primary">
                                    125 Design District, Sector 4<br />
                                    Udaipur, Rajasthan, 313001
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-[300px] bg-border/20 flex items-center justify-center border border-border group overflow-hidden relative">
                        {/* Map Placeholder */}
                        <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors z-10 pointer-events-none"></div>
                        <div className="font-sans text-[11px] font-medium tracking-[0.18em] uppercase text-muted z-20 flex flex-col items-center gap-4">
                            <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Google Maps Embed
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
