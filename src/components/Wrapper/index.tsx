import React from 'react'
import 'focus-visible'
import { ThemeProvider } from 'emotion-theming'
import { Global } from '@emotion/core'
import theme from '@/utils/theme'
import { fontsCSS } from '@/utils/typography'

interface WrapperProps {
  children: React.ReactNode
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={[
          ...fontsCSS,
          {
            '.js-focus-visible :focus:not(.focus-visible)': {
              outline: 'none',
            },
            ':focus': {
              outline: `${theme.focus.size}px solid ${theme.focus.color}`,
              outlineOffset: theme.focus.offset,
            },
          },
        ]}
      />
      {children}
    </ThemeProvider>
  )
}

export default Wrapper
