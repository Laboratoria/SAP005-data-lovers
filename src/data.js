export const instantSearch = (searchName, dataJson) => {
    return dataJson.filter(pokemon => (pokemon.name.startsWith(searchName) || searchName == null || searchName == undefined))
}

export const selectPokemonType = (selectType, dataJson) => {
    return dataJson.filter(pokemon => (pokemon.type.includes(selectType) || selectType == null || selectType == undefined || selectType == ""))
}

export const selectPokemonResistant = (selectResistant, dataJson) => {
    return dataJson.filter(pokemon => (pokemon.resistant.includes(selectResistant) || selectResistant == null || selectResistant == undefined || selectResistant == ""))
}

export const selectPokemonWeaknesses = (selectWeaknesses, dataJson) => {
    return dataJson.filter(pokemon => (pokemon.weaknesses.includes(selectWeaknesses) || selectWeaknesses == null || selectWeaknesses == undefined || selectWeaknesses == ""))
}

export const selectPokemonGeneration = (selectGeneration, dataJson) => {
    return dataJson.filter(pokemon => (pokemon.generation.name === selectGeneration || selectGeneration == null || selectGeneration == undefined || selectGeneration == ""))
}

export const orderPokemonName = (orderName, dataJson) => {
    return dataJson.sort((a, b) => {
        const keyA = a.name
        const keyB = b.name
        if (orderName === "a_z") {
            if (keyA < keyB) return -1
            if (keyA > keyB) return 1
        } else {
            if (keyA < keyB) return 1
            if (keyA > keyB) return -1
        }
        return 0
    })
}

export const orderPokeNumber = (orderNum, dataJson) => {
    return dataJson.sort((a1, b2) => {
        const keyA1 = a1.num
        const keyB2 = b2.num
        if (orderNum === "1_251") {
            if (keyA1 < keyB2) return -1
            if (keyA1 > keyB2) return 1
        } else {
            if (keyA1 < keyB2) return 1
            if (keyA1 > keyB2) return -1
        }
        return 0
    })
}