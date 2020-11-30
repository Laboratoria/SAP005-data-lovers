//import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/rickandmorty/rickandmorty.js';
// import data from './data/rickandmorty/rickandmorty.js';

/*export {default as data } from './data/rickandmorty/rickandmorty.js';

    console.log(example, data);
}*/
//cardsHtml(data);
function cardsHtml(data){
    for (let infos of data);
    console.log(infos.name);
} 
const imprime = document.getElementById("card1").innerHTML= cardsHtml; 
console.log(imprime);