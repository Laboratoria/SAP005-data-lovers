import pokemon  from './data.js';

import data from './data/pokemon/pokemon.js';

const pesquisa = document.getElementById("pesquisar")
pesquisa.addEventListener("click", function(evt){
    evt.preventDefault()
    const textoPesquisa = document.getElementById("pesquisa-pokemon").value
    console.log(textoPesquisa)
    let resultado = pokemon.pesquisaPokemon(data, textoPesquisa.toString().toLowerCase())
const localNumero = document.getElementById("numero-pokemon")
localNumero.innerHTML = resultado.num
const imagemPokemon = document.getElementById("imagem-pokemon")
imagemPokemon.src = resultado.img
const nomePokemon = document.getElementById("nome-pokemon")
nomePokemon.innerHTML = resultado.name
document.getElementById("altura").innerHTML = "Height:"
const alturaPokemon = document.getElementById("altura-pokemon")
alturaPokemon.innerHTML = resultado.size.height
document.getElementById("peso").innerHTML = "Weight:"
const pesoPokemon = document.getElementById("peso-pokemon")
pesoPokemon.innerHTML = resultado.size.weight
document.getElementById("tipo").innerHTML = "Type:"
const tipoPokemon = document.getElementById("tipo-pokemon")
tipoPokemon.innerHTML = resultado.type
document.getElementById("fraqueza").innerHTML = "Weaknesses:"
const fraquezaPokemon = document.getElementById("fraqueza-pokemon")
fraquezaPokemon.innerHTML = resultado.weaknesses
})


/*const localTabela = document.getElementById("tabela-resultado")
const conteudoTabela = document.createElement("table")
localTabela.appendChild(conteudoTabela)*/
