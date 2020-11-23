import { example } from './data.js';
//import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';


const listaCompleta = data.results;

function chamarLista(dados) {
  for (let item of dados) {
    document.getElementById("hero").innerHTML +=
      ` 
     <section class="personagem">
      <div class="frente">
        <p>${item.name.toUpperCase()}</p>
        <img src="${item.image}">
        <p>${item.gender.toUpperCase()}</p>
      </div>
      <div class="tras">
      <p>${item.name}</p>
      <p>${item.status}</p>
      <p>${item.species}</p>
      <p>${item.gender}</p>
    </div>
    </section>
      `
  }
};

chamarLista(listaCompleta); 

const filtroGenero = data.results
.filter(genero => genero.gender === "male")
.map(g => g.gender)
console.log(filtroGenero);


const filterSelect = document.querySelector('.filter-gender');
filterSelect.addEventListener('click', filterGender)

function filterGender(){
    if(filterSelect.value === "male") {
        console.log(filtroGenero)
    }else if(filterSelect.value === "female"){
        console.log("vc selecionou mulher")
    }else{
        console.log()
    }
}

const filterSelectStatus = document.querySelector('.filter-status');
filterSelectStatus.addEventListener('click', filterStatus)

function filterStatus(){
    if(filterSelectStatus.value === "vivo") {
        console.log("vc está vivo")
    }else if(filterSelectStatus.value === "morto"){
        console.log("vc selecionou morto?!")
    }else if(filterSelectStatus.value === "unknown"){
        console.log("Seria vc um ET?????")
    }else{
        console.log()
    }
}

const filterSelectSpecies = document.querySelector('.filter-species');
filterSelectSpecies.addEventListener('click', filterSpecies)

function filterSpecies(){
    if(filterSelectSpecies.value === "animal") {
        console.log("Oi Animal")
    }else if(filterSelectSpecies.value === "humano"){
        console.log("HUmano? pensei q era anjo")
    }else if(filterSelectSpecies.value === "humanoid"){
        console.log("o futuro é você")
    }else if(filterSelectSpecies.value === "robot"){
        console.log("R2-D2?!")
    }else if(filterSelectSpecies.value === "alien"){
        console.log("vc é de varginha e eu de Parelheiros")
    }else{
        console.log()
    }
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