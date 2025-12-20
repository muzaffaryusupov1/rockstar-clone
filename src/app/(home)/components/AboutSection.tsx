import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import NewsCard from "@/components/shared/news-card";
import { newsItems } from "@/constants/data";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export default function AboutSection() {


    return (
        <section className="max-w-7xl mx-auto py-10 px-4">
            {/* Desktop Layout */}
            <div className="hidden lg:block">
                <div className="grid grid-cols-12 gap-6">
                    {/* Left column - Main Featured Card */}
                    <div className="col-span-7">
                        <Link href="#">
                            <Card className="p-0 border-0 bg-transparent group">
                                <CardHeader className="p-0">
                                    <div className="relative aspect-video opacity-[0.9] overflow-hidden rounded-t-lg group-hover:opacity-100 transition-opacity duration-300">
                                        <Image
                                            src="/about-section/image-1.jpg"
                                            alt="GTA VI"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </CardHeader>
                                <CardContent className="bg-neutral-900 p-8 lg:p-12 rounded-b-lg group-hover:bg-neutral-800 transition-colors duration-300">
                                    <div>
                                        <h2 className="text-sm lg:text-lg font-semibold uppercase text-neutral-300/90 mb-3 lg:mb-4">
                                            GRAND THEFT AUTO VI
                                        </h2>
                                        <CardDescription className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-white/85 mb-4 lg:mb-6 font-sans tracking-wide leading-tight">
                                            Grand Theft Auto VI is Now Set to Launch November 19, 2026
                                        </CardDescription>
                                        <span className="text-base lg:text-lg font-semibold text-muted-foreground">
                                            November 6, 2025
                                        </span>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>

                    {/* Right column - News Cards */}
                    <div className="col-span-5 flex flex-col gap-6">
                        {newsItems.map((item) => (
                            <NewsCard
                                key={item.id}
                                image={item.image}
                                category={item.category}
                                title={item.title}
                                date={item.date}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Tablet Layout */}
            <div className="hidden md:block lg:hidden">
                <div className="space-y-6">
                    {/* Main Featured Card */}
                    <Card className="p-0 border-0 bg-transparent">
                        <CardHeader className="p-0">
                            <div className="relative aspect-video opacity-[0.9] overflow-hidden rounded-t-lg">
                                <Image
                                    src="/about-section/image-1.jpg"
                                    alt="GTA VI"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </CardHeader>
                        <CardContent className="bg-neutral-900 p-8 rounded-b-lg">
                            <div>
                                <h2 className="text-base font-semibold uppercase text-neutral-300/90 mb-3">
                                    GRAND THEFT AUTO VI
                                </h2>
                                <CardDescription className="text-3xl font-semibold text-white/85 mb-4 font-sans tracking-wide leading-tight">
                                    Grand Theft Auto VI is Now Set to Launch November 19, 2026
                                </CardDescription>
                                <span className="text-base font-semibold text-muted-foreground">
                                    November 6, 2025
                                </span>
                            </div>
                        </CardContent>
                    </Card>

                    {/* News Cards */}
                    <div className="space-y-6">
                        {newsItems.map((item) => (
                            <NewsCard
                                key={item.id}
                                image={item.image}
                                category={item.category}
                                title={item.title}
                                date={item.date}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden space-y-6">
                <div className="space-y-6">
                    <Carousel className="w-full" opts={{ loop: false, align: "start" }}>
                        <CarouselContent className="ml-12">
                            <CarouselItem className="pl-4 basis-[50%] md:basis-[40%]">
                                <Link href="#" className="block h-full">
                                    <Card className="p-0 border-0 bg-transparent group h-full flex flex-col max-sm:gap-0">
                                        <CardHeader className="p-0 shrink-0">
                                            <div className="relative aspect-video opacity-[0.9] overflow-hidden rounded-t-lg group-hover:opacity-100 transition-opacity duration-300">
                                                <Image
                                                    src="/about-section/image-1.jpg"
                                                    alt="GTA VI"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </CardHeader>
                                        <CardContent className="bg-neutral-900 max-md:p-[32px] p-6 rounded-b-lg group-hover:bg-neutral-800 transition-colors duration-300 flex-1">
                                            <div>
                                                <h2 className="max-md:text-xs text-sm font-semibold uppercase text-neutral-300/90 mb-2">
                                                    GRAND THEFT AUTO VI
                                                </h2>
                                                <CardDescription className="max-md:text-lg text-xl font-semibold text-white/85 mb-3 font-sans tracking-wide leading-tight line-clamp-3">
                                                    Grand Theft Auto VI is Now Set to Launch November 19, 2026
                                                </CardDescription>
                                                <span className="max-md:text-xs text-sm font-semibold text-muted-foreground">
                                                    November 6, 2025
                                                </span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </CarouselItem>

                            {newsItems.map((item) => (
                                <CarouselItem key={item.id} className="pl-4 basis-[50%] md:basis-[40%]">
                                    <NewsCard
                                        image={item.image}
                                        category={item.category}
                                        title={item.title}
                                        date={item.date}
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>

                </div>
            </div>
        </section>
    );
}