import Header from "@/components/shared/header";
import BannerCarousel from "./components/BannerCarousel";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <BannerCarousel />
            </main>
        </>
    )
}