import { namePokemonInput } from './main.js'

const pokemons = data.pokemon;

export const bringRivalPokemon = (pokemons, namePokemonInput) => {
  for (const pokemon of pokemons) {
    const lowercaseUserInput = String(namePokemonInput.value).toLowerCase()
    const acceptingUserInput = pokemon.name.includes(lowercaseUserInput)

    if (acceptingUserInput) {
      return pokemon
    }
  }
};

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
  const rivalWeakness = bringRivalPokemon(pokemons, namePokemonInput).weaknesses
  const pokemonByType = filterAllPokemonByType(pokemons)
  let bestPokemon = []

  for (const weakness of rivalWeakness) {
    for (const type in pokemonByType) {
      if (weakness == type) {
        bestPokemon.push(...pokemonByType[type])
      }
    }
  }
  return Array.from(new Set (bestPokemon));
}

export const orderBestPokemonByCP = () => {
  const crescentOrder = filterPokemonByRivalWeakness()
  const decrescentOrder = filterPokemonByRivalWeakness()

  function comparisonByCP(pokemonA, pokemonB) {
    const pokemonA_CP = pokemonA.stats["max-cp"]
    const pokemonB_CP = pokemonB.stats["max-cp"]

    return pokemonA_CP.localeCompare(pokemonB_CP, undefined, { numeric: true })
  }
  crescentOrder.sort(comparisonByCP)
  decrescentOrder.sort(comparisonByCP).reverse();

  return { crescentOrder, decrescentOrder }
}

export const orderBestPokemonByName = () => {
  const A_Z = filterPokemonByRivalWeakness()
  const Z_A = filterPokemonByRivalWeakness()

  function comparisonByName(pokemon1, pokemon2) {
    const pokemon1Name = pokemon1.name;
    const pokemon2Name = pokemon2.name;

    return pokemon1Name.localeCompare(pokemon2Name)
  }
  A_Z.sort(comparisonByName)
  Z_A.sort(comparisonByName).reverse();

  return { A_Z, Z_A }
}