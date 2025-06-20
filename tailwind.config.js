/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5',
        accent: {
          yellow: '#fbbf24',
          orange: '#f97316',
          teal: '#10b981',
        },
        background: '#f9fafb',
        text: {
          heading: '#111827',
          body: '#4b5563',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
