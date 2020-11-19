import { example } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

/* -------------MENU E BOTÕES DESKTOP VERSION------------ */ 

const charactersMenu = document.getElementById("characters-options")
const charactersButton = document.getElementById("characters-button")
const charactersCard = document.getElementById("card-info")
charactersButton.addEventListener("click", showCharacters)


function showCharacters(){
    charactersMenu.style.visibility = "visible"
    charactersCard.style.visibility = "visible"
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




/* --------------ESCOLHA DE PERSONAGENS------------- */


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
    const gender = data.results[0].gender;
    const origin = data.results[0].origin.name;
    const location = data.results[0].location.name;
    const image = data.results[0].image;
    
    document.getElementById("character-info").innerHTML = `Name: ${name} <br>Status: ${status} <br>Species: ${species}  <br>Gender: ${gender} <br>Origin: ${origin} <br>Location: ${location}`;
    document.getElementById("character-img").src = image;
};

function showInfo1() {

    const name = data.results[1].name;
    const status = data.results[1].status;
    const species = data.results[1].species;
    const gender = data.results[1].gender;
    const origin = data.results[1].origin.name;
    const location = data.results[1].location.name;
    const image = data.results[1].image;
    
    document.getElementById("character-info").innerHTML = `Name: ${name} <br>Status: ${status} <br>Species: ${species}  <br>Gender: ${gender} <br>Origin: ${origin} <br>Location: ${location}`;
    document.getElementById("character-img").src = image;
};

function showInfo2() {

    const name = data.results[2].name;
    const status = data.results[2].status;
    const species = data.results[2].species;
    const gender = data.results[2].gender;
    const origin = data.results[2].origin.name;
    const location = data.results[2].location.name;
    const image = data.results[2].image;
    
    document.getElementById("character-info").innerHTML = `Name: ${name} <br>Status: ${status} <br>Species: ${species}  <br>Gender: ${gender} <br>Origin: ${origin} <br>Location: ${location}`;
    document.getElementById("character-img").src = image;
};

function showInfo3() {

    const name = data.results[3].name;
    const status = data.results[3].status;
    const species = data.results[3].species;
    const gender = data.results[3].gender;
    const origin = data.results[3].origin.name;
    const location = data.results[3].location.name;
    const image = data.results[3].image;
    
    document.getElementById("character-info").innerHTML = `Name: ${name} <br>Status: ${status} <br>Species: ${species}  <br>Gender: ${gender} <br>Origin: ${origin} <br>Location: ${location}`;
    document.getElementById("character-img").src = image;
};

function showInfo4() {
  
    const name = data.results[4].name;
    const status = data.results[4].status;
    const species = data.results[4].species;
    const gender = data.results[4].gender;
    const origin = data.results[4].origin.name;
    const location = data.results[4].location.name;
    const image = data.results[4].image;
    
    document.getElementById("character-info").innerHTML = `Name: ${name} <br>Status: ${status} <br>Species: ${species} <br>Gender: ${gender} <br>Origin: ${origin} <br>Location: ${location}`;
    document.getElementById("character-img").src = image;
};

function showInfo5() {

    const name = data.results[5].name;
    const status = data.results[5].status;
    const species = data.results[5].species;
    const gender = data.results[5].gender;
    const origin = data.results[5].origin.name;
    const location = data.results[5].location.name;
    const image = data.results[5].image;
    
    document.getElementById("character-info").innerHTML = `Name: ${name} <br>Status: ${status} <br>Species: ${species}  <br>Gender: ${gender} <br>Origin: ${origin} <br>Location: ${location}`;
    document.getElementById("character-img").src = image;
};

function showInfo6() {

    const name = data.results[6].name;
    const status = data.results[6].status;
    const species = data.results[6].species;
    const gender = data.results[6].gender;
    const origin = data.results[6].origin.name;
    const location = data.results[6].location.name;
    const image = data.results[6].image;
    
    document.getElementById("character-info").innerHTML = `Name: ${name} <br>Status: ${status} <br>Species: ${species}  <br>Gender: ${gender} <br>Origin: ${origin} <br>Location: ${location}`;
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





/* ----------------ESCOLHA DE PERSONAGENS MOBILE--------------------*/


const rickPicMobile = document.getElementById("rick-picture-mobile");
rickPicMobile.addEventListener("click", showMobiInfo0);

const mortyPicMobile = document.getElementById("morty-picture-mobile");
mortyPicMobile.addEventListener("click", showMobiInfo1);

const summerPicMobile = document.getElementById("summer-picture-mobile");
summerPicMobile.addEventListener("click", showMobiInfo2);

const bethPicMobile = document.getElementById("beth-picture-mobile");
bethPicMobile.addEventListener("click", showMobiInfo3);

const jerryPicMobile = document.getElementById("jerry-picture-mobile");
jerryPicMobile.addEventListener("click", showMobiInfo4);

const abadangoPicMobile = document.getElementById("abadango-picture-mobile");
abadangoPicMobile.addEventListener("click", showMobiInfo5);

const abradolfPicMobile = document.getElementById("abradolf-picture-mobile");
abradolfPicMobile.addEventListener("click", showMobiInfo6);

const adjudicatorRickPicMobile = document.getElementById("adjudicator-rick-picture-mobile");
adjudicatorRickPicMobile.addEventListener("click", showMobiInfo7);

const agencyDirectorPicMobile = document.getElementById("agency-director-picture-mobile");
agencyDirectorPicMobile.addEventListener("click", showMobiInfo8);


function showMobiInfo0() {

    const name = data.results[0].name;
    const status = data.results[0].status;
    const species = data.results[0].species;
    const gender = data.results[0].gender;
    const origin = data.results[0].origin.name;
    const location = data.results[0].location.name;
    const image = data.results[0].image;
    
    document.getElementById("character-info-mobile").innerHTML = `Name: ${name} <br>Status: ${status} <br>Species: ${species}  <br>Gender: ${gender} <br>Origin: ${origin} <br>Location: ${location}`;
    document.getElementById("character-img-mobile").src = image;
};

function showMobiInfo1() {

    const name = data.results[1].name;
    const status = data.results[1].status;
    const species = data.results[1].species;
    const gender = data.results[1].gender;
    const origin = data.results[1].origin.name;
    const location = data.results[1].location.name;
    const image = data.results[1].image;
    
    document.getElementById("character-info-mobile").innerHTML = `Name: ${name} <br>Status: ${status} <br>Species: ${species}  <br>Gender: ${gender} <br>Origin: ${origin} <br>Location: ${location}`;
    document.getElementById("character-img-mobile").src = image;
};

function showMobiInfo2() {

    const name = data.results[2].name;
    const status = data.results[2].status;
    const species = data.results[2].species;
    const gender = data.results[2].gender;
    const origin = data.results[2].origin.name;
    const location = data.results[2].location.name;
    const image = data.results[2].image;
    
    document.getElementById("character-info-mobile").innerHTML = `Name: ${name} <br>Status: ${status} <br>Species: ${species}  <br>Gender: ${gender} <br>Origin: ${origin} <br>Location: ${location}`;
    document.getElementById("character-img-mobile").src = image;
};

function showMobiInfo3() {

    const name = data.results[3].name;
    const status = data.results[3].status;
    const species = data.results[3].species;
    const gender = data.results[3].gender;
    const origin = data.results[3].origin.name;
    const location = data.results[3].location.name;
    const image = data.results[3].image;
    
    document.getElementById("character-info-mobile").innerHTML = `Name: ${name} <br>Status: ${status} <br>Species: ${species}  <br>Gender: ${gender} <br>Origin: ${origin} <br>Location: ${location}`;
    document.getElementById("character-img-mobile").src = image;
};

function showMobiInfo4() {
  
    const name = data.results[4].name;
    const status = data.results[4].status;
    const species = data.results[4].species;
    const gender = data.results[4].gender;
    const origin = data.results[4].origin.name;
    const location = data.results[4].location.name;
    const image = data.results[4].image;
    
    document.getElementById("character-info-mobile").innerHTML = `Name: ${name} <br>Status: ${status} <br>Species: ${species} <br>Gender: ${gender} <br>Origin: ${origin} <br>Location: ${location}`;
    document.getElementById("character-img-mobile").src = image;
};

function showMobiInfo5() {

    const name = data.results[5].name;
    const status = data.results[5].status;
    const species = data.results[5].species;
    const gender = data.results[5].gender;
    const origin = data.results[5].origin.name;
    const location = data.results[5].location.name;
    const image = data.results[5].image;
    
    document.getElementById("character-info-mobile").innerHTML = `Name: ${name} <br>Status: ${status} <br>Species: ${species}  <br>Gender: ${gender} <br>Origin: ${origin} <br>Location: ${location}`;
    document.getElementById("character-img-mobile").src = image;
};

function showMobiInfo6() {

    const name = data.results[6].name;
    const status = data.results[6].status;
    const species = data.results[6].species;
    const gender = data.results[6].gender;
    const origin = data.results[6].origin.name;
    const location = data.results[6].location.name;
    const image = data.results[6].image;
    
    document.getElementById("character-info-mobile").innerHTML = `Name: ${name} <br>Status: ${status} <br>Species: ${species}  <br>Gender: ${gender} <br>Origin: ${origin} <br>Location: ${location}`;
    document.getElementById("character-img-mobile").src = image;
};

function showMobiInfo7() {

    const name = data.results[7].name;
    const status = data.results[7].status;
    const species = data.results[7].species;
    const type = data.results[7].type;
    const gender = data.results[7].gender;
    const origin = data.results[7].origin.name;
    const location = data.results[7].location.name;
    const image = data.results[7].image;
    
    document.getElementById("character-info-mobile").innerHTML = `Name: ${name} <br>Status: ${status} <br>Species: ${species} <br>Type: ${type} <br>Gender: ${gender} <br>Origin: ${origin} <br>Location: ${location}`;
    document.getElementById("character-img-mobile").src = image;
};

function showMobiInfo8() {

    const name = data.results[8].name;
    const status = data.results[8].status;
    const species = data.results[8].species;
    const type = data.results[8].type;
    const gender = data.results[8].gender;
    const origin = data.results[8].origin.name;
    const location = data.results[8].location.name;
    const image = data.results[8].image;
    
    document.getElementById("character-info-mobile").innerHTML = `Name: ${name} <br>Status: ${status} <br>Species: ${species} <br>Type: ${type} <br>Gender: ${gender} <br>Origin: ${origin} <br>Location: ${location}`;
    document.getElementById("character-img-mobile").src = image;
};