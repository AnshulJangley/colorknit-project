"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const filters = ["All", "Outdoor", "Indoor", "Destination", "Intimate"] as const;
type FilterType = typeof filters[number];

const portfolioItems = [
    { id: 1,  type: "Outdoor",     couple: "Aria & James",       city: "Udaipur",    src: "/images/gallery/Picture1.png",  height: "h-[400px]" },
    { id: 2,  type: "Indoor",      couple: "Priya & Aman",       city: "Delhi",      src: "/images/gallery/Picture2.png",  height: "h-[600px]" },
    { id: 3,  type: "Destination", couple: "Sara & Michael",     city: "Goa",        src: "/images/gallery/Picture3.png",  height: "h-[450px]" },
    { id: 4,  type: "Intimate",    couple: "Tanya & Rahul",      city: "Jaipur",     src: "/images/gallery/Picture4.png",  height: "h-[500px]" },
    { id: 5,  type: "Outdoor",     couple: "Emily & David",      city: "Mumbai",     src: "/images/gallery/Picture5.png",  height: "h-[350px]" },
    { id: 6,  type: "Indoor",      couple: "Kavya & Rohan",      city: "Kerala",     src: "/images/gallery/Picture6.png",  height: "h-[550px]" },
    { id: 7,  type: "Destination", couple: "Nisha & Vikram",     city: "Rajasthan",  src: "/images/gallery/Picture7.png",  height: "h-[400px]" },
    { id: 8,  type: "Intimate",    couple: "Meera & Arjun",      city: "Bangalore",  src: "/images/gallery/Picture8.png",  height: "h-[480px]" },
    { id: 9,  type: "Outdoor",     couple: "Ananya & Siddharth", city: "Mysore",     src: "/images/gallery/Picture9.png",  height: "h-[520px]" },
    { id: 10, type: "Indoor",      couple: "Deepika & Karan",    city: "Hyderabad",  src: "/images/gallery/Picture11.png", height: "h-[420px]" },
    { id: 11, type: "Destination", couple: "Pooja & Aditya",     city: "Shimla",     src: "/images/gallery/Picture12.png", height: "h-[560px]" },
    { id: 12, type: "Outdoor",     couple: "Ria & Neil",         city: "Pune",       src: "/images/gallery/Picture13.png", height: "h-[380px]" },
    { id: 13, type: "Indoor",      couple: "Simran & Harpreet",  city: "Chandigarh", src: "/images/gallery/Picture14.png", height: "h-[500px]" },
    { id: 14, type: "Destination", couple: "Aditi & Rohit",      city: "Goa",        src: "/images/gallery/Picture15.png", height: "h-[440px]" },
    { id: 15, type: "Intimate",    couple: "Rekha & Suresh",     city: "Chennai",    src: "/images/gallery/Picture16.png", height: "h-[580px]" },
    { id: 16, type: "Outdoor",     couple: "Zara & Kabir",       city: "Agra",       src: "/images/gallery/Picture17.jpg", height: "h-[460px]" },
    { id: 17, type: "Indoor",      couple: "Pallavi & Nikhil",   city: "Kolkata",    src: "/images/gallery/Picture19.jpg", height: "h-[520px]" },
    { id: 18, type: "Destination", couple: "Shruti & Vivek",     city: "Manali",     src: "/images/gallery/Picture20.png", height: "h-[400px]" },
    { id: 19, type: "Outdoor",     couple: "Ishaani & Raj",      city: "Varanasi",   src: "/images/gallery/Picture21.png", height: "h-[480px]" },
    { id: 20, type: "Indoor",      couple: "Trisha & Arnav",     city: "Surat",      src: "/images/gallery/Picture22.png", height: "h-[360px]" },
    { id: 21, type: "Destination", couple: "Mira & Sachin",      city: "Andaman",    src: "/images/gallery/Picture23.png", height: "h-[540px]" },
    { id: 22, type: "Intimate",    couple: "Lakshmi & Prasad",   city: "Kochi",      src: "/images/gallery/Picture24.png", height: "h-[420px]" },
    { id: 23, type: "Outdoor",     couple: "Divya & Mayank",     city: "Jodhpur",    src: "/images/gallery/Picture25.png", height: "h-[500px]" },
    { id: 24, type: "Indoor",      couple: "Riya & Saurav",      city: "Ahmedabad",  src: "/images/gallery/Picture26.png", height: "h-[460px]" },
    { id: 25, type: "Intimate",    couple: "Sunita & Deepak",    city: "Nagpur",     src: "/images/gallery/Picture27.png", height: "h-[380px]" },
    { id: 26, type: "Intimate",    couple: "Geeta & Mohan",      city: "Bhopal",     src: "/images/gallery/Picture28.png", height: "h-[520px]" },
];

export default function PortfolioPage() {
    const [activeFilter, setActiveFilter] = useState<FilterType>("All");

    const filteredItems = portfolioItems.filter(item =>
        activeFilter === "All" || item.type === activeFilter
    );

    return (
        <main className="min-h-screen bg-bg">
            {/* Hero */}
            <section className="py-[120px] md:py-[160px] px-8 text-center max-w-[1280px] mx-auto">
                <h1 className="font-serif text-5xl md:text-7xl font-light text-primary mb-12">
                    A Gallery of Celebrations
                </h1>

                {/* Filter Bar */}
                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mt-16">
                    {filters.map(filter => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className="font-sans text-[13px] font-medium tracking-[0.08em] uppercase text-primary relative group pb-2"
                        >
                            <span className={activeFilter === filter ? "opacity-100" : "opacity-60 group-hover:opacity-100 transition-opacity"}>
                                {filter}
                            </span>
                            <span
                                className={`absolute left-0 bottom-0 h-[1px] bg-gold transition-all duration-300 ease-out ${activeFilter === filter ? "w-full" : "w-0 group-hover:w-full"
                                    }`}
                            />
                        </button>
                    ))}
                </div>
            </section>

            {/* Grid */}
            <section className="px-8 md:px-[64px] max-w-[1280px] mx-auto pb-[120px]">
                {/* Masonry Layout via CSS columns */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    <AnimatePresence>
                        {filteredItems.map(item => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className={`relative w-full ${item.height} overflow-hidden group cursor-pointer inline-block`}
                            >
                                <Image
                                    src={item.src}
                                    alt={`ColorKnit ${item.type.toLowerCase()} wedding – ${item.couple}, ${item.city} | Wedding Event Planner India`}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none">
                                    <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <p className="font-serif italic text-3xl text-bg mb-2">{item.couple}</p>
                                        <p className="font-sans text-[11px] font-medium tracking-[0.18em] uppercase text-bg/80">{item.city}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Load More */}
                <div className="mt-24 text-center">
                    <button className="border border-primary hover:bg-primary hover:text-bg text-primary px-8 py-4 font-sans text-xs tracking-[0.18em] uppercase transition-colors">
                        Load More
                    </button>
                </div>
            </section>
        </main>
    );
}
