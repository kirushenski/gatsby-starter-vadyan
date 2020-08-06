// Use this file as @testing-library/react import replacement with build-in wrapper in render
import React from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { MockedResponse } from '@apollo/client/testing'
import RootWrapper from '@/components/RootWrapper'

interface Options extends RenderOptions {
  apolloMocks?: MockedResponse[]
}

const customRender = (ui: React.ReactElement, { apolloMocks, ...options }: Options = {}) =>
  render(ui, { wrapper: ({ children }) => <RootWrapper apolloMocks={apolloMocks}>{children}</RootWrapper>, ...options })

export * from '@testing-library/react'

export { customRender as render }
