"use client";

export default function CategoryCarousel() {
  const items = [
    "Luxury bouquets",
    "Same-day delivery",
    "Fresh seasonal flowers",
    "Handcrafted arrangements",
    "Eco-friendly packaging",
    "Wedding specialists",
  ];

  return (
    <section className="px-6 max-w-7xl mx-auto">
      {/* subtle divider like reference */}
      <div className="relative overflow-hidden border-y border-[var(--border-soft)] py-4 bg-white/40 backdrop-blur-sm rounded-xl">
        {/* gradient fade edges (premium touch) */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[var(--background)] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[var(--background)] to-transparent z-10" />

        {/* moving line */}
        <div className="whitespace-nowrap animate-marquee flex gap-10 text-sm text-gray-600 px-4">
          {[...items, ...items].map((text, i) => (
            <span key={i} className="flex items-center gap-3">
              <span className="text-[var(--gold)]">•</span>
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
