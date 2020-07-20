import React from 'react'
import 'focus-visible'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'emotion-theming'
import { Global } from '@emotion/core'
import theme from '@/utils/theme'
import { fontsCSS } from '@/utils/typography'
import globalCSS from '@/utils/globalCSS'
import client from '@/utils/apollo'

interface WrapperProps {
  children: React.ReactNode
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Global styles={[...fontsCSS, globalCSS]} />
        {children}
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default Wrapper
