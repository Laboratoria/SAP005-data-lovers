import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';

const hamburguer =document.getElementById("menu-hamburguer");
hamburguer.addEventListener("click", () => {
    document.getElementById("root").classList.toggle("show-menu");
})

for(let card of data.pokemon){
    console.log(card.img)
    console.log(card.name)
    console.log(card.about)
}
//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(data.pokemon[0].name);
