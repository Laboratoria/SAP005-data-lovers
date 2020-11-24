import { example } from './data.js';
//import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';

const dataBase = data.results;

function printCharacters(dados) {
    let cards
    for ( let item of dados) {
    cards +=
      ` 
     <article class="personagem">
      <div class="frente">
        <p>${item.name.toUpperCase()}</p>
        <img src="${item.image}">
      </div>
      <div class="tras">
      <p>${item.name}</p>
      <p>${item.status}</p>
      <p>${item.species}</p>
      <p>${item.gender}</p>
    </div>
    </article>
      `
  }
  document.getElementById("hero").innerHTML = cards
}; printCharacters(dataBase); 

const filterSelect = document.querySelector('.filter-gender');
filterSelect.addEventListener('click', filterGender)

function filterGender(){
    const filterGender = dataBase.filter(dataBase => dataBase.gender === filterSelect.value)
    printCharacters(filterGender)  
};

const filterSelectStatus = document.querySelector('.filter-status');
filterSelectStatus.addEventListener('click', filterStatus)

function filterStatus(){
    const filterStatus = dataBase.filter(dataBase => dataBase.status === filterSelectStatus.value)
    printCharacters(filterStatus)
};

const filterSelectSpecies = document.querySelector('.filter-species');
filterSelectSpecies.addEventListener('click', filterSpecies)

function filterSpecies(){
    const filterSpecies = dataBase.filter(dataBase => dataBase.species === filterSelectSpecies.value)
    printCharacters(filterSpecies);
};

const filterSelectOrder = document.querySelector('.filter-order');
filterSelectOrder.addEventListener('click', filterOrder)

function filterOrder(){
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