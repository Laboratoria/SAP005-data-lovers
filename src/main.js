import { crescente, decrescente, filtro, buscar } from './data.js';
import data from './data/pokemon/pokemon.js';
const copiaDB = data.pokemon;

function clearCards (){
    document.getElementById("item-all-cards").innerHTML = ""
}

function padraoOneCard(array) {
    let pokecard = "";
    pokecard += `<div id="item-card1">
    <img src="${array.img}">
    <h1>${array.name.toUpperCase()}<h1>
    <p>${array.num}</p> 
    <p>${array.about}</p> 
    <p> <strong>Tipo:</strong> ${array.type.join(' / ')}</p>
    <p> <strong>Resistente:</strong> ${array.resistant.join(' / ')}</p></div>`
    return document.getElementById("item-card-one").innerHTML = pokecard
}

function padraoAllCards(array) {
let pokecards ="";
for (let indice of array) {
pokecards+= `<div class="mostrar">
<img src="${indice.img}">
<h1>${indice.name.toUpperCase()}<h1>
<p>${indice.num}</p> 
<p>${indice.about}</p> 
<p> <strong>Tipo:</strong> ${indice.type.join(' / ')}</p>
<p> <strong>Resistente:</strong> ${indice.resistant.join(' / ')}</p></div>`
}
document.getElementById("item-all-cards").innerHTML = pokecards
}

function cardOne() {
    document.getElementById("item-card-one").innerHTML = "";
    let textoBusca = document.getElementById('txtBusca').value;
    const busca = buscar(copiaDB, textoBusca);
    return padraoOneCard(busca)
};

function cardAll() {
    clearCards();
    return padraoAllCards(copiaDB)
};

function ordCrescente() {
    clearCards();
    const ordenaCres = crescente(copiaDB);
    return padraoAllCards(ordenaCres)
};

function ordDecrescente() {
    clearCards();
    const ordenaDec = decrescente(copiaDB);
    return padraoAllCards(ordenaDec)
};

function buscarnoArray() {
    clearCards();
    let teste2 = document.getElementById("filter-type").value;
    const teste = filtro(copiaDB,teste2);
    return padraoAllCards(teste)
};

//Botões

document.getElementById('btn-generation-pokemon').addEventListener("click", cardAll)

document.getElementById('btn-cresc-pokemon').addEventListener("click", ordCrescente) //Todos os cards com Ordenação Crescente

document.getElementById('btn-decresc-pokemon').addEventListener("click", ordDecrescente) //Todos os cards com Ordenação Decrescente

document.getElementById('btn-filter-type').addEventListener("click", buscarnoArray) //Todos os cards com Ordenação Decrescente

document.getElementById('btn-search-pokemon').addEventListener("click", cardOne);

let input = document.getElementById("txtBusca");
input.addEventListener("keyup", function (event) {
    if  (event.key === 'Enter') {
        event.preventDefault();
        cardOne()
    }
});