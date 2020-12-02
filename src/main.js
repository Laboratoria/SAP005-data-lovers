
//import nomePersonagem from './data.js';
import data from './data/rickandmorty/rickandmorty.js';
//DOM, nós, registro de manejadores de eventos (event listeners ou event handlers).

/*.addEventListener("click", function(evt){
  evt.preventDefault()*/

function imprimeCards(rickandMorty){
  let card =""
  for(let cardInfos of rickandMorty){
    card += `
    <article class="divcard">
     <p class="titilo"> Nome: ${cardInfos.name}</p> 
     <img src="${cardInfos.image}">
     <p class="texto-card>"> Status: ${cardInfos.status}</p>
     <p class="texto-card"> Espécie: ${cardInfos.species}</p>
     <p class="texto-card"> Gênero: ${cardInfos.gender}</p>
    </article> `
  } 

  //console.log(rickandMorty.filter(obj => obj.name ==="Rick Sanchez"))  
  //console.log(rickandMorty.map(obj => obj.name)) 
  const nomes = rickandMorty.map(obj => obj.name)
  // console.log(rickandMorty.sort((primeiro, segundo)=> primeiro.name.localeCompare(segundo.name)))
  console.log(rickandMorty.sort((primeiro, segundo)=> segundo.name.localeCompare(primeiro.name)))


  return card
}
  const listagemCards = document.getElementById("cards")
  listagemCards.innerHTML = imprimeCards(data.results)

/*

function characterMap() {
	const characterInfo = rickandMorty.results.map(person => {
		return {
			name: person.name
		}
	})

console.log(characterInfo)
}
characterMap()*/
