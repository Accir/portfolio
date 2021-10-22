const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    letterSpacing: {
      widest: ".15em",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      darkGray: "#232323",
    },
    fontFamily: {
      main: ["Roboto Mono, monospace"],
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};
