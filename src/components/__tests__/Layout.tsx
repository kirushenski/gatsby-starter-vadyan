import React from 'react'
import { render } from '@testing-library/react'
import Layout from '@components/Layout'

test('renders correctly', () => {
  const { container } = render(<Layout>Content</Layout>)
  expect(container).toMatchInlineSnapshot(`
    <div>
      <header>
        Header
      </header>
      <main>
        Content
      </main>
      <footer>
        Footer
      </footer>
    </div>
  `)
})
