import Header from "@/components/shared/header";
import BannerCarousel from "./components/BannerCarousel";
import AboutSection from "./components/AboutSection";
import VideoSection from "./components/VideoSection";
import { videoSectionContent } from "@/constants/data";
import GameLibrarySection from "./components/GameLibrarySection";
import StoreSection from "./components/StoreSection";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <BannerCarousel />
                {/*  About Section */}
                <AboutSection />
                {/* Video Section */}
                {
                    videoSectionContent.map((item: any) => (
                        <VideoSection sectionVideo={item.sectionVideo} sectionVideoMobile={item.sectionVideoMobile} sectionVideoPoster={item.sectionVideoPoster} sectionVideoStopImage={item.sectionVideoStopImage} topDataCards={item.topDataCards} topData={item.topData} key={item.id} />
                    ))
                }
                {/* Game Library Section */}
                <GameLibrarySection />
                {/* Store Section */}
                <StoreSection />
            </main>
        </>
    )
}