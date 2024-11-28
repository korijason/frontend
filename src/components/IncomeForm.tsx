import React, { useState, useEffect } from "react";
import { getIncomes, addIncome } from "../services/incomeService";

const Incomes = () => {
  const [incomes, setIncomes] = useState<any[]>([]); // To store income entries
  const [source, setSource] = useState(""); // For the Income Name
  const [amount, setAmount] = useState(""); // For the Amount
  const [date, setDate] = useState(""); // For the Date

  // Fetch existing incomes on component load
  useEffect(() => {
    fetchIncomes();
  }, []);

  const fetchIncomes = async () => {
    try {
      const data = await getIncomes(); // Fetch incomes from backend
      setIncomes(data);
    } catch (error) {
      console.error("Error fetching incomes:", error);
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!source || !amount || !date) {
      return; // Basic validation to ensure all fields are filled
    }

    const newIncome = {
      name: source,
      amount: parseFloat(amount),
      date,
    };

    try {
      await addIncome(newIncome); // Send data to backend
      fetchIncomes(); // Refresh income list
    } catch (error) {
      console.error("Error adding income:", error);
    }

    // Reset form fields
    setSource("");
    setAmount("");
    setDate("");
  };
  // Function to generate random color
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
      <h1 className="text-2xl font-semibold mb-4">Add New Income</h1>

      {/* Form */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Income Name</label>
            <input
              type="text"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Income source (e.g., Freelance)"
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
              placeholder="Income amount"
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
            Add Income
          </button>
        </form>
      </div>

      {/* Display Income Entries */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Income Records</h2>
        <div className="space-y-4">
          {incomes.map((income) => (
            <div
              key={income._id} // Use unique ID from backend
              className="p-4 rounded-lg"
              style={{ backgroundColor: generateRandomColor() }} // Dynamic color
            >
              <p className="text-lg text-black font-bold">{income.name}</p>
              <p className="text-sm text-black font-semibold">Amount: ${income.amount}</p>
              <p className="text-sm text-black font-semibold">Date: {income.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Incomes;
