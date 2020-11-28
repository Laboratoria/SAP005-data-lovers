// estas funciones son de ejemplo

export const searchFind = (array, valueTxt) => {
  let retornoArray = array.find((item) =>  item.num === valueTxt.toLowerCase());
  return retornoArray
};

export const crescent = (array) => {
  return array.sort(function(a, b) {
    return a.name > b.name ? 1 : -1;
  });
};

export const decrescent = (array) => {
  return array.sort(function(a, b) {
    return a.name < b.name ? 1 : -1;
  });
};

export const searchFilter = (array, valueTxt) => {
let retornoArray = array.filter((item) =>  item.type.includes(valueTxt));
return retornoArray
};
