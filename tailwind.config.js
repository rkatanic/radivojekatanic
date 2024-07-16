/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        slate: {
          950: "hsl(212, 18%, 8%)",
          900: "hsl(212, 18%, 10%)",
          800: "hsl(212, 14%, 14%)",
          700: "hsl(212, 14%, 24%)",
          600: "hsl(212, 10%, 34%)",
          500: "hsl(212, 10%, 47%)",
          400: "hsl(212, 10%, 66%)",
          300: "hsl(212, 10%, 84%)",
          200: "hsl(212, 10%, 91%)",
          100: "hsl(212, 10%, 96%)",
          50: "hsl(212, 10%, 98%)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
