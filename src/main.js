import {imprimeCards} from './data.js';
//arrayEpisodios, dadosRickemorty, testeFilter
import data from './data/rickandmorty/rickandmorty.js';
//DOM, nós, registro de manejadores de eventos (event listeners ou event handlers)

  const listagemCards = document.getElementById("cards")
  listagemCards.innerHTML = imprimeCards(data.results)

  //console.log(arrayEpisodios(data.results))
  //console.log(testeFilter)
  //console.log(Object.values(data.results))

function listarPersonagens (listaPersonagem){
  let option = ""
  for (let personagem of listaPersonagem){
    option += `<option>${personagem.name}</option>`
  }
  return option
}
(data.results.sort((a, z)=> a.name.localeCompare(z.name)))
const opcoesPersonagens = document.getElementById("personagens")
opcoesPersonagens.innerHTML = listarPersonagens(data.results)

function listarEpisodios (listaEpisodios){
  let option = ""
  for (let episodio of listaEpisodios){
    option += `<option>${episodio.episode}</option>`
  }
  return option
}
//(data.results.sort((a, z)=> a.episode.localeCompare(z.episode)))
const opcoesEpisodios = document.getElementById("episodios")
opcoesEpisodios.innerHTML = listarEpisodios(data.results)

function listarEspecies (listaEspecies){
  let option = ""
  for (let especie of listaEspecies){
    option += `<option>${especie.species}</option>`
  }
  return option
}
(data.results.sort((a, z)=> a.species.localeCompare(z.species)))
const opcoesEspecies = document.getElementById("especies")
opcoesEspecies.innerHTML = listarEspecies(data.results)

function listarDimensoes (listaDimensoes){
  let option = ""
  for (let dimensao of listaDimensoes){
    option += `<option>${dimensao.location.name}</option>`
  }
  return option
}
(data.results.sort((a, z)=> a.location.name.localeCompare(z.location.name)))
const opcoesDimensoes = document.getElementById("dimensoes")
opcoesDimensoes.innerHTML = listarDimensoes(data.results)


const result = data.results
console.log(selecionarPersonagem(result, name))

const pegarEscolha = document.getElementById("personagens")
pegarEscolha.addEventListener("click", (event)=> {
 // console.log(event.target.value) //textcontent
console.log(selecionarPersonagem(result,event.target.textContent))})
// const mostrarPersonagem = document.getElementById("cards")
// mostrarPersonagem.innerHTML = selecionarPersonagem(result, name)

function selecionarPersonagem(result, name){
  //return result.filter(card => card.name.toLowerCase().includes(name.toLowerCase()))
  return result.filter(card => card.name.includes(name))
}
