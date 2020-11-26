export const sortData = (data, sortBy, sortOrder) => {
  const innerSort = (a,b) => {
    const varA = a[sortBy];
    const varB = b[sortBy];

    let comparison = 0;
    if(varA>varB){
      comparison = 1;
    } else if(varA<varB){
      comparison = -1;
    }

    return (sortOrder === "desc") ? (comparison * -1) : comparison
  };
  data.sort(innerSort);
};

export const search = (data, searchBy, searchText) => {
  const searchInData = (item) => {
    return item[searchBy].toUpperCase().includes(searchText.toUpperCase())
  };

  return data.filter(searchInData);
};

export const filter = (data, filterBy, filterName) => {
  const filterData = (item) => {
      return item[filterBy].toUpperCase() === filterName.toUpperCase()
  };

  return data.filter(filterData);
};