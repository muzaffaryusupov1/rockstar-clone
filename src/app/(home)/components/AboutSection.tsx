import { Card, CardHeader } from "@/components/ui/card";
import Image from "next/image";

export default function AboutSection() {
    return (
        <section>
            {/* desktop */}
            <div className="hidden md:block">
                {/* Two columns */}
                <div className="grid grid-cols-2 gap-4">
                    {/* Left column */}
                    <div>
                        <Card className="p-0!">
                            <CardHeader className="p-0!">
                                <div className="relative aspect-[4/3]">
                                    <Image src={'/about-section/image-1.jpg'} alt="gta-6" fill className="object-cover" />
                                </div>
                            </CardHeader>
                        </Card>
                    </div>
                    {/* Right column */}
                    <div>

                    </div>
                </div>
            </div>
            {/* mobile */}
            <div className="md:hidden">

            </div>
        </section>
    )
}