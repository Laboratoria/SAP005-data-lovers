// import { example } from './data.js';
// import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';

const pokemons = data.pokemon;
const searchButton = document.getElementById("search-btn");
const getSearchInput = document.getElementById("search-input");
const pokemonTable = document.getElementById("pokemon-table");

searchButton.addEventListener("click", SearchPokemon);

function SearchPokemon(event) {
  event.preventDefault();
  for (const pokemon of pokemons) {
    if (pokemon.name == getSearchInput.value) {
      return pokemon;
    }
  }
}



// LEMBRETE: a variável pokemons é um ARRAY!
// TABELA



