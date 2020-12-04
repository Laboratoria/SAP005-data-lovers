import { bringRivalPokemon } from '../src/data.js';
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
      
        "name": "Ivysaur",
        "type": [
          "Grass",
          "Poison"
        ],
        "height": "0.99 m",
        "spawn_chance": 0.042,
        "weaknesses": [
          "Fire",
          "Ice",
          "Flying",
          "Psychic"
        ]
      
    }
  ]
};

/*describe('Search pokemon by name', () => {
  it('should be a function', () => {
    expect(typeof bringRivalPokemon).toBe('function');
  });
  it('should return "Bulbasaur" when search the pokemon by name "bul"', () => {
    const result = bringRivalPokemon(pokemonsTest.pokemon, "bul")
    expect(result[0].name).toEqual("Bulbasaur")
  });
});*/

describe('Selecting pokemon by order', () => {
  it('should be a function', () => {
    expect(typeof orderBestPokemonByName).toBe('function');
  });
  it('should return "Bulbasaur" and "Ivysaur" by "A-Z" order', () => {
    const result = orderBestPokemonByName(pokemonsTest.pokemon, "A_Z")
    expect(result).toEqual(pokemonsTest.pokemon)
  });
  it('should return "Bulbasaur" and "Ivysaur" by "Z-A" order', () => {
    const result = orderBestPokemonByName(pokemonsTest.pokemon, "Z_A")
    expect(result).toEqual(pokemonsTest.pokemon)
  });

/*describe('orderBestPokemonByCP é uma função?', () => {
  it('is a function', () => {
    expect(typeof orderBestPokemonByCP).toBe('function');
  });

  it('returns `types`', () => {
    expect(orderBestPokemonByCP()).toBe('types');
  });
});*/
