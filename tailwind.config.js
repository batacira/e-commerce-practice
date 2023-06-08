/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.tsx',
    './tailwind.config.js'
  ],
  prefix: 'tw-',
  content: [],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
  include: [
    "src/**/*.ts",
    "src/**/*.tsx",
    "././tailwind.config.js" // Dodajte ovde putanju do vaše tailwind.config.js datoteke
  ]
}

