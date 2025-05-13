/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'felidae': ['felidaeregular', 'system-ui', 'sans-serif'],
        'kaliningrad': ['kaliningrad_historical_gRg', 'system-ui', 'sans-serif'],
        'laudatio': ['laudatiocregular', 'system-ui', 'sans-serif'],
        'proxima': ['proxima_nova_problack', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

