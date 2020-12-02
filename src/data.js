import data from "./data/pokemon/pokemon.js"

const pokemons = data.pokemon

export function filterRivalPokemon(pokemons) {
  const searchInput = document.getElementById("search-input").value

  for (const pokemon of pokemons) {
    const lowercaseUserInput = String(searchInput).toLowerCase()
    const acceptingUserInput = pokemon.name.includes(lowercaseUserInput)

    if (acceptingUserInput) {
      return pokemon
    }
  }
}

export function filterAllPokemonByType(pokemons) {
  const types = {
    bug: [],
    dragon: [],
    fairy: [],
    fire: [],
    ghost: [],
    ground: [],
    normal: [],
    psychic: [],
    steel: [],
    dark: [],
    electric: [],
    fighting: [],
    flying: [],
    grass: [],
    ice: [],
    poison: [],
    rock: [],
    water: [],
  }

  for (const pokemon of pokemons) {
    const pokemonType = pokemon.type
    for (const type of pokemonType) {
      types[type].push(pokemon)
    }
  }
  return types
}

export function filterPokemonByRivalWeakness() {
  const rivalWeakness = filterRivalPokemon(pokemons).weaknesses
  const pokemonByType = filterAllPokemonByType(pokemons)

  let bestPokemon = []

  for (const weakness of rivalWeakness) {
    for (const type in pokemonByType) {
      if (weakness == type) {
        bestPokemon.push(...pokemonByType[type])
      }
    }
  }
  return bestPokemon;
}

export function orderBestPokemonByCP() {
  const bestPokemonCrescent = filterPokemonByRivalWeakness()
  const bestPokemonDecrescent = filterPokemonByRivalWeakness()

  function compareBestPokemonByCP(pokemonA, pokemonB) {
    const pokemonA_CP = pokemonA.stats["max-cp"]
    const pokemonB_CP = pokemonB.stats["max-cp"]

    return pokemonA_CP.localeCompare(pokemonB_CP, undefined, { numeric: true })
  }
  bestPokemonCrescent.sort(compareBestPokemonByCP)
  bestPokemonDecrescent.sort(compareBestPokemonByCP).reverse();

  return { bestPokemonCrescent, bestPokemonDecrescent }
}