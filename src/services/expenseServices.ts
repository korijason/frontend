import axios from "axios";

const API_URL = "http://localhost:5000/api/expense";

// Get all expense records
export const getExpenses = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Add a new expense record
export const addExpense = async (expense: {
  name: string;
  type: string;
  amount: number;
  date: string;
}) => {
  try {
    const response = await axios.post(API_URL, expense);
    return response.data;
  } catch (error) {
    console.error('Error posting expense:', error);
    throw error; // Optional: handle error as needed
  }
};

// Delete an existing budget record
export const deleteExpense = async (id: string) => {
  await axios.delete(`/api/expense/${id}`);
};

// Update an existing budget record
export const updateExpense = async (id: string, updatedData: any) => {
  await axios.put(`/api/expense/${id}`, updatedData);
};

