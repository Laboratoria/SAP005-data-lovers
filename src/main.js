import { bringRivalPokemon } from './data.js';
import data from './data/pokemon/pokemon.js';

const pokemons = data.pokemon;
const namePokemonInput = document.getElementById("name-pokemon-input")
const pokemonImg = document.getElementById("img-pokemon");
const pokemonName = document.getElementById("name-poke");
const pokemonType = document.getElementById("type-pokemon");
const pokemonResistante = document.getElementById("resistant-pokemon");
const pokemonWeaknesses = document.getElementById("weaknesses-pokemon");
const searchPokemon = document.getElementById("search-pokemon-btn");

searchPokemon.addEventListener("click", searchRival)

function searchRival(event) {
  event.preventDefault();
  const bringPokemon = bringRivalPokemon(pokemons, namePokemonInput);


pokemonImg.innerHTML = `<img src="${bringPokemon.image}"></img>`
pokemonName.innerHTML = `Nome <span class="first-uppercase">${bringPokemon.name}</span>`
pokemonType.innerHTML = `Tipo: ${bringPokemon.type}`
pokemonResistante.innerHTML = `Resistencias: ${bringPokemon.resistant}`
pokemonWeaknesses = `Faquezas: ${bringPokemon.weaknesses}`
});