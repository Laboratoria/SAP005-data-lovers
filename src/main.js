import * as filtros from './data.js';
import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';

const pokemons = data.pokemon;
const container = document.getElementById('container-card-poke');

addEventListener('load', () => {
    carregar(pokemons);
});
//evento para trazer os dados. 
//Load é executado depois que o carregamento da página tenha sido concluído e o usuário possa visualizar todo o documento, ou seja, para carregar scripts com muitos dados.

function carregar(arrayDePokemons) {
    return getPoke(arrayDePokemons);
}
//função que servirá para trazer as funções do for 

const getPoke = (data) => {
    container.innerHTML = '';
    for (let poke of data) {
        let img = poke.img,
            num = poke.num,
            rarity = poke["pokemon-rarity"],
            name = poke.name,
            type = poke.type,
            weaknesses = poke.weaknesses,
            evolution = "",
            cp = poke.stats["max-cp"],
            hp = poke.stats["max-hp"];

        if (typeof(poke.evolution["next-evolution"]) != "undefined") {
            let arrayEvolution = poke.evolution["next-evolution"];
            for (let evolutionPokes of arrayEvolution) {
                evolution += evolutionPokes.name + ",";
            }

        } else {
            evolution = "Já alcançou evolução máxima";
        }
        cardInfo(img, num, name, type, weaknesses, evolution, rarity, cp, hp);
    } // loop para trazer os elementos
};

const cardInfo = (img, num, name, type, weaknesses, evolution, rarity, cp, hp) => {
    container.innerHTML += `
                         
                          <div class="flip-card">
                          <div class="card1">
                          <div class="flip-card-front">
                          <p class="card-info-poke"><img class="img" src=${img} alt="${name}"/></p>
                          <p class="card-info-poke"> ${num}</p> 
                          <p class="card-info-poke">${name}</p>
                          <p class="card-info-poke">${type}</p>
                          </div>
                          <div class="flip-card-back">
                          <p class="card-info-poke">${weaknesses}</p>
                          <p class="card-info-poke">${evolution}</p>
                          <p class="card-info-poke">${rarity}</p>
                          <p class="card-info-poke">${cp}</p>
                          <p class="card-info-poke">${hp}</p>
                          </div>
                          </div>
                          </div>
                          
`
}

function printFilteredType() {
    let typeValue = document.getElementById('allType').value;
    let filteredPokemonsByType = filtros.filterByType(pokemons, typeValue);
    console.log(filteredPokemonsByType);
    carregar(filteredPokemonsByType);
}
const selectPokemon = document.querySelector('.allTypes');

selectPokemon.addEventListener('change', (event) => {
    printFilteredType()
});

const buttonb = document.getElementById("button")
buttonb.addEventListener("click", searchName)

function searchName() {
    let nameValue = document.getElementById('input').value;
    let filteredPokemonsByName = filtros.filterByName(pokemons, nameValue);
    carregar(filteredPokemonsByName);
}
const selectPokemonName = document.querySelector('#input');

selectPokemonName.addEventListener('change', (event) => {
    searchName()
});


function printFilteredRarity() {
    let rarityValue = document.getElementById('allRarity').value;
    let filteredPokemonsByRarity = filtros.filterByRarity(pokemons, rarityValue);
    return carregar(filteredPokemonsByRarity);
}
const selectPokemonRarity = document.querySelector('.allRaritys');

selectPokemonRarity.addEventListener('change', (event) => {
    printFilteredRarity()
});

function printOrder() {
    let orderValue = document.getElementById('order-alphabet').value;
    let pushOrder = filtros.orderByName(pokemons, orderValue);
    return carregar(pushOrder);
}

var getAzElement = document.querySelector('.order-alphabet');
getAzElement.addEventListener('change', (event) => {
    printOrder();
});