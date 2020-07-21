import React from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { MockedResponse } from '@apollo/client/testing'
import Wrapper from '@/components/Wrapper'

interface Options extends RenderOptions {
  apolloMocks?: MockedResponse[]
}

const customRender = (ui: React.ReactElement, { apolloMocks, ...options }: Options = {}) =>
  render(ui, { wrapper: ({ children }) => <Wrapper apolloMocks={apolloMocks}>{children}</Wrapper>, ...options })

export * from '@testing-library/react'

export { customRender as render }
