/* eslint-env node */
const defaultTheme = require('tailwindcss/defaultTheme')
// const flowbite = require('flowbite')


/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  
  theme: {
    extend: {
      colors: {
        "ed-green": "#00A859",
        "ed-blue": "#003399",
        "dark": '#02021A',
        "ed-dark": '#4F4F4F',
        "ed2-green":' #E4F3EA',
        "ed1-dark": ' #1B1B1B'

      },
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
        'serif': ['Lato', ...defaultTheme.fontFamily.serif],
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('flowbite/plugin'),
    // flowbite
  ],
}
