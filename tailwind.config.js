import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFC045",
        primaryHover: "#F5B029",
        secondary: "#3d2514",
        secondaryHover: "#231105",
        redPrimary: "#BF2222",
        redPrimaryHover: "#990E8E",
      },
      fontFamily: {
        secondary: ["Alfa Slab One"],
      },
    },
  },
  plugins: [forms],
};
