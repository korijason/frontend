// src/pages/Dashboard.tsx
import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Herosection";
import QuickStats from "../components/QuickStats";
import GraphOverview from "../components/GraphOverview";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <HeroSection />
      <div className="p-6">
        <QuickStats />
        <GraphOverview />
      </div>
    </div>
  );
};

export default Dashboard;
