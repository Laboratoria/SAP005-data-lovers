import data from "./data/pokemon/pokemon.js"

const pokemons = data.pokemon;

export const filterRivalPokemon = (pokemons, userInput) => {
  for (const pokemon of pokemons) {
    const lowercaseUserInput = String(userInput.value).toLowerCase();
    const acceptingUserInput = pokemon.name.includes(lowercaseUserInput);

    if (acceptingUserInput) {
      return pokemon
    }
  }
};

export const rivalWeaknessArray = (pokemons, userInput) => {
  const rivalPokemon = filterRivalPokemon(pokemons, userInput);

  return rivalPokemon.weakness;
}
