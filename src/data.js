export const bringRivalPokemon = (pokemons, namePokemonInput) => {
  for (const pokemon of pokemons) {
    if (pokemon.name == namePokemonInput.value) {
      return {        
        "name": pokemon.name,
        "num": pokemon.num,
        "image": pokemon.img,
        "type": pokemon.type,
        "resistant": pokemon.resistant,
        "weaknesses": pokemon.weaknesses      
      }
    }
  }
};



/* export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
}; */




import data from "./data/pokemon/pokemon.js"

const pokemons = data.pokemon;

export function filterRivalPokemon(pokemons) {
  const searchInput = document.getElementById("search-input").value

  for (const pokemon of pokemons) {
    const lowercaseUserInput = String(searchInput).toLowerCase()
    const acceptingUserInput = pokemon.name.includes(lowercaseUserInput)

    if (typeof acceptingUserInput) 
  
    return pokemon
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
  //return Array.from(new Set(bestPokemon)); // evita trazer pokemon repitido
}

export function orderBestPokemonByCP() {
  const crescentOrder = filterPokemonByRivalWeakness()
  const decrescentOrder = filterPokemonByRivalWeakness()

  function comparisonByCP(pokemonA, pokemonB) {  // compara os pokemons a, b
    const pokemonA_CP = pokemonA.stats["max-cp"]
    const pokemonB_CP = pokemonB.stats["max-cp"]

    return pokemonA_CP.localeCompare(pokemonB_CP, undefined, { numeric: true })
  }
  crescentOrder.sort(comparisonByCP) // sort coloca em ordem crescente
  decrescentOrder.sort(comparisonByCP).reverse();

  return { crescentOrder, decrescentOrder }
}
