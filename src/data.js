/*filterData(data, condition): esta função receberia os dados e nos retornaria os que cumprem com a condição.
sortData(data, sortBy, sortOrder): esta função recebe três parâmetros. O primeiro, data, nos entrega os dados. O segundo, sortBy, diz respeito a qual das informações quer usar para ordenar. O terceiro, sortOrder, indica se quer ordenar de maneira crescente ou decrescente.
computeStats(data): essa função nos permite fazer cálculos estatísticos básicos para serem exibidos de acordo com o que os dados permitem.
*/

const pokemon = {
  pesquisaPokemon(data, nomePokemon) {
    const listaPokemon = data.pokemon
    let busca = listaPokemon.filter(p => p.name == nomePokemon)
    return (busca)
  },
  filtrarLendarios(data) {
    const listaPokemon = data.pokemon
    const lendarios = listaPokemon.filter(p => p['pokemon-rarity'] === 'legendary')
    console.log(lendarios)
    return (lendarios)
  },
  ordenarPokemon(pokemons, valorOpcao) {
    console.log(pokemons)
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