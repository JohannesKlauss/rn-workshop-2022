import React from 'react'
import { useStorage } from "../storage";
import { Box, FlatList, View } from "native-base";
import PokemonEntry from "./PokemonEntry";

export interface FavoritesProps {}

const Favorites = ({}: FavoritesProps) => {
  const [favorites] = useStorage('favorites', [])

  return (
    <View>
      <Box p={4}>
        <FlatList
          height={'100%'}
          data={favorites}
          keyExtractor={key => key}
          renderItem={({item}: {item: string}) => (
            <PokemonEntry url={item} key={item} />
          )}
        />
      </Box>
    </View>
  )
}

export default Favorites
