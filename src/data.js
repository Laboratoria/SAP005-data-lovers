import data from "./data/pokemon/pokemon.js"

const pokemons = data.pokemon;

export const filterRivalPokemon = (pokemons, userInput) => {
  for (const pokemon of pokemons) {
    const lowercaseUserInput = String(userInput.value).toLowerCase();
    const acceptingUserInput = pokemon.name.includes(lowercaseUserInput);

    if (acceptingUserInput) {
      return {
        "number": pokemon.num,
        "name": pokemon.name,
        "image": pokemon.img,
        "type": pokemon.type,
        "weakness": pokemon.weaknesses,
        "attack": pokemon.stats["base-attack"],
        "defense": pokemon.stats["base-defense"],
        "stamina": pokemon.stats["base-stamina"],
        "cp": pokemon.stats["max-cp"],
        "hp": pokemon.stats["max-hp"],
      }
    }
  }
};

const rivalWeaknessArray = (pokemons, userInput) => {
  const rivalPokemon = filterRivalPokemon(pokemons, userInput);

  return rivalPokemon.weakness;
}

const pokemonTypeArray = () => {
  for (const pokemon of pokemons) {
    return pokemon.type
  }
}

const filterBestChoicesByType = () => {
  rivalWeaknessArray.filter(type => {
    pokemonTypeArray.includes(type)
  })
}

// export const filterBestChoicesByType = (pokemons, userInput) => {
//   const rivalPokemon = filterRivalPokemon(pokemons, userInput)
//   // const rivalWeakness = () => {
//   //   for (const weakness of rivalPokemon.weaknesses) {
//   //     return weakness
//   //   }
//   // }

//   const pokemonType = () => {
//     for (const pokemon in pokemons) {
//       return pokemon.type
//     }
//   }

//   for (const weakness in rivalPokemon.weaknesses) {
//     for (const type in pokemonType) {
//       if (weakness === type) {
//         return pokemon
//       }
//     }
//   }

// }