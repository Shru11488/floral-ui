import Hero from "@/components/Hero";
import CategoryCarousel from "@/components/CategoryCarousel";
import BouquetCategories from "@/components/BouquetCategories";
import ShopInfo from "@/components/ShopInfo";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex flex-col gap-32 pb-20">
        <Hero />
        <CategoryCarousel />
        <BouquetCategories />
        <ShopInfo />
        <Testimonials />
        <ContactSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
