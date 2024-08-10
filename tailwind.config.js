/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        dellaRespira: ["Della Respira", "serif"],
      },
      backgroundImage: {
        pageOne: "url('./src/assets/images/bg.jpg')",
      },
      keyframes: {
        dropdown: {
          "0%": { opacity: 0, transform: "translateX(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        dropdown: "dropdown 0.5s ease-out",
        fadeIn: "fadeIn 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
