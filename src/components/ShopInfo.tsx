export default function ShopInfo() {
  const hours = [
    { day: "Monday", time: "9:00 am – 6:00 pm" },
    { day: "Tuesday", time: "9:00 am – 6:00 pm" },
    { day: "Wednesday", time: "9:00 am – 6:00 pm" },
    { day: "Thursday", time: "9:00 am – 6:00 pm" },
    { day: "Friday", time: "9:00 am – 6:00 pm" },
    { day: "Saturday", time: "10:00 am – 5:00 pm" },
    { day: "Sunday", time: "11:00 am – 4:00 pm" },
  ];

  return (
    <section className="grid md:grid-cols-2 gap-12 px-6 max-w-7xl mx-auto">
      {/* LEFT: STORY */}
      <div>
        <p className="text-sm text-[var(--accent)] mb-2">OUR STORY</p>

        <h2 className="text-4xl font-[var(--font-playfair)] mb-4">
          Crafted with passion & elegance
        </h2>

        <p className="text-gray-600 mb-6 leading-relaxed">
          Bloom & Bliss is a London-based florist studio creating timeless
          floral designs for weddings, celebrations, and everyday luxury.
        </p>

        <div className="flex flex-wrap gap-3 text-sm">
          {[
            "Luxury bouquets",
            "Same-day delivery",
            "Wedding specialists",
            "Eco packaging",
          ].map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-[var(--primary)] rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* RIGHT: OPENING HOURS */}
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h3 className="text-xl font-semibold mb-4">⏰ Opening Hours</h3>

        <div className="space-y-3">
          {hours.map((item, i) => (
            <div key={i} className="flex justify-between border-b pb-2 text-sm">
              <span className="text-gray-600">{item.day}</span>
              <span className="font-medium">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
