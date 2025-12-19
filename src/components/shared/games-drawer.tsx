import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer";
import { gamesImages } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function GamesDrawer() {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <Drawer open={open} direction="top" modal={true} autoFocus={false} onOpenChange={setOpen}>
            <DrawerTrigger>
                <Button variant={'ghost'} className={"rounded-3xl text-base font-semibold text-white uppercase gap-1.5 px-6 h-10 hover:bg-white/10 hover:text-white"}>
                    Games <ChevronDown className={cn('transition-transform ease-out duration-300 w-5! h-5!', open ? 'rotate-180' : '')} />
                </Button>
            </DrawerTrigger>
            <DrawerContent className="mt-[88px] h-[580px] bg-black/95 backdrop-blur-md text-white border-white/10 z-50 focus:outline-none">
                <div className="container mx-auto py-10">
                    <DrawerHeader className="flex flex-row items-center justify-between">
                        <DrawerTitle className="text-white text-3xl font-semibold">Featured Games</DrawerTitle>
                        <Button variant={'ghost'} className="rounded-full hover:bg-white/15 hover:text-white h-16 w-max px-6! text-xl font-semibold transition-colors">View All <ArrowRight className="w-6! h-6!" /></Button>
                    </DrawerHeader>
                    <div className="p-4">
                        <div className="grid grid-cols-5 gap-5">
                            {gamesImages.map((image) => (
                                <Link key={image.id} href={image.href} className="relative aspect-[3/4] hover:scale-[1.03] transition-transform ease-out duration-300">
                                    <Image src={image.src} alt={image.alt} fill className="object-cover border border-white/15 rounded-sm overflow-hidden" priority={false} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading="lazy" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    )
}