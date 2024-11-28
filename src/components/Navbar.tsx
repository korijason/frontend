// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-green-600 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">MyFedha</h1>
      <div className="flex space-x-4">
        <Link
          to="/my-finances"
          className="flex items-center px-6 py-3 text-sm font-semibold text-white border-2 border-black rounded-full bg-green-500 hover:bg-green-600 hover:scale-105 hover:shadow-lg transition-all duration-300"
        >
          My Finances
        </Link>

        <Link
          to="/"
          className="flex items-center px-6 py-3 text-sm font-semibold text-black border-2 border-black rounded-full bg-slate-300 hover:bg-slate-400 hover:scale-105 hover:shadow-lg transition-all duration-300"
        >
          Logout
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
