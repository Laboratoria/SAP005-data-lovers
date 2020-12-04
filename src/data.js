export const filterGenderSelected = (dataBase, valueGenderSelected) =>
  dataBase.filter((dataBase) => dataBase.gender === valueGenderSelected);

export const filterStatusSelected = (dataBase, valueStatusSelected) =>
  dataBase.filter((dataBase) => dataBase.status === valueStatusSelected);

export const filterSpeciesSelected = (dataBase, valueSpeciesSelected) =>
  dataBase.filter((dataBase) => dataBase.species === valueSpeciesSelected);

export const sortOrder = (dataBase, valueSpeciesSelected) => {
  const orderAz = (a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
  const orderZa = (b, a) => (b.name > a.name ? 1 : b.name < a.name ? 1 : 0);
  const orderRelevence = (a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
  switch (valueSpeciesSelected) {
    case "az":
      return dataBase.sort((a, b) => orderAz(a, b));
    case "za":
      return dataBase.reverse((b, a) => orderZa(b, a));
    case "relevance":
      return dataBase.sort((a, b) => orderRelevence(a, b));
  }
};

export const calcGender = (dataBase, selectedGender) =>
  parseFloat((selectedGender.length * 100) / dataBase.length).toFixed(2);

export const calcStatus = (dataBase, selectedStatus) =>
  parseFloat((selectedStatus.length * 100) / dataBase.length).toFixed(2);

export const calcSpecies = (dataBase, selectedSpecies) =>
  parseFloat((selectedSpecies.length * 100) / dataBase.length).toFixed(2);
