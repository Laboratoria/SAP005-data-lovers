import { instantSearch } from './data.js'
import data from './data/pokemon/pokemon.js'

const inputSearch = document.querySelector('#input-search')
const selectFilterType = document.querySelector('#select-filter-by-type')
const selectFilterResistant = document.querySelector('#select-filter-by-resistant')
const selectFilterWeaknesses = document.querySelector('#select-filter-by-weaknesses')
const selectSort = document.querySelector('#select-sort')
const btnClean = document.querySelector('#btn-clean')

showingCards(data.pokemon)

function showingCards(pokemonCards) {

    let showCards = document.querySelector('#main-cards')
    let cards = ""
    showCards.innerHTML = ""

    for (let pokemon of pokemonCards) {
        cards +=

            `<div class="frame-left">
                <div class="left">
                <div class = "card-front"><img src = ${pokemon.img} class = "img" alt = ${pokemon.name}/> 
                    <p> N°: ${pokemon.num}</p> 
                    <p> Nome: ${pokemon.name} </p> 
                </div>
                <div class="card-back"> 
                    <p> Type: ${pokemon.type}</p>
                    <p> Height: ${pokemon.size.height}
                    <p> Weight: ${pokemon.size.weight}</p>
                    <p> Resistant: ${pokemon.resistant}</p>
                    <p> Weaknesses: ${pokemon.weaknesses}</p>
                    <p> Base Attack: ${pokemon.stats["base-attack"]}</p>
                    <p> Base Defense: ${pokemon.stats["base-defense"]}</p>
                    <p> Base Stamina: ${pokemon.stats["base-stamina"]}</p>
                    <p> Max Cp: ${pokemon.stats["max-cp"]}</p>
                    <p> Max Hp: ${pokemon.stats["max-hp"]}</p>
                    <p> Rarity: ${pokemon["pokemon-rarity"]}</p>
                    <p> Region: ${pokemon.generation.name}</p>
                    </div>
            </div>`
    }
    showCards.innerHTML = cards;
}

inputSearch.addEventListener('keyup', () => {
    const searchName = inputSearch.value
    const pokemons = instantSearch(searchName, data.pokemon)
    showingCards(pokemons)
})