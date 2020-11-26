import { crescente, decrescente, filtro } from './data.js';
import data from './data/pokemon/pokemon.js';
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
    <p> <strong>Tipo:</strong> ${arrayDB[arrayN].type.join(' / ')}</p>
    <p> <strong>Resistente:</strong>  ${arrayDB[arrayN].resistant.join(' / ')}</p></div>`
    document.getElementById("item-card-one").innerHTML = resultado;
    return resultado;
};

input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('btn-search-pokemon').addEventListener("click", cardUnitario());
    }
});

document.getElementById('btn-search-pokemon').addEventListener("click", cardUnitario);

//Code com Manipulação para Todos os Cards:

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

function cardAll() {
    document.getElementById("item-all-cards").innerHTML = "";
    const copiaDB = data.pokemon;
    return padraoAllCards(copiaDB)
};

function ordCrescente() {
    document.getElementById("item-all-cards").innerHTML = "";
    const copiaDB = data.pokemon;
    const ordenaCres = crescente(copiaDB);
    return padraoAllCards(ordenaCres)
};

function ordDecrescente() {
    document.getElementById("item-all-cards").innerHTML = "";
    const copiaDB = data.pokemon;
    const ordenaDec = decrescente(copiaDB);
    return padraoAllCards(ordenaDec)
};

function buscarnoArray() {
    //document.getElementById("item-all-cards").innerHTML = ""
    let teste2 = document.getElementById("filter-type").value;
    console.log(teste2)
    const copiaDB = data.pokemon;
    const teste = filtro(copiaDB,teste2);
    return padraoAllCards(teste)
};

//Botões

document.getElementById('btn-generation-pokemon').addEventListener("click", cardAll) //Todos os cards sem tratamento

document.getElementById('btn-cresc-pokemon').addEventListener("click", ordCrescente) //Todos os cards com Ordenação Crescente

document.getElementById('btn-decresc-pokemon').addEventListener("click", ordDecrescente) //Todos os cards com Ordenação Decrescente

document.getElementById('btn-filter-type').addEventListener("click", buscarnoArray) //Todos os cards com Ordenação Decrescente