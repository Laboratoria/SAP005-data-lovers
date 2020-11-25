export const selectType = (listaPokemons, filtroType) => (listaPokemons.filter(search => search.type.includes(filtroType)));

export const calcType = (data, filtroType) => {
    const type = data.filter(search => search.type.includes(filtroType));
    return Math.round(((type.length * 100) / data.length) * 100) / 100;
};

export const buscarNome = (data, name) =>
    (data.filter(search => search.name.toUpperCase().includes(name.toUpperCase())));

export const buscarNum = (data, num) =>
    (data.filter(search => search.num.includes(num)));