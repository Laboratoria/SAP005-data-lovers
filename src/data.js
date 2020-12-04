export const searchFind = (array, valueTxt) => {
  return array.find(item => item.num === valueTxt.toLowerCase())
}

export const crescent = (array) => {
  return array.sort(function (a, b) { return a.name > b.name ? 1 : -1; })
}

export const decrescent = (array) => {
  return array.sort(function (a, b) { return a.name < b.name ? 1 : -1; })
}

export const searchFilter = (array, valueTxt) => {
  return array.filter((item) => item.type.includes(valueTxt))
}

// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };