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
  const response = await axios.post(API_URL, expense);
  return response.data;
};
