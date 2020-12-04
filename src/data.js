export const searchByName = (name, data) => {
  return data.filter((select) => select.name.includes(name.toLowerCase()));
};

export const selectType = (selectByType, data) => {
  return data.filter((select) => select.type.includes(selectByType));
};

export const orderBy = (orderBy, data) => {
  if (orderBy === 'order-az') {
    data.sort(function(a, b) {
      var textA = a.name.toLowerCase();
      var textB = b.name.toLowerCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
  }

  if (orderBy === 'order-za') {
    data.sort(function(a, b) {
      var textA = a.name.toLowerCase();
      var textB = b.name.toLowerCase();
      return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
    })
  }
  return data;
};