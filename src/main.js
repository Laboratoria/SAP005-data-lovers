import data from './data/rickandmorty/rickandmorty.js';
import {elements, filterAllInfo} from './data.js';
//show all characters (basic) info on HTML
let showCharactersInfo = document.getElementById("cards");
for(let result of data.results){
    showInfo(result);
}

function showInfo(cards){
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
        }else if (key === "origin"){
            let p = document.createElement("p");
            p.appendChild(document.createTextNode("Origem: " +value.name));
            charactersList.appendChild(p);
            p.id = "origin";
        }else if (key === "location"){
            let p = document.createElement("p");
            p.appendChild(document.createTextNode("Última localização: " +value.name));
            charactersList.appendChild(p);
            p.id + "location"
        } 
    }
    console.log(cards);
    showCharactersInfo.appendChild(charactersList);
}
//create an event listener for the select button
const select = document.getElementById("Caracteristiscas-quantadidade");
select.addEventListener("change",teste);
//create a function for each filte
//ps: change the function's "test" name
function teste(){
    showCharactersInfo.innerHTML = "";
    if(select.value === "Mortos"){
        console.log(select.value);
        const dead = filterAllInfo("status", "Dead");
        dead.map(item =>  showInfo(item));
        //return showInfo(filterAllInfo( "status", "Dead"));
    }
}
console.log(showInfo);
