// components/FooterNav.tsx

import { Link } from "react-router-dom"; // if you are using Next.js, use Link component for navigation

const FooterNav = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gradient-to-br from-white to-green-800 py-2 shadow-lg">
      <div className="flex justify-around items-center">
        <Link to="/incomes">
          <button className="px-3 py-1 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-green-600 transition duration-300">
            Incomes
          </button>
        </Link>

        <Link to="/budgets">
          <button className="px-3 py-1 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-green-600 transition duration-300">
            Budgets
          </button>
        </Link>

        <Link to="/expenses">
          <button className="px-3 py-1 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-green-600 transition duration-300">
            Expenses
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FooterNav;
