"use client";

import { Button } from "@/components/ui/button";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";
import Image from "next/image";
import { motion, Variants } from "motion/react";
import { useEffect, useState, useCallback } from "react";
import CustomPagination from "@/components/shared/custom-pagination";
import { bannerImages } from "@/constants/data";

const animationVariants: Variants = {
    rest: { y: 0, opacity: 1 },
    moved: { y: 100, opacity: 0 }
}

const SLIDE_DELAY = 4000;

export default function BannerCarousel() {
    const [carouselApi, setCarouselApi] = useState<CarouselApi>();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const toggleAutoPlay = useCallback(() => {
        setIsPlaying((prev) => !prev);
    }, []);

    const onDotButtonClick = useCallback((index: number) => {
        carouselApi?.scrollTo(index);
        setProgress(0);
    }, [carouselApi]);

    useEffect(() => {
        if (!carouselApi) return;

        setScrollSnaps(carouselApi.scrollSnapList());
        setSelectedIndex(carouselApi.selectedScrollSnap());

        const onSelect = () => {
            setSelectedIndex(carouselApi.selectedScrollSnap());
            setProgress(0); // Slayd o'zgarganda progressni nollaymiz
        };

        const onReInit = () => {
            setScrollSnaps(carouselApi.scrollSnapList());
        };

        carouselApi.on("select", onSelect);
        carouselApi.on("reInit", onReInit);

        return () => {
            carouselApi.off("select", onSelect);
            carouselApi.off("reInit", onReInit);
        };
    }, [carouselApi]);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isPlaying && carouselApi) {
            const step = 20;
            interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                        carouselApi.scrollNext();
                        return 0;
                    }
                    return prev + (step / SLIDE_DELAY) * 100;
                });
            }, step);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isPlaying, carouselApi]);

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Carousel
                opts={{
                    loop: true,
                    dragFree: false,
                    align: "center",
                    containScroll: "keepSnaps",
                    duration: 20,
                }}
                setApi={setCarouselApi}
                className="w-full"
            >
                <CarouselContent className="gap-0 m-0!">
                    {bannerImages.map((banner, index) => (
                        <CarouselItem key={banner.id} className="ml-0! pl-0!">
                            <div className="relative w-full h-[90vh] max-md:h-[70vh] max-sm:h-[60vh]">
                                <Image src={banner.src} alt={banner.alt} fill className="object-cover" priority={banner.id === 1} />
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                                <motion.div
                                    initial={'moved'}
                                    animate={selectedIndex === index ? "rest" : "moved"}
                                    variants={animationVariants}
                                    transition={{ duration: 1 }}
                                    className="absolute bottom-0 left-0 right-0 p-20 z-10 container mx-auto flex items-center gap-10"
                                >
                                    <Image src={banner.subImage} alt={banner.alt} width={250} height={250} className="object-contain" />
                                    <div className="flex flex-col gap-2">
                                        <div className="flex flex-col gap-0.5 mb-2">
                                            <h2 className="text-xl font-bold text-neutral-200 tracking-tight uppercase drop-shadow-md">{banner.title}</h2>
                                            <p className="text-5xl tracking-wide capitalize text-white font-bold drop-shadow-sm max-w-2xl">{banner.subtitle}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Button className={cn("bg-[#E8D27B] hover:bg-[#E8D27B]/80 transition-all duration-300 text-black px-6! h-16 rounded-full text-lg font-bold", banner.tag === 'gta-6' && 'bg-[#FFB0C4] hover:bg-[#FFB0C4]/80')}>
                                                <Play className="ml-2" fill="black" size={30} /> Watch Trailer
                                            </Button>
                                            <Button className="transition-all duration-300 px-9! rounded-full bg-transparent border-[0.5px] border-neutral-500 text-white h-16 hover:bg-neutral-200/20 hover:text-white hover:border-neutral-300 text-lg font-bold" variant={'outline'}>
                                                {banner.tag === 'gta-6' ? "Explore Leonida" : "Learn More"}
                                            </Button>
                                        </div>
                                    </div>
                                </motion.div>
                                <div className="absolute bottom-24 right-1/4 z-10">
                                    <CustomPagination
                                        scrollSnaps={scrollSnaps}
                                        selectedIndex={selectedIndex}
                                        onDotButtonClick={onDotButtonClick}
                                        autoplayIsPlaying={isPlaying}
                                        toggleAutoPlay={toggleAutoPlay}
                                        progressValue={progress}
                                    />
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </motion.div>
    )
}
