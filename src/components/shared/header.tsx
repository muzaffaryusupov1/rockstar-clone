'use client';

import Image from "next/image";
import Link from "next/link";
import { SearchIcon, User2Icon } from "lucide-react";
import { Button } from "../ui/button";
import { headerData } from "@/constants/data";
import GamesDrawer from "./games-drawer";

export default function Header() {
    return (
        <>
            <header className="absolute top-0 left-0 right-0 z-[100] pointer-events-auto px-12 w-full text-white bg-linear-to-b from-black/80 to-transparent">
                <div className="flex items-center justify-between py-5 mt-3">
                    <div>
                        <Link href={'/'}>
                            <Image src={'/favicon.svg'} alt="Rockstar Games" width={32} height={32} loading="lazy" />
                        </Link>
                    </div>
                    <nav>
                        <ul className="flex items-center gap-0.5 ml-28">
                            <li>
                                <GamesDrawer />
                            </li>
                            {headerData.map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="flex items-center gap-1 font-semibold text-base uppercase hover:bg-white/10 px-6 h-10 rounded-4xl transition-colors" target={item.external ? '_blank' : '_self'}>{item.label} {item.icon}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="flex items-center gap-3">
                        <Button className="bg-transparent text-white hover:bg-white/10 hover:text-white rounded-full font-bold text-base border border-solid border-white/50 h-10">Get Launcher</Button>

                        <Button variant={'ghost'} className="rounded-2xl hover:bg-white/10 hover:text-white">
                            <SearchIcon />
                        </Button>
                        <Button variant={'ghost'} className="rounded-2xl hover:bg-white/10 hover:text-white">
                            <User2Icon />
                        </Button>
                    </div>
                </div>
            </header>
        </>
    )
}
