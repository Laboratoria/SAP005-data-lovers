import { example } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

/* -------------MENU E BOTÕES DESKTOP VERSION------------ */ 

const charactersButton = document.getElementById("characters-button")
charactersButton.addEventListener("click", showCharacters)



function showCharacters(){
	for (let character of data.results){
		let cards = document.getElementById("get-cards");
        let newCard = document.createElement("div");
		cards.appendChild(newCard);
        newCard.innerHTML = `<div class="all-cards">
        <div class="card-info">
         <div class="card-front"><img class="front-pic" src="${character.image}" alt=""><h1>${character.name}</h1></div>
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
            </div>
          </div>  
        </div>`;
	}
}


/* --------------MENU E BOTÕES MOBILE VERSION--------------- */

const characMobiButton = document.getElementById("button-charac-mobile")
characMobiButton.addEventListener("click", showMobiCharac)



function showMobiCharac(){
	for (let character of data.results){
		let cardsMobi = document.getElementById("get-cards-mobile");
        let newCardMobi = document.createElement("div");
		cardsMobi.appendChild(newCardMobi);
        newCardMobi.innerHTML = `<div class="all-cards-mobile">
        <div class="card-info-mobile">
         <div class="card-front-mobile"><img class="front-pic-mobile" src="${character.image}" alt=""><h1>${character.name}</h1></div>
            <div class="card-back-mobile">
            <img class="back-pic-mobile" src="${character.image}" alt="">
            <ul>
            <li>Name: ${character.name}</li>
            <li>Status: ${character.status}</li>
            <li>Species: ${character.species}</li> 
            <li>Type: ${character.type}</li>
            <li>Gender: ${character.gender}</li> 
            <li>Origin: ${character.origin.name}</li>
            <li>Location: ${character.location.name}</li>
            </ul>
            </div>
          </div>  
        </div>`;
	}
}