/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      display: ["Roboto", "sans-serif"],
      comfortaa: ["Comfortaa", "cursive"],
    },

    extend: {
      colors: {
        "logo-green": "#528265",
        background: "#F5F5DC",
        "song-green": "#287A49",
      },
    },
  },
  plugins: [],
};
