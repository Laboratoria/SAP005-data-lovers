import nomePersonagem from './data.js';
import data from './data/rickandmorty/rickandmorty.js';
//DOM, nós, registro de manejadores de eventos (event listeners ou event handlers).
const personagens = document.getElementById("botaoPersonagem")
personagens.addEventListener("click", function(evt){
  evt.preventDefault()
  const pesquisaPersonagem = document.getElementById("personagens").value
  let resultado = nomePersonagem.pesquisaPersonagem(data, pesquisaPersonagem.toString())
  document.getElementById("card1").innerHTML = resultado.species

})
