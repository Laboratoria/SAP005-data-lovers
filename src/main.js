import { example } from './data.js';
//import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';

const dataBase = data.results;

function printCharacters(dados) {
    let cards = "";
    for ( let item of dados) {
    cards +=
      ` 
     <article id="teste" class="personagem">
      <div class="frente">
        <p class="card-name">${item.name.toUpperCase()}</p>
        <img src="${item.image}" class="card-img">
      <p class="card-tras">${item.status.toUpperCase()}</p>
      <p class="card-tras">${item.species.toUpperCase()}</p>
      <p class="card-tras">${item.gender.toUpperCase()}</p>
      <p class="card-tras">${item.location.name.toUpperCase()}</p>
    </div>
    </article>
      `
  }
  document.getElementById("hero").innerHTML = cards
}; 
printCharacters(dataBase); 

const filterSelect = document.querySelector('.filter-gender');
filterSelect.addEventListener('click', filterGender)

function filterGender(){
    const filterGender = dataBase.filter(dataBase => dataBase.gender === filterSelect.value)
    printCharacters(filterGender)
    document.getElementById("calculation").innerHTML = "Existem " + filterGender.length + " personagens deste gênero e representa " + parseFloat((filterGender.length*100)/(dataBase.length)).toFixed(2) + "% do total de personagens"
};

const filterSelectStatus = document.querySelector('.filter-status');
filterSelectStatus.addEventListener('click', filterStatus)

function filterStatus(){
    const filterStatus = dataBase.filter(dataBase => dataBase.status === filterSelectStatus.value)
    printCharacters(filterStatus)
    document.getElementById("calculation").innerHTML = "Existem " + filterStatus.length + " personagens neste status e representa " + parseFloat((filterStatus.length*100)/(dataBase.length)).toFixed(2) + "% do total de personagens"
    
};

const filterSelectSpecies = document.querySelector('.filter-species');
filterSelectSpecies.addEventListener('click', filterSpecies)

function filterSpecies(){
    const filterSpecies = dataBase.filter(dataBase => dataBase.species === filterSelectSpecies.value)
    printCharacters(filterSpecies)
    document.getElementById("calculation").innerHTML = "Existem " + filterSpecies.length + " personagens desta espécie e representa " + parseFloat((filterSpecies.length*100)/(dataBase.length)).toFixed(2) + "% do total de personagens"
};

const filterSelectOrder = document.querySelector('.filter-order');
filterSelectOrder.addEventListener('click', filterOrder)

function filterOrder(){
    document.getElementById("calculation").innerHTML = ""
    if(filterSelectOrder.value === "az") {
        const orderAz = dataBase.sort(function(a,b) {
            return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
        });
        printCharacters(orderAz)
    }else if(filterSelectOrder.value === "za"){
        const orderZa = dataBase.reverse(function(a,b) {
            return b.name > a.name ? 1 : b.name < a.name ?  1 : 0;
          });
        printCharacters(orderZa)
    }else if(filterSelectOrder.value === "relevance"){
        const orderRelevence = dataBase.sort(function(a,b) {
            return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
        });
        printCharacters(orderRelevence )
    }else{
        printCharacters(dataBase)
    }
};

console.log(example, data);