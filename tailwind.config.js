/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'gunmetal-dark': '#0f1314',
        'gunmetal': '#1B2224',
        'gunmetal-light': '#222B2E',
        'shark': '#3A4A4F',
      },
    },
  },
  plugins: [
  ],
}

