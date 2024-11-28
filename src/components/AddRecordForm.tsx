// src/components/AddRecordForm.tsx
import React from "react";

const AddRecordForm: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-md shadow mb-6">
      <h3 className="text-lg font-bold mb-4">Add a New Record</h3>
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="date"
          placeholder="Date"
          className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
        />
        <select className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500">
          <option value="">Category</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <input
          type="text"
          placeholder="Amount"
          className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">
          Add Record
        </button>
      </form>
    </div>
  );
};

export default AddRecordForm;
