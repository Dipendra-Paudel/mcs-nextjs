/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f52f56",
        primary2: "#de1840",
        secondary: "#155dd1",
        secondary2: "#0c49ab",
      },
      zIndex: {
        "-1": "-1",
      },
      spacing: {
        88: "20rem",
      },
    },
  },
  plugins: [],
};
