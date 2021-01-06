module.exports = {
  purge: ['./src/pages/**/*.ts', './src/components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#2F9E40',
      secondary: '#C8191E'
    },
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
