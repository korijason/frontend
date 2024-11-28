// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MyFinances from "./pages/MyFinances";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/my-finances" element={<MyFinances />} />
      </Routes>
    </Router>
  );
};

export default App;
