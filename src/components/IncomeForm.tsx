import React, { useState, useEffect } from "react";
import axios from 'axios';

// Use the live backend API URL
const BASE_URL = "https://myfedha-backend.onrender.com/api";

const Incomes = () => {
  const [incomes, setIncomes] = useState<any[]>([]); // To store income entries
  const [source, setSource] = useState(""); // For the Income Name
  const [amount, setAmount] = useState(""); // For the Amount
  const [date, setDate] = useState(""); // For the Date
  const [error, setError] = useState(""); // For handling errors

  // Fetch existing incomes on component load
  useEffect(() => {
    fetchIncomes();
  }, []);

  const fetchIncomes = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/income`);
      setIncomes(response.data); // Update incomes from backend response
      setError(""); // Clear any previous errors
    } catch (error) {
      console.error("Error fetching incomes:", error);
      setError("There was an error fetching income data.");
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!source || !amount || !date) {
      setError("All fields are required!"); // Show error if fields are empty
      return;
    }

    const newIncome = {
      name: source,
      amount: parseFloat(amount),
      date,
    };

    try {
      await axios.post(`${BASE_URL}/income`, newIncome); // Post new income to backend
      fetchIncomes(); // Refresh income list after submission
      setSource(""); // Reset form fields
      setAmount("");
      setDate("");
      setError(""); // Clear error after successful submission
    } catch (error) {
      console.error("Error adding income:", error);
      setError("There was an error adding the income.");
    }
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

      {/* Error Message */}
      {error && (
        <div className="mb-4 text-red-600 font-semibold">
          <p>{error}</p>
        </div>
      )}

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
