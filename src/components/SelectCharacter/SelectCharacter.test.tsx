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
  const characterCard = screen.getByRole('article')
  expect(characterCard).toMatchInlineSnapshot(`
    .emotion-4 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      padding: 16px;
      background-color: #fcfaff;
      color: #362066;
      box-shadow: 0 0 4px 1px #362066;
    }

    .emotion-0 {
      border-radius: 50%;
      margin-right: 16px;
    }

    .emotion-2 {
      display: grid;
      grid-template-columns: auto minmax(224px,1fr);
      justify-items: start;
    }

    .emotion-2 dt {
      font-weight: 700;
    }

    .emotion-2 dd {
      padding-left: 8px;
    }

    @media (max-width:767px) {
      .emotion-2 dd {
        padding: 0;
      }
    }

    @media (max-width:767px) {
      .emotion-2 {
        grid-template-columns: 1fr;
      }
    }

    <article
      class="emotion-4 emotion-5"
    >
      <img
        alt="Rick Sanchez"
        class="emotion-0 emotion-1"
        height="104"
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        width="104"
      />
      <dl
        class="emotion-2 emotion-3"
      >
        <dt>
          Name:
        </dt>
        <dd>
          Rick Sanchez
        </dd>
        <dt>
          Species:
        </dt>
        <dd>
          Human
        </dd>
        <dt>
          Origin:
        </dt>
        <dd>
          Earth (C-137)
        </dd>
      </dl>
    </article>
  `)
})
