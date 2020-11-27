import data from './data/rickandmorty/rickandmorty.js';
export const elements = data.results
export const info = (vector) => {
  return vector.map(function (item){
    return [item.name, item.gender, item.status, item.species]
  })
};
export const filterAllInfo = (data, value) => {
  let arrayFilters = [];
  arrayFilters = elements.filter(item =>{
    if(item[data] === value){
      return item;
    }
  });
  console.log(arrayFilters);
  return arrayFilters
}
export const orderAZ = (item) => {
  return info(item.name).sort();
};
export const orderZA = (item) => {
  return orderAZ(item.name).reverse();
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
  ["Alien", charactersNames.Alien]["Cronenberg", charactersNames.Cronenberg]]
}