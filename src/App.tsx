// src/App.tsx
import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MyFinances from "./pages/MyFinances";
import Expenses from "./pages/Expenses";
import Incomes from "./pages/Incomes";
import Budgets from "./pages/Budgets";


const domain = "dev-i8sijtgjr86lo1en.us.auth0.com"; // from Auth0 dashboard
const clientId = "IzHWElQaQFJShQdXtqRp05voViTd7Kk5"; // from Auth0 dashboard

const App: React.FC = () => {
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/my-finances" element={<MyFinances />} />
          
          <Route path="/expenses" element={<Expenses />} />

          <Route path="/incomes" element={<Incomes />} />
          <Route path="/budgets" element={<Budgets />} />
        </Routes>
      </Router>
    </Auth0Provider>
  );
};

export default App;
