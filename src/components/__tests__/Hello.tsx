import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Hello from '@components/Hello'
import * as Gatsby from 'gatsby'

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery')
useStaticQuery.mockImplementation(() => ({
  file: {
    childImageSharp: {
      fixed: {
        tracedSVG: '',
        width: 100,
        height: 100,
        src: '',
        srcSet: '',
        srcWebp: '',
        srcSetWebp: '',
      },
    },
  },
}))

test('button click increments value by 1', () => {
  const { getByText } = render(<Hello>World</Hello>)
  const button = getByText(/Click me/i)
  const status = getByText(/You clicked/i)

  expect(status).toHaveTextContent('0')
  fireEvent.click(button)
  expect(status).toHaveTextContent('1')
  fireEvent.click(button)
  expect(status).toHaveTextContent('2')
})

test('component works with custom default value', () => {
  const { getByText } = render(<Hello defaultValue={2}>World</Hello>)
  const button = getByText(/Click me/i)
  const status = getByText(/You clicked/i)

  expect(status).toHaveTextContent('2')
  fireEvent.click(button)
  expect(status).toHaveTextContent('3')
  fireEvent.click(button)
  expect(status).toHaveTextContent('4')
})
