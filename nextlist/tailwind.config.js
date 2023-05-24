/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu : ["var(--font-ubuntu)"],
      },
      gridTemplateColumns:{
        'resLayout' : "repeat(auto-fit, minmax(14rem, 1fr))", 
        'resLayoutMovie' : "repeat(auto-fit, minmax(14rem, 1fr))", 
        'pagination' : "repeat(auto-fit, minmax(2rem, 1fr))", 
      }
    },
  },
  variants: {},
  plugins: [],
};