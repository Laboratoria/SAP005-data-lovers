import nomePersonagem from './data.js';
import data from './data/rickandmorty/rickandmorty.js';
//DOM, nós, registro de manejadores de eventos (event listeners ou event handlers).

function listarPersonagens (lista){
  let option = ""
  for (let personagem of lista){
    option += `<option>${personagem.name}</option>`
  }
  return option
}
const opcoesPersonagens = document.getElementById("personagens")
opcoesPersonagens.innerHTML = listarPersonagens(data.results)

// const personagens = document.getElementById("botaoPersonagens")
// personagens.addEventListener("click", function(evt){
//   evt.preventDefault()
//   const pesquisaPersonagem = document.getElementById("personagens").value
//   let resultado = nomePersonagem.pesquisaPersonagem(data, pesquisaPersonagem.toString())
//   document.getElementById("card1").innerHTML = resultado.species

// })

