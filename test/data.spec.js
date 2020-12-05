import { bringRivalPokemon, filterAllPokemonByType, filterPokemonByRivalWeakness, orderBestPokemonByCP, orderBestPokemonByName } from '../src/data.js';
import { pokemons } from './mock.js';

describe('bringRivalPokemon:', () => {
  it('should be a function', () => {
    expect(typeof bringRivalPokemon).toBe('function')
  })

  it('should return the object of the pokémon Bulbasaur if the input is "bulb"', () => {
    expect(bringRivalPokemon(pokemons, "bulb")).toStrictEqual(pokemons[0])
  })

  it('should return the object of the pokémon Cindaquil if the input is "aqui"', () => {
    expect(bringRivalPokemon(pokemons, "aqui")).toStrictEqual(pokemons[2])
  })
});

describe('filterAllPokemonByType:', () => {
  it('should be a function', () => {
    expect(typeof filterAllPokemonByType).toBe('function')
  })

  it('should return the object "types" with the types of pokémon inside each array', () => {
    expect(filterAllPokemonByType(pokemons)).toStrictEqual(
      {
        bug: [pokemons[4], pokemons[10]],
        dragon: [pokemons[7]],
        fairy: [pokemons[8]],
        fire: [pokemons[1], pokemons[2]],
        ghost: [pokemons[9]],
        ground: [pokemons[3]],
        normal: [pokemons[8]],
        psychic: [pokemons[5]],
        steel: [pokemons[10]],
        dark: [pokemons[11], pokemons[13]],
        electric: [pokemons[6]],
        fighting: [pokemons[12]],
        flying: [pokemons[1]],
        grass: [pokemons[0]],
        ice: [pokemons[13]],
        poison: [pokemons[0], pokemons[4], pokemons[9]],
        rock: [pokemons[3], pokemons[11]],
        water: [pokemons[6]],
      }
    )
  })
});

describe('filterPokemonByRivalWeakness:', () => {
  it('should be a function', () => {
    expect(typeof filterPokemonByRivalWeakness).toBe('function')
  })

  it('should return the pokémons Bulbasaur and Onix when the user input is "lanturn"', () => {
    expect(filterPokemonByRivalWeakness(pokemons, "lanturn")).toStrictEqual([pokemons[0], pokemons[3]])
  })

  it('should return the pokémons Charizard and Cyndaquil when the user input is "forretress"', () => {
    expect(filterPokemonByRivalWeakness(pokemons, "forretress")).toStrictEqual([pokemons[1], pokemons[2]])
  })
});

describe('orderBestPokemonByCP:', () => {
  it('should be a function', () => {
    expect(typeof orderBestPokemonByCP).toBe('function')
  })

  it('should return the pokémons in crescent and decrescent order by CP', () => {
    expect(orderBestPokemonByCP(pokemons, "drowzee")).toStrictEqual(
      {
        crescentOrder: [pokemons[13], pokemons[4], pokemons[10], pokemons[9], pokemons[11]],
        decrescentOrder: [pokemons[11], pokemons[9], pokemons[10], pokemons[4], pokemons[13]]
      }
    )
  })
})

describe('orderBestPokemonByName:', () => {
  it('should be a function', () => {
    expect(typeof orderBestPokemonByName).toBe('function')
  })

  it('should return the pokémons in A-Z and Z-A alphabetical order by name', () => {
    expect(orderBestPokemonByName(pokemons, "drowzee")).toStrictEqual(
      {
        A_Z: [pokemons[10], pokemons[9], pokemons[13], pokemons[11], pokemons[4]],
        Z_A: [pokemons[4], pokemons[11], pokemons[13], pokemons[9], pokemons[10]]
      }
    )
  })
})