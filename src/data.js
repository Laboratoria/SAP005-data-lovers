export const imprimeCards = function imprimeCards(rickandMorty){
  let card =""
  for(let cardInfos of rickandMorty){
    card += `
    <article class="divcard">
     <p class="titilo"> Nome: ${cardInfos.name}</p> 
     <img src="${cardInfos.image}">
     <p class="texto-card>"> Status: ${cardInfos.status}</p>
     <p class="texto-card"> Espécie: ${cardInfos.species}</p>
     <p class="texto-card"> Gênero: ${cardInfos.gender}</p>
     <p class="texto-card"> Local de Origem: ${cardInfos.origin.name}</p>
     <p class="texto-card"> Episódio(s) em que aparece: ${cardInfos.episode}</p>
    </article> `
  } 
  return card
}

export const dadosRickemorty = {
  pesquisaPersonagem(data, personagem){
    const pegarDados = data.results
    const pegarNome = personagem.pegarDados.name
  },
  pesquisaEpisodio(data, episodio){
    const pegarDados = data.results
    const pegarEpisodio = episodio.pegarDados.episode
  },
  pesquisaEspecie(data, especie){
    const pegarDados = data.results
    const pegarEspecie = especie.pegarDados.specie
  },
  pesquisaDimensao(data, dimensao){
    const pegarDados = data.results
    const pegarDimensao = dimensao.pegarDados.location.name
  }
};

export const arrayEpisodios = (episodios) =>{ return episodios.map(obj => obj.episode)}

//export const testeFilter = results.filter(genero => genero.gender ==="Male") 


//export const ordemDimensoes = data.sort((a, z)=> a.origin.name.localeCompare(z.origin.name))

//ordenarDimensoes.innerHTML = (data.results.sort((a, z)=> a.location.name.localeCompare(z.location.name)))

//console.log(rickandMorty.filter(obj => obj.name ==="Rick Sanchez"))  
//console.log(rickandMorty.map(obj => obj.name)) 

//const filtro = rickandMorty.filter(obj => obj.name ==="Rick Sanchez"

//export const nomes = rickandMorty.map(obj => obj.name)
//export const ordemCrescente = rickandMorty.sort((primeiro, segundo)=> primeiro.name.localeCompare(segundo.name))
// export const ordemDecrescente = rickandMorty.sort((primeiro, segundo)=> segundo.name.localeCompare(primeiro.name))
