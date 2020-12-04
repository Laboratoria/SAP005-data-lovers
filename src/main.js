import { instantSearch, selectPokemonType, selectPokemonResistant, selectPokemonWeaknesses, selectPokemonGeneration, sortPokemonCp } from './data.js'
import data from './data/pokemon/pokemon.js'

const inputSearch = document.querySelector('#input-search')
const selectFilterType = document.querySelector('#select-filter-by-type')
const selectFilterResistant = document.querySelector('#select-filter-by-resistant')
const selectFilterWeaknesses = document.querySelector('#select-filter-by-weaknesses')
const selectFilterGeneration = document.querySelector('#select-filter-by-generation')
const selectSortCp = document.querySelector('#select-sort-cp')
const selectSort = document.querySelector('#select-sort')
const selectNumber = document.querySelector('#select-number')
const buttonClear = document.querySelector('#btn-clean')

showingCards(data.pokemon)

function showingCards(pokemonCards) {
    let showCards = document.querySelector('#main-cards')
    let cards = ""
    showCards.innerHTML = "";

    for (let pokemon of pokemonCards) {
        let evolutions = ""
        if (pokemon.evolution["next-evolution"] != undefined && pokemon.evolution["next-evolution"] != null) {
            evolutions += `<span>${pokemon.evolution["next-evolution"].map(evolution => evolution.name).join(", ")}</span>`
        } else {
            evolutions = "Do not evolve"
        }

        cards +=
            `<div class="frame left">
                <div class="left">
                <h3 class = "card-front"><br>
                <p class="pokemon-number">${pokemon.num}</p>
                <p class="pokemon-name">${pokemon.name}</p>
                <img src = ${pokemon.img} class = "img" alt = ${pokemon.name}</h3> 
                    <p><span class="strong">Type:</span> ${pokemon.type.join(", ")}</p>
                    <p><span class="strong">Rarity:</span> ${pokemon["pokemon-rarity"]}</p>
                    <p><span class="strong">Evolution:</span> ${evolutions}<p>                 
                </div>
                <div class="card-back"><br>
                    <p><span class="strong">Height:</span> ${pokemon.size.height}</p>
                    <p><span class="strong">Weight:</span> ${pokemon.size.weight}</p>
                    <p><span class="strong">Resistant:</span> ${pokemon.resistant.join(", ")}</p>
                    <p><span class="strong">Weaknesses:</span> ${pokemon.weaknesses.join(", ")}</p>
                    <p><span class="strong">Base Attack:</span> ${pokemon.stats["base-attack"]}</p>
                    <p><span class="strong">Base Defense:</span> ${pokemon.stats["base-defense"]}</p>
                    <p><span class="strong">Base Stamina:</span> ${pokemon.stats["base-stamina"]}</p>
                    <p><span class="strong">Max Cp:</span> ${pokemon.stats["max-cp"]}</p>
                    <p><span class="strong">Max Hp:</span> ${pokemon.stats["max-hp"]}</p>
                </div>
            </div>`

    }
    showCards.innerHTML = cards

}

function showingCardsAllFilters() {
    const selectGeneration = selectFilterGeneration.value
    const searchName = inputSearch.value
    const selectType = selectFilterType.value
    const selectResistant = selectFilterResistant.value
    const selectWeaknesses = selectFilterWeaknesses.value
    const pokemonGeneration = selectPokemonGeneration(selectGeneration, data.pokemon)
    const pokemons = instantSearch(searchName, pokemonGeneration)
    const pokemonType = selectPokemonType(selectType, pokemons)
    const pokemonResistant = selectPokemonResistant(selectResistant, pokemonType)
    const pokemonWeaknesses = selectPokemonWeaknesses(selectWeaknesses, pokemonResistant)
    showingCards(pokemonWeaknesses)
}

inputSearch.addEventListener('keyup', () => {
    showingCardsAllFilters()
})

selectFilterType.addEventListener('change', () => {
    showingCardsAllFilters()
})

selectFilterResistant.addEventListener('change', () => {
    showingCardsAllFilters()
})

selectFilterWeaknesses.addEventListener('change', () => {
    showingCardsAllFilters()
})

selectFilterGeneration.addEventListener('change', () => {
    showingCardsAllFilters()
})

selectSortCp.addEventListener('change', () => {
    const selectCp = selectSortCp.value
    const pokemonCp = sortPokemonCp(selectCp, data.pokemon)
    showingCards(pokemonCp)
})

buttonClear.addEventListener('click', () => {
    showingCards(data.pokemon)
    inputSearch.value = ""
    selectFilterType.value = ""
    selectFilterResistant.value = ""
    selectFilterWeaknesses.value = ""
    selectFilterGeneration.value = ""
    selectSortCp.value = ""
    selectSort.value = ""
    selectNumber.value = ""
})

/*selectSort.addEventListener('change', () => {
    const sortName = selectSort.value
    const pokemonAlphabetic = orderPokemonName(sortName, data.pokemon)
    showingCards(pokemonAlphabetic)
})

selectNumber.addEventListener('change', () => {
    const sortNumber = selectNumber.value
    const pokemonNumber = sortPokemonNumber(sortNumber, data.pokemon)
    showingCards(pokemonNumber)
})*/