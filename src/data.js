export const imprimeCards = function cards(rickandMorty){
    let card = ""

    for(let cardInfos of rickandMorty){
      card += `
      <article class="divcard">
        <p class="titulo"><strong>${cardInfos.name}</strong></p> 
        <img class="imagem" src="${cardInfos.image}">
        <p class="texto-card"><strong> Status: </strong>${cardInfos.status}</p>
        <p class="texto-card"><strong> Espécie: </strong>${cardInfos.species}</p>
        <p class="texto-card"><strong> Gênero: </strong>${cardInfos.gender}</p>
        <p class="texto-card"><strong> Origem: </strong>${cardInfos.origin.name}</p>
        <p class="texto-card"><strong> Número de episódio(s) em que aparece: </strong>${cardInfos.episode.length}</p>
      </article> `
    } 
  return card
}

//export const arrayEpisodios = (episodios) =>{ return episodios.map(obj => obj.origin.name)}