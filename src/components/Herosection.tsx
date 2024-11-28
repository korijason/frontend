// src/components/HeroSection.tsx
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-blue-100 text-center py-12">
       <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Manage your Money with AI-Driven Personal <br />
                <span className="text-4xl md:text-[6rem] text-green-700 font-bold mt-1 leading-none">
                  Finance Advisor
                </span>
              </h1>
            </>
      <img
        src="https://via.placeholder.com/600x300"
        alt="Finance Tracking Illustration"
        className="mx-auto rounded-md shadow-lg"
      />
    </div>
  );
};

export default HeroSection;
