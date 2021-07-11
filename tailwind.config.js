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
          main: '#E7062B'
        },
        platinum: '#E8E9ED',
        purple: {
          main: '#1E152A'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
