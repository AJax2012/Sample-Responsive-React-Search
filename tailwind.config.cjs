/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/*.tsx", "./src/**/*.tsx"],
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
