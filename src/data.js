export const filterRivalPokemon = (pokemons, getSearchInput) => {
  for (const pokemon of pokemons) {
    if (pokemon.name == getSearchInput.value) {
      return {
        "number": pokemon.num,
        "name": pokemon.name,
        "image": pokemon.img,
        "type": pokemon.type
      };
    }
  }
}
// export const filterBestPokemonByType = pokemons => {
//   for (const pokemon of pokemons) {

//   }
// }