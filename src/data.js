
export const bringRivalPokemon = (pokemons, userInput) => {
  for (const pokemon of pokemons) {
    const lowercaseUserInput = String(userInput).toLowerCase()
    const acceptingUserInput = pokemon.name.includes(lowercaseUserInput)

    if (acceptingUserInput) {
      return pokemon
    }
  }
};

export const filterAllPokemonByType = pokemons => {
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

<<<<<<< HEAD

export function filterPokemonByRivalWeakness() { //função que tras a tabela
  const rivalWeakness = bringRivalPokemon(pokemons, namePokemonInput).weaknesses
=======
export const filterPokemonByRivalWeakness = (pokemons, userInput) => {
  const rivalWeakness = bringRivalPokemon(pokemons, userInput).weaknesses
>>>>>>> fae228ece152b68445dc3b0600f3370455e64189
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

<<<<<<< HEAD


export const orderBestPokemonByCP = () => {
  const crescentOrder = filterPokemonByRivalWeakness()
  const decrescentOrder = filterPokemonByRivalWeakness()
=======
export const orderBestPokemonByCP = (pokemons, userInput) => {
  const crescentOrder = filterPokemonByRivalWeakness(pokemons, userInput)
  const decrescentOrder = filterPokemonByRivalWeakness(pokemons, userInput)
>>>>>>> fae228ece152b68445dc3b0600f3370455e64189

  function comparisonByCP(pokemonA, pokemonB) {
    const pokemonA_CP = pokemonA.stats["max-cp"]
    const pokemonB_CP = pokemonB.stats["max-cp"]

    return pokemonA_CP.localeCompare(pokemonB_CP, undefined, { numeric: true })
  }
  crescentOrder.sort(comparisonByCP)
  decrescentOrder.sort(comparisonByCP).reverse();

  return { crescentOrder, decrescentOrder }
}

export const orderBestPokemonByName = (pokemons, userInput) => {
  const A_Z = filterPokemonByRivalWeakness(pokemons, userInput)
  const Z_A = filterPokemonByRivalWeakness(pokemons, userInput)

  function comparisonByName(pokemon1, pokemon2) {
    const pokemon1Name = pokemon1.name;
    const pokemon2Name = pokemon2.name;

    return pokemon1Name.localeCompare(pokemon2Name)
  }
  A_Z.sort(comparisonByName)
  Z_A.sort(comparisonByName).reverse();

  return { A_Z, Z_A }
}