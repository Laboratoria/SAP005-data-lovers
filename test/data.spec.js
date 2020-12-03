import { bringRivalPokemon, filterAllPokemonByType, orderBestPokemonByCP } from '../src/data.js';
/*const pokemons = {
  "num": "001",
  "name": "bulbasaur",
  "type": [
    "grass",
    "poison"
  ],
  "stats": {
    "base-attack": "118",
    "base-defense": "111",
    "base-stamina": "128",
    "max-cp": "1115",
    "max-hp": "113"
  },
  "resistant": [
    "water",
    "electric",
    "grass",
    "fighting",
    "fairy"
  ],
  "weaknesses": [
    "fire",
    "ice",
    "flying",
    "psychic"
  ],
}
*/


describe('bringRivalPokemon é uma função?', () => {
  it('is a function', () => {
    expect(typeof bringRivalPokemon).toBe('function');
  });

 /* test('onPress gets called with the right thing', () => {
    const bringRivalPokemon = jest.fn();
    simulatePresses(bringRivalPokemon);
    expect(bringRivalPokemon).toBeCalledWith(
      expect.objectContaining({
        "name": pokemon.name,
        "num": pokemon.num,
        "image": pokemon.img,
        "type": pokemon.type,
        "resistant": pokemon.resistant,
        "weaknesses": pokemon.weaknesses  
      }),
    );
  });
}); */

describe('filterAllPokemonByType é uma função?', () => {
  it('is a function', () => {
    expect(typeof filterAllPokemonByType).toBe('function');
  });

  it('returns `types`', () => {
    expect(filterAllPokemonByType(pokemons)).toBe('types');
  });
});

describe('orderBestPokemonByCP é uma função?', () => {
  it('is a function', () => {
    expect(typeof orderBestPokemonByCP).toBe('function');
  });

  it('returns `types`', () => {
    expect(orderBestPokemonByCP()).toBe('types');
  });
});
