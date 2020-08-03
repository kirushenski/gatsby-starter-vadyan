import * as React from 'react'
import { render, screen } from '@test-utils'
import Character, { GET_CHARACTER_DATA } from '.'

test('initially shows loading state', () => {
  const characterId = '1'
  render(<Character id={characterId} />)
  const characterName = screen.getAllByRole('definition')[0]
  expect(characterName).toHaveTextContent(/loading/i)
})

test('loads character data from API', async () => {
  const characterId = '1'
  const characterData = {
    name: 'Rick Sanchez',
    species: 'Human',
    origin: 'Earth (C-137)',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  }
  render(<Character id={characterId} />, {
    apolloMocks: [
      {
        request: {
          query: GET_CHARACTER_DATA,
          variables: {
            id: characterId,
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
  const characterSpecies = screen.getByText(characterData.species)
  expect(characterSpecies).toBeInTheDocument()
  const characterOrigin = screen.getByText(characterData.origin)
  expect(characterOrigin).toBeInTheDocument()
  const characterImage = screen.getByRole('img', { name: characterData.name })
  expect(characterImage).toHaveAttribute('src', characterData.image)
})
