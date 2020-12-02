import pokemon from './data.js';

import data from './data/pokemon/pokemon.js';


/*document.getElementById('pokedex').addEventListener("click", function(evt){
  evt.preventDefault()
  const mostrarPokemon = pokemon.pesquisaPokemon(data)
  console.log(mostrarPokemon)
})*/

const pesquisa = document.getElementById("pesquisar")
pesquisa.addEventListener("click", function (evt) {
    evt.preventDefault()
    const textoPesquisa = document.getElementById("pesquisa-pokemon").value
    const resultado = pokemon.pesquisaPokemon(data, textoPesquisa.toString().toLowerCase())
    exibeCards(resultado)
})
   /* document.getElementById("numero-pokemon").innerHTML = resultado.num
    document.getElementById("imagem-pokemon").src = resultado.img
    document.getElementById("nome-pokemon").innerHTML = resultado.name
    document.getElementById("altura").innerHTML = "Height:"
    document.getElementById("altura-pokemon").innerHTML = resultado.size.height
    document.getElementById("peso").innerHTML = "Weight:"
    document.getElementById("peso-pokemon").innerHTML = resultado.size.weight
    document.getElementById("tipo").innerHTML = "Type:"
    document.getElementById("tipo-pokemon").innerHTML = resultado.type
    document.getElementById("fraqueza").innerHTML = "Weaknesses:"
    document.getElementById("fraqueza-pokemon").innerHTML = resultado.weaknesses*/
    function geraCards(arrayPokemons){
      let card = ""
      for (let pokemon of arrayPokemons) {
        card += `
        <article class="divcard">
        <br>
        <p class="num">${pokemon.num}</p>
        <p class="name">${pokemon.name}</p>
        <img src="${pokemon.img}">
        <p class="texto-card">Height:     ${pokemon.size.height}</p>
        <p class="texto-card">Weight:     ${pokemon.size.weight}</p>
        <p class="texto-card">Type:       ${pokemon.type}</p>
        <p class="texto-card">Weaknesses: ${pokemon.weaknesses}</p>
        <br>
        </article>`
      }
      return card
    }
    function exibeCards(arrayPokemon){
      const cardsPokemon = document.getElementById("tabela-resultado")
      cardsPokemon.innerHTML = ""
      cardsPokemon.innerHTML = geraCards(arrayPokemon)
    }

    exibeCards(data.pokemon)

/*const localTabela = document.getElementById("tabela-resultado")
const conteudoTabela = document.createElement("table")
localTabela.appendChild(conteudoTabela)*/
