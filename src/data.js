const nomePersonagem = {
  pesquisaPersonagem(data, personagem){
    const pegarDados = data.results
    const pegarNome = personagem.pegarDados.name

    console.log(pegarNome)


    // const dadosPersonagem = data.results
    // console.log(dadosPersonagem)
    // let busca = dadosPersonagem.find(p => p.name == personagem)
    // console.log(busca)
    // return (busca)

  }
}
export default nomePersonagem
