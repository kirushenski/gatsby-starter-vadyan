// Use this file as @testing-library/react import replacement with build-in wrapper in render
// https://testing-library.com/docs/react-testing-library/setup#custom-render
import React from 'react'
import { render, RenderOptions } from '@testing-library/react'
import RootWrapper from '@/components/RootWrapper'

const customRender = (ui: React.ReactElement, { ...options }: RenderOptions = {}) =>
  render(ui, { wrapper: ({ children }) => <RootWrapper>{children}</RootWrapper>, ...options })

export * from '@testing-library/react'

export { customRender as render }
