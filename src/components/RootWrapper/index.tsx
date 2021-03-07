import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import GlobalStyles from '@/components/GlobalStyles'
import theme from '@theme'

interface RootWrapperProps {
  /** Site content */
  children: React.ReactNode
}

const RootWrapper = ({ children }: RootWrapperProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export default RootWrapper
