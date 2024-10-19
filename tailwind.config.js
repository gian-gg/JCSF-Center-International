import fluid, { extract } from "fluid-tailwind";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    extract,
  },
  theme: {
    extend: {
      screens: {
        admissionLG: "1350px",
      },
      fontFamily: {
        eksellDisplay: ["Eksell Display", "sans-serif"],
        colonna: ["Colonna MT", "sans-serif"],
        introRust: ["Intro Rust", "sans-serif"],
        balgin: ["Balgin", "sans-serif"],
        georgiaPro: ["Georgia Pro", "serif"],
        dellaRespira: ["Della Respira", "serif"],
        robotoMono: ["Roboto Mono", "monospace"],
      },
      backgroundImage: {
        imageOne: "url('./src/assets/images/bg.jpg')",
      },
      colors: {
        plum: "#984C84",
        marianBlue: "#243E9B",
        xanthous: "#F5B305",
        oxfordBlue: "#0B2341",
        tyrianPurple: "#4F003B",
        lavenderBlush: "#FDF2F8",
      },
    },
  },
};
