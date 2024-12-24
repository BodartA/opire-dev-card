const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 20s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      boxShadow: {
        'custom': '0 0 15px 5px rgba(0, 0, 0, 0.4)'
      },
      colors: {
        'pastGreen': '#6B8E6E',
        'opireLightGreen': '#14B28D',
        'opireDarkGreen': '#119DA7'
      },
      fontFamily: {
        'alumni' : ["Alumni Sans Pinstripe", "sans-serif"],
        'oswald' : ["Oswald", "sans-serif"],
      }
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',

          /* Firefox */
          'scrollbar-width': 'none',

          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      }
      )
    })
  ],
}
