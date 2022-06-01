import useSWR from 'swr'
import {Pokemon} from '../types'
import {fetcher} from '../fetcher'
import {
  Center,
  HStack,
  IconButton,
  Image,
  Spinner,
  Text,
  useTheme,
} from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'
import React from 'react'
import {useStorage} from '../storage'

export interface PokemonEntryProps {
  url: string
}

// TODO: Parse id from url and use it as key

const PokemonEntry = ({url}: PokemonEntryProps) => {
  const theme = useTheme()
  const [favorites, setFavorites] = useStorage<Array<string>>('favorites', [])

  const {data} = useSWR<Pokemon>(url, fetcher)

  if (!data) {
    return (
      <Center>
        <Spinner />
      </Center>
    )
  }

  return (
    <HStack
      borderBottomWidth={1}
      background={'gray.50'}
      borderColor={'gray.200'}
      justifyContent={'flex-start'}
      shadow={1}
      alignItems={'center'}>
      <Image
        source={{uri: data.sprites.front_default}}
        size={24}
        alt={data.name}
      />
      <Text
        fontSize={'lg'}
        textTransform={'capitalize'}
        mr={4}
        color={'muted.400'}>
        #{data.id}
      </Text>
      <Text fontSize={'lg'} textTransform={'capitalize'} flex={4}>
        {data.name}
      </Text>
      <IconButton
        flex={1}
        icon={
          <Icon
            name={favorites.includes(url) ? 'favorite' : 'favorite-outline'}
            size={32}
            color={theme.colors.rose['500']}
          />
        }
        color={'emerald.500'}
        onPress={() => favorites.includes(url) ? setFavorites(favorites.filter(f => f !== url)) : setFavorites([...favorites, url])}
      />
    </HStack>
  )
}

export default PokemonEntry
