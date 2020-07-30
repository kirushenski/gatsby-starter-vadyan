import React, { useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import { useTheme } from 'emotion-theming'
import { linearGradient } from 'polished'
import Character from '@/components/Character'
import { Theme } from '@theme'

export const GET_CHARACTERS_COUNT = gql`
  query GetCharactersCount {
    characters {
      info {
        count
      }
    }
  }
`

export interface CharactersCount {
  characters: {
    info: {
      count: number
    }
  }
}

const SelectCharacter = () => {
  const { colors, shadows } = useTheme<Theme>()

  const { data } = useQuery<CharactersCount>(GET_CHARACTERS_COUNT)
  const charactersCount = data?.characters.info.count || 1

  const [characterId, setCharacterId] = useState('1')

  return (
    <div
      css={{
        display: 'grid',
        gridTemplateColumns: '1fr 150px',
        gridGap: 24,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Character id={characterId} />
      <button
        onClick={() => {
          const randomId = String(Math.floor(Math.random() * (charactersCount + 1)))
          setCharacterId(randomId)
        }}
        css={{
          padding: 8,
          ...linearGradient({
            colorStops: [`${colors.purple90} 10%`, `${colors.purple60} 51%`, `${colors.purple90} 90%`],
            toDirection: 'to right',
            fallback: colors.purple90,
          }),
          color: colors.purple5,
          borderRadius: 4,
          boxShadow: shadows.basic,
          backgroundSize: '200% auto',
          transition: 'all ease 300ms',
          ':hover': {
            backgroundPosition: 'right center',
          },
        }}
      >
        Randomize
      </button>
    </div>
  )
}

export default SelectCharacter
