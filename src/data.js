const pokemon = {
  pesquisaPokemon(data, nomePokemon) {
    const listaPokemon = data.pokemon
    const tipoParametro = typeof nomePokemon
    if (typeof  tipoParametro === 'number'|| typeof  tipoParametro === 'undefined') {
      throw new TypeError('Coloque o nome do Pokémon')
    } else if (typeof nomePokemon === 'string') {
      let busca = listaPokemon.filter(p => p.name == nomePokemon)
      return (busca)
    }
  },
  filtrarLendarios(data) {
    const listaPokemon = data.pokemon
    const lendarios = listaPokemon.filter(p => p['pokemon-rarity'] === 'legendary')
    return (lendarios)
  },
  calculoAgregado(data, pesquisado) {
    const quantPesquisado = pesquisado.length
    const listaPokemon = data.pokemon
    const quantPokemons = listaPokemon.length
    const porcPesquisado = (quantPesquisado * 100) / quantPokemons
    return (porcPesquisado.toFixed(1))
  },
  ordenarPokemon(pokemons, valorOpcao) {
    if (valorOpcao == 'az') {
      pokemons = pokemons.sort(function (a, b) {
        return a.name.localeCompare(b.name)
      })
    } else {
      pokemons = pokemons.sort(function (a, b) {
        return b.name.localeCompare(a.name)
      })
    }

    return pokemons
  }
}

export default pokemon



