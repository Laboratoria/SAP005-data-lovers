import {crescent,decrescent,searchFilter,searchFind} from './data.js';
import data from './data/pokemon/pokemon.js';
const copyDB = data.pokemon;

function clearCards() {
  document.getElementById("item-all-cards").innerHTML = ""
}

function templateOneCard(array) {
  let pokecard = "";
  pokecard +=
    `
            <div id="item-card1">
                <img src="${array.img}">
                <h2>${array.name.toUpperCase()}<h2>
                <p>${array.num}</p> 
                <p>${array.about}</p> 
                <p> <strong>Tipo:</strong> ${array.type.join(' / ')}</p>
                <p> <strong>Resistente:</strong> ${array.resistant.join(' / ')}</p>
            </div>
        `
  return document.getElementById("item-card-one-front").innerHTML = pokecard
}

function templateOneCardBack(array) {
  let pokecardback = "";
  pokecardback +=
    `
            <div id="item-card-back">
                <p><strong> Height:</strong> ${array.size.height}</p>
                <p><strong> Weight:</strong> ${array.size.weight}</p>
                <p> <strong>Generation:</strong> ${array.generation.num}</p>
                <p> <strong>Weaknesses:</strong> ${array.weaknesses.join(' / ')}</p>
                <p><strong> Candy- Evolution:</strong> ${array.evolution.candy}</p>  
                <p> <strong>Egg:</strong> ${array.egg}</p> 
            </div>
        `
  return document.getElementById("item-card-one-back").innerHTML = pokecardback
}

function templateAllCards(array) {
  let pokecards = "";
  for (let indice of array) {
    pokecards +=
      `
            <div class="mostrar">
                <img src="${indice.img}">
                <h2>${indice.name.toUpperCase()}<h2>
                <p>${indice.num}</p> 
                <p>${indice.about}</p> 
                <p> <strong>Tipo:</strong> ${indice.type.join(' / ')}</p>
                <p> <strong>Resistente:</strong> ${indice.resistant.join(' / ')}</p>
            </div>
        `
  }
  return document.getElementById("item-all-cards").innerHTML = pokecards
}

function cardOne() {
  document.getElementById("item-card-one-front").innerHTML = "";
  const txtSearch = document.getElementById('txtBusca').value;
  let txtSearchTransf = txtSearch
    if (txtSearch.length == 2) {
        txtSearchTransf = '0' + txtSearch;
    }
    if (txtSearch.length == 1) {
        txtSearchTransf = '00' + txtSearch;
    }
  const resultSearch = searchFind(copyDB, txtSearchTransf);
    if (resultSearch == undefined) {
        document.getElementById("item-card-one-front").innerHTML = `<h3>Pokemon não encontrado</h3>`
    }
  return templateOneCard(resultSearch)
}

function cardOneBack() {
  document.getElementById("item-card-one-back").innerHTML = "";
  const txtSearch = document.getElementById('txtBusca').value;
  let txtSearchTransf = txtSearch
    if (txtSearch.length == 2) {
        txtSearchTransf = '0' + txtSearch;
    }
    if (txtSearch.length == 1) {
        txtSearchTransf = '00' + txtSearch;
     }
  const resultSearch = searchFind(copyDB, txtSearchTransf);
  return templateOneCardBack(resultSearch)
}

document.getElementById('btn-search-pokemon').addEventListener("click", cardOne);

let input = document.getElementById("txtBusca");
input.addEventListener("keyup", function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    cardOne()
  }
})

document.getElementById('btn-search-pokemon').addEventListener("click", cardOneBack);
let input2 = document.getElementById("txtBusca");
input2.addEventListener("keyup", function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    cardOneBack()
  }
})

function cardAll() {
  clearCards();
  return templateAllCards(copyDB)
}

document.getElementById('btn-generation-pokemon').addEventListener("click", cardAll);

function sortByABC() {
  clearCards();
  const callSort = crescent(copyDB);
  return templateAllCards(callSort)
}

document.getElementById('btn-cresc-pokemon').addEventListener("click", sortByABC)

function sortByZYX() {
  clearCards();
  const callSort = decrescent(copyDB);
  return templateAllCards(callSort)
}

document.getElementById('btn-decresc-pokemon').addEventListener("click", sortByZYX);

function filterByType() {
  clearCards();
  const filterTypeSelect = document.getElementById("filter-type-select").value;
  const callFilter = searchFilter(copyDB, filterTypeSelect);
  return ([templateAllCards(callFilter)], [aggregateCalculation(callFilter)])
}

document.getElementById('btn-filter-type').addEventListener("click", filterByType)

function aggregateCalculation(array) {
  const filterTypeSelect = document.getElementById("filter-type-select").value;
  const sizeArray = copyDB.length
  const sizeFilter = array.length
  const result = ((sizeFilter / sizeArray) * 100).toFixed(0) + "%";
  const aggregateCal = `<h3>O tipo ${filterTypeSelect} representa ${result} do total de Pokémons</h3>`
  return document.getElementById("item-aggregate-calc").innerHTML = aggregateCal;
}
