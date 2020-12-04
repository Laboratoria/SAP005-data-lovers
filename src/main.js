import data from './data/pokemon/pokemon.js';
const pokemons = data.pokemon;

const cardPokemon = document.getElementById("card");

function cardsPokemon() {
    let cards = "";
    pokemons.forEach(pokemonAtual => {
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
cardsPokemon();


const filterSelectType = document.querySelector("filter-type")
filterSelectType.addEventListener("chenge", () => {
    const filterType = filterSelectType.valeu;
    const displayType = selectType (filterType, data.pokemon);
    cardsPokemon (displayType);
})