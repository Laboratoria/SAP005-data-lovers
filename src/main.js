import data from './data/pokemon/pokemon.js';
import { filterRivalPokemon, orderBestPokemonByCP } from './data.js';

const pokemons = data.pokemon;
const searchButton = document.getElementById("search-btn");
const pokemonTable = document.getElementById("pokemon-table");


// BUSCA DO POKÉMON RIVAL
searchButton.addEventListener("click", event => {
  event.preventDefault();
  const rivalPokemon = filterRivalPokemon(pokemons)

  // CARD DO POKÉMON RIVAL


  // TABELA DE POKÉMONS VANTAJOSOS
  pokemonTable.innerHTML = `
    Nome: ${rivalPokemon.name} <br>
    Fraqueza: ${rivalPokemon.weaknesses}
  `

  // console.log(orderBestPokemonByCP())
})