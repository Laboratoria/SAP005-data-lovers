import data from '../data/pokemon/pokemon.js';
import { getType, getName, getEvolution } from './data.js';

document.getElementById("nome").addEventListener('click', (e) => x(e.target.value))
document.getElementById("evolucao").addEventListener('click', evolution)

function todosPokemons(anyArray) {
    let pokemonsDiv = document.getElementById("pokemons-cards");
    pokemonsDiv.className = "pokemonsDiv";
    pokemonsDiv.innerHTML = `
     ${anyArray.map((pokemon) => `
     <div class="cards" id="pokemons-cards">
         <img src="${pokemon["img"]}" class="pokemon-img" id="img-poke" />
         <p>${pokemon["name"]}</p>
         <p>${pokemon["num"]}</p>
         <p>${pokemon["type"]}</p>
         <p>${pokemon["resistant"]}</p>
     </div>
   `).join("")}
      `
  } 
todosPokemons(data.pokemon);

// Buscar por tipo //
const filtrarTipo = (event) => {
    let typeArray = getType(data, event);
    todosPokemons(typeArray)
}



document.getElementById("tipo").addEventListener('click', (e) => filtrarTipo(e.target.value))

//Buscar por nome//
const buscarPorNome = (event) => {
    let typeArray = getName(data, event);
    renderPokemon(typeArray)
}
console.log(buscarPorNome)

document.getElementById("nome").addEventListener('click', (e) => buscarPorNome(e.target.value))

//Buscar por evolucao//

function evolution() {
    let name = document.getElementById("nome").value;
    let pokemonEvolution = getEvolution(data, name);
    renderPokemon(pokemonEvolution)

}

document.getElementById("tipo").onclick = ()  => {
    console.log("passeieAqui")
}