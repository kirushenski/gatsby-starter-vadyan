import { render, RenderOptions } from '@testing-library/react'
import Wrapper from '@/components/Wrapper'

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: Wrapper as React.FC, ...options })

export * from '@testing-library/react'

export { customRender as render }
