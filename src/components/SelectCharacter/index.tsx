import React, { useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import styled from '@emotion/styled'
import { linearGradient, transitions } from 'polished'
import Character from '@/components/Character'
import media from '@/utils/media'
import { ThemeProps } from '@theme'

const Wrapper = styled.div(({ theme }: ThemeProps) => ({
  display: 'grid',
  gridTemplateColumns: `1fr ${theme.grid * 20}px`,
  gridGap: theme.grid * 3,
  justifyContent: 'center',
  alignItems: 'center',
  [media.sm]: { gridTemplateColumns: '1fr', justifySelf: 'stretch' },
}))

const Button = styled.button(({ theme }: ThemeProps) => ({
  padding: theme.grid,
  ...linearGradient({
    colorStops: [`${theme.colors.purpleDark} 10%`, `${theme.colors.purple} 51%`, `${theme.colors.purpleDark} 90%`],
    toDirection: 'to right',
    fallback: theme.colors.purpleDark,
  }),
  color: theme.colors.purpleLight,
  borderRadius: 4,
  boxShadow: theme.shadows.basic,
  backgroundSize: '200% auto',
  ...transitions('background-position', theme.transitions.basic),
  ':hover': {
    backgroundPosition: 'right center',
  },
}))

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
  const { data } = useQuery<CharactersCount>(GET_CHARACTERS_COUNT)
  const charactersCount = data?.characters.info.count || 1

  const [characterId, setCharacterId] = useState('1')

  return (
    <Wrapper>
      <Character id={characterId} />
      <Button
        onClick={() => {
          const randomId = String(Math.floor(Math.random() * (charactersCount + 1)))
          setCharacterId(randomId)
        }}
      >
        Randomize
      </Button>
    </Wrapper>
  )
}

export default SelectCharacter