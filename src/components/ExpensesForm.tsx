// pages/expenses.tsx

import { useState } from "react";

const Expenses = () => {
  const [expenses, setExpenses] = useState<any[]>([]); // To store expenses entries
  const [expenseName, setExpenseName] = useState(""); // For Expense Name
  const [type, setType] = useState(""); // For Expense Type
  const [amount, setAmount] = useState(""); // For Amount
  const [date, setDate] = useState(""); // For Date

  // Function to get the color based on expense type
  const getColorForType = (type: string) => {
    switch (type) {
      case "basic":
        return "#4CAF50"; // Green
      case "savings":
        return "#FFEB3B"; // Yellow
      case "utility":
        return "#9C27B0"; // Purple
      case "entertainment":
        return "#FF5722"; // Orange
      case "other":
        return "#2196F3"; // Blue
      default:
        return "#FFFFFF"; // Default color
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!type || !expenseName || !amount || !date) {
      return; // Basic validation to ensure all fields are filled
    }

    const newExpense = {
      expenseName,
      type,
      amount: parseFloat(amount),
      date,
      color: getColorForType(type), // Set color based on expense type
    };

    // Update expenses state to display the new expense
    setExpenses([...expenses, newExpense]);

    // Reset form fields
    setExpenseName("");
    setType("");
    setAmount("");
    setDate("");
  };

  return (
    <div className="flex flex-col p-6">
      <h1 className="text-2xl font-semibold mb-4">Add New Expense</h1>

      {/* Expense Form */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Expense Name</label>
            <input
              type="text"
              value={expenseName}
              onChange={(e) => setExpenseName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Expense name (e.g., Rent)"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Type</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            >
              <option value="">Select Type</option>
              <option value="basic">Basic</option>
              <option value="savings">Savings</option>
              <option value="utility">Utility</option>
              <option value="entertainment">Entertainment</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Expense amount"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-dark-green text-white py-2 rounded-lg hover:bg-green-600 transition duration-200"
          >
            Add Expense
          </button>
        </form>
      </div>

      {/* Display Expense Records */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Expense Records</h2>
        <div className="space-y-4">
          {expenses.map((expense, index) => (
            <div
              key={index}
              className="p-4 rounded-lg"
              style={{ backgroundColor: expense.color }} // Dynamic color based on type
            >
              <p className="text-lg font-semibold">{expense.expenseName}</p>
              <p className="text-sm text-gray-500">Amount: ${expense.amount}</p>
              <p className="text-sm text-gray-500">Date: {expense.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expenses;