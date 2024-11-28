// components/SideNav.tsx

import { Link } from "react-router-dom"

const SideNav = () => {
  return (
    <div className="flex">
      <div className="bg-dark-green h-screen w-64 p-5 text-white border border-black rounded-sm bg-gradient-to-br from-green-500 to-white">
        <h2 className="text-xl font-semibold mb-6">MyFedha</h2>
        
        <ul>
          <li className="mb-32">
            <Link to="/budgets">
              <a className="hover:bg-green-900 rounded-lg p-2 block">Budgets</a>
            </Link>
          </li>
          <li className="mb-32">
            <Link to="/incomes">
              <a className="hover:bg-green-900 rounded-lg p-2 block">Incomes</a>
            </Link>
          </li>
          <li className="mb-32">
            <Link to="/expenses">
              <a className="hover:bg-green-900 rounded-lg p-2 block">Expenses</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
