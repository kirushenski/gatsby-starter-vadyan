import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Hello from '@components/Hello'

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

test('renders correctly', () => {
  const { container } = render(<Hello>World</Hello>)
  expect(container.firstChild).toMatchInlineSnapshot(`
    .emotion-0 {
      background-color: #639;
      color: #fff;
    }

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
  `)
})
