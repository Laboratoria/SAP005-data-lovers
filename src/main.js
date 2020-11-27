//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';
//import charactersInfo from './data.js';

//show all characters (basic) info on HTML
//show filter result: gender (import the array from data.js)
//show filter result: status dead/alive characters (import the array from data.js)
//show filter result: names (alphabetic order, ascending order, descending order) (import the array from data.js)
//show filter result: kind (import the array from data.js)
//show filter result: place of origin (import the array from data.js)
//console.log(example, data);
for(let result of data.results){
    showInfo(result);
}
function showInfo(cards){
    let showCharactersInfo = document.getElementById("cards");
    let charactersList = document.createElement("li");
    let img = new Image(250, 250);
    img.src =cards.image;
    charactersList.appendChild(img);
    for(let [key,value] of Object.entries(cards)){
        if (key === "name"){
            let p = document.createElement("p"); 
            p.appendChild(document.createTextNode(value));
            charactersList.appendChild(p);
            p.id = "name"; 
        } else if (key === "status"){
            let p = document.createElement("p")
            p.appendChild(document.createTextNode("Status: " + value));
            charactersList.appendChild(p);
            p.id = "status" 
        } else if (key === "species"){
            let p = document.createElement("p");
            p.appendChild(document.createTextNode(value));
            charactersList.appendChild(p);
            p.id = "species";
        } else if (key === "gender"){
            let p = document.createElement("p");
            p.appendChild(document.createTextNode(value));
            charactersList.appendChild(p);
            p.id = "gender"
        }
        
    }
    showCharactersInfo.appendChild(charactersList);
}
