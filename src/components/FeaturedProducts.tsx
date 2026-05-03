"use client";

import { motion } from "framer-motion";

const products = [
  {
    name: "Midnight Reverie",
    price: "£145",
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=1974&auto=format&fit=crop",
    category: "Signature Box",
  },
  {
    name: "Tuscan Sun",
    price: "£85",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=2080&auto=format&fit=crop",
    category: "Classic Bouquet",
  },
  {
    name: "Spring Awakening",
    price: "£95",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0fab?q=80&w=2000&auto=format&fit=crop",
    category: "Seasonal",
  },
  {
    name: "Ivory Whisper",
    price: "£160",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2070&auto=format&fit=crop",
    category: "Luxury Edition",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="kerning-luxury text-[10px] text-primary mb-4 block">Curated Selection</span>
          <h2 className="text-4xl md:text-5xl leading-tight mb-4">The Floral Shop</h2>
          <div className="w-20 h-[1px] bg-primary/30 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-secondary/20">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover grayscale-[0.2] transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                <button className="absolute bottom-0 left-0 w-full py-4 bg-white/90 backdrop-blur-sm text-[10px] kerning-luxury translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  Quick Shop
                </button>
              </div>
              <p className="text-[10px] kerning-luxury text-primary mb-2 tracking-[0.2em]">{product.category}</p>
              <h3 className="text-lg font-light mb-1">{product.name}</h3>
              <p className="text-sm opacity-60 italic">{product.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
