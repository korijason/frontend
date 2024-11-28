// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react"

const Navbar: React.FC = () => {

  const { logout } = useAuth0();
  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin, // Where you want the user to be redirected after logout
      }
    });
  }
  return (
    <nav className="bg-white text-green-700 py-4 px-6 flex justify-between items-center">
      <div className="flex flex-row items-center">
        <img src="money-back.png" alt="MyFedha Logo" className="w-12 h-12" />
        <h1 className="text-lg font-bold">MyFedha</h1>
      </div>
      <div className="flex space-x-4">
        <Link
          to="/my-finances"
          className="flex items-center px-6 py-3 text-sm font-semibold text-white border-2 border-black rounded-full bg-green-500 hover:bg-green-600 hover:scale-105 hover:shadow-lg transition-all duration-300"
        >
          My Finances
        </Link>

        <button
          onClick={handleLogout}
          className="flex items-center px-6 py-3 text-sm font-semibold text-black border-2 border-black rounded-full bg-slate-300 hover:bg-slate-400 hover:scale-105 hover:shadow-lg transition-all duration-300"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
