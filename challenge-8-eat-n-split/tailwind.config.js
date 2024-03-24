/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "blackOpacity" : "rgba(0, 0, 0, 0.3)",
      }
    },
  },
  plugins: [],
}

  