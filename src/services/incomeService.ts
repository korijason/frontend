import axios from "axios";

const API_URL = "http://localhost:5000/api/income";

// Get all income records
export const getIncomes = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Add a new income record
export const addIncome = async (income: { name: string; amount: number; date: string }) => {
  const response = await axios.post(API_URL, income);
  return response.data;
};
// Delete an existing income record
export const deleteIncome = async (id: string) => {
  await axios.delete(`/api/income/${id}`);
};

// Update an existing income record
export const updateIncome = async (id: string, updatedData: any) => {
  await axios.put(`/api/income/${id}`, updatedData);
};
