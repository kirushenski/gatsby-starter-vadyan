import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { useTheme } from 'emotion-theming'
import { Theme } from '../../../config/theme'

export const GET_CHARACTER_DATA = gql`
  query GetCharacterData($id: ID) {
    character(id: $id) {
      name
      species
      origin {
        name
      }
      image
    }
  }
`

export interface CharacterData {
  character: {
    name: string
    species: string
    origin: {
      name: string
    }
    image: string
  }
}

interface CharacterVars {
  id: string
}

interface CharacterProps {
  id: string
}

const Character = ({ id }: CharacterProps) => {
  const { colors, shadows } = useTheme<Theme>()

  const imageSize = 100
  const fallbackText = 'loading...'
  const fallbackData: CharacterData = {
    character: {
      image: `https://dummyimage.com/${imageSize}x${imageSize}/${colors.purple90.slice(1)}/${colors.purple5.slice(
        1
      )}.png&text=${fallbackText}`,
      name: fallbackText,
      species: fallbackText,
      origin: {
        name: fallbackText,
      },
    },
  }

  const { data = fallbackData } = useQuery<CharacterData, CharacterVars>(GET_CHARACTER_DATA, {
    variables: { id },
  })

  return (
    <article
      css={{
        display: 'flex',
        alignItems: 'center',
        padding: 16,
        backgroundColor: colors.purple5,
        color: colors.purple90,
        boxShadow: shadows.basic,
      }}
    >
      <img
        src={data.character.image}
        alt={data.character.name}
        width={imageSize}
        height={imageSize}
        css={{ gridRow: 'span 2', borderRadius: '50%', marginRight: 16 }}
      />
      <dl
        css={{
          display: 'grid',
          gridTemplateColumns: 'auto minmax(220px, 1fr)',
          justifyItems: 'start',
          dd: { paddingLeft: 8 },
        }}
      >
        <dt>Name:</dt>
        <dd>{data.character.name}</dd>
        <dt>Species:</dt>
        <dd>{data.character.species}</dd>
        <dt>Origin:</dt>
        <dd>{data.character.origin.name}</dd>
      </dl>
    </article>
  )
}

export default Character
