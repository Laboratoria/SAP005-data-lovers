import { bringRivalPokemon, orderBestPokemonByCP, orderBestPokemonByName } from './data.js';
import data from './data/pokemon/pokemon.js';

const pokemons = data.pokemon;
const pokemonImg = document.getElementById("img-pokemon");
const pokemonName = document.getElementById("name-poke");
const pokemonType = document.getElementById("type-pokemon");
const pokemonResistant = document.getElementById("resistant-pokemon");
const pokemonWeaknesses = document.getElementById("weaknesses-pokemon");
const searchPokemon = document.getElementById("search-pokemon-btn");
const pokemonNum = document.getElementById("num-pokemon");
const orderByCPCresc = document.getElementById("btn-cp-crescent");
const orderByCPDecresc = document.getElementById("btn-cp-decrescent");
const orderByNameA_Z = document.getElementById("btn-a-z");
const orderByNameZ_A = document.getElementById("btn-z-a");
const pokemonTableRow = document.querySelector(".pokemon-table-row");

// TABELA DE POkÉMONS VANTAJOSOS
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

searchPokemon.addEventListener("click", searchRival)
function searchRival(event) {
  event.preventDefault();
  document.getElementById("flex-container").className = "";
  document.getElementById("ordering-options").classList.remove("hidden")
  document.getElementById("table-section").classList.remove("hidden")
  const bringPokemon = bringRivalPokemon(pokemons);

  // EXIBIR CARD
  pokemonImg.innerHTML = `<img src="${bringPokemon.img}"></img>`
  pokemonNum.innerHTML = `Número: ${bringPokemon.num}`
  pokemonName.innerHTML = `Nome: <span class="name-uppercase">${bringPokemon.name}</span>`
  pokemonType.innerHTML = `Tipo(s): <span class="type-uppercase"> ${bringPokemon.type.join(", ")}</span>`
  pokemonResistant.innerHTML = `Resistência(s): <span class="resistant-uppercase"> ${bringPokemon.resistant.join(", ")}</span>`
  pokemonWeaknesses.innerHTML = `Fraqueza(s): <span class="weaknesses-uppercase"> ${bringPokemon.weaknesses.join(", ")}</span>`

  // EXIBIR TABELA PADRÃO
  pokemonTableRow.innerHTML = showTable(orderBestPokemonByCP().decrescentOrder);
}

// TABELA COM ORDENAÇÃO DE CP
// CRESCENTE
orderByCPCresc.addEventListener("click", event => {
  event.preventDefault();
  pokemonTableRow.innerHTML = showTable(orderBestPokemonByCP().crescentOrder);
})

// DECRESCENTE
orderByCPDecresc.addEventListener("click", event => {
  event.preventDefault();
  pokemonTableRow.innerHTML = showTable(orderBestPokemonByCP().decrescentOrder);
})

// TABELA COM ORDENAÇÃO DE NOME
// A-Z
orderByNameA_Z.addEventListener("click", event => {
  event.preventDefault();
  pokemonTableRow.innerHTML = showTable(orderBestPokemonByName().A_Z);
})

// Z-A
orderByNameZ_A.addEventListener("click", event => {
  event.preventDefault();
  pokemonTableRow.innerHTML = showTable(orderBestPokemonByName().Z_A);
})