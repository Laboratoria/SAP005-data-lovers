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
rickPic.addEventListener("click", showInfo0);

const mortyPic = document.getElementById("morty-picture");
mortyPic.addEventListener("click", showInfo1);

const summerPic = document.getElementById("summer-picture");
summerPic.addEventListener("click", showInfo2);

const bethPic = document.getElementById("beth-picture");
bethPic.addEventListener("click", showInfo3);

const jerryPic = document.getElementById("jerry-picture");
jerryPic.addEventListener("click", showInfo4);

const abadangoPic = document.getElementById("abadango-picture");
abadangoPic.addEventListener("click", showInfo5);

const abradolfPic = document.getElementById("abradolf-picture");
abradolfPic.addEventListener("click", showInfo6);

const adjudicatorRickPic = document.getElementById("adjudicator-rick-picture");
adjudicatorRickPic.addEventListener("click", showInfo7);

const agencyDirectorPic = document.getElementById("agency-director-picture");
agencyDirectorPic.addEventListener("click", showInfo8);


function showInfo0() {
    const name = data.results[0].name;
    const status = data.results[0].status;
    const species = data.results[0].species;
    const type = data.results[0].type;
    const gender = data.results[0].gender;
    const origin = data.results[0].origin.name;
    const location = data.results[0].location.name;
    const image = data.results[0].image;
    
    document.getElementById("character-info").innerHTML = `Name: ${name} <br>Status: ${status} <br>Species: ${species} <br>Type: ${type} <br>Gender: ${gender} <br>Origin: ${origin} <br>Location: ${location}`;
    document.getElementById("character-img").src = image;
};

function showInfo1() {
    const name = data.results[1].name;
    const status = data.results[1].status;
    const species = data.results[1].species;
    const type = data.results[1].type;
    const gender = data.results[1].gender;
    const origin = data.results[1].origin.name;
    const location = data.results[1].location.name;
    const image = data.results[1].image;
    
    document.getElementById("character-info").innerHTML = `Name: ${name} <br>Status: ${status} <br>Species: ${species} <br>Type: ${type} <br>Gender: ${gender} <br>Origin: ${origin} <br>Location: ${location}`;
    document.getElementById("character-img").src = image;
};

function showInfo2() {
    const name = data.results[2].name;
    const status = data.results[2].status;
    const species = data.results[2].species;
    const type = data.results[2].type;
    const gender = data.results[2].gender;
    const origin = data.results[2].origin.name;
    const location = data.results[2].location.name;
    const image = data.results[2].image;
    
    document.getElementById("character-info").innerHTML = `Name: ${name} <br>Status: ${status} <br>Species: ${species} <br>Type: ${type} <br>Gender: ${gender} <br>Origin: ${origin} <br>Location: ${location}`;
    document.getElementById("character-img").src = image;
};

function showInfo3() {
    const name = data.results[3].name;
    const status = data.results[3].status;
    const species = data.results[3].species;
    const type = data.results[3].type;
    const gender = data.results[3].gender;
    const origin = data.results[3].origin.name;
    const location = data.results[3].location.name;
    const image = data.results[3].image;
    
    document.getElementById("character-info").innerHTML = `Name: ${name} <br>Status: ${status} <br>Species: ${species} <br>Type: ${type} <br>Gender: ${gender} <br>Origin: ${origin} <br>Location: ${location}`;
    document.getElementById("character-img").src = image;
};

function showInfo4() {
    const name = data.results[4].name;
    const status = data.results[4].status;
    const species = data.results[4].species;
    const type = data.results[4].type;
    const gender = data.results[4].gender;
    const origin = data.results[4].origin.name;
    const location = data.results[4].location.name;
    const image = data.results[4].image;
    
    document.getElementById("character-info").innerHTML = `Name: ${name} <br>Status: ${status} <br>Species: ${species} <br>Type: ${type} <br>Gender: ${gender} <br>Origin: ${origin} <br>Location: ${location}`;
    document.getElementById("character-img").src = image;
};

function showInfo5() {
    const name = data.results[5].name;
    const status = data.results[5].status;
    const species = data.results[5].species;
    const type = data.results[5].type;
    const gender = data.results[5].gender;
    const origin = data.results[5].origin.name;
    const location = data.results[5].location.name;
    const image = data.results[5].image;
    
    document.getElementById("character-info").innerHTML = `Name: ${name} <br>Status: ${status} <br>Species: ${species} <br>Type: ${type} <br>Gender: ${gender} <br>Origin: ${origin} <br>Location: ${location}`;
    document.getElementById("character-img").src = image;
};

function showInfo6() {
    const name = data.results[6].name;
    const status = data.results[6].status;
    const species = data.results[6].species;
    const type = data.results[6].type;
    const gender = data.results[6].gender;
    const origin = data.results[6].origin.name;
    const location = data.results[6].location.name;
    const image = data.results[6].image;
    
    document.getElementById("character-info").innerHTML = `Name: ${name} <br>Status: ${status} <br>Species: ${species} <br>Type: ${type} <br>Gender: ${gender} <br>Origin: ${origin} <br>Location: ${location}`;
    document.getElementById("character-img").src = image;
};

function showInfo7() {
    const name = data.results[7].name;
    const status = data.results[7].status;
    const species = data.results[7].species;
    const type = data.results[7].type;
    const gender = data.results[7].gender;
    const origin = data.results[7].origin.name;
    const location = data.results[7].location.name;
    const image = data.results[7].image;
    
    document.getElementById("character-info").innerHTML = `Name: ${name} <br>Status: ${status} <br>Species: ${species} <br>Type: ${type} <br>Gender: ${gender} <br>Origin: ${origin} <br>Location: ${location}`;
    document.getElementById("character-img").src = image;
};

function showInfo8() {
    const name = data.results[8].name;
    const status = data.results[8].status;
    const species = data.results[8].species;
    const type = data.results[8].type;
    const gender = data.results[8].gender;
    const origin = data.results[8].origin.name;
    const location = data.results[8].location.name;
    const image = data.results[8].image;
    
    document.getElementById("character-info").innerHTML = `Name: ${name} <br>Status: ${status} <br>Species: ${species} <br>Type: ${type} <br>Gender: ${gender} <br>Origin: ${origin} <br>Location: ${location}`;
    document.getElementById("character-img").src = image;
};
