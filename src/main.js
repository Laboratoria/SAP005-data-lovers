import data from './data/pokemon/pokemon.js';

const hamburguer = document.getElementById("menu-hamburguer");
hamburguer.addEventListener("click", () => {
  document.getElementById("root").classList.toggle("show-menu");
})

function pokebola() {
  for (let card of data.pokemon) {
    document.getElementById("pokedex").innerHTML += `
    <li class="card-poke">
        <img class="card-image" src="${card.img}" alt="${card.img}/>
        <h2 class="card-title">${card.name}. ${card.generation.name}</h2>
        <p class="card-subtitle">Type: ${card.type.toString().replace(","," ")}</p>
    </li>`
  }
}

pokebola(data.pokemon);



//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(data.pokemon[0].name);
