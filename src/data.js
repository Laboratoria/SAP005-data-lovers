function getPokemonIndexFromUrl() {
  const queryString = window.location.search;

  const urlParameters = new URLSearchParams(queryString);

  return urlParameters.get('pokeId');
}; 
function filterData(data,name) {
  return data.filter(pokemon => pokemon.name.includes(name));
}
export {getPokemonIndexFromUrl,filterData};