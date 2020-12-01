import { instantSearch, selectPokemonType, selectPokemonResistant, selectPokemonWeaknesses, selectPokemonGeneration, orderPokemonName, orderPokeNumber } from './data.js'
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
    //showingCards(data.pokemon.sort((poke1, poke2) => poke1.name.localeCompare(poke2.name)))

function showingCards(pokemonCards) {
    let showCards = document.querySelector('#main-cards')
    let cards = ""
    showCards.innerHTML = ""

    for (let pokemon of pokemonCards) {
        let evolutions = ""
        if (!!pokemon.evolution["next-evolution"]) {
            for (let evolution of pokemon.evolution["next-evolution"]) {
                evolutions += `<span>${evolution.name}</span>`
            }
        } else {
            evolutions = "Do not evolve"
        }

        cards +=
            `<div class="frame left">
                <div class="left">
                <h3 class = "card-front"><img src = ${pokemon.img} class = "img" alt = ${pokemon.name}</h3> 
                    <p>N°: ${pokemon.num}</p>
                    <p>Nome: ${pokemon.name}</p>
                    <p>Type: ${pokemon.type}</p>
                    <p>Rarity: ${pokemon["pokemon-rarity"]}</p>
                    <p>Evolution: ${evolutions}<p>                 
                </div>
                <div class="card-back">
                    <p>Height: ${pokemon.size.height}</p>
                    <p>Weight: ${pokemon.size.weight}</p>
                    <p>Resistant: ${pokemon.resistant}</p>
                    <p>Weaknesses: ${pokemon.weaknesses}</p>
                    <p>Base Attack: ${pokemon.stats["base-attack"]}</p>
                    <p>Base Defense: ${pokemon.stats["base-defense"]}</p>
                    <p>Base Stamina: ${pokemon.stats["base-stamina"]}</p>
                    <p>Max Cp: ${pokemon.stats["max-cp"]}</p>
                    <p>Max Hp: ${pokemon.stats["max-hp"]}</p>
                </div>
            </div>`

    }
    showCards.innerHTML = cards

}
//function showingCardsAllFilters() {


inputSearch.addEventListener('keyup', () => {
    const searchName = inputSearch.value
    const selectType = selectFilterType.value
    const selectResistant = selectFilterResistant.value
    const selectWeaknesses = selectFilterWeaknesses.value
    const selectGeneration = selectFilterGeneration.value
    const pokemons = instantSearch(searchName, data.pokemon)
    const pokemonType = selectPokemonType(selectType, pokemons)
    const pokemonResistant = selectPokemonResistant(selectResistant, pokemonType)
    const pokemonWeaknesses = selectPokemonWeaknesses(selectWeaknesses, pokemonResistant)
    const pokemonGeneration = selectPokemonGeneration(selectGeneration, pokemonWeaknesses)
    showingCards(pokemonGeneration)
});

selectFilterType.addEventListener('change', () => {
    const selectType = selectFilterType.value
    const searchName = inputSearch.value
    const selectResistant = selectFilterResistant.value
    const selectWeaknesses = selectFilterWeaknesses.value
    const selectGeneration = selectFilterGeneration.value
    const pokemonType = selectPokemonType(selectType, data.pokemon)
    const pokemons = instantSearch(searchName, pokemonType)
    const pokemonResistant = selectPokemonResistant(selectResistant, pokemons)
    const pokemonWeaknesses = selectPokemonWeaknesses(selectWeaknesses, pokemonResistant)
    const pokemonGeneration = selectPokemonGeneration(selectGeneration, pokemonWeaknesses)
    showingCards(pokemonGeneration)
})

selectFilterResistant.addEventListener('change', () => {
    const selectResistant = selectFilterResistant.value
    const searchName = inputSearch.value
    const selectType = selectFilterType.value
    const selectWeaknesses = selectFilterWeaknesses.value
    const selectGeneration = selectFilterGeneration.value
    const pokemonResistant = selectPokemonResistant(selectResistant, data.pokemon)
    const pokemons = instantSearch(searchName, pokemonResistant)
    const pokemonType = selectPokemonType(selectType, pokemons)
    const pokemonWeaknesses = selectPokemonWeaknesses(selectWeaknesses, pokemonType)
    const pokemonGeneration = selectPokemonGeneration(selectGeneration, pokemonWeaknesses)
    showingCards(pokemonGeneration)
})

selectFilterWeaknesses.addEventListener('change', () => {
    const selectWeaknesses = selectFilterWeaknesses.value
    const searchName = inputSearch.value
    const selectType = selectFilterType.value
    const selectResistant = selectFilterResistant.value
    const selectGeneration = selectFilterGeneration.value
    const pokemonWeaknesses = selectPokemonWeaknesses(selectWeaknesses, data.pokemon)
    const pokemons = instantSearch(searchName, pokemonWeaknesses)
    const pokemonType = selectPokemonType(selectType, pokemons)
    const pokemonResistant = selectPokemonResistant(selectResistant, pokemonType)
    const pokemonGeneration = selectPokemonGeneration(selectGeneration, pokemonResistant)
    showingCards(pokemonGeneration)
})

selectFilterGeneration.addEventListener('change', () => {
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
})

selectSort.addEventListener('change', () => {
    const orderName = selectSort.value
    const orderPoke = orderPokemonName(orderName, data.pokemon)
    showingCards(orderPoke)
})

selectNumber.addEventListener('change', () => {
    const orderNum = selectNumber.value
    const orderNumber = orderPokeNumber(orderNum, data.pokemon)
    showingCards(orderNumber)
})

buttonClear.addEventListener('click', () => {
    inputSearch.value = ""
    selectFilterType.value = ""
    selectFilterResistant.value = ""
    selectFilterWeaknesses.value = ""
    selectFilterGeneration.value = ""
    selectSortCp.value = ""
    selectSort.value = ""
    selectNumber.value = ""
})