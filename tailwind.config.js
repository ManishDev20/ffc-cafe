/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "1024px": "1024px",
        "1026px": "1026px",
        "1030px": "1030px",
      },
    },
  },
  plugins: [],
};
