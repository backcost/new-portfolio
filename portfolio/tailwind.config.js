/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans]
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#0b5e86", 
        primaryDark: "#58E6D9",
        blue: "#0A66C2",
        white: "#FFFFFF",
      },
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
        'bounce-slower': 'bounce 5s linear infinite',
      },
    },
  },
  plugins: [],
}
