import {Species} from '../types'
import {FlatList, Heading, VStack} from 'native-base'
import React from 'react'
import PokemonEntry from './PokemonEntry'

export interface SearchResultsProps {
  searchResults: Species[]
}

const SearchResults = ({searchResults}: SearchResultsProps) => {
  return (
    <VStack space={'sm'}>
      <Heading size={'lg'}>
        {searchResults.length} Result{searchResults.length !== 1 && 's'}
      </Heading>
      <FlatList
        height={'100%'}
        data={searchResults}
        keyExtractor={item => item.name}
        renderItem={({item}: {item: Species}) => (
          <PokemonEntry url={item.url} key={item.name} />
        )}
      />
    </VStack>
  )
}

export default SearchResults
