export default function CategoryCarousel() {
  return (
    <section className="py-48 space-y-48">
      <div className="grid md:grid-cols-2 gap-24 items-center px-16">
        <img
          src="https://i.pinimg.com/736x/22/76/36/2276366f2540037bddb332bd954e56f9.jpg"
          className="w-full h-[650px] object-cover"
        />

        <div>
          <h2 className="text-5xl mb-6 leading-tight">Wedding Florals</h2>
          <p className="text-gray-600 max-w-md">
            Thoughtfully designed arrangements that bring elegance to every
            moment.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-24 items-center px-16">
        <div>
          <h2 className="text-5xl mb-6 leading-tight">Seasonal Bouquets</h2>
          <p className="text-gray-600 max-w-md">
            Inspired by nature, crafted with precision.
          </p>
        </div>

        <img
          src="https://assets.winni.in/c_limit,dpr_1,fl_progressive,q_80,w_1000/54790_painted-skies-tulip-bouquet.jpeg"
          className="w-full h-[650px] object-cover"
        />
      </div>
    </section>
  );
}
