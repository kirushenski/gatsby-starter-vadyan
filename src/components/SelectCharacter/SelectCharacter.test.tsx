import * as React from 'react'
import { render, screen } from '@test-utils'
import user from '@testing-library/user-event'
import SelectCharacter, { GET_CHARACTERS_COUNT } from '.'
import { GET_CHARACTER_DATA } from '@/components/Character'

test('click on button triggers id change', () => {
  const setState = jest.fn()
  const useStateMock: any = (initState: any) => [initState, setState]
  jest.spyOn(React, 'useState').mockImplementation(useStateMock)
  render(<SelectCharacter />)
  const button = screen.getByRole('button', { name: /randomize/i })
  user.click(button)
  expect(setState).toHaveBeenCalled()
})

test('renders character with id equals "1" by default', async () => {
  const characterData = {
    name: 'Rick Sanchez',
    species: 'Human',
    origin: 'Earth (C-137)',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  }
  render(<SelectCharacter />, {
    apolloMocks: [
      {
        request: {
          query: GET_CHARACTERS_COUNT,
        },
        result: {
          data: {
            characters: {
              info: {
                count: 100,
              },
            },
          },
        },
      },
      {
        request: {
          query: GET_CHARACTER_DATA,
          variables: {
            id: '1',
          },
        },
        result: {
          data: {
            character: {
              name: characterData.name,
              species: characterData.species,
              origin: {
                name: characterData.origin,
              },
              image: characterData.image,
            },
          },
        },
      },
    ],
  })
  const characterName = await screen.findByText(characterData.name)
  expect(characterName).toBeInTheDocument()
})
