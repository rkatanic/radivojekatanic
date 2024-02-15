/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  plugins: [require("@tailwindcss/forms")],
  theme: {
    theme: {
      extend: {
        animation: {
          marquee: "marquee 25s linear infinite",
          marquee2: "marquee2 25s linear infinite",
        },
        keyframes: {
          marquee: {
            "0%": { transform: "translateX(0%)" },
            "100%": { transform: "translateX(-100%)" },
          },
          marquee2: {
            "0%": { transform: "translateX(100%)" },
            "100%": { transform: "translateX(0%)" },
          },
        },
      },
    },
  },
};
