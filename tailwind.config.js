const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      purple: '#639',
      'purple-light': '#fcfaff',
      'purple-dark': '#362066',
    },
    fontFamily: {
      sans: ['ManropeVariable', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      body: ['1.125rem', 1.5],
      h1: ['2.25rem', 1.5],
      header: ['2.5rem', 1.5],
      'body-mobile': ['1rem', 1.5],
      'h1-mobile': ['1.5rem', 1.5],
      'header-mobile': ['1.5rem', 1.5],
    },
    boxShadow: theme => ({
      DEFAULT: `0 0 4px 1px ${theme('colors.purple-dark')}`,
    }),
    extend: {
      outline: theme => ({
        DEFAULT: [`3px solid ${theme('colors.purple-light')}`, '2px'],
      }),
      gridTemplateRows: {
        layout: 'auto 1fr auto',
      },
    },
  },
  variants: {
    extend: {},
  },
}
