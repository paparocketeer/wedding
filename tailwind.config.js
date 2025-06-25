/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'tuffy': ['tuffyregular', 'system-ui', 'sans-serif'],
        'tuffybold': ['tuffybold', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

