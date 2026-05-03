"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="h-screen relative flex items-center justify-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src="/luxury_florist_hero_1777811595219.png"
          alt="Luxury Floral Arrangement"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-white text-center px-6 max-w-5xl"
      >
        <span className="kerning-luxury text-[10px] md:text-xs mb-6 block opacity-80">Established 1994 • London</span>
        <h1 className="text-5xl md:text-8xl mb-8 leading-[1.1]">
          The Art of <br /> 
          <span className="italic font-light">Fine Floristry</span>
        </h1>
        <p className="max-w-xl mx-auto text-sm md:text-lg opacity-90 font-light leading-relaxed mb-10">
          Hand-crafted botanical masterpieces delivered to your door. <br className="hidden md:block" />
          Elegance in every petal, curated for the most discerning tastes.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button className="px-10 py-4 bg-primary text-white text-[11px] kerning-luxury hover:bg-white hover:text-foreground transition-all duration-500 premium-shadow">
            Shop Collection
          </button>
          <button className="px-10 py-4 border border-white/30 text-white text-[11px] kerning-luxury hover:bg-white/10 transition-all duration-500 backdrop-blur-sm">
            Bespoke Services
          </button>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white flex flex-col items-center gap-2"
      >
        <span className="text-[9px] kerning-luxury opacity-60">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent" />
      </motion.div>
    </section>
  );
}
