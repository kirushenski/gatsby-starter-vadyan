import Typography from 'typography'
import { CSSObject } from '@emotion/core'
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
  // TODO Replace with theme variables
  headerColor: '#000',
  bodyColor: '#000',
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  blockMarginBottom: 0,
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
