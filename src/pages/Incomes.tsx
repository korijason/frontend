// pages/incomes.tsx

import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";
import { useState } from "react";
import IncomeForm from "../components/IncomeForm";


const Incomes = () => {
    return (
        <>
        <Navbar    />
      <div>
        <SideNav    />
        <h2 className="text-xl font-semibold">Incomes</h2>
        <IncomeForm />  
        {/* Display your income information here */}
        
      </div>
      </>
    );
  };
  
  export default Incomes;
  