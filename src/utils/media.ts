import theme from '@theme'

/** Converts theme breakpoints to CSS media queries */
const media = Object.fromEntries(
  Object.entries(theme.breakpoints).map(([name, value]) => [name, `@media (max-width: ${value - 1}px)`])
)

export default media
