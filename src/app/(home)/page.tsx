import Header from "@/components/shared/header";
import BannerCarousel from "./components/BannerCarousel";
import AboutSection from "./components/AboutSection";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <BannerCarousel />
                {/*  About Section */}
                <AboutSection />
            </main>
        </>
    )
}