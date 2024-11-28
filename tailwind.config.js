// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          dark: "#004d40", // Dark Green
          light: "#80cbc4", // Light Green Accent
          contrast: "#e0f2f1", // Very Light Green
        },
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
