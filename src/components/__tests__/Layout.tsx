import React from 'react'
import { render } from '@testing-library/react'
import Layout from '@components/Layout'

test('renders correctly', () => {
  const { container } = render(<Layout>Content</Layout>)
  expect(container.firstChild).toMatchInlineSnapshot(`
    <header>
      <svg
        title="Gatsby logo"
        width="240"
      />
      Header
    </header>
  `)
})
