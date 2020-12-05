import dadosRickemorty from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

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


function imprimeCards(rickandMorty){
  let card =""
  for(let cardInfos of rickandMorty){
    card += `
    <article class="divcard">
     <p class="titulo"> ${cardInfos.name}</p>
     <img src="${cardInfos.image}">
     <p class="texto-card"> Status: ${cardInfos.status}</p>
     <p class="texto-card"> Espécie: ${cardInfos.species}</p>
     <p class="texto-card"> Gênero: ${cardInfos.gender}</p>
    </article> `
  }
  //console.log(rickandMorty.filter(obj => obj.name ==="Rick Sanchez"))
  //console.log(rickandMorty.map(obj => obj.name))
  const nomes = rickandMorty.map(obj => obj.name)
  console.log(rickandMorty.sort((primeiro, segundo)=> primeiro.name.localeCompare(segundo.name)))
  //(rickandMorty.sort((primeiro, segundo)=> segundo.name.localeCompare(primeiro.name)))
  return card
}
const listagemCards = document.getElementById("cards")
listagemCards.innerHTML = imprimeCards(data.results)



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

