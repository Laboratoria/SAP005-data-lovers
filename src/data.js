// estas funciones son de ejemplo
import data from './data/rickandmorty/rickandmorty.js';
export const elements = data.results

export const info = (vector) => {
  return vector.map(function (item){
    return [item.name, item.gender, item.gender, item.status, item.species]
  })
};
export const orderAZ = (item) => {
  return info(item).sort();
};
export const orderZA = (item) => {
  return orderAZ(item).reverse();
}

