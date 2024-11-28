import  { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MonthlyExpensesBarChart = () => {
  const [, setExpenses] = useState([]);
  const [chartData, setChartData] = useState<{
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
    }[];
  }>({
    labels: [],
    datasets: []
  });

  useEffect(() => {
    // Fetch expenses from backend
    axios
      .get("http://localhost:5000/api/expense")
      .then((response) => {
        setExpenses(response.data);
        // Aggregate expenses by month
        const monthlyExpenses = response.data.reduce((acc: any[], expense: { date: string | number | Date; amount: any; }) => {
          const month = new Date(expense.date).getMonth(); // 0-11 for month
          acc[month] = (acc[month] || 0) + expense.amount;
          return acc;
        }, {});

        const data = {
          labels: [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
          ],
          datasets: [
            {
              label: 'Monthly Expenses',
              data: Array.from({ length: 12 }, (_, index) => monthlyExpenses[index] || 0),
              backgroundColor: 'rgba(255, 99, 132, 0.6)',
            },
          ],
        };
        setChartData(data);
      })
      .catch((error) => {
        console.error("Error fetching expenses:", error);
      });
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Monthly Expenses</h2>
      <Bar data={chartData} />
    </div>
  );
};
export default MonthlyExpensesBarChart;
