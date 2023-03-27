/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dominant: "#080B42",
        accent: "#CC8893",
        cta: "#5239D2",
      },
      fontFamily: {
        Inter: ["Inter"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        right: "15px 0px 29px -21px rgba(0,0,0,0.5)",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        wiggle1: "wiggle 3s ease-in-out infinite",
        wiggle2: "wiggle 5s ease-in-out infinite",
        wiggle3: "wiggle 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
