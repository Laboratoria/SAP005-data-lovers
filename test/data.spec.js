import { bringRivalPokemon, orderBestPokemonByCP, orderBestPokemonByName } from '../src/data.js';

const pokemonsTest = {
  pokemon: [{
    "name": "bulbasaur",
    "type": [
      "Grass",
      "Poison"
    ],
    "stats": {
      "max-cp": "1115"
    },
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ]
  },
  {
    "name": "charmander",
    "type": [
      "fire"
    ],
    "stats": {
      "max-cp": "980"
    },
    "weaknesses": [
      "water",
      "ground",
      "rock"
    ]
  },
  {
    "name": "weedle",
    "type": [
      "bug",
      "poison"
    ],
    "stats": {
      "max-cp": "456"
    },
    "weaknesses": [
      "fire",
      "flying",
      "psychic",
      "rock"
    ],
  },  
] 
};

describe('Search pokemon by name', () => {
  it('should be a function', () => {
    expect(typeof bringRivalPokemon).toBe('function');
  });
  it('should return "bulbasaur" when search the pokemon by name "saur"', () => {
    const result = bringRivalPokemon(pokemonsTest.pokemon, "saur")
    expect(result[0].name).toEqual("bulbasaur")
  });
});

describe('Selecting pokemon by order growing and decreasing', () => {
  it('should return "bulbasaur", "charmander" and "weedle" by "crescentOrder" order', () => {
    const result = orderBestPokemonByCP(pokemonsTest.pokemon, "crescentOrder")
    expect(result).toEqual(pokemonsTest.pokemon)
  });
  it('should return "bulbasaur", "charmander" and "weedle" by "decrescentOrder" order', () => {
    const result = orderBestPokemonByCP(pokemonsTest.pokemon, "decrescentOrder")
    expect(result).toEqual(pokemonsTest.pokemon)
  });
})

describe('Selecting pokemon by order A-Z and Z-A', () => {
  it('should be a function', () => {
    expect(typeof orderBestPokemonByName).toBe('function');
  });
  it('should return "bulbasaur", "charmander" and "weedle" by "A-Z" order', () => {
    const result = orderBestPokemonByName(pokemonsTest.pokemon, "A_Z")
    expect(result).toEqual(pokemonsTest.pokemon)
  });
  it('should return "bulbasaur", "charmander" "weedle" by "Z-A" order', () => {
    const result = orderBestPokemonByName(pokemonsTest.pokemon, "Z_A")
    expect(result).toEqual(pokemonsTest.pokemon)
  });
})

/*describe('orderBestPokemonByCP é uma função?', () => {
  it('is a function', () => {
    expect(typeof orderBestPokemonByCP).toBe('function');
  });

  it('returns `types`', () => {
    expect(orderBestPokemonByCP()).toBe('types');
  });
});*/
