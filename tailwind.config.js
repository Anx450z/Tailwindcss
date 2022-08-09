/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-3deg)",
          },
          "50%": {
            transform: "rotate(3deg)",
          },
        },
        "peak-up":{
          "0%": {
            transform: "translateY(100%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        "peak-down":{
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(100%)",
          },
        }
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        "peak-up": "peak-up 1s ease-in-out infinite",
        "peak-down": "peak-down 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
