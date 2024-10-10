/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "light-gray":"#d3d3d3",
        "dark-gray":"#808080",
        "brown":"#BA570B",
        "blue":"#080E4B",
        "light-brown":"#F2DECF",
        "dark-brown":"#AE4948",
        "pista":"#A9D4D1",
        "back-brown":"#F6F2EC",
      }
    },
  },
  plugins: [],
}