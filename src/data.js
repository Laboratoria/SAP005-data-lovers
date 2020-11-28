const nomePersonagem = {
  pesquisaPersonagem(data, personagem){
    let dadosPersonagem = data.results
    console.log(dadosPersonagem)
    let busca = dadosPersonagem.find(p => p.name == personagem)
    console.log(busca)
    return (busca) 
    
  }
} 
export default nomePersonagem
