// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",          // add this
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#003366",
        "secondary-color": "#EAF0F1",
      },
    },
  },
  plugins: [],
};
