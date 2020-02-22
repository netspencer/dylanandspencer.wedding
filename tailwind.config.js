const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        serif: ['Libre Baskerville', ...defaultTheme.fontFamily.serif],
        slab: ['Abril Fatface', 'serif']
      },
      fontSize: {
        '7xl': '5rem'
      }
    }
  },
  variants: {},
  plugins: []
}
