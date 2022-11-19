/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "hsl(0, 0%, 8%)",
        gray: {
          50: "hsl(0, 0%, 98%)",
          100: "hsl(0, 0%, 92%)",
          200: "hsl(0, 0%, 84%)",
          300: "hsl(0, 0%, 64%)",
          400: "hsl(0, 0%, 52%)",
          500: "hsl(0, 0%, 42%)",
          600: "hsl(0, 0%, 32%)",
          700: "hsl(0, 0%, 18%)",
          800: "hsl(0, 0%, 12%)",
          900: "hsl(0, 0%, 8%)",
        },
      },
    },
  },
  plugins: [],
};
