import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const storeItems = [
    {
        id: 1,
        title: "Rockstar Games",
        subtitle: "Shop New Arrivals",
        image: "/gta-online-posters/img1.jpg",
        featured: true,
    },
    {
        id: 2,
        title: "Apparel",
        subtitle: "Shop Apparel",
        image: "/gta-online-posters/img2.webp",
        featured: false,
    },
    {
        id: 3,
        title: "Collectibles",
        subtitle: "Shop Collectibles",
        image: "/gta-online-posters/img3.webp",
        featured: false,
    },
    {
        id: 4,
        title: "Accessories",
        subtitle: "Shop Accessories",
        image: "/gta-online-posters/img4.webp",
        featured: false,
    },
    {
        id: 5,
        title: "Games",
        subtitle: "Shop Games",
        image: "/gta-online-posters/img1.jpg",
        featured: false,
    },
];

export default function StoreSection() {
    return (
        <section className="w-full bg-[#141414] py-16 md:py-24">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8 md:mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold font-sans text-white tracking-tight">Store</h2>
                    <Link href={"https://store.rockstargames.com/"} target="_blank">
                        <Button className="text-lg md:text-xl px-2 md:px-6 py-2 h-auto text-white hover:text-white/80 hover:bg-transparent tracking-tight group" variant={'ghost'}>
                            View All <ArrowUpRightIcon className="ml-2 size-5 md:size-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Button>
                    </Link>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {storeItems.map((item) => (
                        <Link
                            key={item.id}
                            href="#"
                            className={`group relative block overflow-hidden rounded-xl bg-neutral-900 w-full ${item.featured
                                    ? 'lg:col-span-1 lg:row-span-2 min-h-[400px] md:min-h-[500px] lg:h-auto'
                                    : 'col-span-1 h-[300px] md:h-[350px]'
                                }`}
                        >
                            {/* Image Background */}
                            <div className="absolute inset-0 w-full h-full">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                                    priority={item.featured}
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                            </div>

                            {/* Floating Action Button / Pill */}
                            <div className="absolute bottom-6 left-6 z-10 w-[calc(100%-48px)]">
                                <span className="inline-flex items-center justify-between bg-white text-black px-5 py-3 rounded-full font-bold text-sm md:text-base tracking-wide transition-transform duration-300 group-hover:scale-105 shadow-lg max-w-max">
                                    {item.subtitle}
                                    <ArrowUpRightIcon className="ml-2 size-4" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}