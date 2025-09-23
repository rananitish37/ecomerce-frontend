// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      // Instruct Tailwind to scan all component files in src/
      "./src/**/*.{js,jsx,ts,tsx}", 
    ],
    theme: {
      extend: {
        colors:{
          "primary-color":"#003366",
          "secondary-color":"#EAF0F1"
        }
      },
    },
    plugins: [],
  }