export function getName(allData, name) {
  let filteredName = name[0].toUpperCase() + name.slice(1).toLowerCase();
 return allData.filter(personage => personage.name.startsWith(filteredName))
}

export const sortAZ =(allData) => allData.sort((a, b) => (a.name < b.name) ? - 1 : 1)

export const sortZA =(allData) => allData.sort((a, b) => (a.name > b.name) ? - 1 : 1)

 
