import React from 'react'
import { Helmet } from 'react-helmet'
import { render } from '@test-utils'
import * as Gatsby from 'gatsby'
import Seo from '@/components/Seo'

const siteMetadata = {
  title: 'Title',
  description: 'Description',
  keywords: ['some', 'keywords'],
  baseUrl: '',
  lang: 'en',
  facebookUsername: '',
  twitterUsername: '',
}

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery')
useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata,
  },
}))

test('adds title from siteMetadata by default', () => {
  render(<Seo />)
  const helmet = Helmet.peek()
  expect(helmet.title).toBe(siteMetadata.title)
})

test('replace default title with provided by props', () => {
  const titleText = 'Custom title'
  render(<Seo title={titleText} />)
  const helmet = Helmet.peek()
  expect(helmet.title).toBe(titleText)
})
