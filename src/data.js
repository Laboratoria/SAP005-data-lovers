const dadosRickemorty = {
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
export default dadosRickemorty
