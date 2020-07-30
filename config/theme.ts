const colors = {
  white: '#fff',
  black: '#000',
  dark: '#333',
  brand: '#639',
  brandHover: '#452475',
  purple5: '#fcfaff',
  purple10: '#f6edfa',
  purple20: '#f1defa',
  purple30: '#d9bae8',
  purple40: '#b17acc',
  purple50: '#8a4baf',
  purple60: '#663399',
  purple70: '#542c85',
  purple80: '#452475',
  purple90: '#362066',
}

// TODO Write interface for theme

const breakpoints = {
  lg: 1440,
  md: 968,
  sm: 768,
}

const typography = {
  breakpoints: ['lg', 'sm'],
  base: 18,
  styles: {
    title: {
      desktop: {
        fontWeight: 700,
        fontSize: 40,
        lineHeight: 1.2,
      },
      mobile: {
        fontSize: 24,
      },
    },
  },
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
}

const shadows = {
  basic: `0 0 8px 0 ${colors.purple90}`,
}

const timings = {
  basic: `300ms ease`,
}

const theme = {
  colors,
  breakpoints,
  typography,
  shadows,
  timings,
}

export type Theme = typeof theme

export interface ThemeProps {
  theme: Theme
}

export default theme
