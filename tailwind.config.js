/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        robotoCondensed: ["Roboto Condensed", "sans-serif"],
        dellaRespira: ["Della Respira", "serif"],
        eksellDisplay: ["Eksell Display", "sans-serif"],
        colonna: ["Colonna MT", "sans-serif"],
        robotoMono: ["Roboto Mono", "monospace"],
      },
      backgroundImage: {
        imageOne: "url('./src/assets/images/bg.jpg')",
      },
      colors: {
        plum: "#984C84",
        marianBlue: "#243E9B",
        xanthous: "#F5B305",
        oxfordBlue: "##0B2341",
        tyrianPurple: "#4F003B",
      },
    },
  },
  plugins: [],
};
