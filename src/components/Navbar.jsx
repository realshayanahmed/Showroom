import { Link } from "react-router-dom";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <nav className="bg-slate-900 dark:bg-slate-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">CarShowroom</h1>
      <div className="flex items-center space-x-4">
        <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-lg hover:bg-slate-700 dark:hover:bg-slate-600 transition-colors"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <SunIcon className="h-5 w-5" />
          ) : (
            <MoonIcon className="h-5 w-5" />
          )}
        </button>
      </div>
    </nav>
  );
}