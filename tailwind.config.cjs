/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        description: "auto minmax(0, 1fr)",
      },
      colors: {
        "gray-1": "#3e3e40",
        "gray-2": "#1e1e1e",
      },
    },
    fontFamily: {
      h: ["Comfortaa", "cursive"],
      text: ["Shantell Sans", "cursive"],
    },
  },
  plugins: [],
};
