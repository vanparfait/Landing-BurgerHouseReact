/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFC045",
        secondary: "#3d2514",
        redPrimary: "#BF2222",
      },
    },
  },
  plugins: [],
};
