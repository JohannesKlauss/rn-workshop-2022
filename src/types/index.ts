export type Species = {
  name: string
  url: string
}

export type SpeciesResult = {
  count: number
  next: string
  previous: string
  results: Species[]
}

export type Pokemon = {
  id: string
  name: string
  species: {
    name: string
    url: string
  }
  sprites: {
    front_default: string
  }
  stats: {
    base_stat: number
    effort: number
    stat: {
      name: string
      url: string
    }
  }[]
  types: {
    type: {
      name: string
      url: string
    }
  }[]
}
