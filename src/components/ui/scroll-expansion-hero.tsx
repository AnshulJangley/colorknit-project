"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

export function ScrollExpandMedia({
    mediaType, // Using next/image instead of simple img for optimal loading
    mediaSrc,
    bgImageSrc,
    title,
    date,
    scrollToExpand,
}: {
    mediaType?: string;
    mediaSrc: string;
    bgImageSrc?: string;
    title: string;
    date: string;
    scrollToExpand: string;
    textBlend?: boolean;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const width = useTransform(scrollYProgress, [0, 1], ["40%", "100%"]);
    const height = useTransform(scrollYProgress, [0, 1], ["50vh", "100vh"]);
    const borderRadius = useTransform(scrollYProgress, [0, 0.5], ["30px", "0px"]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const words = title.split(" ");

    // Cinematic sliding apart effect for the title
    const leftX = useTransform(scrollYProgress, [0, 0.5], ["0%", "-50%"]);
    const rightX = useTransform(scrollYProgress, [0, 0.5], ["0%", "50%"]);

    return (
        <div ref={containerRef} className="relative h-[250vh] w-full bg-bg">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                {bgImageSrc && (
                    <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply">
                        <Image src={bgImageSrc} alt="Landscape Background" fill className="object-cover" priority />
                    </div>
                )}

                <motion.div
                    style={{ width, height, borderRadius }}
                    className="relative z-10 overflow-hidden shadow-2xl"
                >
                    <Image src={mediaSrc} alt="Scroll Expanded Media" fill className="object-cover" priority />
                </motion.div>

                <motion.div
                    style={{ opacity: textOpacity }}
                    className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none"
                >
                    <div className="flex gap-4 font-serif text-[clamp(42px,6vw,90px)] font-light text-primary mb-2">
                        <motion.span style={{ x: leftX }}>{words[0]}</motion.span>
                        <motion.span style={{ x: rightX }}>{words.slice(1).join(" ")}</motion.span>
                    </div>
                    <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted font-medium">{date}</p>

                    <div className="absolute bottom-12 font-sans text-[11px] tracking-[0.18em] uppercase text-muted animate-pulse">
                        {scrollToExpand}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
