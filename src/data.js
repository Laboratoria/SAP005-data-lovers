export const instantSearch = (searchName, dataJson) => {
    return dataJson.filter(object => object.name.startsWith(searchName))
}

export const selectPokemonType = (selectType, dataJson) => {
    return dataJson.filter(pokemon => pokemon.type == selectType)
}

export const selectPokemonResistant = (selectResistant, dataJson) => {
    return dataJson.filter(pokemon => pokemon.type == selectResistant)
}

export const selectPokemonWeaknesses = (selectWeaknesses, dataJson) => {
    return dataJson.filter(pokemon => pokemon.type == selectWeaknesses)
}

export const orderPokemonName = (orderName, dataJson) => {
    return dataJson.filter(pokemon => pokemon.name == orderName)
}