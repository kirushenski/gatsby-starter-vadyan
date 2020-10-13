import React from 'react'
import { useQuery, gql } from '@apollo/client'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'
import media from '@/utils/media'
import { Theme, ThemeProps } from '@theme'

const Article = styled.article(({ theme }: ThemeProps) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '1rem',
  backgroundColor: theme.colors.purpleLight,
  color: theme.colors.purpleDark,
  boxShadow: theme.shadows.basic,
}))

const Image = styled.img(() => ({
  borderRadius: '50%',
  marginRight: '1rem',
}))

const List = styled.dl(() => ({
  display: 'grid',
  gridTemplateColumns: `auto minmax(14rem, 1fr)`,
  justifyItems: 'start',
  dt: { fontWeight: 700 },
  dd: {
    paddingLeft: '0.5rem',
    [media.sm]: { padding: 0 },
  },
  [media.sm]: { gridTemplateColumns: '1fr' },
}))

export const GET_CHARACTER_DATA = gql`
  query GetCharacterData($id: ID!) {
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
  /** Character id */
  id: string
}

const Character = ({ id }: CharacterProps) => {
  const theme = useTheme<Theme>()

  const imageSize = 104
  const fallbackText = 'loading...'
  const fallbackData: CharacterData = {
    character: {
      image: `https://dummyimage.com/${imageSize}x${imageSize}/${theme.colors.purpleDark.slice(
        1
      )}/${theme.colors.purpleLight.slice(1)}.png&text=${fallbackText}`,
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
    <Article>
      <Image src={data.character.image} alt={data.character.name} width={imageSize} height={imageSize} />
      <List>
        <dt>Name:</dt>
        <dd>{data.character.name}</dd>
        <dt>Species:</dt>
        <dd>{data.character.species}</dd>
        <dt>Origin:</dt>
        <dd>{data.character.origin.name}</dd>
      </List>
    </Article>
  )
}

export default Character
