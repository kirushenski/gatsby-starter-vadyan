import React from 'react'
import { Helmet } from 'react-helmet'
import { render } from '@test-utils'
import { PureSeo as Seo, SeoQuery } from '@/components/Seo'

test('react-helmet added title from siteMetadata', () => {
  const data: SeoQuery = {
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
  }

  const defaults = data.site.siteMetadata

  render(<Seo data={data} />)
  const helmet = Helmet.peek()
  expect(helmet.title).toBe(defaults.title)
})
