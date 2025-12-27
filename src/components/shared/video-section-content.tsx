import Image from "next/image";
import Link from "next/link";

export default function VideoSectionContent() {
    return (
        <>
            <div className="absolute bottom-10 inset-x-0">
                <div className="max-w-[1280px] mx-auto flex items-center gap-10">
                    <div className="relative overflow-hidden w-[200px] h-[200px]">
                        <Image src={'/videos/video-posters/gta-5-online.svg'} alt="gta-online" fill loading="lazy" />
                    </div>

                    <div className="">
                        <ol className="flex gap-2">
                            <li className="video-section-link games">
                                <Link href="/games">Games</Link>
                            </li>
                            <li className="video-section-link">Grand Theft Auto Online</li>
                        </ol>
                        <p>Explore GTA Online, a dynamic world for up to 30 players, featuring all updates and content since launch, playable solo or with friends.</p>
                    </div>
                </div>
            </div>

            {/* soon */}
            <div></div>
        </>
    )
}