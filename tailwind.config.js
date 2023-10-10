/** @type {import('tailwindcss').Config} */
// export default ( {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         'primary': '#7E1DC2',
//         'primaryLight': '#F6EAFF',
//         'secondary': '#5D1793',
//         'headingColor': '#000000',
//         'textColor': '#646464',
//       }
//     },
//   },
//   plugins: [],
// });


const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#7E1DC2',
        'primaryLight': '#F6EAFF',
        'secondary': '#5D1793',
        'headingColor': '#000000',
        'textColor': '#646464',
      }
    },
  },
  plugins: [],
});