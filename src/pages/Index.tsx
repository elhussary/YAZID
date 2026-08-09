import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExclusiveSection from "@/components/ExclusiveSection";
import MaterialsSection from "@/components/MaterialsSection";
import HplSection from "@/components/HplSection";
import WpcSection from "@/components/WpcSection";
import PartitionsSection from "@/components/PartitionsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExclusiveSection />
        <MaterialsSection />
        <HplSection />
        <WpcSection />
        <PartitionsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
