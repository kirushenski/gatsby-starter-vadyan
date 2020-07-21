import React from 'react'
import { render } from '@test-utils'
import { MockedResponse } from '@apollo/client/testing'
import Characters, { GET_CHARACTERS_DATA, CharactersData } from '@/components/Characters'

test('renders', async () => {
  const apolloMocks: MockedResponse<CharactersData>[] = [
    {
      request: {
        query: GET_CHARACTERS_DATA,
        variables: { id: '1' },
      },
      result: {
        data: {
          characters: {
            info: {
              count: 2,
            },
          },
          character: {
            name: 'Rick Sanchez',
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          },
        },
      },
    },
    {
      request: {
        query: GET_CHARACTERS_DATA,
        variables: { id: '2' },
      },
      result: {
        data: {
          characters: {
            info: {
              count: 2,
            },
          },
          character: {
            name: 'Morty Smith',
            image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
          },
        },
      },
    },
  ]
  const { getByText, findByText } = render(<Characters />, { apolloMocks })
  const text = getByText(/Loading/i)
  expect(text).toBeInTheDocument()

  const name = await findByText(/Rick/i)
  expect(name).toBeInTheDocument()
})
