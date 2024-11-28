// src/pages/MyFinances.tsx
import React from "react";
import Navbar from "../components/Navbar";
import AddRecordForm from "../components/AddRecordForm";
import FinanceTable from "../components/FinanceTable";

const MyFinances: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-6">
        <AddRecordForm />
        <FinanceTable />
      </div>
    </div>
  );
};

export default MyFinances;
