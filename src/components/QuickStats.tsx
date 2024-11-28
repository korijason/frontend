// src/components/QuickStats.tsx
import React from "react";

const QuickStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
      {[
        { label: "Total Income", value: "$10,000", bg: "bg-green-100", text: "text-green-600" },
        { label: "Total Expenses", value: "$5,000", bg: "bg-red-100", text: "text-red-600" },
        { label: "Remaining Budget", value: "$5,000", bg: "bg-yellow-100", text: "text-yellow-600" },
        { label: "Savings Percentage", value: "50%", bg: "bg-blue-100", text: "text-blue-600" },
      ].map((stat, index) => (
        <div key={index} className={`p-4 rounded-md shadow ${stat.bg}`}>
          <p className="text-sm font-medium">{stat.label}</p>
          <p className={`text-2xl font-bold ${stat.text}`}>{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default QuickStats;
