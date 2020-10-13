// All defined here properties are passed to Emotion ThemeProvider
// In project they are available via useTheme hook or prop in styled components

const colors = {
  purple: '#639',
  purpleLight: '#fcfaff',
  purpleDark: '#362066',
}

const breakpoints = {
  lg: 1440,
  sm: 768,
}

const typography = {
  family: 'Manrope',
  stacks: {
    sansSerif: [
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Avenir Next"',
      'Avenir',
      'Helvetica Neue',
      'Helvetica',
      'Ubuntu',
      'Roboto',
      'Noto',
      '"Segoe UI"',
      'Arial',
      'sans-serif',
    ],
    monospace: ['Menlo', 'Consolas', 'Monaco', '"Liberation Mono"', '"Lucida Console"', 'monospace'],
  },
  styles: {
    body: {
      fontSize: 'clamp(1rem, 2.25vw ,1.125rem)', // 16-18
      lineHeight: 1.5,
    },
    h1: {
      fontWeight: 700,
      fontSize: 'clamp(1.5rem, 3.25vw ,2.25rem)', // 24-36
      lineHeight: 1.5,
    },
    h2: {
      fontWeight: 700,
      fontSize: 'clamp(1.125rem, 2.25vw ,1.75rem)', // 18-28
      lineHeight: 1.5,
    },
    title: {
      fontWeight: 700,
      fontSize: 'clamp(1.5rem, 4vw ,2.5rem)', // 24-40
      lineHeight: 1.5,
    },
    nav: {
      fontWeight: 200,
      fontSize: 'clamp(1.125rem, 2.75vw ,1.5rem)', // 18-24
      lineHeight: 1.5,
    },
  },
}

const shadows = {
  basic: `0 0 4px 1px ${colors.purpleDark}`,
}

const transitions = {
  short: '200ms ease-in-out',
  long: '500ms ease-in-out',
}

const theme = {
  colors,
  breakpoints,
  typography,
  shadows,
  transitions,
}

// Use this type with useTheme hook
export type Theme = typeof theme

// Use this interface with styled components props
export interface ThemeProps {
  theme: Theme
}

export default theme
