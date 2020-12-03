import { bringRivalPokemon } from './data.js';
import data from './data/pokemon/pokemon.js';

// SEARCH POKEMON RIVAL

const pokemons = data.pokemon;
const pokemonNameInput = document.getElementById("pokemon-name-input");
const pokemonImg = document.getElementById("img-pokemon");
const pokemonName = document.getElementById("name-poke");
const pokemonType = document.getElementById("type-pokemon");
const pokemonResistant = document.getElementById("resistant-pokemon");
const pokemonWeaknesses = document.getElementById("weaknesses-pokemon");
const searchPokemon = document.getElementById("search-pokemon-btn");
const pokemonNum = document.getElementById("num-pokemon");

searchPokemon.addEventListener("click", searchRival)

function searchRival(event) {
  event.preventDefault();
  const bringPokemon = bringRivalPokemon(pokemons, pokemonNameInput);
  document.getElementById("flex-container").className = "";

// CARD

pokemonImg.innerHTML = `<img src="${bringPokemon.image}"></img>`
pokemonNum.innerHTML = `Número: ${bringPokemon.num}`
pokemonName.innerHTML = `Nome: <span class="name-uppercase">${bringPokemon.name}</span>`
pokemonType.innerHTML = `Tipo(s): <span class="type-uppercase"> ${bringPokemon.type}</span>`
pokemonResistant.innerHTML = `Resistência(s): <span class="resistant-uppercase"> ${bringPokemon.resistant}</span>`
pokemonWeaknesses.innerHTML = `Fraqueza(s): <span class="weaknesses-uppercase"> ${bringPokemon.weaknesses}</span>`
}
import { filterRivalPokemon, orderBestPokemonByCP } from './data.js';

const searchButton = document.getElementById("search-btn");
const pokemonTableRow = document.querySelector(".pokemon-table-row");


// BUSCA DO POKÉMON RIVAL
searchButton.addEventListener("click", event => {
  event.preventDefault();
  // const rivalPokemon = filterRivalPokemon(pokemons)
  const bestPokemonByDecrescentCP = orderBestPokemonByCP().decrescentOrder

  // CARD DO POKÉMON RIVAL



  // TABELA DE POKÉMONS VANTAJOSOS
  function showTable(pokemonArray) {
    let row = ""
    for (let pokemon of pokemonArray) {
      row += `
        <tr>
          <td>
            <span class="pokemon-name">${pokemon.name}</span>
            <img class="pokemon-img" src="${pokemon.img}">
          </td>
          <td>${pokemon.num}</td>
          <td>${pokemon.type.join(", ")}</td>
          <td class="pokemon-resistance">${pokemon.resistant.join(", ")}</td>
          <td>${pokemon.stats["max-cp"]}</td>
          <td>${pokemon.stats["base-attack"]}</td>
          <td>${pokemon.stats["base-defense"]}</td>
        </tr>
      `
    }
    return row
  }


  pokemonTableRow.innerHTML = showTable(bestPokemonByDecrescentCP)

  // console.log(orderBestPokemonByCP())
})
