//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';
//import charactersInfo from './data.js';
// show all characters on HTML
const allCharacters = data.results
for(let allCharacter of allCharacters){
    console.log(allCharacter.name); 
    const showAllCharactersName = document.getElementById("showAllCharactersName");
    showAllCharactersName.innerHTML = allCharacter.name;
}    
//show filter result: gender (import the array from data.js)
//show filter result: status dead/alive characters (import the array from data.js)
//show filter result: names (alphabetic order, ascending order, descending order) (import the array from data.js)
//show filter result: kind (import the array from data.js)
//show filter result: place of origin (import the array from data.js)
//console.log(example, data);
