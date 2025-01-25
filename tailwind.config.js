/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Work Sans"', '"Comic Sans MS"'],
        serif: ['"Source Serif 4"', "Georgia"],
      },
    },
  },
  plugins: [],
};
