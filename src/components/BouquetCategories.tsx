"use client";

import { motion } from "framer-motion";

const categories = [
  {
    name: "Signature Boxes",
    image: "/luxury_bouquet_box_1777811616720.png",
    count: "12 Styles",
  },
  {
    name: "Bespoke Design",
    image: "/bespoke_floral_design_1777811633439.png",
    count: "Customized",
  },
  {
    name: "Seasonal Bouquets",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=2080&auto=format&fit=crop",
    count: "24 Styles",
  },
];

export default function BouquetCategory() {
  return (
    <section className="py-24 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="kerning-luxury text-[10px] text-primary mb-4 block">Our Collections</span>
            <h2 className="text-4xl md:text-5xl leading-tight">
              Curated Floral <br /> 
              <span className="italic font-light">Excellence</span>
            </h2>
          </div>
          <button className="text-[11px] kerning-luxury border-b border-foreground/20 pb-1 hover:border-primary transition-colors">
            View All Collections
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-secondary">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl mb-1">{category.name}</h3>
                  <p className="text-[10px] kerning-luxury opacity-50">{category.count}</p>
                </div>
                <div className="w-8 h-8 rounded-full border border-foreground/10 flex items-center justify-center group-hover:bg-foreground group-hover:text-white transition-all duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
