"use client";

import { motion } from "framer-motion";

export default function SignatureCollections() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm bg-secondary/20">
              <img
                src="https://images.unsplash.com/photo-1523694567367-f5762170ba67?q=80&w=2070&auto=format&fit=crop"
                alt="Craftsmanship"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1591886616136-626238379ba2?q=80&w=2070&auto=format&fit=crop";
                }}
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 border border-primary/20 -z-10 hidden md:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <span className="kerning-luxury text-[10px] text-primary mb-8 block">The Floral Philosophy</span>
            <h2 className="text-4xl md:text-6xl mb-10 leading-[1.2]">
              Crafting Emotions <br /> 
              <span className="italic font-light text-foreground/80 text-3xl md:text-5xl block mt-2">Through Botanical Art</span>
            </h2>
            <p className="text-lg text-foreground/70 font-light leading-relaxed mb-12">
              Each arrangement is a unique dialogue between nature and design. We source only the rarest blooms from sustainable growers, ensuring each petal tells a story of elegance and ethical beauty.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-12 border-y border-foreground/10 py-10">
              <div>
                <h4 className="text-2xl mb-2 italic">01.</h4>
                <p className="text-[11px] kerning-luxury mb-2">Artisan Curated</p>
                <p className="text-xs text-foreground/60 leading-relaxed">Every stem is hand-selected by our master florists for its unique character.</p>
              </div>
              <div>
                <h4 className="text-2xl mb-2 italic">02.</h4>
                <p className="text-[11px] kerning-luxury mb-2">Sustainable Sourcing</p>
                <p className="text-xs text-foreground/60 leading-relaxed">Committed to ethical farming and carbon-neutral delivery practices.</p>
              </div>
            </div>

            <button className="text-[11px] kerning-luxury flex items-center gap-4 group">
              Explore Our Story
              <div className="w-12 h-[1px] bg-foreground group-hover:w-20 transition-all duration-500" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
