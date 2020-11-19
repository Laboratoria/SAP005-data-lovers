// import { example } from './data.js';
// import data from './data/lol/lol.js';
// import data from './data/rickandmorty/rickandmorty.js';

import data from './data/pokemon/pokemon.js';
console.log(data);

var id = 0;
var j = "";
var p = 251;
populatePoke();
function populatePoke() {
    for (id; id < p; id++) {
        let nameCard = document.querySelector("[class=main-card]");
        nameCard.innerHTML += `<div id="card" class="moldura left">`+
        
        `<div class="left"><h3 class="pokefront"><img src="${data.pokemon[id].img}" class="pokeimg" alt="${data.pokemon[id].name}" />`+
        ` ${data.pokemon[id].num} <br> ${data.pokemon[id].name} </h3>`+
        `<h6 class="pokeback"> Region: ${data.pokemon[id].generation.name} <br /> Type: ${data.pokemon[id].type} <br /> Resistant: ${data.pokemon[id].resistant} <br> Height: ${data.pokemon[id].size.height} <br> Weight: ${data.pokemon[id].size.weight} <br> Rarity: ${data.pokemon[id]["pokemon-rarity"]} <br> Weaknesses: ${data.pokemon[id].weaknesses} <br> Base Attack: ${data.pokemon[id].stats["base-attack"]} <br> Base Defense: ${data.pokemon[id].stats["base-defense"]} <br> Base Stamina: ${data.pokemon[id].stats["base-stamina"]} <br> Max Cp: ${data.pokemon[id].stats["max-cp"]} <br> Max Hp: ${data.pokemon[id].stats["max-hp"]}</h6>`+

        `</div>`;       
    }
}
