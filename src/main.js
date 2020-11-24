import { example } from './data.js';
import data from './data/pokemon/pokemon.js';

const searchButton = document.getElementById("search-btn");

searchButton.addEventListener("click", SearchPokemon);

function SearchPokemon(event) {
  event.preventDefault();
  
  const getSearchInput = document.getElementById("search-input").value;
  
}
