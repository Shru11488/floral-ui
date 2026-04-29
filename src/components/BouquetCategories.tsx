"use client";

import { motion } from "framer-motion";

export default function BouquetCategories() {
  const categories = [
    {
      title: "Wedding Bouquets",
      image:
        "https://media.bloom.gallery/wp-content/uploads/2026/01/22224827/Gemini_Generated_Image_vgrme8vgrme8vgrm.png",
    },
    {
      title: "Birthday Flowers",
      image:
        "https://cdn.bloomsflora.com/uploads/product/bloomsflora/12854_67_12854.webp",
    },
    {
      title: "Anniversary Specials",
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSq7eRTob56pjiY6V0r3CnGuLiBgkYnl4DpAZ9VYglB26jrIjAfYzjjHtBrFHkQI83JLIuTrCAzja127Cfk0T88laIfE3SFMa0TVzQSp5c",
    },
    {
      title: "Luxury Roses",
      image:
        "https://www.juneflowers.com/wp-content/uploads/2022/09/25_luxury_red_roses.png",
    },
    {
      title: "Sympathy Flowers",
      image:
        "https://cdnnew.interflora.in/f_auto,q_auto,t_pnopt8prodlp/products/p-white-memoir-420559-m.jpg",
    },
    {
      title: "Festive Collection",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTM_Ya4F-BxoxpYFSrhHJjTw80Z0g8p6H8g8qsLrTfXYDaZlnwBkwrS6RfbpFDqmCC22Ot9zRIFiNxsaCy2LyEOBAavmGYy-Xf5xYSrY1rBLq2EVVLwYq546A",
    },
  ];

  return (
    <section className="px-6 max-w-7xl mx-auto">
      {/* Title */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-[var(--font-playfair)]">
          Shop by Category
        </h2>
      </div>

      {/* DESKTOP GRID (3 IN A ROW) */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        {categories.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="relative rounded-2xl overflow-hidden shadow-md group cursor-pointer h-[260px]"
          >
            {/* Image */}
            <img
              src={item.image}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            {/* Text */}
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg md:text-xl font-semibold">{item.title}</h3>
              <p className="text-sm opacity-80 mt-1">Explore →</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MOBILE */}
      <div className="grid grid-cols-1 gap-6 md:hidden">
        {categories.map((item, i) => (
          <div key={i} className="relative rounded-2xl overflow-hidden">
            <img src={item.image} className="w-full h-[220px] object-cover" />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
