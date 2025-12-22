'use client';

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, SearchIcon, User2Icon } from "lucide-react";
import { Button } from "../ui/button";
import { headerData } from "@/constants/data";
import GamesDrawer from "./games-drawer";
import { cn } from "@/lib/utils";
import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react"
import { LogoIcon } from "@/assets/styles/icons";

export default function Header() {
    const [open, setOpen] = useState<boolean>(false)
    const headerRef = useRef<HTMLDivElement>(null)

    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                const currentScrollY = window.scrollY;

                headerRef.current.style.backgroundColor = currentScrollY > 50 ? 'rgba(0, 0, 0, 0.5)' : 'transparent';

                if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
                    headerRef.current.style.top = '-130px';
                } else {
                    headerRef.current.style.top = '0';
                }

                lastScrollY.current = currentScrollY;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <motion.header ref={headerRef} initial={{ opacity: 0, y: -70 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="fixed top-0 left-0 right-0 z-100 pointer-events-auto px-12 w-full text-white bg-linear-to-b from-black/30 to-transparent transition-all duration-300 ease-in-out pb-2">
                <div className="flex items-center justify-between py-5 mt-3">
                    <Link href={'/'}>
                        <div className="w-12 h-12 custom-glitch__effect">
                            <LogoIcon width={48} height={48} color="white" className="logo-icon" />
                        </div>
                    </Link>
                    <nav>
                        <ul className="flex items-center gap-0.5 ml-28">
                            <li>
                                <Button className={"rounded-3xl text-base font-semibold text-white uppercase gap-1.5 px-6 h-10 hover:bg-white/10 hover:text-white transition-colors bg-transparent"} onClick={() => setOpen(!open)}>
                                    Games <ChevronDown className={cn('transition-transform ease-out duration-300 w-5! h-5!', open ? 'rotate-180' : '')} />
                                </Button>
                            </li>
                            {headerData.map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="flex items-center gap-1 font-semibold text-base uppercase hover:bg-white/10 px-6 h-10 rounded-4xl transition-colors" target={item.external ? '_blank' : '_self'}>{item.label} {item.icon}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="flex items-center gap-3">
                        <Button className="bg-transparent text-white rounded-full font-bold text-base border border-solid border-white/50 hover:bg-white/10 hover:text-white transition-colors h-10">Get Launcher</Button>

                        <Button className="bg-transparent rounded-2xl hover:bg-white/10 hover:text-white transition-colors">
                            <SearchIcon color="white" />
                        </Button>
                        <Button className="bg-transparent rounded-2xl hover:bg-white/10 hover:text-white transition-colors">
                            <User2Icon color="white" />
                        </Button>
                    </div>
                </div>
            </motion.header>
            <GamesDrawer open={open} onOpenChange={setOpen} />
        </>
    )
}
