// src/pages/Dashboard.tsx
import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Herosection";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <HeroSection />
      <div className="p-6">
      </div>
    </div>
  );
};

export default Dashboard;
