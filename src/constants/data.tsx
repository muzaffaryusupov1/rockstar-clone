import { IBannerImage } from "@/types";
import { ArrowUpRight } from "lucide-react";

// Mock data
export const bannerImages: IBannerImage[] = [
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


export const headerData = [
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


// games data
export const gamesImages = [
    {
        id: 1,
        src: '/drawer-images/gta-6.jpg',
        alt: 'gta-6',
        href: '#',
    },
    {
        id: 2,
        src: '/drawer-images/gta-5.jpg',
        alt: 'gta-5',
        href: '#',
    },
    {
        id: 3,
        src: '/drawer-images/gta-online.jpg',
        alt: 'gta-online',
        href: '#',
    },
    {
        id: 4,
        src: '/drawer-images/red-dead-redemption-2.jpg',
        alt: 'red-dead-redemption-2',
        href: '#',
    },
    {
        id: 5,
        src: '/drawer-images/red-dead-redemption.jpg',
        alt: 'red-dead-redemption',
        href: '#',
    }
]

export const newsItems = [
    {
        id: 1,
        image: "/about-section/image-2.jpg",
        category: "GTA ONLINE",
        title: "The Futuristic New Progen Luiva Supercar Arrives for the Holidays in GTA Online",
        date: "December 18, 2025",
    },
    {
        id: 2,
        image: "/about-section/image-3.jpg",
        category: "GTA ONLINE",
        title: "Get Early Access to Claim the New Vapid FMJ MK V Supercar with GTA+",
        date: "December 10, 2025",
    },
    {
        id: 3,
        image: "/about-section/image-4.jpg",
        category: "GTA ONLINE",
        title: "GTA Online: A Safehouse in the Hills Now Available",
        date: "December 10, 2025",
    },
    {
        id: 4,
        image: "/about-section/image-5.jpg",
        category: "ROCKSTAR GAMES",
        title: "New at the Rockstar Store: Apparel, Collectibles, and More",
        date: "December 5, 2025",
    },
];