import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

interface NewsCardProps {
    image: string;
    category: string;
    title: string;
    date: string;
    href?: string;
}

export default function NewsCard({
    image,
    category,
    title,
    date,
    href = "#",
}: NewsCardProps) {
    return (
        <Link
            href={href}
            className="block h-full"
        >
            <Card className="group max-md:grid max-md:grid-rows-[auto_1fr] md:flex md:flex-row w-full bg-transparent hover:bg-neutral-900 border-0 transition-all duration-300 overflow-hidden p-0 max-md:rounded-md gap-1">
                <CardContent className="relative aspect-[1] overflow-hidden p-0 opacity-[0.9] group-hover:opacity-[1] transition-all duration-300 max-md:hidden shrink-0 w-[190px]">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </CardContent>

                <div className="relative aspect-video opacity-[0.9] overflow-hidden rounded-t-lg group-hover:opacity-100 transition-opacity duration-300">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="flex flex-col justify-center max-md:p-[32px] p-5 md:p-4 flex-1 max-md:bg-neutral-900">
                    <CardHeader className="mb-2 p-0 space-y-0">
                        <CardDescription className="text-neutral-300 max-md:text-xs text-sm font-bold tracking-wider uppercase mb-1.5">
                            {category}
                        </CardDescription>
                        <h3 className="text-white max-md:text-lg text-lg md:text-xl font-bold leading-tight group-hover:text-white/90 transition-colors duration-300 line-clamp-3 md:line-clamp-2">
                            {title}
                        </h3>
                    </CardHeader>
                    <div className="p-0">
                        <p className="text-neutral-500 max-md:text-xs text-sm md:text-md font-medium">{date}</p>
                    </div>
                </div>
            </Card>
        </Link >
    );
}
