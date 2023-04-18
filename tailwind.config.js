/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#D1EAFF",
          100: "#76A0C8",
          200: "#77B4E6",
          300: "#377DBD",
          400: "#5D8CB3",
          500: "#285A8A",
          600: "#545E66",
          700: "#24313D",
          800: "#355066",
          900: "#12283D",
        },
        secondary: {
          50: "#FFF3C4",
          100: "#EADFB4",
          200: "#FFE478",
          300: "#E6CE6C",
          400: "#CCB660",
          500: "#B3A054",
          600: "#80723C",
          700: "#665B30",
          800: "#807A62",
          900: "#66614F",
        },
      },
    },
  },
  plugins: [],
};
