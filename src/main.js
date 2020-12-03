import { crescent, decrescent, searchFilter, searchFind } from './data.js';
import data from './data/pokemon/pokemon.js';
const copyDB = data.pokemon;


// Limpa a DIV que irá receber todos os CARDS (Todos, Filtrados ou Ordenados) 
function clearCards() {
    document.getElementById("item-all-cards").innerHTML = ""
}

/*                            Funções para Templates de Cards                            */
function templateOneCard(array) {
    let pokecard = "";
    pokecard += 
            `<div id="item-card1">
                <img src="${array.img}">
                <h1>${array.name.toUpperCase()}<h1>
                <p>${array.num}</p> 
                <p>${array.about}</p> 
                <p> <strong>Tipo:</strong> ${array.type.join(' / ')}</p>
                <p> <strong>Resistente:</strong> ${array.resistant.join(' / ')}</p>
            </div>`
            

    return document.getElementById("item-card-one-front").innerHTML = pokecard
}

function templateOneCardBack(array) {
    let pokecardback = "";
    pokecardback += 
            `<div id="item-card-back">
                <p><strong> Height:</strong> ${array.size.height}</p>
                <p><strong> Weight:</strong> ${array.size.weight}</p>
                <p> <strong>Generation:</strong> ${array.generation.num}</p>
                <p> <strong>Weaknesses:</strong> ${array.weaknesses.join(' / ')}</p>
                <p><strong> Candy- Evolution:</strong> ${array.evolution.candy}</p>  
                <p> <strong>Egg:</strong> ${array.egg}</p> 
            </div>`
            

    return document.getElementById("item-card-one-back").innerHTML = pokecardback
}



function templateAllCards(array) {
    let pokecards = "";
    for (let indice of array) {
        pokecards += `<div class="mostrar">
<img src="${indice.img}">
<h1>${indice.name.toUpperCase()}<h1>
<p>${indice.num}</p> 
<p>${indice.about}</p> 
<p> <strong>Tipo:</strong> ${indice.type.join(' / ')}</p>
<p> <strong>Resistente:</strong> ${indice.resistant.join(' / ')}</p></div>`
    }
    return document.getElementById("item-all-cards").innerHTML = pokecards
}
// Qual a diferença dos dois templates? 1º é para resultado individual e 2º é para resultado que demanda passar pela varredura em loop.

/*                            Todas as funções ---> Na sequência > CardUnitário> TodosOsCards> OrdenaCrescent > OrdenaDecrescente > FiltraporTipo                          */
function cardOne() {
    document.getElementById("item-card-one-front").innerHTML = "";
    let txtSearch = document.getElementById('txtBusca').value;
    const resultSearch = searchFind(copyDB, txtSearch);
    return templateOneCard(resultSearch)
}

function cardOneBack() {
    document.getElementById("item-card-one-back").innerHTML = "";
    let txtSearch = document.getElementById('txtBusca').value;
    const resultSearch = searchFind(copyDB, txtSearch);
    return templateOneCardBack(resultSearch)
}




// Botão e Event para enter localizados na section class="middle-bg" do html.
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



//Responsável por carregar em Cards todo o Objeto Data / Array Pokemon.
function cardAll() {
    clearCards();
    return templateAllCards(copyDB)
}

document.getElementById('btn-generation-pokemon').addEventListener("click", cardAll);

//Responsável por Ordenar Crescente:
function sortByABC() {
    clearCards();
    const callSort = crescent(copyDB);
    return templateAllCards(callSort)
}

document.getElementById('btn-cresc-pokemon').addEventListener("click", sortByABC)

//Responsável por Ordenar Decrescente:
function sortByZYX() {
    clearCards();
    const callSort = decrescent(copyDB);
    return templateAllCards(callSort)
}

document.getElementById('btn-decresc-pokemon').addEventListener("click", sortByZYX);

//Responsável por Filtrar:
function filterByType() {
    clearCards();
    let filterTypeSelect = document.getElementById("filter-type-select").value;
    const callFilter = searchFilter(copyDB, filterTypeSelect);
    return ([templateAllCards(callFilter)],[aggregateCalculation(callFilter)])
}

document.getElementById('btn-filter-type').addEventListener("click", filterByType)

//Responsável pelo Calculo Agregado:
function aggregateCalculation (array) {
let filterTypeSelect = document.getElementById("filter-type-select").value;
const sizeArray = copyDB.length
const sizeFilter = array.length
const result = ((sizeFilter/sizeArray)*100).toFixed(0)+"%";
const aggregateCal = `<h3>O tipo ${filterTypeSelect} representa ${result} do total de Pokémons</h3>`
return document.getElementById("item-aggregate-calc").innerHTML = aggregateCal;

}