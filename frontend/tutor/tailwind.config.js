/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    fontFamily: {
      display: ["Sora"],
    },
    extend: {
      colors: {
        "blue-200": "#0052ff",
      },
    },
  },
  plugins: [],
};
