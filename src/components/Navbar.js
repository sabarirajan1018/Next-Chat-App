"use client"; // Important for hooks in Next.js App Router

import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">ChatApp</h1>

      <button
        className="p-2 bg-gray-700 rounded-md hover:bg-gray-600 transition"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
      </button>
    </nav>
  );
}
