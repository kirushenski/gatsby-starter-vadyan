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

const theme = {
  colors,
  shadows: {
    basic: `0 0 8px 0 ${colors.purple90}`,
  },
  time: 300,
}

export type Theme = typeof theme

export interface ThemeProps {
  theme: Theme
}

export default theme
