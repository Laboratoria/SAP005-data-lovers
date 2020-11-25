//import { pokemonName } from './data.js';
import data from './data/pokemon/pokemon.js';

const searchPokemon = document.getElementById("search-pokemon-btn");

searchPokemon.addEventListener("click", searchRival)

function searchRival(event) {
  event.preventDefault();
  const bringInformation = document.getElementById("name-pokemon").value;
  console.log(bringInformation)
}

/*const  pokemon = 
for (pokemon of pokemons) {
    console.log(pokemon.name);
}*/


/*const div = document.querySelector("#card");

for (let infoPokemon of data.pokemon) {
    let card = ""
    Nome: ${infoPokemon.name}
    <img src="${infoPokemon.img}"></img>
    Tipo: ${infoPokemon.type}
    Resistencia: ${infoPokemon.resistant}
    Fraqueza: ${infoPokemon.weaknesses}
    div.insertAdjacentHTML("afterbegin", card);

    console.log(infoPokemon);
}