import { CSSObject } from '@emotion/core'
import Manrope from '../fonts/Manrope.woff2'

const systemStack =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI”, Roboto, “Helvetica Neue”, Arial, sans-serif'

const fontsCSS: CSSObject[] = [
  {
    '@font-face': {
      fontFamily: 'Manrope',
      src: `url(${Manrope}) format('woff2-variations')`,
      fontDisplay: 'swap',
      fontWeight: '200 800' as any,
    },
  },
  {
    '*': {
      fontFamily: `Manope, ${systemStack}`,
    },
  },
]

export default fontsCSS
