import React from 'react'
import { render, screen } from '@test-utils'
import * as Gatsby from 'gatsby'
import StaticImage from '@/components/StaticImage'

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery')
const mockedUseStaticQuery = useStaticQuery.mockImplementation(() => ({
  file: {
    childImageSharp: {
      fluid: {
        aspectRatio: 1,
        sizes: '',
        src: '',
        srcSet: '',
        srcSetWebp: '',
        srcWebp: '',
        tracedSvg: '',
      },
    },
  },
}))

test('gatsby-image actually renders image', () => {
  render(<StaticImage />)
  const image = screen.getByRole('img', { name: /gatsby image/i })
  expect(mockedUseStaticQuery).toHaveBeenCalledTimes(1)
  expect(image).toBeInTheDocument()
})
