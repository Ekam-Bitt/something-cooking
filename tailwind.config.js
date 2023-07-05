/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "violet-2": "#2C0472",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
