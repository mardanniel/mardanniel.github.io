/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-default)', ...fontFamily.sans],
      },
      colors: {
        'palette-color-a': 'rgb(6, 17, 60)',
        'palette-color-b': 'rgb(255, 140, 50)',
        'palette-color-c': 'rgb(221, 221, 221)',
        'palette-color-d': 'rgb(238, 238, 238)',
        'palette-color-e': 'rgb(141, 141, 141)',
      },
    },
  },
  plugins: [],
};
