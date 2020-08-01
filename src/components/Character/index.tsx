import React from 'react'
import { useQuery, gql } from '@apollo/client'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'
import { Theme, ThemeProps } from '@theme'

const Article = styled.article(({ theme }: ThemeProps) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.grid * 2,
  backgroundColor: theme.colors.purple5,
  color: theme.colors.purple90,
  boxShadow: theme.shadows.basic,
}))

const Image = styled.img(({ theme }: ThemeProps) => ({
  gridRow: 'span 2',
  borderRadius: '50%',
  marginRight: theme.grid * 2,
}))

const List = styled.dl(({ theme }: ThemeProps) => ({
  display: 'grid',
  gridTemplateColumns: `auto minmax(${theme.grid * 28}px, 1fr)`,
  justifyItems: 'start',
  dd: { paddingLeft: theme.grid },
}))

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
  const theme = useTheme<Theme>()

  const imageSize = theme.grid * 13
  const fallbackText = 'loading...'
  const fallbackData: CharacterData = {
    character: {
      image: `https://dummyimage.com/${imageSize}x${imageSize}/${theme.colors.purple90.slice(
        1
      )}/${theme.colors.purple5.slice(1)}.png&text=${fallbackText}`,
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
