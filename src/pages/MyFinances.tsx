// pages/myfinances.tsx

import FooterNav from "../components/FooterNav";
import Navbar from "../components/Navbar";
import IncomeVSExpensesChart from "../components/IncomeVSExpensesChart";
import ExpensesBarChart from "../components/ExpensesBarChart";
import MonthlyExpensesBarChart from "../components/MonthlyExpenses";




const MyFinances = () => {
  return (
    <>
    <Navbar />
   
    <div className="flex flex-col p-4 justify-center items-center" >
        <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-black ">MyFinances</h2>
        <p>Take A Look At Your Financial Records!</p>
        </div>
      
        
        
        <div className="mt-6">
          {/* You can display either Budgets, Incomes, or Expenses here based on the route */}

          <IncomeVSExpensesChart />
          <ExpensesBarChart />
          <MonthlyExpensesBarChart />
          <FooterNav />
        </div>
    
    </>
  );
};

export default MyFinances;
