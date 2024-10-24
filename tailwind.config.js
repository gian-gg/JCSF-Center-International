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
      keyframes: {
        "slide-in-left": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        "slide-in-right": {
          "0%": {
            transform: "translateX(10%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        "slide-in-right-delay": {
          "0%": {
            transform: "translateX(70%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        "slide-in-down": {
          "0%": {
            transform: "translateY(20%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "slide-in-up": {
          "0%": {
            transform: "translateY(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-half": {
          "0%": { opacity: "0" },
          "100%": { opacity: "0.5" },
        },
        enlarge: {
          "0%": { fontSize: "100%" },
          "100%": { fontSize: "105%" },
        },
        rotation: {
          "0%": {
            transform: "translateX(var(--x)) translateY(var(--y)) rotate(0deg)",
            opacity: "0",
          },
          "100%": {
            transform:
              "translateX(var(--x)) translateY(var(--y)) rotate(var(--rotation))",
            opacity: "1",
          },
        },
      },
      animation: {
        slideInLeft: "slide-in-left 1s ease-in-out",
        slideInRight: "slide-in-right 1s ease-in-out 400ms",
        slideInRightDelay1: "slide-in-right-delay 1s ease-in-out 100ms",
        slideInRightDelay2: "slide-in-right-delay 1s ease-in-out 100ms",
        slideInDown: "slide-in-down 800ms ease-in-out alternate",
        slideInUp: "slide-in-up 1s ease-in-out",
        fadeIn: "fade-in 1s ease-in-out",
        fadeInHalf: "fade-in-half 3s ease-in-out",
        enlarge: "enlarge 500ms ease-in-out",
        rotation: "rotation 1s ease-in-out",
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
