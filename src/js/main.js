import * as filtros from './data.js';
import data from '../data/pokemon/pokemon.js';

//*---------------- CONSTANTES E VARIAVEIS ---------------------*/
const pokemons = data.pokemon;
var container = document.getElementById('container-card-poke');
var selectPokemon = document.querySelector('.allTypes');
var selectAzElement = document.querySelector('.order-alphabet');
var selectPokemonRarity = document.querySelector('.allRaritys');
var selectPokemonName = document.querySelector('#input');
var buttonPoke = document.getElementById("buttonPoke");

//*---------------- FUNCTIONS ---------------------*/
// loop para trazer os elementos
const carregar = (data) => {
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
                evolution += evolutionPokes.name + ", ";
            }
            
        } else {
            evolution = "Já alcançou evolução máxima";
        }
        cardInfo(img, num, name, type, weaknesses, evolution, rarity, cp, hp) ;
    }
};

const cardInfo = (img, num, name, type, weaknesses, evolution, rarity, cp, hp) => {
    container.innerHTML += `
    <div class="flip-card">
    <div class="card1">
    <div class="flip-card-front">
    <p class="card-info-poke"><img class="img" src=${img} alt="${name}"/></p>
    <p class="card-info-poke">${num}</p> 
    <p class="card-info-poke">${name}</p>
    <p class="card-info-poke">${type}</p>
    </div>
    <div class="flip-card-back">
    <p class="card-info-poke">Fraqueza: ${weaknesses}</p>
    <p class="card-info-poke">Próxima Evolução: ${evolution}</p>
    <p class="card-info-poke">Raridade: ${rarity}</p>
    <p class="card-info-poke"> CP : ${cp}</p>
    <p class="card-info-poke"> HP: ${hp}</p>
    </div>
    </div>
    </div>
    `
}

function printFilteredType() {
    let typeValue = document.getElementById('allType').value;
    let filteredPokemonsByType = filtros.filterByType(pokemons, typeValue);
    carregar(filteredPokemonsByType);
}

function searchName() {
    let nameValue = document.getElementById('input').value;
    let filteredPokemonsByName = filtros.filterByName(pokemons, nameValue);
    carregar(filteredPokemonsByName);
}

function printFilteredRarity() {
    let rarityValue = document.getElementById('allRarity').value;
    let filteredPokemonsByRarity = filtros.filterByRarity(pokemons, rarityValue);
    return carregar(filteredPokemonsByRarity);
}

function printOrder() {
    let orderValue = document.getElementById('order-alphabet').value;
    let pushOrder = filtros.orderByName(pokemons, orderValue);
    return carregar(pushOrder);
}

//*---------------- LISTENERS ---------------------*/
//evento para trazer os dados. 
//Load é executado depois que o carregamento da página tenha sido concluído e o usuário possa visualizar todo o documento, ou seja, para carregar scripts com muitos dados.
addEventListener('load', () => {
    carregar(pokemons);
});

selectPokemon.addEventListener('change', () => {
    printFilteredType()
});

selectAzElement.addEventListener('change', () => {
    printOrder();
});

selectPokemonRarity.addEventListener('change', () => {
    printFilteredRarity()
});

buttonPoke.addEventListener("click", searchName);

selectPokemonName.addEventListener('change', () => {
    searchName()
});


