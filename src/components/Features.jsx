const list = [
  { icon: "🚘", title: "Trusted Dealers", text: "Verified and experienced dealers." },
  { icon: "💸", title: "Affordable Prices", text: "We offer the best deals." },
  { icon: "🚀", title: "Fast Delivery", text: "Drive your car home quickly." },
  { icon: "⚡", title: "Wide Range", text: "Sedans, SUVs, Sports, Electric." },
];

export default function Features() {
  return (
    <section className="py-16 bg-background">
      <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {list.map((f) => (
          <div key={f.title} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="text-5xl mb-3">{f.icon}</div>
            <h3 className="text-xl font-semibold">{f.title}</h3>
            <p className="text-gray-600 mt-2">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
