/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-orange': 'rgb(249 115 22)', // orange-600
        'brand-red': 'rgb(239 68 68)', // red-500
      },
    },
  },
  plugins: [],
}

