function getPokemonIndexFromUrl() {
  const queryString = window.location.search;

  const urlParameters = new URLSearchParams(queryString);

  return urlParameters.get('pokeId');
}; 
function filterData(data,name) {
  return data.filter(pokemon => pokemon.name.includes(name));
}
function filterData(data,condition) {
  return data.filter(pokemon => { 
    if(condition.name != 'undefined' && pokemon.name.includes(condition.name)) {
      return true;
    }
    if(condition.type &&  pokemon.type.indexOf(condition.type) != -1) {
      return true;
    }
    return false;
  });
};
export {getPokemonIndexFromUrl,filterData,};