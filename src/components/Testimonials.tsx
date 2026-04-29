export default function Testimonials() {
  const data = [
    {
      name: "Emily Carter",
      comment:
        "Absolutely stunning bouquet! Delivery was perfect and the flowers stayed fresh for days.",
    },
    {
      name: "James Walker",
      comment:
        "Easily the best florist experience I’ve had. Elegant arrangements and flawless service.",
    },
    {
      name: "Sophia Bennett",
      comment:
        "The attention to detail is incredible. Every bouquet feels thoughtfully designed.",
    },
  ];

  return (
    <section className="px-6 max-w-7xl mx-auto py-20">
      {/* Label */}
      <p className="text-sm tracking-widest text-[var(--accent)] mb-3">
        TESTIMONIALS
      </p>

      {/* Heading + rating */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12">
        <h2 className="text-4xl md:text-5xl font-[var(--font-playfair)] leading-tight max-w-xl">
          Trusted by people who love flowers
        </h2>

        <div className="hidden md:flex flex-col items-center bg-white/60 backdrop-blur-md px-6 py-4 rounded-2xl shadow-sm border border-white/40">
          <p className="text-3xl font-semibold">4.9</p>
          <p className="text-yellow-500 text-lg">★★★★★</p>
          <p className="text-xs text-gray-500 mt-1">
            Based on verified UK reviews
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {data.map((t, i) => (
          <div
            key={i}
            className="
              relative p-7 rounded-2xl
              bg-white/70 backdrop-blur-md
              border border-white/40
              shadow-sm
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-lg
            "
          >
            {/* Quote mark */}
            <div className="text-5xl text-[var(--accent)] opacity-20 absolute top-4 left-5">
              “
            </div>

            {/* Comment */}
            <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
              {t.comment}
            </p>

            {/* Footer */}
            <div className="flex justify-between items-center">
              <p className="font-semibold text-gray-900">{t.name}</p>
              <span className="text-yellow-500 text-sm">★★★★★</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
