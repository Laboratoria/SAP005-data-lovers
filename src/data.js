import data from "./data/pokemon/pokemon.js"

const pokemons = data.pokemon;

export function filterRivalPokemon(pokemons) {
  const searchInput = document.getElementById("search-input").value;

  for (const pokemon of pokemons) {
    const lowercaseUserInput = String(searchInput).toLowerCase();
    const acceptingUserInput = pokemon.name.includes(lowercaseUserInput);

    if (acceptingUserInput) {
      return pokemon
    }
  }
}

export function filterAllPokemonByType(pokemons) {
  let bugType = []; let dragonType = []; let fairyType = [];
  let fireType = []; let ghostType = []; let groundType = [];
  let normalType = []; let psychicType = []; let steelType = [];
  let darkType = []; let electricType = []; let fightingType = [];
  let flyingType = []; let grassType = []; let iceType = [];
  let poisonType = []; let rockType = []; let waterType = [];

  for (const pokemon of pokemons) {
    const pokemonType = pokemon.type;
    for (const type of pokemonType) {
      switch (type) {
        case 'bug':
          bugType.push(pokemon)
          break;
        case 'dragon':
          dragonType.push(pokemon)
          break;
        case 'fairy':
          fairyType.push(pokemon)
          break;
        case 'fire':
          fireType.push(pokemon)
          break;
        case 'ghost':
          ghostType.push(pokemon)
          break;
        case 'ground':
          groundType.push(pokemon)
          break;
        case 'normal':
          normalType.push(pokemon)
          break;
        case 'psychic':
          psychicType.push(pokemon)
          break;
        case 'steel':
          steelType.push(pokemon)
          break;
        case 'dark':
          darkType.push(pokemon)
          break;
        case 'electric':
          electricType.push(pokemon)
          break;
        case 'fighting':
          fightingType.push(pokemon)
          break;
        case 'flying':
          flyingType.push(pokemon)
          break;
        case 'grass':
          grassType.push(pokemon)
          break;
        case 'ice':
          iceType.push(pokemon)
          break;
        case 'poison':
          poisonType.push(pokemon)
          break;
        case 'rock':
          rockType.push(pokemon)
          break;
        case 'water':
          waterType.push(pokemon)
          break;
      }
    }
  }
  return {
    "bug": bugType,
    "dragon": dragonType,
    "fairy": fairyType,
    "fire": fireType,
    "ghost": ghostType,
    "ground": groundType,
    "normal": normalType,
    "psychic": psychicType,
    "steel": steelType,
    "dark": darkType,
    "electric": electricType,
    "fighting": fightingType,
    "flying": flyingType,
    "grass": grassType,
    "ice": iceType,
    "poison": poisonType,
    "rock": rockType,
    "water": waterType
  }
}

export function filterPokemonByRivalWeakness() {
  const rivalWeakness = filterRivalPokemon(pokemons).weaknesses;
  const pokemonByType = filterAllPokemonByType(pokemons)
  let bestChoices = [];

  for (const weakness of rivalWeakness) {
    for (const type in pokemonByType) {
      if (weakness == type) {
        bestChoices.push(...pokemonByType[type])
      }
    }
  }
  return bestChoices;
}