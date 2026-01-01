import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Play } from "lucide-react";
import { Card, CardContent, CardDescription } from "../ui/card";
import { cn } from "@/lib/utils";

interface Props {
    topData: any;
    topDataCards: any;
}

export default function VideoSectionContent({ topData, topDataCards }: Props) {
    return (
        <div className="absolute bottom-10 inset-x-0 px-40 py-20">
            <div className="max-w-[1280px] mx-auto flex flex-col">
                <div className="flex items-center gap-20">
                    <div className="relative overflow-hidden w-[200px] h-[200px]">
                        <Image src={topData.image} alt="gta-online" fill loading="lazy" />
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <ol className="flex gap-2">
                                <li className="video-section-link games">
                                    <Link href="/games">Games</Link>
                                </li>
                                <li className="video-section-link">{topData.title}</li>
                            </ol>
                            <p className="text-neutral-300 whitespace-normal line-clamp-3 max-w-[600px] text-lg font-medium">{topData.description}</p>
                        </div>
                        <div className="flex gap-2">
                            <Link href={topData.href}>
                                <Button className="video-section-button">
                                    <Play size={20} fill="#000" color="#000" />
                                    Watch Trailer
                                </Button>
                            </Link>
                            <Link href={topData.href}>
                                <Button className="video-section-button" variant="outline">
                                    Learn More
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-20">
                    <h1 className="text-3xl font-bold mb-10 tracking-tight">Jump Into {topData.title}</h1>
                    <div className="grid grid-cols-4 gap-4">
                        {topDataCards.map((item: any) => (
                            <Link href={item.href} key={item.id}>
                                <Card className="p-0 bg-transparent border-none max-w-[290px]">
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
                                        <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col gap-2 items-center justify-center pb-10">
                                            {
                                                item.description && (
                                                    <CardDescription className="text-center text-white text-lg font-medium max-w-[250px] tracking-tight">{item.description}</CardDescription>
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
                </div>
            </div>
        </div>
    )
}