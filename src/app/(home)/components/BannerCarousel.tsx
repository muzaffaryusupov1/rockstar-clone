"use client";

import { Button } from "@/components/ui/button";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";
import Image from "next/image";
import { motion, Variants } from "motion/react";
import { useEffect, useState } from "react";

const bannerImages = [
    {
        id: 1,
        src: '/header/header-banner-1.webp',
        alt: 'header-banner-1',
        title: "GRAND THEFT AUTO V",
        subtitle: "Trailer 2",
        subImage: '/header/gta-6.svg',
        tag: "gta-6",
    },
    {
        id: 2,
        src: '/header/header-banner-2.webp',
        alt: 'header-banner-2',
        title: "GRAND THEFT AUTO ONLINE",
        subtitle: "A Safehouse in the Hills Now Available",
        subImage: '/header/gta-online.svg',
        tag: "gta-online",
    },
    {
        id: 3,
        src: '/header/header-banner-3.webp',
        alt: 'header-banner-3',
        title: "GRAND THEFT AUTO V",
        subtitle: "Experience GTAV Enhanced: The Best Version on PC",
        subImage: '/header/gta-5.svg',
        tag: "gta-5",
    },
]

const animationVariants: Variants = {
    rest: { y: 0, opacity: 1 },
    moved: { y: 100, opacity: 0 }
}

export default function BannerCarousel() {
    const [carouselApi, setCarouselApi] = useState<CarouselApi>();
    const [slideCount, setSlideCount] = useState(1);

    useEffect(() => {
        if (!carouselApi) {
            return
        }

        setSlideCount(carouselApi.selectedScrollSnap() + 1);

        carouselApi.on("select", (emblaApi) => {
            setSlideCount(emblaApi.selectedScrollSnap() + 1)
        });
    }, [carouselApi]);


    return (
        <>
            <Carousel opts={{
                loop: true,
                duration: 5000,
                dragFree: false,
            }} setApi={setCarouselApi}>
                <CarouselContent className="gap-0 m-0!">
                    {bannerImages.map((banner) => (
                        <CarouselItem key={banner.id} className="ml-0! pl-0!">
                            <div className="relative w-full h-[90vh]">
                                <Image src={banner.src} alt={banner.alt} fill className="object-cover" loading="lazy" />
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                                <motion.div initial={'moved'} animate={slideCount === banner.id ? "rest" : "moved"} variants={animationVariants} transition={{ duration: 1, }} className="absolute bottom-0 left-0 right-0 p-20 z-10 container mx-auto flex items-center gap-10">
                                    <Image src={banner.subImage} alt={banner.alt} width={250} height={250} className="object-contain" />
                                    <div className="flex flex-col gap-2">
                                        <div className="flex flex-col gap-0.5 mb-2">
                                            <h2 className="text-xl font-bold text-neutral-200 tracking-tight uppercase drop-shadow-md">{banner.title}</h2>
                                            <p className="text-5xl tracking-wide capitalize text-white font-bold drop-shadow-sm max-w-2xl">{banner.subtitle}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Button className={cn("bg-[#E8D27B] hover:bg-[#E8D27B]/80 transition-all duration-300 text-black px-6! h-16 rounded-full text-lg font-bold", banner.tag === 'gta-6' && 'bg-[#FFB0C4] hover:bg-[#FFB0C4]/80')}><Play className="ml-2" fill="black" size={30} /> Watch Trailer</Button>
                                            <Button className="transition-all duration-300 px-9! rounded-full bg-transparent border-[0.5px] border-neutral-500 text-white h-16 hover:bg-neutral-200/20 hover:text-white hover:border-neutral-300 text-lg font-bold" variant={'outline'}>{banner.tag === 'gta-6' ? "Explore Leonida" : "Learn More"}</Button>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </>
    )
}