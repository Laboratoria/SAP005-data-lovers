export const instantSearch = (searchName, dataJson) => {
    return dataJson.filter(pokemon => (pokemon.name.startsWith(searchName) ||
        searchName == null || searchName == undefined))
}

export const selectPokemonType = (selectType, dataJson) => {
    return dataJson.filter(pokemon => (pokemon.type.includes(selectType) ||
        selectType == null || selectType == undefined || selectType == ""))
}

export const selectPokemonResistant = (selectResistant, dataJson) => {
    return dataJson.filter(pokemon => (pokemon.resistant.includes(selectResistant) ||
        selectResistant == null || selectResistant == undefined || selectResistant == ""))
}

export const selectPokemonWeaknesses = (selectWeaknesses, dataJson) => {
    return dataJson.filter(pokemon => (pokemon.weaknesses.includes(selectWeaknesses) ||
        selectWeaknesses == null || selectWeaknesses == undefined || selectWeaknesses == ""))
}

export const selectPokemonGeneration = (selectGeneration, dataJson) => {
    return dataJson.filter(pokemon => (pokemon.generation.name === selectGeneration ||
        selectGeneration == null || selectGeneration == undefined || selectGeneration == ""))
}

export const sortPokemonCp = (selectCp, dataJson) => {
    return dataJson.sort((poke1, poke2) => (Number(poke1.stats["max-cp"]) < Number(poke2.stats["max-cp"]) ?
        1 : Number(poke1.stats["max-cp"]) > Number(poke2.stats["max-cp"]) ? -1 : 0) * selectCp)
}

/*export const orderPokemonName = (sortSignal, dataJson) => {
        return dataJson.sort((poke1, poke2) => poke1.name.localeCompare(poke2.name) * sortSignal)
    }*/

/*export const orderPokeNumber = (sortNumber, dataJson) => {
        return dataJson.sort((poke1, poke2) => (poke1.num < poke2.num ? 1 : poke1.num > poke2.num ? -1 : 0) * sortNumber)
    }*/