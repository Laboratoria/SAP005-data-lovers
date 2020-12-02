import data from './data/pokemon/pokemon.js';
import { filterRivalPokemon, orderBestPokemonByCP } from './data.js';

const pokemons = data.pokemon;
const searchButton = document.getElementById("search-btn");
const pokemonTableRow = document.querySelector(".pokemon-table-row");


// BUSCA DO POKÉMON RIVAL
searchButton.addEventListener("click", event => {
  event.preventDefault();
  // const rivalPokemon = filterRivalPokemon(pokemons)
  const best30PokemonByDecrescentCP = orderBestPokemonByCP().decrescentOrder.slice(0, 40)

  // CARD DO POKÉMON RIVAL



  // TABELA DE POKÉMONS VANTAJOSOS

  // dentro do LOOP
  function showTable(best30PokemonByDecrescentCP) {
    let row = ""
    for (let pokemon of best30PokemonByDecrescentCP) {
      row += `
        <tr>
          <td>${pokemon.num}</td>
          <td>${pokemon.name}
            <img class="pokemon-img" src="${pokemon.img}">
          </td>
          <td>${pokemon.type}</td>
          <td>${pokemon.resistant}</td>
          <td>${pokemon.stats["max-cp"]}</td>
          <td>${pokemon.stats["base-attack"]}</td>
          <td>${pokemon.stats["base-defense"]}</td>
        </tr>
      `
    }
    return row
  }


  pokemonTableRow.innerHTML = showTable(best30PokemonByDecrescentCP)

  // console.log(orderBestPokemonByCP())
})