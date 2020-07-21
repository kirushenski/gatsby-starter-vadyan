import React, { useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import useDebounce from '@/utils/useDebounce'

const GET_CHARACTERS_DATA = gql`
  query GetCharactersData($id: ID) {
    characters {
      info {
        count
      }
    }
    character(id: $id) {
      name
      image
    }
  }
`

interface CharactersData {
  characters: {
    info: {
      count: number
    }
  }
  character: {
    name: string
    image: string
  }
}

interface CharactersVars {
  id: string
}

const Characters = () => {
  const [characterId, setCharacterId] = useState('1')
  const debouncedCharacterId = useDebounce(characterId)

  const { loading, error, data } = useQuery<CharactersData, CharactersVars>(GET_CHARACTERS_DATA, {
    variables: { id: debouncedCharacterId },
  })

  const charactersCount = data ? data.characters.info.count : 1

  return (
    <div>
      <label htmlFor="characterId">Character ID: </label>
      <input
        name="characterId"
        type="range"
        value={characterId}
        min={1}
        max={charactersCount}
        onChange={e => setCharacterId(e.target.value)}
      />
      <p>
        {characterId} / {charactersCount}
      </p>
      {loading && <p>Loading...</p>}
      {error && <p>Error! {error.message}</p>}
      {data && (
        <article>
          <p>{data.character.name}</p>
          <img src={data.character.image} alt={data.character.name} width={300} height={300} />
        </article>
      )}
    </div>
  )
}

export default Characters
