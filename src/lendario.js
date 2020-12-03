import pokemon from './data.js';

import data from './data/pokemon/pokemon.js';



const lendarios = pokemon.filtrarLendarios(data)
function geraCards(arrayPokemons) {
  let card = ""
  for (let pokemon of arrayPokemons) {
    card += `
        <article class="divcardlendario">

        <p class="num">${pokemon.num}</p>
        <p class="name">${pokemon.name}</p>
        <img src="${pokemon.img}">
        <p class="texto-card-lendario">About: ${pokemon.about}</p>
        <p class="texto-card-lendario">Height: ${pokemon.size.height}</p>
        <p class="texto-card-lendario">Height: ${pokemon.size.height}</p>
        <p class="texto-card-lendario">Weight: ${pokemon.size.weight}</p>
        <p class="texto-card-lendario">Type: ${pokemon.type}</p>
        <p class="texto-card-lendario">Weaknesses: ${pokemon.weaknesses}</p>
        <br>
        </article>`
  }
  return card
}

function exibeCards(arrayPokemon) {
  const cardsPokemon = document.getElementById("tabresult-lendario")
  cardsPokemon.innerHTML = ""
  cardsPokemon.innerHTML = geraCards(arrayPokemon)
}
exibeCards(lendarios)

