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