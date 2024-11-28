// pages Homespace.tsx

import SideNav from "../components/SideNav";

const Homespace = () => {
  return (
    <div className="flex">
      <SideNav />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold">Welcome to My Finances</h1>
        <div className="mt-6">
          {/* You can display either Budgets, Incomes, or Expenses here based on the route */}
        </div>
      </div>
    </div>
  );
};

export default Homespace;
