// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MyFinances from "./pages/MyFinances";
import Expenses from "./pages/Expenses";
import Incomes from "./pages/Incomes";
import Budgets from "./pages/Budgets";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/my-finances" element={<MyFinances />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/incomes" element={<Incomes/>} />
        <Route path="/budgets" element={<Budgets />} />
      </Routes>
    </Router>
  );
};

export default App;
