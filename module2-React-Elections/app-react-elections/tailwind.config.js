const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      $gray800: '#343a40',
      $gray100: '#e5e5e5',
      $gray50: '#eeeeee',
      $white: '#ffffff',
      $white50: 'rgba(255, 255, 255, 0.7)',
      $red100: '#ce425741',
      $red400: '#851524',
      $green600: '#34c771',
      $red600: '#bb3e03',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
