import { Link } from "react-router-dom";

export default function CarCard({ car }) {
  return (
    <div className="bg-white dark:bg-slate-800 shadow rounded p-4 hover:shadow-lg transition-shadow">
      <img src={car.image} alt={car.name} className="rounded w-full h-48 object-cover" />
      <h2 className="text-lg font-bold mt-2 text-slate-900 dark:text-slate-100">{car.name}</h2>
      <p className="text-amber-500 font-semibold">{car.price}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400">{car.fuel} | {car.mileage}</p>
      <Link to={`/car/${car.id}`}>
        <button className="mt-2 bg-amber-500 hover:bg-amber-600 text-white px-3 py-1 rounded transition-colors">
          View Details
        </button>
      </Link>
    </div>
  );
}