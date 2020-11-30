import { bringRivalPokemon } from './data.js';
import data from './data/pokemon/pokemon.js';

const pokemons = data.pokemon;
const pokemonNameInput = document.getElementById("pokemon-name-input")
const pokemonImg = document.getElementById("img-pokemon");
const pokemonName = document.getElementById("name-poke");
const pokemonType = document.getElementById("type-pokemon");
const pokemonResistant = document.getElementById("resistant-pokemon");
const pokemonWeaknesses = document.getElementById("weaknesses-pokemon");
const searchPokemon = document.getElementById("search-pokemon-btn");

searchPokemon.addEventListener("click", searchRival)

function searchRival(event) {
  event.preventDefault();
  const bringPokemon = bringRivalPokemon(pokemons, pokemonNameInput);


pokemonImg.innerHTML = `<img src="${bringPokemon.image}"></img>`
pokemonName.innerHTML = `Nome: <span class="name-uppercase">${bringPokemon.name}</span>`
pokemonType.innerHTML = `Tipo(s): <span class="type-uppercase"> ${bringPokemon.type}</span>`
pokemonResistant.innerHTML = `Resistência(s): <span class="resistant-uppercase"> ${bringPokemon.resistant}</span>`
pokemonWeaknesses.innerHTML = `Fraqueza(s): <span class="weaknesses-uppercase"> ${bringPokemon.weaknesses}</span>`
};