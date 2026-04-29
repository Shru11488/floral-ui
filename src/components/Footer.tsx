"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
      className="bg-[#1a1a1a] text-white px-6 pt-16 pb-8"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <motion.div variants={item}>
          <h3 className="text-2xl font-[var(--font-playfair)] mb-4">
            Bloom & Bliss
          </h3>
          <p className="text-gray-400 leading-relaxed text-sm max-w-sm">
            Luxury florist studio in London crafting elegant, handcrafted floral
            arrangements for every special moment.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={item}>
          <h4 className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">
            Explore
          </h4>
          <ul className="space-y-3 text-gray-300 text-sm">
            {["Home", "Collections", "Gallery", "Contact"].map((link, i) => (
              <li
                key={i}
                className="hover:text-white cursor-pointer transition duration-300"
              >
                {link}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div variants={item}>
          <h4 className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">
            Contact
          </h4>

          <div className="space-y-3 text-sm text-gray-300">
            <p>
              <strong>📍</strong> 22b Soho Street, London W1D 3QN, UK
            </p>
            <p>
              <strong>📞</strong> +44 7700 900123
            </p>
            <p>
              <strong>✉️</strong> hello@bloomandbliss.co.uk
            </p>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>© 2026 Bloom & Bliss</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          {["Instagram", "Pinterest", "Facebook"].map((social, i) => (
            <span
              key={i}
              className="hover:text-white cursor-pointer transition duration-300"
            >
              {social}
            </span>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
