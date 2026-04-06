import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedRelease from "@/components/FeaturedRelease";
import LatestReleases from "@/components/LatestReleases";
import ArtistSection from "@/components/ArtistSection";
import CTABanner from "@/components/CTABanner";
import ConnectSection from "@/components/ConnectSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedRelease />
        <LatestReleases />
        <ArtistSection />
        <CTABanner />
        <ConnectSection />
      </main>
      <Footer />
    </>
  );
}
