import {Input, Icon as NbIcon} from 'native-base'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

export interface PokemonSearchProps {
  onSearch: (search: string) => void
  defaultValue?: string
}

const Search = ({onSearch, defaultValue}: PokemonSearchProps) => {
  return (
    <Input
      placeholder={'Search for Pokemon'}
      defaultValue={defaultValue}
      onChangeText={search => onSearch(search)}
      InputLeftElement={
        <NbIcon as={<Icon name="search" />} size={5} ml="2" color="muted.400" />
      }
    />
  )
}

export default Search
