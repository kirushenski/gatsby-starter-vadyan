import React from 'react'
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
      <Global styles={fontsCSS} />
      {children}
    </ThemeProvider>
  )
}

export default Wrapper
