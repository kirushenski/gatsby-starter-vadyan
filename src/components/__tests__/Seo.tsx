import React from 'react'
import { Helmet } from 'react-helmet'
import { render } from '@test-utils'
import * as Gatsby from 'gatsby'
import Seo from '@/components/Seo'

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery')
useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata: {
      title: 'Gatsby starter',
      description: 'Gatsby starter for personal projects',
      keywords: ['gatsby', 'starter'],
      baseUrl: '',
      lang: 'en',
      facebookUsername: '',
      twitterUsername: '',
    },
  },
}))

test('react-helmet added title from siteMetadata', () => {
  render(<Seo />)
  const helmet = Helmet.peek()
  expect(helmet.title).toBe('Gatsby starter')
})
