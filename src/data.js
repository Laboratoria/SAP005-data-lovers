// estas funciones son de ejemplo
import data from './data/rickandmorty/rickandmorty.js';
export const elements = data.results
export const info = (vector) => {
  return vector.map(function (item){
    return [item.name, item.gender, item.gender, item.status, item.species]
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
  ["Unknow", charactersNames.unknow]]
}