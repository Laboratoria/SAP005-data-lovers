// import pokemon from './data/pokemon/pokemon.js';
import { filterRivalPokemon } from './data.js';
import data from './data/pokemon/pokemon.js';

// LEMBRETE: a variável 'pokemons' é um ARRAY!
const pokemons = data.pokemon;
const searchButton = document.getElementById("search-btn");
const getSearchInput = document.getElementById("search-input");
const pokemonTable = document.getElementById("pokemon-table");
const pokemonName = document.getElementById("pokemon-name")
const pokemonType = document.getElementById("pokemon-type")
const pokemonNumber = document.getElementById("pokemon-num")

// BUSCA DO POKÉMON RIVAL
searchButton.addEventListener("click", event => {
  event.preventDefault();
  const rivalPokemon = filterRivalPokemon(pokemons, getSearchInput)

  // EXIBIÇÃO DO NOME E TIPO DO POKÉMON RIVAL
  pokemonNumber.innerHTML = `Número: ${rivalPokemon.number}`
  pokemonName.innerHTML = `Nome: <span class="first-uppercase">${rivalPokemon.name}</span>`
  pokemonType.innerHTML = `Tipo(s): ${rivalPokemon.type}`
});

// TABELA