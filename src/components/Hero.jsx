import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="h-[80vh] bg-cover bg-center flex items-center justify-center text-center text-white"
      style={{ backgroundImage: "url('/cars/hero-car.jpg')" }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg">
        <h1 className="text-5xl md:text-6xl font-bold">Find Your Dream Car</h1>
        <p className="mt-4 text-lg">Luxury. Performance. Precision.</p>
        <Link
          to="/cars"
          className="mt-6 inline-block bg-accent text-primary px-6 py-3 rounded font-semibold hover:bg-yellow-500"
        >
          Explore Cars
        </Link>
      </div>
    </section>
  );
}
