import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PhotoStrip from "@/components/PhotoStrip";
import FeaturedRelease from "@/components/FeaturedRelease";
import LatestReleases from "@/components/LatestReleases";
import ArtistSection from "@/components/ArtistSection";
import CTABanner from "@/components/CTABanner";
import ConnectSection from "@/components/ConnectSection";
import Footer from "@/components/Footer";
import ScrollObserver from "@/components/ScrollObserver";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedRelease />
        <LatestReleases />
        <PhotoStrip />
        <ArtistSection />
        <CTABanner />
        <ConnectSection />
      </main>
      <Footer />
      <ScrollObserver />
    </>
  );
}
