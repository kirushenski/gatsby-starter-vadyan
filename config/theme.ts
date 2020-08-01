const colors = {
  purple: '#639',
  purpleLight: '#fcfaff',
  purpleDark: '#362066',
}

const grid = 8

// TODO Write interface for theme

const breakpoints = {
  lg: 1440,
  sm: 768,
}

const typography = {
  breakpoints: ['lg', 'sm'],
  family: 'Manrope',
  stack: [
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
  ],
  styles: {
    body: {
      desktop: { fontWeight: 400, lineHeight: 1.5, fontSize: 18 },
      mobile: { fontSize: 16 },
    },
    h1: {
      desktop: { fontWeight: 700, lineHeight: 1.5, fontSize: 36 },
      mobile: { fontSize: 24 },
    },
    h2: {
      desktop: { fontWeight: 700, lineHeight: 1.5, fontSize: 28 },
      mobile: { fontSize: 18 },
    },
    title: {
      desktop: { fontWeight: 700, lineHeight: 1.5, fontSize: 40 },
      mobile: { fontSize: 24 },
    },
    nav: {
      desktop: { fontWeight: 200, lineHeight: 1.5, fontSize: 24 },
      mobile: { fontSize: 18 },
    },
  },
}

const shadows = {
  basic: `0 0 8px 0 ${colors.purpleDark}`,
}

const transitions = {
  basic: `300ms ease`,
}

const theme = {
  colors,
  grid,
  breakpoints,
  typography,
  shadows,
  transitions,
}

export type Theme = typeof theme

export interface ThemeProps {
  theme: Theme
}

export default theme
