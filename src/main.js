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

const filterMale = dataBase.filter(dataBase => dataBase.gender === "Male");
const filterFemale = dataBase.filter(dataBase => dataBase.gender === "Female");
const filterUnknownGender = dataBase.filter(dataBase => dataBase.gender === "unknown");

const filterSelect = document.querySelector('.filter-gender');
filterSelect.addEventListener('click', filterGender)

function filterGender(){
    if(filterSelect.value === "male") {
     printCharacters(filterMale)         
    }else if(filterSelect.value === "female"){
     printCharacters(filterFemale)
    }else if(filterSelect.value === "unknown"){
     printCharacters(filterUnknownGender)
    }else{
     printCharacters(dataBase)
    }
    preventDefault();
}

const filterAlive = dataBase.filter(dataBase => dataBase.status === "Alive");
const filterDead = dataBase.filter(dataBase => dataBase.status === "Dead");
const filterUnknownStatus = dataBase.filter(dataBase => dataBase.status === "unknown");

const filterSelectStatus = document.querySelector('.filter-status');
filterSelectStatus.addEventListener('click', filterStatus)

function filterStatus(){
    if(filterSelectStatus.value === "vivo") {
     printCharacters(filterAlive) 
    }else if(filterSelectStatus.value === "morto"){
     printCharacters(filterDead) 
    }else if(filterSelectStatus.value === "unknown"){
     printCharacters(filterUnknownStatus) 
    }else{
     printCharacters(dataBase) 
    }
    preventDefault();
}


const filterAnimal = dataBase.filter(dataBase => dataBase.species === "Animal");
const filterHuman = dataBase.filter(dataBase => dataBase.species === "Human");
const filterHumanoid = dataBase.filter(dataBase => dataBase.species === "Humanoid");
const filterRobot = dataBase.filter(dataBase => dataBase.species === "Robot");
const filterAlien = dataBase.filter(dataBase => dataBase.species === "Alien");
const filterPoopybutthole = dataBase.filter(dataBase => dataBase.species === "Poopybutthole");
const filterMytholog = dataBase.filter(dataBase => dataBase.species === "Mytholog");
const filterVampire = dataBase.filter(dataBase => dataBase.species === "Vampire");
const filterCronenberg = dataBase.filter(dataBase => dataBase.species === "Cronenberg");
const filterDisease = dataBase.filter(dataBase => dataBase.species === "Disease");
const filterParasite = dataBase.filter(dataBase => dataBase.species === "Parasite");
const filterUnknownSpecies = dataBase.filter(dataBase => dataBase.species === "unknown");

const filterSelectSpecies = document.querySelector('.filter-species');
filterSelectSpecies.addEventListener('click', filterSpecies)

function filterSpecies(){
    if(filterSelectSpecies.value === "animal") {
     printCharacters(filterAnimal) 
    }else if(filterSelectSpecies.value === "human"){
     printCharacters(filterHuman) 
    }else if(filterSelectSpecies.value === "humanoid"){
     printCharacters(filterHumanoid) 
    }else if(filterSelectSpecies.value === "robot"){
     printCharacters(filterRobot) 
    }else if(filterSelectSpecies.value === "alien"){
     printCharacters(filterAlien) 
    }else if(filterSelectSpecies.value === "poopybutthole"){
     printCharacters(filterPoopybutthole) 
    }else if(filterSelectSpecies.value === "mytholog"){
     printCharacters(filterMytholog) 
    }else if(filterSelectSpecies.value === "vampire"){
     printCharacters(filterVampire) 
    }else if(filterSelectSpecies.value === "cronenberg"){
     printCharacters(filterCronenberg) 
    }else if(filterSelectSpecies.value === "doença"){ 
     printCharacters(filterDisease) 
    }else if(filterSelectSpecies.value === "parasite"){
     printCharacters(filterParasite) 
    }else if(filterSelectSpecies.value === "desconhecido"){
     printCharacters(filterUnknownSpecies) 
    }else{
     printCharacters(dataBase)
    }
    preventDefault();
}

const filterSelectOrder = document.querySelector('.filter-order');
filterSelectOrder.addEventListener('click', filterOrder)

function filterOrder(){
    if(filterSelectOrder.value === "az") {
        console.log("Crescente igual a lua")
    }else if(filterSelectOrder.value === "za"){
        console.log("ZazAzAZaZaZa")
    }else if(filterSelectOrder.value === "relevance"){
        console.log("Super importante vc")
    }else{
        console.log()
    }
}

console.log(example, data);