import { example } from './data.js';

import data from './data/pokemon/pokemon.js';

console.log(example, data);


const pokemons = data.pokemon;

function mostrarCards() {
    for (let pokemon of pokemons){
        const cards = document.querySelector('#mostrarCards');

        const h2 = document.createElement("h2");
        h2.innerHTML = pokemon.name
        cards.appendChild(h2)

        const imagem = document.createElement("img");
        imagem.src = pokemon.img
        cards.appendChild(imagem)      

        const tipo = document.createElement("type");
        tipo.innerHTML = pokemon.type
        cards.appendChild(tipo)
      
    }

}
mostrarCards()




// funções que se ligam com o html
//document.querySelector(".sidebar").addEventListener("click", function);
//const imagem = document.getElementsByClassName("pokemon.img")

// console.log(pokemon)
// console.log(h2)
// console.log(imagem)
// const div = `<div>${pokemon.name}</div>`
