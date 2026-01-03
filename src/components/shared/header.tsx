'use client';

import Link from "next/link";
import { ChevronDown, MenuIcon, SearchIcon, User2Icon } from "lucide-react";
import { Button } from "../ui/button";
import { headerData } from "@/constants/data";
import GamesDrawer from "./games-drawer";
import MobileMenu from "./mobile-menu";
import { cn } from "@/lib/utils";
import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react"
import { LogoIcon } from "@/assets/styles/icons";

export default function Header() {
    const [open, setOpen] = useState<boolean>(false) // Desktop Games Drawer
    const [mobileOpen, setMobileOpen] = useState<boolean>(false) // Mobile Menu Drawer
    const headerRef = useRef<HTMLDivElement>(null)

    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                const currentScrollY = window.scrollY;

                headerRef.current.style.backgroundColor = currentScrollY > 50 ? 'rgba(0, 0, 0, 0.8)' : 'transparent';
                headerRef.current.style.backdropFilter = currentScrollY > 50 ? 'blur(10px)' : 'none';

                if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
                    headerRef.current.style.transform = 'translateY(-100%)';
                } else {
                    headerRef.current.style.transform = 'translateY(0)';
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
            <motion.header
                ref={headerRef}
                initial={{ opacity: 0, y: -70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed top-0 left-0 right-0 z-[100] pointer-events-auto px-6 md:px-12 w-full text-white bg-gradient-to-b from-black/60 to-transparent transition-all duration-300 ease-in-out py-4"
            >
                <div className="relative flex items-center justify-between">

                    {/* LEFT SIDE */}
                    <div className="flex items-center gap-4">
                        {/* Mobile Hamburger (Visible < lg) */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="lg:hidden text-white hover:bg-white/10"
                            onClick={() => setMobileOpen(true)}
                        >
                            <MenuIcon className="size-8" />
                        </Button>

                        {/* Desktop Logo (Visible >= lg) */}
                        <Link href={'/'} className="hidden lg:block">
                            <div className="w-12 h-12 custom-glitch__effect">
                                <LogoIcon width={48} height={48} color="white" className="logo-icon" />
                            </div>
                        </Link>
                    </div>

                    {/* CENTER - Mobile Logo (Visible < lg) */}
                    <div className="lg:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Link href={'/'}>
                            <div className="w-10 h-10 custom-glitch__effect">
                                <LogoIcon width={40} height={40} color="white" className="logo-icon" />
                            </div>
                        </Link>
                    </div>

                    {/* CENTER - Desktop Navigation (Visible >= lg) */}
                    <nav className="hidden lg:block ml-12">
                        <ul className="flex items-center gap-1">
                            <li>
                                <Button
                                    className={"rounded-3xl text-base font-semibold text-white uppercase gap-1.5 px-6 h-10 hover:bg-white/10 hover:text-white transition-colors bg-transparent"}
                                    onClick={() => setOpen(!open)}
                                >
                                    Games <ChevronDown className={cn('transition-transform ease-out duration-300 w-5! h-5!', open ? 'rotate-180' : '')} />
                                </Button>
                            </li>
                            {headerData.map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="flex items-center gap-1 font-semibold text-base uppercase hover:bg-white/10 px-6 h-10 rounded-4xl transition-colors" target={item.external ? '_blank' : '_self'}>
                                        {item.label} {item.icon}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* RIGHT SIDE */}
                    <div className="flex items-center gap-3">
                        {/* Desktop Buttons (Visible >= lg) */}
                        <div className="hidden lg:flex items-center gap-3">
                            <Button className="bg-transparent text-white rounded-full font-bold text-base border border-solid border-white/50 hover:bg-white/10 hover:text-white transition-colors h-10">
                                Get Launcher
                            </Button>

                            <Button className="bg-transparent rounded-2xl hover:bg-white/10 hover:text-white transition-colors" size="icon">
                                <SearchIcon color="white" />
                            </Button>
                        </div>

                        {/* User Icon (Always Visible) */}
                        <Button className="bg-transparent rounded-2xl hover:bg-white/10 hover:text-white transition-colors" size="icon">
                            <User2Icon color="white" className="size-6 lg:size-5" />
                        </Button>
                    </div>
                </div>
            </motion.header>

            {/* Drawers */}
            <GamesDrawer open={open} onOpenChange={setOpen} />
            <MobileMenu open={mobileOpen} onOpenChange={setMobileOpen} />
        </>
    )
}
