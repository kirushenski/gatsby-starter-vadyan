import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { MockedProvider, MockedResponse } from '@apollo/client/testing'
import { ThemeProvider } from 'emotion-theming'
import GlobalStyles from '@/components/GlobalStyles'
import client from '@/utils/apollo'
import theme from '@theme'

interface RootWrapperProps {
  /** Site content */
  children: React.ReactNode
  /** Mocked response to Apollo. Providing mocks swaps ApolloProvider with MockedProvider */
  apolloMocks?: MockedResponse[]
}

const RootWrapper = ({ children, apolloMocks }: RootWrapperProps) => {
  const ApolloWrapper = apolloMocks ? MockedProvider : ApolloProvider

  return (
    <ApolloWrapper client={client} mocks={apolloMocks} addTypename={!apolloMocks}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ApolloWrapper>
  )
}

export default RootWrapper
