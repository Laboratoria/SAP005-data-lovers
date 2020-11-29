import data from './data/pokemon/pokemon.js';
import { filterRivalPokemon, filterPokemonByType } from './data.js';

// LEMBRETE: a variável 'pokemons' é um ARRAY!
const pokemons = data.pokemon;
// console.log(pokemons)
const searchButton = document.getElementById("search-btn");
const getSearchInput = document.getElementById("search-input");
const pokemonTable = document.getElementById("pokemon-table");


// BUSCA DO POKÉMON RIVAL
searchButton.addEventListener("click", event => {
  const rivalPokemon = filterRivalPokemon(pokemons, getSearchInput)
  event.preventDefault();

  // CARD DO POKÉMON RIVAL


  // TABELA DE POKÉMONS VANTAJOSOS
  pokemonTable.innerHTML = `
    Nome: ${rivalPokemon.name} <br>
    Fraqueza: ${rivalPokemon.weaknesses}
  `

  const rivalWeaknesses = rivalPokemon.weaknesses;

});