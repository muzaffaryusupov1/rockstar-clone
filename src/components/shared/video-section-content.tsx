import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Play } from "lucide-react";
import { Card, CardContent, CardDescription } from "../ui/card";
import { cn } from "@/lib/utils";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

interface Props {
    topData: any;
    topDataCards: any;
}

export default function VideoSectionContent({ topData, topDataCards }: Props) {
    return (
        <div className="w-full">
            <div className="max-w-[1280px] mx-auto flex flex-col">
                <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-start gap-8 md:gap-16 lg:gap-20 text-center md:text-left px-6 py-10 md:px-20 lg:px-40">
                    <div className="relative overflow-hidden w-[150px] h-[150px] md:w-[200px] md:h-[200px] shrink-0">
                        <Image src={topData.image} alt="gta-online" fill loading="lazy" className="object-contain" />
                    </div>

                    <div className="flex flex-col gap-4 items-center md:items-start w-full">
                        <div className="flex flex-col gap-2 items-center md:items-start">
                            <ol className="flex gap-2 text-sm md:text-base">
                                <li className="video-section-link games">
                                    <Link href="/games">Games</Link>
                                </li>
                                <li className="video-section-link">{topData.title}</li>
                            </ol>
                            <p className="text-neutral-300 whitespace-normal line-clamp-3 md:max-w-[600px] text-base md:text-lg font-medium">
                                {topData.description}
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                            <Link href={topData.href} className="w-full sm:w-auto">
                                <Button className="video-section-button w-full sm:w-auto justify-center">
                                    <Play size={20} fill="#000" color="#000" className="mr-2" />
                                    Watch Trailer
                                </Button>
                            </Link>
                            <Link href={topData.href} className="w-full sm:w-auto">
                                <Button className="video-section-button w-full sm:w-auto justify-center" variant="outline">
                                    Learn More
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 tracking-tight text-center md:text-left">Jump Into {topData.title}</h1>
                    <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-md:hidden">
                        {topDataCards.map((item: any) => (
                            <Link href={item.href} key={item.id} className="block w-full">
                                <Card className="p-0 bg-transparent border-none w-full max-w-[350px] mx-auto md:max-w-none">
                                    <CardContent className="p-0 relative group">
                                        <div className="relative overflow-hidden w-full h-[400px]">
                                            {
                                                item.isGradient && (
                                                    <div className="absolute inset-0 bg-linear-to-t from-black to-transparent z-10"></div>
                                                )
                                            }
                                            <Image src={item.image} alt="gta-online" fill loading="lazy" className="object-cover select-none opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-md" />
                                            <div className={cn("absolute inset-0 m-auto z-20 aspect-video w-auto h-[90px]", item.subImageClass)}>
                                                {
                                                    item.subImage && (
                                                        <Image src={item.subImage} alt="gta-plus" fill loading="lazy" className="object-contain select-none" />
                                                    )
                                                }
                                            </div>
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col gap-2 items-center justify-center pb-10 px-4">
                                            {
                                                item.description && (
                                                    <CardDescription className="text-center text-white text-base md:text-lg font-medium tracking-tight">{item.description}</CardDescription>
                                                )
                                            }
                                            <Button className={cn("video-section-button mt-2 font-bold px-8! transition-all duration-300", item.buttonClass)}>
                                                {item.button}
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                    {/* Mobile View Carousel */}
                    <div className="md:hidden ml-6">
                        <Carousel className="w-full" opts={{ align: "start", loop: false }}>
                            <CarouselContent className="-ml-4 pb-4 gap-4">
                                {topDataCards.map((item: any) => (
                                    <CarouselItem key={item.id} className="pl-4! basis-[85%]">
                                        <Link href={item.href} className="block">
                                            <Card className="p-0 bg-transparent border-none aspect-[0.66] h-[530px]">
                                                <CardContent className="p-0 relative group h-full">
                                                    <div className="relative overflow-hidden w-full h-full">
                                                        {item.isGradient && (
                                                            <div className="absolute inset-0 bg-linear-to-t from-black to-transparent z-10"></div>
                                                        )}
                                                        <Image
                                                            src={item.image}
                                                            alt="gta-online"
                                                            fill
                                                            loading="lazy"
                                                            className="object-cover select-none opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-md"
                                                        />
                                                        <div className={cn("absolute inset-0 m-auto z-20 aspect-video w-auto h-[90px]", item.subImageClass)}>
                                                            {item.subImage && (
                                                                <Image src={item.subImage} alt="logo" fill loading="lazy" className="object-contain select-none" />
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col gap-2 items-center justify-center pb-10 px-4">
                                                        {item.description && (
                                                            <CardDescription className="text-center text-white text-base font-medium tracking-tight">
                                                                {item.description}
                                                            </CardDescription>
                                                        )}
                                                        <Button className={cn("video-section-button mt-2 font-bold px-8! transition-all duration-300", item.buttonClass)}>
                                                            {item.button}
                                                        </Button>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}