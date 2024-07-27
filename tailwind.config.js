/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        regular: ['Poppins-Regular', 'sans-serif'],
        bold: ['Poppins-Bold', 'sans-serif'],
        semiBold: ['Poppins-SemiBold', 'sans-serif']
      },
    },
  },
  plugins: [],
}

