import useSWR from 'swr'
import {fetcher} from '../fetcher'
import {SpeciesResult} from '../types'
import {matchSorter} from 'match-sorter'

export default function useSearchPokemon(searchString: string) {
  const {data} = useSWR<SpeciesResult>(
    'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151',
    fetcher,
  )

  if (data && searchString.length > 2) {
    return matchSorter(data.results, searchString, {keys: ['name']})
  }

  return data ? data.results : []
}
