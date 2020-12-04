import data from './pokemon.js';
import {selectType, searchByName, orderBy} from './data.js'

const pokemons = data.pokemon;
const cardPokemon = document.getElementById("card");


function cardsPokemon(pokemonArray) {
    let cards = "";
    pokemonArray.forEach(pokemonAtual => {
        const types = pokemonAtual.type;
        cards +=
            `<li class="card ${types[0]}">
            <img class="card-image " alt="${pokemonAtual.name}" src="https://www.serebii.net/pokemongo/pokemon/${pokemonAtual.num}.png" />
            <h2 class="card-title"> ${pokemonAtual.num}. ${pokemonAtual.name} </h2>
            <p class="card-subtitle" id="card-subtitle">${pokemonAtual.size.height} | ${pokemonAtual.size.weight} </p>
            <p class="card-subtitle2" id="card-subtitle2">${types.join(' | ')} </p>
            <p class="card-subtitle" id="card-subtitle">${pokemonAtual.generation.name} </p>
            </li>`;

    });
    cardPokemon.innerHTML = cards;
}

cardsPokemon(pokemons);

// Filtros pro select (pré-prontos)

const filterSelectType = document.querySelector("#filter-type");

filterSelectType.addEventListener("change", () => {
    const filterType = filterSelectType.value;
    const arrayFiltered = selectType(filterType, data.pokemon);
    cardsPokemon(arrayFiltered);
})

// Filtro de ordem select

const filterSelectOrder = document.querySelector("#order-search");

filterSelectOrder.addEventListener("change", (event) => {
    const orderType = event.target.value;
    const arrayOrdered = orderBy(orderType, data.pokemon);
    cardsPokemon(arrayOrdered);
})

// Filtro por input (texto) de nome

const filterInputType = document.querySelector("#search-input");

filterInputType.addEventListener("change", () => {
    const filterName = filterInputType.value;
    const arrayFiltered = searchByName(filterName, data.pokemon);
    cardsPokemon(arrayFiltered);
})

filterInputType.addEventListener("keyup", (event) => {

    if (event.keyCode === 13) {
        event.preventDefault();
    }

    const filterName = event.target.value;
    const arrayFiltered = searchByName(filterName, data.pokemon);
    cardsPokemon(arrayFiltered);

})

