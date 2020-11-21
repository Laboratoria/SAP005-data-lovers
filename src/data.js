export const filterData = (data, condicao) => {
  let arrayOfPokemons = [];
  data.pokemon.forEach((pokemon) => condicao(pokemon));
}
