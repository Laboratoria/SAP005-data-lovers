import pokemon from '../src/data.js';
import data from '../src/data/pokemon/pokemon.js';
import { bulbasaurResult, lendarios, ordemCrescente, ordemDecrescente } from './tests_const.js'

describe('função pesquisaPokemon', () => {
  test('retorna pokemon encontrado', () => {
    expect(pokemon.pesquisaPokemon(data, 'bulbasaur')).toEqual(bulbasaurResult)
  })
  test('retorna pokemon não encontrado', () => {
    expect(() => pokemon.pesquisaPokemon(data, 'maria')).toThrowError(Error)
  })
})

describe('função filtrarLendarios', () => {
  test('retorna pokemons lendarios', () => {
    expect(pokemon.filtrarLendarios(data)).toEqual(lendarios)
  })
})

describe('função calculoAgregado', () => {
  test('retorna % de um numero', () => {
    expect(pokemon.calculoAgregado(data, lendarios)).toBe("3.6")
  })
})

describe('função ordenarPokemon', () => {
  test('retorna lista de pokemons em ordem crescente', () => {
    expect(pokemon.ordenarPokemon(data.pokemon, 'az')).toEqual(ordemCrescente)
  })
  test('retorna lista de pokemons em ordem decrescente', () => {
    expect(pokemon.ordenarPokemon(data.pokemon, 'za')).toEqual(ordemDecrescente)
  })
})