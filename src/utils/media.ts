import theme from '@theme'

const media = Object.fromEntries(
  Object.entries(theme.breakpoints).map(([name, value]) => [name, `@media (max-width: ${value - 1}px)`])
)

export default media
