import { example } from './data.js';
import data from './data/pokemon/pokemon.js';
//console.log(example, data);
let input = document.getElementById("txtBusca");

function cardUnitario() {
    let textoBusca = Number(document.getElementById('txtBusca').value);
    const arrayN = (textoBusca - 1);
    const arrayDB = data.pokemon;
    const resultado = `<div id="item-card1">
    <img src="${arrayDB[arrayN].img}">
    <h1>${arrayDB[arrayN].name.toUpperCase()}<h1>
    <p>${arrayDB[arrayN].num}</p> 
    <p>${arrayDB[arrayN].about}</p> 
    <p>${arrayDB[arrayN].type.toString().replace(",", ", ")}</p>
    <p>${arrayDB[arrayN].resistant.toString().replace(",", ", ")}</p></div>`
    document.getElementById("card-one").innerHTML = resultado;
    return resultado;
};

input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('btn-search-pokemon').addEventListener("click", cardUnitario());
    }
});

document.getElementById('btn-search-pokemon').addEventListener("click", cardUnitario);

//Code para Campo de Todos os Campos:

let resultadoDisplay = document.getElementById("all-cards");

function cardAll() {
    const copiaDB = data.pokemon;
    for (let indice of copiaDB) {
        resultadoDisplay.innerHTML += `<div class="mostrar">
    <img src="${indice.img}">
    <h1>${indice.name.toUpperCase()}<h1>
    <p>${indice.num}</p> 
    <p>${indice.about}</p> 
    <p>${indice.type.toString().replace(",", ", ")}</p>
    <p>${indice.resistant.toString().replace(",", ", ")}</p></div>`
    }
};

document.getElementById('btn-generation-pokemon').addEventListener("click", cardAll)

function teste() {
    document.getElementById("all-cards").innerHTML = "";
    const copiaDB = data.pokemon;
    copiaDB.sort(function (a, b) { return a.name > b.name })
    for (let indice of copiaDB) {
        document.getElementById("all-cards").innerHTML += `<div class="mostrar">
    <img src="${indice.img}">
    <h1>${indice.name.toUpperCase()}<h1>
    <p>${indice.num}</p> 
    <p>${indice.about}</p> 
    <p>${indice.type.toString().replace(",", ", ")}</p>
    <p>${indice.resistant.toString().replace(",", ", ")}</p></div>`
    }
};

document.getElementById('btn-cresc-pokemon').addEventListener("click", teste)

function teste1() {
    document.getElementById("all-cards").innerHTML = "";
    const copiaDB = data.pokemon;
    copiaDB.sort(function (a, b) { return a.name < b.name })
    for (let indice of copiaDB) {
        document.getElementById("all-cards").innerHTML += `<div class="mostrar">
    <img src="${indice.img}">
    <h1>${indice.name.toUpperCase()}<h1>
    <p>${indice.num}</p> 
    <p>${indice.about}</p> 
    <p>${indice.type.toString().replace(",", ", ")}</p>
    <p>${indice.resistant.toString().replace(",", ", ")}</p></div>`
    }
};

document.getElementById('btn-decresc-pokemon').addEventListener("click", teste1)
