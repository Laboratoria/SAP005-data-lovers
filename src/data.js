import {printStatistic} from './main.js';
export const sortByAlphabeticOrder = (data, condition) => {
  let charactersOder = "";
  if (condition === "az") {
    charactersOder = data.sort(function (a, b) {
      if (a.name.toUpperCase() < b.name.toUpperCase()) return -1;
      if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
      return 0;
    })
  } else {
    charactersOder = data.sort(function (a, b) {
      if (a.name.toUpperCase() > b.name.toUpperCase()) return -1;
      if (a.name.toUpperCase() < b.name.toUpperCase()) return 1;
      return 0;
    })
  };
  return charactersOder;
};
export const searchByLocation = (data, condition) => {
  const filterLocation = data.filter((item) => ((item.location.name).toUpperCase()).includes(`${condition}`));
  return filterLocation;
};
export const filterByGender = (data, condition) => {
  const characters = data;
  const category = condition;
  const filterResult = data.filter((item) => item.gender === condition);
  statisticData(characters, filterResult, category);
  return filterResult;
};
export const filterByStatus = (condition) => {
  const category = condition;
  const filterResult = characters.filter((item) => item.status === condition);
  createCards(filterResult);
  statisticData(filterResult, category);
};
export const filterBySpecies = (condition) => {
  const category = condition;
  const filterResult = characters.filter((item) => item.species === condition);
  createCards(filterResult);
  statisticData(filterResult, category);
};
export const statisticData = (dataBase, data, condition) => {
  const category = condition;
  const percentage = Math.round((data.length * 100) / dataBase.length);
  printStatistic (percentage, category);
};



















/*
evento de teclado input search
em, rem CSS
o map() aplica uma função à todos os elementos de uma array | aplicar a função de mudar episódios
template string: ``
place holder: ${} criar variáveis dentro do HTML criado no JS / pode executar uma função aqui tb / funciona como JS normalmente
for each () - for of e o primeiro for do cipher
map (retorna uma array), forEach (só executa), filter (resultado do filtro dentro de uma array), find (só retorna o que ele encontrou, objeto fora de array), includes (true or false - boolean)
typeOf array vem como objeto / isArray
para que serve o preventDefault()
reverse() - sort
% CSS é a porcentagem en relação ao elemento pai e não à tela
display: none;
visibility: hidden; deixa o espaço em branco
trocar classe com o JS
- add.classlist? coisa assim??
- [OFF]  aí a linha ficou assim: <p class=${eachCard.type === "" ? "invisible type" : "type"}>Type: ${eachCard.type}</p> ai ele já coloca dentro da classe o invisible
*
/*function getEpisodeNumber(data) {
  for (let item of data) {
    let numberOfEpisodes = item.episode.length;
  };
};
getEpisodeNumber(characters);
console.log(numberOfEpisodes);
*/

/*function filterData(condition1, condition2, condition3){
  const filterByGender = characters.filter((item) => item.gender === condition1);
  const filterByStatus = characters.filter((item) => item.status === condition2);
  const filterBySpecies = characters.filter((item) => item.species === condition3);
  const filterMorty = filterByGender.filter(value => filterByStatus.includes(value));
  const filterResults = filterMorty.filter(value => filterBySpecies.includes(value));
  createCards(filterResults);
};
*/
/*
tentar fazer filtro por temporada
let firstEpisode = (item.episode[0]).substr(40, 39);
const episodeIndex = firstEpisode - 1;
episodesList[episodeIndex].name
*/