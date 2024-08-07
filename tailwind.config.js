/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "neutral-700": "#374151",
        "neutral-900": "#111827",
        "primary-600": "#7C3AED",
      },
    },
  },
  plugins: [],
};
