"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
    titleComponent,
    children,
}: {
    titleComponent: string | React.ReactNode;
    children: React.ReactNode;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    return (
        <div
            className="h-[80rem] flex items-center justify-center relative p-2 md:p-20"
            ref={containerRef}
        >
            <div
                className="w-full relative"
                style={{
                    perspective: "1000px",
                }}
            >
                <Header rotate={useTransform(scrollYProgress, [0, 0.2], [20, 0])} titleComponent={titleComponent} />
                <Card
                    rotate={useTransform(scrollYProgress, [0, 0.2], [20, 0])}
                    scale={useTransform(scrollYProgress, [0, 0.2], [0.9, 1])}
                >
                    {children}
                </Card>
            </div>
        </div>
    );
};

export const Header = ({
    titleComponent,
    rotate,
}: {
    titleComponent: React.ReactNode;
    rotate: MotionValue<number>;
}) => {
    return (
        <motion.div
            style={{
                rotateX: rotate,
            }}
            className="max-w-5xl mx-auto text-center"
        >
            {titleComponent}
        </motion.div>
    );
};

export const Card = ({
    rotate,
    scale,
    children,
}: {
    rotate: MotionValue<number>;
    scale: MotionValue<number>;
    children: React.ReactNode;
}) => {
    return (
        <motion.div
            style={{
                rotateX: rotate,
                scale,
                boxShadow:
                    "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
            }}
            className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#D6CEC4] p-2 md:p-6 bg-[#1A1A18] rounded-[30px] shadow-2xl"
        >
            <div className="h-full w-full overflow-hidden rounded-2xl bg-[#F5F0EB] md:rounded-2xl md:p-4">
                {children}
            </div>
        </motion.div>
    );
};
