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


document.getElementById("filter-gender").addEventListener("click",teste);


// const especiesFilter = document.getElementById("especie");







console.log(example, data);