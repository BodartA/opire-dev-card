/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pastGreen': '#6B8E6E',
      },
      fontFamily: {
        'alumni' : ["Alumni Sans Pinstripe", "sans-serif"],
        'oswald' : ["Oswald", "sans-serif"],
      }
    },
  },
  plugins: [],
}

