// src/components/ExpenseDistributionChart.tsx
import  { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseDistributionChart = ({ expenses }: { expenses: Array<{ type: string; amount: number }> }) => {
  const [chartData, setChartData] = useState<{
    labels: string[];
    datasets: Array<{
      data: number[];
      backgroundColor: string[];
    }>;
  }>({
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: [],
    }],
  });

  useEffect(() => {
    // Categorize expenses by type
    const expenseTypes = expenses.reduce((acc, expense) => {
      acc[expense.type] = (acc[expense.type] || 0) + expense.amount;
      return acc;
    }, {} as Record<string, number>);

    // Prepare data for the chart
    const data = {
      labels: Object.keys(expenseTypes),
      datasets: [
        {
          data: Object.values(expenseTypes),
          backgroundColor: [
            '#FF5722', // Entertainment
            '#FFEB3B', // Savings
            '#4CAF50', // Basic
            '#9C27B0', // Utility
            '#2196F3', // Other
          ],
        },
      ],
    };
    setChartData(data);
  }, [expenses]);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Expense Distribution</h2>
      <Pie data={chartData} />
    </div>
  );
};
export default ExpenseDistributionChart;
