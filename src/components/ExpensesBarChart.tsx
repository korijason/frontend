import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { getExpenses } from "../services/expenseServices"; // Make sure these are correct paths
import { getBudgets } from "../services/budgetServices";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MyFinances = () => {
  const [expenses, setExpenses] = useState<any[]>([]);
  const [budgets, setBudgets] = useState<any[]>([]);

  // Fetch expenses and budgets
  useEffect(() => {
    fetchExpenses();
    fetchBudgets();
  }, []);

  const fetchExpenses = async () => {
    try {
      const expenseData = await getExpenses(); // fetch expense data
      setExpenses(expenseData);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  const fetchBudgets = async () => {
    try {
      const budgetData = await getBudgets(); // fetch budget data
      setBudgets(budgetData);
    } catch (error) {
      console.error("Error fetching budgets:", error);
    }
  };

  // Prepare data for the chart
  const expenseData = {
    labels: expenses.map((expense) => expense.name), // Expense names
    datasets: [
      {
        label: "Amount",
        data: expenses.map((expense) => expense.amount), // Expense amounts
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const budgetData = {
    labels: budgets.map((budget) => budget.name), // Budget names
    datasets: [
      {
        label: "Budget Amount",
        data: budgets.map((budget) => budget.amount), // Budget amounts
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-6">
      {/* Expenses Bar Chart */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Expenses Overview</h2>
        <Bar data={expenseData} />
      </div>

      {/* Budgets Bar Chart */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Budgets Overview</h2>
        <Bar data={budgetData} />
      </div>
    </div>
  );
};

export default MyFinances;
