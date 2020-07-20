import { CSSObject } from '@emotion/core'
import { buttons, transitions } from 'polished'
import theme from '@/utils/theme'

const globalCSS: CSSObject = {
  '.js-focus-visible :focus:not(.focus-visible)': {
    outline: 'none',
  },
  ':focus': {
    outline: `${theme.focus.size}px solid ${theme.focus.color}`,
    outlineOffset: theme.focus.offset,
  },
  [buttons()]: {
    border: 'none',
    ...transitions(['color', 'background-color'], `${theme.transitionTime}ms ease`),
  },
  a: {
    color: theme.colors.dark,
    ...transitions(['color'], `${theme.transitionTime}ms ease`),
    ':hover': {
      color: theme.colors.brand,
    },
  },
}

export default globalCSS
