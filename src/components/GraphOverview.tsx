// src/components/GraphOverview.tsx
import React from "react";

const GraphOverview: React.FC = () => {
  return (
    <div className="mt-8 bg-white p-6 rounded-md shadow">
      <h3 className="text-lg font-bold mb-4">Income vs Expenses</h3>
      <div className="flex justify-center">
        <img
          src="https://via.placeholder.com/600x300"
          alt="Bar Chart"
          className="rounded-md shadow-lg"
        />
      </div>
    </div>
  );
};

export default GraphOverview;
