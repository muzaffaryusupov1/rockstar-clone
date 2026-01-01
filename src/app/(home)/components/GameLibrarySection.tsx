import Image from "next/image";

const gameLibrarySectionContentImages = [
    {
        id: 1,
        image: "/red-dead-redemption/card-img1.webp"
    },
    {
        id: 2,
        image: "/red-dead-redemption/card-img2.webp"
    },
    {
        id: 3,
        image: "/red-dead-redemption/card-img3.webp"
    },
    {
        id: 4,
        image: "/red-dead-redemption/card-img4.webp"
    },
    {
        id: 5,
        image: "/red-dead-redemption/card-img4.webp"
    },
    {
        id: 6,
        image: "/red-dead-redemption/card-img4.webp"
    },
    {
        id: 7,
        image: "/red-dead-redemption/card-img4.webp"
    },
]

// Duplicate the data to create a seamless loop
const duplicatedImages = [...gameLibrarySectionContentImages, ...gameLibrarySectionContentImages];

export default function GameLibrarySection() {
    return (
        <section className="relative w-full max-w-[1920px] mx-auto py-20 overflow-hidden">
            {/* Gradient Overlays */}
            <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-black to-transparent z-10 pointer-events-none"></div>

            <div className="flex flex-col gap-4">
                {/* First Row - Faster */}
                <div className="w-full overflow-hidden">
                    <div className="flex gap-4 animate-scroll will-change-transform">
                        {duplicatedImages.map((item) => (
                            <div className="flex-none relative aspect-[0.8] w-auto h-[300px] pointer-events-none mr-4">
                                <Image
                                    key={item.id}
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

                {/* Second Row - Slower */}
                <div className="w-full overflow-hidden">
                    <div className="flex gap-4 animate-scroll-slow will-change-transform">
                        {duplicatedImages.map((item, index) => (
                            <div className="flex-none relative aspect-[0.8] w-auto h-[300px] pointer-events-none mr-4">
                                <Image
                                    key={item.id}
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
        </section>
    )
}