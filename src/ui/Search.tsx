import {Input, Icon as NbIcon} from 'native-base'
import React, { useState } from "react";
import Icon from 'react-native-vector-icons/MaterialIcons'

export interface SearchProps {
  onSearch: (search: string) => void
  defaultValue?: string
}

const Search = ({onSearch, defaultValue}: SearchProps) => {
  const [value, setValue] = useState(defaultValue || '')

  const onReset = () => {
    setValue('')
    onSearch('')
  }

  const onChange = (text: string) => {
    setValue(text)
    onSearch(text)
  }

  return (
    <Input
      placeholder={'Search for Pokemon'}
      value={value}
      onChangeText={onChange}
      InputLeftElement={
        <NbIcon as={<Icon name="search" />} size={5} ml="2" color="muted.400" />
      }
      InputRightElement={
        value.length > 0 ? <NbIcon as={<Icon name="close" />} size={5} mr="2" color="muted.400" onPress={onReset} /> : undefined
      }
    />
  )
}

export default Search
