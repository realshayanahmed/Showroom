import { cars } from "../data/cars";
import CarCard from "../components/CarCard";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredCars = cars.filter(car =>
    car.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-slate-100 dark:bg-slate-900 min-h-screen text-slate-900 dark:text-slate-100">

      {/* Hero */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">Find Your Dream Car</h1>
        <p className="text-gray-600 dark:text-gray-400">Browse our premium collection</p>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search cars..."
        className="p-2 border rounded w-full mb-4 bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-600 text-slate-900 dark:text-slate-100 placeholder-gray-500 dark:placeholder-gray-400"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Cars Grid */}
      <div className="grid md:grid-cols-3 gap-4">
        {filteredCars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}