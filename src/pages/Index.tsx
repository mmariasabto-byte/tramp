import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { BrandsSection } from "@/components/BrandsSection";
import { ManufacturerGrid } from "@/components/ManufacturerGrid";
import { WhatsAppBanner } from "@/components/WhatsAppBanner";
import { ProductsSection } from "@/components/ProductsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-background">
      <main>
        <HeroSection />
        <BrandsSection />
        <ManufacturerGrid />
        <WhatsAppBanner />
        <ProductsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
