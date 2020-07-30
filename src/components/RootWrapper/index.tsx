import React from 'react'
import 'focus-visible'
import { ApolloProvider } from '@apollo/client'
import { MockedProvider, MockedResponse } from '@apollo/client/testing'
import { ThemeProvider } from 'emotion-theming'
import GlobalStyles from '@/components/GlobalStyles'
import client from '@/utils/apollo'
import theme from '@theme'

interface WrapperProps {
  children: React.ReactNode
  apolloMocks?: MockedResponse[]
}

const Wrapper = ({ children, apolloMocks }: WrapperProps) => {
  const ApolloWrapper = apolloMocks ? MockedProvider : ApolloProvider

  return (
    <ApolloWrapper client={client} mocks={apolloMocks} addTypename={false}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ApolloWrapper>
  )
}

export default Wrapper
