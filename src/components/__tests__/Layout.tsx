import React from 'react'
import { render } from '@test-utils'
import Layout from '@/components/Layout'

test('renders correctly', () => {
  const { container } = render(<Layout>Content</Layout>)
  expect(container).toMatchInlineSnapshot(`
    .emotion-0 {
      font-size: 100px;
      font-weight: 200;
      -webkit-transition: font-weight ease 2000ms;
      transition: font-weight ease 2000ms;
    }

    .emotion-0:hover {
      font-weight: 800;
    }

    <div>
      <header>
        <h2
          class="emotion-0"
        >
          Header
        </h2>
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
