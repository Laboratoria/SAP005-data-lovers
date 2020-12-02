const nomePersonagem = {
  pesquisaPersonagem(data, personagem){
    let dadosPersonagem = data.results
    console.log(dadosPersonagem)
    let busca = dadosPersonagem.find(p => p.name == personagem)
    console.log(busca)
    return (busca) 
    
  }
}

/*const listaPersonagens = {
  listaPersonagens(data){
    for(let lista of data){
    document.getElementById("characters").innerHTML = results.name;
     }
  }
}*/

export default {nomePersonagem}
