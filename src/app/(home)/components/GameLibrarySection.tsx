import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const topRowImages = [
    {
        id: 1,
        image: "/loop-images/top/MP3_FOB.jpg"
    },
    {
        id: 2,
        image: "/loop-images/top/LAN_FOB.jpg"
    },
    {
        id: 3,
        image: "/loop-images/top/GTAV_FOB.jpg"
    },
    {
        id: 4,
        image: "/loop-images/top/GTAO_FOB.jpg"
    },
    {
        id: 5,
        image: "/loop-images/top/GTA_Trilogy_FOB.jpg"
    },
    {
        id: 6,
        image: "/loop-images/top/Bully_FOB.jpg"
    },
    {
        id: 7,
        image: "/loop-images/top/RDO_FOB.jpg"
    },
    {
        id: 8,
        image: "/loop-images/top/RDR_FOB.jpg"
    },
    {
        id: 9,
        image: "/loop-images/top/RDR_UN_FOB.jpg"
    },
    {
        id: 10,
        image: "/loop-images/top/RDR2_FOB.jpg"
    },
]

const bottomRowImages = [
    {
        id: 1,
        image: '/loop-images/bottom/GTA_LCS_FOB.jpg',
    },
    {
        id: 2,
        image: '/loop-images/bottom/GTAIV_FOB.jpg',
    },
    {
        id: 3,
        image: '/loop-images/bottom/GTA_VCS_FOB.jpg',
    },
    {
        id: 4,
        image: '/loop-images/bottom/Manhunt2_FOB.jpg',
    },
    {
        id: 5,
        image: '/loop-images/bottom/MCLA_FOB.jpg',
    },
    {
        id: 6,
        image: '/loop-images/bottom/TT_FOB.jpg',
    },
    {
        id: 7,
        image: '/loop-images/bottom/Warriors_FOB.jpg',
    },
    {
        id: 8,
        image: '/loop-images/bottom/GTA_ELC_FOB.jpg',
    },
    {
        id: 9,
        image: '/loop-images/bottom/GTA_CW_FOB.jpg',
    },
    {
        id: 10,
        image: '/loop-images/bottom/Beaterator_FOB.jpg',
    },
]


export default function GameLibrarySection() {
    return (
        <section className="w-full bg-black relative pb-20">
            <div className="relative w-full max-w-[1560px] mx-auto py-20 overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-[10%] bg-linear-to-r from-black to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-[10%] bg-linear-to-l from-black to-transparent z-10 pointer-events-none"></div>

                <div className="flex flex-col gap-4">
                    {/* bottom linear gradient */}
                    <div style={{ background: "linear-gradient(rgba(0, 0, 0, 0) 0%, 70%, rgb(0, 0, 0) 100%)", backdropFilter: "none" }} className="absolute bottom-18 left-0 w-full h-[90%] z-10 pointer-events-none"></div>
                    <div className="w-full overflow-hidden">
                        <div className="flex gap-4 animate-scroll will-change-transform">
                            {topRowImages.map((item) => (
                                <div className="flex-none relative aspect-[0.8] w-auto h-[300px] pointer-events-none mr-4" key={item.id}>
                                    <Image
                                        src={item.image}
                                        alt="game art"
                                        fill
                                        className="object-cover rounded-xl border border-white/10"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full overflow-hidden">
                        <div className="flex gap-4 animate-scroll-slow will-change-transform">
                            {bottomRowImages.map((item) => (
                                <div className="flex-none relative aspect-[0.8] w-auto h-[300px] pointer-events-none mr-4" key={item.id}>
                                    <Image
                                        src={item.image}
                                        alt="game art"
                                        fill
                                        className="object-cover rounded-xl border border-white/10"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom content */}
            <div className="w-full max-w-6xl mx-auto absolute bottom-5 inset-x-0 z-10">
                <div className="flex flex-col gap-1 mb-8">
                    <h1 className="text-5xl font-medium tracking-tight leading-tight">Game Library</h1>
                    <p className="text-xl font-bold max-w-[45ch] text-balance -tracking-[0.005em]">All Rockstar Games titles, from upcoming releases like Grand Theft Auto VI to the classics.</p>
                </div>
                <Link href="/games">
                    <Button className="bg-white/90 hover:bg-white transition-colors duration-300 px-5! py-6! rounded-full text-base font-semibold">View All <ArrowRight size={18} /></Button>
                </Link>
            </div>
        </section>
    )
}