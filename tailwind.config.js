module.exports = {
  purge: [
    './src/**/*.js',
  ],
  theme: {
    future: {
      purgeLayersByDefault: true,
      removeDeprecatedGapUtilities: true,
    },
    extend: {
      colors: {
        'primary-red': '#9C0328',
        'secondary-red': '#6B0624',
        'tertiary-red': '#CE174D',
        'quaternary-red': '#CA003A',
        'quinary-red': '#a90635',
        'nav-red' : '#C9003A',
        'primary-grey': '#353C4C',
        'primary-yellow': '#FFC450',
        'off-white': '#f6f6f6'
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        "open-sans": ["open-sans", "sans-serif"],

      },
    }
  },
  variants: {},
  plugins: []
}
