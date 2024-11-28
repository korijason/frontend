import React, { useEffect, useState } from "react";
import { getExpenses, addExpense } from "../services/expenseServices";

const ExpensesPage: React.FC = () => {
  const [expenses, setExpenses] = useState<any[]>([]);
  const [form, setForm] = useState({
    name: "",
    type: "basic",
    amount: 0,
    date: "",
  });

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    const data = await getExpenses();
    setExpenses(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addExpense(form);
    fetchExpenses(); // Refresh the list
    setForm({ name: "", type: "basic", amount: 0, date: "" });
  };

  const getColorByType = (type: string) => {
    switch (type) {
      case "basic":
        return "bg-green-200";
      case "savings":
        return "bg-yellow-200";
      case "utility":
        return "bg-purple-200";
      case "entertainment":
        return "bg-orange-200";
      case "other":
        return "bg-blue-200";
      default:
        return "bg-gray-200";
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold">Expenses</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Expense Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border rounded p-2"
        />
        <select
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
          className="border rounded p-2"
        >
          <option value="basic">Basic</option>
          <option value="savings">Savings</option>
          <option value="utility">Utility</option>
          <option value="entertainment">Entertainment</option>
          <option value="other">Other</option>
        </select>
        <input
          type="number"
          placeholder="Amount"
          value={form.amount}
          onChange={(e) =>
            setForm({ ...form, amount: parseFloat(e.target.value) })
          }
          className="border rounded p-2"
        />
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="border rounded p-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded px-4 py-2"
        >
          Add Expense
        </button>
      </form>

      <div className="mt-6">
        {expenses.map((expense) => (
          <div
            key={expense._id}
            className={`p-4 rounded ${getColorByType(expense.type)} mb-4`}
          >
            <h3 className="text-lg font-bold">{expense.name}</h3>
            <p>Type: {expense.type}</p>
            <p>Amount: {expense.amount}</p>
            <p>Date: {expense.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpensesPage;
