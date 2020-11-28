// estas funciones son de ejemplo

export const crescente = (array) => {
  return array.sort(function(a, b) {
    return a.name > b.name ? 1 : -1;
  });
};

export const decrescente = (array) => {
  return array.sort(function(a, b) {
    return a.name < b.name ? 1 : -1;
  });
};

export const filtro = (array, valor) => {
let retornoArray = array.filter((item) =>  item.type.includes(valor));
return retornoArray
}

export const buscar = (array, valor) => {
  let retornoArray = array.find((item) =>  item.num === valor.toLowerCase());
  return retornoArray
}