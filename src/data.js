export const searchFind = (array, valueTxt) => array.find(item => item.num === valueTxt.toLowerCase())

export const crescent = (array) => array.sort(function (a, b) { return a.name > b.name ? 1 : -1; })

export const decrescent = (array) => array.sort(function (a, b) { return a.name < b.name ? 1 : -1; })

export const searchFilter = (array, valueTxt) => array.filter((item) => item.type.includes(valueTxt))
