// pages/incomes.tsx

import Navbar from "../components/Navbar";
import ExpensesForm from "../components/ExpensesForm";
import FooterNav from "../components/FooterNav";

const Incomes = () => {
    return (
        <>
        
        <Navbar    />
      <div>
        {/* Display your expenses information here */}
        <div className="flex flex-col p-4 justify-center items-center" >
        <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-black ">Your Expenses</h2>
        </div>
        <ExpensesForm />
        <FooterNav      />
        
      </div>
      </>
    );
  };
  
  export default Incomes;
  