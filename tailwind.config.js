/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#A36767',
        secondary: '#f8f3f0',
        accent: {
          light: '#F4E4C1',
          dark: '#C89B3C',
        },
        background: '#F5F5DC',
        text: {
          primary: '#4B3B42',
          body: '#4B3B42',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'perspective(1000px) rotateY(0deg)'},
          '100%': { transform: 'perspective(1000px) rotateY(360deg)'}
        }
      },
      animation: {
        rotate: 'rotate 30s linear infinite',
      }
    },
  },
  plugins: [],
}