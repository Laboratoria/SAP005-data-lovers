export const filterFunction = (data, filterToSearch, filterName) => data.filter((pokeToCatch) => {
    return pokeToCatch[filterToSearch].includes(filterName);
})