import { filterGenderSelected, filterStatusSelected, filterSpeciesSelected, sortOrder, calcGender, calcStatus, calcSpecies } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';
const dataBase = data.results;
const filterSelect = document.querySelector('.filter-gender');
const filterSelectStatus = document.querySelector('.filter-status');
const filterSelectSpecies = document.querySelector('.filter-species');
const filterSelectOrder = document.querySelector('.filter-order');


function printCharacters(dados) {
    let cards = "";
    for (let item of dados) {
        cards +=
            ` 
     <article id="teste" class="personagem">
      <div class="frente">
        <p class="card-name">${item.name.toUpperCase()}</p>
        <img src="${item.image}" class="card-img">
      <p class="card-tras">Status: ${item.status.toUpperCase()}</p>
      <p class="card-tras">Espécie: ${item.species.toUpperCase()}</p>
      <p class="card-tras">Gênero: ${item.gender.toUpperCase()}</p>
      <p class="card-tras">${item.location.name.toUpperCase()}</p>
    </div>
    </article>
      `
    }
    document.getElementById("hero").innerHTML = cards
} printCharacters(dataBase);

filterSelect.addEventListener('change', filterGender)
filterSelectStatus.addEventListener('change', filterStatus)
filterSelectSpecies.addEventListener('change', filterSpecies)
filterSelectOrder.addEventListener('change', filterOrder)

function filterGender() {
    const valueGenderSelected = filterSelect.value
    const selectedGender = filterGenderSelected(dataBase, valueGenderSelected)
    printCharacters(selectedGender)
    let resultGender = calcGender(dataBase, selectedGender)
    document.getElementById("calculation").innerHTML = "Existem " + selectedGender.length + " personagens deste gênero e representa " + resultGender + "% do total de personagens"
}

function filterStatus() {
    const valueStatusSelected = filterSelectStatus.value
    const selectedStatus = filterStatusSelected(dataBase, valueStatusSelected)
    printCharacters(selectedStatus)
    let resultStatus = calcStatus(dataBase, selectedStatus)
    document.getElementById("calculation").innerHTML = "Existem " + selectedStatus.length + " personagens neste status e representa " + resultStatus + "% do total de personagens"
}

function filterSpecies() {
    const valueSpeciesSelected = filterSelectSpecies.value
    const selectedSpecies = filterSpeciesSelected(dataBase, valueSpeciesSelected)
    printCharacters(selectedSpecies)
    let resultSpecies = calcSpecies(dataBase, selectedSpecies)
    document.getElementById("calculation").innerHTML = "Existem " + selectedSpecies.length + " personagens desta espécie e representa " + resultSpecies + "% do total de personagens"
}

function filterOrder() {
    document.getElementById("calculation").innerHTML = ""
    const valueOrderSelected = filterSelectOrder.value
    const selectedOrder = sortOrder(dataBase, valueOrderSelected)
    printCharacters(selectedOrder)
}

