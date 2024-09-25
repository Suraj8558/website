/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
    darkMode: 'class', 

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      }
    },
    screens: {
      'sm': '576px',
      'md': '960px',
      'lg': '1140px',
      "xl": '1280px',
    },

    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    colors: {
    }
  },
  plugins: [require('@tailwindcss/typography'),],
}
