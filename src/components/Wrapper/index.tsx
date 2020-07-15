import React from 'react'
import 'focus-visible'
import { ThemeProvider } from 'emotion-theming'
import { Global } from '@emotion/core'
import { buttons, transitions, textInputs } from 'polished'
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
          },
        ]}
      />
      {children}
    </ThemeProvider>
  )
}

export default Wrapper
