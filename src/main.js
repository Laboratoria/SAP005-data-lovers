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

for(let i in data){
    console.log(data[i].results)
}