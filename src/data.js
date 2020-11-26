function getPokemonIndexFromUrl() {
  const queryString = window.location.search;

  const urlParameters = new URLSearchParams(queryString);

  return urlParameters.get('pokeId');
}
export {getPokemonIndexFromUrl};