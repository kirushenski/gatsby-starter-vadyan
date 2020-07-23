import Typography from 'typography'
import { CSSObject } from '@emotion/core'
import theme from '@/utils/theme'
import Manrope from '@/fonts/Manrope.woff2'

const systemStack = [
  'system-ui',
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
]

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  scaleRatio: 2,
  headerFontFamily: ['Manrope', ...systemStack],
  bodyFontFamily: ['Manrope', ...systemStack],
  headerColor: theme.colors.dark,
  bodyColor: theme.colors.dark,
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  blockMarginBottom: 1,
  includeNormalize: true,
})

export const fontsCSS: CSSObject[] = [
  {
    '@font-face': {
      fontFamily: 'Manrope',
      src: `url(${Manrope}) format('woff2-variations')`,
      fontDisplay: 'swap',
      fontWeight: '200 800' as any,
    },
  },
]

export default typography