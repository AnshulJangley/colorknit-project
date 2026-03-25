"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
    {
        title: "Venue Curation & Decoration",
        desc: "We transform ordinary spaces into breathtaking cinematic experiences. Our spatial designers work meticulously to curate environments that speak to your personal aesthetic, blending architectural beauty with romantic ambiance.",
        features: [
            "Custom layout and staging",
            "Lighting design & ambient styling",
            "Drapery and structural installations",
            "Furniture and tablescape curation"
        ],
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"
    },
    {
        title: "Exquisite Floral Design",
        desc: "Flowers are the poetic soul of any wedding. We source the rarest and most beautiful blooms globally to craft stunning centerpieces, arches, and bouquets that perfectly capture the mood of your celebration.",
        features: [
            "Bespoke bridal bouquets",
            "Large-scale floral installations",
            "Aisle and altar styling",
            "Seasonal and imported florals"
        ],
        image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1200&auto=format&fit=crop"
    },
    {
        title: "Catering & Culinary Coordination",
        desc: "Elevate your reception with unforgettable dining experiences. We collaborate with master chefs to design custom menus that not only taste phenomenal but are presented with impeccable artistry.",
        features: [
            "Customized tasting menus",
            "Artisan mixology and wine pairing",
            "Interactive food stations",
            "Impeccable dining service"
        ],
        image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1200&auto=format&fit=crop"
    },
    {
        title: "Photography & Cinematography",
        desc: "Your love story deserves to be captured in high editorial style. We partner with award-winning photographers and filmmakers to document your day with a blend of candid emotion and artistic composition.",
        features: [
            "Editorial-style portraiture",
            "Cinematic documentary film",
            "Drone and aerial coverage",
            "Pre-wedding editorial shoots"
        ],
        image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop"
    },
    {
        title: "Invitation & Stationery Design",
        desc: "The invitation is the first glimpse guests have of your wedding. We design bespoke, heirloom-quality paper goods, from save-the-dates to intricate day-of stationery that sets the luxurious tone of your event.",
        features: [
            "Custom illustration and calligraphy",
            "Letterpress and foil stamping",
            "Wax seals and ribbon detailing",
            "Welcome bags and gifting"
        ],
        image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop"
    },
    {
        title: "End-to-End Day-Of Coordination",
        desc: "Enjoy every second of your celebration while we handle the rest. Our expert coordinators run the timeline with precision, managing all vendors and logistics so you can be fully present.",
        features: [
            "Comprehensive timeline creation",
            "Vendor liaison and management",
            "On-site execution and troubleshooting",
            "Bridal party assistance"
        ],
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-bg">
            {/* Hero Section */}
            <section className="py-[120px] md:py-[160px] px-8 md:px-[64px] max-w-[1280px] mx-auto text-center border-b border-border">
                <h1 className="font-serif text-5xl md:text-7xl font-light text-primary mb-8">
                    Our Wedding Services
                </h1>
                <div className="w-16 h-[1px] bg-gold mx-auto"></div>
                <p className="font-sans text-muted mt-8 max-w-2xl mx-auto uppercase tracking-widest text-xs">
                    Comprehensive planning for the discerning couple
                </p>
            </section>

            {/* Services List */}
            <section className="py-[64px] md:py-[120px]">
                <div className="max-w-[1280px] mx-auto px-8 md:px-[64px] flex flex-col gap-[120px] md:gap-[160px]">
                    {services.map((service, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                viewport={{ once: true, margin: "-100px" }}
                                className={`flex flex-col md:flex-row gap-12 md:gap-24 items-center ${isEven ? "" : "md:flex-row-reverse"}`}
                            >
                                {/* Image */}
                                <div className="w-full md:w-1/2 relative h-[60vh] md:h-[80vh]">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Text Content */}
                                <div className="w-full md:w-1/2">
                                    <h2 className="font-serif text-4xl md:text-[42px] font-semibold text-primary mb-6">
                                        {service.title}
                                    </h2>
                                    <p className="font-sans text-[16px] text-primary/80 leading-[1.75] mb-8">
                                        {service.desc}
                                    </p>
                                    <ul className="flex flex-col gap-4 mb-12">
                                        {service.features.map((feature, fIdx) => (
                                            <li key={fIdx} className="flex items-center gap-3">
                                                <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0"></span>
                                                <span className="font-sans text-[15px] text-primary">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        href="/contact"
                                        className="inline-block border border-primary hover:bg-primary hover:text-bg text-primary px-8 py-4 font-sans text-xs tracking-[0.18em] uppercase transition-colors"
                                    >
                                        Inquire About This Service
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>
        </main>
    );
}
