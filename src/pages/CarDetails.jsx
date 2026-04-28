import { useParams } from "react-router-dom";
import { cars } from "../data/cars";

export default function CarDetails() {
  const { id } = useParams();
  const car = cars.find(c => c.id == id);

  if (!car) return <p className="p-6 text-slate-900 dark:text-slate-100">Car not found</p>;

  return (
    <div className="p-6 bg-slate-100 dark:bg-slate-900 min-h-screen text-slate-900 dark:text-slate-100">
      <img src={car.image} className="w-full max-w-lg rounded" />
      <h1 className="text-2xl font-bold mt-4">{car.name}</h1>
      <p className="text-amber-500 text-xl">{car.price}</p>

      <div className="mt-2 text-gray-700 dark:text-gray-300">
        <p><strong>Fuel:</strong> {car.fuel}</p>
        <p><strong>Mileage:</strong> {car.mileage}</p>
        <p><strong>Transmission:</strong> {car.transmission}</p>
      </div>
    </div>
  );
}