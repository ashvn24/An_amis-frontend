/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'display' : ['Nunito', 'sans-serif'],
        'sans' : ['Work Sans', 'sans-serif']
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}