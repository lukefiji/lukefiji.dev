const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'off-white': colors.gray[50],
        'light-gray': colors.gray[200],
        'dark-gray': colors.gray[800],
      },
    },
  },
  plugins: [],
};
