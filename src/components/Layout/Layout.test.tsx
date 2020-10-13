import React from 'react'
import { render, screen } from '@test-utils'
import Layout from '@/components/Layout'

test('renders content passed in children', () => {
  const content = 'Page content'
  render(<Layout>{content}</Layout>)
  const pageContent = screen.getByText(content)
  expect(pageContent).toBeInTheDocument()
})

test('title in header must be a link to the main page', () => {
  render(<Layout>Page content</Layout>)
  const title = screen.getByRole('link', { name: /gatsby starter vadyan/i })
  expect(title).toHaveAttribute('href', '/')
})
