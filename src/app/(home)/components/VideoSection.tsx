'use client'

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Pause, Play } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import VideoSectionContent from "@/components/shared/video-section-content";

interface VideoSectionProps {
    sectionVideo: string,
    sectionVideoMobile: string,
    sectionVideoPoster: string,
    sectionVideoStopImage: string
    topDataCards: any,
    topData: any
}

export default function VideoSection({
    sectionVideo,
    sectionVideoMobile,
    sectionVideoPoster,
    sectionVideoStopImage,
    topDataCards,
    topData
}: VideoSectionProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const videoScale = useTransform(scrollYProgress, [0, 0.8], [1, 1.2]);
    const blurValue = useTransform(scrollYProgress, [0, 0.8], ["blur(0px)", "blur(20px)"]);
    const bgGradient = useTransform(scrollYProgress, [0, 1], [
        "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 1) 100%)",
        "linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 100%)"
    ]);

    const togglePlay = () => {
        if (videoRef.current) {
            if (videoRef.current.paused || videoRef.current.ended) {
                videoRef.current.currentTime = 0;
                videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    };


    return (
        <div className="max-md:h-[300vh]">
            <div ref={containerRef} className="relative h-[250vh] max-md:h-[180vh] overflow-visible">
                <div className="sticky top-0 h-screen w-full overflow-hidden">
                    <div className="vi4uz50 w-full h-full relative">
                        <motion.div
                            style={{ scale: videoScale }}
                            className="vi4uz51 w-full h-full"
                        >
                            <video
                                ref={videoRef}
                                className="w-full h-full object-cover"
                                playsInline
                                autoPlay
                                muted
                                loop
                                poster={sectionVideoPoster}
                            >
                                <source media="(min-width: 768px)" src={sectionVideo} type="video/mp4" />
                                <source media="(min-width: 0px) and (max-width: 767.98px)" src={sectionVideoMobile} type="video/mp4" />
                            </video>
                        </motion.div>

                        <div className={cn("absolute inset-0 overflow-hidden", isPlaying && "opacity-0")}>
                            <div className={cn("relative w-full h-full scale-110 transition-all duration-500 max-md:h-[450px] max-md:object-contain", !isPlaying && "scale-100 transition-all duration-500")}>
                                <Image src={sectionVideoStopImage} alt="gta-online" fill className="object-cover" priority />
                            </div>
                        </div>

                        <Button
                            onClick={togglePlay}
                            className="absolute top-10 right-10 transform -translate-x-1/2 -translate-y-1/2 rounded-full z-50 bg-white/20 hover:bg-white/40 backdrop-blur-md border-none p-3 h-auto"
                        >
                            {!isPlaying ? <Play fill="white" size={24} className="text-white" /> : <Pause fill="white" size={24} className="text-white" />}
                        </Button>

                        <motion.div
                            style={{
                                background: bgGradient,
                                backdropFilter: blurValue,
                            }}
                            className="absolute inset-0 z-10 pointer-events-none"
                        />
                    </div>
                </div>

                {/* Content Section - Appears as we scroll further */}
                <section className="relative z-50">
                    <VideoSectionContent topData={topData} topDataCards={topDataCards} />
                </section>
            </div>
        </div>
    )
}