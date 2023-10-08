/** @type {import('tailwindcss').Config} */
export default ( {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#7E1DC2',
        'secondary': '#5D1793',
        'headingColor': '#000000',
        'textColor': '#646464',
      }
    },
  },
  plugins: [],
});

