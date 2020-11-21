import { example } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

/* -------------MENU E BOTÕES DESKTOP VERSION------------ */ 

// const charactersMenu = document.getElementById("characters-options")
const charactersButton = document.getElementById("characters-button")
// const charactersCard = document.getElementById("card-info")
charactersButton.addEventListener("click", showCharacters)

/* Aproveitei sua função! Cards são gerados no click de Personagens.
    function showCharacters(){
    charactersMenu.style.visibility = "visible"
    charactersCard.style.visibility = "visible"
}
*/

function showCharacters(){
	for (let character of data.results){
		let cards = document.getElementById("card-info");
		let newCard = document.createElement("div");
		cards.appendChild(newCard);
        newCard.innerHTML = `<div class="card-front"><img class="front-pic" src="${character.image}" alt=""><h1>${character.name}</h1></div>
            <div class="card-back">
            <img class="back-pic" src="${character.image}" alt="">
            <ul>
            <li>Name: ${character.name}</li>
            <li>Status: ${character.status}</li>
            <li>Species: ${character.species}</li> 
            <li>Type: ${character.type}</li>
            <li>Gender: ${character.gender}</li> 
            <li>Origin: ${character.origin.name}</li>
            <li>Location: ${character.location.name}</li>
            </ul>
            </div>`;
	}
}


/* --------------MENU E BOTÕES MOBILE VERSION--------------- */

const characMenuMobile = document.getElementById("characters-options-mobile")
const characButtonMobile = document.getElementById("button-charac")
const characCardMobile = document.getElementById("card-info-mobile")
characButtonMobile.addEventListener("click", showCharacMobile)


function showCharacMobile(){
    characMenuMobile.style.visibility = "visible"
    characCardMobile.style.visibility = "visible"
}
