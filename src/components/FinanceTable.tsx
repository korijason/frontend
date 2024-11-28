// src/components/FinanceTable.tsx
import React from "react";

const FinanceTable: React.FC = () => {
  return (
    <table className="min-w-full bg-white shadow-md rounded">
      <thead>
        <tr>
          {["Date", "Category", "Amount", "Type", "Actions"].map((heading, index) => (
            <th key={index} className="py-2 px-4 text-left bg-blue-200">
              {heading}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-2 px-4">2024-11-28</td>
          <td className="py-2 px-4">Food</td>
          <td className="py-2 px-4">$50</td>
          <td className="py-2 px-4">Expense</td>
          <td className="py-2 px-4">
            <button className="mr-2 bg-yellow-400 px-2 py-1 rounded">Edit</button>
            <button className="bg-red-500 px-2 py-1 rounded">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default FinanceTable;
