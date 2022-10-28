/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens:{
      'sm': '480px',
      'md': '768px',
      'lg': '976px',
      'xl': '1440px',
    },
    extend: {
      colors: {
        // @ToDo: Add Custom colors here
      },
      fontFamily: {
        // @ToDo: Add Custom fonts here
        // 'sans': ['Bai Jamjuree', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
