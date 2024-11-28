import  { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { getExpenses } from '../services/expenseServices'; // Adjust paths as needed
import { getIncomes } from '../services/incomeService'; // Adjust paths as needed

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const IncomeVsExpenses = () => {
  const [expenses, setExpenses] = useState<any[]>([]);
  const [income, setIncome] = useState<any[]>([]);

  // Fetch expenses and income data
  useEffect(() => {
    fetchExpenses();
    fetchIncome();
  }, []);

  const fetchExpenses = async () => {
    try {
      const expenseData = await getExpenses(); // Fetch expenses data from backend
      setExpenses(expenseData);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  const fetchIncome = async () => {
    try {
      const incomeData = await getIncomes(); // Fetch income data from backend
      setIncome(incomeData);
    } catch (error) {
      console.error('Error fetching income:', error);
    }
  };

  // Prepare data for the chart
  const chartData = {
    labels: expenses.map((expense) => expense.date), // Assume date is available in both expenses and income
    datasets: [
      {
        label: 'Income',
        data: income.map((inc) => inc.amount), // Map to the income amounts
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Expenses',
        data: expenses.map((expense) => expense.amount), // Map to the expense amounts
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Income vs Expenses</h1>

      {/* Income vs Expenses Bar Chart */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Monthly Comparison</h2>
        <Bar data={chartData} />
      </div>
    </div>
  );
};

export default IncomeVsExpenses;
