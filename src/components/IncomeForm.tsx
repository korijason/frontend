import React, { useEffect, useState } from "react";
import { getIncomes, addIncome } from "../services/incomeService";

const IncomePage: React.FC = () => {
  const [incomes, setIncomes] = useState<any[]>([]);
  const [form, setForm] = useState({ name: "", amount: 0, date: "" });

  useEffect(() => {
    fetchIncomes();
  }, []);

  const fetchIncomes = async () => {
    const data = await getIncomes();
    setIncomes(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addIncome(form);
    fetchIncomes(); // Refresh the list
    setForm({ name: "", amount: 0, date: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Income Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Amount"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: parseFloat(e.target.value) })}
        />
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />
        <button type="submit">Add Income</button>
      </form>

      <div>
        {incomes.map((income) => (
          <div key={income._id}>
            <h3>{income.name}</h3>
            <p>{income.amount}</p>
            <p>{income.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IncomePage;
