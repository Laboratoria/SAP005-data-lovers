const pokemon = {
  pesquisaPokemon(data, nomePokemon) {
    console.log(nomePokemon)
   let listaPokemon = data.pokemon
   console.log(listaPokemon)
   let busca = listaPokemon.find(i => i.name == nomePokemon)
   console.log(busca)
   return (busca)

 }

}

export default pokemon