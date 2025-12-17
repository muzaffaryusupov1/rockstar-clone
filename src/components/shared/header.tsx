import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, SearchIcon, User2Icon } from "lucide-react";
import { Button } from "../ui/button";


interface HeaderData {
    label: string;
    href: string;
    icon: React.ReactNode;
    external?: boolean;
}

const HeaderData: HeaderData[] = [
    {
        label: "Newswire",
        href: "/newswire",
        icon: null,
    },
    {
        label: "Videos",
        href: "/videos",
        icon: null,
    },
    {
        label: "Downloads",
        href: "/downloads",
        icon: null,
    },
    {
        label: 'Store',
        href: 'https://store.rockstargames.com',
        icon: <ArrowUpRight size={16} />,
        external: true,
    },
    {
        label: "Support",
        href: "https://support.rockstargames.com/",
        icon: <ArrowUpRight size={16} />,
        external: true,
    }
]


export default function Header() {
    return <header className="absolute top-0 left-0 right-0 z-50 px-12 w-full text-white bg-linear-to-b from-black/80 to-transparent">
        <div className="flex items-center justify-between py-5 mt-3">
            <div>
                <Link href={'/'}>
                    <Image src={'/favicon.svg'} alt="Rockstar Games" width={32} height={32} loading="lazy" />
                </Link>
            </div>
            <nav>
                <ul className="flex items-center gap-0.5 ml-28">
                    <li>
                        <Button variant={'ghost'} className={"rounded-3xl text-base font-semibold text-white uppercase gap-1 px-6 h-10 hover:bg-white/10 hover:text-white"}>Games
                            <ChevronDown size={18} />
                        </Button>
                    </li>
                    {HeaderData.map((item) => (
                        <li key={item.label}>
                            <Link href={item.href} className="flex items-center gap-1 font-semibold text-base uppercase hover:bg-white/10 px-6 h-10 rounded-4xl transition-colors" target={item.external ? '_blank' : '_self'}>{item.label} {item.icon}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="flex items-center gap-3">
                <Button variant={'outline'} className="bg-transparent border-white text-white hover:bg-white hover:text-black rounded-2xl font-bold text-base">Get Launcher</Button>

                <Button variant={'ghost'} className="rounded-2xl hover:bg-white/10 hover:text-white">
                    <SearchIcon />
                </Button>
                <Button variant={'ghost'} className="rounded-2xl hover:bg-white/10 hover:text-white">
                    <User2Icon />
                </Button>
            </div>
        </div>
    </header>;
}