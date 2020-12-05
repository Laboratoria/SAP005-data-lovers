import { bringRivalPokemon } from '../src/data.js';
import { data } from './mock.js';

describe('bringRivalPokemon', () => {
  it('should be a function', () => {
    expect(typeof bringRivalPokemon).toBe('function');
  });
  it('should return the object of the pokémon Bulbasaur if the input is "bulb"', () => {
    expect(bringRivalPokemon(data.pokemon, "bulb")).toStrictEqual(data.pokemon[0]);
  });
})