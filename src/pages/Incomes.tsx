// pages/incomes.tsx

import Navbar from "../components/Navbar";
import IncomeForm from "../components/IncomeForm";
import FooterNav from "../components/FooterNav";

const Incomes = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="flex flex-col p-4 justify-center items-center" >
        <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-black ">Your Incomes</h2>
        </div>
        {/* Display your income information here */}
        <IncomeForm />
        <FooterNav />
      </div>
    </>
  );
};

export default Incomes;
