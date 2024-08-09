/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "360px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "neutral-300": "#D1D5DB",
        "neutral-700": "#374151",
        "neutral-500": "#6B7280",
        "neutral-900": "#111827",
        "primary-600": "#7C3AED",
        "secondary-100": "#D5FAFC",
        "secondary-600": "#1DB5BE",
      },
    },
  },
  plugins: [],
};
