/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'big-stone': '10212a',
        casper: '#a8bfc9',
        mirage: '#1a2a33',
        saffron: {
          dark: '#cc8b13',
          DEFAULT: '#f2b137',
          light: '#ffc860',
        },
        turquoise: {
          dark: '#118c87',
          DEFAULT: '#31c3bd',
          light: '#65e9e4'
        },
        'te-papa-green': '#1f3641',
      },
    },
  },
  plugins: [],
}
