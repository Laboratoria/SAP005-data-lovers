import pokemons from '../data/pokemon/pokemon.json';
import { getType, getName, getEvolution } from './data.js';

// function mostrarCards()


console.log("oi")
    //Mostrar todos os pokémons//

document.getElementById("types-menu").addEventListener('change', (e) => x(e.target.value))

document.getElementsByName("pokemon-name")[0].addEventListener('change', (e) => buscarPorNome(e.target.value))

document.getElementById("evolucao").addEventListener('click', evolution)


const filtrarTipo = (event) => {
    let typeArray = getType(pokemons, event);
    renderPokemon(typeArray)
}

document.getElementById("types-menu").addEventListener('change', (e) => filtrarTipo(e.target.value))

//Buscar por nome//
const buscarPorNome = (event) => {
    let typeArray = getName(pokemons, event);
    renderPokemon(typeArray)
}

document.getElementsByName("pokemon-name")[0].addEventListener('change', (e) => buscarPorNome(e.target.value))

//Evolucao//

function evolution() {
    let name = document.getElementById("poke-name").value;
    let pokemonEvolution = getEvolution(pokemons, name);
    renderPokemon(pokemonEvolution)

}

document.getElementById("evolucao").addEventListener('click', evolution)