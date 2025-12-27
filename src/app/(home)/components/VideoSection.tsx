'use client'

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Pause, Play } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import VideoSectionContent from "@/components/shared/video-section-content";

export default function VideoSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const videoOpacity = useTransform(scrollYProgress, [0.2, 0.6], [1, 0]);
    const contentOpacity = useTransform(scrollYProgress, [0.4, 0.8], [0, 1]);
    const contentY = useTransform(scrollYProgress, [0.4, 0.8], [50, 0]);

    const togglePlay = () => {
        if (videoRef.current) {
            if (videoRef.current.paused || videoRef.current.ended) {
                videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    };

    return (
        <div ref={containerRef} className="relative h-[250vh]">
            <div className="sticky top-0 h-screen overflow-hidden">
                <motion.div style={{ opacity: videoOpacity }} className="w-full h-full relative">
                    <video ref={videoRef} className="w-full h-full object-cover" playsInline autoPlay muted loop poster="/videos/video-posters/gta-online.webp">
                        {/* desktop */}
                        <source src="/videos/gta-online.mp4" type="video/mp4" />
                        {/* mobile soon */}
                    </video>

                    <div className={cn("absolute inset-0 overflow-hidden", isPlaying && "opacity-0")}>
                        <div className={cn("relative w-full h-full scale-110 transition-all duration-500", !isPlaying && "scale-100 transition-all duration-500")}>
                            <Image src="/videos/video-posters/gta-online.webp" alt="gta-online" fill className="object-cover" priority />
                        </div>
                    </div>

                    <Button onClick={togglePlay} className="absolute top-10 right-10 transform -translate-x-1/2 -translate-y-1/2 z-10 rounded-full">
                        {!isPlaying ? <Play fill="black" size={30} /> : <Pause fill="black" size={30} />}
                    </Button>
                    <div style={{ background: "linear-gradient(rgba(0, 0, 0, 0) 0%, 70%, rgb(0, 0, 0) 100%)", backdropFilter: "none" }} className="absolute inset-0 z-0 pointer-events-none"></div>
                </motion.div>

                <motion.section
                    style={{ opacity: contentOpacity, y: contentY }}
                    className="absolute inset-0"
                >
                    <VideoSectionContent />
                </motion.section>
            </div>
        </div>
    )
}