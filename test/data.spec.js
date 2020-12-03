import { example, anotherExample, bringRivalPokemon } from '../src/data.js';
const pokemons = {
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


describe('bringRivalPokemon é uma função?', () => {
  it('is a function', () => {
    expect(typeof bringRivalPokemon).toBe('function');
  });

  it('returns `["name", "num", "image", "type", "resistant", "weaknesses"]`', () => {
    expect(bringRivalPokemon()).toBe('["name", "num", "image", "type", "resistant", "weaknesses"]');
  });
});

describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
