/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3D4451",
          info: "#08eb94",
          "base-100": "#FFFFFF"
        },
      },
    ],
  },
  theme: {
    extend: {},
    fontFamily: {
      "Ibm-plex": ["IBM Plex Sans", "sans-serif"],
      Merry: ["Merriweather", "serif"],
    },
  },
  plugins: [require("daisyui")],
};
