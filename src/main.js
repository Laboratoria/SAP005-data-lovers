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

    let showCards = document.querySelector('#main-cards');
    let cards = "";
    showCards.innerHTML = "";

    for (let pokemon of pokemonCards) {
        cards +=

            `<div class="frame left">
                
                <div class="left"><h3 class = "card-front"><img src = ${pokemon.img} class = "img" alt = ${pokemon.name}</h3> 
                    <p> N°: ${pokemon.num}</p> <p> Nome: ${pokemon.name} </p> 
                </div>
                <div class="card-back"> 
                    <h6> Type: ${pokemon.type}</h6>
                    <h6> Height: ${pokemon.size.height}</h6>
                    <h6> Weight: ${pokemon.size.weight}</h6>
                    <h6> Resistant: ${pokemon.resistant}</h6>
                    <h6> Weaknesses: ${pokemon.weaknesses}</h6>
                    <h6> Base Attack: ${pokemon.stats["base-attack"]}</h6>
                    <h6> Base Defense: ${pokemon.stats["base-defense"]}</h6>
                    <h6> Base Stamina: ${pokemon.stats["base-stamina"]}</h6>
                    <h6> Max Cp: ${pokemon.stats["max-cp"]}</h6>
                    <h6> Max Hp: ${pokemon.stats["max-hp"]}</h6>
                    <h6> Rarity: ${pokemon["pokemon-rarity"]}</h6>
                    <h6> Region: ${pokemon.generation.name}</h6>
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


// ordenar de a-z


// var id = 0;
// var j = "";
// var p = 151;

// newSort();
// function newSort() {
//     for (id; id < p; id++) {
//     var orderPoke = data.pokemon[id].name;
//     orderPoke.sort;
//     console.log(orderPoke);
//     }
    
// }


// selectSort.addEventListener('sort', () => {
//     let ordenar = selectSort.value
//     let pokemons = sort(ordenar, data.pokemon)


// } 


// )
    // var selectSort = document.querySelector('#select-sort')
    // selectSort.value = '';
    // ordenar = .sort();

    // for(let i = 0; i < pokemon.lenght; i++){
    //    return Ordenar = showingCards(pokemon.name)
    // }



