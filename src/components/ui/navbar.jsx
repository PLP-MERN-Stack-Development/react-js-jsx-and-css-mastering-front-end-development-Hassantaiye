import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Hassan Task App</h1>

      <ul className="flex gap-6">
        <li>
          <Link to="/" className="hover:text-yellow-300 transition-colors">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-yellow-300 transition-colors">About</Link>
        </li>
        <li>
          <Link to="/tasks" className="hover:text-yellow-300 transition-colors">Tasks</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-yellow-300 transition-colors">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
