export default function ContactSection() {
  return (
    <section className="grid md:grid-cols-2 gap-12 px-6 max-w-7xl mx-auto">
      <div>
        <p className="text-sm text-[var(--accent)] mb-2">VISIT & CONNECT</p>

        <h2 className="text-4xl font-[var(--font-playfair)] mb-4">
          We're here to help
        </h2>

        <p className="text-gray-600 mb-6">
          Need a custom bouquet? Our London team responds quickly.
        </p>

        <div className="space-y-3">
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
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg space-y-4">
        <h3 className="text-xl font-semibold">Send us a message</h3>

        <input
          className="w-full border p-3 rounded-lg"
          placeholder="Full name"
        />
        <input className="w-full border p-3 rounded-lg" placeholder="Email" />
        <textarea
          className="w-full border p-3 rounded-lg"
          placeholder="Message"
        />

        <button className="btn-primary w-full">Send message →</button>
      </div>
    </section>
  );
}
