/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [require("daisyui")],
  
    // Optional: enable dark mode manually
    daisyui: {
      themes: ["light", "dark"], // you can also add more like "cupcake", "business"
    },
  }
  