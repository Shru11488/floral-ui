import Hero from "@/components/Hero";
import BouquetCategory from "@/components/BouquetCategories";
import FeaturedProducts from "@/components/FeaturedProducts";
import SignatureCollections from "@/components/SignatureCollections";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <BouquetCategory />
      <FeaturedProducts />
      <SignatureCollections />
      
      {/* Testimonials or Quality Promise Section */}
      <section className="py-32 px-6 bg-background border-t border-foreground/5">
        <div className="max-w-4xl mx-auto text-center">
          <span className="kerning-luxury text-[10px] text-primary mb-8 block">Excellence Guaranteed</span>
          <h2 className="text-3xl md:text-5xl italic font-light leading-snug mb-12">
            "Flowers are the music of the ground. From earth's lips spoken without sound."
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-[1px] bg-foreground/20" />
            <p className="text-[11px] kerning-luxury opacity-60">Edwin Curran</p>
            <div className="w-12 h-[1px] bg-foreground/20" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
