import { example } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

const charactersMenu = document.getElementById("characters-options")
//const episodesMenu = document.getElementById("episodes-")
const worldsMenu = document.getElementById("worlds-options")

const charactersButton = document.getElementById("characters-button")
//const episodesButton = document.getElementById("episodes-button")
const worldsButton = document.getElementById("worlds-button")

charactersButton.addEventListener("click", showCharacters)
//episodesButton.addEventListener("click", showEpisodes)
worldsButton.addEventListener("click", showWorlds)


function showCharacters(){
    charactersMenu.style.visibility = "visible"
    worldsMenu.style.visibility = "hidden"
}

//function showEpisodes(){}

function showWorlds(){
    worldsMenu.style.visibility = "visible"
    charactersMenu.style.visibility = "hidden"
}


const rickPic = document.getElementById("rick-picture");
rickPic.addEventListener("click", showInfo);

function showInfo() {
    const name = data.results[0].name;
    const status = data.results[0].status;
    const species = data.results[0].species;
    const type = data.results[0].type;
    const gender = data.results[0].gender;
    const origin = data.results[0].origin.name;
    const location = data.results[0].location.name;
    document.getElementById("card-info").innerHTML = `Name: ${name} <br>Status: ${status} <br>Species: ${species} <br>Type: ${type} <br>Gender: ${gender} <br>Origin: ${origin} <br>Location: ${location}`;
};
