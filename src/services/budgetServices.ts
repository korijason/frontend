import axios from "axios";

const API_URL = "http://localhost:5000/api/budget";

// Get all budget records
export const getBudgets = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Add a new budget record
export const addBudget = async (budget: {
  name: string;
  description: string;
  amount: number;
}) => {
  const response = await axios.post(API_URL, budget);
  return response.data;
};
