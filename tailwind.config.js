/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "custom-purple": "#4d0164",
        "custom-light-purple": "rgba(214, 2, 233, 0.473)",
      },
    },
  },
  plugins: [],
};
