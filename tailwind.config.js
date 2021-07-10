module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.js']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        red: {
          main: '#e7062b'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
