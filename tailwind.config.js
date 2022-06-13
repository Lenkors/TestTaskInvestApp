/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/js/*.{vue,js,ts,jsx,tsx}",
    "./resources/js/components/**/*.vue",
    "./resources/js/pages/**/*.vue",
    './resources/**/*.php',
    "./app/**/*.php",
    "./public/js/*.js"
  ],

  theme: {
    extend: {},
  },
  plugins: [],
}
