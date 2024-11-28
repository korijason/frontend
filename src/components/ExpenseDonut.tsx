import  { useEffect, useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import axios from "axios";

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const ExpenseBarChart = () => {
  const [chartData, setChartData] = useState<any>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    // Fetch data from the backend
    const fetchExpenseData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/expense");
        const expenses = response.data;

        // Aggregate expense data by type
        const expenseTypes = ["utility", "others", "basic", "entertainment", "savings"];
        const aggregatedData = expenseTypes.map((type) =>
          expenses.reduce((sum: any, expense: { type: string; amount: any; }) => (expense.type === type ? sum + expense.amount : sum), 0)
        );

        setChartData({
          labels: expenseTypes.map((type) => type.charAt(0).toUpperCase() + type.slice(1)),
          datasets: [
            {
              label: "Expenses",
              data: aggregatedData,
              backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching expense data:", error);
      }
    };

    fetchExpenseData();
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto mt-6">
      <h2 className="text-center text-lg font-semibold mb-4">Expense Distribution</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default ExpenseBarChart;
