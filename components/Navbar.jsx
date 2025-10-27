import { Link } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="p-4 shadow flex justify-between items-center bg-gray-200 dark:bg-gray-800 dark:text-white">
      <div className="text-lg font-bold">My React App</div>

      <div className="flex space-x-6">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </div>

      <button
        onClick={toggleTheme}
        className="px-3 py-1 border rounded hover:bg-gray-300 dark:hover:bg-gray-700"
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀ Light Mode"}
      </button>
    </nav>
  );
}

export default Navbar;