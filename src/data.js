export const namePokemon = ((dataPokemon, searchName) => {
  return (dataPokemon.filter(item => item.name.includes(searchName.toLowerCase())))
});

export const typePokemon = ((dataPokemon, filterType) => {
  return (dataPokemon.filter(item => item.type.includes(filterType)))
});

export const calculusPokemon = ((dataPokemon, filterTypePokemon) => {
  return (filterTypePokemon.length * 100 / dataPokemon.length)
});

export const orderPokemon = ((dataPokemon, order) => {
  switch (order) {
    case "A-Z":
      return dataPokemon.sort((a, b) => {
        return (a.name < b.name) ? -1 : 1
      });
    case "Z-A":
      return dataPokemon.sort((a, b) => {
        return (a.name > b.name) ? -1 : 1
      });
    case "0-251":
      return dataPokemon.sort((a, b) => {
        return (Number(a.num - b.num))
      });
  }
});