import React from 'react'
import { render } from '@testing-library/react'
import { useStaticQuery } from 'gatsby'
import IndexPage from '@pages/index'

const mockUseStaticQuery = useStaticQuery as jest.Mock<any>

beforeEach(() => {
  mockUseStaticQuery.mockImplementationOnce(() => ({
    site: {
      siteMetadata: {
        title: 'Gatsby starter',
        description: 'Gatsby starter for personal projects',
        keywords: ['gatsby', 'starter'],
        baseUrl: '',
        contentType: 'website',
        socials: {
          twitter: '',
          facebook: '',
        },
      },
    },
  }))
})

test('renders correctly', () => {
  const { container } = render(<IndexPage />)
  expect(container).toMatchInlineSnapshot(`
    .emotion-0 {
      background-color: purple;
      color: white;
    }

    <div>
      <header>
        Header
      </header>
      <main>
        <h1>
          Gatsby Starter
        </h1>
        <div>
          <button
            class="emotion-0"
            type="button"
          >
            Hello, 
            World
            ! Click me
          </button>
          <p>
            You clicked: 
            0
             times
          </p>
        </div>
      </main>
      <footer>
        Footer
      </footer>
    </div>
  `)
  expect(mockUseStaticQuery).toHaveBeenCalledTimes(1)
})
