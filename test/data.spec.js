import { bringRivalPokemon, filterAllPokemonByType, orderBestPokemonByCP } from '../src/data.js';
const pokemonsTest = {
  "pokemon": [
    {
      "name": "bulbasaur",
      "type": [
        "grass",
        "poison"
      ],
      "stats": {
        "base-attack": "118",
        "base-defense": "111",
        "max-cp": "1115",
      },
      "name": "charizard",
      "type": [
        "fire",
        "flying"
      ],
      "stats": {
        "base-attack": "223",
        "base-defense": "173",
        "base-stamina": "186",
        "max-cp": "2889",
        "max-hp": "158"
      },
      "resistant": [
        "fire",
        "grass",
        "fighting",
        "bug",
        "steel"
      ],
      "weaknesses": [
        "water",
        "electric",
        "rock"
      ],
    }
  ]
};




describe('Search a pokemon by name', () => {
  it('should be a function', () => {
    expect(typeof bringRivalPokemon).toBe('function');
  });
  it('should return "Bulbasaur" when search the pokemon by name "bul"', () => {
    const result = bringRivalPokemon(pokemonsTest.pokemon, "bul")
    expect(result[0].name).toEqual("Bulbasaur")
  });
});

/*describe('filterAllPokemonByType é uma função?', () => {
  it('is a function', () => {
    expect(typeof filterAllPokemonByType).toBe('function');
  });

  it('Mensagem de erro para número', () => {
    expect(() => filterAllPokemonByType())
  })
  

  it('retuns tipos de pokemons', () => {
    expect(filterAllPokemonByType()).toBe(types);
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
