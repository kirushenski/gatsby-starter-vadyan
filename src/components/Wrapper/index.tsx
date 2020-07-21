import React from 'react'
import 'focus-visible'
import { ApolloProvider } from '@apollo/client'
import { MockedProvider, MockedResponse } from '@apollo/client/testing'
import { ThemeProvider } from 'emotion-theming'
import { Global } from '@emotion/core'
import theme from '@/utils/theme'
import { fontsCSS } from '@/utils/typography'
import globalCSS from '@/utils/globalCSS'
import client from '@/utils/apollo'

interface WrapperProps {
  children: React.ReactNode
  apolloMocks?: MockedResponse[]
}

const Wrapper = ({ children, apolloMocks }: WrapperProps) => {
  const ApolloWrapper = apolloMocks ? MockedProvider : ApolloProvider

  return (
    <ApolloWrapper client={client} mocks={apolloMocks} addTypename={false}>
      <ThemeProvider theme={theme}>
        <Global styles={[...fontsCSS, globalCSS]} />
        {children}
      </ThemeProvider>
    </ApolloWrapper>
  )
}

export default Wrapper
