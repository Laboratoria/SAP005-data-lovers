import { filterGenderSelected, filterStatusSelected, filterSpeciesSelected, sortOrder, calcFilter } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';
const dataBase = data.results;
const filterSelect = document.querySelector('.filter-gender');
const filterSelectStatus = document.querySelector('.filter-status');
const filterSelectSpecies = document.querySelector('.filter-species');
const filterSelectOrder = document.querySelector('.filter-order');

filterSelect.addEventListener('change', filterGender);
filterSelectStatus.addEventListener('change', filterStatus);
filterSelectSpecies.addEventListener('change', filterSpecies);
filterSelectOrder.addEventListener('change', filterOrder);
document.getElementById("hero").onload = printCharacters(dataBase);

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
}

function resultCalc(dataBase, selectedFilter) {
    let result = calcFilter(dataBase, selectedFilter)
    document.getElementById("calculation").innerHTML = "Existem " + selectedFilter.length + " personagens deste filtro e representam " + result + "% do total de personagens"
}

function filterGender() {
    const valueGenderSelected = filterSelect.value
    const selectedGender = filterGenderSelected(dataBase, valueGenderSelected)
    printCharacters(selectedGender)
    resultCalc(dataBase, selectedGender)
}

function filterStatus() {
    const valueStatusSelected = filterSelectStatus.value
    const selectedStatus = filterStatusSelected(dataBase, valueStatusSelected)
    printCharacters(selectedStatus)
    resultCalc(dataBase, selectedStatus)
}

function filterSpecies() {
    const valueSpeciesSelected = filterSelectSpecies.value
    const selectedSpecies = filterSpeciesSelected(dataBase, valueSpeciesSelected)
    printCharacters(selectedSpecies)
    resultCalc(dataBase, selectedSpecies)
}

function filterOrder() {
    document.getElementById("calculation").innerHTML = ""
    const valueOrderSelected = filterSelectOrder.value
    const selectedOrder = sortOrder(dataBase, valueOrderSelected)
    printCharacters(selectedOrder)
}

