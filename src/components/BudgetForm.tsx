// pages/budgets.tsx

import { useState } from "react";

// Function to generate random color
const generateRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Budgets = () => {
  const [budgets, setBudgets] = useState<any[]>([]); // To store budget entries
  const [budgetName, setBudgetName] = useState(""); // For Budget Name
  const [description, setDescription] = useState(""); // For Budget Description
  const [amount, setAmount] = useState(""); // For Amount
  const [page, setPage] = useState(""); // For Page

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation to ensure all fields are filled
    if (!budgetName || !description || !amount || !page) {
      return;
    }

    // Generate random color for the gradient
    const randomColor = generateRandomColor();

    // New budget object
    const newBudget = {
      budgetName,
      description,
      amount: parseFloat(amount),
      page,
      color: randomColor, // Set gradient color
    };

    // Update budgets state to include the new budget
    setBudgets([...budgets, newBudget]);

    // Reset form fields
    setBudgetName("");
    setDescription("");
    setAmount("");
    setPage("");
  };

  return (
    <div className="flex flex-col p-6">
      <h1 className="text-2xl font-semibold mb-4">Add New Budget</h1>

      {/* Budget Form */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Budget Name</label>
            <input
              type="text"
              value={budgetName}
              onChange={(e) => setBudgetName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Budget Name (e.g., Rent)"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Budget Description (e.g., Monthly Expenses)"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Budget Amount"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Page</label>
            <input
              type="text"
              value={page}
              onChange={(e) => setPage(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Page (e.g., Household)"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-dark-green text-white py-2 rounded-lg hover:bg-green-600 transition duration-200"
          >
            Add Budget
          </button>
        </form>
      </div>

      {/* Display Budget Records */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Budget Records</h2>
        <div className="space-y-4">
          {budgets.map((budget, index) => (
            <div
              key={index}
              className="p-4 rounded-lg"
              style={{
                background: `linear-gradient(to right, white, ${budget.color})`,
              }} // Set gradient color for each budget
            >
              <p className="text-lg font-semibold">{budget.budgetName}</p>
              <p className="text-sm text-gray-500">Description: {budget.description}</p>
              <p className="text-sm text-gray-500">Amount: ${budget.amount}</p>
              <p className="text-sm text-gray-500">Page: {budget.page}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Budgets;
