// pages/incomes.tsx

import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";

const Incomes = () => {
    return (
        <>
        <Navbar    />
      <div>
        <SideNav    />
        <h2 className="text-xl font-semibold">Incomes</h2>
        {/* Display your income information here */}
      </div>
      </>
    );
  };
  
  export default Incomes;
  