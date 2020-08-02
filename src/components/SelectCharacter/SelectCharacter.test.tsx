import React from 'react'
import { render, screen } from '@test-utils'
// import user from '@testing-library/user-event'
import SelectCharacter from '.'

test('click on button changes character', () => {
  render(<SelectCharacter />)
  const button = screen.getByRole('button', { name: /randomize/i })
  expect(button).toBeInTheDocument()
  // const characterName = screen.getAllByRole('definition')[0]
})
