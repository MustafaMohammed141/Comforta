<<<<<<< HEAD
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",

    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
=======
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
>>>>>>> 726897ae2a9104ba85bb68001f4659cb094afee9
  theme: {
    extend: {},
  },
  plugins: [],
<<<<<<< HEAD
});
=======
}
>>>>>>> 726897ae2a9104ba85bb68001f4659cb094afee9

