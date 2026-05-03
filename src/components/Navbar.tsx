"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-[100] transition-all duration-700 px-6 md:px-12 ${
        scrolled
          ? "glass premium-shadow py-3 md:py-4"
          : "bg-transparent text-white py-6 md:py-8"
      } flex justify-between items-center`}
    >
      <div className={`text-xl md:text-2xl kerning-luxury font-light transition-colors duration-500 ${scrolled ? "text-[#1A1A1A]" : "text-white"}`}>
        FLORAL <span className="font-semibold text-primary">STUDIO</span>
      </div>

      <div className={`hidden md:flex gap-10 text-[11px] kerning-luxury font-medium transition-colors duration-500 ${scrolled ? "text-[#1A1A1A]" : "text-white"}`}>
        <a href="#" className="hover:text-primary transition-colors">Shop All</a>
        <a href="#" className="hover:text-primary transition-colors">Bespoke</a>
        <a href="#" className="hover:text-primary transition-colors">Journal</a>
        <a href="#" className="hover:text-primary transition-colors">Contact</a>
      </div>

      <div className={`flex items-center gap-6 transition-colors duration-500 ${scrolled ? "text-[#1A1A1A]" : "text-white"}`}>
        <button className="hover:text-primary transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </button>
        <button className="hover:text-primary transition-colors relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          <span className="absolute -top-1 -right-1 bg-primary text-[8px] text-white w-3 h-3 rounded-full flex items-center justify-center">0</span>
        </button>
      </div>
    </motion.nav>
  );
}
