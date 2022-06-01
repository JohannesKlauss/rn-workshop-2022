import {Box, Text, View, VStack} from 'native-base'
import Search from './Search'
import React, {useRef} from 'react'
import SearchResults from './SearchResults'
import useSearchPokemon from '../hooks/useSearchPokemon'
import {useStorage} from '../storage'

export interface PokemonListProps {}

const PokemonList = ({}: PokemonListProps) => {
  const [searchString, setSearchString] = useStorage(`searchString`, '')

  const lastSearch = useRef(searchString)

  const results = useSearchPokemon(searchString)

  return (
    <View>
      <Box p={4}>
        <VStack space={'md'}>
          <Text>Last search term: {searchString}</Text>
          <Search
            onSearch={setSearchString}
            defaultValue={lastSearch.current}
          />
          <SearchResults searchResults={results} />
        </VStack>
      </Box>
    </View>
  )
}

export default PokemonList
