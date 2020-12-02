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
      };
    }
  }
}

// TESTE UNITÁRIO



