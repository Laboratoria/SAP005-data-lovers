import data from './data/rickandmorty/rickandmorty.js';
export const elements = data.results
export const info = (vector) => {
  return vector.map(function (item) {
    return [item.name, item.image, item.gender, item.status, item.species]
  })
};
export const filterAllInfo = (data, value) => {
  let arrayFilters = [];
  arrayFilters = elements.filter(item =>{
    if(item[data] === value){
      return item;
    }
  });
  return arrayFilters
}
export const naturalOrder = (item) => {
  return info(item);
}
export const orderAZ = (item) => {
  return info(item).sort();
};
export const orderZA = (item) => {
  return orderAZ(item).reverse();
}
export const status = (list) => {
  const data = list.map(function(item){
    return item.status
  })
  const charactersNames = data.reduce(function (names, name){
    if (name in names){
      names[name]++;
    } else{
      names[name] = 1;
    }
    return names;
  }, {});
  return [["Alive", charactersNames.Alive],
  ["Dead", charactersNames.Dead], 
  ["unknown", charactersNames.unknow]]
}
export const gender = (list) => {
  const data = list.map(function(item){
    return item.gender
  })
  const charactersNames = data.reduce(function(names, name){
    if (name in names){
      names[name]++;
    }else{
      names[name] = 1;
    }
    return names;
  }, {});
  return [["Female", charactersNames.Female],
  ["Male", charactersNames.Male],
  ["unknown", charactersNames.unknown]]
}
export const species = (list) => {
  const data = list.map(function(item){
    return item.species
  })
  const charactersNames = data.reduce(function(names, name){
    if (name in names){
      names[name]++;
    }else{
      names[name] = 1;
    }return names;
  },{});
  return [["Human", charactersNames.Human],
  ["Humanoid", charactersNames.Humanoid],
  ["Alien", charactersNames.Alien]["Cronenberg", charactersNames.Cronenberg], ["Animal", charactersNames.Animal], ["Robot", charactersNames.Robot]]
}
export const searchNames = (data, name) =>
(data.filter(search => search.name.toUpperCase().includes(name.toUpperCase())));