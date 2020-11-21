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
      <abbr class="frente">
        <p>${item.name}</p>
        <img src="${item.image}">
        <p>${item.gender}</p>
      </abbr>
    </section>
      `
  }
};

chamarLista(listaCompleta);



// const especiesFilter = document.getElementById("especie");







console.log(example, data);