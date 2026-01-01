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


export const gtaOnlineContent = [
    {
        id: 1,
        description: "The premium Membership for GTA Online players.",
        button: "Learn More",
        href: "#",
        image: "/gta-online-posters/img1.jpg",
        subImage: "/gta-online-posters/gta-plus.svg",
        subImageClass: "w-auto h-[90px]",
        buttonClass: "video-section-button bg-[#FCAF17] text-black hover:bg-[#FCAF17]/70!",
        isGradient: true,
    },
    {
        id: 2,
        description: "Create your own personalized license plates.",
        button: "Create Now",
        href: "#",
        image: "/gta-online-posters/img2.webp",
        buttonClass: "video-section-button bg-neutral-500/50 hover:bg-neutral-500/70! text-white opacity-80 group-hover:opacity-100",
        isGradient: false,
    },
    {
        id: 3,
        button: "Watch Trailer",
        href: "#",
        image: "/gta-online-posters/img3.webp",
        subImage: "/header/gta-online.svg",
        subImageClass: "w-[220px] h-[120px]",
        buttonClass: "video-section-button bg-[#CBB45A] hover:bg-[#CBB45A]/70! text-black opacity-80 group-hover:opacity-100",
        isGradient: false,
    },
    {
        id: 4,
        description: "See all the challenges that you've completed in your GTA Online Career.",
        button: "View Progress",
        href: "#",
        image: "/gta-online-posters/img4.webp",
        buttonClass: "video-section-button bg-neutral-500/50 hover:bg-neutral-500/70! text-white opacity-80 group-hover:opacity-100",
        isGradient: false,
    },
]

export const redDeadContentCards = [
    {
        id: 1,
        button: "View Event",
        href: "#",
        image: "/red-dead-redemption/card-img1.webp",
        subImage: "/red-dead-redemption/card-sub-img1.webp",
        subImageClass: "w-[220px] h-[120px] mb-28",
        buttonClass: "video-section-button bg-neutral-500/50 hover:bg-neutral-500/70! text-white opacity-80 group-hover:opacity-100",
        isGradient: false,
    },
    {
        id: 2,
        button: "Watch Trailer",
        href: "#",
        image: "/red-dead-redemption/card-img2.webp",
        subImage: "/red-dead-redemption/card-sub-img2.webp",
        subImageClass: "w-[220px] h-[120px] mb-24",
        buttonClass: "video-section-button bg-neutral-500/50 hover:bg-neutral-500/70! text-white opacity-80 group-hover:opacity-100",
        isGradient: true,
    },
    {
        id: 3,
        button: "View Catalogue",
        href: "#",
        image: "/red-dead-redemption/card-img3.webp",
        buttonClass: "video-section-button bg-neutral-500/50 hover:bg-neutral-500/70! text-white opacity-80 group-hover:opacity-100",
        isGradient: true,
    },
    {
        id: 4,
        description: "Track your outlaw career.",
        button: "View Progress",
        href: "#",
        image: "/red-dead-redemption/card-img4.webp",
        buttonClass: "video-section-button bg-neutral-500/50 hover:bg-neutral-500/70! text-white opacity-80 group-hover:opacity-100",
        isGradient: true,
    },
]

export const gtaOnlineTopData =
{
    id: 1,
    title: "Grand Theft Auto Online",
    description: "Explore GTA Online, a dynamic world for up to 30 players, featuring all updates and content since launch, playable solo or with friends.",
    href: "#",
    image: '/videos/video-posters/gta-5-online.svg',
}
export const redDeadOnlineTopData =
{
    id: 2,
    title: "Red Dead Online",
    description: "Join millions of fellow players in the American West and experience a world now packed with years' worth of new features, gameplay, and additional enhancements.",
    href: "#",
    image: '/videos/video-posters/red-dead-online.svg',
}

export const redDeadContent = [
    {
        id: 1,
        description: "The premium Membership for GTA Online players.",
        button: "Learn More",
        href: "#",
        image: "/gta-online-posters/img1.jpg",
        subImage: "/gta-online-posters/gta-plus.svg",
        subImageClass: "w-auto h-[90px]",
        buttonClass: "video-section-button bg-[#FCAF17] text-black hover:bg-[#FCAF17]/70!",
        isGradient: true,
    },
    {
        id: 2,
        description: "Create your own personalized license plates.",
        button: "Create Now",
        href: "#",
        image: "/gta-online-posters/img2.webp",
        buttonClass: "video-section-button bg-neutral-500/50 hover:bg-neutral-500/70! text-white opacity-80 group-hover:opacity-100",
        isGradient: false,
    },
    {
        id: 3,
        button: "Watch Trailer",
        href: "#",
        image: "/gta-online-posters/img3.webp",
        subImage: "/header/gta-online.svg",
        subImageClass: "w-[220px] h-[120px]",
        buttonClass: "video-section-button bg-[#CBB45A] hover:bg-[#CBB45A]/70! text-black opacity-80 group-hover:opacity-100",
        isGradient: false,
    },
    {
        id: 4,
        description: "See all the challenges that you've completed in your GTA Online Career.",
        button: "View Progress",
        href: "#",
        image: "/gta-online-posters/img4.webp",
        buttonClass: "video-section-button bg-neutral-500/50 hover:bg-neutral-500/70! text-white opacity-80 group-hover:opacity-100",
        isGradient: false,
    },
]

export const videoSectionContent = [
    {
        id: 1,
        sectionVideo: "/videos/gta-online.mp4",
        sectionVideoMobile: "/videos/video/gta-online-mobile.mp4",
        sectionVideoPoster: "/videos/video-posters/gta-online.webp",
        sectionVideoStopImage: "/videos/video-posters/gta-online.webp",
        videoSectionContent: gtaOnlineContent,
        topData: gtaOnlineTopData,
        topDataCards: gtaOnlineContent,
        content: 'gta'
    },
    {
        id: 2,
        sectionVideo: "/videos/red-dead-redemption.mp4",
        sectionVideoMobile: "/videos/video/red-dead-mobile.mp4",
        sectionVideoPoster: "/videos/video-posters/red-dead-redemption.webp",
        sectionVideoStopImage: "/videos/video-posters/red-dead-redemption.webp",
        videoSectionContent: redDeadContent,
        topData: redDeadOnlineTopData,
        topDataCards: redDeadContentCards,
        content: 'red-dead'
    }
]
