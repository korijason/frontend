import React, { useState, useEffect } from "react";
import { getBudgets, addBudget } from "../services/budgetServices";

const Budgets = () => {
  const [budgets, setBudgets] = useState<any[]>([]); // To store budget entries
  const [budgetName, setBudgetName] = useState(""); // For Budget Name
  const [description, setDescription] = useState(""); // For Budget Description
  const [amount, setAmount] = useState(""); // For Amount

  // Fetch existing budgets on component load
  useEffect(() => {
    fetchBudgets();
  }, []);

  const fetchBudgets = async () => {
    try {
      const data = await getBudgets(); // Fetch budgets from backend
      setBudgets(data);
    } catch (error) {
      console.error("Error fetching budgets:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!budgetName || !description || !amount || isNaN(parseFloat(amount))) {
      alert("Please fill all fields with valid data.");
      return;
    }

    const newBudget = {
      name: budgetName,
      description,
      amount: parseFloat(amount),
    };
   

    try {
      await addBudget(newBudget); // Send data to backend
      fetchBudgets(); // Refresh budget list
    } catch (error) {
      console.error("Error adding budget:", error);
    }

    // Reset form fields
    setBudgetName("");
    setDescription("");
    setAmount("");
  };

  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
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
          {budgets.map((budget) => (
            <div
              key={budget._id} // Use unique ID from backend
              className="p-4 rounded-lg"
              style={{
                background: `linear-gradient(to right, white, ${generateRandomColor()})`,
              }} // Set gradient color for each budget
            >
              <p className="text-lg text-black font-bold">{budget.budgetName}</p>
              <p className="text-sm text-black font-semibold ">Description: {budget.description}</p>
              <p className="text-sm text-black font-semibold ">Amount: ${budget.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Budgets;
