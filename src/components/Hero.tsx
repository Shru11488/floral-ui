"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative grid md:grid-cols-2 gap-12 items-center px-6 max-w-7xl mx-auto pt-28 pb-10 overflow-hidden">
      {/* LEFT CONTENT */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          className="text-sm text-[var(--accent)] mb-3 tracking-widest"
        >
          PREMIUM FLORAL COLLECTION
        </motion.p>

        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: { opacity: 1, y: 0 },
          }}
          className="text-5xl md:text-6xl font-[var(--font-playfair)] leading-tight mb-6"
        >
          Bring elegance <br /> to every moment
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          className="text-gray-600 mb-6 leading-relaxed max-w-lg"
        >
          Discover handcrafted bouquets, luxury roses, and bespoke floral
          arrangements designed to elevate every occasion.
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          className="flex gap-4 mb-10"
        >
          {/* Primary Button */}
          <button
            className="
      relative px-7 py-3 rounded-full
      bg-[var(--primary)]
      text-black font-medium
      shadow-md
      overflow-hidden
      transition-all duration-300
      hover:shadow-xl hover:scale-[1.03]
      active:scale-[0.98]
    "
          >
            Shop now
            <span className="ml-2">→</span>
            {/* subtle hover glow */}
            <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition duration-300" />
          </button>

          {/* Secondary Button */}
          <button
            className="
    relative px-7 py-3 rounded-full
    border border-[var(--primary)]
    text-black
    font-medium
    bg-white/40 backdrop-blur-md
    shadow-sm
    transition-all duration-300
    hover:bg-[var(--primary)]/5
    hover:shadow-md hover:scale-[1.03]
    active:scale-[0.98]
  "
          >
            Contact us
          </button>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          className="flex gap-10 text-sm text-gray-600"
        >
          <div>
            <p className="font-semibold text-lg">4.9★</p>
            <p>UK rating</p>
          </div>
          <div>
            <p className="font-semibold text-lg">10k+</p>
            <p>Happy clients</p>
          </div>
          <div>
            <p className="font-semibold text-lg">Free</p>
            <p>Delivery over £50</p>
          </div>
        </motion.div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        {/* soft background glow */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[var(--primary)] rounded-full blur-3xl opacity-40" />

        <img
          src="https://img.freepik.com/premium-photo/luxury-flower-shop-window-mockup-blossom-plant-flower-arrangement_53876-493168.jpg"
          className="rounded-2xl shadow-2xl object-cover"
        />

        {/* floating subtle element */}
        {/* <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-6 right-6 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-sm shadow"
        >
          Fresh • Handcrafted • Elegant
        </motion.div> */}
      </motion.div>
    </section>
  );
}
