import pokemons from '../data/pokemon/pokemon.js';
import { getType, getName, getEvolution } from './data.js';

// function cadaitem



console.log(pokemons)
    //Mostrar todos os pokémons//

// document.getElementById("types-menu").addEventListener('click', (e) => x(e.target.value, console.log(e)))
document.getElementById("types-menu").addEventListener('click', (e) => window.prompt("funcionou"))
    // document.getElementsByName("pokemon-name")[0].addEventListener('change', (e) => buscarPorNome(e.target.value))

// document.getElementById("evolucao").addEventListener('click', evolution)


// const filtrarTipo = (event) => {
//     let typeArray = getType(pokemons, event);
//     renderPokemon(typeArray)
// }

// document.getElementById("types-menu").addEventListener('change', (e) => filtrarTipo(e.target.value))

// //Buscar por nome//
// const buscarPorNome = (event) => {
//     let typeArray = getName(pokemons, event);
//     renderPokemon(typeArray)
// }

// document.getElementsByName("pokemon-name")[0].addEventListener('change', (e) => buscarPorNome(e.target.value))

// //Evolucao//

// function evolution() {
//     let name = document.getElementById("poke-name").value;
//     let pokemonEvolution = getEvolution(pokemons, name);
//     renderPokemon(pokemonEvolution)

// }

// document.getElementById("evolucao").addEventListener('click', evolution)