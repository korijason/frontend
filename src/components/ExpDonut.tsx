import  { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import axios from "axios";

const ExpenseDonut = () => {
  const [expenseData, setExpenseData] = useState<any[]>([]);

  useEffect(() => {
    const fetchExpenseData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/expense");
        const expenses = response.data;

        // Aggregate expense data by type
        const expenseTypes = ["utility", "others", "basic", "entertainment", "savings"];
        const aggregatedData = expenseTypes.map((type) => ({
          name: type.charAt(0).toUpperCase() + type.slice(1), // Capitalize type
          value: expenses.reduce((sum: any, expense: { type: string; amount: any; }) => (expense.type === type ? sum + expense.amount : sum), 0),
        }));

        setExpenseData(aggregatedData);
      } catch (error) {
        console.error("Error fetching expense data:", error);
      }
    };

    fetchExpenseData();
  }, []);

  // Define colors for the chart
  const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"];

  return (
    <div className="w-full max-w-lg mx-auto mt-6">
      <h2 className="text-center text-lg font-semibold mb-4">Expense Distribution</h2>
      <PieChart width={400} height={400}>
        <Pie
          data={expenseData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={5}
        >
          {expenseData.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default ExpenseDonut;
