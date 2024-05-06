import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "0.5rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        orange: {
          DEFAULT: "#FFB443",
          1: "#FC8415",
          2: "#BAB300",
        },
        black: {
          DEFAULT: "#000000",
          1: "#282828",
          2: "#3E3831",
          3: "#1E1E1E",
          4: "#7D7D7D",
          5: "#403B3B",
          6: "#0E0E0F",
          8: "#7A7A7A",
          9: "#2B2B2B",
          10: "#111111",
          11: "#33332D",
          12: "#47473F",
          13: "#9A9888",
        },
        white: {
          DEFAULT: "#ffffff",
          1: "#CFCFCF",
          2: "#F6F6F6",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
