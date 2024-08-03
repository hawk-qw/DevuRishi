/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ganja: ["Gamja Flower", "sans-serif"],
      },
    },
  },
  plugins: [],
}