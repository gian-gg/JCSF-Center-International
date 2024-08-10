/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        robotoCondensed: ["Roboto Condensed", "sans-serif"],
        dellaRespira: ["Della Respira", "serif"],
      },
    },
  },
  plugins: [],
};
