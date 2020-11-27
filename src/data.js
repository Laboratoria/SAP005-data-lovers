function getPokemonIndexFromUrl() {
  const queryString = window.location.search;

  const urlParameters = new URLSearchParams(queryString);

  return urlParameters.get('pokeId');
};

function filterData(data,condition) {
  return data.filter(pokemon => { 
    if(condition.name != 'undefined' && pokemon.name.includes(condition.name)) {
      return true;
    }
    if(condition.type &&  pokemon.type.indexOf(condition.type) != -1 || condition.type == "") {
      return true;
    }
    return false;
  });
};

function orderData(data) {
  data.sort();
}

export {getPokemonIndexFromUrl, filterData, orderData};