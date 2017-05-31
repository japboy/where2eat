module.exports = () => ({
  options: {
    sourceMap: true
  },
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {
      browsers: [
        'Chrome >= 57',
        'ChromeAndroid >= 57'
      ]
    },
    'cssnano': {
      autoprefixer: false
    }
  }
})
