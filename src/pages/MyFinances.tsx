// pages/myfinances.tsx

import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";

const MyFinances = () => {
  return (
    <>
    <Navbar />
    <div className="flex">
      <SideNav />
      <div className="flex-1 p-6 items-center justify-center w-full">
        <h1 className="text-2xl font-semibold w-full">Welcome to My Finances</h1>
        <p>Take a look at your finance records!</p>
        <div className="mt-6">
          {/* You can display either Budgets, Incomes, or Expenses here based on the route */}
        </div>
      </div>
    </div>
    </>
  );
};

export default MyFinances;
