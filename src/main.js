import { crescente, decrescente } from './data.js';
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

//Code com Manipulação para Todos os Cards:

function padraoAllCards (array){
for (let indice of array) 
{document.getElementById("all-cards").innerHTML += `<div class="mostrar">
<img src="${indice.img}">
<h1>${indice.name.toUpperCase()}<h1>
<p>${indice.num}</p> 
<p>${indice.about}</p> 
<p>${indice.type.toString().replace(",", ", ")}</p>
<p>${indice.resistant.toString().replace(",", ", ")}</p></div>`};
}

function cardAll() {
    document.getElementById("all-cards").innerHTML = "";
    const copiaDB = data.pokemon;
    return padraoAllCards (copiaDB)
};

function ordCrescente() {
    document.getElementById("all-cards").innerHTML = "";
    const copiaDB = data.pokemon;
    const ordenaCres = crescente(copiaDB);
    return padraoAllCards (ordenaCres)
};

function ordDecrescente() {
    document.getElementById("all-cards").innerHTML = "";
    const copiaDB = data.pokemon;
    const ordenaDec = decrescente(copiaDB);
    return padraoAllCards (ordenaDec)
};

//Botões

document.getElementById('btn-generation-pokemon').addEventListener("click", cardAll) //Todos os cards sem tratamento

document.getElementById('btn-cresc-pokemon').addEventListener("click", ordCrescente) //Todos os cards com Ordenação Crescente

document.getElementById('btn-decresc-pokemon').addEventListener("click", ordDecrescente) //Todos os cards com Ordenação Decrescente