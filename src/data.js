/*filterData(data, condition): esta função receberia os dados e nos retornaria os que cumprem com a condição.
sortData(data, sortBy, sortOrder): esta função recebe três parâmetros. O primeiro, data, nos entrega os dados. O segundo, sortBy, diz respeito a qual das informações quer usar para ordenar. O terceiro, sortOrder, indica se quer ordenar de maneira crescente ou decrescente.
computeStats(data): essa função nos permite fazer cálculos estatísticos básicos para serem exibidos de acordo com o que os dados permitem.
*/
const pokemon = {
  pesquisaPokemon(data, nomePokemon) {
   let listaPokemon = data.pokemon
   console.log(listaPokemon)
   let busca = listaPokemon.find(p => p.name == nomePokemon)
   return (busca)
 }
}

export default pokemon