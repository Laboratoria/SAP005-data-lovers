export const instantSearch = (searchName, dataJson) => {
    return dataJson.filter(object => object.name.startsWith(searchName))
}

export const selectPokemonType = (selectType, dataJson) => {
    return dataJson.filter(pokemon => pokemon.type.includes(selectType))
}

export const selectPokemonResistant = (selectResistant, dataJson) => {
    return dataJson.filter(pokemon => pokemon.resistant == selectResistant)
}

export const selectPokemonWeaknesses = (selectWeaknesses, dataJson) => {
    return dataJson.filter(pokemon => pokemon.weaknesses == selectWeaknesses)
}

export const selectPokemonGeneration = (selectGeneration, dataJson) => {
    return dataJson.filter(pokemon => pokemon.generation.name === selectGeneration)
}